import type { ProjectOrigin } from "../locale-resume/types";

export interface PortfolioUi {
  nav: {
    home: string;
    about: string;
    vocabulary: string;
    experience: string;
    projects: string;
    intel: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    learnMore: string;
    downloadResume: string;
    languageLabel: string;
  };
  about: {
    eyebrow: string;
    description: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
  };
  intel: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    downloadResume: string;
    connectLinkedIn: string;
  };
  metrics: {
    yearsBuilding: string;
    projectsShipped: string;
    certifications: string;
    careerChapters: string;
    projects: string;
    activityAlbums: string;
  };
  github: {
    publicRepos: string;
    followers: string;
    openProfile: string;
    contributionAlt: string;
  };
  projectCard: {
    origin: Record<ProjectOrigin, string>;
    groupProject: string;
    teamRole: string;
    impact: string;
    learnings: string;
    demo: string;
    code: string;
  };
  previewAlt: string;
}
