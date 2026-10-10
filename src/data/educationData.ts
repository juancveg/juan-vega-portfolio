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
  },
  training: [
    {
      id: 'cisco-networking-basics',
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Jun 2026',
      credentialType: 'Certificate',
    },
    {
      id: 'database-admin-course',
      title: 'Database Administrator Course',
      issuer: 'Capacítate para el Empleo',
      location: 'Barranquilla',
      date: 'Sep 2025',
      credentialType: 'Certificate',
    },
    {
      id: 'basic-computing-course',
      title: 'Basic Computing Course',
      issuer: 'Capacítate para el Empleo',
      location: 'Barranquilla',
      date: 'Mar 2025',
      credentialType: 'Certificate',
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
