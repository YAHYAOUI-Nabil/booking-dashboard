import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";

import { baseUrl } from "../baseUrl";
import { RootState } from "../../store/reducers";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

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
};

export const privateApi = createApi({
  reducerPath: "privateApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: [],
});
