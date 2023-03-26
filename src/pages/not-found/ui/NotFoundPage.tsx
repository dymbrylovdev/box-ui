import React, { FC } from 'react';
import { ClassNames } from 'shared/lib/halpers/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface IProps {
  className?: any;
}

const NotFoundPage: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={ClassNames(cls.container, {}, [className])}>
      {t('NOT_FOUND')}
    </div>
  );
};

export default NotFoundPage;
