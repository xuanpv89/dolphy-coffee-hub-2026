import React, { ReactNode } from 'react';

export interface RevealProps {
  children: ReactNode;
  variant?: 'up' | 'left' | 'right' | 'scale' | 'fade';
  delay?: 75 | 100 | 150 | 200 | 250 | 300 | 400 | 500;
  className?: string;
  as?: React.ElementType;
  [key: string]: any;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'up',
  delay,
  className = '',
  as: Component = 'div',
  ...rest
}) => {
  const variantClass =
    variant === 'left' ? 'reveal-left' :
    variant === 'right' ? 'reveal-right' :
    variant === 'scale' ? 'reveal-scale' :
    variant === 'fade' ? 'reveal-fade' :
    'reveal-on-scroll';

  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <Component
      className={`${variantClass} ${delayClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
};
