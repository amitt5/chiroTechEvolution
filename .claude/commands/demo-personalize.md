# Demo Personalization Workflow

You are running the **demo personalization workflow** for ChiroTech Evolution.

The goal: take a real chiropractic practice's existing website and pull their logo, images, and color scheme into their demo site so they instantly recognize it as built for them.

## Step 1 — Ask the user for the practice details

Ask the user:
1. The **slug** of the demo to work on (e.g. `advanced-chiropractic`)
2. The **original website URL** for that practice

Use AskUserQuestion to collect both pieces of information.

Reference the demo order below so you can tell the user which demo # they're on and what's next:

| # | Slug | Practice Name | Location |
|---|------|---------------|----------|
| 1 | `advanced-chiropractic` | Advanced Chiropractic | Niles, MI |
| 2 | `backtalk-chiropractic` | Back Talk Chiropractic | Lexington, KY |
| 3 | `bayshore-chiropractic` | Bayshore Chiropractic | Oconto, WI |
| 4 | `beneski-chiropractic` | Beneski Chiropractic | Boston, MA |
| 5 | `bettendorf-chiropractic` | Bettendorf Chiropractic Wellness Center | Davenport, IA |
| 6 | `body-solutions` | Body Solutions | St. Charles, IL |
| 7 | `holladay-chiropractic` | Holladay Chiropractic | Salt Lake City, UT |
| 8 | `mitchell-chiropractic` | Mitchell Chiropractic & Acupuncture Center | Mitchell, SD |
| 9 | `village-chiropractic` | Village Chiropractic Clinic | Stanwood, WA |
| 10 | `zimmerman-chiropractic` | Zimmerman Chiropractic | Fort Saskatchewan, AB |

## Step 2 — Find the logo

Use WebFetch on the original site URL. Parse the HTML to find the logo image:
- Look for `<img>` inside `<header>`, `<nav>`, elements with class/id containing "logo"
- Look for `img[alt*="logo"]`, `img[src*="logo"]`
- Resolve relative URLs to absolute

Report to the user:
- The direct logo image URL
- Visual description of the logo colors (e.g. "deep navy blue and gold")
- Hex values of primary and secondary colors

**Ask the user** if they want to update the demo's color scheme to match the logo. They may say yes, no, or "just the logo."

## Step 3 — Find available images

Use WebFetch to scan the original site for usable images:
- Hero / banner images (large, above-the-fold)
- Doctor or team photos
- Office photos (interior or exterior)
- Any other prominent images

For each image found, describe:
- What it shows
- Where it would be used in the demo (hero background, doctor bio section, etc.)
- The direct image URL

**Ask the user** which images to include.

## Step 4 — Integrate the assets

Make the following code changes:

### `/content/demos/index.ts`
If not already present, add these optional fields to the `DemoContent` interface:
```typescript
sourceUrl?: string;
logo?: string;
accentColor?: string;
accentColorDark?: string;
heroImage?: string;
doctorImage?: string;
officeImages?: string[];
```

### `/content/demos/[slug].json`
Add the approved fields:
- `sourceUrl`: original site URL
- `logo`: logo image URL
- `accentColor` + `accentColorDark`: hex values (only if user approved color change)
- `heroImage`: hero image URL (if approved)
- `doctorImage`: doctor photo URL (if approved)
- `officeImages`: array of other approved image URLs

### `/next.config.ts`
Add the practice's domain to `images.remotePatterns`:
```ts
{ protocol: 'https', hostname: 'their-domain.com' }
```

### `/app/demo/[slug]/demo-client.tsx`
Update the component to use the new data fields:
- **Navbar**: render `<Image src={data.logo} alt={data.practiceName + " logo"} />` when `data.logo` is set, alongside or instead of the text name
- **Hero**: use `data.heroImage` as a background overlay or right-side visual (if set)
- **Doctor bio section**: render `<Image src={data.doctorImage} />` when set
- **Accent color**: if `data.accentColor` is set, apply it as an inline CSS custom property (`style={{ '--accent': data.accentColor }}`) on the root wrapper div, and update Tailwind classes that hardcode the teal color to use `var(--accent)` where feasible

## Step 5 — Verify

Tell the user to:
1. Run `npm run dev`
2. Visit `/demo/[slug]`
3. Confirm logo, images, and colors look correct

Offer to use Puppeteer to take a screenshot for visual verification if they'd like.
