import { IUser } from '../../../model/types/userSchema';
import { userApi } from '../userAPI';

const userSplitApi = userApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUser, number>({
      query: (id) => 'users/',
    }),
    authUser: builder.mutation<IUser, { username: string, password: string } >({
      query: (body) => ({
        url: 'login/',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export type UserReducerReturnType = ReturnType<typeof userApi.reducer>;
export const { useGetUsersQuery, useAuthUserMutation } = userSplitApi;
