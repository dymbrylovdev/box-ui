import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { ThemeProvider } from 'features/Theme';
import './shared/config/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/errorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

const App = lazy(async () => import('./app'));

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StoreProvider>
    <ErrorBoundary>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </I18nextProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StoreProvider>,
);
