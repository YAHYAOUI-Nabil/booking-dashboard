import { privateApi } from "../private";

export const productApi = privateApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, { currentPage: number; title: string }>({
      query: (arg) => ({
        url: `/products/pagination?page=${arg.currentPage}&title=${arg.title}`,
        method: "GET",
      }),
    }),
    createProduct: builder.mutation<any, void>({
      query: (arg) => ({
        url: "/products/create-new-product",
        method: "POST",
        data: arg,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useCreateProductMutation } = productApi;
