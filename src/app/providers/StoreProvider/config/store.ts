import {
  configureStore, Reducer,
} from '@reduxjs/toolkit';
import { ReducersMapObject } from 'redux';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/config';
import { userApi } from 'entities/User';
import { NavigateFunction } from 'react-router/dist/lib/hooks';
import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    [userApi.reducerPath]: userApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
      {
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      },
    ).concat(userApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
