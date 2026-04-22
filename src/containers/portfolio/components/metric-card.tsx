"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "../hooks/use-count-up";

interface MetricCardProps {
  label: string;
  value: number;
  suffix?: string;
  tone?: "green" | "cyan" | "amber";
}

const toneClass: Record<NonNullable<MetricCardProps["tone"]>, string> = {
  green: "border-emerald-300/40 bg-emerald-50",
  cyan: "border-cyan-300/40 bg-cyan-50",
  amber: "border-amber-300/50 bg-amber-50",
};

export const MetricCard = ({
  label,
  value,
  suffix = "",
  tone = "green",
}: MetricCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp({ end: value, shouldStart: inView, durationMs: 1000 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-2xl border p-4 ${toneClass[tone]}`}
    >
      <p className="text-3xl font-bold text-slate-900">
        {count}
        {suffix}
      </p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
        {label}
      </p>
    </motion.div>
  );
};
