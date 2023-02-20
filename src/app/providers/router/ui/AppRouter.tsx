import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterConfig} from "app/providers/router";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Routes>
        {Object.values(RouterConfig).map(({element, path}) =>
          <Route
            key={path}
            path={path}
            element={<div className='page-wrapper'>{element}</div>}/>
        )}
      </Routes>
    </Suspense>
  );
};
