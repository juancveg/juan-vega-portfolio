import React from 'react';
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { BrandMark } from '@/components/common/BrandMark';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';
import { contactData } from '@/data/contactData';

const CURRENT_YEAR = new Date().getFullYear();

const navLinks = [
  { label: 'Projects & Case Studies', href: '#projects' },
  { label: 'Technical Stack & Capabilities', href: '#toolkit' },
  { label: 'Education & Certifications', href: '#education' },
  { label: 'Direct Inquiries & Contact', href: '#contact' },
];

const contactLinks = contactData.channels.filter(
  (channel) => channel.type === 'email' || channel.type === 'whatsapp' || channel.type === 'linkedin' || channel.type === 'github',
);

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-slate-950 text-slate-300 font-sans overflow-hidden">
      {/* Línea de acento superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal-400/60 to-transparent" />

      <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-10 sm:pt-12 pb-6">
        <div className="grid grid-cols-1 gap-y-6 pb-8 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-5">
          <a href="#" className="inline-flex items-center gap-2.5 group lg:col-start-1 lg:row-start-1" aria-label="Back to top">
            <span className="w-10 h-10 rounded-lg bg-white text-slate-900 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
              <BrandMark background="light" className="w-7 h-7" />
            </span>
            <span className="text-white font-bold tracking-tight">Juan Vega</span>
          </a>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight max-w-md lg:col-start-1 lg:row-start-2">
            Let&apos;s build networks that <span className="text-teal-400">stay online.</span>
          </h2>

          <nav className="lg:col-start-2 lg:row-start-2 lg:justify-self-end" aria-label="Footer">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
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

          <nav className="lg:col-start-2 lg:row-start-1 lg:justify-self-end" aria-label="Contact links">
            <ul className="flex items-center gap-3">
              {contactLinks.map((channel) => {
                const Icon =
                  channel.type === 'email'
                    ? Mail
                    : channel.type === 'whatsapp'
                      ? MessageCircle
                      : channel.type === 'linkedin'
                        ? LinkedinIcon
                        : GithubIcon;

                return (
                  <li key={channel.id}>
                    <a
                      href={channel.href}
                      target={channel.type === 'email' ? undefined : '_blank'}
                      rel={channel.type === 'email' ? undefined : 'noreferrer'}
                      aria-label={channel.label}
                      title={channel.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-teal-400/50 hover:bg-teal-400/10 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
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
