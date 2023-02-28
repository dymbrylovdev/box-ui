import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { ThemeProvider } from 'features/theme';
import './shared/config/i18n/i18n';

const App = lazy(async () => import('./app'));

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
