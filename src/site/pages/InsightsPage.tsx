import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { filterOptions, type Article, type FilterValue } from "@/lib/articles";
import { articlesNewestFirst, insightHref, logDate } from "../content/insights";
import DocHead from "../DocHead";
import ResourceCallout from "../ResourceCallout";
import { usePageChrome } from "../usePageChrome";

const ALL = articlesNewestFirst();

function matches(a: Article, tag: FilterValue, query: string) {
  if (tag !== "all" && a.filterTag !== tag) return false;
  if (!query) return true;
  const hay = `${a.title} ${a.subtitle} ${a.category} ${a.summary}`.toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => hay.includes(word));
}

function LogRow({ a }: { a: Article }) {
  const d = logDate(a.date);
  return (
    <tr className="tb-rec-row tb-hub-row">
      <td className="tb-td-muted">
        <time dateTime={d.iso || undefined}>{d.display}</time>
      </td>
      <td className="tb-td-muted tb-hub-cat">{a.category}</td>
      <th scope="row" className="tb-hub-title">
        <Link to={insightHref(a)} className="tb-rec-link">
          {a.title}
        </Link>
        <span className="tb-hub-sub">{a.subtitle}</span>
      </th>
      <td className="tb-td-status">
        {a.readingTime}
        <span className="tb-row-arrow" aria-hidden="true">
          →
        </span>
      </td>
    </tr>
  );
}

export default function InsightsPage() {
  usePageChrome();
  const [tag, setTag] = useState<FilterValue>("all");
  const [query, setQuery] = useState("");
  const results = useMemo(() => ALL.filter((a) => matches(a, tag, query.trim())), [tag, query]);

  return (
    <>
      <DocHead
        id="insights-top"
        section="Insights"
        back={{ to: "/", label: "Index" }}
        crumb="Insights"
        title="Insights"
        titleLen={8}
        lede="Strategic thinking on design, AI, and organizational transformation."
      />

      <section id="log" className="tb-sec tb-hub" data-tb-section="Insights / Log" aria-labelledby="tb-hub-h">
        <h2 id="tb-hub-h" className="tb-sr">
          All insights
        </h2>

        <div className="tb-hub-controls">
          <form className="tb-grep" role="search" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="tb-grep-input" className="tb-grep-label">
              <span aria-hidden="true">{"$\u00a0"}</span>grep
              <span className="tb-sr"> (filter articles by text)</span>
            </label>
            <input
              id="tb-grep-input"
              type="search"
              className="tb-grep-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
              spellCheck={false}
              aria-describedby="tb-hub-count"
            />
          </form>

          <div className="tb-tags" role="group" aria-labelledby="tb-tags-label">
            <span id="tb-tags-label" className="tb-label">
              Filter
            </span>
            {filterOptions.map((f) => (
              <button
                key={f.value}
                type="button"
                className="tb-tag"
                aria-pressed={tag === f.value}
                onClick={() => setTag(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <p id="tb-hub-count" className="tb-hub-count" role="status" aria-live="polite">
          {results.length === 0 ? "No articles match this filter." : `${results.length} of ${ALL.length} entries`}
          {results.length === 0 && (
            <button
              type="button"
              className="tb-tag tb-hub-reset"
              onClick={() => {
                setTag("all");
                setQuery("");
              }}
            >
              Clear filters
            </button>
          )}
        </p>

        {results.length > 0 && (
          <>
            <div className="tb-hub-desk">
              <table className="tb-table tb-hub-table">
                <caption className="tb-sr">Insights log. Each title opens the article.</caption>
                <colgroup>
                  <col className="tb-hcol-date" />
                  <col className="tb-hcol-cat" />
                  <col />
                  <col className="tb-hcol-time" />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Title</th>
                    <th scope="col">Read</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((a) => (
                    <LogRow key={a.slug} a={a} />
                  ))}
                </tbody>
              </table>
            </div>

            <ol className="tb-log tb-hub-mob">
              {results.map((a) => {
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
                    <span className="tb-log-time">
                      {a.readingTime}
                    </span>
                  </li>
                );
              })}
            </ol>
          </>
        )}

        <ResourceCallout id="tb-hub-res-h" />
      </section>
    </>
  );
}
