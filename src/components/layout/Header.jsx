// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom'; // Use alias for clarity
import {
  NavbarContainer,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from '../ui/aceternity-navbar';

import { Sun, Moon } from 'lucide-react';
import { cn } from '../../lib/utils';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  const [currentLang, setCurrentLang] = useState('ID');
  const toggleLang = () => {
    setCurrentLang((prevLang) => (prevLang === 'ID' ? 'EN' : 'ID'));
    alert(
      `Simulasi: Bahasa diubah ke ${currentLang === 'ID' ? 'Inggris' : 'Indonesia'}. Fitur penuh akan datang.`
    );
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const navMenuItems = [
    { name: 'Beranda', link: '/' },
    { name: 'Layanan Kami', link: '/layanan' },
    { name: 'Cara Kerja', link: '/cara-kerja' },
    { name: 'Harga', link: '/harga' },
    { name: 'Tentang Kami', link: '/tentang-kami' },
    { name: 'Kontak', link: '/kontak' },
  ];

  const mobileNavLinks = navMenuItems.map((item) => (
    <RouterNavLink
      key={item.link}
      to={item.link}
      // onClick for closing menu is now handled within MobileNavMenu logic
      className={({ isActive }) =>
        cn(
          'block w-full px-3 py-2.5 rounded-md text-base font-medium',
          isActive
            ? 'bg-[var(--color-brand-secondary)] text-black dark:bg-[var(--color-brand-primary)] dark:text-white'
            : 'text-neutral-700 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
        )
      }
    >
      {item.name}
    </RouterNavLink>
  ));

  return (
    <NavbarContainer>
      <NavBody className="container">
        <NavbarLogo />
        <NavItems items={navMenuItems} onItemClick={() => setIsMobileMenuOpen(false)} />{' '}
        {/* Added onItemClick here for desktop (though less relevant) */}
        <div className="flex items-center space-x-2 z-20">
          <NavbarButton
            onClick={toggleLang}
            variant="secondary"
            className="px-2 py-1 text-xs"
            as="button"
          >
            <span className={cn({ 'font-bold': currentLang === 'ID' })}>ID</span>
            <span className="mx-0.5">|</span>
            <span className={cn({ 'font-bold': currentLang === 'EN' })}>EN</span>
          </NavbarButton>
          <NavbarButton onClick={toggleDarkMode} variant="secondary" className="p-1.5" as="button">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </NavbarButton>
        </div>
      </NavBody>
      <MobileNav visible={isMobileMenuOpen}>
        {' '}
        {/* Pass 'visible' to MobileNav if it needs to animate based on NavbarContainer's visible state. For now, using its own isOpen state. */}
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center space-x-2">
            <NavbarButton
              onClick={toggleLang}
              variant="secondary"
              className="px-2 py-1 text-xs"
              as="button"
            >
              <span className={cn({ 'font-bold': currentLang === 'ID' })}>ID</span>
              <span className="mx-0.5">|</span>
              <span className={cn({ 'font-bold': currentLang === 'EN' })}>EN</span>
            </NavbarButton>
            <NavbarButton
              onClick={toggleDarkMode}
              variant="secondary"
              className="p-1.5"
              as="button"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </NavbarButton>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {mobileNavLinks}
        </MobileNavMenu>
      </MobileNav>
    </NavbarContainer>
  );
};

export default Header;
