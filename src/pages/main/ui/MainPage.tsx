import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib';
import axios from 'axios';
import { Button } from 'shared/ui';

interface IProps {
  className?: any;
}

const MainPage: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const login = async () => {
    try {
      const authData = {
        username: 'admin',
        password: '1213',
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

  useEffect(() => {
  }, []);

  return (
    <div className={ClassNames('', {}, [className])}>
      <Button onClick={login} />
    </div>
  );
};

export default MainPage;
