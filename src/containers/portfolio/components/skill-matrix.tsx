import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface SkillMatrixProps {
  skills: Array<{
    name: string;
    group: "frontend" | "backend" | "tooling";
    level: number;
  }>;
}

export const SkillMatrix = ({ skills }: SkillMatrixProps) => {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
      {skills.map((skill, index) => (
        <motion.article
          key={`${skill.name}-${index}`}
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.03, duration: 0.35 }}
          whileHover={{ y: -4, scale: 1.03 }}
          className="group relative rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
        >
          <div className="flex items-center justify-center">
            <Icon icon={skill.name} className="h-8 w-8" />
          </div>
          <span className="pointer-events-none absolute inset-x-2 -bottom-2 rounded-md bg-slate-900 px-2 py-1 text-center text-[10px] font-medium text-white opacity-0 shadow transition group-hover:opacity-100">
            {skill.name.replace("skill-icons:", "").replace("-dark", "")}
          </span>
        </motion.article>
      ))}
    </div>
  );
};
