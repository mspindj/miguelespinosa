import { articles, type Article } from "@/lib/articles";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/** "May 13, 2026" -> { iso: "2026-05-13", display: "2026.05.13" }. */
export function logDate(input: string) {
  const m = /^([a-z]{3})[a-z]*\s+(\d{1,2}),\s*(\d{4})$/i.exec(input.trim());
  const month = m ? MONTHS.indexOf(m[1].toLowerCase()) : -1;
  if (!m || month < 0) return { iso: "", display: input.toUpperCase() };
  const iso = `${m[3]}-${String(month + 1).padStart(2, "0")}-${m[2].padStart(2, "0")}`;
  return { iso, display: iso.split("-").join(".") };
}

/** Most recent articles first, by their published date. */
export function latestInsights(count: number): Article[] {
  return [...articles].sort((a, b) => logDate(b.date).iso.localeCompare(logDate(a.date).iso)).slice(0, count);
}

export const insightHref = (a: Article) => `/insights/${a.slug}`;
