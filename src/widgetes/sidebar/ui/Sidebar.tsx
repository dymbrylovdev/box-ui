import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib';
import { ThemeButton } from 'features/theme';
import { AppLink, AppLinkTheme, Button } from 'shared/ui';
import { LangSwitcher } from 'features/lang-switcher';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { RouterPath } from 'shared/config/RouterConfig/RouterConfig';
import { ClarityListSVG, HomeSVG } from 'shared/assets';
import cls from './Sidebar.module.scss';

interface IProps {
  className?: any;
}

export const Sidebar: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div data-testid="container" className={ClassNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <div className={cls.navigation_container}>
        <AppLink
          theme={AppLinkTheme.REVERT_PRIMARY}
          to={RouterPath.main}
          className={cls.navigation}
        >
          <HomeSVG className={cls.icon} />
          <span className={cls.link}>
            {t('MAIN')}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.REVERT_PRIMARY}
          to={RouterPath.cart}
          className={cls.navigation}
        >
          <ClarityListSVG className={cls.icon} />
          <span className={cls.link}>
            {t('CARD')}
          </span>
        </AppLink>
      </div>
      <div className={cls.theme}>
        <ThemeButton />
        <LangSwitcher />
      </div>
      <Button
        data-testid="toggle-sidebar"
        onClick={toggleSidebar}
        className={cls.btmTheme}
        size={ButtonSize.XL}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        { collapsed ? '>' : '<' }
      </Button>
    </div>
  );
};
