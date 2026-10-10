export type ProjectCategory =
  | 'AI'
  | 'Computer Vision'
  | 'Web Development'
  | 'Networking'
  | 'Systems Administration'
  | 'Geolocation';

export interface ProjectItem {
  id: string;
  title: string;
  previewLabel: string;
  image: string;
  summary: string;
  technologies: string[];
  extraTech?: string;
  outcome: string;
  githubUrl: string;
  categories: ProjectCategory[];
}
