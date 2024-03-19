import { userApi, UserReducerReturnType, UserSchema } from 'entities/User';
import { ReducersMapObject } from 'redux';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer,
} from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthUser';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
  // Асинхронные
  [userApi.reducerPath]: UserReducerReturnType;
  user?: UserSchema;
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
