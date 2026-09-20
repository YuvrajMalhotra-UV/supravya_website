import React from 'react';

interface HeadingUnderlineProps {
  children: React.ReactNode;
  variant?: 'red' | 'gold';
  className?: string;
}

/**
 * HeadingUnderline wraps heading text to provide an elegant,
 * hover-triggered glowing gold underline animation with a traveling spark.
 * Works strictly on hover-capable devices, leaving mobile layouts undisturbed.
 */
export const HeadingUnderline: React.FC<HeadingUnderlineProps> = ({
  children,
  variant = 'red',
  className = '',
}) => {
  return (
    <span
      className={`heading-hover-wrapper ${
        variant === 'gold' ? 'heading-underline-gold' : ''
      } ${className}`}
    >
      {children}
      <span className="heading-underline-bar" aria-hidden="true">
        <span className="heading-underline-line">
          <span className="heading-underline-tip" />
        </span>
      </span>
    </span>
  );
};
