import { Link, useParams } from "react-router-dom";
import AsciiStage from "../ascii/AsciiStage";
import { caseHref, getRecord, recordId, records } from "../content/cases";
import type { Block, DecisionRecord, OptionRow, SectionKey } from "../content/types";
import { useMedia } from "../context";
import Rich from "../Rich";
import { usePageChrome } from "../usePageChrome";
import { Cmd, Ext } from "../ui";
import NotFound from "./NotFound";

const SECTION_LABELS: Record<SectionKey, string> = {
  context: "Context",
  problem: "Problem",
  constraints: "Constraints",
  options: "Options",
  decision: "Decision",
  implementation: "Implementation",
  consequences: "Consequences",
  log: "Log",
};
const ORDER: SectionKey[] = ["context", "problem", "constraints", "options", "decision", "implementation", "consequences", "log"];

type H = "h3" | "h4";

function Verdict({ selected }: { selected: boolean }) {
  return selected ? (
    <span className="tb-verdict tb-verdict-on">
      <span className="tb-sq" aria-hidden="true" />
      Selected
    </span>
  ) : (
    <span className="tb-verdict">
      <span aria-hidden="true">×</span>
      Rejected
    </span>
  );
}

function OptionsTable({ items }: { items: OptionRow[] }) {
  return (
    <>
      <table className="tb-table tb-opt-table tb-desk-only">
        <caption className="tb-sr">Options considered and verdicts</caption>
        <thead>
          <tr>
            <th scope="col">Option</th>
            <th scope="col">Assessment</th>
            <th scope="col">Verdict</th>
          </tr>
        </thead>
        <tbody>
          {items.map((o, i) => (
            <tr key={o.name} data-selected={o.selected ? "true" : undefined}>
              <th scope="row">
                <span className="tb-opt-idx" aria-hidden="true">
                  {String.fromCharCode(65 + i)}
                </span>
                {o.name}
              </th>
              <td>
                <Rich text={o.assessment} />
              </td>
              <td>
                <Verdict selected={o.selected} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ol className="tb-opt-cards tb-mob-only">
        {items.map((o) => (
          <li key={o.name} className="tb-opt-card" data-selected={o.selected ? "true" : undefined}>
            <p className="tb-opt-top">
              <span>{o.label}</span>
              <Verdict selected={o.selected} />
            </p>
            <p className="tb-opt-name">{o.name}</p>
            <p className="tb-opt-assess">
              <Rich text={o.assessment} />
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}

function BlockView({ block, h }: { block: Block; h: H }) {
  const Title = h;
  switch (block.kind) {
    case "subhead":
      return <h3 className="tb-subhead">{block.text}</h3>;
    case "lead":
      return (
        <p className="tb-statement">
          <Rich text={block.text} />
        </p>
      );
    case "text":
      return (
        <p className="tb-body">
          <Rich text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul className="tb-list">
          {block.items.map((it) => (
            <li key={it}>
              <Rich text={it} />
            </li>
          ))}
        </ul>
      );
    case "cells": {
      const List = block.numbered ? "ol" : "ul";
      return (
        <List className="tb-built">
          {block.items.map((c, i) => {
            const label = c.label ?? (block.numbered ? String(i + 1).padStart(2, "0") : undefined);
            return (
              <li key={c.title ?? c.body} className="tb-built-cell">
                {label && (
                  <span className={c.title ? "tb-built-n" : "tb-built-n tb-built-n-strong"} aria-hidden={block.numbered ? true : undefined}>
                    {label}
                  </span>
                )}
                {c.title && <Title className="tb-built-name">{c.title}</Title>}
                <p className="tb-body">
                  <Rich text={c.body} />
                </p>
              </li>
            );
          })}
        </List>
      );
    }
    case "facts":
      return (
        <dl className="tb-facts">
          {block.items.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      );
    case "options":
      return <OptionsTable items={block.items} />;
    case "shifts":
      return (
        <ol className="tb-shifts">
          {block.items.map((s) => (
            <li key={s.from} className="tb-shift">
              <p className="tb-shift-pair">
                <s>{s.from}</s>
                <span className="tb-shift-arrow" aria-hidden="true">
                  →
                </span>
                <span className="tb-sr"> to </span>
                <strong>{s.to}</strong>
              </p>
              {s.note && (
                <p className="tb-shift-note">
                  <Rich text={s.note} />
                </p>
              )}
            </li>
          ))}
        </ol>
      );
    case "products":
      return (
        <ol className="tb-products">
          {block.items.map((p) => (
            <li key={p.number} className="tb-product">
              <p className="tb-product-n" aria-hidden="true">
                {p.number}
              </p>
              <Title className="tb-product-name">{p.name}</Title>
              <div className="tb-product-body">
                <p className="tb-label">Challenge</p>
                <p className="tb-body">
                  <Rich text={p.challenge} />
                </p>
                <p className="tb-label">Decision</p>
                <p className="tb-body">
                  <Rich text={p.decision} />
                </p>
              </div>
              <div className="tb-product-result">
                <p className="tb-label">Result</p>
                <p className="tb-product-result-text">
                  <Rich text={p.result} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "stats":
      return (
        <ul className="tb-stats">
          {block.items.map((m) => (
            <li key={m.label} className="tb-stat">
              <span className="tb-stat-v">{m.value}</span>
              <span className="tb-stat-l">{m.label}</span>
            </li>
          ))}
        </ul>
      );
    case "metrics":
      return (
        <ul className="tb-impact">
          {block.items.map((m) => (
            <li key={m.label} className="tb-impact-cell" data-long={m.value.length > 7 ? "true" : undefined}>
              <span className="tb-impact-v">{m.value}</span>
              <span className="tb-impact-l">{m.label}</span>
              {m.note && <span className="tb-impact-note">{m.note}</span>}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="tb-callout">
          <Title className="tb-callout-title">{block.title}</Title>
          <p className="tb-body">
            <Rich text={block.text} />
          </p>
        </div>
      );
    case "quote":
      return (
        <figure className="tb-reflect">
          <blockquote>
            <p>
              <span className="tb-prompt" aria-hidden="true">
                &gt;{" "}
              </span>
              {block.text}
            </p>
          </blockquote>
          <figcaption className="tb-label">
            {block.author}, {block.role}
          </figcaption>
        </figure>
      );
    case "link":
      return (
        <p className="tb-block-link">
          <a href={block.href} target="_blank" rel="noopener noreferrer" className="tb-btn">
            <Cmd>{block.label}</Cmd>
            <Ext />
          </a>
        </p>
      );
  }
}

function RecSection({ n, label, rid, blocks }: { n: string; label: string; rid: string; blocks: Block[] }) {
  const id = `sec-${label.toLowerCase()}`;
  const h: H = blocks.some((b) => b.kind === "subhead") ? "h4" : "h3";
  return (
    <section id={id} className="tb-sec tb-rsec" data-tb-section={`${rid} / ${n} ${label}`} aria-labelledby={`${id}-h`}>
      <div className="tb-rsec-rail">
        <h2 id={`${id}-h`} className="tb-rsec-h tb-compile" data-tb-reveal="">
          <span className="tb-rsec-n">{n}</span>
          <span className="tb-rsec-label">{label}</span>
        </h2>
      </div>
      <div className="tb-rsec-body">
        {blocks.map((b, i) => (
          <BlockView key={i} block={b} h={h} />
        ))}
      </div>
    </section>
  );
}

function Record({ r }: { r: DecisionRecord }) {
  usePageChrome();
  const wide = useMedia("(min-width: 1024px)");
  const rid = recordId(r);
  const idx = records.indexOf(r);
  const prev = records[(idx - 1 + records.length) % records.length];
  const next = records[(idx + 1) % records.length];
  const present = ORDER.filter((k) => r.sections[k]?.length);

  return (
    <article className="tb-record" aria-labelledby="tb-rec-title">
      <header id="record" className="tb-sec tb-rec-head" data-tb-section={`${rid} / Header`}>
        <nav className="tb-crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/#work" className="tb-crumb-link">
                <span aria-hidden="true">{"← "}</span>Records
              </Link>
            </li>
            <li aria-current="page">{rid}</li>
          </ol>
        </nav>

        <div className="tb-rec-titleblock">
          <p className="tb-label">Decision record {rid}</p>
          <h1
            id="tb-rec-title"
            className="tb-rec-title tb-compile-load"
            style={{ "--len": Math.max(6, ...r.title.split(" ").map((w) => w.length)) } as React.CSSProperties}
          >
            {r.title}
          </h1>
          <p className="tb-rec-tagline">{r.tagline}</p>
          <p className="tb-lede tb-rec-summary">{r.summary}</p>
        </div>

        {wide && (
          <AsciiStage
            spec={{ seed: 11 + Number(r.number) * 7, rootBranches: r.tree.branches, chosenIndex: r.tree.chosen, depth: 5 }}
            className="tb-rec-ascii"
            caption={`Fig. ${r.number} · ${rid}`}
          />
        )}

        <dl className="tb-rec-meta">
          <div>
            <dt>Record ID</dt>
            <dd>{rid}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <span className="tb-sq" aria-hidden="true" /> Accepted
            </dd>
          </div>
          <div>
            <dt>Years</dt>
            <dd>{r.years}</dd>
          </div>
          <div>
            <dt>Client</dt>
            <dd>{r.client}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{r.role}</dd>
          </div>
        </dl>
      </header>

      {r.image && (
        <figure className="tb-sec tb-rec-figure">
          <div className="tb-fig">
            <img src={r.image.src} alt={r.image.alt} width={r.image.width} height={r.image.height} loading="lazy" decoding="async" />
            <figcaption>
              <span>Fig. {r.number}</span>
              <span>{r.image.alt}</span>
            </figcaption>
          </div>
        </figure>
      )}

      {present.map((k, i) => {
        const label = k === "options" ? (r.optionsLabel ?? "Options") : SECTION_LABELS[k];
        return <RecSection key={k} n={String(i + 1).padStart(2, "0")} label={label} rid={rid} blocks={r.sections[k] ?? []} />;
      })}

      <nav className="tb-pager" aria-label="Records">
        <Link to={caseHref(prev)} className="tb-pager-link" rel="prev">
          <span className="tb-label">
            <span aria-hidden="true">{"← "}</span>Previous record
          </span>
          <span className="tb-pager-id">{recordId(prev)}</span>
          <span className="tb-pager-title">{prev.title}</span>
        </Link>
        <Link to={caseHref(next)} className="tb-pager-link tb-pager-next" rel="next">
          <span className="tb-label">
            Next record<span aria-hidden="true">{" →"}</span>
          </span>
          <span className="tb-pager-id">{recordId(next)}</span>
          <span className="tb-pager-title">{next.title}</span>
        </Link>
      </nav>
    </article>
  );
}

export default function CasePage() {
  const { slug } = useParams();
  const r = getRecord(slug);
  if (!r) return <NotFound query={slug ? `case-study/${slug}` : undefined} />;
  // Keyed by slug so per-record state (reveals, canvas) resets between records.
  return <Record key={r.slug} r={r} />;
}
