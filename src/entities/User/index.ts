import { userActions, userReducer } from './model/slice/userSlice';

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
} from './model/types/userSchema';

export {
  userReducer,
  userActions,
};
