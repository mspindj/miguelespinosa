
## Add tati.la Screenshot to Case Study Page + Home Card

Same treatment as the flamingo image for TP Design System: use the uploaded screenshot as a hero banner on the tati.la case study page and as the thumbnail image on the home page card.

---

### 1. Save the Image

Copy `user-uploads://Screenshot_2026-02-16_at_2.59.40 PM.png` to `src/assets/tati-hero.png`

### 2. Case Study Page

**File:** `src/pages/TatiCase.tsx`

- Import the image: `import tatiHero from "@/assets/tati-hero.png"`
- Add a full-width image banner between the Hero and "The Vision" section (same pattern as TP Design System: `container mx-auto px-6 py-12`, `rounded-2xl overflow-hidden`, `aspect-[21/9] object-cover`)

### 3. Home Page Card

**File:** `src/components/CaseStudySection.tsx`

- Import the tati hero image
- Add `image: tatiHero` to the tati.la entry in the `caseStudies` array
- The existing conditional rendering logic already handles displaying the image vs placeholder
