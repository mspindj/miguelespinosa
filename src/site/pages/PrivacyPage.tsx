import DocHead from "../DocHead";
import { site } from "../content/site";
import { usePageChrome } from "../usePageChrome";

// Copy carried over unchanged from the previous /privacy page.
export default function PrivacyPage() {
  usePageChrome();
  const mail = (
    <a href={`mailto:${site.contact.email}`} className="tb-inline-link">
      {site.contact.email}
    </a>
  );
  return (
    <>
      <DocHead
        id="privacy"
        section="Privacy"
        back={{ to: "/", label: "Index" }}
        crumb="Privacy"
        eyebrow="Legal"
        title="Privacy Policy"
        titleLen={8}
        lede="Last updated: June 2026"
      />
      <section id="policy" className="tb-sec tb-entry-body" data-tb-section="Privacy / Policy" aria-label="Policy">
        <div className="tb-prose">
          <h2>Who this is</h2>
          <p>
            This is the personal website of Miguel Espinosa, Senior Director of Product Design. Contact: {mail}
          </p>

          <h2>What I collect</h2>
          <p>
            When you sign up for the AI Design OS guide, I collect your email address. That's it. No name, no location, no
            tracking pixels, no analytics cookies.
          </p>
          <p>I don't use Google Analytics or any behavioral tracking on this site.</p>

          <h2>What I do with it</h2>
          <p>
            Your email is used to send you the guide you requested and occasional emails about design, AI, and upcoming
            workshops. I send maybe 2–3 emails per month, usually less.
          </p>
          <p>I don't sell your email, share it with third parties, or use it for advertising.</p>

          <h2>Where it's stored</h2>
          <p>
            Email addresses are stored in Supabase (cloud database, US servers) and processed through Resend (email delivery).
            Both are SOC 2 compliant services. Your data stays within these two systems.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask me to access, correct, or delete your data at any time. To unsubscribe from emails, reply to any email
            I've sent with "unsubscribe" and I'll remove you personally within 48 hours.
          </p>
          <p>For any data requests, email {mail}. I'll respond within 5 business days.</p>

          <h2>Legal basis</h2>
          <p>
            By submitting your email, you're consenting to receive the guide and occasional related emails (Art. 6(1)(a) GDPR;
            Ley 1581/2012 Colombia). You can withdraw consent at any time by unsubscribing.
          </p>

          <hr />
          <p>Questions? {mail}</p>
        </div>
      </section>
    </>
  );
}
