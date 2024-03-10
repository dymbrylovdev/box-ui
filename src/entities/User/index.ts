import type { UserSchema } from './model/types/userSchema';

import { useGetUsersQuery, userApi, UserReducerReturnType } from './servises/userAPI';

export { userReducer } from './model/slice/userSlice';

export {
  UserSchema,
  useGetUsersQuery,
  userApi,
  UserReducerReturnType,
};
