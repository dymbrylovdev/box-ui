import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { classNames } from 'shared/lib';
import { useTheme } from 'features/Theme';
import { SidebarList } from 'widgets/Sidebar/SidebarList';
import { Navbar } from 'widgets/Navbar';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const Index = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>Translate...</div>}>
        <Navbar />
        <div className="container-content">
          <SidebarList />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default Index;
