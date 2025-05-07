// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';
import { cn } from '../../lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-slate-800 text-slate-300')}>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <GraduationCap className="h-7 w-7 mr-2 text-[var(--color-brand-secondary)]" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Edugo New Era
              </span>
            </Link>
            <p className="text-sm text-slate-400">
              Solusi pendampingan akademik Anda untuk meraih sukses.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-3">Tautan Cepat</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/layanan" className="hover:text-[var(--color-brand-secondary)]">
                  Layanan
                </Link>
              </li>
              <li>
                <Link to="/harga" className="hover:text-[var(--color-brand-secondary)]">
                  Harga
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[var(--color-brand-secondary)]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-[var(--color-brand-secondary)]">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-3">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/kebijakan-privasi" className="hover:text-[var(--color-brand-secondary)]">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link to="/ketentuan-layanan" className="hover:text-[var(--color-brand-secondary)]">
                  Ketentuan Layanan
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-slate-700" />
        <div className="text-center text-sm text-slate-400">
          © {currentYear} Edugo New Era. Semua hak dilindungi undang-undang.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
