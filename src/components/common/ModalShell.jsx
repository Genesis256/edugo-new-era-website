// src/components/common/ModalShell.jsx
import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react'; // For close button
import { cn } from '../../lib/utils';
import { Button } from './Button'; // Re-using our Button component

const ModalShell = ({
  isOpen,
  setIsOpen,
  title,
  children,
  footerContent,
  size = 'md', // sm, md, lg, xl, full
  initialFocusRef, // Optional ref for Headless UI's initialFocus
}) => {
  const closeModal = () => setIsOpen(false);

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    full: 'max-w-full h-full rounded-none',
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100]" // Ensure high z-index
        onClose={closeModal}
        initialFocus={initialFocusRef}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={cn(
                  'w-full transform overflow-hidden rounded-lg bg-white dark:bg-slate-900 p-6 text-left align-middle shadow-xl transition-all',
                  sizeClasses[size] || sizeClasses.md
                )}
              >
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-slate-900 dark:text-slate-100 mb-4 flex justify-between items-center"
                  >
                    {title}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeModal}
                      className="ml-auto -mr-2 -mt-2 h-8 w-8 rounded-full"
                      aria-label="Close modal"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </Dialog.Title>
                )}

                <div className="mt-2 max-h-[calc(80vh-120px)] overflow-y-auto pr-1">
                  {' '}
                  {/* Add max-h for scrollable content */}
                  {children}
                </div>

                {footerContent && (
                  <div className="mt-6 flex justify-end space-x-3">{footerContent}</div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalShell;
