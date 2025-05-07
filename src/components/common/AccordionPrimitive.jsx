// src/components/common/AccordionPrimitive.jsx
import React, { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const AccordionPrimitive = ({
  title,
  children,
  defaultOpen = false,
  className,
  buttonClassName,
  panelClassName,
}) => {
  return (
    <div className={cn('border-b border-slate-200 dark:border-slate-700', className)}>
      <Disclosure defaultOpen={defaultOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={cn(
                'flex w-full justify-between items-center rounded-t-md py-3 px-4 text-left text-sm font-medium text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-opacity-75',
                { 'bg-slate-50 dark:bg-slate-800/50 rounded-b-md': open && !children }, // Style if open but no panel (maybe an action)
                { 'rounded-b-none': open && children }, // Don't round bottom if panel will be shown
                buttonClassName
              )}
            >
              <span>{title}</span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 text-slate-500 dark:text-slate-400 transform transition-transform duration-150',
                  { 'rotate-180': open }
                )}
              />
            </Disclosure.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel
                className={cn(
                  'px-4 pt-2 pb-3 text-sm text-slate-700 dark:text-slate-300',
                  panelClassName
                )}
              >
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default AccordionPrimitive;
