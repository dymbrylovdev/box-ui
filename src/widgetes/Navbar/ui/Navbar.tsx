import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, Input } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginUserModal } from 'features/AuthUser';
import cls from './Navbar.module.scss';

interface IProps {
  className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      {/* <AuthUserModal */}
      {/*   isOpen={isAuthModal} */}
      {/*   onClose={onToggleModal} */}
      {/* /> */}
      <LoginUserModal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      />
    </div>
  );
};
