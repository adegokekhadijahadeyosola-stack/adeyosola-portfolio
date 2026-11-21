import type { Project } from '@/types/portfolio';

/*
 * EDIT ME — All portfolio content lives in this file.
 * Update text, links, images and lists here without touching any components.
 */

export const CONTACT = {
  email: 'hello@adeyosola.dev', // EDIT: replace with the real email address
  emailDisplay: 'hello@adeyosola.dev',
  linkedin: '', // EDIT: paste full LinkedIn profile URL, e.g. https://linkedin.com/in/...
  github: '', // EDIT: paste full GitHub profile URL, e.g. https://github.com/...
};

export const SITE = {
  name: 'ADEYOSOLA',
  titles: [
    'Full-Stack Software Engineer',
    'AI Automation Engineer',
    'AI Chatbot Developer',
    'AI-Driven Application Developer',
  ],
  positioning:
    'I build intelligent digital products, full-stack applications, AI-powered chatbots and automation systems that transform ideas into practical solutions.',
};

export const PORTRAITS = {
  hero: '', // EDIT: paste a URL to a professional portrait (ideally portrait orientation)
  about: '', // EDIT: paste a URL to a second photo (any orientation)
};

export const HERO_LABELS = [
  'FULL-STACK DEVELOPMENT',
  'AI AUTOMATION',
  'AI CHATBOT DEVELOPMENT',
];

export const CV = {
  url: '', // EDIT: upload the CV PDF to the project (e.g. public/adeyosola-cv.pdf) and paste its path here
  label: 'Download My CV',
};

export const TECH_CATEGORIES: {
  title: string;
  tools: { name: string; note: string; icon: 'boxes' | 'db' | 'plug' | 'rocket' | 'workflow' | 'audio' }[];
}[] = [
  {
    title: 'AI-ASSISTED DEVELOPMENT',
    tools: [
      { name: 'Replit', note: 'AI-assisted build environment', icon: 'boxes' },
      { name: 'Lovable', note: 'AI-assisted application development', icon: 'boxes' },
    ],
  },
  {
    title: 'BACKEND AND DATABASE',
    tools: [
      { name: 'Supabase', note: 'Backend, database and authentication', icon: 'db' },
      { name: 'Firebase', note: 'Backend and realtime services', icon: 'db' },
    ],
  },
  {
    title: 'API AND INTEGRATION',
    tools: [
      { name: 'APIs', note: 'Connecting applications and services', icon: 'plug' },
      { name: 'Third-party integrations', note: 'Bringing external services together', icon: 'plug' },
    ],
  },
  {
    title: 'DEVELOPMENT AND DEPLOYMENT',
    tools: [
      { name: 'GitHub', note: 'Version control and collaboration', icon: 'rocket' },
      { name: 'Vercel', note: 'Application deployment and hosting', icon: 'rocket' },
    ],
  },
  {
    title: 'AI AUTOMATION',
    tools: [{ name: 'Make.com', note: 'Workflow automation and orchestration', icon: 'workflow' }],
  },
  {
    title: 'AI VOICE AND CHATBOT',
    tools: [{ name: 'ElevenLabs', note: 'Voice AI and conversational agents', icon: 'audio' }],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'carepulse',
    name: 'CarePulse',
    category: 'Healthcare Technology',
    tagline: 'Healthcare management, from registration to check-in.',
    description:
      'CarePulse is a healthcare management platform designed to improve patient registration, appointment management and communication between patients and clinic staff.',
    features: [
      'Patient registration',
      'Appointment management',
      'Patient-facing mobile experience',
      'QR appointment check-in',
      'Clinic dashboard',
      'Database integration',
      'Automated notifications',
    ],
    tech: ['Supabase', 'APIs', 'AI-assisted development'],
    liveUrl: '', // EDIT: paste the live deployment URL when available
    githubUrl: '', // EDIT: paste the real GitHub repository URL when available
    mockup: 'dashboard',
    accent: 'dark',
  },
  {
    id: 'nexaflow',
    name: 'NexaFlow',
    category: 'AI Automation & Business Management',
    tagline: 'AI-powered enquiry management for growing teams.',
    description:
      'NexaFlow is an AI-powered enquiry management solution designed to help businesses organise incoming customer enquiries, identify lead urgency and improve follow-up processes.',
    features: [
      'AI-powered enquiry processing',
      'Lead classification',
      'Lead scoring',
      'Automated follow-up reminders',
      'Google Sheets integration',
      'Gmail notifications',
      'Calendar integration',
    ],
    tech: ['Make.com', 'AI integrations', 'Google Sheets', 'Gmail'],
    liveUrl: '',
    githubUrl: '',
    mockup: 'automation',
    accent: 'light',
  },
  {
    id: 'naijaflow',
    name: 'Naija Flow AI',
    category: 'AI & Navigation Technology',
    tagline: 'Understanding traffic across Nigeria, intelligently.',
    description:
      'Naija Flow AI is an intelligent traffic and navigation platform concept focused on helping users understand traffic conditions and plan journeys across Nigeria. The concept explores how AI assistance and community reporting can make daily travel decisions easier.',
    features: [
      'Nigerian location search',
      'Traffic information',
      'Journey planning',
      'Map-based interface',
      'Accident reporting concept',
      'AI-powered traffic assistance',
    ],
    tech: ['AI-assisted development', 'APIs'],
    liveUrl: '',
    githubUrl: '',
    mockup: 'map',
    accent: 'dark',
    conceptNote:
      'This is a product concept. Described capabilities are part of the design vision, not an operational deployment.',
  },
  {
    id: 'chatbots',
    name: 'AI Chatbots & Voice Automation',
    category: 'Conversational AI',
    tagline: 'Conversational systems that speak, listen and resolve.',
    description:
      'A showcase of conversational AI assistants, voice automation concepts and intelligent customer interaction systems — designed to help businesses answer questions, capture information and automate routine conversations.',
    features: [
      'AI chatbot development',
      'Conversational AI design',
      'Voice AI integrations',
      'Customer support automation',
      'AI-powered assistants',
    ],
    tech: ['ElevenLabs', 'AI integrations'],
    liveUrl: '',
    githubUrl: '',
    mockup: 'chat',
    accent: 'light',
  },
  {
    id: 'automation',
    name: 'Business Automation Systems',
    category: 'Workflow Automation',
    tagline: 'Quiet workflows that save hours every week.',
    description:
      'Automation workflows that connect business applications, process incoming information and reduce repetitive tasks — from enquiry capture to notifications, records and follow-ups, without manual work in between.',
    features: [
      'Application-to-application workflows',
      'Automated data processing',
      'Notification systems',
      'Record keeping across tools',
      'Business process automation',
    ],
    tech: ['Make.com', 'APIs', 'AI integrations', 'Google Workspace'],
    liveUrl: '',
    githubUrl: '',
    mockup: 'automation',
    accent: 'dark',
  },
];

export const EXPERIENCE = [
  {
    company: 'Nuvanta Africa',
    role: 'Software Engineer',
    period: 'Start date — Present', // EDIT: replace with real employment dates
    location: 'Africa (Remote / On-site)', // EDIT: update to the real location
    summary:
      'Building digital products end to end — experimenting with AI-assisted development, developing web applications, working with backend services and creating automation solutions.',
    highlights: [
      'Built and shipped web applications using AI-assisted development tools and modern backend platforms.',
      'Designed and implemented automation workflows that connect applications and reduce repetitive work.',
      'Developed NexaFlow, an AI-powered enquiry management solution, for a team-based hackathon.',
      'Worked with backend services, APIs and integrations to turn product ideas into working systems.',
    ],
    // EDIT: add or adjust responsibilities as they happen — this list is intentionally easy to extend.
  },
];

export const ACHIEVEMENTS: {
  title: string;
  detail: string;
  context: string;
  placeholder?: boolean;
}[] = [
  {
    title: 'Nuvanta Africa Hackathon — NexaFlow',
    detail:
      'Participated in a team-based technology competition and developed NexaFlow, an AI-powered enquiry management solution.',
    context: 'Team competition',
  },
  {
    title: 'Achievement coming soon',
    detail: 'Space reserved for the next achievement, award or recognition.',
    context: 'Placeholder',
    placeholder: true,
  },
  {
    title: 'Certification coming soon',
    detail: 'Space reserved for certifications and professional recognitions.',
    context: 'Placeholder',
    placeholder: true,
  },
];
