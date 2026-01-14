import { Mail, Github, Linkedin } from "lucide-react";

const ContactCard = () => {
  return (
    <div className="bento-card">
      <div className="flex items-center gap-2 text-muted-foreground mb-4">
        <Mail className="h-4 w-4" />
        <span className="text-xs font-mono uppercase tracking-widest">Connect</span>
      </div>
      <div className="flex gap-3">
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
