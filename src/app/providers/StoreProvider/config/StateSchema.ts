import { userApi, type UserReducerReturnType, type UserSchema } from 'entities/User';
import { ReducersMapObject } from 'redux';
import {
  UnknownAction, EnhancedStore, Reducer,
} from '@reduxjs/toolkit';
import type { LoginSchema } from 'features/AuthUser';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router/dist/lib/hooks';

export interface StateSchema {
  // Асинхронные
  [userApi.reducerPath]: UserReducerReturnType;
  user?: UserSchema;
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtra {
  api: AxiosInstance,
  navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
  extra: ThunkExtra,
  rejectValue: T,
  state: StateSchema,
}
