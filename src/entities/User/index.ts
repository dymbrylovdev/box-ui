import type { UserSchema } from './model/types/userSchema';

export { useGetUsersQuery, userApi, UserReducerReturnType } from './servises/userAPI';

export { userReducer } from './model/slice/userSlice';

export {
  UserSchema,
};
