import { useState } from "react";
import { Link } from "react-router-dom";
import AsciiStage from "../ascii/AsciiStage";
import type { TreeSpec } from "../ascii/tree";
import { caseHref, recordId, records } from "../content/cases";
import { insightHref, latestInsights, logDate } from "../content/insights";
import { site } from "../content/site";
import type { DecisionRecord } from "../content/types";
import Decode from "../Decode";
import SecHead from "../SecHead";
import { Cmd, Ext } from "../ui";

const HOME_TREE: TreeSpec = { seed: 23, rootBranches: 3, chosenIndex: 1, depth: 5 };

const years = records.flatMap((r) => r.years.split(/[–-]/).map(Number)).filter(Boolean);
const span = `${Math.min(...years)}–${Math.max(...years)}`;

function Hero() {
  const words = site.headline.join(" ").split(" ");
  return (
    <section id="top" className="tb-sec tb-hero" data-tb-section="Index" aria-labelledby="tb-hero-h" tabIndex={-1}>
      <div className="tb-hero-stage">
        <p className="tb-hero-meta">
          <span>00 / Index</span>
          <span>
            {records.length} records · {span}
          </span>
        </p>
        <h1 id="tb-hero-h" className="tb-hero-h">
          {words.map((w, i) => (
            <span key={w} className="tb-hero-word" style={{ "--i": i } as React.CSSProperties}>
              <span className="tb-knock">
                {w}
                {i === words.length - 1 && <span className="tb-cursor" aria-hidden="true" />}
              </span>{" "}
            </span>
          ))}
        </h1>
        <AsciiStage spec={HOME_TREE} className="tb-hero-ascii" caption="Fig. 00 · Decision tree · 3 options, 1 selected" />
      </div>

      <div className="tb-hero-foot">
        <div className="tb-cell tb-hero-intro">
          <p className="tb-label">{site.role}</p>
          <p className="tb-lede">{site.subhead}</p>
        </div>
        <div className="tb-cell tb-hero-ctas">
          <Link to="/#work" className="tb-btn tb-btn-primary">
            <Cmd>{site.primaryCta}</Cmd>
            <span className="tb-btn-arrow" aria-hidden="true">
              ↓
            </span>
          </Link>
          <Link to="/#manifesto" className="tb-btn">
            <Cmd>{site.secondaryCta}</Cmd>
            <span className="tb-btn-arrow" aria-hidden="true">
              ↓
            </span>
          </Link>
        </div>
        <div className="tb-cell tb-hero-proof">
          <p className="tb-label">Previously</p>
          <ul className="tb-proof-list">
            {site.socialProof.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function RecordRow({ r }: { r: DecisionRecord }) {
  const n = records.indexOf(r) + 1;
  return (
    <tr className="tb-rec-row">
      <td className="tb-td-id">
        {recordId(r)}
        {n <= 5 && (
          <kbd className="tb-keyhint" aria-hidden="true">
            {n}
          </kbd>
        )}
      </td>
      <td className="tb-td-muted">{r.years}</td>
      <th scope="row" className="tb-td-title">
        <Link to={caseHref(r)} className="tb-rec-link">
          {r.title}
        </Link>
      </th>
      <td className="tb-td-muted">{r.client}</td>
      <td className="tb-td-out">
        <strong>{r.metric.value}</strong>
        <span>{r.metric.label}</span>
      </td>
      <td className="tb-td-status">
        <span className="tb-sq" aria-hidden="true" />
        Accepted
        <span className="tb-row-arrow" aria-hidden="true">
          →
        </span>
      </td>
    </tr>
  );
}

function RecordCard({ r }: { r: DecisionRecord }) {
  return (
    <li className="tb-card">
      <p className="tb-card-top">
        <span>{recordId(r)}</span>
        <span>{r.years}</span>
      </p>
      <h3 className="tb-card-title">
        <Link to={caseHref(r)} className="tb-rec-link">
          {r.title}
        </Link>
      </h3>
      <p className="tb-card-client">{r.client}</p>
      <p className="tb-card-out">
        <strong>{r.metric.value}</strong>
        <span>{r.metric.label}</span>
      </p>
      <p className="tb-card-status">
        <span className="tb-sq" aria-hidden="true" />
        Accepted
        <span className="tb-row-arrow" aria-hidden="true">
          →
        </span>
      </p>
    </li>
  );
}

function Records() {
  const featured = records.filter((r) => r.featured);
  const archive = records.filter((r) => !r.featured);
  return (
    <section id="work" className="tb-sec" data-tb-section="Records" aria-labelledby="tb-work-h" tabIndex={-1}>
      <SecHead idx="01" id="tb-work-h" title="Decision records" meta={`${records.length} entries`} />
      <div className="tb-records-desk">
        <table className="tb-table">
          <caption className="tb-sr">Decision records. Each title opens its record.</caption>
          <colgroup>
            <col className="tb-col-id" />
            <col className="tb-col-years" />
            <col className="tb-col-title" />
            <col className="tb-col-client" />
            <col className="tb-col-out" />
            <col className="tb-col-status" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Years</th>
              <th scope="col">Title</th>
              <th scope="col">Client</th>
              <th scope="col">Outcome</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {featured.map((r) => (
              <RecordRow key={r.slug} r={r} />
            ))}
          </tbody>
          {archive.length > 0 && (
            <tbody className="tb-archive">
              <tr className="tb-archive-label">
                <th colSpan={6} scope="colgroup">
                  <span>Archive</span>
                </th>
              </tr>
              {archive.map((r) => (
                <RecordRow key={r.slug} r={r} />
              ))}
            </tbody>
          )}
        </table>
      </div>

      <div className="tb-records-mob">
        <ol className="tb-cards">
          {featured.map((r) => (
            <RecordCard key={r.slug} r={r} />
          ))}
        </ol>
        {archive.length > 0 && (
          <>
            <h3 className="tb-archive-h">
              <span>Archive</span>
            </h3>
            <ol className="tb-cards">
              {archive.map((r) => (
                <RecordCard key={r.slug} r={r} />
              ))}
            </ol>
          </>
        )}
      </div>
    </section>
  );
}

function Ticker() {
  const items = Array.from({ length: 4 });
  return (
    <div className="tb-ticker">
      <p className="tb-sr">{site.marquee}</p>
      <div className="tb-ticker-track" aria-hidden="true">
        {[0, 1].map((g) => (
          <span key={g} className="tb-ticker-group">
            {items.map((_, i) => (
              <span key={i} className="tb-ticker-item">
                {site.marquee}
                <span className="tb-ticker-sep">///</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

function Manifesto() {
  const { quote, body, eyebrow, fullCta } = site.manifesto;
  const [decoded, setDecoded] = useState(false);
  return (
    <section id="manifesto" className="tb-sec tb-inv" data-tb-section="Manifesto" aria-labelledby="tb-man-h" tabIndex={-1}>
      <SecHead idx="02" id="tb-man-h" title="Manifesto" meta={eyebrow} />
      <figure className="tb-quote">
        <blockquote>
          <p>
            {quote.map((line, i) => (
              <Decode
                key={line}
                text={line}
                className="tb-quote-line"
                delay={i * 280}
                onDone={i === quote.length - 1 ? () => setDecoded(true) : undefined}
              />
            ))}
            {decoded && <span className="tb-cursor" aria-hidden="true" />}
          </p>
        </blockquote>
      </figure>
      <div className="tb-man-foot">
        <p className="tb-man-body">{body}</p>
        <Link to="/about" className="tb-btn tb-man-cta">
          <Cmd>{fullCta}</Cmd>
          <span className="tb-btn-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

function Insights() {
  const latest = latestInsights(3);
  const { resource } = site;
  return (
    <section id="insights" className="tb-sec" data-tb-section="Insights" aria-labelledby="tb-ins-h" tabIndex={-1}>
      <SecHead idx="03" id="tb-ins-h" title="Insights" meta={`Log · latest ${latest.length}`} />
      <ol className="tb-log">
        {latest.map((a) => {
          const d = logDate(a.date);
          return (
            <li key={a.slug} className="tb-log-row">
              <time className="tb-log-date" dateTime={d.iso || undefined}>
                {d.display}
              </time>
              <span className="tb-log-cat">{a.category}</span>
              <div className="tb-log-main">
                <Link to={insightHref(a)} className="tb-log-link">
                  {a.title}
                </Link>
                <p className="tb-log-sub">{a.subtitle}</p>
              </div>
              <span className="tb-log-time">{a.readingTime}</span>
            </li>
          );
        })}
      </ol>
      <div className="tb-log-more">
        <Link to="/insights" className="tb-btn">
          <Cmd>All insights</Cmd>
          <span className="tb-btn-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
      <aside className="tb-resource" aria-labelledby="tb-res-h">
        <p className="tb-label">{resource.eyebrow}</p>
        <h3 id="tb-res-h" className="tb-resource-title">
          <Link to={resource.href} className="tb-resource-link">
            {resource.title}
          </Link>
        </h3>
        <p className="tb-resource-body">{resource.body}</p>
        <span className="tb-resource-cta" aria-hidden="true">
          <Cmd>{resource.cta}</Cmd> →
        </span>
      </aside>
    </section>
  );
}

function Contact() {
  const { contact } = site;
  const links = [
    { label: "LinkedIn", href: contact.linkedin },
    { label: "Behance", href: contact.behance },
    { label: "CV (PDF)", href: contact.cv },
  ];
  return (
    <section id="contact" className="tb-sec tb-contact" data-tb-section="Contact" aria-labelledby="tb-con-h" tabIndex={-1}>
      <SecHead idx="04" id="tb-con-h" title="Contact" meta="Email · LinkedIn · Behance · CV" />
      <div className="tb-contact-body">
        <p className="tb-label">{contact.eyebrow}</p>
        <p className="tb-contact-h">
          {contact.headline.map((l) => (
            <span key={l}>{l} </span>
          ))}
        </p>
        <a href={`mailto:${contact.email}`} className="tb-mail">
          <span className="tb-prompt" aria-hidden="true">
            $ mail
          </span>{" "}
          <span className="tb-mail-addr">{contact.email}</span>
        </a>
        <ul className="tb-contact-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="tb-btn">
                <Cmd>{l.label}</Cmd>
                <Ext />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="tb-colophon">
        <span>© 2026 {site.name}</span>
        <Link to="/privacy" className="tb-colophon-link">
          Privacy
        </Link>
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Records />
      <Ticker />
      <Manifesto />
      <Insights />
      <Contact />
    </>
  );
}
