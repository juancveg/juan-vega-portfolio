import React from 'react';

interface TechLogoProps {
  className?: string;
}

// 1. TCP/IP Protocol Stack
export const TcpIpLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <rect x="2" y="3" width="20" height="4" rx="1.5" className="text-teal-700" fill="currentColor" fillOpacity="0.15" />
    <rect x="2" y="9" width="20" height="4" rx="1.5" className="text-sky-600" fill="currentColor" fillOpacity="0.15" />
    <rect x="2" y="15" width="20" height="4" rx="1.5" className="text-indigo-600" fill="currentColor" fillOpacity="0.15" />
    <circle cx="6" cy="5" r="1" fill="currentColor" className="text-teal-800" />
    <circle cx="6" cy="11" r="1" fill="currentColor" className="text-sky-700" />
    <circle cx="6" cy="17" r="1" fill="currentColor" className="text-indigo-700" />
    <path d="M10 5h8M10 11h8M10 17h8" strokeLinecap="round" />
  </svg>
);

// 2. Routing & Switching
export const RoutingSwitchingLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#0f766e" strokeWidth="1.5" fill="#f0fdfa" />
    {/* Router cross arrows */}
    <path d="M12 5v14M5 12h14" stroke="#0f766e" strokeWidth="1.75" strokeLinecap="round" />
    <path d="M9 7L12 4l3 3M9 17l3 3 3-3M7 9L4 12l3 3M17 9l3 3-3 3" stroke="#0f766e" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 3. VLANs / 802.1Q
export const VlanLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="7" rx="2" stroke="#2563eb" strokeWidth="1.5" fill="#eff6ff" />
    <rect x="3" y="13" width="18" height="7" rx="2" stroke="#7c3aed" strokeWidth="1.5" fill="#f5f3ff" />
    <circle cx="7" cy="7.5" r="1.5" fill="#2563eb" />
    <circle cx="12" cy="7.5" r="1.5" fill="#2563eb" />
    <circle cx="17" cy="7.5" r="1.5" fill="#2563eb" />
    <circle cx="7" cy="16.5" r="1.5" fill="#7c3aed" />
    <circle cx="12" cy="16.5" r="1.5" fill="#7c3aed" />
    <circle cx="17" cy="16.5" r="1.5" fill="#7c3aed" />
    <path d="M14 2l-2 3M14 11l-2 3" stroke="#0f766e" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 4. Subnetting / VLSM
export const SubnettingLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="2.5" stroke="#0284c7" strokeWidth="1.5" fill="#f0f9ff" />
    <path d="M2 9h20M2 15h20M8 3v18M16 3v18" stroke="#bae6fd" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M5 6h1M11 6h2M19 6h1M5 12h2M11 12h1M18 12h2M5 18h2M11 18h2M18 18h1" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 2v20" stroke="#0284c7" strokeWidth="1.5" />
  </svg>
);

// 5. Cisco Packet Tracer
export const CiscoLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#049fd9">
    <path d="M3.5 13.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm4.25-2.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm4.25-2.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm4.25 2.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm4.25 2.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
    <rect x="2.9" y="14.5" width="1.2" height="4.5" rx="0.6" />
    <rect x="7.15" y="12.3" width="1.2" height="6.7" rx="0.6" />
    <rect x="11.4" y="9.9" width="1.2" height="9.1" rx="0.6" />
    <rect x="15.65" y="12.3" width="1.2" height="6.7" rx="0.6" />
    <rect x="19.9" y="14.5" width="1.2" height="4.5" rx="0.6" />
  </svg>
);

// 6. Zabbix
export const ZabbixLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4.5" fill="#d40000" />
    <path
      d="M6 7.5h12l-7.8 9.5H18V19H6l7.8-9.5H6V7.5z"
      fill="#ffffff"
    />
  </svg>
);

// 7. SSH Remote Admin
export const SshLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="3" fill="#0f172a" />
    <path d="M6 8l4 4-4 4" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16h6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    <circle cx="17" cy="8" r="1.5" fill="#fbbf24" />
  </svg>
);

// 8. Python
export const PythonLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#3776ab"
      d="M11.91 2c-5.26 0-4.93 2.28-4.93 2.28l.01 2.37h5.02v.71H4.95S2 7.02 2 12.28s2.58 5.09 2.58 5.09h1.54v-2.16s-.08-2.58 2.53-2.58h4.94s2.45.04 2.45-2.41V4.41S16.42 2 11.91 2zm-1.37 1.48a.86.86 0 1 1 0 1.72.86.86 0 0 1 0-1.72z"
    />
    <path
      fill="#ffd438"
      d="M12.09 22c5.26 0 4.93-2.28 4.93-2.28l-.01-2.37h-5.02v-.71h7.06s2.95.34 2.95-4.92-2.58-5.09-2.58-5.09h-1.54v2.16s.08 2.58-2.53 2.58h-4.94s-2.45-.04-2.45 2.41v5.81S7.58 22 12.09 22zm1.37-1.48a.86.86 0 1 1 0-1.72.86.86 0 0 1 0 1.72z"
    />
  </svg>
);

// 9. Ubuntu Server
export const UbuntuLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#e95420">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6.2" fill="#ffffff" />
    <circle cx="12" cy="12" r="4.2" fill="#e95420" />
    <circle cx="4.8" cy="12" r="1.5" fill="#ffffff" />
    <circle cx="15.6" cy="5.8" r="1.5" fill="#ffffff" />
    <circle cx="15.6" cy="18.2" r="1.5" fill="#ffffff" />
  </svg>
);

// 10. Linux CLI
export const LinuxCliLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="18" rx="3" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
    <path d="M6 8l5 4-5 4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 16h5" stroke="#f4f4f5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 11. Oracle VirtualBox
export const VirtualBoxLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#183a61"
      d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm0 2.4l6.9 4-6.9 4-6.9-4 6.9-4zM5 8.8l6 3.5v7l-6-3.5v-7zm14 7l-6 3.5v-7l6-3.5v7z"
    />
    <path fill="#2d7db5" d="M12 12.3l6-3.5v7l-6 3.5v-7z" opacity="0.6" />
  </svg>
);

// 12. MariaDB
export const MariaDbLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#003545" />
    <path
      d="M18 17c-1.5-3-3-4-6-4.5V11c2-.5 4-1.5 4-3.5 0-1.5-1-2.5-3-2.5-2.5 0-4 1.8-4 4.5 0 2.5 1 4 3 4.5v1.5c-3 .5-4.5 1.5-6 4.5"
      stroke="#c29b38"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <circle cx="15.5" cy="7.5" r="1" fill="#ffffff" />
  </svg>
);

// 13. React.js
export const ReactLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61dafb" strokeWidth="1.4" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61dafb" strokeWidth="1.4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="#61dafb" strokeWidth="1.4" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#61dafb" />
  </svg>
);

// 14. JavaScript
export const JavaScriptLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="3.5" fill="#f7df1e" />
    <path
      d="M7.5 18.5c.8.5 1.7.7 2.6.7 1.5 0 2.4-.8 2.4-2.1v-5.6h-2.1v5.5c0 .5-.3.8-.8.8-.4 0-.7-.1-1-.3l-1.1 1zm8.7-4.1c-.8-.4-1.3-.7-1.3-1.2 0-.4.3-.7.9-.7.6 0 1.1.2 1.6.5l.8-1.3c-.6-.4-1.4-.6-2.4-.6-1.7 0-2.8 1-2.8 2.4 0 1.3.9 1.9 2 2.4.9.4 1.4.7 1.4 1.3 0 .5-.4.8-1.1.8-.8 0-1.4-.3-2-.7l-.9 1.3c.7.6 1.7.9 2.8.9 1.9 0 3.1-1 3.1-2.5 0-1.5-1-2.1-2.1-2.6z"
      fill="#000000"
    />
  </svg>
);

// 15. HTML5
export const Html5Logo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#e34f26" d="M3 2l1.6 18.2L12 23l7.4-2.8L21 2H3z" />
    <path fill="#ef652a" d="M12 3.8v17.4l5.9-2.2L19.3 3.8H12z" />
    <path
      fill="#ffffff"
      d="M12 8.4H7.9l.3 3.4H12V8.4zm0 6.4h-2.2l-.2-1.9H7.5l.3 4 4.2 1.2v-3.3zm0-9.8H6.5l.7 8.2h4.8V5zm0 13.5l-3.3-.9-.2-2.3H6.4l.3 4.2 5.3 1.5v-2.5z"
    />
    <path
      fill="#ebebeb"
      d="M12 8.4h4.1l-.4 4.5-3.7 1v2.1l3.5-1 .3-3.2h2.1l-.5 5.5-5.4 1.5V8.4zm0-3.4h5.5l-.2 2H12V5z"
    />
  </svg>
);

// 16. Tailwind CSS
export const TailwindLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#38bdf8">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

// 17. Node.js
export const NodeJsLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#5fa04e">
    <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L4.9 8.4v7.2L12 19.7l7.1-4.1V8.4L12 4.3z" />
    <path d="M12 7.5a4.5 4.5 0 0 0-4.5 4.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-2.5-2-4.5-4.5-4.5zm0 2c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z" />
  </svg>
);

// 18. Express
export const ExpressLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#0f172a" />
    <text x="3" y="16.5" fill="#f8fafc" fontSize="11" fontWeight="800" fontFamily="monospace">
      ex
    </text>
    <path d="M16 8l3 4-3 4M19 12h-4" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 19. MySQL
export const MySqlLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M19 15c-1-3-3.5-6-7.5-6.5-.5-1-1.5-2-2.5-2.5-.5 1-.5 2 0 3C7 9.5 5 11.5 4 14c-1 2.5 0 5 2 5.5 2 .5 4-.5 5-2 1.5.5 3 0 4-1.5.5 1 1.5 1.5 2.5 1.5 1 0 1.5-.5 1.5-1.5 0-.5 0-.8 0-1z"
      fill="#00758f"
    />
    <path d="M16 11c1-1 2-1 3-1-1 1-1 2-1 3" stroke="#f29111" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 20. Oracle Database
export const OracleLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4" fill="#ea2824" />
    <ellipse cx="12" cy="12" rx="7" ry="4.5" stroke="#ffffff" strokeWidth="2.2" fill="none" />
  </svg>
);

// 21. Git
export const GitLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#f05032">
    <path d="M21.6 10.7L13.3 2.4c-.5-.5-1.4-.5-1.9 0L9.1 4.7l2.8 2.8c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.7 2.7c.6-.2 1.3-.1 1.8.4.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.6-1.2-.4-1.8L13 10.9v4.8c.2.1.4.3.5.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.2-.2.4-.4.6-.5V10.7c-.2-.1-.4-.3-.6-.5-.5-.5-.6-1.2-.4-1.8L7.7 5.6 2.4 10.9c-.5.5-.5 1.4 0 1.9l8.3 8.3c.5.5 1.4.5 1.9 0l9-9c.5-.5.5-1.4 0-1.9z" />
  </svg>
);

// 22. GitHub
export const GitHubTechLogo: React.FC<TechLogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#181717">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
