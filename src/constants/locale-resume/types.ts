export type Locale = "en" | "id" | "jp";

export type ProjectOrigin =
  | "self-initiated"
  | "class-assignment"
  | "work-assignment"
  | "mentorship";

export interface SideProject {
  title: string;
  summary: string;
  description: string;
  role: string;
  yearPublished: number;
  origin: ProjectOrigin;
  isGroupProject: boolean;
  groupRole?: string;
  impact: string;
  learnings: string[];
  demo?: string;
  link?: string;
  imgs: string[];
}

export interface ResumeQualification {
  title: string;
  subtitle: string;
  location?: string;
}

export interface ResumeExperience {
  company: string;
  location: string;
  position: string;
  companyIcon: string;
  descriptions: string[];
}

export interface ResumeCertification {
  title: string;
  icon: string;
}

export interface ResumeActivity {
  title: string;
  img: string[];
}

export interface ResumeSocial {
  title: string;
  icon: string;
  url: string;
}

export interface Resume {
  downloadLink: string;
  aboutMe: {
    title: string;
    description: string;
    competencies: string[];
    skills: string[];
    marquee: {
      row1: string[];
      row2: string[];
    };
  };
  projects: {
    qualifications: ResumeQualification[];
    experiences: ResumeExperience[];
    certifications: ResumeCertification[];
    sideProjects: SideProject[];
  };
  activities: ResumeActivity[];
  socialMedia: ResumeSocial[];
}
