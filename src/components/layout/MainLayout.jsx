// src/components/layout/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NewHeader from './NewHeader'; // Import the new header
import Footer from './Footer';
import { cn } from '../../lib/utils';

const MainLayout = () => {
  return (
    <div
      className={cn(
        'flex flex-col min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300' // Added base bg colors and transition
      )}
    >
      <NewHeader /> {/* Use the new header component */}
      <main
        className={cn(
          'flex-grow w-full container mx-auto px-4 sm:px-6 lg:px-8 py-8',
          // Adjust top padding to prevent content from being hidden by the fixed NewHeader
          // The NewHeader is fixed at top-0. Its internal NavBody/MobileNav might have a 'y' offset.
          // Consider the maximum height or visual space the NewHeader might occupy.
          // A common approach for fixed headers is to give a top padding to main equal to header height.
          // Since the header's visual height changes slightly and it animates,
          // pick a safe padding value. e.g., if header + its 'y' offset is ~80-100px at max.
          'pt-24 md:pt-28' // Example: 6rem (96px) on mobile, 7rem (112px) on md+. Adjust as needed.
        )}
      >
        <Outlet /> {/* Child routes (pages) will render here */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
