import { Link } from "react-router-dom";
import { site } from "./content/site";
import { Cmd } from "./ui";

/** The AI Design OS lead magnet, presented as a record: the whole block is one link. */
export default function ResourceCallout({ id }: { id: string }) {
  const { resource } = site;
  return (
    <aside className="tb-resource" aria-labelledby={id}>
      <h3 id={id} className="tb-resource-title">
        <Link to={resource.href} className="tb-resource-link">
          {resource.title}
        </Link>
      </h3>
      <p className="tb-resource-body">{resource.body}</p>
      <span className="tb-resource-cta" aria-hidden="true">
        <Cmd>{resource.cta}</Cmd> →
      </span>
    </aside>
  );
}
