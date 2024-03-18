import type { UserSchema } from './model/types/userSchema';
import { IUser } from './model/types/userSchema';
import {
  userReducer,
  userActions,
} from './model/slice/userSlice';

export { fetchUserById } from './servises/asyncThunks/fetchUserById';
export {
  useGetUsersQuery,
  UserReducerReturnType,
  useAuthUserMutation,
} from './servises/RTKQuery/splitEndpoints/userSplitApi';

export {
  userApi,
} from './servises/RTKQuery/userAPI';

export {
  UserSchema,
  IUser,
  userReducer,
  userActions,
};
