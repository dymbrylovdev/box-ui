import React, { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { ISidebarItem } from 'widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';

interface IProps {
  item: ISidebarItem;
}

export const SidebarItem: FC<IProps> = (props) => {
  const {
    item,
  } = props;

  // В тестовой среде не отображаем SVG иконки, чтобы избежать ошибок импорта
  if (process.env.NODE_ENV === 'test') {
    return (
      <AppLink
        theme={AppLinkTheme.REVERT_PRIMARY}
        to={item.path}
        className={cls.navigation}
      >
        <span className={cls.link}>
          {item.text}
        </span>
      </AppLink>
    );
  }

  return (
    <AppLink
      theme={AppLinkTheme.REVERT_PRIMARY}
      to={item.path}
      className={cls.navigation}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>
        {item.text}
      </span>
    </AppLink>
  );
};
