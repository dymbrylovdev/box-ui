import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeButton } from 'features/Theme';
import { Button } from 'shared/ui';
import { LangSwitcher } from 'features/LangSwitcher';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItems } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/SidebarItem/ui/SidebarItem';
import cls from './SidebarList.module.scss';

interface IProps {
  className?: any;
}

export const SidebarList: FC<IProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <div className={cls.navigation_container}>
        {SidebarItems.map((item) => <SidebarItem key={item.path} item={item} />)}
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
