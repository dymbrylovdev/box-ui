import type { UserSchema } from './model/types/userSchema';
import { IUser } from './model/types/userSchema';

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
  userReducer,
  userActions,
} from './model/slice/userSlice';
export {
  UserSchema,
  IUser,
};
