// src/components/common/Textarea.jsx
import React from 'react';
import { Textarea as HeadlessTextarea } from '@headlessui/react';
import { cn } from '../../lib/utils';
// We can re-use FormField, FormLabel, FormDescription, FormError from Input.jsx if they are exported there
// and then imported here, or define them again if preferred to keep files standalone for common components.
// For simplicity here, I'll assume they would be imported if this file grew.

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <HeadlessTextarea
      ref={ref}
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-slate-300 bg-transparent',
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
Textarea.displayName = 'Textarea';

export { Textarea };
