import { LabelHTMLAttributes } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, className, ...rest }: LabelProps) {
  return (
    <label className={`font-bold text-lg ${className}`} {...rest}>
      {children}
    </label>
  );
}
