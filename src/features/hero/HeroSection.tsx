import React from 'react';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import { NetworkMeshCanvas } from './NetworkMeshCanvas';
import engineerPortrait from '@/assets/profile.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-6 sm:pt-8 md:pt-10 pb-16 md:pb-24 overflow-hidden bg-white">
      {/* Discreet Circuit Board Track Lines & Traveling Line Pulses (Continuous Background) */}
      <NetworkMeshCanvas />

      {/* Hero Content with Soft Diffusion Backdrop across wide layout */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Transparent on mobile for circuit visibility, diffused on desktop */}
          <div className="lg:col-span-7 xl:col-span-8 bg-transparent lg:bg-white/80 lg:backdrop-blur-[4px] border-0 lg:border lg:border-white/90 shadow-none lg:shadow-xs p-1 sm:p-6 lg:p-10 space-y-4 sm:space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 backdrop-blur-[2px] border border-slate-200/80 text-slate-700 font-mono text-[11px] sm:text-xs shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="truncate">Available for Technical Roles • Networks &amp; IT Support</span>
            </div>

            {/* Prominent Personal Brand Title (Juan Vega) */}
            <div className="space-y-1.5 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                Juan Vega
              </h1>
              <p className="text-base sm:text-2xl lg:text-3xl font-semibold text-slate-700 tracking-tight leading-snug">
                Systems Engineering Student{' '}
                <span className="text-teal-800 font-bold block sm:inline">
                  • Network Operations &amp; IT Support
                </span>
              </p>
            </div>

            {/* Mobile Portrait with Live Network Node HUD Tag */}
            <div className="lg:hidden flex justify-center py-1.5">
              <div className="relative w-44 sm:w-52 aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-100">
                <img
                  src={engineerPortrait}
                  alt="Juan Vega - Systems Engineering Student"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  loading="eager"
                />
                {/* Micro Telemetry Overlay */}
                <div className="absolute bottom-2 inset-x-2 px-2.5 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md text-white flex items-center justify-between font-mono text-[10px] border border-white/10 shadow-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold tracking-wider">JCV // Node</span>
                  </span>
                  <span className="text-teal-400 font-medium">GMT-5</span>
                </div>
              </div>
            </div>

            {/* Concise Impact Narrative (Short, Punchy, Non-redundant) */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-sans">
              Hands-on labs in network operations, IT infrastructure support, and network security — from VLAN segmentation with ACLs to infrastructure monitoring with Zabbix.
            </p>

            {/* Key Competence Indicators - Glassmorphic so circuits travel through */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 w-full pt-0.5 sm:pt-1 font-mono">
              <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-[2px] border border-slate-200/80 shadow-2xs text-center sm:text-left space-y-0.5 sm:space-y-1">
                <span className="text-slate-500 text-[9px] sm:text-[11px] block uppercase tracking-wider font-medium">
                  Academic
                </span>
                <span className="text-slate-900 font-bold text-xs sm:text-lg block">
                  10th Semester
                </span>
                <p className="text-teal-800 text-[10px] sm:text-xs font-sans font-medium hidden sm:block leading-normal">
                  Systems Engineering at Universidad Simón Bolívar.
                </p>
                <span className="text-teal-800 text-[9px] font-sans font-medium block sm:hidden truncate">
                  Systems Eng
                </span>
              </div>

              <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-[2px] border border-slate-200/80 shadow-2xs text-center sm:text-left space-y-0.5 sm:space-y-1">
                <span className="text-slate-500 text-[9px] sm:text-[11px] block uppercase tracking-wider font-medium">
                  Core Focus
                </span>
                <span className="text-teal-800 font-bold text-xs sm:text-lg block truncate">
                  VLANs &bull; Zabbix
                </span>
                <p className="text-slate-500 text-[10px] sm:text-xs font-sans hidden sm:block leading-normal">
                  Hardened segmentation and active monitoring.
                </p>
                <span className="text-slate-500 text-[9px] font-sans block sm:hidden truncate">
                  ACL &bull; Telemetry
                </span>
              </div>

              <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-[2px] border border-slate-200/80 shadow-2xs text-center sm:text-left space-y-0.5 sm:space-y-1">
                <span className="text-slate-500 text-[9px] sm:text-[11px] block uppercase tracking-wider font-medium">
                  Language
                </span>
                <span className="text-slate-900 font-bold text-xs sm:text-lg block">
                  B2 English
                </span>
                <p className="text-slate-500 text-[10px] sm:text-xs font-sans hidden sm:block leading-normal">
                  EF SET 58/100 · Reading at C2 level.
                </p>
                <span className="text-emerald-700 text-[9px] font-sans font-medium block sm:hidden truncate">
                  CEFR Certified
                </span>
              </div>
            </div>

            {/* Calls to Action: Side by Side on Mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-4 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-3.5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-sans text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow cursor-pointer active:scale-98 text-center"
              >
                <span>Projects &amp; Labs</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-white/80 hover:bg-white text-slate-800 border border-slate-300 font-sans text-xs sm:text-sm font-medium transition-all shadow-2xs active:scale-98 text-center"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
              </a>

              <a
                href="/Juan-Carlos-Vega-CV.pdf"
                download
                className="col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-white/80 hover:bg-white text-slate-800 border border-slate-300 font-sans text-xs sm:text-sm font-medium transition-all shadow-2xs active:scale-98 text-center"
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Desktop Portrait of Juan Vega (Hidden on mobile) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/60 border border-slate-200/90 bg-slate-100">
              <img
                src={engineerPortrait}
                alt="Juan Vega - Systems Engineering Student"
                className="w-full h-full object-cover object-top filter contrast-[1.02]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
