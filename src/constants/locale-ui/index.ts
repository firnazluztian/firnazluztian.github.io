import { uiEn } from "./en";
import { uiId } from "./id";
import { uiJp } from "./jp";
import type { Locale } from "../locale-resume/types";
import type { PortfolioUi } from "./types";

export type { PortfolioUi } from "./types";

export { uiEn } from "./en";
export { uiId } from "./id";
export { uiJp } from "./jp";

export const uiByLocale: Record<Locale, PortfolioUi> = {
  en: uiEn,
  id: uiId,
  jp: uiJp,
};

export const getPortfolioUi = (locale: Locale): PortfolioUi =>
  uiByLocale[locale];
