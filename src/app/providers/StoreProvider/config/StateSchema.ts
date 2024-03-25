import { userApi, UserReducerReturnType, UserSchema } from 'entities/User';
import { Dispatch, ReducersMapObject } from 'redux';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer,
} from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthUser';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios/index';

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

export interface ThunkExtra {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  extra: ThunkExtra,
  rejectWithValue: T
}
