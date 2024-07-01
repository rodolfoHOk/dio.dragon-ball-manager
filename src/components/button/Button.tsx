import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={`h-10 px-4 flex flex-row items-center justify-center bg-orange-400 text-red-800 font-bold rounded ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
