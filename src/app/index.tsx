import React, { Suspense } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgetes/navbar';
import { ClassNames } from 'shared/lib';
import { useTheme } from 'features/theme';
import { Sidebar } from 'widgetes/sidebar';

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className={ClassNames('app', {}, [theme])}>
      <Suspense fallback={<div>Translate...</div>}>
        <Navbar />
        <div className="container-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default Index;
