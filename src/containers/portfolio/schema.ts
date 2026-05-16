import { resume, type SideProject } from "@/constants/resume";
import { calculateYearsOfExperience } from "@/utils";

export interface PortfolioMetric {
  label: string;
  value: number;
  suffix?: string;
}

export interface PortfolioEducation {
  title: string;
  subtitle: string;
  location?: string;
}

export interface PortfolioExperience {
  company: string;
  location: string;
  position: string;
  companyIcon: string;
  descriptions: string[];
}

export type PortfolioProject = SideProject;

export interface PortfolioCertification {
  title: string;
  icon: string;
}

export interface PortfolioActivity {
  title: string;
  img: string[];
}

export interface PortfolioSocial {
  title: string;
  icon: string;
  url: string;
}

export interface PortfolioDataModel {
  downloadLink: string;
  about: {
    title: string;
    description: string;
    competencies: string[];
    skills: string[];
    marquee: {
      row1: string[];
      row2: string[];
    };
  };
  education: PortfolioEducation[];
  experiences: PortfolioExperience[];
  sideProjects: PortfolioProject[];
  certifications: PortfolioCertification[];
  activities: PortfolioActivity[];
  socials: PortfolioSocial[];
  metrics: PortfolioMetric[];
  quickStats: Array<{
    label: string;
    value: number;
    suffix?: string;
    tone: "green" | "cyan" | "amber";
  }>;
  roleDistribution: Array<{
    label: string;
    value: number;
  }>;
  projectDistribution: Array<{
    label: string;
    value: number;
  }>;
  skillMatrix: Array<{
    name: string;
    group: "frontend" | "backend" | "tooling";
    level: number;
  }>;
  experiencePanels: Array<{
    id: string;
    company: string;
    position: string;
    location: string;
    companyIcon: string;
    descriptions: string[];
    impactScore: number;
  }>;
  github: {
    profileUrl: string;
    contributionsImage: string;
    fallbackImage: string;
    repoCount: number;
    followers: number;
  };
}

const toNumber = (value: string): number => {
  const parsed = Number.parseInt(value.replace("+", ""), 10);
  return Number.isNaN(parsed) ? 0 : parsed;
};

export const getPortfolioData = (): PortfolioDataModel => {
  const years = toNumber(calculateYearsOfExperience(2020));
  const experiences = resume.projects.experiences;
  const sideProjects = resume.projects.sideProjects;
  const certifications = resume.projects.certifications;

  const roleDistribution = experiences.map((item) => ({
    label: item.company,
    value: item.descriptions.length,
  }));

  const projectDistribution = sideProjects.map((item) => ({
    label: item.title,
    value: item.imgs.length > 0 ? item.imgs.length : 1,
  }));

  const skillMatrix = resume.aboutMe.skills.map((skill, index) => {
    const group: PortfolioDataModel["skillMatrix"][number]["group"] =
      index % 3 === 0 ? "frontend" : index % 3 === 1 ? "backend" : "tooling";
    return {
      name: skill,
      group,
      level: 60 + ((index * 7) % 35),
    };
  });

  return {
    downloadLink: resume.downloadLink,
    about: {
      title: resume.aboutMe.title,
      description: resume.aboutMe.description,
      competencies: resume.aboutMe.competencies,
      skills: resume.aboutMe.skills,
      marquee: resume.aboutMe.marquee,
    },
    education: resume.projects.qualifications,
    experiences,
    sideProjects,
    certifications,
    activities: resume.activities,
    socials: resume.socialMedia,
    metrics: [
      { label: "Years Building", value: years, suffix: "+" },
      { label: "Projects Shipped", value: sideProjects.length },
      { label: "Certifications", value: certifications.length },
      { label: "Career Chapters", value: experiences.length },
    ],
    quickStats: [
      { label: "Years Building", value: years, suffix: "+", tone: "green" },
      { label: "Projects", value: sideProjects.length, tone: "cyan" },
      { label: "Certifications", value: certifications.length, tone: "amber" },
      { label: "Activity Albums", value: resume.activities.length, tone: "green" },
    ],
    roleDistribution,
    projectDistribution,
    skillMatrix,
    experiencePanels: experiences.map((item, index) => ({
      id: `${item.company}-${index}`,
      company: item.company,
      position: item.position,
      location: item.location,
      companyIcon: item.companyIcon,
      descriptions: item.descriptions,
      impactScore: Math.min(100, 45 + item.descriptions.length * 8),
    })),
    github: {
      profileUrl: "https://github.com/firnazluztian",
      contributionsImage: "https://ghchart.rshah.org/34d399/firnazluztian",
      fallbackImage: "https://ghchart.rshah.org/firnazluztian",
      repoCount: 31,
      followers: 2,
    },
  };
};
