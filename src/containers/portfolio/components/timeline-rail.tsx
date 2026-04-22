import { motion } from "framer-motion";

interface TimelineRailProps {
  items: Array<{
    id: string;
    title: string;
    subtitle: string;
    score: number;
  }>;
  activeId: string;
  onSelect: (id: string) => void;
}

export const TimelineRail = ({
  items,
  activeId,
  onSelect,
}: TimelineRailProps) => {
  return (
    <ul className="relative space-y-4">
      <div className="pointer-events-none absolute left-3 top-0 h-full w-px bg-slate-500 md:left-1/2 md:-translate-x-1/2" />
      {items.map((item, index) => {
        const isActive = activeId === item.id;
        const alignRight = index % 2 === 1;

        return (
          <li
            key={item.id}
            className={`relative flex md:w-full ${alignRight ? "md:justify-end" : "md:justify-start"}`}
          >
            <span className="absolute left-3 top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-slate-600 bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
            <button
              type="button"
              onClick={() => onSelect(item.id)}
              className={`ml-6 w-[calc(100%-1.5rem)] rounded-xl border p-3 text-left transition md:ml-0 md:w-[46%] ${
                isActive
                  ? "border-emerald-500 border-2 bg-white"
                  : "border-slate-200 bg-white hover:border-emerald-200 hover:bg-emerald-100"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500">{item.subtitle}</p>
                </div>
                <span className="rounded-full bg-slate-900 px-2 py-1 font-mono text-[11px] text-emerald-300">
                  #{index + 1}
                </span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                />
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
