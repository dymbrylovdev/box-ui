import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from 'redux';
import { loginReducer } from 'features/AuthUser';
import { ReducersList } from 'shared/lib';

const defaultAsyncReducers : ReducersList = {
  loginForm: loginReducer,
};
export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
