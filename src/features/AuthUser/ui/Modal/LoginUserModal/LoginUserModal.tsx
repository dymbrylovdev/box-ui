import { Modal, ModalProps } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui';
import React, { Suspense } from 'react';
import { LoginFormAsync } from '../../LoginForm/LoginForm.async';

interface LoginUserModalProps extends ModalProps {
  className?: string;
}

export const LoginUserModal = (props: LoginUserModalProps) => {
  const {
    className,
    ...otherProps
  } = props;

  return (
    <Modal {...otherProps}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onClose={props?.onClose} />
      </Suspense>
    </Modal>
  );
};
