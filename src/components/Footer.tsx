import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-24 lg:py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* CTA */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
              Design Leadership · AI Product Strategy · Design Systems
            </p>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-8">
              Let's operationalize<br />your design strategy.
            </h2>
            <a
              href="mailto:hola@miguelespinosa.co"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Links + legal */}
          <div className="flex flex-col lg:items-end gap-8 lg:pt-16">
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/mspin/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.behance.net/mspin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
              >
                Behance
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2026 Miguel Espinosa. Validated for AI &amp; Humans.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
