// src/components/layout/NewHeader.jsx
'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { IconMenu2, IconX } from '@tabler/icons-react';
// Removed Sun, Moon from lucide-react as theme toggle is removed
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

//======================================================================
// UI COMPONENTS (Navbar, NavBody, etc.)
// Copied from your prompt and integrated
//======================================================================

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const { scrollY } = useScroll(); // Changed to use window scroll

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const scrollPosition = typeof latest === 'number' ? latest : 0;
    if (scrollPosition > 50) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }
  });

  return (
    <motion.div ref={ref} className={cn('fixed inset-x-0 top-0 z-50 w-full', className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible: isNavbarVisible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  // Assuming light mode is the default and only mode now
  const initialStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0)', // transparent
    backdropFilter: 'none',
    boxShadow: 'none',
    width: 'calc(100% - 2rem)',
    borderRadius: '9999px',
    y: 8,
  };

  const animateStyles = {
    backgroundColor: visible ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0)', // Light theme background or transparent
    backdropFilter: visible ? 'blur(10px)' : 'none',
    boxShadow: visible
      ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
      : 'none',
    width: visible ? 'calc(100% - 4rem)' : 'calc(100% - 2rem)',
    maxWidth: '72rem',
    borderRadius: '9999px',
    y: visible ? 16 : 8,
  };

  return (
    <motion.div
      initial={initialStyles}
      animate={animateStyles}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex',
        // visible && "bg-white/80", // Tailwind class, motion animation will override specific properties
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick /* visible */ }) => {
  // `visible` prop might not be strictly needed here anymore if colors are static
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  const textColorClass = 'text-slate-700'; // Default dark text for light theme
  const activeTextColorClass = 'text-[var(--color-brand-primary)]';

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium transition duration-200 lg:flex',
        textColorClass,
        className
      )}
    >
      {items.map((item, idx) => {
        return (
          <NavLink
            to={item.link}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className={({ isActive: navLinkIsActive }) =>
              cn(
                'relative px-3 py-2 rounded-full',
                navLinkIsActive ? `font-semibold ${activeTextColorClass}` : textColorClass,
                !navLinkIsActive && `hover:text-slate-900`
              )
            }
            key={`link-${idx}`}
          >
            {hovered === idx &&
              location.pathname !== item.link && ( // Check !isActive directly via location.pathname
                <motion.div
                  layoutId="hoveredNavItem"
                  className="absolute inset-0 h-full w-full rounded-full bg-gray-100"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            {location.pathname === item.link && (
              <motion.div
                layoutId="activeNavItem"
                className="absolute inset-0 h-full w-full rounded-full bg-[var(--color-brand-primary)]/10"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </NavLink>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  const initialStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'none',
    boxShadow: 'none',
    width: 'calc(100% - 1rem)',
    borderRadius: '0.5rem',
    y: 4,
  };

  const animateStyles = {
    backgroundColor: visible ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0)',
    backdropFilter: visible ? 'blur(10px)' : 'none',
    boxShadow: visible
      ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
      : 'none',
    width: visible ? 'calc(100% - 2rem)' : 'calc(100% - 1rem)',
    borderRadius: '0.5rem',
    y: visible ? 8 : 4,
  };
  return (
    <motion.div
      initial={initialStyles}
      animate={animateStyles}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 30,
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full flex-col items-center justify-between px-3 py-2 lg:hidden',
        // visible && "bg-white/80",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={cn('flex w-full flex-row items-center justify-between', className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className={cn(
            'absolute inset-x-0 top-full mt-2 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-lg bg-white p-4 shadow-xl',
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  const iconColor = 'text-slate-700'; // Default icon color for light theme
  return isOpen ? (
    <IconX className={cn('h-6 w-6', iconColor)} onClick={onClick} />
  ) : (
    <IconMenu2 className={cn('h-6 w-6', iconColor)} onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link to="/" className="relative z-20 flex items-center space-x-2 text-sm font-normal">
      <img src="../../../../public/login.svg" alt="Edugo Logo" width={32} height={32} />
      <span className="font-semibold text-xl text-slate-800">Edugo</span>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary', // 'primary' here means the default button style you defined
  ...props
}) => {
  const baseStyles =
    'px-4 py-2 rounded-full text-sm font-medium relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center';

  // Simplified variants as dark mode is removed for now
  const variantStyles = {
    primary: 'bg-slate-800 text-white shadow-md', // Example primary, adjust to your main CTA button
    secondary: 'bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-100',
  };

  if (Tag === Link || (typeof href === 'string' && href.startsWith('/'))) {
    return (
      <Link
        to={href || '#'}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

//======================================================================
// END OF UI COMPONENTS
//======================================================================

// Main NewHeader Component that USES the above building blocks
const NewHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dark mode and language toggle state/logic REMOVED

  const edugoNavItems = [
    { name: 'Beranda', link: '/' },
    { name: 'Layanan', link: '/layanan' },
    { name: 'Cara Kerja', link: '/cara-kerja' },
    { name: 'Harga', link: '/harga' },
    { name: 'Tentang Kami', link: '/tentang-kami' },
    { name: 'FAQ', link: '/faq' },
  ];

  return (
    <Navbar className="antialiased">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={edugoNavItems} onItemClick={() => setIsMobileMenuOpen(false)} />

        <div className="relative z-20 flex items-center space-x-2">
          {/* Language and Dark Mode Toggles REMOVED */}
          <NavbarButton
            href="/kontak"
            as={Link}
            variant="primary"
            className="hidden lg:inline-block"
          >
            Kontak Kami
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center space-x-1">
            {/* Language and Dark Mode Toggles REMOVED for mobile header top section */}
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {edugoNavItems.map((item, idx) => (
            <NavLink
              to={item.link}
              key={`mobile-link-${idx}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  'block w-full px-3 py-2.5 text-base font-medium rounded-md',
                  isActive
                    ? 'bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)]'
                    : 'text-slate-700 hover:bg-gray-100'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="w-full border-t border-gray-200 mt-3 pt-3">
            <NavbarButton href="/kontak" as={Link} variant="primary" className="w-full text-center">
              Kontak Kami
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NewHeader;
