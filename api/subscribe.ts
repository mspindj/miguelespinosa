import type { VercelRequest, VercelResponse } from "@vercel/node";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY!;
const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const GUIDE_URL = "https://miguelespinosa.co/ai-design-os.html";

const emailSubject = "Here's the system — and why I built it";

const emailHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${emailSubject}</title>
</head>
<body style="margin:0;padding:0;background:#1A1A1A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#1A1A1A;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;padding:0 24px;">

          <!-- Logo -->
          <tr>
            <td style="padding-bottom:40px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:32px;height:32px;background:#C8E532;border-radius:8px;text-align:center;vertical-align:middle;">
                    <span style="font-size:13px;font-weight:700;color:#0D0D0D;line-height:32px;">M</span>
                  </td>
                  <td style="padding-left:10px;font-size:13px;font-weight:500;color:#FFFFFF;">Miguel Espinosa</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding-bottom:36px;"><div style="height:1px;background:rgba(255,255,255,0.08);"></div></td></tr>

          <!-- Opening — personal story -->
          <tr>
            <td style="padding-bottom:20px;">
              <p style="margin:0;font-size:16px;color:rgba(255,255,255,0.8);line-height:1.8;">
                I built this system because I was losing.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:20px;">
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.8;">
                Not the work — the work was fine. I was losing control of the <em>environment</em> around the work. Every AI session started from scratch. Every new project meant re-explaining everything I'd already learned. The model was doing random things and I was exhausted from being surprised.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:20px;">
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.8;">
                So I stopped treating AI like a search engine and started treating it like a junior designer who needs onboarding. I built context files, memory files, agent roles, validation checkpoints. Basically: a harness.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:36px;">
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.8;">
                What changed wasn't the model — it was the environment around it. That's the AI Design Operating System. And it's now yours.
              </p>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="padding-bottom:40px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#C8E532;border-radius:8px;">
                    <a href="${GUIDE_URL}" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:700;color:#0D0D0D;text-decoration:none;letter-spacing:-0.01em;">Read the guide →</a>
                  </td>
                </tr>
              </table>
              <p style="margin:10px 0 0;font-size:12px;color:rgba(255,255,255,0.3);">Open in browser — Cmd+P to save as PDF.</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding-bottom:32px;"><div style="height:1px;background:rgba(255,255,255,0.08);"></div></td></tr>

          <!-- Workshop seed — soft commercial signal -->
          <tr>
            <td style="padding-bottom:20px;">
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.8;">
                Once a quarter I run a live workshop where a small group of designers implements this system together — in three hours, hands on, your actual project. No slides. No theory. You leave with a working harness.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:36px;">
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.8;">
                The next one isn't announced yet. If you want first access when it opens — just reply to this email and I'll add you to the short list.
              </p>
            </td>
          </tr>

          <!-- Reply invitation -->
          <tr>
            <td style="padding-bottom:40px;border-left:2px solid #C8E532;padding-left:20px;">
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.7);line-height:1.8;font-style:italic;">
                One question worth sitting with as you read: which of the five components is costing you the most time right now? That's where to start.
              </p>
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding-bottom:48px;">
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.8;">
                — Miguel<br>
                <span style="font-size:13px;color:rgba(255,255,255,0.3);">Senior Director of Product Design</span><br>
                <a href="https://miguelespinosa.co/insights" style="font-size:13px;color:rgba(200,229,50,0.6);text-decoration:none;">miguelespinosa.co/insights</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:20px 0 0;font-size:11px;color:rgba(255,255,255,0.2);line-height:1.7;">
                You signed up at miguelespinosa.co/ai-design-os. No spam, no sharing your email.<br>
                To stop receiving emails, reply with "unsubscribe" and I'll remove you personally.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, source = "ai-design-os" } = req.body ?? {};

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email required" });
  }

  // 1. Insert into Supabase
  const sbRes = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
      "Prefer": "return=minimal",
    },
    body: JSON.stringify({ email, source }),
  });

  // 23505 = unique violation (already subscribed) — still send the guide
  if (!sbRes.ok) {
    const body = await sbRes.json().catch(() => ({}));
    if (body.code !== "23505") {
      console.error("Supabase insert error:", body);
      return res.status(500).json({ error: "Database error" });
    }
  }

  // 2. Send welcome email via Resend
  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Miguel Espinosa <hola@miguelespinosa.co>",
      to: [email],
      subject: emailSubject,
      html: emailHtml,
    }),
  });

  if (!emailRes.ok) {
    const body = await emailRes.json().catch(() => ({}));
    console.error("Resend error:", body);
    // Don't fail the request — lead is saved, email delivery is best-effort
  }

  return res.status(200).json({ ok: true });
}
