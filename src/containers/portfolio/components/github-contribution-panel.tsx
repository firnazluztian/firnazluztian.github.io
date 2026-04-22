"use client";

import { useState } from "react";
import { TerminalWindowFrame } from "./terminal-window-frame";

interface GithubContributionPanelProps {
  profileUrl: string;
  contributionImage: string;
  fallbackImage: string;
  repoCount: number;
  followers: number;
}

export const GithubContributionPanel = ({
  profileUrl,
  contributionImage,
  fallbackImage,
  repoCount,
  followers,
}: GithubContributionPanelProps) => {
  const [imageSrc, setImageSrc] = useState(contributionImage);

  return (
    <TerminalWindowFrame title="github.activity" command="git log --graph --oneline">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-2xl font-bold text-slate-900">{repoCount}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
              Public Repos
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-2xl font-bold text-slate-900">{followers}</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
              Followers
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt="GitHub contribution graph for firnazluztian"
            onError={() => {
              if (imageSrc !== fallbackImage) {
                setImageSrc(fallbackImage);
              }
            }}
            className="h-auto w-full"
            loading="lazy"
          />
        </div>

        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700 transition hover:bg-emerald-100"
        >
          Open GitHub Profile
        </a>
      </div>
    </TerminalWindowFrame>
  );
};
