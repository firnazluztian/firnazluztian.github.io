import dynamic from "next/dynamic";
import { SchemaItem } from "./schema.type";
const Header = dynamic(() => import("@/components/layout/Header").then(mod => mod.Header), { ssr: false });
const AboutMe = dynamic(() => import("@/containers/about-me").then(mod => mod.AboutMe), { ssr: false });
const Projects = dynamic(() => import("@/containers/projects").then(mod => mod.Projects), { ssr: false });

export const contentSchema: SchemaItem[] = [
  {
    title: "Home",
    id: "home",
    showTitle: false,
    children: <Header />,
    styles: "bg-[url(/img/bg.jpg)] max-sm:bg-center bg-top"
  },
  {
    title: "About me",
    id: "about",
    children: <AboutMe />,
  },
  {
    title: "Experience",
    id: "projects",
    children: <Projects />,
  },
];