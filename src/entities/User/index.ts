import type { UserSchema } from './model/types/userSchema';
import { IUser } from './model/types/userSchema';

export { userReducer, userActions } from './model/slice/userSlice';

export {
  useGetUsersQuery,
  userApi,
  UserReducerReturnType,
  useAuthUserMutation,
} from './servises/userAPI';

export {
  UserSchema,
  IUser,
};
