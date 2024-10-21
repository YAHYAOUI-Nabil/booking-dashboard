// import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";

// import { baseUrl } from "../baseUrl";
// import { RootState } from "../../store/reducers";
// import axios, { AxiosError, AxiosRequestConfig } from "axios";

// const baseQueryWithReauth: BaseQueryFn<
//   {
//     url: string;
//     method?: AxiosRequestConfig["method"];
//     data?: AxiosRequestConfig["data"];
//     params?: AxiosRequestConfig["params"];
//     headers?: AxiosRequestConfig["headers"];
//   },
//   unknown,
//   unknown
// > = async ({ url, method, data, params, headers }, api) => {
//   const currentState = api.getState() as RootState;
//   const accessToken = currentState.auth.currentUser?.accessToken;
//   try {
//     const result = await axios.request({
//       url: `${baseUrl}${url}`,
//       method,
//       data,
//       params,
//       headers: {
//         ...headers,
//         Authorization: `Bearer ${accessToken}`,
//       },
//       withCredentials: true,
//     });

//     return { data: result.data };
//   } catch (axiosError) {
//     const err = axiosError as AxiosError;
//     return {
//       error: {
//         status: err.response?.status,
//         data: err.response?.data || err.message,
//       },
//     };
//   }
// };

// export const privateApi = createApi({
//   reducerPath: "privateApi",
//   baseQuery: baseQueryWithReauth,
//   endpoints: () => ({}),
//   tagTypes: [],
// });

import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";

import { baseUrl } from "../baseUrl";
import { RootState } from "../../store/reducers";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { unsetCurrentUser, updateToken } from "../../store/authSlice";

const mutex = new Mutex();
const baseQueryWithReauth: BaseQueryFn<
  {
    url: string;
    method?: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
  },
  unknown,
  unknown
> = async ({ url, method, data, params, headers }, api) => {
  const currentState = api.getState() as RootState;
  const accessToken = currentState.auth.currentUser?.accessToken;
  await mutex.waitForUnlock();
  try {
    const result = await axios.request({
      url: `${baseUrl}${url}`,
      method,
      data,
      params,
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });

    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    if (err.response?.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          const response = await axios.request({
            url: `${baseUrl}/auth/refresh`,
            method: "POST",
            withCredentials: true,
          });
          api.dispatch(updateToken(response.data));
          try {
            const result = await axios.request({
              url: `${baseUrl}${url}`,
              method,
              data,
              params,
              headers: {
                ...headers,
                Authorization: `Bearer ${response.data.accessToken}`,
              },
              withCredentials: true,
            });
            return { data: result.data };
          } catch (axiosError) {
            const err = axiosError as AxiosError;
            return {
              error: {
                status: err.response?.status,
                data: err.response?.data || err.message,
              },
            };
          }
        } catch (axiosError) {
          const err = axiosError as AxiosError;
          api.dispatch(unsetCurrentUser());
          return {
            error: {
              status: err.response?.status,
              data: err.response?.data || err.message,
            },
          };
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        try {
          const result = await axios.request({
            url: `${baseUrl}${url}`,
            method,
            data,
            params,
            headers: {
              ...headers,
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          });

          return { data: result.data };
        } catch (axiosError) {
          const err = axiosError as AxiosError;
          return {
            error: {
              status: err.response?.status,
              data: err.response?.data || err.message,
            },
          };
        }
      }
    }
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};

export const privateApi = createApi({
  reducerPath: "privateApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ["Users"],
});
