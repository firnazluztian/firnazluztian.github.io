import { resumeEn } from "./en";
import { resumeId } from "./id";
import { resumeJp } from "./jp";
import type { Locale, Resume } from "./types";

export type {
  Locale,
  ProjectOrigin,
  Resume,
  ResumeActivity,
  ResumeCertification,
  ResumeExperience,
  ResumeQualification,
  ResumeSocial,
  SideProject,
} from "./types";

export { resumeEn } from "./en";
export { resumeId } from "./id";
export { resumeJp } from "./jp";

export const LOCALES: Locale[] = ["en", "id", "jp"];

export const resumesByLocale: Record<Locale, Resume> = {
  en: resumeEn,
  id: resumeId,
  jp: resumeJp,
};

export const getResume = (locale: Locale): Resume => resumesByLocale[locale];
