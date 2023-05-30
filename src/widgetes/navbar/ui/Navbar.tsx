import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib';
import cls from './Navbar.module.scss';

interface IProps {
  className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={ClassNames(cls.navbar, {}, [className])}>
      <div />
    </div>
  );
};
