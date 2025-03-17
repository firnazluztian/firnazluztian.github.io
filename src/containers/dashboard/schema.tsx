import dynamic from "next/dynamic";
import { SchemaItem } from "./schema.type";

// Dynamic imports for code splitting
const Header = dynamic(() => import("@/components/layout/Header").then((mod) => mod.Header), { ssr: false });
const AboutMe = dynamic(() => import("@/containers/dashboard/about-me").then((mod) => mod.AboutMe), { ssr: false });
const Experience = dynamic(() => import("@/containers/dashboard/experience").then((mod) => mod.Experience), { ssr: false });
const Certifications = dynamic(() => import("@/containers/dashboard/certifications").then((mod) => mod.Certifications), { ssr: false });
const Activities = dynamic(() => import("@/containers/dashboard/activities").then((mod) => mod.Activities), { ssr: false });
const Projects = dynamic(() => import("@/containers/dashboard/projects").then((mod) => mod.Projects), { ssr: false });

export const contentSchema: SchemaItem[] = [
  {
    title: "Home",
    id: "home",
    showTitle: false,
    children: <Header />,
    styles: "bg-[url(/img/bg.jpg)] max-sm:bg-center bg-top p-0 object-cover",
  },
  {
    title: "About",
    id: "about",
    showTitle: false,
    children: <AboutMe />,
    styles: "min-h-screen bg-white",
  },
  {
    title: "Experience",
    id: "experience",
    showTitle: true,
    children: <Experience />,
    styles: "min-h-screen bg-gray-50",
  },
  {
    title: "Side Projects",
    id: "projects",
    showTitle: true,
    children: <Projects />,
    styles: "min-h-screen bg-white",
  },
  {
    title: "Activities",
    id: "activities",
    showTitle: true,
    children: <Activities />,
    styles: "min-h-screen bg-gray-50",
  },
  {
    title: "Certifications",
    id: "certifications",
    showTitle: true,
    children: <Certifications />,
    styles: "min-h-screen bg-white",
  },
] as const;
