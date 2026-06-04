# CLAUDE.md — miguelespinosa.co

## Propósito
Portfolio personal de Miguel Espinosa, Senior Director of Product Design.
Narrativa central: **"Leadership through Product Decisions"**
Audiencia: C-Level y VP-level en empresas globales. Inglés como idioma del portfolio.

## Links Clave
- Live: https://miguelespinosa.co
- GitHub: https://github.com/mspindj/miguelespinosa (branch: main)
- Notion Master Doc: https://www.notion.so/34ae9543180181dca64fc81b1025c548

## Stack
- React + Vite + TypeScript
- shadcn-ui (`components.json` en raíz)
- Tailwind CSS (`tailwind.config.ts`)
- Lovable como plataforma de deploy
- Bun como package manager (`bun.lock`)

## Comandos
```
bun run dev      # Dev server
bun run build    # Build producción
bun run lint     # ESLint
```

## Estructura del Repo
```
src/
├── pages/
│   ├── Index.tsx                    # Home
│   ├── About.tsx                    # /about — Bio + Manifesto completo
│   ├── CashConversionCase.tsx       # Case: BBVA Colombia
│   ├── DesignTransformationCase.tsx # Case: TP Transformation
│   ├── TPDesignSystemCase.tsx       # Case: TP Design System (Flamingo interno — CONFIDENCIAL)
│   ├── TatiCase.tsx                 # Case: Tati AI Translation
│   ├── InsightsHub.tsx              # Blog / Insights
│   └── articles/                   # 9 artículos (todos construidos)
├── components/
│   ├── HeroSection.tsx
│   ├── CaseStudySection.tsx         # Lista editorial — 3 casos + 1 "Also" link
│   ├── PhilosophyMarquee.tsx
│   ├── ManifestoSection.tsx         # Quote única full-screen → link a /about
│   ├── ExperienceSection.tsx        # SOLO en /about, NO en homepage
│   ├── BlogSection.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── NavLink.tsx
│   ├── ScrollToTop.tsx
│   ├── article/
│   ├── case-study/
│   ├── insights/
│   └── ui/
├── hooks/
├── lib/
└── assets/
    ├── miguel-profile.jpg           # Foto optimizada (59KB, 1200px max)
    └── ...
```

## Sistema Visual
| Token | Valor |
|-------|-------|
| Background base | `#1A1A1A` (negro carbón) — CSS: `--background` |
| Texto primario | `#FFFFFF` |
| Accent principal | `#C8E532` (chartreuse) — CSS: `--primary: 70 77% 55%` |
| Foreground sobre primary | `#0D0D0D` (texto oscuro sobre chartreuse) — CSS: `--primary-foreground: 0 0% 5%` |
| Texto secundario | `rgba(255,255,255,0.55)` — CSS: `--muted-foreground` |

- Tipografía: Inter Black (font-black, font-semibold headers) + Inter Regular (body)
- Dark mode como identidad central
- Sin ruido decorativo — economía extrema de elementos
- ⚠️ **Chartreuse NUNCA como background de sección** — solo en dots, bordes, texto clave, badges

## Casos de Estudio (orden canónico)
1. **TP Design System** @ Teleperformance (`/case-study/tp-design-system` → `TPDesignSystemCase.tsx`)
   - ⚠️ "Flamingo" es el nombre interno — CONFIDENCIAL. Nunca usar públicamente.
2. **Design Transformation @ TP** (`/case-study/design-transformation` → `DesignTransformationCase.tsx`)
3. **Tati** — AI Translation (`/case-study/tati-ai` → `TatiCase.tsx`) — Miguel como co-founder
4. **Cash Conversion / BBVA Colombia** (`/case-study/cash-conversion` → `CashConversionCase.tsx`)
   - En homepage aparece como "Also: BBVA Cash Conversion" al pie de la lista

## Arquitectura del Homepage (decidida Abr 2026)
El homepage sigue un patrón de **scroll narrativo**, no de landing page SaaS:

```
Header (sticky)
HeroSection          ← Headline + subhead + CTAs + social proof (company names)
CaseStudySection     ← Lista editorial compacta: 3 casos principales
PhilosophyMarquee    ← Marquee de frases
ManifestoSection     ← UNA sola quote poderosa + link a /about
BlogSection          ← Últimos insights
Footer
```

**Decisiones de arquitectura tomadas:**
- `ExperienceSection` **eliminada del homepage** — vive en `/about` para mantener home enfocado en work
- `ManifestoSection` → de 8 cards en grid a **1 quote full-screen** con whitespace generoso
- `CaseStudySection` → de 4 articles con imágenes grandes a **lista editorial** (número + título + descripción + métrica + tags)
- Quote canónica elegida para ManifestoSection: *"Good AI products don't impress users — they reassure them."*
- Caso 4 (BBVA) expuesto como "Also: BBVA Cash Conversion" al pie de la lista (menor énfasis, pero accesible)

**Por qué esta arquitectura:**
- Análisis de 21 portafolios de referencia (Abr 2026): los más efectivos usan texto como elemento primario, no imágenes
- Austin Knight, Aleksi Tappura, Max Böck → editorial, densidad intelectual, whitespace
- Evitar "SaaS landing page" — ese patrón es de producto, no de pensador/líder

## Principios de Contenido
- Structured around decisions, not artifacts
- Business outcomes primero (métricas como −40%, 0→12, 96%+)
- "Nunca el problema presentado — siempre el problema detrás"
- Tono: ejecutivo, seguro, basado en datos
- Quote central: *"Good AI products don't impress users — they reassure them."*

## SEO — Estado (post sesión Abr 2026)
- ✅ `index.html` — meta description, author, canonical, OG tags, JSON-LD Person schema, og-image.png
- ✅ `twitter:site` → @mspin
- OG image generada: `public/og-image.png` (1200×630, HTML/CSS → Chrome headless)
- SPA sin SSR — riesgo de indexación. Evaluar prerendering en futuro.

## Keywords Target (SEO)
Primarias: "product design director", "design leadership portfolio", "design systems at scale"
Secundarias: "DesignOps", "AI product design", "design transformation", "VP of Design"
Long-tail: "senior director product design portfolio", "leadership through product decisions"

## Hero Copy (canónico)
**H1**: `LEADERSHIP THROUGH` / `PRODUCT DECISIONS` (second line en foreground/40)
**Subhead**: `Senior Director of Product Design. Bridging business strategy, human-centered design, and AI innovation.`
**CTA primario**: `Explore Work` → scroll a #work
**CTA secundario**: `Read Manifesto` → /about
**Social proof**: Teleperformance · Globant · BBVA · Zinobe (nombres, baja opacidad)

## Reglas de Desarrollo
- NO editar directamente en Supabase Dashboard
- Components: usar shadcn-ui existentes antes de crear nuevos
- No crear componentes duplicados — revisar /src/components primero
- No romper el sistema de rutas existente
- No modificar `tailwind.config.ts` sin revisar impacto en tokens existentes
- No usar naranja (`24 95% 53%`) — fue la primary color original de Lovable. Ya reemplazado en todo el repo.

## Archivos Clave Creados / Modificados (Abr 2026)
| Archivo | Cambio |
|---------|--------|
| `index.html` | SEO completo: author, meta desc, canonical, JSON-LD, OG tags |
| `src/index.css` | Color system: primary → chartreuse #C8E532 (`70 77% 55%`) |
| `src/components/HeroSection.tsx` | Copy canónico, CTAs, social proof |
| `src/components/ManifestoSection.tsx` | Reescritura total → 1 quote full-screen |
| `src/components/CaseStudySection.tsx` | Reescritura total → lista editorial 3 casos |
| `src/components/Footer.tsx` | Copy, CTA email, links LinkedIn/Behance |
| `src/components/ExperienceSection.tsx` | Bio, foto, competencias, CV download link |
| `src/pages/About.tsx` | Página nueva — foto + bio + manifesto completo 8 puntos |
| `src/pages/Index.tsx` | Eliminado ExperienceSection del homepage |
| `src/App.tsx` | Agregada ruta /about |
| `src/assets/miguel-profile.jpg` | Foto optimizada (59KB desde 3.5MB) |
| `public/og-image.png` | OG image generada (1200×630) |
| `public/og-template.html` | Template HTML/CSS para regenerar OG image |

## CV — Estado (Abr 2026)
- Fuente: `/Users/nowheretraveler/Documents/MEC/CV_MiguelEspinosa_2026_ATS_ENG_v2.docx`
- PDF público en repo: `public/CV_MiguelEspinosa_2026_ATS_ENG.pdf` (link en /about)
- **Título**: Senior Director of Product Design
- **Tati**: incluido como Co-Founder & Head of Product Design (2025–Present)
- **Globant**: mantenido como Senior UX Designer / Technical Leader (título real, no modificar)
- **BBVA**: métricas reales de Behance — 760K ops/mes, −23% transfer time, 80% investment fund mobile
- **Zinobe**: claramente separado como contexto fintech/lending (no banking)
- **Certificaciones confirmadas** (7 en total):
  - Generative AI Leader Certification — Google (2026)
  - Product Management: Innovation in Digital Products — Crehana
  - UX Strategy in Organizations — Crehana
  - Fundamentals of Digital Product Management — Crehana
  - Product Metrics & KPIs — Crehana
  - Prototyping from Scratch with Figma — Crehana
  - Interaction Latin America (ILA) Conference — 2018

## Deploy
- **Plataforma**: Vercel (migrado desde Lovable el 23 Abr 2026)
- `vercel.json` en raíz con SPA rewrite rule
- Push a `main` → Vercel despliega automáticamente
- Dominio: miguelespinosa.co

## Insights Hub — Estado (Jun 2026)
21 artículos publicados. Rutas en App.tsx, metadata en src/lib/articles.ts.

Los últimos 6 (serie AI harness, May 2026): `ai-harness`, `ai-where-it-belongs`, `ai-trust-calibration`, `corrections-md`, `designer-trains-model`, `design-md`.

## Lead Magnet — AI Design OS (Jun 2026)

### Stack
- **Landing**: `/ai-design-os` → `src/pages/AIDesignOS.tsx`
- **Guide HTML**: `/ai-design-os.html` → `public/ai-design-os.html` (printable to PDF, Cmd+P)
- **API**: `api/subscribe.ts` — Vercel serverless function (Node)
- **DB**: Supabase tabla `leads` (id, email, source, created_at) con RLS anon-insert / auth-read
- **Email**: Resend desde `hola@miguelespinosa.co` — dominio verificado (DKIM + SPF + MX)
- **Banner**: InsightsHub tiene banner de recurso sobre el grid de artículos

### Flujo
```
Form → POST /api/subscribe → Supabase insert + Resend email → success state → link al guide
```

### Credenciales (en .env.local y Vercel env vars)
- `VITE_SUPABASE_URL` — https://tjwcjnkxvnawimyptzsd.supabase.co
- `VITE_SUPABASE_ANON_KEY` — anon public key (en Notion → Credenciales → Supabase)
- `RESEND_API_KEY` — re_FXyzqkEi_... (en Notion → Credenciales → Resend, "para miguelespinosa.co")
- `RESEND_DOMAIN_ID` — fa3cf1ee-bb68-4c6b-89fe-9e8436e05bfa (domain miguelespinosa.co)

### DNS Resend en GoDaddy (ya configurados, verificados 03 Jun 2026)
- TXT `resend._domainkey` → DKIM key
- MX `send` → feedback-smtp.us-east-1.amazonses.com (priority 10)
- TXT `send` → v=spf1 include:amazonses.com ~all

### Welcome email
- Subject: "Here's the system — and why I built it"
- Historia personal (por qué construí el sistema) → guide CTA → workshop seed (soft) → pregunta de reply
- Tono: peer-to-peer, no SaaS

### Estrategia de monetización decidida — Modelo A
Thought Leader → Advisor. NO curso/educator path.
```
Guide (gratis) → Newsletter → Workshop trimestral ($197-497, 25 personas, 3h live)
                                        ↓
                            Design team advisory ($5k-15k/proyecto)
```
- El lead magnet es herramienta de credibilidad, no inicio de funnel de productos
- El workshop trimestral es el low ticket correcto para no diluir el posicionamiento senior
- Pendiente: landing del workshop + secuencia de nurture Brevo (3 emails en 10 días)

### Errores conocidos / aprendizajes
- Resend KEY del proyecto (`re_FXyzqkEi_...`) ≠ KEY del plugin Claude (`re_i6nwmuQb_...`). La del proyecto es la correcta para miguelespinosa.co.
- API route Vercel con `type: "sensitive"` no acepta `target: ["development"]` — solo production + preview.
- Strings con comillas dobles dentro de arrays JSX rompen esbuild en Vercel (usar comillas simples en el outer string).
- vercel.json: agregar rewrite explícito para `/api/(.*)` antes del SPA catch-all, si no Vercel intercepta las rutas de API.

## Deploy
- **Plataforma**: Vercel (migrado desde Lovable el 23 Abr 2026)
- `vercel.json` en raíz — SPA rewrite + exclusión `/api/*`
- Push a `main` → Vercel despliega automáticamente
- Dominio: miguelespinosa.co
- Vercel project ID: `prj_m1AgysIJQezp1ti5Bd5vXMcOjGVw`
- Vercel token: en Notion → Credenciales → Vercel

## Pendientes
- [ ] Auditar case studies TP Design System y Design Transformation vs copy canónico de Notion
- [ ] Evaluar Lighthouse score (performance, SEO, a11y)
- [ ] Evaluar prerendering para SEO (React SPA sin SSR)
- [ ] Secuencia nurture Brevo: 3 emails en 10 días → CTA workshop
- [ ] Landing del workshop trimestral (`/workshop`)
- [x] Configurar dominio custom en Vercel — ✅ miguelespinosa.co al aire
- [x] Subir CV v2 a /public — ✅ `CV_MiguelEspinosa_2026_ATS_ENG_v2.pdf` en producción
- [x] Lead magnet AI Design OS — ✅ vivo en producción (03 Jun 2026)

## Sesiones
- **03 Jun 2026** — Lead magnet completo: AI Design OS landing + HTML guide + Supabase leads + Resend email + dominio verificado. Estrategia Modelo A definida. 6 artículos serie AI harness ya estaban en repo.
- **21 Abr 2026** — Diagnóstico inicial. Todo el contenido está en Notion. Repo tiene 4 case studies sin auditar.
- **22 Abr 2026** — Sprint completo:
  - P0: SEO fixes (index.html, OG image, JSON-LD)
  - P1: Sistema de color (chartreuse), HeroSection copy, ManifestoSection, Footer, ExperienceSection
  - P2: About page (/about), análisis de 21 portafolios de referencia
  - Arquitectura final homepage: lista editorial + quote única + ExperienceSection solo en /about
- **23 Abr 2026** — Sprint portfolio + CV + contenido:
  - Deploy migrado de Lovable a Vercel (vercel.json con SPA rewrite)
  - BBVA case study reconstruido: 5 productos, métricas reales de Behance, narrativa Design Authority
  - CV v2 generado en DOCX: título Senior Director, Tati añadido, BBVA con datos reales, 7 certificaciones
  - Confirmado: Globant = Senior UX Designer (no modificar), Zinobe = fintech/lending (no banking)
  - 6 nuevos artículos publicados en Insights Hub (hub: 9 → 15 artículos)
  - Artículos anclados en experiencia real: Tati (trust layer), BBVA (ambassador model), TP (design debt, cost of confusion)
