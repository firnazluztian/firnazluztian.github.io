import { motion } from "framer-motion";

interface Datum {
  label: string;
  value: number;
}

interface MiniBarChartProps {
  title: string;
  data: Datum[];
  hideValues?: boolean;
}

export const MiniBarChart = ({
  title,
  data,
  hideValues = false,
}: MiniBarChartProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {data.map((item, index) => (
          <li key={`${item.label}-${index}`} className="space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-700">
              <span className="truncate pr-2">{item.label}</span>
              {!hideValues && <span className="font-semibold">{item.value}</span>}
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
