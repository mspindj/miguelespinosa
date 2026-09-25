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
- React 18 + Vite 5 + TypeScript + react-router 6. Deploy en Vercel (push a `main`).
- Sistema de diseño propio "Terminal" en `src/site/` (CSS plano con prefijo `tb-`). Tailwind y shadcn siguen instalados pero **ninguna página los usa**; limpiarlos es un pendiente.
- three.js directo (sin React Three Fiber: R3F 9 exige React 19) para el árbol ASCII, Lenis para el smooth scroll, fuentes self-hosted con @fontsource (Martian Mono con ejes wdth+wght, Geist).
- Bun como package manager (`bun.lock`), pero el repo también tiene `package-lock.json`: al agregar dependencias, actualiza los dos (`npm install --package-lock-only`).

## Comandos
```
bun run dev      # Dev server
bun run build    # Build producción
bun run lint     # ESLint
```

## Estructura del Repo
```
src/
├── App.tsx                 # Rutas. Home, casos y 404 en el chunk principal; todo lo demás es lazy
├── site/                   # TODO el sitio nuevo (rediseño Terminal, Sep 2026)
│   ├── site.css            # Sistema visual completo, clases tb-*
│   ├── SiteLayout.tsx      # Header, status bar, skip link, Lenis, teclado, títulos por ruta, foco
│   ├── ascii/              # Render ASCII en three.js (renderer.ts) + póster de fallback
│   ├── content/            # cases.ts (Decision Records), site.ts, insights.ts, aiDesignOs.ts
│   ├── pages/              # Home, CasePage, About, Insights, AIDesignOS, Privacy, NotFound
│   └── article/ArticleLayout.tsx
├── pages/articles/         # 21 artículos. Solo contenido; usan components/article/ArticleLayout (re-export)
├── lib/articles.ts         # Metadata de los artículos (fuente de Insights)
└── components/ui/          # shadcn, sin uso (pendiente de limpiar)
scripts/gen-brand-assets.mjs  # Regenera la imagen de vista previa social y los favicons
```
Spec y decisiones del rediseño: `.claude/specs/redesign-terminal/` (requirements.md, design.md). Estado del pipeline: `.claude/pipeline/redesign-terminal/`.

## Sistema Visual (Terminal, desde 24 Sep 2026)
| Token | Valor |
|-------|-------|
| Papel (fondo) | `#ECECE6` |
| Tinta (texto, reglas 1px) | `#0E0E0E` |
| Tinta secundaria | `#55554F` (6.33:1 sobre papel) |
| Acento único | `#FF4F00`, solo seleccionado/activo/hover de acciones principales/foco/en vivo. **Nunca como texto sobre papel** (2.78:1) |

- Martian Mono (display, labels, UI) + Geist (texto largo). Grilla de 12 columnas expuesta con reglas de 1px, radio cero.
- Los casos son **Decision Records** (DR-001 a DR-005, estado "Accepted"): contexto, problema, restricciones, opciones (SELECTED/REJECTED), decisión, implementación, consecuencias, log.
- Teclado: `1`–`5` abren records, `h` home, `m` motion, `?` atajos. Status bar fija con sección, % de scroll, hora de Bogotá y switch de motion.
- Origen: lab privado `~/Documents/dev/miguelespinosa-lab` (3 prototipos; Miguel eligió C, "Terminal Brutal").

## Casos de Estudio (orden canónico)
Todos viven en `src/site/content/cases.ts` y se renderizan con `src/site/pages/CasePage.tsx` en `/case-study/:slug` (URLs sin cambios).
1. **DR-001 TP Design System** (`tp-design-system`). ⚠️ "Flamingo" es el nombre interno, CONFIDENCIAL: nunca en texto, alt ni nombres de archivo. La imagen de plumas (`tp-key-visual.webp`) se quedó por decisión de Miguel (24 Sep 2026).
2. **DR-002 Design Transformation** (`design-transformation`), 2022–2025.
3. **DR-003 Tati** (`tati-ai`), Miguel co-founder.
4. **DR-004 The Birdie Club** (`birdie-club`), Miguel co-founder.
5. **DR-005 BBVA Colombia** (`cash-conversion`), 2016–2019, mostrado como ARCHIVE.

## Arquitectura del Homepage
Header → hero (titular + árbol ASCII) → tabla de Decision Records → ticker → manifiesto (inverso, con decode) → últimos 3 insights + callout AI Design OS → contacto. Anclas: `#work`, `#manifesto` (alias `#philosophy`), `#insights`, `#contact`.
La tesis de abril se mantiene: texto primero, decisiones antes que artefactos, sin estética de landing SaaS.

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
**H1**: `LEADERSHIP THROUGH PRODUCT DECISIONS` · **Subhead**: `Senior Director of Product Design. Bridging business strategy, human-centered design, and AI innovation.` · CTAs `[ EXPLORE WORK ]` y `[ READ MANIFESTO ]` · Social proof: Teleperformance · Globant · BBVA · Zinobe.
Cita del manifiesto, sin raya: *"Good AI products don't impress users. They reassure them."*

## Reglas de Desarrollo
- NO editar directamente en Supabase Dashboard
- Componentes nuevos van en `src/site/` con el sistema Terminal (clases `tb-*`), no con shadcn/Tailwind.
- No crear componentes duplicados — revisar /src/components primero
- No romper el sistema de rutas existente
- El naranja de Lovable (`24 95% 53%`) sigue prohibido. El acento actual es `#FF4F00` y solo se usa según el sistema Terminal.
- **`.claude/settings.local.json` NUNCA se commitea, está en `.gitignore`.** Encontrado el 31 Jul 2026 con un API key de Resend real en texto plano dentro del allowlist de permisos, acumulado sesión tras sesión. El repo es **público** en GitHub. Si algún día `git status` lo muestra como no-ignorado, es señal de que el `.gitignore` se rompió, revisar antes de cualquier commit.
- **`Technical Assessments/` es intencional en este repo** (trabajo de marca personal/aplicaciones, confirmado por Miguel 31 Jul 2026), pero también está en `.gitignore` — contiene respuestas reales a assessments de otras empresas, no debe quedar público. No moverlo, no destrackearlo del gitignore.
- **`Docs/` está sin trackear pero NO está en `.gitignore`** (verificado 14 Ago 2026). Hoy tiene analytics de LinkedIn en `Docs/Personal Branding/`. Un `git add .` lo publicaría. Choca de frente con la convención global de cierre de jornada, que manda el journal a `Docs/journal/YYYY-MM.md`: seguirla acá stagearía material privado en un repo público. Mientras no se resuelva, **nada privado va a `Docs/`**. Lo personal, familiar, financiero o de negociación con clientes va a `~/Documents/MEC/<tema>/` o a Notion. Decisión pendiente: ignorar `Docs/` o sacar su contenido.

## Ambiente de desarrollo — errores conocidos (05 Ago 2026)
- **`bun` no estaba instalado en la máquina `maitoagency`** aunque el proyecto lo declara como package manager (`bun.lock`). Se instaló vía `brew install bun` (no el instalador `curl | bash` de bun.sh, se prefiere Homebrew).
- **`@swc/core-darwin-arm64` corrupto**: el paquete tenía `package.json` y `README.md` pero le faltaba el binario `.node` (33MB), causando `Failed to load native binding` al levantar `vite`/`vitejs-plugin-react-swc`. La causa fue una instalación previa incompleta, no algo que `bun install` normal arregle solo. Fix: `rm -rf node_modules && bun install` (reinstalación limpia sí trae el binario completo). Si el dev server falla con ese mismo error, empezar por ahí antes de investigar más.

## Reglas del rediseño (vigentes)
- **Nunca animar ejes de variable font atados al scroll**: produce glitch y traba PCs corporativos. Scroll ligado solo con `transform`/`opacity`/`clip-path`. Animaciones de ejes de una sola vez (entrada, hover) sí.
- **El switch de motion apaga TODO** lo no esencial (incluido Lenis) y al reencender nada se repite (`data-settled`); cada título conserva su estado final propio.
- **Foco tras navegación de cliente**: va a `#main-content` (o al ancla); nunca queda en `<body>`.
- **Contenido**: sin métricas inventadas. Las cifras vivas llevan fecha y fuente (R2.2 de la spec). Birdie: 195+ miembros pagando (197/200 fundadores el 25 Sep 2026) (piso del contador público `founders-count` de TBC) y 2.200+ compradores del PDF con acceso (dato de Miguel). TP: equipo 0 → 20+ (2022–2025). BBVA: 0 → 12 (bio).
- **Etiquetas: una etiqueta solo se queda si dice algo que el elemento de al lado no dice** (poda del 25 Sep 2026, crítica de Impeccable 27/40). Nada de eyebrows/kickers sobre títulos, nada de numeración decorativa (el nav no lleva `[01]`, las secciones no llevan `01`), `SecHead` sin meta salvo que informe, `DocHead.eyebrow` opcional y hoy sin uso. Tamaño mínimo de texto: 11px. Detector sobre la página renderizada: 170 hallazgos reales antes, ~70 después. Reporte en `.impeccable/critique/` (sin commitear).
- **Cierre del sitio: contratación, no consultoría** (decisión de Miguel, 25 Sep 2026). "Hiring a design leader? Write to me."
- **Fuera del sitio por decisión de Miguel (25 Sep 2026):** el origen de The Birdie Club (sus propios agentes de golf en Gemini/ChatGPT) porque revela el valor por el que cobra la academia, y los precios/niveles de membresía. Tati sí publica las cifras del corpus (880+ glosarios, 92.000+ términos, 17 sectores); el homenaje a la carrera de su mamá no va salvo que él lo pida.
- **Sin artefactos de trabajo en el sitio**: todo el trabajo de TP, BBVA y clientes está bajo confidencialidad; se muestra solo en entrevista (decisión de Miguel, 25 Sep 2026). No proponer capturas, tokens ni diagramas reales como fix de crítica.
- **Insights: 5 filtros y la categoría visible = etiqueta del filtro** (AI Strategy, Design Leadership, Business & Product, Ops Strategy, Talent Strategy). Un artículo nuevo usa una de esas cinco; `ArticleLayout` toma la categoría de `lib/articles.ts`, no del prop.
- **Sin raya (—)** en texto nuevo. Los cuerpos de los artículos todavía tienen rayas (pendiente).
- **Imagen de vista previa social**: `public/og-image-terminal.png`, se regenera con `scripts/gen-brand-assets.mjs`. WhatsApp/LinkedIn cachean por URL de imagen: si cambia el diseño, **nombre de archivo nuevo** y actualizar `og:image`/`twitter:image` en `index.html`. El `favicon.ico` también se regenera ahí (en abril solo se cambió el SVG y el `.ico` siguió con el corazón de Lovable, que es el que usa WhatsApp).
- **Dominio canónico: `www.miguelespinosa.co`** (el apex redirige 307). `canonical`, `og:url` y el JSON-LD apuntan a www.
- **QA visual**: el Browser pane se colgó con este proyecto; se verifica con Chrome headless (puppeteer de la caché del plugin impeccable, `--use-angle=swiftshader`) contra `dist/` servido estático o contra el preview de Vercel. La fluidez con GPU real la juzga Miguel.
- **Merge a main**: el hook `git-branch-protect` bloquea `gh pr merge` en este Mac porque usa `timeout`, que no existe en macOS (pendiente de arreglo en `~/.claude`). Mientras tanto, Miguel mergea el PR desde GitHub.

## CV — Estado (05 Ago 2026)
- Fuente: `~/Documents/MEC/CV_MiguelEspinosa_2026_ATS_ENG_v3.docx` (path varía por máquina: `nowheretraveler` o `maitoagency`, no asumir cuál sin verificar)
- PDF público en repo: `public/CV_MiguelEspinosa_2026_ATS_ENG_v3.pdf` (link en /about, actualizado en ambos lugares: `About.tsx` y `ExperienceSection.tsx`)
- **v3 (05 Ago 2026)**: agregada la entrada de **The Birdie Club** (Co-Founder & Head of Product Design, 2025–Present) entre Tati y Teleperformance, mismo formato que Tati. Métricas reales del case study: 38 miembros founding pagando en 5 países sin pauta paga, 244 activaciones de una lista de 1,862, cero fallas críticas en el lanzamiento.
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
- **Cómo editar el .docx**: no hay `pandoc` ni `soffice` instalados en la máquina `maitoagency`. Flujo que sí funcionó: `unzip` → editar `word/document.xml` a mano (buscar el bloque de la empresa vecina para copiar el patrón de `<w:p>`/`<w:r>` exacto, usar `w14:paraId` únicos) → validar con `python3 -c "import xml.etree.ElementTree as ET; ET.parse(...)"` → `zip -Xr`. Para exportar a PDF, `textutil` de macOS NO soporta `-convert pdf` (solo txt/rtf/html/doc/docx/odt/wordml/webarchive) — usar Microsoft Word vía AppleScript (`osascript`, `save as ... file format format PDF`), sí está instalado. Verificar el render con `pdftoppm -jpeg` antes de dar por bueno cualquier edit manual de XML.

## Deploy
- **Plataforma**: Vercel (migrado desde Lovable el 23 Abr 2026)
- `vercel.json` en raíz con SPA rewrite rule
- Push a `main` → Vercel despliega automáticamente
- Dominio: miguelespinosa.co

## Insights Hub
29 artículos. Rutas en App.tsx, metadata en src/lib/articles.ts (el orden del array es el orden de publicación y define el LOG-NNN).

Tanda del 25 Sep 2026 (LOG-022 a LOG-029), escrita desde el KB de strategic-designer y anclada en trabajo real de TBC, Tati y el rediseño: `not-the-user`, `builder-cant-see`, `five-members-four-hypotheses`, `zero-is-not-a-pass`, `guidelines-dont-enforce`, `unused-skills`, `cheap-options`, `rejected-options`.

- **Fechas pasadas permitidas (decisión de Miguel, 25 Sep 2026), con una condición: un artículo nunca cita algo ocurrido después de su fecha.** Por eso la tanda arranca el 1 Jul y no el 20 May: no había anclas verificables antes.
- Nada de nombres de miembros de TBC, precios cotizados a clientes ni hallazgos de seguridad sin cerrar. Cifras de TBC solo las que ya son públicas en el sitio o porcentajes sin datos de negocio.

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
- [ ] Limpiar lo que dejó el rediseño: `components/ui/` (shadcn), reglas muertas en `index.css`/`tailwind.config.ts`, dependencias framer-motion/radix/react-query
- [ ] Quitar rayas (—) de los cuerpos de los 21 artículos y de `lib/articles.ts`
- [ ] Enviar a Awwwards cuando Miguel lo decida (meta: Honorable Mention o SOTD)
- [ ] Secuencia nurture Brevo: 3 emails en 10 días → CTA workshop
- [ ] Landing del workshop trimestral (`/workshop`)
- [x] Configurar dominio custom en Vercel — ✅ miguelespinosa.co al aire
- [x] Subir CV v2 a /public — ✅ superado por v3 (05 Ago 2026), ver sección CV — Estado
- [x] Subir CV v3 a /public con Birdie Club — ✅ `CV_MiguelEspinosa_2026_ATS_ENG_v3.pdf` en producción (05 Ago 2026)
- [x] Lead magnet AI Design OS — ✅ vivo en producción (03 Jun 2026)
- [ ] `Images/` sin foto RAW de respaldo ahora (se borró `Spin 01.jpeg` el 05 Ago 2026 por pedido de Miguel) — si se necesita reprocesar la foto de perfil en el futuro, no hay fuente RAW en el repo

## Auditoría Impeccable — Estado (21 Ago 2026)

> Histórico: los componentes que menciona (Header, HeroSection, PhilosophyMarquee...) se eliminaron con el rediseño Terminal. Las reglas de a11y siguen vigentes y ahora viven en `src/site/`.

Corrida `/impeccable audit` (score inicial 11/20) → 7 acciones aplicadas en orden: mobile nav → contraste → overflow-x → reduced-motion → optimize imágenes → limpieza de dead code → polish.

**Cambios de accesibilidad:**
- `Header.tsx`: nav mobile con `Sheet` de shadcn (antes: `hidden md:flex` sin fallback — cero navegación en mobile fuera del homepage). Trigger de 44×44px, `aria-label="Open menu"`, cierra al navegar.
- Skip-to-content link (`#main-content`) en las 4 páginas que usan `Header` (Index, InsightsHub, Privacy, AIDesignOS). Los case studies y artículos no lo necesitan — tienen su propio back-link único, siempre visible en cualquier viewport.
- Contraste: eliminada la opacidad baja (`/30`, `/50`, `/60`) sobre `text-muted-foreground` en 12 sitios — con `--background: 0 0% 2%`, el piso real para 4.5:1 (AA) es ~85% opacidad, casi igual a 100%. Ahora esos textos usan `muted-foreground` completo (6.06:1) y la jerarquía secundaria viene de tamaño/tracking, no de opacidad.
- `useReducedMotion()` en el marquee infinito y en el rotating text del hero — antes corrían sin parar sin importar la preferencia del sistema.
- `overflow-x: hidden` en `body` — los glows decorativos de `HeroSection` (1000px) y `CaseStudyHero` (600px, reutilizado en todos los case studies) podían generar scroll horizontal fantasma en mobile.

**Performance:**
- `flamingo.jpeg` (580KB) → WebP (46KB) vía `<picture>` con fallback JPEG, `loading="lazy"` + dimensiones explícitas.
- `tati-hero.png`: `loading="lazy"` + dimensiones (está below-the-fold, después del hero full-viewport del case study).

**Limpieza de dead code encontrada durante la auditoría (no estaba en el hallazgo original):**
- `ExperienceSection.tsx` — componente completo sin importar en ningún lado desde que se movió a `/about` en abril. Borrado.
- `App.css` — boilerplate de Vite nunca importado (`logo-spin`, `.read-the-docs`). Borrado.
- `miguel-espinosa.jpg` (576KB) y `spin-profile.jpg` (844KB) en `src/assets/` — sin usar. Borrados.

**No tocado, verificado y dejado igual:** el token `--gradient-text` en `index.css` — el hook de diseño de Impeccable lo marcó, pero no está usado en ningún componente (cero `bg-clip-text` en todo `src/`) y estaba fuera del alcance de esta auditoría.

**Nota sobre verificación en browser:** el detector mecánico de Impeccable (`detect.mjs`) devuelve `[]` sobre archivos siempre, incluso en código adversarial — modo conocido y roto, documentado en `~/.claude/CLAUDE.md`. La auditoría se hizo por lectura manual + cálculo real de contraste WCAG, no por el detector.

Durante la verificación en el Browser pane de esta sesión se encontró que la pestaña queda en `document.visibilityState: "hidden"` de forma persistente (confirmado con `requestAnimationFrame` que nunca dispara ni después de 2s de espera). Esto bloqueó la verificación visual final de las animaciones (`AnimatedMetric`, rotating hero text) — se rastreó manualmente que `isInView` sí llega a `true` y que `animate()` se invoca con los valores correctos, así que el código está bien; lo que no se pudo confirmar en esta sesión es el resultado pintado en pantalla. Si se repite en otra sesión, no asumir que es el mismo bug del sitio — primero confirmar `document.visibilityState` antes de tocar código de animación.

## Animaciones
Ver "Reglas del rediseño". El sistema anterior (Framer Motion, AnimatedMetric, marquee de abril) se eliminó en el rediseño; framer-motion sigue en package.json sin uso (pendiente de limpiar).

## Sesiones
- **06 Jun 2026** — Animaciones con 21st.dev:
  - HeroSection: rotating text (AnimatePresence, 3 frases, 3s interval)
  - PhilosophyMarquee: Framer Motion + stroke outline + fade edges
  - AnimatedMetric shared component (4 formatos de número)
  - MetricGrid migrado a AnimatedMetric
  - CaseStudySection métricas homepage animadas
  - BlogSection: stagger scroll reveal en cards
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
- **29 Jul – 05 Ago 2026** — Sprint de búsqueda de trabajo + cierre de seguridad:
  - Cover letters + respuestas de screening para: Telefónica, Digital Design Lead (agencia Bogotá), Accenture, Scale Up (cliente SaaS PRM), RoomPriceGenie, Lodgify, bsport, Wizeline, Pearson (9 aplicaciones enviadas). SAARG.ai evaluado y descartado (sin salario + equity sin tracción + filtro de perfil junior disfrazado de "cofundador").
  - Job Search Tracker en Notion (base de datos "Job Search Tracker — Design Leadership", kanban Nueva → Aplicada → Respuesta → Descartada) + agent `job-search-scraper` (`~/.claude/agents/`) que busca en LinkedIn vía Apify cada 3 días. Detalle completo vive en la config global, no en este repo.
  - CV actualizado a v3: agregada la entrada de The Birdie Club (ver sección CV — Estado).
  - Cierre de seguridad: `.claude/settings.local.json` (tenía un API key de Resend expuesto) y `Technical Assessments/` gitignoreados — el repo es público. `AGENTS.md` y `.claude/launch.json` sí se subieron (limpios, sin secretos).
  - Ambiente de desarrollo local reparado: `bun` instalado, `node_modules` reinstalado limpio (binario de `@swc/core` venía corrupto). Ver sección de arriba.
  - Foto RAW `Images/Spin 01.jpeg` borrada a pedido de Miguel (ya no hace falta, la versión optimizada vive en `src/assets/`).
