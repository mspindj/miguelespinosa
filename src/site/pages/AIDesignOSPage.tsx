import { Link } from "react-router-dom";
import { afterCode, artifacts, beforeCode, components, forYou, intro, notForYou, week } from "../content/aiDesignOs";
import { site } from "../content/site";
import DocHead from "../DocHead";
import SecHead from "../SecHead";
import { usePageChrome } from "../usePageChrome";
import SubscribeForm from "./SubscribeForm";

/** How the five components relate to the model session (was SystemDiagram). */
function Architecture() {
  return (
    <ol className="tb-arch" aria-label="System architecture, left to right">
      <li className="tb-arch-col">
        <div className="tb-arch-node">
          <span className="tb-label">Context</span>
          <span>DESIGN.md</span>
          <span>voice.md</span>
          <span>domain-patterns.md</span>
        </div>
        <div className="tb-arch-node">
          <span className="tb-label">Memory</span>
          <span>corrections.md</span>
          <span>dont-do.md</span>
        </div>
      </li>
      <li className="tb-arch-col tb-arch-model">
        <div className="tb-arch-node tb-arch-node-model">
          <span className="tb-label">Model Session</span>
          <strong>AI Agent</strong>
          <span className="tb-arch-roles">
            <span>specifier</span>
            <span>implementer</span>
            <span>reviewer</span>
          </span>
        </div>
      </li>
      <li className="tb-arch-col">
        <div className="tb-arch-node">
          <span className="tb-label">04</span>
          <strong>Validation</strong>
          <span className="tb-arch-sub">scope · output · quality</span>
        </div>
        <div className="tb-arch-node">
          <span className="tb-label">05</span>
          <strong>Human Gate</strong>
          <span className="tb-arch-sub">you decide · then ship</span>
        </div>
      </li>
      <li className="tb-arch-col">
        <div className="tb-arch-node tb-arch-node-out">
          <span aria-hidden="true">✓</span>
          <strong>Predictable output</strong>
        </div>
      </li>
    </ol>
  );
}

function Terminal({ label, code, ok }: { label: string; code: string; ok?: boolean }) {
  return (
    <figure className={`tb-term${ok ? " tb-term-ok" : ""}`}>
      <figcaption className="tb-term-bar">{label}</figcaption>
      <pre className="tb-term-code">
        <code>{code}</code>
      </pre>
    </figure>
  );
}

export default function AIDesignOSPage() {
  usePageChrome();
  return (
    <>
      <DocHead
        id="aios"
        section="AI Design OS"
        back={{ to: "/insights", label: "Insights" }}
        crumb="AI Design OS"
        eyebrow="Free Resource"
        title={
          <>
            The AI Design <br />
            Operating System
          </>
        }
        titleLen={9}
        lede="AI without a system is expensive. Every session starts from scratch, every project re-explains itself. These are the five things that fixed that for me."
      >
        <div className="tb-aios-cta">
          <p className="tb-body">Get the formatted PDF. Read it in 20 minutes, implement it in a week.</p>
          <SubscribeForm id="primary-form" />
        </div>
      </DocHead>

      <section id="why" className="tb-sec tb-rsec" data-tb-section="AI Design OS / Why" aria-label="Why a system">
        <div className="tb-rsec-body tb-aios-wide">
          {intro.map((p) => (
            <p key={p} className="tb-body tb-aios-p">
              {p}
            </p>
          ))}
          <p className="tb-statement">This guide builds the environment.</p>
        </div>
      </section>

      <section id="diagram" className="tb-sec" data-tb-section="AI Design OS / Diagram" aria-labelledby="tb-aios-diag-h">
        <SecHead idx="01" id="tb-aios-diag-h" title="The model is in the middle. Everything else is the environment." meta="How it fits together" />
        <div className="tb-aios-block">
          <Architecture />
        </div>
        <div className="tb-aios-block">
          <p className="tb-label">The difference in practice</p>
          <h3 className="tb-aios-h3">Same prompt. Same model.</h3>
          <p className="tb-body">The only variable is whether the context files are there.</p>
          <div className="tb-terms">
            <Terminal label="without context files" code={beforeCode} />
            <Terminal label="with DESIGN.md loaded" code={afterCode} ok />
          </div>
        </div>
      </section>

      <section id="framework" className="tb-sec" data-tb-section="AI Design OS / Framework" aria-labelledby="tb-aios-fw-h">
        <SecHead idx="02" id="tb-aios-fw-h" title="Five components. One afternoon to set up." meta="The Framework" />
        <ol className="tb-aios-components">
          {components.map((c) => (
            <li key={c.number} className="tb-aios-component">
              <span className="tb-built-n" aria-hidden="true">
                {c.number}
              </span>
              <h3 className="tb-built-name">{c.name}</h3>
              <p className="tb-body">{c.description}</p>
              <ul className="tb-files" aria-label={`${c.name} files`}>
                {c.files.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="artifacts" className="tb-sec" data-tb-section="AI Design OS / Artifacts" aria-labelledby="tb-aios-art-h">
        <SecHead idx="03" id="tb-aios-art-h" title="What you actually produce now" meta="The New Artifacts" />
        <p className="tb-body tb-aios-lead">
          When your product is built with AI agents, you produce things that didn't exist five years ago. These four files are
          the core.
        </p>
        <ul className="tb-built tb-aios-artifacts">
          {artifacts.map((a) => (
            <li key={a.name} className="tb-built-cell">
              <h3 className="tb-built-name tb-file-name">{a.name}</h3>
              <p className="tb-body">{a.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="first-week" className="tb-sec" data-tb-section="AI Design OS / First week" aria-labelledby="tb-aios-wk-h">
        <SecHead idx="04" id="tb-aios-wk-h" title="Your first week" meta="Getting Started" />
        <table className="tb-table tb-week">
          <caption className="tb-sr">First week plan</caption>
          <tbody>
            {week.map((w, i) => (
              <tr key={w.day} data-last={i === week.length - 1 ? "true" : undefined}>
                <th scope="row" className="tb-week-day">
                  {w.day}
                </th>
                <td>
                  <strong className="tb-week-action">{w.action}</strong>
                  <span className="tb-week-detail">{w.detail}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section id="audience" className="tb-sec" data-tb-section="AI Design OS / Audience" aria-labelledby="tb-aios-aud-h">
        <SecHead idx="05" id="tb-aios-aud-h" title="Who This Is For" />
        <div className="tb-aios-fit">
          <div>
            <h3 className="tb-label tb-fit-h">This is for you if</h3>
            <ul className="tb-list">
              {forYou.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="tb-label tb-fit-h">This is not for you if</h3>
            <ul className="tb-list tb-list-muted">
              {notForYou.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="get-pdf" className="tb-sec tb-inv" data-tb-section="AI Design OS / Get the PDF" aria-labelledby="tb-aios-pdf-h">
        <div className="tb-aios-pdf">
          <p className="tb-label">Free PDF</p>
          <h2 id="tb-aios-pdf-h" className="tb-aios-pdf-h">
            Get the formatted guide
          </h2>
          <p className="tb-body">
            The full "AI Design Operating System" as a formatted PDF, complete with templates for DESIGN.md, voice.md,
            corrections.md, and the first-week setup checklist.
          </p>
          <SubscribeForm id="secondary-form" />
        </div>
      </section>

      <footer className="tb-sec tb-aios-author" data-tb-section="AI Design OS / Author" aria-label="Author">
        <p className="tb-aios-author-name">{site.name}</p>
        <p className="tb-label">{site.role}</p>
        <p className="tb-body">
          The system in this guide is the actual system I use. Built from running design work with embedded AI at Teleperformance
          (design system across 60+ countries), BBVA Colombia, Tati (AI translation), and The Birdie Club (AI golf app). Practice
          first, then documentation.
        </p>
        <p className="tb-aios-author-links">
          <Link to="/insights" className="tb-btn">
            Read the Insights <span aria-hidden="true">→</span>
          </Link>
          <Link to="/about" className="tb-btn">
            About Miguel
          </Link>
        </p>
      </footer>
    </>
  );
}
