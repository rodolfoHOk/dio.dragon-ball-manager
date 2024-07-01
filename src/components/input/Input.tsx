import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => (
    <input
      ref={ref}
      className={`w-full px-4 py-2 flex-1 inline-flex justify-center items-center bg-zinc-200 dark:bg-zinc-900 text-lg font-bold text-zinc-950 dark:text-zinc-50 border border-neutral-500 rounded-md ${className}`}
      {...rest}
    />
  )
);
