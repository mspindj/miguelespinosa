// The five case studies as Decision Records. Full content carried over from the previous
// case pages (R2.1), restructured into the record sections of design.md. Em dashes from the
// source were rewritten as commas, colons, parentheses or full stops. Nothing was added.

import tpKeyVisual from "@/assets/tp-key-visual.webp";
import tatiHero from "@/assets/tati-hero.png";
import type { DecisionRecord } from "./types";

const AUTHOR = "Miguel Espinosa";

export const records: DecisionRecord[] = [
  /* ------------------------------------------------------------------ DR-001 */
  {
    slug: "tp-design-system",
    number: "01",
    years: "2023–2025",
    title: "TP Design System",
    client: "Teleperformance",
    role: "Senior Director of Product Design",
    tagline: "Scaling Design by Scaling Decisions",
    summary:
      "Multi-brand design system unifying fragmented UI libraries across a 500K+ employee organization. Token architecture + engineer-handoff automation.",
    metric: { value: "−40%", label: "Handoff time" },
    tags: ["Design Systems", "DesignOps", "Teleperformance"],
    featured: true,
    image: { src: tpKeyVisual, alt: "Abstract feather texture, TP Design System key visual", width: 1376, height: 768 },
    optionsLabel: "Options",
    tree: { branches: 3, chosen: 2 },
    sections: {
      context: [
        {
          kind: "lead",
          text: "We envisioned a future where design at scale wouldn't depend on individuals, but on shared decisions, shared language, and shared responsibility. The TP Design System was created to make design decisions reusable, discussable, and scalable across a global organization.",
        },
        {
          kind: "text",
          text: "Teleperformance operates dozens of internal platforms and client-facing products across regions, business units, and maturity levels. Design work existed everywhere. Design alignment did not.",
        },
      ],
      problem: [
        { kind: "lead", text: "The issue wasn't visual inconsistency. It was *decision fragmentation at scale*." },
        {
          kind: "list",
          items: [
            "UX quality depended entirely on local context, not on shared standards.",
            "Patterns diverged across products with every sprint.",
            "Delivery slowed as teams negotiated decisions that should have already been made.",
            "Design was perceived as an execution phase, not a strategic input.",
          ],
        },
      ],
      constraints: [
        { kind: "lead", text: "This was an organizational challenge, not a tooling one." },
        {
          kind: "cells",
          items: [
            { label: "01", body: "Global scale with strong local autonomy: alignment couldn't be imposed." },
            { label: "02", body: "Products at very different lifecycle stages (Angular, React, Vue)." },
            { label: "03", body: "Uneven design maturity across teams and business units." },
            { label: "04", body: "No shared governance model: every team invented their own." },
          ],
        },
      ],
      options: [
        {
          kind: "text",
          text: "We didn't jump to a solution. We mapped the options and stress-tested each one against TP's operational reality.",
        },
        {
          kind: "options",
          items: [
            {
              label: "Option A",
              name: "Local design systems",
              assessment: "Each product team owns their own system. Fast to start, impossible to align.",
              selected: false,
            },
            {
              label: "Option B",
              name: "Centralized UI library",
              assessment: "One team owns all components. High consistency, low adoption. Creates dependency, not capability.",
              selected: false,
            },
            {
              label: "Option C",
              name: "Design system as product",
              assessment: "Embedded in teams, governed federally. Built by contributors, not guardians.",
              selected: true,
            },
          ],
        },
      ],
      decision: [
        {
          kind: "lead",
          text: "We deliberately positioned the TP Design System not as a ~~component library~~, but as **design infrastructure**. A system designed to align teams, enable autonomy, and scale decisions, not to centralize control.",
        },
      ],
      implementation: [
        {
          kind: "text",
          text: "The system was built inside product teams, not alongside them. That distinction changed everything about adoption.",
        },
        {
          kind: "cells",
          numbered: true,
          items: [
            {
              title: "Shared design language",
              body: "Tokens, patterns, and principles applied across TP Optymize (Angular), TPPS Studio (React), TPPS Sidebar (React), and myForms viewer (Vue.js).",
            },
            {
              title: "Reusable component library",
              body: "Multi-framework implementation (React, Vue, Angular), built for real product contexts, not abstract use cases.",
            },
            {
              title: "Federation governance model",
              body: "Contribution model that gave teams ownership without fragmenting the system. Autonomy with alignment.",
            },
            {
              title: "Design embedded in delivery",
              body: "The system lived inside product squads, not maintained by a separate design ops function from outside.",
            },
            {
              title: "Documentation and enablement",
              body: "Decision rationale documented alongside components, so teams could extend the system with confidence.",
            },
          ],
        },
      ],
      consequences: [
        {
          kind: "metrics",
          items: [
            { value: "−40%", label: "Design-to-development handoff time" },
            { value: "−70%", label: "Duplicated component creation" },
            { value: "−25%", label: "UI-related bugs reported" },
            { value: "80%", label: "Team adoption within 6 months" },
            { value: "90%", label: "UI consistency across products" },
          ],
        },
      ],
      log: [
        { kind: "subhead", text: "Leadership Reflection" },
        {
          kind: "text",
          text: "My role was to create the conditions for the system to exist and scale: through vision, stakeholder alignment, and a governance model that gave teams ownership without fragmenting the system. The real outcome wasn't consistency. It was **autonomy with alignment**.",
        },
        {
          kind: "quote",
          text: "Scaling design is not about standardizing creativity. It's about standardizing how teams make decisions together.",
          author: AUTHOR,
          role: "Senior Director of Product Design",
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ DR-002 */
  {
    slug: "design-transformation",
    number: "02",
    years: "2022–2025",
    title: "Design Transformation",
    client: "Teleperformance",
    role: "Senior Director of Product Design",
    tagline: "Building Design as an Organizational Capability",
    summary:
      "Moved design from execution layer to strategic function inside a global BPO. Built the operating model, hiring framework, and design culture from scratch.",
    metric: { value: "0 → 20+", label: "Team scale" },
    tags: ["Leadership", "DesignOps", "Org Design"],
    featured: true,
    optionsLabel: "Shifts",
    tree: { branches: 3, chosen: 2 },
    sections: {
      context: [
        {
          kind: "lead",
          text: "The goal was to reposition design, not as a service layer, a phase in a process, or a specialized role, but as a **shared organizational capability**. A function embedded into how Teleperformance thinks, decides, and ships.",
        },
        {
          kind: "text",
          text: "Design existed across teams, but with dramatically different levels of maturity, visibility, and impact. There was talent everywhere. What was missing was the infrastructure to make that talent work together, and the organizational language to make design legible to the business.",
        },
      ],
      problem: [
        {
          kind: "lead",
          text: "The bottleneck wasn't a lack of designers. It was a lack of organizational infrastructure.",
        },
        {
          kind: "cells",
          items: [
            {
              title: "UX without standards",
              body: "Experience quality varied dramatically across products and regions, with no shared baseline.",
            },
            {
              title: "Research without credibility",
              body: "Insights existed but were questioned or ignored. Research had no organizational home.",
            },
            {
              title: "Design as execution",
              body: "Teams treated design as 'making screens'. Discovery was skipped. Speed trumped understanding.",
            },
            {
              title: "Invisible strategic value",
              body: "The impact of design on business outcomes wasn't being measured, framed, or communicated.",
            },
          ],
        },
      ],
      constraints: [
        {
          kind: "lead",
          text: "Transformation at a global operations company isn't a design problem. It's a change management problem with design at the center.",
        },
        {
          kind: "cells",
          items: [
            { label: "01", body: "Global organization with strong local execution culture: alignment couldn't be mandated." },
            { label: "02", body: "Design maturity was uneven across teams, regions, and business units." },
            { label: "03", body: "Skepticism toward research: data-informed decisions were not the default." },
            { label: "04", body: "TP is an operations company first. Speed and efficiency are structural values." },
          ],
        },
      ],
      options: [
        { kind: "subhead", text: "The Strategic Shift" },
        { kind: "text", text: "Three fundamental transitions defined the transformation:" },
        {
          kind: "shifts",
          items: [
            { from: "Execution", to: "Capability", note: "From deliverables to organizational infrastructure." },
            { from: "Isolated", to: "Embedded", note: "From a separate design team to design inside every squad." },
            { from: "Output", to: "Outcome", note: "From shipping features to shaping business results." },
          ],
        },
      ],
      decision: [
        { kind: "subhead", text: "The Four Pillars" },
        { kind: "lead", text: "Transformation was structured around four interdependent dimensions:" },
        {
          kind: "cells",
          items: [
            {
              label: "People",
              body: "Redesigned the global design org. Standardized roles, career paths, and mentorship. Built the extended design community across 6 practices.",
            },
            {
              label: "Process",
              body: "Introduced discovery-first workflows. Integrated design into the Agile/product lifecycle from problem framing to delivery, not just after specs.",
            },
            {
              label: "Systems",
              body: "Built the TP Design System as shared infrastructure. Centralized Figma libraries, research repositories, and documentation.",
            },
            {
              label: "Culture",
              body: "Launched Design S-Cool: a 6-module design thinking program for ALL TP employees, not just designers. Design became a shared organizational language.",
            },
          ],
        },
      ],
      implementation: [
        { kind: "subhead", text: "Key Enablers" },
        { kind: "text", text: "The transformation ran on five purpose-built programs and platforms:" },
        {
          kind: "cells",
          numbered: true,
          items: [
            {
              title: "TP Design System",
              body: "Shared component library and design language across all internal products (TP Optymize, TPPS Studio, myForms viewer).",
            },
            {
              title: "Design S-Cool",
              body: "6-module design thinking learning path opened to all TP employees, building design literacy across the organization.",
            },
            {
              title: "Design Hub",
              body: "Centralized knowledge platform (SharePoint) for shared process, templates, research, and documentation.",
            },
            {
              title: "Design as a Service",
              body: "Structured offering of UX, visual, service design, and research capabilities available to internal business units.",
            },
            {
              title: "Research Archetypes",
              body: "Digital user archetypes defined across territorial, cultural, age, and technological variables, giving teams a shared model of who they're designing for.",
            },
          ],
        },
      ],
      consequences: [
        {
          kind: "metrics",
          items: [
            {
              value: "0 → 20+",
              label: "Core design team built",
              note: "Built the design team at Teleperformance from zero, alongside the extended community.",
            },
            {
              value: "Limited → Structured",
              label: "UX Maturity (NNGroup model)",
              note: "Assessed using the Nielsen Norman Group maturity framework. Moved from reactive execution to structured practice.",
            },
            {
              value: "30+",
              label: "Extended design community",
              note: "Designers embedded across squads: Trust & Safety, Employee Platforms, Security & Ops, Chat/CRM/Omnichannel.",
            },
            {
              value: "Earlier",
              label: "Design involvement in product lifecycle",
              note: "Discovery became the default: design enters at problem framing, not at spec handoff.",
            },
            {
              value: "Stronger",
              label: "Stakeholder alignment on research",
              note: "Research confidence increased significantly as archetypes and shared process gave teams a common decision framework.",
            },
          ],
        },
      ],
      log: [
        { kind: "subhead", text: "Leadership Reflection" },
        {
          kind: "text",
          text: "My role throughout was not to design the transformation. It was to design the conditions for it to happen. That meant vision setting, stakeholder alignment, building the operating model, and then getting out of the way so teams could own it. Transformation isn't something you deliver. It's something you enable.",
        },
        {
          kind: "quote",
          text: "Design doesn't scale when you hire more designers. It scales when the organization learns to think like one.",
          author: AUTHOR,
          role: "Senior Director of Product Design",
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ DR-003 */
  {
    slug: "tati-ai",
    number: "03",
    years: "2025–2026",
    title: "Tati",
    client: "tati.la",
    role: "Co-founder & Head of Product Design",
    tagline: "AI Translation Designed for Trust",
    summary:
      "Designed the trust layer between humans and AI agents for a specialized translation platform. The interface is a promise: clarity, confidence, control.",
    metric: { value: "96%+", label: "Quality standard" },
    tags: ["AI Product", "Trust UX", "Co-founder"],
    featured: true,
    image: { src: tatiHero, alt: "tati.la AI Translation platform", width: 1920, height: 1046 },
    tree: { branches: 2, chosen: 1 },
    sections: {
      context: [
        { kind: "link", label: "tati.la", href: "http://tati.la" },
        {
          kind: "lead",
          text: "We envisioned a future where AI-powered translation would not optimize for speed or volume, but for **trust, accuracy, and responsibility**. tati.la was designed to amplify human expertise, not replace it.",
        },
        {
          kind: "text",
          text: "Professional translation workflows are traditionally slow, expensive, and highly dependent on expert knowledge. While generic AI tools exist, they often prioritize speed at the cost of accuracy, tone, and accountability.",
        },
        { kind: "subhead", text: "My Role" },
        {
          kind: "text",
          text: "Co-founder and Head of Product Design. I defined the product strategy, owned the full user experience from brief to shipped interface, and built the product using an AI-augmented development harness, a methodology I've since published as the [AI Design Operating System](/ai-design-os). Three people. No handoffs between strategy and execution.",
        },
      ],
      problem: [
        {
          kind: "lead",
          text: "The challenge wasn't just translating text; it was creating confidence in AI-generated output.",
        },
        {
          kind: "list",
          items: [
            "Sensitive domains (legal, NGOs, human rights) require extreme precision.",
            "Errors have significant legal and reputational impact.",
            "Generic AI lacks domain awareness and terminology control.",
            "Users need predictability over experimentation.",
          ],
        },
      ],
      constraints: [
        { kind: "lead", text: "Constraints defined the product:" },
        {
          kind: "cells",
          numbered: true,
          items: [
            { title: "Accuracy", body: "High expectations for specific domain-specific terminology." },
            { title: "Complexity", body: "Document-level processing requires asynchronous workflows." },
            { title: "Predictability", body: "Costs and margins must be transparent and auditable." },
            {
              title: "UX Challenge",
              body: "Asynchronous processing introduces uncertainty that must be reduced through design.",
            },
          ],
        },
      ],
      decision: [
        { kind: "lead", text: "We avoided the ~~\"AI spectacle\" of real-time chat~~." },
        {
          kind: "text",
          text: "Instead, we designed tati.la as a **document-first, asynchronous service** powered by AI but guided by expert-curated glossaries. We prioritized clarity and traceability over speed.",
        },
      ],
      implementation: [
        {
          kind: "cells",
          numbered: true,
          items: [
            { title: "Glossary-Driven Logic", body: "Ensuring translation quality aligns with expert standards." },
            {
              title: "Async Workflow",
              body: "A robust upload-based system with clear status tracking to manage user expectations.",
            },
            { title: "Simplified Pricing", body: "Predictable per-document costs to ensure scalability." },
            { title: "Auditability", body: "Access to history and downloads for full accountability." },
          ],
        },
      ],
      consequences: [
        {
          kind: "metrics",
          items: [
            { value: "96%+", label: "Quality standard in legal and regulated domain translations" },
            { value: "3", label: "Co-founding team: product design, engineering, domain expertise" },
            { value: "0 → 1", label: "Full product shipped from concept to live platform" },
            { value: "Async", label: "Architecture choice. Document-first over real-time AI spectacle" },
          ],
        },
      ],
      log: [
        { kind: "subhead", text: "How We Operated" },
        {
          kind: "text",
          text: "Building a B2B AI product with three people means every decision costs something. We used an AI-augmented development harness (context files, separated agent roles, persistent memory, and deliberate human gates) to ship product quality without a dedicated engineering team.",
        },
        {
          kind: "text",
          text: "The same harness is now the foundation of the [AI Design Operating System](/ai-design-os), adopted by other design teams building AI-native products.",
        },
        { kind: "subhead", text: "What I Learned" },
        {
          kind: "text",
          text: "When you own both the product strategy and the design execution, you stop treating them as separate disciplines. The hardest decisions at Tati were not visual. They were about what the product would refuse to do. Saying no to real-time chat. Saying no to speed as the primary value proposition. Building for trust in a domain where errors have legal consequences forced a different kind of design thinking.",
        },
        {
          kind: "quote",
          text: "Good AI products don't just impress users. They reassure them.",
          author: AUTHOR,
          role: "Co-founder & Head of Product Design, tati.la",
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ DR-004 */
  {
    slug: "birdie-club",
    number: "04",
    years: "2025–2026",
    title: "The Birdie Club",
    client: "The Birdie Club",
    role: "Co-founder & Head of Product Design",
    tagline: "Building a Creator's Digital Twin with AI",
    summary:
      "Built a methodology-first AI coaching platform for a golf instructor with 70K+ followers. Gemini-powered swing analysis encoded around his proprietary RJ100 framework.",
    metric: { value: "180+", label: "Paying members · Sep 2026" },
    tags: ["AI Product", "Creator Economy", "PWA"],
    featured: true,
    tree: { branches: 3, chosen: 1 },
    sections: {
      context: [
        { kind: "link", label: "app.davidvanegas.com.co", href: "https://app.davidvanegas.com.co" },
        {
          kind: "lead",
          text: "Build a **digital twin** of a golf instructor, delivering personalized AI coaching to thousands of students without losing the human voice, the methodology, or the trust that took a decade to build.",
        },
        {
          kind: "text",
          text: "David Vanegas built a 70k+ following as a Colombian golf instructor through YouTube, in-person clinics, and direct coaching. His RJ100 system, a structured methodology around Ritmo, Juego Corto, and 100 Yardas, had proven results. But the model had a ceiling: one instructor, limited hours, and a student base that had already outgrown what he could serve personally.",
        },
        { kind: "subhead", text: "My Role" },
        {
          kind: "text",
          text: "Co-founder and Head of Product Design. I defined the product strategy, designed the full user experience, and orchestrated development using an AI-augmented harness: Lovable for UI generation, Claude Code for logic and edge functions, and the SDD methodology I've published as the [AI Design Operating System](/ai-design-os). No traditional dev team. Product decisions and design execution, shared between two people.",
        },
      ],
      problem: [
        {
          kind: "lead",
          text: "The challenge wasn't building an AI. It was encoding a person's judgment into software, at scale, with no margin for feeling generic.",
        },
        {
          kind: "cells",
          items: [
            {
              title: "Coaching doesn't scale",
              body: "David's methodology lived entirely in his head and in-person sessions. Hours available, students coached, and revenue generated were all tightly coupled.",
            },
            {
              title: "Generic AI destroys brand trust",
              body: "A chatbot giving generic golf tips would contradict everything David had built. The product had to sound like him, or not launch at all.",
            },
            {
              title: "Two audiences, two contracts",
              body: "New market users expected a product. Existing 1,800+ students expected continuity with a relationship they already had. Both had to feel honored.",
            },
            {
              title: "AI output is probabilistic, coaching isn't",
              body: "Users comparing AI feedback to real instructor feedback have zero tolerance for vagueness. The swing analysis needed to feel authoritative, not hedged.",
            },
          ],
        },
      ],
      constraints: [
        {
          kind: "lead",
          text: "Building for a creator means the product IS the person. Every constraint was architectural, not just technical.",
        },
        {
          kind: "cells",
          items: [
            {
              label: "01",
              title: "No traditional dev team",
              body: "Development ran through Lovable with a 5-credit daily budget. Every prompt had to be precision-targeted: no exploratory iteration.",
            },
            {
              label: "02",
              title: "Live platform, no staging",
              body: "Beta testers were real paying prospects. Bugs in production weren't abstract. They were visible failures during the founder launch window.",
            },
            {
              label: "03",
              title: "LATAM mobile constraints",
              body: "Target users are 40–60+ year-old golfers on 4G in Colombia, Mexico, Argentina, Chile, Spain. Video streaming had to work on real networks, not ideal ones.",
            },
            {
              label: "04",
              title: "iOS PWA as primary delivery",
              body: "No App Store. No install friction. The product had to feel native on iPhone while living inside Safari, with all the edge cases that implies.",
            },
          ],
        },
      ],
      decision: [
        { kind: "subhead", text: "The Strategic Decision" },
        { kind: "text", text: "Three decisions defined the product architecture:" },
        {
          kind: "shifts",
          items: [
            {
              from: "Generic AI",
              to: "Methodology-first",
              note: "David's RJ100 framework (Ritmo, Juego Corto, 100 Yardas) defines the coaching structure, not a general golf knowledge base.",
            },
            {
              from: "Chatbot UI",
              to: "Coaching thread",
              note: "Sessions persist across time. The AI remembers your last drill, your committed plan, and your follow-up check-in.",
            },
            {
              from: "One product",
              to: "Three-tier model",
              note: "Gift access for 1,800+ existing students. Founder pricing ($18/mo, 200 spots). Premium circle ($300/mo) as the future ceiling.",
            },
          ],
        },
        { kind: "subhead", text: "The Core Insight" },
        { kind: "lead", text: "We rejected the ~~generic AI coach pattern~~." },
        {
          kind: "text",
          text: "David's RJ100 methodology isn't content. It's the **product architecture**. Every AI output is structured around its three pillars. Every drill maps to a specific focus area. Every session builds on the last. The AI doesn't give golf tips. It coaches the way David coaches, because his framework is what defines the system prompt, the output schema, and the coaching memory model.",
        },
      ],
      implementation: [
        {
          kind: "cells",
          numbered: true,
          items: [
            {
              title: "AI Video Analysis",
              body: "Gemini 2.5 Flash analyzing swing video through David's RJ100 lens, returning prioritized checkpoints, specific drills, and a weekly focus area.",
            },
            {
              title: "Coaching Memory",
              body: "coaching_sessions table persisting drills completed, committed plans, and follow-up check-ins across every session: the AI knows what you've been working on.",
            },
            {
              title: "Mass Onboarding Architecture",
              body: "HMAC-signed activation URLs for 1,862 users: no password pre-creation, no account waste. Activation on click, auto-login, redirect to dashboard.",
            },
            {
              title: "CRM Lifecycle Automation",
              body: "GHL integration tracking every lifecycle event (activation, first swing, first round, inactivity) without manual CRM entry.",
            },
            {
              title: "82-Lesson Academy",
              body: "Full program migrated to proprietary CDN. Seven modules. Videos, PDFs, and structured learning paths, all inside the app, no YouTube leakage.",
            },
          ],
        },
      ],
      consequences: [
        {
          kind: "metrics",
          items: [
            { value: "180+", label: "Paying members · Sep 2026" },
            { value: "2,200+", label: "PDF program buyers with platform access · Sep 2026" },
            { value: "38", label: "Paying founders at launch · 5 countries · zero paid advertising" },
            { value: "244", label: "Community activations from 1,862-person list" },
            { value: "0", label: "Critical failures at launch · shipped clean on day one" },
            { value: "47", label: "Days post-launch · pre-open market · all growth is organic" },
          ],
        },
      ],
      log: [
        { kind: "subhead", text: "How We Operated" },
        {
          kind: "text",
          text: "Five daily Lovable credits. No staging environment. Real beta users from day one. The constraint forced a discipline that most teams don't have: every prompt had to be precise, every feature had to earn its place, and every production change had to be intentional.",
        },
        {
          kind: "text",
          text: "We used the SDD harness (context files encoding David's voice and RJ100 methodology, separated agent roles for spec and implementation, persistent corrections logs) to maintain product coherence across dozens of sprints without a single design handoff doc. The same system is now the [AI Design Operating System](/ai-design-os).",
        },
        { kind: "subhead", text: "What I Learned" },
        {
          kind: "text",
          text: "The hardest design challenge on this project wasn't teaching AI to analyze a golf swing. It was designing trust at three levels simultaneously: the paying customer trusting an AI with their technique, 1,800 existing students trusting that this new product honored the relationship they already had with David, and David trusting that his methodology (his competitive advantage) wasn't being commoditized into a generic chatbot. Getting all three right required product decisions, not just engineering ones.",
        },
        {
          kind: "quote",
          text: "The AI wasn't the product. David's methodology was the product. The AI was the delivery system we built so one instructor could coach thousands.",
          author: AUTHOR,
          role: "Co-founder & Head of Product Design, The Birdie Club",
        },
      ],
    },
  },

  /* ------------------------------------------------------------------ DR-005 */
  {
    slug: "cash-conversion",
    number: "05",
    years: "2016–2019",
    title: "BBVA Colombia",
    client: "BBVA Colombia",
    role: "UX & Design Manager",
    tagline: "Building Colombia's #1 Mobile Bank",
    summary:
      "The first dedicated Design Authority at country level. Five products, one portfolio, and the Design Ambassadors Program.",
    metric: { value: "760K+", label: "Monthly transfers" },
    tags: ["Banking", "Design Authority", "Culture"],
    featured: false,
    tree: { branches: 3, chosen: 0 },
    sections: {
      context: [
        { kind: "subhead", text: "The Role" },
        {
          kind: "facts",
          items: [
            { label: "Company", value: "BBVA Colombia S.A." },
            { label: "Title", value: "UX & Design Manager" },
            { label: "Scope", value: "Full digital portfolio: mobile, web, investments, FX" },
          ],
        },
        { kind: "subhead", text: "The Vision" },
        {
          kind: "lead",
          text: "I joined BBVA Colombia as the highest-ranking design leader, the first time the bank had a dedicated Design Authority at the country level. The mandate wasn't to redesign one product. It was to transform how design worked inside a major financial institution: from invisible execution layer to strategic decision-making function.",
        },
      ],
      problem: [
        { kind: "lead", text: "The product problems were symptoms. The root cause was structural." },
        {
          kind: "cells",
          numbered: true,
          items: [
            {
              title: "Design as a service layer",
              body: "Each product team operated independently. No shared principles, no shared language. Design was called in at the end to make things look good.",
            },
            {
              title: "Fragmented digital portfolio",
              body: "Mobile app, transfers, FX, investments, and public website, all built in silos. The user experienced five different mental models inside one bank.",
            },
            {
              title: "Low digital trust",
              body: "Users avoided the app for critical transactions. Moving money felt risky. Opening an investment account required a branch visit.",
            },
            {
              title: "No design culture",
              body: "Design decisions were made by whoever was in the room. There was no framework for quality, consistency, or long-term coherence.",
            },
          ],
        },
      ],
      decision: [
        { kind: "subhead", text: "The framework" },
        {
          kind: "lead",
          text: "Build design authority **in parallel**, not sequentially. Ship products and build culture at the same time. Don't wait for the organization to be ready. Create the conditions while delivering the work.",
        },
        {
          kind: "text",
          text: "This meant defining shared design principles, establishing research governance, building the Design Ambassadors Program, and redesigning critical products, all simultaneously, across a 3.5-year tenure.",
        },
      ],
      implementation: [
        { kind: "subhead", text: "The Work: 5 Products, One Portfolio" },
        {
          kind: "products",
          items: [
            {
              number: "01",
              name: "Transfers",
              challenge:
                "760,000+ operations per month, the most critical flow in the app. Users experienced high cognitive load, unclear feedback, and anxiety around high-value transactions.",
              decision:
                "Redesigned the full mental model of 'sending money': simplified the step structure, introduced real-time validation, and replaced banking jargon with intent-based language.",
              result: "−23% transaction time (2:03 → 1:35 min) · Emotional satisfaction +11 pts · Validated with 135 users",
            },
            {
              number: "02",
              name: "FX Banca Móvil",
              challenge:
                "International money transfers required a physical branch visit: a process that took hours and involved paperwork and hidden fees.",
              decision:
                "Designed a mobile-first FX experience built on three principles: instructive (guided at every step), simple (no additional documents, no hidden fees), and self-sufficient (users manage operations autonomously).",
              result: "Multi-hour office process → minutes from mobile. 100% document-free. Full fee transparency.",
            },
            {
              number: "03",
              name: "Investment Fund",
              challenge:
                "Customers couldn't open an investment fund from BBVA Mobile. The opportunity: millions of customers who wanted to invest but didn't know how or where to start.",
              decision:
                "Designed a 100% digital onboarding experience built around three user insights: simplicity (invest with one tap), expert support nearby, and financial planning for the future.",
              result: "80% of all investment fund contracts are now completed through the mobile channel.",
            },
            {
              number: "04",
              name: "App / Tienda de Pagos",
              challenge:
                "Active users averaged one transaction per month. The app was functional but not emotionally engaging: users didn't return unless they had to.",
              decision:
                "Redesigned payments around the formula: Trustworthy + Emotion = Recurrence. Built a narrative layer (storytelling and familiarity) to transform payments from a chore into a habit.",
              result: "Increased transaction recurrence among active users. Grew digital payment operations.",
            },
            {
              number: "05",
              name: "Public Website",
              challenge:
                "The website didn't reflect the real product offering. Information was outdated, structured around internal categories rather than user goals.",
              decision:
                "Rebuilt the information architecture from scratch: user research informed a new goal-based navigation. Aligned content to the current product reality across all segments.",
              result:
                "Information aligned to real product offering. Improved discoverability across LATAM and Colombia audience.",
            },
          ],
        },
        { kind: "subhead", text: "Building the Culture" },
        { kind: "lead", text: "Design Ambassadors Program" },
        {
          kind: "text",
          text: "Products improve at the speed of the organization's design maturity. To scale impact beyond my team, I founded the Design Ambassadors Program, training non-designers across the bank to apply user-centered thinking in their daily decisions.",
        },
        {
          kind: "text",
          text: "The program created a distributed network of design advocates inside engineering, product, marketing, and operations, ensuring design principles outlasted any single project.",
        },
        {
          kind: "stats",
          items: [
            { value: "125+", label: "Ambassadors trained" },
            { value: "5+", label: "Departments reached" },
            { value: "3.5", label: "Years of sustained culture change" },
            { value: "1st", label: "Design Authority in BBVA Colombia history" },
          ],
        },
      ],
      consequences: [
        {
          kind: "metrics",
          items: [
            { value: "−23%", label: "Transfer time reduced" },
            { value: "80%", label: "Investment fund contracts via mobile" },
            { value: "760K+", label: "Monthly transfer operations" },
            { value: "125+", label: "Design Ambassadors trained" },
            { value: "#1", label: "Mobile Bank in Colombia, 2019" },
            { value: "2×", label: "Accenture Innovation Awards" },
          ],
        },
        {
          kind: "callout",
          title: "Best Mobile Bank in Colombia, 2019",
          text: "The recognition wasn't for one product. It was for a consistent, cross-portfolio elevation of the digital experience over three years. Every product worked better, felt better, and was more trusted than when we started.",
        },
      ],
      log: [
        {
          kind: "quote",
          text: "You don't fix a fragmented product portfolio with better UI. You fix it by building a shared language for decisions.",
          author: AUTHOR,
          role: "UX & Design Manager, BBVA Colombia",
        },
        { kind: "subhead", text: "Leadership Reflection" },
        {
          kind: "text",
          text: "BBVA Colombia taught me that design authority is not a title. It's a practice. You earn it by shipping things that work, building relationships that last, and creating systems that function when you're not in the room. The products improved because the decisions improved. And the decisions improved because we built a shared language for making them.",
        },
        {
          kind: "quote",
          text: "The best design system you can build inside an organization isn't a component library. It's a shared understanding of what good decisions look like.",
          author: AUTHOR,
          role: "UX & Design Manager, BBVA Colombia",
        },
      ],
    },
  },
];

export const recordId = (r: DecisionRecord) => `DR-${r.number.padStart(3, "0")}`;
export const caseHref = (r: DecisionRecord) => `/case-study/${r.slug}`;
export const getRecord = (slug: string | undefined) => records.find((r) => r.slug === slug);
