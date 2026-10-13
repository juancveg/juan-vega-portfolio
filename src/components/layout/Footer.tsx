import React from 'react';
import { ArrowUp, ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';
import { BrandMark } from '@/components/common/BrandMark';

const CURRENT_YEAR = new Date().getFullYear();

const navLinks = [
  { label: 'Projects & Case Studies', href: '#projects' },
  { label: 'Technical Stack & Capabilities', href: '#toolkit' },
  { label: 'Education & Certifications', href: '#education' },
  { label: 'Direct Inquiries & Contact', href: '#contact' },
];

const channels = [
  {
    label: 'Email',
    value: 'juanvegarojano@hotmail.com',
    href: 'mailto:juanvegarojano@hotmail.com',
    external: false,
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: '+57 300 785 4790',
    href: 'https://wa.me/573007854790',
    external: true,
    icon: MessageCircle,
  },
  {
    label: 'LinkedIn',
    value: 'juancvegarojano',
    href: 'https://www.linkedin.com/in/juancvegarojano',
    external: true,
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: 'juancveg',
    href: 'https://github.com/juancveg',
    external: true,
    icon: GithubIcon,
  },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-slate-950 text-slate-300 font-sans overflow-hidden">
      {/* Línea de acento superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal-400/60 to-transparent" />

      <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-16 sm:pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14">
          {/* Marca + mensaje + navegación */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <a href="#" className="inline-flex items-center gap-3 group" aria-label="Back to top">
                <span className="w-12 h-12 rounded-xl bg-white text-slate-900 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                  <BrandMark background="light" className="w-8 h-8" />
                </span>
                <span className="text-white font-bold text-lg tracking-tight">Juan Vega</span>
              </a>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight max-w-md">
                Let&apos;s build networks that <span className="text-teal-400">stay online.</span>
              </h2>
            </div>

            <nav aria-label="Footer">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
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

          {/* Canales de contacto */}
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {channels.map(({ label, value, href, external, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex items-center gap-4 h-full rounded-2xl border border-white/10 bg-white/3 p-4 sm:p-5 transition-all hover:border-teal-400/50 hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:bg-teal-400 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-slate-400">{label}</span>
                      <span className="block text-sm font-medium text-white truncate">{value}</span>
                    </span>

                    <ArrowUpRight className="shrink-0 w-4 h-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="pt-6 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-5 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © {CURRENT_YEAR} Juan Vega Rojano. Built with React, TypeScript &amp; Tailwind CSS.
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
