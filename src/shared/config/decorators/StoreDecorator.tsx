import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from 'redux';
import { loginReducer } from 'features/AuthUser';
import { ReducersList } from 'shared/lib';
import { userReducer } from 'entities/User';

const defaultAsyncReducers : ReducersList = {
  loginForm: loginReducer,
  user: userReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: StoryFn) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
