// src/components/common/Select.jsx
import React from 'react';
import { Select as HeadlessSelect, Field, Label, Description } from '@headlessui/react'; // Re-import Field, Label, Description for clarity if not shared
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
// Assuming FormField, FormLabel, FormDescription, FormError would be imported from a central forms utility or Input.jsx
// For this example, let's assume they're available or we re-define parts.

const Select = React.forwardRef(({ className, children, placeholder, ...props }, ref) => {
  return (
    <div className="relative w-full">
      <HeadlessSelect
        ref={ref}
        className={cn(
          'block w-full appearance-none rounded-md border border-slate-300 bg-transparent h-10',
          'pl-3 pr-10 py-2 text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500',
          'focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-[var(--color-brand-primary)]',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'dark:border-slate-700 dark:text-slate-50 dark:focus:ring-[var(--color-brand-secondary)] dark:focus:border-[var(--color-brand-secondary)]',
          { 'text-slate-500 dark:text-slate-400': !props.value && placeholder }, // Style placeholder option if value is empty
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </HeadlessSelect>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 dark:text-slate-400"
        aria-hidden="true"
      />
    </div>
  );
});
Select.displayName = 'Select';

// If you want to provide <option> as a styled component too:
const SelectOption = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <option
      ref={ref}
      className={cn(
        'text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800', // Basic styling for options
        className
      )}
      {...props}
    />
  );
});
SelectOption.displayName = 'SelectOption';

export { Select, SelectOption };
// Remember to also export and use FormField, FormLabel, FormDescription from e.g. Input.jsx for complete select fields.
// Example usage:
// <FormField>
//   <FormLabel htmlFor="country">Country</FormLabel>
//   <Select id="country" name="country" placeholder="Select a country">
//     <SelectOption value="us">United States</SelectOption>
//     <SelectOption value="ca">Canada</SelectOption>
//   </Select>
//   <FormDescription>Select your country of residence.</FormDescription>
// </FormField>
