import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BrandMark } from '@/components/common/BrandMark';

const CURRENT_YEAR = new Date().getFullYear();

const navLinks = [
  { label: 'Projects & Case Studies', href: '#projects' },
  { label: 'Technical Stack & Capabilities', href: '#toolkit' },
  { label: 'Education & Certifications', href: '#education' },
  { label: 'Direct Inquiries & Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-slate-950 text-slate-300 font-sans overflow-hidden">
      {/* Línea de acento superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal-400/60 to-transparent" />

      <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-10 sm:pt-12 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-3">
              <a href="#" className="inline-flex items-center gap-2.5 group" aria-label="Back to top">
                <span className="w-10 h-10 rounded-lg bg-white text-slate-900 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                  <BrandMark background="light" className="w-7 h-7" />
                </span>
                <span className="text-white font-bold tracking-tight">Juan Vega</span>
              </a>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight max-w-md">
                Let&apos;s build networks that <span className="text-teal-400">stay online.</span>
              </h2>
            </div>
          </div>

          <nav className="lg:col-span-6 flex items-center" aria-label="Footer">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block text-slate-400 hover:text-white hover:translate-x-0.5 transition-all focus-visible:outline-none focus-visible:text-white focus-visible:underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Barra inferior */}
        <div className="pt-4 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © {CURRENT_YEAR} Juan Vega, All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-slate-300 hover:text-white hover:border-white/30 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
