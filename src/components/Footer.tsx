import { Linkedin, Twitter, Dribbble } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-24 lg:py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* CTA */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-6">
              Let's build something scalable.
            </h2>
            <a
              href="mailto:hello@miguelespinosa.com"
              className="text-lg text-primary hover:text-primary/80 transition-colors"
            >
              hello@miguelespinosa.com
            </a>
          </div>

          {/* Social links */}
          <div className="flex flex-col lg:items-end gap-6">
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2025 Miguel Espinosa. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
