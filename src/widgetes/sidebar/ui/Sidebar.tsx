import React, {FC, useState} from 'react';
import {ClassNames} from "shared/lib/halpers/classNames";
import cls from './Sidebar.module.scss';
import {ThemeButton} from "features/theme";
import {Button} from "shared/ui";
import {LangSwitcher} from "features/lang-switcher/ui/LangSwitcher";

interface IProps {
  className?: any;
}

export const Sidebar: FC<IProps> = ({className}) => {
  const [state, setState] = useState(false);

  const toggleSidebar = () => {
    setState(prevState => !prevState)
  }

  return (
    <div className={ClassNames(cls.sidebar,{[cls.visible]: state},[className])}>
      <div className={cls.container}>
        <Button onClick={toggleSidebar}>
          Toggle
        </Button>
      </div>
      <div className={cls.theme}>
        <ThemeButton/>
        <LangSwitcher/>
      </div>
    </div>
  );
};
