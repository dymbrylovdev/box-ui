import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface componentRenderOptions {
  route?: string;
}

function ComponentRender(component: ReactNode, options: componentRenderOptions = {}) {
  const {
    route = '/',
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  );
}

export default ComponentRender;
