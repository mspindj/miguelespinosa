import type { ReactNode } from "react";

/** Bracketed command label. Brackets are visual only, so the accessible name stays clean. */
export function Cmd({ children }: { children: ReactNode }) {
  return (
    <span className="tb-cmd">
      <span className="tb-br" aria-hidden="true">
        {"[\u00a0"}
      </span>
      {children}
      <span className="tb-br" aria-hidden="true">
        {"\u00a0]"}
      </span>
    </span>
  );
}

/** "↗" marker plus a screen-reader hint for links that open a new tab. */
export function Ext() {
  return (
    <>
      <span className="tb-ext" aria-hidden="true">
        ↗
      </span>
      <span className="tb-sr"> (opens in a new tab)</span>
    </>
  );
}
