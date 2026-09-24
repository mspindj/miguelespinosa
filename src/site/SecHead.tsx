import type { ReactNode } from "react";

interface Props {
  idx: string;
  id: string;
  title: ReactNode;
  meta?: ReactNode;
}

/** Section header rail: index cell, heading that "compiles" in, meta cell. */
export default function SecHead({ idx, id, title, meta }: Props) {
  return (
    <div className="tb-sechead">
      <span className="tb-sechead-idx" aria-hidden="true">
        {idx}
      </span>
      <h2 id={id} className="tb-sechead-title tb-compile" data-tb-reveal="">
        {title}
      </h2>
      {meta && <span className="tb-sechead-meta">{meta}</span>}
    </div>
  );
}
