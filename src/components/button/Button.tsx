import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className, ...rest }: ButtonProps, ref) => (
    <button
      ref={ref}
      className={`h-10 px-4 flex flex-row items-center justify-center font-bold rounded  transition-colors duration-300 ${
        variant === 'primary'
          ? 'bg-orange-400 text-red-800 hover:bg-orange-300'
          : 'bg-zinc-400 text-zinc-950 hover:bg-zinc-300'
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
);
