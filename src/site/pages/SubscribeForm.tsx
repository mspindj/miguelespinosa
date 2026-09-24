import { useState } from "react";
import { Link } from "react-router-dom";
import { Cmd } from "../ui";

/**
 * AI Design OS lead capture (R2.6). The request is identical to the previous form:
 * POST /api/subscribe, JSON body { email, source: "ai-design-os" }; success = res.ok.
 * Styled as a command line, with a real label and a polite live region for the outcome.
 */
export default function SubscribeForm({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const inputId = `${id}-email`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "ai-design-os" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tb-cli">
      {!submitted && (
        <form id={id} onSubmit={handleSubmit} className="tb-cli-form" aria-busy={loading || undefined}>
          <label htmlFor={inputId} className="tb-cli-label">
            Email address
          </label>
          <div className="tb-cli-row">
            <span className="tb-cli-prompt" aria-hidden="true">
              $
            </span>
            <input
              id={inputId}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              autoComplete="email"
              className="tb-cli-input"
            />
            <button type="submit" disabled={loading} className="tb-cli-submit">
              {loading ? "Saving..." : <Cmd>Get the PDF</Cmd>}
            </button>
          </div>
          <p className="tb-cli-note">
            By signing up you'll receive the guide and occasional emails from me. Unsubscribe anytime by replying.{" "}
            <Link to="/privacy" className="tb-inline-link">
              Privacy policy
            </Link>
            .
          </p>
        </form>
      )}
      <div className="tb-cli-status" role="status" aria-live="polite">
        {submitted && (
          <div className="tb-cli-ok">
            <p>
              <span className="tb-cli-prompt" aria-hidden="true">
                ✓{" "}
              </span>
              Done. Here's your guide: open it in the browser or print to PDF.
            </p>
            <a href="/ai-design-os.html" target="_blank" rel="noopener noreferrer" className="tb-btn tb-btn-primary">
              <Cmd>Open the guide</Cmd>
              <span className="tb-btn-arrow" aria-hidden="true">
                →
              </span>
              <span className="tb-sr"> (opens in a new tab)</span>
            </a>
          </div>
        )}
        {error && (
          <p className="tb-cli-err">
            <span className="tb-cli-prompt" aria-hidden="true">
              !{" "}
            </span>
            Something went wrong. Try again or email{" "}
            <a href="mailto:hola@miguelespinosa.co" className="tb-inline-link">
              hola@miguelespinosa.co
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
