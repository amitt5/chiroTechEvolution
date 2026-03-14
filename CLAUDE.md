# CLAUDE.md — ChiroTech Evolution

## Project Overview

ChiroTech Evolution is a web design and digital marketing company that builds modern, visually stunning websites for chiropractors. This repo is the **company's own landing page** — the primary sales tool for outreach to chiropractic practices across the US.

**Core pitch:** Every competing provider (iMatrix, ChiroMatrix, PerfectPatients, etc.) builds outdated, templated websites that look 20 years old. ChiroTech Evolution builds websites that look premium, modern, and convert visitors into patients.

**This landing page is the proof of concept.** It must be jaw-dropping. It IS the sales pitch.

---

## Tech Stack

- **Framework:** Next.js 14+ with App Router (TypeScript)
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Deployment:** Vercel
- **Package manager:** npm

> Do NOT use the Pages Router. Always use the App Router (`app/` directory).
> Do NOT use inline styles. Tailwind utility classes only.
> Do NOT add a backend, database, or API routes — this is a static landing page.
> Contact form: use a mailto link or embed a Calendly link as the CTA.

---

## Folder Structure

```
/app
  /page.tsx          ← Single landing page (all sections)
  /layout.tsx
  /globals.css

/components
  /ui/               ← shadcn/ui primitives (auto-generated)
  /sections/         ← Each landing page section as its own component
    Hero.tsx
    Problem.tsx
    Services.tsx
    Portfolio.tsx
    Testimonial.tsx
    CTA.tsx
  /shared/
    Navbar.tsx
    Footer.tsx
    AnimatedText.tsx
    ScrollReveal.tsx

/lib
  utils.ts           ← cn() helper and shared utils

/public
  /images/
  /videos/
```

---

## Landing Page Sections (in order)

### 1. Navbar
- Logo (text or simple SVG mark)
- Links: Services, Portfolio, About, Contact
- CTA button: "Get a Free Audit"
- Sticky with backdrop blur on scroll

### 2. Hero
- Full viewport height
- Large bold headline — e.g. *"Your Patients Are Judging Your Website."*
- Subheadline that calls out the problem directly
- Two CTAs: primary "Get a Free Website Audit", secondary "See Our Work"
- Animated background — subtle gradient, particles, or abstract motion graphic
- Do NOT use a stock photo of a spine or doctor

### 3. Problem Section ("The Ugly Truth")
- Visual comparison: typical iMatrix/template site vs. a modern site
- Bold provocative copy — e.g. *"Most chiropractic websites look like they were built in 2003."*
- Side-by-side mockup or before/after slider
- Scroll-triggered entrance animations on each element

### 4. Services
- 4–6 service cards with icons and benefit-focused copy
- Services: Custom Website Design, Mobile Optimization, Appointment Booking System, Email Services, CMS / Content Management, SEO-Ready Structure
- Cards animate in staggered on scroll
- Each card: icon, title, 2-line description, subtle hover effect

### 5. Portfolio / Case Study Preview
- Feature the one existing client prominently
- Browser or device mockup showing their actual site
- Key highlights: what was built, features, results if available
- CTA: "See More Work"

### 6. Why ChiroTech Evolution
- 3–4 bold differentiators vs. big agencies:
  - No templates — everything custom
  - Personal service, direct access to the developer
  - Modern tech — fast, secure, mobile-first
  - Transparent pricing, no bloated packages
- Icons + short punchy text, not paragraphs

### 7. Testimonial
- Existing client quote
- Name, practice name, location
- Large-text pullquote design

### 8. CTA Section
- Full-width, high contrast
- Headline: *"Ready to stop losing patients to a better-looking website?"*
- Single CTA: "Get Your Free Audit"
- Button links to mailto or Calendly

### 9. Footer
- Logo, short tagline
- Nav links
- Contact info
- Copyright

---

## Design Direction

### This site must look like it belongs on awwwards.com — not on a chiropractic directory from 2009.

### Visual Style
- Dark hero transitioning to lighter sections — drama and contrast
- Large oversized typography — headings are a visual feature
- Smooth scroll animations on every section entry
- Gradient accents: teal/cyan to deep navy
- Glass morphism or frosted card effects on service cards
- Subtle noise/grain texture on dark sections for depth
- High contrast CTAs — buttons that pop

### Colors
- Dark background: `#080C14`
- Primary accent: `#00C9B1` (teal)
- Secondary accent: `#6366F1` (indigo/purple)
- Light text: `#F8FAFC`
- Muted text: `#94A3B8`
- Light section background: `#F1F5F9`

### Typography
- Font: Inter, Geist, or Plus Jakarta Sans
- Weights: ExtraBold for headings, Regular for body
- H1 hero: 64px+ (clamp for responsive)
- Body minimum: 16px

### Animation Guidelines (Framer Motion)
- Hero text: fade up + stagger on load
- Section entries: `whileInView` with `opacity: 0→1` and `y: 40→0`, `once: true`
- Cards: staggered children with 0.1s delay per item
- Navbar: shrinks/blurs on scroll
- Buttons: `scale: 1.03` on hover
- Use `viewport={{ once: true, margin: "-100px" }}` on all scroll triggers
- Smooth and intentional only — no bouncy or gimmicky effects

### Do NOT
- Use stock photos of chiropractors or spines as backgrounds
- Use flat, colorless, or pastel designs
- Use more than 2 font families
- Use animations that block content or hurt performance
- Make anything look like a Squarespace template
- Use `<img>` tags — always use Next.js `<Image />`

---

## Copy Tone

- Direct and provocative — this is outreach marketing
- Speak to practice owners, not tech people
- Lead with the problem, follow with the solution
- Show don't tell — claims backed by visuals

Example headlines:
- *"Your Patients Google You Before They Call You."*
- *"Still Paying $200/Month for a Website From 2008?"*
- *"Built for Chiropractors. Designed to Convert."*

---

## Component Conventions

- PascalCase filenames: `HeroSection.tsx`, `ServiceCard.tsx`
- One component per file
- Props interfaces defined above each component
- `"use client"` only when using hooks, animations, or browser events
- Use `cn()` from `@/lib/utils` for conditional Tailwind classes
- No `any` types — define proper TypeScript interfaces

---

## What Claude Should NOT Do

- Do not install unnecessary packages
- Do not create any backend, API routes, or database connection
- Do not use the Pages Router
- Do not write lorem ipsum — write real, punchy, chiropractic-relevant placeholder copy
- Do not produce a generic, flat, or template-looking design
- Do not animate everything — only scroll reveals and intentional micro-interactions
- Do not use `<img>` — always Next.js `<Image />`
- Do not build more than one page — single landing page only for now

## Animation & Visual Reference

Inspiration site: https://www.showcasemd.io/

Specific effects to replicate:
- Hero: dark background with animated glowing blobs/orbs (use Aceternity UI Spotlight or Background Beams)
- Hero text: staggered word-by-word fade-up on load (Framer Motion stagger)
- Section scroll transitions: sections slide/fade in as you scroll (Framer Motion whileInView)
- Service cards: glowing border on hover (Aceternity UI CardHoverEffect)
- Stats/numbers: count-up animation on scroll into view (Magic UI NumberTicker)

Primary animation libraries:
- framer-motion
- Aceternity UI components (copy from ui.aceternity.com)
- Magic UI components (copy from magicui.design)