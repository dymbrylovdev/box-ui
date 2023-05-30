import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib';

interface IProps {
  className?: any;
}

const MainPage: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={ClassNames('', {}, [className])}>
      {t('MAIN')}
    </div>
  );
};

export default MainPage;
