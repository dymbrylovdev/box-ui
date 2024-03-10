import { configureStore } from '@reduxjs/toolkit';
import { ReducersMapObject } from 'redux';
import { counterReducer } from '../../../../entities/Counter';
import { userApi, userReducer } from '../../../../entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer : ReducersMapObject<StateSchema> = {
    [userApi.reducerPath]: userApi.reducer,
    counter: counterReducer,
    user: userReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    // @ts-ignore
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(userApi.middleware),
  });
}
