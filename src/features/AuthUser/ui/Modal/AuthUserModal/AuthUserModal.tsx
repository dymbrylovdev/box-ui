import { useTranslation } from 'react-i18next';
import { Modal, ModalProps } from 'shared/ui/Modal/Modal';
import { Button, Input } from 'shared/ui';
import React, { useEffect, useState } from 'react';
import { useAuthUserMutation } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User/model/slice/userSlice';

interface AuthUserModalProps extends ModalProps {
  className?: string;
}

export const AuthUserModal = (props: AuthUserModalProps) => {
  const {
    className,
    ...otherProps
  } = props;
  const { t } = useTranslation();
  const [userName, setUserName] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const dispatch = useDispatch();

  const [update, {
    isLoading, data, error, isError,
  }] = useAuthUserMutation();
  useEffect(() => {
    console.log(data);
    dispatch(userActions.setUser(data));
  }, [data]);
  return (
    <Modal {...otherProps}>
      <Input
        label={t('Логин')}
        onChange={setUserName}
        autofocus
      />
      <Input
        label={t('Прароль')}
        onChange={setPass}
        autofocus
      />
      {isError && (
        <Text
          // @ts-ignore
          text={error.data.message}
          theme={TextTheme.ERROR}
        />
      )}
      <Button
        disabled={isLoading}
        onClick={() => update({
          username: userName,
          password: pass,
        })}
      >
        { t('Войти')}
      </Button>
    </Modal>
  );
};
