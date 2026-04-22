import { cn } from "@/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const SectionShell = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) => {
  return (
    <section
      id={id}
      className={cn(
        "portfolio-section relative px-4 py-16 sm:px-6 sm:py-20 lg:px-12",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 space-y-4 sm:mb-14"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};
