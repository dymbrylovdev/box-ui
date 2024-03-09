import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
  } = props;

  const store = createReduxStore(initialState as StateSchema);
  setupListeners(store.dispatch);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
