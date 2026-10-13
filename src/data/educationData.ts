import type { EducationData } from '@/types';

export const educationData: EducationData = {
  degrees: [
    {
      id: 'systems-engineering',
      degree: 'Systems Engineering',
      degreeType: "Bachelor's Degree",
      institution: 'Universidad Simón Bolívar',
      location: 'Barranquilla, Atlántico',
      period: 'Feb 2022 – Present',
      status: '10th Semester · In Progress',
      description:
        'Undergraduate degree focused on computer architecture, network administration, distributed systems, and software engineering.',
    },
  ],
  languageCert: {
    id: 'ef-set-b2',
    title: 'English — EF SET Certificate',
    issuer: 'EF Standard English Test',
    date: 'Jul 15, 2026',
    level: 'B2 Upper Intermediate',
    score: '58/100 · Reading C2',
    badge: 'CEFR B2 Certified',
    credentialUrl: 'https://cert.efset.org/kDBTFU',
  },
  training: [
    {
      id: 'cisco-networking-basics',
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Jun 2026',
      credentialType: 'Certificate',
      credentialUrl: 'https://www.credly.com/badges/9df252d7-a41b-43e6-9299-698a71a72753/linked_in_profile',
    },
    {
      id: 'database-admin-course',
      title: 'Database Administrator Course',
      issuer: 'Capacítate para el Empleo',
      date: 'Sep 2025',
      credentialType: 'Certificate',
      credentialUrl: 'https://capacitateparaelempleo.org/verifica/b620219f-daca-4257-b418-d771dae93033/5026bc30-a5b9-4009-96c7-a125f8d832d8',
    },
    {
      id: 'basic-computing-course',
      title: 'Basic Computing Course',
      issuer: 'Capacítate para el Empleo',
      date: 'Mar 2025',
      credentialType: 'Certificate',
      credentialUrl: 'https://capacitateparaelempleo.org/verifica/b620219f-daca-4257-b418-d771dae93033/554dca66-e75e-42cc-9a25-ed4a9397a841',
    },
    {
      id: 'administrative-assistant',
      title: 'Administrative Assistant',
      issuer: 'CODETEC',
      location: 'Barranquilla',
      date: 'Dec 2021',
      credentialType: 'Technical Program',
    },
  ],
};
