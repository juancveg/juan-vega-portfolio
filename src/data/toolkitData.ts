import type { ToolCategory } from '@/types';

export const toolkitData: ToolCategory[] = [
  {
    id: 'networking-protocols',
    name: 'Networking & Protocols',
    description: 'Core communication architectures, packet routing, and network segmentation.',
    tools: [
      { name: 'TCP/IP', tag: 'L3/L4 Protocol Stack', iconId: 'tcp-ip' },
      { name: 'Routing & Switching', tag: 'Inter-VLAN Routing & Switching', iconId: 'routing-switching' },
      { name: 'VLANs / 802.1Q', tag: 'Traffic Isolation & Trunking', iconId: 'vlans-8021q' },
      { name: 'Subnetting / VLSM', tag: 'CIDR & IP Address Planning', iconId: 'subnetting-vlsm' },
    ],
  },
  {
    id: 'monitoring-tools',
    name: 'Network & Monitoring Tools',
    description: 'Simulation environments, infrastructure monitoring, and remote administration.',
    tools: [
      { name: 'Cisco Packet Tracer', tag: 'Topology Simulation', iconId: 'cisco-packet-tracer' },
      { name: 'Zabbix', tag: 'Infrastructure Monitoring', iconId: 'zabbix' },
      { name: 'SSH Remote Admin', tag: 'Secure CLI Management', iconId: 'ssh-remote-admin' },
      { name: 'Python', tag: 'Scripting & Network Tooling', iconId: 'python' },
    ],
  },
  {
    id: 'systems-administration',
    name: 'Systems Administration',
    description: 'Server platforms, virtualization environments, and relational databases.',
    tools: [
      { name: 'Ubuntu Server', tag: 'Linux OS / Enterprise LTS', iconId: 'ubuntu-server' },
      { name: 'Linux CLI', tag: 'Bash & Core Utilities', iconId: 'linux-cli' },
      { name: 'Oracle VirtualBox', tag: 'Hypervisor & Test Labs', iconId: 'oracle-virtualbox' },
      { name: 'MariaDB', tag: 'SQL Database Server', iconId: 'mariadb' },
    ],
  },
  {
    id: 'frontend-development',
    name: 'Frontend Development',
    description: 'Responsive user interfaces, semantic architecture, and modern client styling.',
    tools: [
      { name: 'React.js', tag: 'Component UI Library', iconId: 'react' },
      { name: 'JavaScript', tag: 'ES6+ Client Scripting', iconId: 'javascript' },
      { name: 'HTML5', tag: 'Semantic Web Architecture', iconId: 'html5' },
      { name: 'Tailwind CSS', tag: 'Utility-First Styling Engine', iconId: 'tailwind-css' },
    ],
  },
  {
    id: 'backend-databases',
    name: 'Backend & Databases',
    description: 'Server-side runtime services, API frameworks, and relational data management.',
    tools: [
      { name: 'Node.js', tag: 'JavaScript Server Runtime', iconId: 'nodejs' },
      { name: 'Express', tag: 'RESTful API Framework', iconId: 'express' },
      { name: 'MySQL', tag: 'Relational Database Engine', iconId: 'mysql' },
      { name: 'Oracle', tag: 'Enterprise DB Management', iconId: 'oracle' },
    ],
  },
  {
    id: 'version-control',
    name: 'Version Control',
    description: 'Collaborative source code versioning, branch management, and repository hosting.',
    tools: [
      { name: 'Git', tag: 'Distributed Version Control', iconId: 'git' },
      { name: 'GitHub', tag: 'Repository Hosting', iconId: 'github' },
    ],
  },
];
