import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
    initialState,
  } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}

export default componentRender;
