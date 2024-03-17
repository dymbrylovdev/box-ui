import { useTranslation } from 'react-i18next';
import { Modal, ModalProps } from 'shared/ui/Modal/Modal';
import { Button, Input, Loader } from 'shared/ui';
import React, { Suspense, useEffect, useState } from 'react';
import { LoginFormAsync } from '../../LoginForm/LoginForm.async';

interface LoginUserModalProps extends ModalProps {
  className?: string;
}

export const LoginUserModal = (props: LoginUserModalProps) => {
  const {
    className,
    ...otherProps
  } = props;
  const { t } = useTranslation();

  return (
    <Modal {...otherProps}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};
