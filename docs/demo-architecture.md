# Demo Site Architecture

## Overview

Each demo is a fully rendered chiropractic website at `/demo/[slug]`, generated from a JSON data file containing scraped content from the target practice's existing site.

---

## Directory Structure

```
/content/demos/
├── index.ts                        ← Registry: imports + exports all demos
├── amsterdam.json
├── advanced-chiropractic.json
├── backtalk-chiropractic.json
├── beneski-chiropractic.json
├── body-solutions.json
└── zimmerman-chiropractic.json

/app/demo/
├── page.tsx                        ← Redirects /demo → /demo/amsterdam
└── [slug]/
    ├── page.tsx                    ← Route handler + static param generation
    └── demo-client.tsx             ← Shared 900-line template component
```

---

## Data Flow

```
scraped text → JSON file (/content/demos/[slug].json)
    → imported & registered in /content/demos/index.ts
    → generateStaticParams() picks up all keys automatically
    → /app/demo/[slug]/page.tsx validates slug → 404 if not found
    → passes DemoContent object to DemoClient
    → demo-client.tsx renders full page using content fields
```

---

## Adding a New Demo (2 Steps)

1. **Create the JSON file** at `/content/demos/[slug].json` following the `DemoContent` interface defined in `index.ts`

2. **Register it** in `/content/demos/index.ts`:
   ```ts
   import newPractice from './new-practice.json';

   export const demos: Record<string, DemoContent> = {
     // ... existing entries
     'new-practice': newPractice as DemoContent,
   };
   ```

That's it. The route `/demo/new-practice` is auto-generated via `generateStaticParams()`.

---

## JSON Structure (`DemoContent` interface)

Key fields in each JSON file:

| Field | Type | Description |
|-------|------|-------------|
| `meta` | object | Practice name, phone, address, email, hours, whatsapp |
| `doctorImage` | string | Path to doctor image in `/public/` |
| `badge` | string | Small badge text under hero headline |
| `h1` | string[] | Hero headline words (animated stagger) |
| `heroSub` | string | Hero subheadline |
| `bookBtn` | string | Primary CTA button label |
| `callBtn` | string | Secondary CTA button label |
| `stats` | array | `{ value, label }` stat cards |
| `services` | array | `{ title, desc }` service cards |
| `phases` | array | `{ step, title, desc }` three-phase cards |
| `firstVisitSteps` | array | `{ step, title, desc }` step cards |
| `pricingRows` | array | `{ treatment, price }` pricing table rows |
| `showPricing` | boolean? | Defaults to true; set false to hide pricing section |
| `faqs` | array | `{ q, a }` FAQ accordion items |
| `reviews` | array | `{ name, text, rating }` testimonials |
| `heroReviews` | array | `{ name, condition, text, rating }` hero social proof |
| `conditionsClick` | array | Clickable condition tags (opens modal) |
| `conditionDetails` | object | Slug → `{ title, what, how }` for condition modal |
| `aboutTitle` | string | About section headline |
| `aboutBody` | string | About section body text |
| `doctorName` | string | Doctor's name |
| `doctorTitle` | string | Doctor's credentials/title |

---

## What's Hardcoded in `demo-client.tsx`

These items are **not** data-driven from JSON — they're shared across all demos:

- **Specialties list** — 12 conditions in English/Dutch (bilingual for Amsterdam demo)
- **Condition detail text** — `conditionDetails` object with EN/NL descriptions per condition
- **SVG icons** — 4 inline SVGs for the services section
- **Booking calendar** — time slots, calendar helpers, form logic

> **Note:** This works fine for the current demos. If future practices need different specialties or condition language, move these fields into the JSON.

---

## Scalability Notes

| Scale | Status |
|-------|--------|
| 1–20 demos | No changes needed — add JSON + 2 lines in index.ts |
| 50+ demos | Consider auto-importing all JSON files from `/content/demos/` to eliminate manual index.ts step |
| Custom specialties per practice | Move specialties/conditionDetails into each JSON file |
| Visual variants | Would require multiple template components or a `template` field in JSON |

---

## Current Demo Sites

| Slug | Practice | Location |
|------|----------|----------|
| `amsterdam` | Health4Life | Amsterdam, Netherlands |
| `advanced-chiropractic` | Advanced Chiropractic | US |
| `backtalk-chiropractic` | Backtalk Chiropractic | US |
| `beneski-chiropractic` | Beneski Chiropractic | US |
| `body-solutions` | Body Solutions | US |
| `zimmerman-chiropractic` | Zimmerman Chiropractic | Fort Saskatchewan, AB, Canada |

Default route: `/demo` → `/demo/amsterdam`
