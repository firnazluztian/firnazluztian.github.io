"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface PortfolioNavProps {
  sections: { id: string; label: string }[];
}

export const PortfolioNav = ({ sections }: PortfolioNavProps) => {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "home");
  const links = useMemo(() => sections, [sections]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (!node) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id);
            }
          });
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0.05,
        }
      );

      observer.observe(node);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [links]);

  return (
    <nav className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <ul className="space-y-3 rounded-2xl border border-slate-200 bg-white/85 p-3 shadow-md backdrop-blur">
        {links.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "group flex items-center gap-2 rounded-xl px-2 py-1.5 text-xs uppercase tracking-[0.18em] transition-colors font-mono",
                activeId === section.id ? "text-emerald-700" : "text-slate-500 hover:text-slate-900"
              )}
            >
              <motion.span
                layout
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  activeId === section.id ? "bg-emerald-500" : "bg-slate-300 group-hover:bg-slate-500"
                )}
              />
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
