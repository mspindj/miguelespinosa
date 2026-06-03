import type { VercelRequest, VercelResponse } from "@vercel/node";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY!;
const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const GUIDE_URL = "https://miguelespinosa.co/ai-design-os.html";

const emailHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The AI Design Operating System</title>
</head>
<body style="margin:0;padding:0;background:#1A1A1A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;-webkit-font-smoothing:antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#1A1A1A;padding:48px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Logo row -->
          <tr>
            <td style="padding:0 32px 40px;">
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
          <tr>
            <td style="padding:0 32px 32px;">
              <div style="height:1px;background:rgba(255,255,255,0.08);"></div>
            </td>
          </tr>

          <!-- Label -->
          <tr>
            <td style="padding:0 32px 12px;">
              <span style="font-family:'SF Mono','Fira Code',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:#C8E532;">Your guide is ready</span>
            </td>
          </tr>

          <!-- Headline -->
          <tr>
            <td style="padding:0 32px 16px;">
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#FFFFFF;line-height:1.2;letter-spacing:-0.02em;">The AI Design<br>Operating System</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:0 32px 32px;">
              <p style="margin:0 0 16px;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.7;">
                The guide is live. Read it in the browser or print to PDF — Cmd+P, "Save as PDF", done.
              </p>
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.7;">
                Five components. One afternoon to set up. Start with Day 1 (DESIGN.md) and move through the week in order — that's the sequence that compounds fastest.
              </p>
            </td>
          </tr>

          <!-- CTA button -->
          <tr>
            <td style="padding:0 32px 40px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#C8E532;border-radius:8px;">
                    <a href="${GUIDE_URL}" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:700;color:#0D0D0D;text-decoration:none;letter-spacing:-0.01em;">Open the guide →</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px 32px;">
              <div style="height:1px;background:rgba(255,255,255,0.08);"></div>
            </td>
          </tr>

          <!-- What's next teaser -->
          <tr>
            <td style="padding:0 32px 12px;">
              <span style="font-family:'SF Mono','Fira Code',monospace;font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.3);">What comes next</span>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;">
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.4);line-height:1.7;">
                Over the next few emails I'll share how I've applied this system in real product work — at Teleperformance (60+ countries), BBVA Colombia, and Tati. Each one a different context, same principles.
              </p>
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding:0 32px 48px;">
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.55);line-height:1.7;">
                — Miguel<br>
                <a href="https://miguelespinosa.co" style="color:rgba(200,229,50,0.7);text-decoration:none;">miguelespinosa.co</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:0 32px 0;border-top:1px solid rgba(255,255,255,0.08);">
              <p style="margin:24px 0 0;font-size:12px;color:rgba(255,255,255,0.2);line-height:1.6;">
                You're receiving this because you signed up at miguelespinosa.co/ai-design-os.<br>
                No spam, no sharing your email. One click to unsubscribe anytime.
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
      subject: "Your guide: The AI Design Operating System",
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
