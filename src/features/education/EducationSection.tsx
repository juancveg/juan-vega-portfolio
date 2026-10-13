import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Languages,
  Network,
  Database,
  Monitor,
  Briefcase,
  CheckCircle2,
  Calendar,
  MapPin,
  Building2,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { educationData } from '@/data/educationData';

export interface CredentialCardItem {
  id: string;
  title: string;
  issuer: string;
  location?: string;
  category: string;
  credentialType: string;
  date: string;
  highlightLabel: string;
  highlightValue: string;
  highlightSub?: string;
  statusBadge: string;
  statusType: 'in-progress' | 'credential' | 'completed';
  credentialUrl?: string;
  iconType: 'degree' | 'language' | 'network' | 'database' | 'computing' | 'admin';
}

const buildInitialCredentials = (): CredentialCardItem[] => {
  const primaryDegree = educationData.degrees[0];
  const lang = educationData.languageCert;
  const training = educationData.training;

  return [
    {
      id: primaryDegree.id,
      title: primaryDegree.degree,
      issuer: primaryDegree.institution,
      location: primaryDegree.location,
      category: 'Higher Education',
      credentialType: primaryDegree.degreeType,
      date: primaryDegree.period,
      highlightLabel: 'Academic Status',
      highlightValue: primaryDegree.status,
      statusBadge: 'In Progress',
      statusType: 'in-progress',
      iconType: 'degree',
    },
    {
      id: lang.id,
      title: lang.title,
      issuer: lang.issuer,
      category: 'Language Proficiency',
      credentialType: 'Standardized Evaluation',
      date: lang.date,
      highlightLabel: 'Proficiency Level',
      highlightValue: lang.level,
      highlightSub: lang.score,
      statusBadge: 'View Credential',
      statusType: 'credential',
      credentialUrl: lang.credentialUrl,
      iconType: 'language',
    },
    {
      id: training[0].id,
      title: training[0].title,
      issuer: training[0].issuer,
      category: 'Complementary Training',
      credentialType: training[0].credentialType,
      date: training[0].date,
      highlightLabel: 'Domain Focus',
      highlightValue: 'Network Fundamentals & Protocols',
      statusBadge: 'View Credential',
      statusType: 'credential',
      credentialUrl: training[0].credentialUrl,
      iconType: 'network',
    },
    {
      id: training[1].id,
      title: training[1].title,
      issuer: training[1].issuer,
      location: training[1].location,
      category: 'Complementary Training',
      credentialType: training[1].credentialType,
      date: training[1].date,
      highlightLabel: 'Domain Focus',
      highlightValue: 'Database Administration & SQL Queries',
      statusBadge: 'View Credential',
      statusType: 'credential',
      credentialUrl: training[1].credentialUrl,
      iconType: 'database',
    },
    {
      id: training[2].id,
      title: training[2].title,
      issuer: training[2].issuer,
      location: training[2].location,
      category: 'Complementary Training',
      credentialType: training[2].credentialType,
      date: training[2].date,
      highlightLabel: 'Domain Focus',
      highlightValue: 'Computing Foundations & Hardware Systems',
      statusBadge: 'View Credential',
      statusType: 'credential',
      credentialUrl: training[2].credentialUrl,
      iconType: 'computing',
    },
    {
      id: training[3].id,
      title: training[3].title,
      issuer: training[3].issuer,
      location: training[3].location,
      category: 'Complementary Training',
      credentialType: training[3].credentialType,
      date: training[3].date,
      highlightLabel: 'Domain Focus',
      highlightValue: 'Administrative Support & Operations',
      statusBadge: 'Completed',
      statusType: 'completed',
      iconType: 'admin',
    },
  ];
};

const initialCredentials = buildInitialCredentials();

const credentialIconMap: Record<CredentialCardItem['iconType'], React.ComponentType<{ className?: string }>> = {
  degree: GraduationCap,
  language: Languages,
  network: Network,
  database: Database,
  computing: Monitor,
  admin: Briefcase,
};

interface TiltState {
  x: number;
  y: number;
}

export const EducationSection: React.FC = () => {
  const [tiltMap, setTiltMap] = useState<Record<string, TiltState>>({});
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // 3D Perspective Tilt handlers (PC only)
  const handleMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTiltMap((prev) => ({
      ...prev,
      [id]: { x: x * 7, y: -y * 7 },
    }));
  };

  const handleMouseLeave = (id: string) => {
    if (!isDesktop) return;
    setTiltMap((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <section
      id="education"
      className="py-20 md:py-28 border-y border-slate-300/70 bg-[#e4ede7] relative transition-colors"
      data-navbar-theme="light"
    >
      <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-slate-800 font-mono text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-slate-800" />
              <span>Academic Credentials &amp; Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Education &amp; Certifications
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              My academic background, language certification, and technical training.
            </p>
          </div>
        </div>

        {/* Unified 3-Column Grid: Interchangeable on PC, Static on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {initialCredentials.map((item) => {
            const ItemIcon = credentialIconMap[item.iconType] || GraduationCap;
            const tilt = isDesktop ? tiltMap[item.id] : undefined;

            return (
              <div
                key={item.id}
                onMouseMove={(e) => handleMouseMove(item.id, e)}
                onMouseLeave={() => handleMouseLeave(item.id)}
                style={{
                  transform: tilt
                    ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(-2px)`
                    : undefined,
                  transition: tilt
                    ? 'transform 0.12s ease-out, box-shadow 0.2s ease, border-color 0.2s ease'
                    : 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease, border-color 0.2s ease',
                }}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-5 relative group transition-all"
              >
                {/* Upper section */}
                <div className="space-y-4">
                  {/* Top Meta: Icon, Category and Credential Type */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 group-hover:bg-slate-200/80 transition-colors">
                        <ItemIcon className="w-5 h-5 text-slate-800" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 font-bold uppercase tracking-wider">
                        {item.credentialType}
                      </span>
                    </div>
                  </div>

                  {/* Title & Institution */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-slate-700 text-xs sm:text-sm font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{item.issuer}</span>
                      {item.location && (
                        <span className="text-slate-500 font-normal inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Highlight Banner (Harmonious soft slate, no abrupt black) */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-1">
                    <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wide block">
                      {item.highlightLabel}
                    </span>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-bold text-slate-800">
                        {item.highlightValue}
                      </span>
                      {item.highlightSub && (
                        <span className="font-mono text-[11px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                          {item.highlightSub}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Meta: Date & Status Badge (Harmonious tones) */}
                <div className="border-t border-slate-100 pt-3.5 flex items-center justify-between text-xs font-mono text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </span>

                  {item.statusType === 'in-progress' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-300 text-slate-700 font-mono text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse" />
                      <span>{item.statusBadge}</span>
                    </span>
                  ) : item.statusType === 'credential' && item.credentialUrl ? (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${item.title} credential (opens in a new tab)`}
                      className="inline-flex items-center gap-1.5 text-teal-800 hover:text-teal-900 font-semibold text-[11px] underline-offset-4 hover:underline transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" />
                      <span>{item.statusBadge}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-slate-700 font-semibold text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.statusBadge}</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
