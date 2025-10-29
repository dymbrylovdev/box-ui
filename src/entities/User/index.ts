import type { UserSchema, IUser } from './model/types/userSchema';
import {
  userReducer,
  userActions,
} from './model/slice/userSlice';

export { fetchUserById } from './servises/asyncThunks/fetchUserById';
export {
  useGetUsersQuery,
  useAuthUserMutation,
} from './servises/RTKQuery/splitEndpoints/userSplitApi';
export type { UserReducerReturnType } from './servises/RTKQuery/splitEndpoints/userSplitApi';

export {
  userApi,
} from './servises/RTKQuery/userAPI';

export type {
  UserSchema,
  IUser,
};

export {
  userReducer,
  userActions,
};
