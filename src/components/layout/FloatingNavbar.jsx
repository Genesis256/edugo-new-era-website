// src/components/layout/FloatingNavbar.jsx
'use client'; // Vite will largely ignore this, but it's fine.
import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; // For navigation
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { Sun, Moon } from 'lucide-react'; // For our theme toggle
import { cn } from '../../lib/utils';

// --- Base Navbar Wrapper ---
export const NavbarWrapper = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll(); // Listen to window scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // When to trigger the "visible" (scrolled) state
    // The original code had top-20, suggesting it appears below something initially.
    // Let's assume it's fixed from the top initially and changes style on scroll.
    if (latest > 50) {
      // Adjust threshold as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ease-out', // Changed to fixed and top-0
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { isScrolled }) // Pass isScrolled instead of visible
          : child
      )}
    </motion.div>
  );
};

// --- Desktop Navbar Body ---
export const NavBody = ({ children, className, isScrolled }) => {
  return (
    <motion.div
      animate={{
        // backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent', // white/80
        // For dark mode: isScrolled ? 'rgba(23, 23, 23, 0.8)' : 'transparent', // neutral-950/80
        // Let's use our theme colors or standard slate
        backgroundColor: isScrolled
          ? document.documentElement.classList.contains('dark')
            ? 'rgba(30, 41, 59, 0.8)'
            : 'rgba(255, 255, 255, 0.8)' // slate-800/80 or white/80
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : 'none',
        width: isScrolled ? 'max-content' : '100%', // Changed to max-content to wrap logo, items, actions
        paddingLeft: isScrolled ? '1.5rem' : '1rem', // 24px or 16px
        paddingRight: isScrolled ? '1.5rem' : '1rem',
        borderRadius: isScrolled ? '9999px' : '0px', // rounded-full or none
        marginTop: isScrolled ? '0.75rem' : '0rem', // 12px margin from top when scrolled
        // y: isScrolled ? 12 : 0, // Original logic moved to marginTop
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 30,
      }}
      className={cn(
        'relative z-[60] mx-auto hidden max-w-7xl flex-row items-center justify-between self-start px-4 py-2.5 lg:flex', // Adjusted py
        className
      )}
    >
      {children}
    </motion.div>
  );
};

// --- Navigation Items (Desktop) ---
export const NavItems = ({ items, className, isScrolled, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div // Changed from motion.div to div, animation on links
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'flex flex-row items-center justify-center space-x-1 text-sm font-medium', // Removed absolute, inset-0, flex-1. It will be part of flex layout
        className
      )}
    >
      {items.map((item, idx) => (
        <NavLink // Using NavLink for active state
          to={item.link}
          key={`link-${idx}`}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick} // For closing mobile menu if needed
          className={({ isActive }) =>
            cn(
              'relative px-3 py-2 transition-colors duration-200', // Adjusted padding
              isScrolled
                ? isActive
                  ? 'text-[var(--color-brand-primary)] dark:text-[var(--color-brand-secondary)]'
                  : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100'
                : isActive
                  ? 'text-white' // When transparent and active, make it white
                  : 'text-slate-200 hover:text-white', // Initial transparent state text color
              // Specific styling for dark mode initial state might be needed
              !isScrolled &&
                document.documentElement.classList.contains('dark') &&
                (isActive
                  ? 'text-[var(--color-brand-secondary)]'
                  : 'text-slate-300 hover:text-slate-100')
            )
          }
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered" // Needs a unique layoutId for Framer Motion's shared layout animations
              className={cn(
                'absolute inset-0 h-full w-full rounded-full',
                isScrolled ? 'bg-slate-100 dark:bg-slate-800' : 'bg-white/10 dark:bg-black/10' // Different hover bg for transparent state
              )}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

// --- Mobile Navbar Body ---
export const MobileNav = ({ children, className, isScrolled }) => {
  return (
    <motion.div
      animate={{
        backgroundColor: isScrolled
          ? document.documentElement.classList.contains('dark')
            ? 'rgba(30, 41, 59, 0.9)'
            : 'rgba(255, 255, 255, 0.9)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        boxShadow: isScrolled
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : 'none',
        width: isScrolled ? 'calc(100% - 2rem)' : '100%', // 90% of viewport or full
        paddingLeft: isScrolled ? '1rem' : '1rem', // Adjust padding as needed
        paddingRight: isScrolled ? '1rem' : '1rem',
        borderRadius: isScrolled ? '0.5rem' : '0px', // Slightly rounded or none
        marginTop: isScrolled ? '0.5rem' : '0rem',
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 30,
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full flex-col items-center justify-between px-4 py-2.5 lg:hidden',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

// --- Mobile Nav Header ---
export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={cn('flex w-full flex-row items-center justify-between', className)}>
      {children}
    </div>
  );
};

// --- Mobile Nav Menu (Dropdown) ---
export const MobileNavMenu = ({ items, className, isOpen, isScrolled, onItemClick }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute inset-x-0 top-full z-50 mt-2 flex w-full flex-col items-start justify-start gap-1 rounded-md p-2 shadow-xl', // Adjust 'top-16' to 'top-full' and add 'mt-2'
            isScrolled || document.documentElement.classList.contains('dark')
              ? 'bg-white dark:bg-slate-800'
              : 'bg-slate-800', // Adjusted bg
            className
          )}
        >
          {items.map((item, idx) => (
            <NavLink // Using NavLink for active state
              to={item.link}
              key={`mobile-link-${idx}`}
              onClick={onItemClick}
              className={({ isActive }) =>
                cn(
                  'w-full rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'bg-[var(--color-brand-primary)] text-white dark:bg-[var(--color-brand-secondary)] dark:text-slate-900'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Mobile Nav Toggle Icon ---
export const MobileNavToggle = ({ isOpen, onClick, isScrolled }) => {
  const iconColor = isScrolled
    ? 'text-slate-700 dark:text-slate-200'
    : 'text-white dark:text-slate-100'; // White for transparent bg

  return isOpen ? (
    <IconX className={cn('h-6 w-6', iconColor)} onClick={onClick} />
  ) : (
    <IconMenu2 className={cn('h-6 w-6', iconColor)} onClick={onClick} />
  );
};

// --- Navbar Logo ---
export const NavbarLogo = ({ isScrolled }) => {
  // Dynamic text color based on scroll and theme
  const textColorClass = isScrolled
    ? 'text-slate-800 dark:text-slate-100'
    : 'text-white dark:text-slate-100';

  return (
    <Link // Changed from <a> to <Link>
      to="/"
      className="relative z-20 flex items-center space-x-2"
    >
      <img
        src="/logo.svg" // Using your logo path
        alt="Edugo New Era Logo"
        className="h-8 w-auto md:h-9" // Adjusted size
      />
      <span className={cn('text-lg font-semibold whitespace-nowrap', textColorClass)}>
        Edugo New Era
      </span>
    </Link>
  );
};

// --- Navbar Actions (Buttons, Toggles) ---
export const NavbarActions = ({ children, className }) => {
  return (
    <div className={cn('relative z-20 flex items-center space-x-1', className)}>{children}</div>
  );
};

// --- Main Assembled Navbar ---
const FloatingNavbarComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initial dark mode state from localStorage or system preference (simplified)
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const [currentLang, setCurrentLang] = useState('ID'); // For placeholder lang toggle
  const toggleLang = () => {
    setCurrentLang((prevLang) => (prevLang === 'ID' ? 'EN' : 'ID'));
    alert(
      `Simulasi: Bahasa diubah ke ${currentLang === 'ID' ? 'Inggris' : 'Indonesia'}. Fitur penuh akan datang.`
    );
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const navMenuItems = [
    { name: 'Beranda', link: '/' },
    { name: 'Layanan', link: '/layanan' },
    { name: 'Cara Kerja', link: '/cara-kerja' },
    { name: 'Harga', link: '/harga' },
    { name: 'Tentang Kami', link: '/tentang-kami' },
    { name: 'Kontak', link: '/kontak' },
  ];

  // We need a state for `isScrolled` to pass to children of NavbarWrapper
  const [isScrolledInternal, setIsScrolledInternal] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolledInternal(latest > 50); // Keep this consistent with NavbarWrapper
  });

  return (
    <NavbarWrapper>
      {' '}
      {/* This will manage the overall fixed/sticky positioning and pass isScrolled */}
      {/* Desktop Navbar */}
      <NavBody isScrolled={isScrolledInternal}>
        <NavbarLogo isScrolled={isScrolledInternal} />
        <NavItems
          items={navMenuItems}
          isScrolled={isScrolledInternal}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />
        <NavbarActions>
          {/* Language Toggle */}
          <button
            type="button"
            onClick={toggleLang}
            className={cn(
              'rounded-md px-2.5 py-2 text-sm font-medium transition-colors focus:outline-none',
              isScrolledInternal
                ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
                : 'text-slate-200 hover:bg-white/10 dark:text-slate-300 dark:hover:bg-black/20'
            )}
            title="Ganti Bahasa (Fitur placeholder)"
          >
            <span className={cn({ 'font-semibold': currentLang === 'ID' })}>ID</span>
            <span className="mx-0.5">/</span>
            <span className={cn({ 'font-semibold': currentLang === 'EN' })}>EN</span>
          </button>
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            type="button"
            className={cn(
              'rounded-md p-2 text-sm transition-colors focus:outline-none',
              isScrolledInternal
                ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
                : 'text-slate-200 hover:bg-white/10 dark:text-slate-300 dark:hover:bg-black/20'
            )}
            title={isDarkMode ? 'Mode Terang' : 'Mode Gelap'}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </NavbarActions>
      </NavBody>
      {/* Mobile Navbar */}
      <MobileNav isScrolled={isScrolledInternal}>
        <MobileNavHeader>
          <NavbarLogo isScrolled={isScrolledInternal} />
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle (Mobile) - keeping it simple for now */}
            <button
              onClick={toggleDarkMode}
              type="button"
              className={cn(
                'rounded-md p-2 text-sm transition-colors focus:outline-none',
                isScrolledInternal
                  ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
                  : 'text-slate-200 hover:bg-white/10 dark:text-slate-300 dark:hover:bg-black/20'
              )}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isScrolled={isScrolledInternal}
            />
          </div>
        </MobileNavHeader>
        <MobileNavMenu
          items={navMenuItems}
          isOpen={isMobileMenuOpen}
          isScrolled={isScrolledInternal}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />
      </MobileNav>
    </NavbarWrapper>
  );
};

export default FloatingNavbarComponent;
