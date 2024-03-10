import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  label?: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    label,
    autofocus,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {label && (
        <div className={cls.label}>
          {`${label}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          aria-label="222"
          onChange={onChangeHandler}
          className={cls.input}
          placeholder={placeholder}
          {...otherProps}
        />
      </div>
    </div>
  );
});
