import React, {FC} from 'react';
import {ClassNames} from "shared/lib/halpers/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui";
import {ThemeButton} from "features/theme";

interface IProps {
  className?: string;
}

export const Navbar: FC<IProps> = ({className}) => {

  return (
    <div className={ClassNames(cls.navbar,{},[className])}>
      <div>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={""}>main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY}  to={"/cart"}>card</AppLink>
      </div>
    </div>
  );
};
