import { FC, Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import axios from 'axios';
import { Button } from 'shared/ui';
import { useGetUsersQuery } from 'entities/User';
import { LoaderPage } from 'pages/loader';

interface IProps {
  className?: any;
}

const MainPage: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return (
      <div style={{ height: '100%' }}>
        <LoaderPage />
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className])} />
  );
};

export default MainPage;
