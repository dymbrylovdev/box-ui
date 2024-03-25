import {
  CombinedState, configureStore, Reducer,
} from '@reduxjs/toolkit';
import { ReducersMapObject } from 'redux';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/config';
import { userApi } from '../../../../entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    [userApi.reducerPath]: userApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
      {
        thunk: {
          extraArgument: {
            api: $api,
          },
        },
      },
    ).prepend(userApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
