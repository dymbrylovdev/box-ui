import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib';
import { ThemeButton } from 'features/theme';
import { Button } from 'shared/ui';
import { LangSwitcher } from 'features/lang-switcher';
import cls from './Sidebar.module.scss';

interface IProps {
  className?: any;
}

export const Sidebar: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const [state, setState] = useState(false);

  const toggleSidebar = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div data-testid="container" className={ClassNames(cls.sidebar, { [cls.visible]: state }, [className])}>
      <div className={cls.container}>
        <Button data-testid="toggle-sidebar" onClick={toggleSidebar}>
          {t('TOGGLE')}
        </Button>
      </div>
      <div className={cls.theme}>
        <ThemeButton />
        <LangSwitcher />
      </div>
    </div>
  );
};
