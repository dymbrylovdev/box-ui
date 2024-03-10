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
  const login = async () => {
    try {
      const authData = {
        username: 'admin',
        password: '123',
      };
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(data);

  if (isLoading) {
    return (
      <div style={{ height: '100%' }}>
        <LoaderPage />
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className])}>
      <Button onClick={login}>
        {t('MAIN')}
      </Button>
    </div>
  );
};

export default MainPage;
