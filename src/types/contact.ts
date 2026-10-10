export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  href: string;
  type: 'email' | 'linkedin' | 'github' | 'location' | 'whatsapp';
}

export interface ContactData {
  title: string;
  subtitle: string;
  description: string;
  availability: string;
  channels: ContactChannel[];
}
