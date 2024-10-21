import { Admin, RegisterInput, UpdatePasswordInput } from "../../models/User";
import { privateApi } from "../private";

export const userApi = privateApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<Admin[], void>({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Users", id } as const)),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
    createNewUser: builder.mutation<void, RegisterInput>({
      query: (arg) => ({
        url: "/users/create-new-user",
        method: "POST",
        data: arg,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    updatePassword: builder.mutation<void, UpdatePasswordInput>({
      query: (arg) => ({
        url: "/users/update-password",
        method: "PUT",
        data: arg,
      }),
    }),
    deleteUser: builder.mutation<void, { id: string }>({
      query: (arg) => ({
        url: `/users/delete-user/${arg.id}`,
        method: "DELETE",
        data: arg,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useCreateNewUserMutation,
  useUpdatePasswordMutation,
  useDeleteUserMutation,
} = userApi;
