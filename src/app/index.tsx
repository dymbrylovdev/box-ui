import React, { Suspense } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgetes/Navbar';
import { classNames } from 'shared/lib';
import { useTheme } from 'features/Theme';
import { Sidebar } from 'widgetes/Sidebar';

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [])}>
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
