import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, type AppDispatch } from './config/store';
import type { StateSchema, ThunkConfig } from './config/StateSchema';
import { createReducerManager } from './config/reducerManager';

export {
  StoreProvider,
  createReduxStore,
  createReducerManager,
};

export type {
  StateSchema,
  AppDispatch,
  ThunkConfig,
};
