

## Fix tati-hero.png Asset

The previous copy of the tati.la screenshot failed, leaving a missing or corrupt file at `src/assets/tati-hero.png`, which causes the build error.

---

### Fix

1. **Delete** the broken `src/assets/tati-hero.png`
2. **Copy** `user-uploads://Screenshot_2026-02-16_at_3.02.56 PM-2.png` to `src/assets/tati-hero.png`

No code changes needed -- `TatiCase.tsx` and `CaseStudySection.tsx` already reference this file correctly.

