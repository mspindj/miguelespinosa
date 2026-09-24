import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  /** Status bar label for this block. */
  section: string;
  back: { to: string; label: string };
  crumb: string;
  eyebrow: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  /** Grow the title to fit its longest word, like record titles. */
  titleLen?: number;
  children?: ReactNode;
}

/** Page header shared by the long-form pages: breadcrumb, label, compiled title, lede. */
export default function DocHead({ id, section, back, crumb, eyebrow, title, lede, titleLen, children }: Props) {
  return (
    <header id={id} className="tb-sec tb-doc-head" data-tb-section={section}>
      <nav className="tb-crumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <Link to={back.to} className="tb-crumb-link">
              <span aria-hidden="true">{"← "}</span>
              {back.label}
            </Link>
          </li>
          <li aria-current="page">{crumb}</li>
        </ol>
      </nav>
      <div className="tb-doc-titleblock">
        <p className="tb-label">{eyebrow}</p>
        <h1
          id={`${id}-title`}
          className="tb-doc-title tb-compile-load"
          style={titleLen ? ({ "--len": titleLen } as React.CSSProperties) : undefined}
        >
          {title}
        </h1>
        {lede && <p className="tb-doc-lede">{lede}</p>}
      </div>
      {children}
    </header>
  );
}
