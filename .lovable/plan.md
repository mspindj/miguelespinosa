

## Fix tati-hero.png Asset

The `tati-hero.png` file was deleted in a previous attempt and never successfully replaced, causing the build error. The image is now available as a fresh upload.

---

### Fix

1. **Copy** `user-uploads://tatila_image.png` to `src/assets/tati-hero.png`

No code changes needed -- `TatiCase.tsx` and `CaseStudySection.tsx` already reference this file correctly.

