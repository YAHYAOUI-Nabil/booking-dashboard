import { User } from "../../models/User";
import { publicApi } from "../public";

export const authApi = publicApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<User, { username: string; password: string }>({
      query: (arg) => ({ url: "/auth/login", method: "POST", data: arg }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
