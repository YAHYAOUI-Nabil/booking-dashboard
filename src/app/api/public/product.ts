import { publicApi } from "../public";

export const authApi = publicApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, void>({
      query: () => ({ url: "/products", method: "GET" }),
    }),
  }),
});

export const { useGetAllProductsQuery } = authApi;
