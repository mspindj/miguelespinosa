// Content model for the Terminal Brutal site. Text fields marked `Rich` accept a tiny inline
// markup rendered by `site/Rich.tsx`: **strong**, *em*, ~~struck~~ and [label](/internal-path).

export type Rich = string;

export interface Metric {
  value: string;
  label: string;
  /** Longer description shown under the label (case pages). */
  note?: string;
}

export interface Cell {
  label?: string;
  title?: string;
  body: Rich;
}

export interface Product {
  number: string;
  name: string;
  challenge: Rich;
  decision: Rich;
  result: Rich;
}

export interface OptionRow {
  label: string;
  name: string;
  assessment: Rich;
  selected: boolean;
}

export interface Shift {
  from: string;
  to: string;
  note?: Rich;
}

export type Block =
  | { kind: "subhead"; text: string }
  | { kind: "lead"; text: Rich }
  | { kind: "text"; text: Rich }
  | { kind: "list"; items: Rich[] }
  | { kind: "cells"; items: Cell[]; numbered?: boolean }
  | { kind: "facts"; items: { label: string; value: string }[] }
  | { kind: "options"; items: OptionRow[] }
  | { kind: "shifts"; items: Shift[] }
  | { kind: "products"; items: Product[] }
  | { kind: "stats"; items: Metric[] }
  | { kind: "metrics"; items: Metric[] }
  | { kind: "callout"; title: string; text: Rich }
  | { kind: "quote"; text: string; author: string; role: string }
  | { kind: "link"; label: string; href: string };

export type SectionKey =
  | "context"
  | "problem"
  | "constraints"
  | "options"
  | "decision"
  | "implementation"
  | "consequences"
  | "log";

export interface DecisionRecord {
  slug: string;
  /** "01" -> record ID "DR-001". */
  number: string;
  years: string;
  title: string;
  client: string;
  role: string;
  tagline: string;
  summary: string;
  /** Headline metric for the records index. */
  metric: Metric;
  tags: string[];
  featured: boolean;
  image?: { src: string; alt: string; width: number; height: number };
  /** OPTIONS renders as SHIFTS (from -> to) when the source describes transitions, not choices. */
  optionsLabel?: "Options" | "Shifts";
  /** Root branches and chosen branch of the decorative ASCII tree. */
  tree: { branches: number; chosen: number };
  sections: Partial<Record<SectionKey, Block[]>>;
}
