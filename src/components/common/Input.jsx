// src/components/common/Input.jsx
import React from 'react';
import { Field, Label, Input as HeadlessInput, Description } from '@headlessui/react';
import { cn } from '../../lib/utils';

const FormField = React.forwardRef(({ className, ...props }, ref) => {
  return <Field ref={ref} className={cn('flex flex-col gap-1.5', className)} {...props} />;
});
FormField.displayName = 'FormField';

const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Label
      ref={ref}
      className={cn(
        'text-sm font-medium text-slate-700 dark:text-slate-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <HeadlessInput
      ref={ref}
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-slate-300 bg-transparent',
        'px-3 py-2 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500',
        'focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-[var(--color-brand-primary)]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'dark:border-slate-700 dark:text-slate-50 dark:focus:ring-[var(--color-brand-secondary)] dark:focus:border-[var(--color-brand-secondary)]',
        className
      )}
      {...props}
    />
  );
});
Input.displayName = 'Input';

const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Description
      ref={ref}
      className={cn('text-xs text-slate-500 dark:text-slate-400', className)}
      {...props}
    />
  );
});
FormDescription.displayName = 'FormDescription';

// Helper for error messages, not a Headless UI component but commonly needed
const FormError = React.forwardRef(({ className, children, ...props }, ref) => {
  if (!children) return null;
  return (
    <p
      ref={ref}
      className={cn('text-xs font-medium text-red-600 dark:text-red-500', className)}
      {...props}
    >
      {children}
    </p>
  );
});
FormError.displayName = 'FormError';

export { Input, FormField, FormLabel, FormDescription, FormError };
