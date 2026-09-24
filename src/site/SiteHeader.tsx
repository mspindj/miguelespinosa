import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "./content/site";
import { useActiveSection } from "./context";
import { Cmd } from "./ui";

/** `section` is the home section that marks the item as current while it is on screen. */
const NAV = [
  { to: "/#work", section: "work", label: "Work" },
  { to: "/#manifesto", section: "manifesto", label: "Manifesto" },
  { to: "/insights", section: "insights", label: "Insights" },
  { to: "/#contact", section: "contact", label: "Contact" },
  { to: "/about", section: "about", label: "About" },
] as const;

interface Props {
  onMenuToggle: (open: boolean) => void;
}

export default function SiteHeader({ onMenuToggle }: Props) {
  const { pathname } = useLocation();
  const section = useActiveSection();
  const current = pathname === "/" ? section.id : pathname.startsWith("/case-study/") ? "work" : "";

  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef(true);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) {
      returnFocus.current = true;
      d.showModal();
    } else if (!open && d.open) {
      d.close();
    }
    onMenuToggle(open);
  }, [open, onMenuToggle]);

  // Native <dialog>: Esc fires "close"; focus goes back to the trigger unless a link moved it.
  const onClose = () => {
    setOpen(false);
    if (returnFocus.current) trigger.current?.focus();
  };

  const navLink = (item: (typeof NAV)[number], i: number, inMenu = false) => (
    <Link
      to={item.to}
      className={inMenu ? "tb-menu-link" : "tb-nav-link"}
      aria-current={current === item.section ? "true" : undefined}
      onClick={() => {
        if (inMenu) {
          returnFocus.current = false;
          setOpen(false);
        }
      }}
    >
      <span className="tb-nav-idx" aria-hidden="true">
        [{String(i + 1).padStart(2, "0")}]
      </span>
      <span>{item.label}</span>
    </Link>
  );

  return (
    <header className="tb-header">
      <Link to="/" className="tb-brand" aria-label={`${site.name}, home`}>
        <span className="tb-brand-name">{site.name}</span>
        <span className="tb-brand-role">{site.role}</span>
      </Link>

      <nav className="tb-nav" aria-label="Primary">
        <ul>
          {NAV.map((item, i) => (
            <li key={item.section}>{navLink(item, i)}</li>
          ))}
        </ul>
      </nav>

      <button
        ref={trigger}
        type="button"
        className="tb-menu-btn"
        aria-expanded={open}
        aria-controls="tb-menu"
        onClick={() => setOpen(true)}
      >
        <Cmd>Menu</Cmd>
      </button>

      <dialog
        id="tb-menu"
        ref={dialog}
        className="tb-menu"
        aria-label="Menu"
        onClose={onClose}
      >
        <div className="tb-menu-top">
          <span className="tb-brand-name">{site.name}</span>
          <button type="button" className="tb-menu-btn tb-menu-close" onClick={() => setOpen(false)}>
            <Cmd>Close</Cmd>
          </button>
        </div>
        <nav aria-label="Sections">
          <ul className="tb-menu-list">
            {NAV.map((item, i) => (
              <li key={item.section}>{navLink(item, i, true)}</li>
            ))}
          </ul>
        </nav>
        <p className="tb-menu-foot">
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
        </p>
      </dialog>
    </header>
  );
}
