
## Add Flamingo Image to TP Design System — Case Study Page + Home Card

Use the uploaded flamingo image in two locations: as a hero banner on the TP Design System case study page, and as the visual thumbnail for its card on the home page.

---

### 1. Save the Image

Copy `user-uploads://flamingo.jpeg` to `src/assets/flamingo.jpeg`

---

### 2. TP Design System Case Study Page

**File:** `src/pages/TPDesignSystemCase.tsx`

- Import the image: `import flamingoImage from "@/assets/flamingo.jpeg"`
- Add a full-width image section between the Hero and "The Vision" section
- Wrapped in a rounded container with `aspect-[21/9] object-cover rounded-2xl overflow-hidden`
- Contained within the standard `container mx-auto px-6` layout

---

### 3. Home Page Case Study Card

**File:** `src/components/CaseStudySection.tsx`

- Add an optional `image` property to the `CaseStudyData` interface
- Import the flamingo image and assign it to the TP Design System entry
- Update the card rendering: when `study.image` exists, render an `<img>` tag with `object-cover` instead of the current gradient placeholder with the large number overlay
- Other case studies without an image continue to show the existing placeholder
