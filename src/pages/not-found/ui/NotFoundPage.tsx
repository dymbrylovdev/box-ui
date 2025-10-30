import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './NotFoundPage.module.scss';

interface IProps {
  className?: any;
}

const NotFoundPage: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.container, {}, [className])}>
      {t('нет такой страницы')}
    </div>
  );
};

export default NotFoundPage;
