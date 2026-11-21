export type ProjectMockup = 'dashboard' | 'automation' | 'map' | 'chat';

export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  mockup: ProjectMockup;
  accent: 'dark' | 'light';
  conceptNote?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}
