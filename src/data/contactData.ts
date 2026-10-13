import type { ContactData } from '@/types';

export const contactData: ContactData = {
  title: 'Strong networks start with a conversation.',
  subtitle: 'Looking for dependable support in network operations or IT infrastructure? Let’s talk about keeping your systems connected, reliable, and secure.',
  description:
    'I am actively available for technical positions in network operations, IT infrastructure support, and cybersecurity. Let us discuss how I can add immediate value to your engineering team.',
  availability: 'Available for Remote, Hybrid, and On-site opportunities in Barranquilla and internationally',
  channels: [
    {
      id: 'email',
      label: 'Direct Email',
      value: 'juanvegarojano@hotmail.com',
      href: 'mailto:juanvegarojano@hotmail.com',
      type: 'email',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+57 300 785 4790',
      href: 'https://wa.me/573007854790',
      type: 'whatsapp',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/juancvegarojano',
      href: 'https://www.linkedin.com/in/juancvegarojano',
      type: 'linkedin',
    },
    {
      id: 'github',
      label: 'GitHub Profile',
      value: 'github.com/juancveg',
      href: 'https://github.com/juancveg',
      type: 'github',
    },
    {
      id: 'location',
      label: 'Location & Timezone',
      value: 'Barranquilla, Colombia (GMT-5)',
      href: '#',
      type: 'location',
    },
  ],
};