import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'app/providers/router';
import { LoaderPage } from 'pages/loader';

export const AppRouter = () => (
  <Suspense fallback={(
    <div style={{ flex: 1 }}>
      <LoaderPage />
    </div>
  )}
  >
    <Routes>
      {Object.values(RouterConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page-wrapper">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);
