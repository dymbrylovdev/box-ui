import { CounterSchema } from 'entities/Counter';
import { userApi, UserReducerReturnType, UserSchema } from 'entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  [userApi.reducerPath]: UserReducerReturnType;
}
