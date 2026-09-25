import headshot from "@/assets/miguel-profile.jpg";
import { site } from "../content/site";
import DocHead from "../DocHead";
import SecHead from "../SecHead";
import { Cmd, Ext } from "../ui";
import { usePageChrome } from "../usePageChrome";

// Copy carried over from the previous /about page. Em dashes rewritten.
const bio = [
  "Senior Director of Product Design with 15+ years of experience leading digital transformation, scaling high-performance design organizations, and evolving enterprise UX through AI-driven automation and data-informed strategies.",
  "Built design systems at global scale at Teleperformance, leading an extended design community of 30+ designers across practices and disciplines. Before that, scaled the design team from 0 to 12 at BBVA Colombia, led digital transformation for DIRECTV via Globant, and co-founded two AI products: Tati, in translation, and The Birdie Club, in golf coaching.",
  "My approach: resolve the problem behind the problem. Design is not a service layer. It's a decision-making infrastructure that shapes how organizations think.",
];
const facts = ["Bogotá, Colombia", "Spanish passport, EU work authorization", "Open to C-Level & VP roles"];

export default function AboutPage() {
  usePageChrome();
  const { contact, manifesto } = site;
  return (
    <>
      <DocHead
        id="profile"
        section="Profile"
        back={{ to: "/", label: "Index" }}
        crumb="About"
        title={site.name}
        titleLen={8}
      >
        <div className="tb-profile">
          <figure className="tb-profile-photo">
            <img src={headshot} alt={`${site.name}, ${site.role}`} width={1200} height={713} decoding="async" />
          </figure>
          <div className="tb-profile-bio">
            {bio.map((p) => (
              <p key={p} className="tb-body tb-profile-p">
                {p}
              </p>
            ))}
            <ul className="tb-profile-facts">
              {facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="tb-profile-ctas">
              <a href={contact.cv} download className="tb-btn tb-btn-primary">
                <Cmd>Download CV</Cmd>
                <span className="tb-btn-arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="tb-btn">
                <Cmd>LinkedIn</Cmd>
                <Ext />
              </a>
            </div>
          </div>
        </div>
      </DocHead>

      <section id="manifesto" className="tb-sec" data-tb-section="Manifesto" aria-labelledby="tb-about-man-h" tabIndex={-1}>
        <SecHead id="tb-about-man-h" title="Leadership Manifesto" />
        <p className="tb-statement tb-about-intro">
          I lead through clarity, systems, and decisions. Design scales when people share language, ownership, and trust.
        </p>
        <ol className="tb-built tb-principles">
          {manifesto.principles.map((pr) => (
            <li key={pr.number} className="tb-built-cell">
              <h3 className="tb-built-name">{pr.title}</h3>
              <p className="tb-body">{pr.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="tb-sec tb-contact" data-tb-section="Contact" aria-labelledby="tb-about-con-h" tabIndex={-1}>
        <SecHead id="tb-about-con-h" title="Contact" />
        <div className="tb-contact-body">
          <p className="tb-contact-h">
            {contact.headline.map((l) => (
              <span key={l}>{l} </span>
            ))}
          </p>
          <a href={`mailto:${contact.email}`} className="tb-mail">
            <span className="tb-prompt" aria-hidden="true">
              $ mail
            </span>{" "}
            <span className="tb-mail-addr">{contact.email}</span>
          </a>
        </div>
      </section>
    </>
  );
}
