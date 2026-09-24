import { Fragment } from "react";
import { Link } from "react-router-dom";
import type { Rich as RichText } from "./content/types";

const TOKEN = /(\*\*[^*]+\*\*|~~[^~]+~~|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g;

/** Renders the inline markup used in content files: **strong**, *em*, ~~struck~~, [label](/path). */
export default function Rich({ text }: { text: RichText }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("~~") && part.endsWith("~~")) return <s key={i}>{part.slice(2, -2)}</s>;
        const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
        if (link) {
          return link[2].startsWith("/") ? (
            <Link key={i} to={link[2]} className="tb-inline-link">
              {link[1]}
            </Link>
          ) : (
            <a key={i} href={link[2]} className="tb-inline-link">
              {link[1]}
            </a>
          );
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
