# Tamreen Landing Page v2 — Strategy & Implementation Notes

This is the premium bilingual version. Replaces the English-only v1.

---

## What Changed from v1

- Arabic Kuwaiti is now the default language (RTL)
- Language toggle button in the nav switches to English (LTR)
- Visual-first design: animated hero with real video background, scrolling image strip, app screenshots, ticker bar
- Cairo (Arabic) + Inter (English) fonts loaded from Google Fonts
- Existing Tamreen assets (video, app screenshots, grid post images) wired directly into the page
- FAQ is now an interactive accordion
- How It Works uses a tab system (Providers / Users)
- Social proof image strip uses real brand images from the Instagram folder

---

## Bilingual System

### How it works

The `<html>` element carries two attributes that control everything:
```html
<html lang="ar" dir="rtl" data-lang="ar">
```

Two CSS rules do all the switching:
```css
[data-lang="ar"] .en { display: none !important; }
[data-lang="en"] .ar { display: none !important; }
```

Every piece of text has both `.ar` and `.en` spans. On toggle, JavaScript flips `lang`, `dir`, and `data-lang` — CSS takes care of the rest instantly.

### Language preference persistence
The chosen language is stored in `localStorage` under `tamreen-lang` and restored on page load. A user who switches to English will see English on their next visit.

### What switches automatically
- All text content (headlines, body, buttons, labels, nav links, footer)
- Page `<title>` tag
- `dir` attribute (RTL ↔ LTR — flips the entire layout)
- `lang` attribute (affects font rendering, hyphenation, browser behavior)
- Language toggle button active state

### What does NOT switch
- Colors, spacing, card structure — these are language-agnostic
- Animation directions (ticker, strip) — run left-to-right in both languages intentionally
- Logo and images — same in both languages

---

## Conversion Architecture

### Section sequence rationale

```
Hero           → Hook both audiences simultaneously
Ticker         → Instant category signal (Coaches · Nutritionists · Physios · Users)
Problem        → Agitate the status quo before showing the solution
What Is        → Explain the platform clearly with a visual
Stats          → Quick credibility punch (3 categories, 1 platform, 2 languages)
Providers      → Deep value for each professional type
Users          → Deep value for end users
How It Works   → Remove uncertainty about the process
App Preview    → Make the platform feel real and tangible
Image Strip    → Brand presence proof — "they already exist and produce content"
Trust          → De-risk the decision
Mid CTA        → Conversion checkpoint at peak conviction
FAQ            → Pre-empt remaining doubts
Final CTA      → Strong close with identity-based urgency
Footer         → Navigation fallback + contact
```

### CTA placement count
- Nav: always visible, "سجّل الحين"
- Hero: two CTAs (Join / I'm a Provider)
- Each provider card: individual CTA per category
- Mid-page section: two CTAs (Provider / User tracks)
- Final section: two CTAs (Provider / User tracks)

Five distinct CTA moments across the page. Never more than 2–3 sections without a conversion opportunity.

### Hook strategy

**Hero hook:** Names all three provider types in the headline — immediate relevance signal for any professional. Users understand they're looking at a professional platform, not a generic app.

**Problem hook (WhatsApp framing):** Naming "واتساب" specifically is intentional. It's the exact tool the target audience currently uses — naming it signals market understanding and creates a clear contrast.

**Urgency hook:** "Early access" framing is honest — early providers genuinely do get priority placement. No false scarcity. The language is confident without being manipulative.

**Identity hook in final CTA:** "لا تكون آخر واحد في فئتك" — positions inaction as a loss relative to peers, not just a missed opportunity. This is a strong but legitimate motivator.

---

## Kuwaiti Arabic Copy Notes

The Arabic copy uses Kuwaiti dialect deliberately, not Modern Standard Arabic (MSA). Key dialect markers:

| Kuwaiti | MSA Equivalent | Why |
|---------|---------------|-----|
| الحين | الآن | Natural, conversational |
| ليش | لماذا | More direct and catchier |
| شو | ماذا | Casual, approachable |
| شلون | كيف | Authentic to market |
| بس | فقط | Conversational rhythm |
| تدوّر | تبحث | How Kuwaitis actually say "search for" |
| يصير | يحدث | Natural Kuwaiti phrasing |

The copy is written to feel like how a smart, respected Kuwaiti professional would talk — not like a translated corporate document.

---

## File Structure

```
Tamreen Landing Page/
├── index.html              ← Main landing page (Arabic default + English toggle)
├── copy.md                 ← v1 English copy reference
├── notes.md                ← v1 English-only notes (archived)
├── notes-v2.md             ← This file — v2 bilingual notes
└── visual-media-plan.md    ← Visual direction + media asset plan
```

---

## Before Going Live — Checklist

### Critical
- [ ] Replace `mailto:hello@tamreen.app` with real form or email
- [ ] Verify all image paths load correctly in a browser (not just local file view)
- [ ] Check video plays on mobile (iOS requires `playsinline` — already added)
- [ ] Test language toggle on mobile
- [ ] Add favicon (use `../Tamreen Logos/PNG/Symbol White.png` scaled to 32×32)

### Important
- [ ] Add Open Graph meta tags for social sharing (see template below)
- [ ] Add Google Analytics or other tracking before launch
- [ ] Link Privacy Policy and Terms & Conditions (documents exist in `TandC/Updated/`)
- [ ] Test RTL layout on actual mobile devices (not just browser resize)

### Optional Upgrades
- [ ] Produce dedicated hero video (see visual-media-plan.md)
- [ ] Add real app dashboard screenshot for third frame in App Preview
- [ ] Add counter animation to stats section
- [ ] Connect waitlist CTAs to Typeform, Tally, or similar

### Open Graph Template
```html
<meta property="og:title" content="تمرين — منصة اللياقة والصحة في الكويت" />
<meta property="og:description" content="تمرين تربطك بأفضل الكوتشات والمغذيين ومعالجي العلاج الطبيعي في الكويت." />
<meta property="og:image" content="[URL to 1200×630 share image]" />
<meta property="og:url" content="https://tamreen.app" />
<meta property="og:locale" content="ar_KW" />
<meta property="og:locale:alternate" content="en_US" />
```

---

## Performance Notes

The page is designed to be fast out of the box:
- No JavaScript libraries or frameworks
- Google Fonts loaded with `preconnect` hints
- Images use `loading="lazy"` in the strip
- Animations use CSS only (GPU-composited where possible)
- Video uses `autoplay muted loop playsinline` — browser-safe attributes

For production hosting: serve the video and images from a CDN, compress images to WebP, and minify the HTML/CSS.

---

## Mobile Behavior

- Nav links hidden on mobile (keep logo + language toggle + CTA)
- `btn-ghost` CTA hidden on mobile nav (space constraint)
- Phone mockup hidden on mobile in "What Is Tamreen" section
- Provider cards stack to single column below 900px
- Benefits and Trust grids stack to single column below 768px
- Step indicators go to 2-column grid below 768px
- Side phone frames hidden in App Preview on small screens
- All text sizes use `clamp()` for responsive scaling without breakpoints
