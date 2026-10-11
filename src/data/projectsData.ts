import type { ProjectItem } from '@/types';
import zabbixImg from '@/assets/zabbix-monitoring-lab.webp';
import technovaImg from '@/assets/technova-vlan.webp';
import networkAnalyzerImg from '@/assets/network-analyzer.webp';
import buildsafeImg from '@/assets/buildsafe.webp';
import tiendayaImg from '@/assets/tiendaya.webp';
import transpormapImg from '@/assets/transpormap.webp';

export const projectsData: ProjectItem[] = [
  {
    id: 'zabbix-monitoring-lab',
    title: 'Zabbix Network Monitoring Lab',
    previewLabel: 'Zabbix Network Monitoring Lab preview',
    image: zabbixImg,
    summary:
      'Home lab monitoring setup built with Zabbix on Ubuntu Server, tracking host availability with tested alert triggers and a NOC-style dashboard.',
    technologies: ['Zabbix', 'Ubuntu Server', 'MariaDB', 'SSH', 'VirtualBox', 'ICMP', 'Troubleshooting'],
    outcome: 'Practicing real NOC L1 monitoring and troubleshooting workflows',
    githubUrl: 'https://github.com/juancveg/zabbix-monitoring-lab',
    categories: ['Systems Administration', 'Networking'],
  },
  {
    id: 'technova-corporate-vlan',
    title: 'TechNova — Corporate VLAN Lab',
    previewLabel: 'TechNova — Corporate VLAN Lab preview',
    image: technovaImg,
    summary:
      'Cisco Packet Tracer lab implementing a 3-VLAN corporate network with inter-VLAN routing, VLSM, DHCP, DNS, Port Security, and ACLs.',
    technologies: ['Cisco Packet Tracer', 'VLANs', '802.1Q', 'VLSM', 'DHCP', 'ACLs', 'Port Security', 'DNS'],
    outcome: 'Applying enterprise networking concepts end-to-end',
    githubUrl: 'https://github.com/juancveg/technova-vlan-lab',
    categories: ['Networking'],
  },
  {
    id: 'network-analyzer-dashboard',
    title: 'Network Analyzer Dashboard',
    previewLabel: 'Network Analyzer Dashboard preview',
    image: networkAnalyzerImg,
    summary:
      'Python network scanner operated from an HTML dashboard: detects active hosts via ARP and ICMP, calculates VLSM subnets, and visualizes the topology.',
    technologies: ['Python', 'ARP', 'ICMP', 'VLSM', 'Subnetting', 'HTML', 'Cisco'],
    outcome: 'Making networking theory concrete and measurable',
    githubUrl: 'https://github.com/juancveg/Network-Analyzer-Dashboard',
    categories: ['Networking', 'Software Development'],
  },
  {
    id: 'buildsafe',
    title: 'BuildSafe',
    previewLabel: 'BuildSafe preview',
    image: buildsafeImg,
    summary:
      'Web platform that monitors PPE compliance on construction sites in real time using AI-powered computer vision.',
    technologies: ['React', 'Node.js', 'Express', 'Python', 'Flask', 'YOLOv11', 'MySQL', 'Cloudinary'],
    outcome: 'Improving safety on construction projects',
    githubUrl: 'https://github.com/jhanhrndz/buildsafe-frontend',
    categories: ['Software Development'],
  },
  {
    id: 'tiendaya',
    title: 'TiendaYa',
    previewLabel: 'TiendaYa preview',
    image: tiendayaImg,
    summary:
      'E-commerce platform that helps small local shops in Barranquilla go digital, managing products and orders online.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'REST API'],
    outcome: 'Enhancing local e-commerce and digital inclusion',
    githubUrl: 'https://github.com/jhanhrndz/tiendaYa-project',
    categories: ['Software Development'],
  },
  {
    id: 'transpormap',
    title: 'TransporMap',
    previewLabel: 'TransporMap preview',
    image: transpormapImg,
    summary:
      'Java app that lets transport operators report road hazards and obstructions in real time using geolocation.',
    technologies: ['Java', 'Oracle', 'Geolocation', 'Maps'],
    outcome: 'Reshaping urban mobility with real-time data',
    githubUrl: 'https://github.com/jhanhrndz/transpormap',
    categories: ['Software Development'],
  },
];
