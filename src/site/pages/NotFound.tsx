import { Link, useLocation } from "react-router-dom";
import { usePageChrome } from "../usePageChrome";
import { Cmd } from "../ui";

export default function NotFound({ query }: { query?: string }) {
  usePageChrome();
  const { pathname } = useLocation();
  const shown = query ?? pathname.replace(/^\//, "");
  return (
    <section id="not-found" className="tb-sec tb-404" data-tb-section="404" aria-labelledby="tb-404-h">
      <p className="tb-label">Error · 404</p>
      <h1 id="tb-404-h" className="tb-404-h">
        <span className="tb-404-code">404</span>
        <span className="tb-404-msg">
          <span aria-hidden="true">· </span>Record not found
        </span>
      </h1>
      <p className="tb-404-query">
        <span className="tb-prompt" aria-hidden="true">
          $ open{" "}
        </span>
        <code>{shown || "/"}</code>
      </p>
      <Link to="/" className="tb-btn tb-btn-primary">
        <Cmd>Return to index</Cmd>
      </Link>
    </section>
  );
}
