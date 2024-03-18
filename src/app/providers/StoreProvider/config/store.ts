import { configureStore } from '@reduxjs/toolkit';
import { ReducersMapObject } from 'redux';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { counterReducer } from '../../../../entities/Counter';
import { fetchUserById, userApi, userReducer } from '../../../../entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    [userApi.reducerPath]: userApi.reducer,
    counter: counterReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
      {
        thunk: {
          extraArgument: fetchUserById,
        },
      },
    ).prepend(userApi.middleware),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
