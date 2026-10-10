export type ProjectCategory =
  | 'Networking'
  | 'Systems Administration'
  | 'Software Development';

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
