// src/lib/utils.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and merges Tailwind CSS classes using tailwind-merge.
 * @param {...(string|Array<string>|Object<string, boolean>)} inputs - Class names to combine.
 * @returns {string} The combined and merged class names.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
