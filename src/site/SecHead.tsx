import type { ReactNode } from "react";

interface Props {
  id: string;
  title: ReactNode;
  meta?: ReactNode;
}

/** Section header rail: heading that "compiles" in, plus a meta cell only when it adds information. */
export default function SecHead({ id, title, meta }: Props) {
  return (
    <div className="tb-sechead">
      <h2 id={id} className="tb-sechead-title tb-compile" data-tb-reveal="">
        {title}
      </h2>
      {meta && <span className="tb-sechead-meta">{meta}</span>}
    </div>
  );
}
