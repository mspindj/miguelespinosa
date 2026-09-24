import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { articleNeighbours, getArticle, insightHref, logDate, logId } from "../content/insights";
import { site } from "../content/site";
import DocHead from "../DocHead";
import { Cmd } from "../ui";
import { usePageChrome } from "../usePageChrome";

interface Props {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  /** Legacy banner pattern; the log entry layout has no banner. */
  patternClass?: string;
  children: ReactNode;
}

const AUTHOR_ROLE = "Design Director & Strategic Leader";

/**
 * An article rendered as a log entry. The 21 article files keep calling this with the same
 * props; the log ID, reading time and neighbours come from `lib/articles.ts` via the URL.
 */
export default function ArticleLayout({ category, title, subtitle, date, children }: Props) {
  usePageChrome();
  const { pathname } = useLocation();
  const article = getArticle(pathname.split("/").filter(Boolean)[1]);
  const id = article ? logId(article) : "LOG";
  const d = logDate(date);
  const { prev, next } = article ? articleNeighbours(article) : { prev: undefined, next: undefined };

  return (
    <article className="tb-entry" aria-labelledby="entry-top-title">
      <DocHead
        id="entry-top"
        section={`${id} / Header`}
        back={{ to: "/insights", label: "Insights" }}
        crumb={id}
        eyebrow={`Log entry ${id} · ${category}`}
        title={title}
        lede={subtitle}
      >
        <dl className="tb-rec-meta tb-entry-meta">
          <div>
            <dt>Log ID</dt>
            <dd>{id}</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>
              <time dateTime={d.iso || undefined}>{d.display}</time>
            </dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{category}</dd>
          </div>
          <div>
            <dt>Reading time</dt>
            <dd>{article?.readingTime ?? "n/a"}</dd>
          </div>
          <div>
            <dt>Author</dt>
            <dd>{site.name}</dd>
          </div>
        </dl>
      </DocHead>

      <section id="entry" className="tb-sec tb-entry-body" data-tb-section={`${id} / Entry`} aria-label="Article">
        <div className="tb-prose">{children}</div>
        <p className="tb-entry-sign">
          <span className="tb-prompt" aria-hidden="true">
            --{" "}
          </span>
          {site.name}, {AUTHOR_ROLE}
        </p>
      </section>

      <nav className="tb-pager" aria-label="Log entries">
        {prev ? (
          <Link to={insightHref(prev)} className="tb-pager-link" rel="prev">
            <span className="tb-label">
              <span aria-hidden="true">{"← "}</span>Previous entry
            </span>
            <span className="tb-pager-id">{logId(prev)}</span>
            <span className="tb-pager-title tb-pager-title-sm">{prev.title}</span>
          </Link>
        ) : (
          <Link to="/insights" className="tb-pager-link">
            <span className="tb-label">First entry</span>
            <span className="tb-pager-title tb-pager-title-sm">
              <Cmd>All insights</Cmd>
            </span>
          </Link>
        )}
        {next ? (
          <Link to={insightHref(next)} className="tb-pager-link tb-pager-next" rel="next">
            <span className="tb-label">
              Next entry<span aria-hidden="true">{" →"}</span>
            </span>
            <span className="tb-pager-id">{logId(next)}</span>
            <span className="tb-pager-title tb-pager-title-sm">{next.title}</span>
          </Link>
        ) : (
          <Link to="/insights" className="tb-pager-link tb-pager-next">
            <span className="tb-label">Latest entry</span>
            <span className="tb-pager-title tb-pager-title-sm">
              <Cmd>All insights</Cmd>
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
