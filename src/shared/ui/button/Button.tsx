import { type FC } from 'react';
import { ClassNames } from 'shared/lib/halpers/classNames';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: any
}

export const Button: FC<IProps> = ({
  className,
  children,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={ClassNames('', {}, [className])}
  >
    {children}
  </button>
);
