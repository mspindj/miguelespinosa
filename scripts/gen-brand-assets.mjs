// Regenerates the social preview image and favicons in the Terminal system.
// Usage: node scripts/gen-brand-assets.mjs
// Needs puppeteer (not a project dependency): set PUPPETEER_PATH to a puppeteer install.
// Outputs to public/: og-image-terminal.png, favicon.svg, favicon.ico, apple-touch-icon.png.
// Social previews are cached by image URL (WhatsApp, LinkedIn): when the design changes,
// write a new file name and update the og:image / twitter:image tags in index.html.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const puppeteer = require(process.env.PUPPETEER_PATH || "puppeteer");

const font = (p) => "file://" + path.join(root, "node_modules/@fontsource-variable", p);
const MONO = font("martian-mono/files/martian-mono-latin-wdth-normal.woff2");
const SANS = font("geist/files/geist-latin-wght-normal.woff2");

// The same static ASCII poster the home page shows before WebGL loads.
const src = fs.readFileSync(path.join(root, "src/site/ascii/fallback.ts"), "utf8");
const arr = (name) => [...src.split(`export const ${name}`)[1].split("];")[0].matchAll(/"([^"]*)"/g)].map((m) => m[1]);
const rows = arr("FALLBACK_ROWS");
const mask = arr("FALLBACK_MASK");
const esc = (c) => (c === "<" ? "&lt;" : c === "&" ? "&amp;" : c);
const poster = rows
  .map((r, y) => [...r].map((c, x) => (mask[y]?.[x] === "1" && c !== " " ? `<b>${esc(c)}</b>` : esc(c))).join(""))
  .join("\n");

const base = `
  @font-face { font-family: M; src: url(${MONO}) format("woff2"); font-weight: 100 800; font-stretch: 75% 112.5%; }
  @font-face { font-family: G; src: url(${SANS}) format("woff2"); font-weight: 100 900; }
  * { margin: 0; box-sizing: border-box; }
  body { background: #ECECE6; color: #0E0E0E; }`;

const og = `<!doctype html><html><head><style>${base}
  .c { position: relative; width: 1200px; height: 630px; overflow: hidden;
       background-image: repeating-linear-gradient(90deg, transparent 0 99px, rgba(14,14,14,.10) 99px 100px); }
  .bar { position: absolute; inset: 0 0 auto 0; height: 44px; border-bottom: 1px solid #0E0E0E; display: flex;
         justify-content: space-between; align-items: center; padding: 0 40px; font: 600 13px/1 M; letter-spacing: .08em; text-transform: uppercase; }
  .foot { position: absolute; inset: auto 0 0 0; height: 44px; background: #0E0E0E; color: #ECECE6; display: flex;
          justify-content: space-between; align-items: center; padding: 0 40px; font: 500 13px/1 M; letter-spacing: .08em; text-transform: uppercase; }
  .foot i { color: #FF4F00; font-style: normal; }
  h1 { position: absolute; left: 40px; top: 96px; font: 800 76px/0.92 M; font-stretch: 112.5%; text-transform: uppercase; letter-spacing: -.02em; }
  .cur { display: inline-block; width: .5em; height: .72em; background: #FF4F00; margin-left: .1em; }
  .sub { position: absolute; left: 40px; top: 408px; width: 560px; font: 400 21px/1.45 G; }
  pre { position: absolute; right: 36px; top: 64px; font: 500 11.5px/1.16 M; color: #0E0E0E; }
  pre b { color: #FF4F00; font-weight: 700; }
</style></head><body><div class="c">
  <div class="bar"><span>Miguel Espinosa</span><span>Senior Director of Product Design</span></div>
  <h1>Leadership<br>through<br>product<br>decisions<span class="cur"></span></h1>
  <p class="sub">Design systems, org transformation and AI products. Five decision records, 2016–2026.</p>
  <pre>${poster}</pre>
  <div class="foot"><span>miguelespinosa.co</span><span><i>■</i> Decision records · Insights · Contact</span></div>
</div></body></html>`;

// Favicon: ink tile, paper initials, accent cursor. Readable down to 16px.
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0E0E0E"/>
  <text x="7" y="41" font-family="'Martian Mono', ui-monospace, Menlo, monospace" font-weight="800" font-size="25" fill="#ECECE6">ME</text>
  <rect x="47" y="23" width="10" height="18" fill="#FF4F00"/>
</svg>
`;
const iconHtml = (size) => `<!doctype html><html><head><style>${base} body{background:transparent}
  .i{width:${size}px;height:${size}px;background:#0E0E0E;position:relative}
  .t{position:absolute;left:${size * 0.11}px;top:${size * 0.3}px;font:800 ${size * 0.39}px/1 M;font-stretch:100%;color:#ECECE6;letter-spacing:-.02em}
  .k{position:absolute;left:${size * 0.735}px;top:${size * 0.36}px;width:${size * 0.155}px;height:${size * 0.28}px;background:#FF4F00}
</style></head><body><div class="i"><span class="t">ME</span><span class="k"></span></div></body></html>`;

const out = (f) => path.join(root, "public", f);
const tmp = fs.mkdtempSync(path.join(process.env.TMPDIR || "/tmp", "brand-"));
const browser = await puppeteer.launch({ headless: "new", args: ["--allow-file-access-from-files"] });
const page = await browser.newPage();

async function shoot(html, w, h, file) {
  const f = path.join(tmp, "p.html");
  fs.writeFileSync(f, html);
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
  await page.goto("file://" + f, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: file, clip: { x: 0, y: 0, width: w, height: h }, omitBackground: true });
}

await shoot(og, 1200, 630, out("og-image-terminal.png"));
fs.writeFileSync(out("favicon.svg"), faviconSvg);
for (const s of [16, 32, 48, 180, 256]) await shoot(iconHtml(s), s, s, path.join(tmp, `i${s}.png`));
fs.copyFileSync(path.join(tmp, "i180.png"), out("apple-touch-icon.png"));
await browser.close();

// ICO container with PNG payloads (16, 32, 48, 256): supported by every current browser and crawler.
const sizes = [16, 32, 48, 256];
const pngs = sizes.map((s) => fs.readFileSync(path.join(tmp, `i${s}.png`)));
const head = Buffer.alloc(6 + 16 * sizes.length);
head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
let offset = head.length;
sizes.forEach((s, i) => {
  const e = 6 + 16 * i;
  head.writeUInt8(s === 256 ? 0 : s, e); head.writeUInt8(s === 256 ? 0 : s, e + 1);
  head.writeUInt8(0, e + 2); head.writeUInt8(0, e + 3);
  head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6);
  head.writeUInt32LE(pngs[i].length, e + 8); head.writeUInt32LE(offset, e + 12);
  offset += pngs[i].length;
});
fs.writeFileSync(out("favicon.ico"), Buffer.concat([head, ...pngs]));
console.log("wrote og-image-terminal.png, favicon.svg, favicon.ico, apple-touch-icon.png");
