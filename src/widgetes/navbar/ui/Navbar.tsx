import React, { FC } from 'react';
import { ClassNames } from 'shared/lib/halpers/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface IProps {
  className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={ClassNames(cls.navbar, {}, [className])}>
      <div>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className="">{t('MAIN')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/cart">{t('CARD')}</AppLink>
      </div>
    </div>
  );
};
