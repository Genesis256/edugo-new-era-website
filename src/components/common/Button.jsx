// src/components/common/Button.jsx
import React from 'react';
import { cn } from '../../lib/utils';

const buttonVariantsStyles = {
  primary:
    'bg-[var(--color-brand-primary)] text-white hover:bg-opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand-primary)]',
  secondary:
    'bg-[var(--color-brand-secondary)] text-slate-900 hover:bg-opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand-secondary)]',
  outline:
    'border border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary)] hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)] dark:border-[var(--color-brand-secondary)] dark:hover:bg-[var(--color-brand-secondary)] dark:hover:text-slate-900',
  ghost:
    'hover:bg-slate-100 hover:text-slate-900 focus-visible:bg-slate-100 focus-visible:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:bg-slate-800 dark:focus-visible:text-slate-50',
  link: 'text-[var(--color-brand-primary)] underline-offset-4 hover:underline dark:text-[var(--color-brand-secondary)]', // Note: 'link' variant would usually be an <a> tag. We'll address how to use it if needed.
  destructive:
    'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-600 dark:bg-red-700 dark:hover:bg-red-800',
};

const buttonSizeStyles = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

const Button = React.forwardRef(
  (
    {
      className,
      variant = 'primary',
      size = 'default',
      children,
      type = 'button', // Add default type for button
      ...props
    },
    ref
  ) => {
    // For the 'link' variant, consumers might need to wrap this Button component
    // with a <Link> from react-router-dom or use a raw <a> tag and apply classes.
    // Or we can make this component render an <a> tag if variant is 'link'.

    // Let's refine 'link' variant handling. If variant is 'link', it conceptually should be an anchor.
    // However, to keep it simple, our 'Button' component always renders a <button>.
    // Users would use <Link to="/path"><Button variant="link">Text</Button></Link>
    // OR manually style an <a> tag with link-like utility classes.
    // For now, our "link" variant will style the button to LOOK like a link.

    return (
      <button
        type={type}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white dark:ring-offset-slate-950 transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          buttonVariantsStyles[variant],
          buttonSizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariantsStyles, buttonSizeStyles };
