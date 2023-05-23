import { type FC } from 'react';
import { ClassNames } from 'shared/lib';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: any
}

export const Button: FC<IProps> = ({
  className,
  children,
  onClick,
  ...props
}) => (
  <button
    type="button"
    {...props}
    onClick={onClick}
    className={ClassNames('', {}, [className])}
  >
    {children}
  </button>
);
