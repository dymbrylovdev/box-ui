import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { ThemeProvider } from 'features/theme';
import './shared/config/i18n/i18n';
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18n";

const App = lazy(async () => import('./app'));

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
