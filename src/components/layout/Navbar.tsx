import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight, FolderGit2, Wrench, GraduationCap, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Projects', href: '#projects', icon: FolderGit2 },
  { label: 'Toolkit', href: '#toolkit', icon: Wrench },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Contact', href: '#contact', icon: Mail },
];

/** Convierte "rgb(...)" / "rgba(...)" en { r, g, b, a } */
const parseColor = (value: string) => {
  const m = value.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const [r, g, b, a = 1] = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
  return { r, g, b, a };
};

/** Luminancia relativa (0 = negro, 1 = blanco) */
const luminance = (r: number, g: number, b: number) => {
  const f = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const ticking = useRef(false);

  /**
   * Detecta el fondo que hay justo debajo del navbar.
   * Recorre los elementos en ese punto y toma el primer fondo no transparente.
   */
  const detectBackground = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;

    const y = Math.min(header.offsetHeight / 2, window.innerHeight - 1);
    const x = window.innerWidth / 2;
    const stack = document.elementsFromPoint(x, y);

    for (const el of stack) {
      if (header.contains(el)) continue; // ignorar el propio navbar

      // Permite forzar manualmente: <section data-navbar-theme="dark">
      const forced = (el as HTMLElement).dataset?.navbarTheme;
      if (forced) {
        setOnDark(forced === 'dark');
        return;
      }

      const color = parseColor(getComputedStyle(el).backgroundColor);
      if (color && color.a > 0.5) {
        setOnDark(luminance(color.r, color.g, color.b) < 0.4);
        return;
      }
    }
    setOnDark(false); // por defecto: fondo claro
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        detectBackground();
        ticking.current = false;
      });
    };

    detectBackground();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [detectBackground]);

  // Cierra el menú móvil si la pantalla pasa a tamaño escritorio
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handler = (e: MediaQueryListEvent) => e.matches && setMobileMenuOpen(false);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  /* ---------- Clases según el fondo ---------- */
  const headerCls = onDark
    ? 'bg-slate-950/30 border-white/10'
    : 'bg-white/70 border-slate-200/70';

  // Fondo claro: texto un poco atenuado · Fondo oscuro: blanco total
  const linkCls = onDark
    ? 'text-white hover:text-white/80'
    : 'text-slate-600 hover:text-slate-900';

  const logoCls = onDark
    ? 'bg-white text-slate-900 group-hover:bg-white/90'
    : 'bg-slate-900 text-white group-hover:bg-slate-800';

  const ctaCls = onDark
    ? 'bg-white text-slate-900 hover:bg-white/90'
    : 'bg-slate-900 text-white hover:bg-slate-800';

  const toggleCls = onDark
    ? 'text-white hover:bg-white/10'
    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5';

  const drawerCls = onDark
    ? 'bg-slate-950/90 border-white/10'
    : 'bg-white/95 border-slate-200';

  const drawerLinkCls = onDark
    ? 'text-white hover:bg-white/10'
    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5';

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${headerCls}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-16 lg:h-[72px] flex items-center justify-between">
        {/* Solo logo (sin texto) */}
        <a href="#" aria-label="Juan Vega - Inicio" className="group inline-flex">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-base tracking-wider shadow-sm transition-colors duration-300 ${logoCls}`}
          >
            JCV
          </div>
        </a>

        {/* Desktop Nav: sin contorno ni fondo propio */}
        <nav className="hidden lg:flex items-center gap-2" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-5 py-2 text-sm font-medium transition-colors duration-300 ${linkCls}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-sans text-sm font-semibold tracking-wide transition-colors duration-300 shadow-xs active:scale-[0.98] ${ctaCls}`}
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>
        </div>

        {/* Botón hamburguesa (móvil y tablet) */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className={`p-2.5 rounded-lg transition-colors duration-300 cursor-pointer ${toggleCls}`}
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden backdrop-blur-md border-t px-5 py-4 space-y-1 shadow-md transition-colors duration-300 ${drawerCls}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors ${drawerLinkCls}`}
            >
              <link.icon className="w-5 h-5 opacity-60" />
              <span>{link.label}</span>
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full block text-center py-3 rounded-lg font-semibold text-sm transition-colors ${ctaCls}`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
