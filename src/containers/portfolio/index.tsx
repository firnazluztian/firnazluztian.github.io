"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { GithubContributionPanel } from "./components/github-contribution-panel";
import { LocaleSwitcher } from "./components/locale-switcher";
import { PortfolioNav } from "./components/portfolio-nav";
import { SectionShell } from "./components/section-shell";
import { PortfolioProjectCard } from "./components/portfolio-project-card";
import { TerminalWindowFrame } from "./components/terminal-window-frame";
import { TimelineRail } from "./components/timeline-rail";
import { TypeWriter } from "@/components/motion/motions";
import { LocaleProvider, useLocale } from "@/context/locale-context";
import { getPortfolioData } from "./schema";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const renderMarqueeItems = (items: string[]) =>
  items.map((item, index) => (
    <span
      key={`${item}-${index}`}
      className="hover:bg-gray-200 inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-700"
    >
      {item}
    </span>
  ));

function PortfolioContent() {
  const { locale, resume, ui } = useLocale();
  const data = useMemo(() => getPortfolioData(resume, ui), [resume, ui]);
  const sectionAnchors = useMemo(
    () => [
      { id: "home", label: ui.nav.home },
      { id: "about", label: ui.nav.about },
      { id: "vocabulary", label: ui.nav.vocabulary },
      { id: "experience", label: ui.nav.experience },
      { id: "projects", label: ui.nav.projects },
      { id: "intel", label: ui.nav.intel },
      { id: "contact", label: ui.nav.contact },
    ],
    [ui.nav],
  );
  const sortedProjects = useMemo(
    () =>
      [...data.sideProjects].sort(
        (a, b) => b.yearPublished - a.yearPublished,
      ),
    [data.sideProjects],
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeExperienceId, setActiveExperienceId] = useState(
    data.experiencePanels[0]?.id ?? "",
  );
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const activeExperience =
    data.experiencePanels.find((item) => item.id === activeExperienceId) ??
    data.experiencePanels[0];

  useEffect(() => {
    setActiveExperienceId(data.experiencePanels[0]?.id ?? "");
  }, [data.experiencePanels]);

  return (
    <div className="portfolio-page relative text-slate-900">
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />
      <LocaleSwitcher />
      <PortfolioNav sections={sectionAnchors} />

      <section
        id="home"
        ref={heroRef}
        className="portfolio-hero relative isolate overflow-hidden bg-[url(/img/bg.jpg)] bg-cover bg-top px-4 pb-24 pt-32 sm:px-6 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-32"
      >
        <div className="absolute inset-0 -z-10 bg-black/65" />

        <div className="mx-auto grid min-h-[78svh] w-full max-w-6xl gap-6 lg:items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="space-y-8"
          >
            <span className="text-white text-2xl font-bold">
              {ui.hero.greeting}{" "}
            </span>
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold leading-tight sm:text-5xl"
            >
              <TypeWriter
                key={locale}
                texts={[ui.hero.name, ui.hero.role]}
                className="text-theme inline-block"
              />
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
            >
              {ui.hero.tagline}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              {data.socials
                .filter((social) =>
                  ["LinkedIn", "Github", "Gitlab"].includes(social.title),
                )
                .map((social) => (
                  <a
                    key={social.title}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white transition hover:border-theme hover:text-theme"
                    aria-label={social.title}
                  >
                    <Icon icon={social.icon} className="h-5 w-5" />
                  </a>
                ))}
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="grid sm:flex items-center gap-4"
            >
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-theme px-6 py-3 text-sm font-semibold text-white transition hover:bg-opacity-90"
              >
                {ui.hero.learnMore}
                <Icon icon="mdi:arrow-down" className="h-4 w-4" />
              </a>
              <a
                href={data.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-gray-900"
              >
                {ui.hero.downloadResume}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionShell
        id="about"
        eyebrow={ui.about.eyebrow}
        title={data.about.title}
        description={ui.about.description}
      >
        <div className="grid gap-6 grid-cols-1">
          <TerminalWindowFrame title="about.context" command="cat ./about.md">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.p
                variants={itemVariants}
                className="text-sm leading-relaxed text-slate-600 sm:text-base"
              >
                {data.about.description}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="grid gap-2 sm:grid-cols-2"
              >
                {data.about.competencies.map((competency) => (
                  <p
                    key={competency}
                    className="rounded-lg border bg-gray-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-black"
                  >
                    {competency}
                  </p>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <GithubContributionPanel
                  profileUrl={data.github.profileUrl}
                  contributionImage={data.github.contributionsImage}
                  fallbackImage={data.github.fallbackImage}
                  repoCount={data.github.repoCount}
                  followers={data.github.followers}
                  labels={ui.github}
                />
              </motion.div>
            </motion.div>
          </TerminalWindowFrame>

          <TerminalWindowFrame title="skills.log" command="tail -f skills.txt" noPadding>
            <div className="space-y-3 overflow-hidden border-y border-none bg-none py-3">
              <div className="portfolio-marquee-row">
                <div className="portfolio-marquee-track portfolio-marquee-track--left">
                  {renderMarqueeItems(data.about.marquee.row1)}
                </div>
                <div
                  aria-hidden="true"
                  className="portfolio-marquee-track portfolio-marquee-track--left"
                >
                  {renderMarqueeItems(data.about.marquee.row1)}
                </div>
              </div>
              <div className="portfolio-marquee-row">
                <div className="portfolio-marquee-track portfolio-marquee-track--right">
                  {renderMarqueeItems(data.about.marquee.row2)}
                </div>
                <div
                  aria-hidden="true"
                  className="portfolio-marquee-track portfolio-marquee-track--right"
                >
                  {renderMarqueeItems(data.about.marquee.row2)}
                </div>
              </div>
            </div>
          </TerminalWindowFrame>

          <TerminalWindowFrame
            title="education.log"
            command="tail -f education.txt"
          >
            <div className="space-y-4">
              {data.education.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{item.subtitle}</p>
                  {item.location && (
                    <p className="mt-1 text-xs font-mono uppercase tracking-[0.12em] text-emerald-700/90">
                      {item.location}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </TerminalWindowFrame>
        </div>
      </SectionShell>

      <SectionShell
        id="experience"
        eyebrow={ui.experience.eyebrow}
        title={ui.experience.title}
        description={ui.experience.description}
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <TerminalWindowFrame title="timeline.index" command="ls ./experience">
            <TimelineRail
              items={data.experiencePanels.map((item) => ({
                id: item.id,
                title: item.company,
                subtitle: item.position,
                score: item.impactScore,
              }))}
              activeId={activeExperience?.id ?? ""}
              onSelect={setActiveExperienceId}
            />
          </TerminalWindowFrame>

          <TerminalWindowFrame
            title="timeline.detail"
            command="open chapter.log"
          >
            {activeExperience && (
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                    <Image
                      src={activeExperience.companyIcon}
                      alt={activeExperience.company}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {activeExperience.company}
                    </h3>
                    <p className="text-sm text-emerald-700">
                      {activeExperience.position}
                    </p>
                    <p className="text-sm text-slate-500">
                      {activeExperience.location}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    impact_score
                  </p>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.6 }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                    />
                  </div>
                </div>

                <ul className="space-y-2">
                  {activeExperience.descriptions.map((description) => (
                    <li
                      key={description}
                      className="flex gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm leading-relaxed text-slate-700"
                    >
                      <Icon
                        icon="mdi:terminal"
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                      />
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TerminalWindowFrame>
        </div>
      </SectionShell>

      <SectionShell
        id="projects"
        eyebrow={ui.projects.eyebrow}
        title={ui.projects.title}
        description={ui.projects.description}
      >
        <div className="flex flex-col gap-8">
          {sortedProjects.map((project, index) => (
            <PortfolioProjectCard
              key={project.title}
              project={project}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
              onImageClick={setSelectedImage}
              labels={ui.projectCard}
            />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="intel"
        eyebrow={ui.intel.eyebrow}
        title={ui.intel.title}
        description={ui.intel.description}
      >
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 xl:col-span-2">
            <TerminalWindowFrame
              title="certifications.db"
              command="select * from certifications;"
            >
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                {data.certifications.map((certificate) => (
                  <div
                    key={certificate.title}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-3"
                  >
                    <Icon
                      icon={certificate.icon}
                      className="h-5 w-5 text-emerald-600"
                    />
                    <p className="text-sm text-slate-700">
                      {certificate.title}
                    </p>
                  </div>
                ))}
              </div>
            </TerminalWindowFrame>
            <TerminalWindowFrame
              title="activity.feed"
              command="watch -n 1 activity.log"
            >
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                {data.activities.map((activity) => (
                  <article
                    key={activity.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                  >
                    <p className="text-sm font-semibold text-slate-800">
                      {activity.title}
                    </p>
                    <div className="mt-2 grid grid-cols-1 gap-2">
                      {activity.img.map((img) => (
                        <button
                          key={`${activity.title}-${img}`}
                          type="button"
                          onClick={() => setSelectedImage(img)}
                          className="relative aspect-square overflow-hidden rounded-lg border border-slate-200"
                        >
                          <Image
                            src={img}
                            alt={activity.title}
                            fill
                            className="object-cover"
                            sizes="140px"
                          />
                        </button>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </TerminalWindowFrame>
          </div>
        </div>
      </SectionShell>

      <section id="contact" className="px-4 pb-20 pt-6 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-10 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              {ui.contact.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              {ui.contact.title}
            </h2>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              {ui.contact.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={data.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              {ui.contact.downloadResume}
            </a>
            <a
              href={data.socials[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cyan-300 bg-cyan-50 px-6 py-3 text-center text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100"
            >
              {ui.contact.connectLinkedIn}
            </a>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
              className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <Image
                src={selectedImage}
                alt={ui.previewAlt}
                fill
                className="object-contain"
                quality={100}
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 rounded-full bg-slate-900/85 p-2 text-white/80 hover:text-white"
              >
                <Icon icon="mdi:close" className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Portfolio() {
  return (
    <LocaleProvider>
      <PortfolioContent />
    </LocaleProvider>
  );
}
