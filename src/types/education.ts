export interface DegreeItem {
  id: string;
  degree: string;
  degreeType: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  description?: string;
}

export interface LanguageCertItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  level: string;
  score: string;
  badge?: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialType: string;
  location?: string;
}

export interface EducationData {
  degrees: DegreeItem[];
  languageCert: LanguageCertItem;
  training: TrainingItem[];
}
