import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-20 lg:pt-36">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-2xl">
            <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">
              Legal
            </span>
            <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm font-mono text-muted-foreground/50 mb-16">
              Last updated: June 2026
            </p>

            <div className="space-y-12 text-muted-foreground leading-relaxed">

              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">Who this is</h2>
                <p>
                  This is the personal website of Miguel Espinosa, Senior Director of Product Design.
                  Contact: <a href="mailto:hola@miguelespinosa.co" className="text-primary hover:text-primary/80 transition-colors">hola@miguelespinosa.co</a>
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">What I collect</h2>
                <p className="mb-3">
                  When you sign up for the AI Design OS guide, I collect your email address. That's it.
                  No name, no location, no tracking pixels, no analytics cookies.
                </p>
                <p>
                  I don't use Google Analytics or any behavioral tracking on this site.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">What I do with it</h2>
                <p className="mb-3">
                  Your email is used to send you the guide you requested and occasional emails about
                  design, AI, and upcoming workshops. I send maybe 2–3 emails per month, usually less.
                </p>
                <p>
                  I don't sell your email, share it with third parties, or use it for advertising.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">Where it's stored</h2>
                <p>
                  Email addresses are stored in Supabase (cloud database, US servers) and processed
                  through Resend (email delivery). Both are SOC 2 compliant services. Your data stays
                  within these two systems.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">Your rights</h2>
                <p className="mb-3">
                  You can ask me to access, correct, or delete your data at any time.
                  To unsubscribe from emails, reply to any email I've sent with "unsubscribe"
                  and I'll remove you personally within 48 hours.
                </p>
                <p>
                  For any data requests, email{" "}
                  <a href="mailto:hola@miguelespinosa.co" className="text-primary hover:text-primary/80 transition-colors">
                    hola@miguelespinosa.co
                  </a>
                  . I'll respond within 5 business days.
                </p>
              </div>

              <div>
                <h2 className="text-base font-semibold text-foreground mb-3">Legal basis</h2>
                <p>
                  By submitting your email, you're consenting to receive the guide and occasional
                  related emails (Art. 6(1)(a) GDPR; Ley 1581/2012 Colombia). You can withdraw
                  consent at any time by unsubscribing.
                </p>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm">
                  Questions?{" "}
                  <a href="mailto:hola@miguelespinosa.co" className="text-primary hover:text-primary/80 transition-colors">
                    hola@miguelespinosa.co
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
