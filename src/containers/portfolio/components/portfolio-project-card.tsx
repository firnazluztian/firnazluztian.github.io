import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TerminalWindowFrame } from "./terminal-window-frame";
import type { PortfolioProject } from "../schema";

const ORIGIN_LABELS: Record<PortfolioProject["origin"], string> = {
  "self-initiated": "Self-initiated",
  "class-assignment": "Class assignment",
  "work-assignment": "Work assignment",
  mentorship: "Mentorship",
};

interface PortfolioProjectCardProps {
  project: PortfolioProject;
  index: number;
  shouldReduceMotion: boolean | null;
  onImageClick: (src: string) => void;
}

export const PortfolioProjectCard = ({
  project,
  index,
  shouldReduceMotion,
  onImageClick,
}: PortfolioProjectCardProps) => {
  return (
    <TerminalWindowFrame
      title={`project.${index + 1}`}
      command={project.demo ? "npm run demo" : "npm run inspect"}
    >
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="space-y-5"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-emerald-700">
              {project.role}
            </p>
          </div>
          <span className="rounded-full bg-slate-900 px-3 py-1 font-mono text-[11px] text-emerald-300">
            {project.yearPublished}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-700">
            {ORIGIN_LABELS[project.origin]}
          </span>
          {project.isGroupProject && (
            <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-amber-800">
              Group project
            </span>
          )}
        </div>

        {project.isGroupProject && project.groupRole && (
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-800">
              My role in the team
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              {project.groupRole}
            </p>
          </div>
        )}

        <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
          {project.summary}
        </p>

        <p className="text-sm leading-relaxed text-slate-500">
          {project.description}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
              Impact
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              {project.impact}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-700">
              What I learned
            </p>
            <ul className="mt-2 space-y-2">
              {project.learnings.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-slate-700"
                >
                  <Icon
                    icon="mdi:terminal"
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {(project.demo || project.link) && (
          <div className="flex flex-wrap gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-700 transition hover:bg-emerald-100"
              >
                Demo
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-700 transition hover:bg-cyan-100"
              >
                Code
              </a>
            )}
          </div>
        )}

        {project.imgs.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {project.imgs.map((img, imgIndex) => (
              <motion.button
                type="button"
                key={`${project.title}-${img}`}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                onClick={() => onImageClick(img)}
                className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
              >
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${imgIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </motion.button>
            ))}
          </div>
        )}
      </motion.div>
    </TerminalWindowFrame>
  );
};
