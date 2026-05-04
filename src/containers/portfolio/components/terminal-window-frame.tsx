import { cn } from "@/utils";
import { ReactNode } from "react";

interface TerminalWindowFrameProps {
  title: string;
  command?: string;
  className?: string;
  children: ReactNode;
  noPadding?: boolean;
}

export const TerminalWindowFrame = ({
  title,
  command,
  className,
  children,
  noPadding = false,
}: TerminalWindowFrameProps) => {
  return (
    <article className={cn("terminal-window overflow-hidden", className)}>
      <header className="terminal-window__bar flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="terminal-dot bg-[#ff5f57]" />
          <span className="terminal-dot bg-[#febc2e]" />
          <span className="terminal-dot bg-[#28c840]" />
        </div>
        <p className="truncate text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
          {title}
        </p>
        <span className="text-[11px] font-mono text-emerald-700/80">
          {command ?? "ready"}
        </span>
      </header>
      <div
        className={`terminal-window__content ${noPadding ? "py-0" : "p-4 sm:p-6"}`}
      >
        {children}
      </div>
    </article>
  );
};
