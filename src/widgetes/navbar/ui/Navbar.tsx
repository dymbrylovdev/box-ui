import React, { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, Input } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Counter } from 'entities/Counter';
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
      <Counter />

      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        <Input
          label={t('Логин')}
          autofocus
        />
        <Input
          label={t('Прароль')}
          autofocus
        />
      </Modal>
    </div>
  );
};
