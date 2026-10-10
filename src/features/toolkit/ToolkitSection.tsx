import React, { useState } from 'react';
import {
  Wrench,
  Network,
  Activity,
  Server,
  Code2,
  Database,
  GitBranch,
  Layers,
  Sparkles,
} from 'lucide-react';
import { toolkitData } from '@/data/toolkitData';
import {
  TcpIpLogo,
  RoutingSwitchingLogo,
  VlanLogo,
  SubnettingLogo,
  CiscoLogo,
  ZabbixLogo,
  SshLogo,
  PythonLogo,
  UbuntuLogo,
  LinuxCliLogo,
  VirtualBoxLogo,
  MariaDbLogo,
  ReactLogo,
  JavaScriptLogo,
  Html5Logo,
  TailwindLogo,
  NodeJsLogo,
  ExpressLogo,
  MySqlLogo,
  OracleLogo,
  GitLogo,
  GitHubTechLogo,
} from '@/components/common/TechLogos';

// Mapping category IDs to category icons
const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'networking-protocols': Network,
  'monitoring-tools': Activity,
  'systems-administration': Server,
  'frontend-development': Code2,
  'backend-databases': Database,
  'version-control': GitBranch,
};

// Mapping tool iconId to actual vector SVG brand logo component
const techLogoMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'tcp-ip': TcpIpLogo,
  'routing-switching': RoutingSwitchingLogo,
  'vlans-8021q': VlanLogo,
  'subnetting-vlsm': SubnettingLogo,
  'cisco-packet-tracer': CiscoLogo,
  'zabbix': ZabbixLogo,
  'ssh-remote-admin': SshLogo,
  'python': PythonLogo,
  'ubuntu-server': UbuntuLogo,
  'linux-cli': LinuxCliLogo,
  'oracle-virtualbox': VirtualBoxLogo,
  'mariadb': MariaDbLogo,
  'react': ReactLogo,
  'javascript': JavaScriptLogo,
  'html5': Html5Logo,
  'tailwind-css': TailwindLogo,
  'nodejs': NodeJsLogo,
  'express': ExpressLogo,
  'mysql': MySqlLogo,
  'oracle': OracleLogo,
  'git': GitLogo,
  'github': GitHubTechLogo,
};

// Filter tab specifications with icons, labels and tool counts
const filterTabs = [
  { id: 'all', label: 'All Domains', shortLabel: 'All', count: 22, icon: Layers },
  { id: 'networking-protocols', label: 'Networking & Protocols', shortLabel: 'Networking', count: 4, icon: Network },
  { id: 'monitoring-tools', label: 'Network & Monitoring Tools', shortLabel: 'Monitoring & NOC', count: 4, icon: Activity },
  { id: 'systems-administration', label: 'Systems Administration', shortLabel: 'Systems Admin', count: 4, icon: Server },
  { id: 'frontend-development', label: 'Frontend Development', shortLabel: 'Frontend', count: 4, icon: Code2 },
  { id: 'backend-databases', label: 'Backend & Databases', shortLabel: 'Backend & DB', count: 4, icon: Database },
  { id: 'version-control', label: 'Version Control', shortLabel: 'Version Control', count: 2, icon: GitBranch },
];

export const ToolkitSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const displayedCategories =
    activeCategory === 'all'
      ? toolkitData
      : toolkitData.filter((c) => c.id === activeCategory);

  const activeTabMeta = filterTabs.find((t) => t.id === activeCategory);

  return (
    <section id="toolkit" className="py-20 md:py-24 border-t border-slate-200 bg-[#f8fafc] relative">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-teal-800 font-mono text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>Applied Stack &amp; Operational Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technical Capabilities &amp; Stack
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Specialized technologies, protocols, and development environments applied across network operations, systems administration, and software engineering.
          </p>
        </div>

        {/* Enhanced Filter Bar: Horizontal Scrollable on Mobile, Wrap on Desktop */}
        <div className="mb-10 sm:mb-12">
          <div className="relative w-full">
            {/* Scrollable track on mobile/tablet with touch scrolling, cleanly wrapped on lg+ screens */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1 -mx-4 sm:mx-0 px-4 sm:px-0 lg:flex-wrap lg:overflow-visible">
              {filterTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeCategory === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs font-medium whitespace-nowrap flex-shrink-0 transition-all duration-200 cursor-pointer active:scale-97 select-none ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-sm ring-2 ring-slate-900/10'
                        : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-950 border border-slate-200/90 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <TabIcon
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-colors ${
                        isActive ? 'text-teal-400' : 'text-slate-500'
                      }`}
                    />
                    {/* Responsive text label: short on mobile, full on tablet/desktop */}
                    <span className="font-semibold block sm:hidden">{tab.shortLabel}</span>
                    <span className="font-semibold hidden sm:block">{tab.label}</span>

                    {/* Count badge */}
                    <span
                      className={`font-mono text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-0.5 ${
                        isActive
                          ? 'bg-white/20 text-teal-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200/60'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Status Indicator */}
          {activeCategory !== 'all' && (
            <div className="flex items-center justify-between pt-3 px-1 text-xs text-slate-500 font-mono animate-card-in">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                <span>
                  Filtering by <strong className="text-slate-800">{activeTabMeta?.label}</strong> ({activeTabMeta?.count} technologies)
                </span>
              </span>
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className="text-teal-800 hover:text-teal-900 font-semibold underline underline-offset-4 cursor-pointer"
              >
                Reset to All Domains
              </button>
            </div>
          )}
        </div>

        {/* Categories Grid with Cascading Fluid Entrance Animation */}
        <div
          key={activeCategory}
          className={`grid gap-6 ${
            activeCategory === 'all'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 max-w-2xl mx-auto'
          }`}
        >
          {displayedCategories.map((cat, index) => {
            const CatIcon = categoryIconMap[cat.id] || Layers;

            return (
              <div
                key={cat.id}
                className="animate-card-in rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
                style={{
                  animationDelay: `${index * 60}ms`,
                }}
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200/70 text-teal-800 flex items-center justify-center flex-shrink-0">
                        <CatIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 truncate">
                        {cat.name}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-slate-500 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 flex-shrink-0">
                      {cat.tools.length} Tools
                    </span>
                  </div>

                  {/* Concise Context Line */}
                  <p className="text-xs text-slate-500 font-sans leading-normal">
                    {cat.description}
                  </p>

                  {/* Technology Tiles with Authentic Logos */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {cat.tools.map((tool) => {
                      const LogoComponent = tool.iconId ? techLogoMap[tool.iconId] : null;

                      return (
                        <div
                          key={tool.name}
                          className="p-2.5 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-200/70 hover:border-slate-300 hover:shadow-xs transition-all flex items-center gap-2.5 group"
                        >
                          {/* Logo container */}
                          <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                            {LogoComponent ? (
                              <LogoComponent className="w-4 h-4" />
                            ) : (
                              <Layers className="w-4 h-4 text-slate-500" />
                            )}
                          </div>

                          {/* Tech Name & Micro-Tag */}
                          <div className="min-w-0 flex-1">
                            <span className="text-xs font-semibold text-slate-900 block truncate group-hover:text-teal-900 transition-colors">
                              {tool.name}
                            </span>
                            {tool.tag && (
                              <span className="text-[10px] text-slate-500 font-mono block truncate">
                                {tool.tag}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
