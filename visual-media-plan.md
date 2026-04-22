# Tamreen — Visual Direction & Media Plan

---

## Design Direction Summary

**Mood:** Dark, premium, athletic, modern, locally grounded  
**Palette:** #0B0B1A (base) · #0A84FF (blue) · #FFB703 (gold) · #22C55E (green for Nutritionists)  
**Typography:** Cairo (Arabic) · Inter (English) — both loaded from Google Fonts  
**Visual language:** Glassmorphism cards, animated gradient orbs, grid lines, color-coded provider system

---

## Section-by-Section Visual Plan

---

### 1. HERO

**Current state:** Animated gradient orbs + grid lines background. Video plays behind a dark overlay at 18% opacity.

**Video asset — ALREADY EXISTS:**
```
../01 Instagram/01 Project 1/00 Tamreen/Videos/إدارة تدريبك صارت أسهل مع تمرين.mp4
```
This plays as a background video (muted, autoplay, looped). The dark overlay keeps text readable while the video adds motion and energy.

**What to produce next (if upgrading):**
- A dedicated hero reel: 30–45 seconds, landscape format, no text overlaid on video
- Shots: athletic training environments, coach with client, someone reviewing a nutrition plan, physiotherapy session
- Color grade: dark, moody, cinematic — matches #0B0B1A base

**Fallback:** If video doesn't load, the animated orb background is fully designed and works independently.

---

### 2. AUDIENCE TICKER BAR

**Current state:** Auto-scrolling text ticker with emoji + labels.

**Upgrade option:** Replace text labels with small branded icon chips or actual photography thumbnails of each provider type. Would require 3 small square images (180×180px) for Coach, Nutritionist, Physiotherapist.

---

### 3. PROBLEM SECTION

**Current state:** Two-column layout — pain points on one side, solution box on the other. Pure CSS design, no images needed.

**Optional visual upgrade:**  
Add a subtle background image or illustration behind the pain points column — e.g., a blurred WhatsApp-style chat screenshot (custom-made, not real data) to visually reinforce the "WhatsApp chaos" narrative.

---

### 4. WHAT IS TAMREEN

**Current state:** Two-column layout — phone mockup on one side, text + feature cards on the other.

**App screenshot — ALREADY EXISTS:**
```
../01 Instagram/Homepage 2.png
```
This is used as the phone screen content inside a styled frame.

**What to produce next:**
- A clean app UI mockup at 390×844px (iPhone 14 dimensions)
- Home screen showing provider categories and featured programs
- Dark theme matching brand colors

**If `Homepage 2.png` doesn't display as expected:** The phone frame has an `onerror` fallback that shows a styled placeholder. This is safe to ship — update the image path or replace the file when a proper app screenshot is ready.

---

### 5. STATS BAND

**Current state:** 4-column stat grid with large numbers. Pure CSS — no images needed.

---

### 6. PROVIDER CATEGORIES

**Current state:** 3 cards with emoji icons, color-coded top borders (blue/green/gold), benefit lists.

**Visual upgrade path:**
- Replace emoji icons with custom photography or illustrated icons per provider type
- Coach card: image of a trainer in a gym environment, dark-toned
- Nutritionist card: clean food/nutrition photography, muted tones
- Physiotherapist card: clinical/rehabilitation environment, professional

**Card header image option:**
Add a `200px` height image strip at the top of each card before the emoji. Would require:
- `coach-hero.jpg` — 600×200px, dark-toned gym/training shot
- `nutrition-hero.jpg` — 600×200px, clean food arrangement
- `physio-hero.jpg` — 600×200px, rehabilitation setting

---

### 7. USER BENEFITS

**Current state:** 6-card grid with large emoji icons and dark card backgrounds.

**No image production needed** — emoji icons work well here. If upgrading: replace emojis with a consistent icon set (Phosphor, Heroicons, or custom SVGs in brand blue).

---

### 8. HOW IT WORKS

**Current state:** Tabbed step indicators with numbered circles and connecting line. Pure CSS.

**Optional upgrade:** Add small illustrative icons per step. Or use a device mockup showing the relevant screen for each step.

---

### 9. APP PREVIEW / SCREENS ROW

**Current state:** 3 phone frames displayed in a staggered row.

**Assets currently used:**
```
Main screen:  ../01 Instagram/Homepage 2.png
Side screen:  ../01 Instagram/02 Project 2/For IG Ph2/All Coaches Page.png
Third frame:  Placeholder (styled "Provider Dashboard" box)
```

**What to produce for the third frame:**
- A clean dashboard screenshot or mockup: 390×844px
- Should show: client list, program stats, or a calendar/schedule view
- Dark theme, brand colors

**Full upgrade vision:**
When actual app screens are ready, replace all three placeholders with real app UI screenshots. The frame structure, sizing, and hover effects are already coded.

---

### 10. SOCIAL PROOF IMAGE STRIP

**Current state:** Auto-scrolling marquee using existing Instagram grid post images.

**Assets used — ALL ALREADY EXIST:**
```
../01 Instagram/01 Project 1/00 Tamreen/Tamreen Grid Posts/12 Why Tamreen.jpg
../01 Instagram/01 Project 1/00 Tamreen/Tamreen Grid Posts/04 نظام ذكي = كوتش مرتاح.jpg
../01 Instagram/01 Project 1/00 Tamreen/Tamreen Grid Posts/07 مو كل تطبيق يفهم شغل الكوتش.jpg
../01 Instagram/01 Project 1/00 Tamreen/Tamreen Grid Posts/06 التدريب صار أسهل.jpg
../01 Instagram/01 Project 1/00 Tamreen/Tamreen Grid Posts/09 خل الإدارة بسيطة وركز على التمرين.jpg
../01 Instagram/01 Project 1/00 Tamreen/Tamreen Grid Posts/10 The Right Tech Makes Life Easier.jpg
../01 Instagram/01 Project 1/00 Tamreen/Tamreen Grid Posts/11 شنو يصير لما يكون عندك نظام.jpg
../01 Instagram/01 Project 1/00 Tamreen/Tamreen Grid Posts/03 Tamreen Static Post.jpg
```

These images reinforce brand identity and show that Tamreen already has a real content presence. The strip is duplicated for a seamless infinite scroll.

**Note:** Images are displayed at 180×180px in the strip. Square-format Instagram posts work perfectly here.

---

### 11. TRUST SECTION

**Current state:** 6-card grid with emoji icons. Pure CSS — no images needed.

**Optional upgrade:** Add a subtle Kuwaiti flag or legal document visual element to reinforce the "built in Kuwait under Kuwaiti law" trust signal.

---

### 12. MID CTA & FINAL CTA

**Current state:** Gradient backgrounds (blue tint / gold tint), large text, two CTA buttons. No images.

**Optional upgrade for final CTA:**
- Add a full-width background photo: dark, athletic, aspirational
- A Kuwaiti skyline at night, or a fitness environment, with a dark overlay
- Must not distract from the headline and buttons

---

### 13. FOOTER

**Current state:** Logo + links + bilingual badges. Uses:
```
../Tamreen Logos/PNG/Tamreen Rectangle.png
```

---

## Video Production Recommendations

### Priority 1 — Hero Background Video (URGENT)
The existing video (`إدارة تدريبك صارت أسهل مع تمرين.mp4`) works and plays now. For a production upgrade:

- **Format:** MP4, H.264, landscape 1920×1080 minimum
- **Duration:** 45–90 seconds (loops seamlessly)
- **Content:** Training session, nutrition consultation, physiotherapy session — quick cuts, cinematic
- **Color grade:** Dark, high contrast, moody — no bright white backgrounds
- **Text:** None in the video — page copy overlays it
- **Audio:** Muted on autoplay (browser requirement), but include audio for direct video views

### Priority 2 — Provider Category Videos (FUTURE)
One short clip per provider type, displayed inside each provider card on hover or click:
- Coach clip: 15–20 seconds, training environment
- Nutritionist clip: 15–20 seconds, food/consultation setting
- Physiotherapist clip: 15–20 seconds, rehabilitation setting

### Priority 3 — Platform Walkthrough Video (FUTURE)
A 60–90 second screen-recording-style walkthrough of the platform UI:
- Shows how a provider sets up their profile
- Shows how a user discovers and subscribes
- Can be used in the "How It Works" section
- Should use the actual app UI when available

---

## Image Production Recommendations

| Asset | Size | Use | Status |
|-------|------|-----|--------|
| App Home Screen | 390×844px | What Is Tamreen section | Placeholder exists (`Homepage 2.png`) |
| All Coaches Page | 390×844px | App Preview section | Exists (`All Coaches Page.png`) |
| Provider Dashboard | 390×844px | App Preview third frame | **Needs production** |
| Coach Card Image | 600×200px | Provider card header | **Optional upgrade** |
| Nutritionist Card Image | 600×200px | Provider card header | **Optional upgrade** |
| Physio Card Image | 600×200px | Provider card header | **Optional upgrade** |
| Hero Reel | 1920×1080px video | Hero background | Exists (basic), upgrade recommended |
| Final CTA Background | 1920×600px | Final CTA section | **Optional upgrade** |

---

## Existing Assets Reused in This Page

| Asset | Location | Where Used |
|-------|----------|------------|
| Tamreen Rectangle Logo | `../Tamreen Logos/PNG/Tamreen Rectangle.png` | Nav + Footer |
| Promotional Video | `../01 Instagram/.../إدارة تدريبك صارت أسهل مع تمرين.mp4` | Hero background |
| Homepage Screenshot | `../01 Instagram/Homepage 2.png` | What Is Tamreen + App Preview |
| All Coaches Page | `../01 Instagram/02 Project 2/For IG Ph2/All Coaches Page.png` | App Preview |
| 8× Grid Post Images | `../01 Instagram/.../Tamreen Grid Posts/*.jpg` | Social proof strip |

All paths are relative to the landing page file location. They work when the page is opened locally from the `Tamreen Landing Page` folder.

---

## Logo Usage Notes

**For dark backgrounds (all sections):** Use `Tamreen Rectangle.png` — the horizontal white-text version works on dark.

**For white backgrounds (if added later):** Use `Tamreen Transparant Black.png` or `Tamreen Transparant All Black.png`.

**For icon/favicon use:** Use `Symbol White.png` or `Circle Tamreen.png` — both are clean standalone marks.

---

## Brand Color Application Map

| Color | Hex | Usage |
|-------|-----|-------|
| Background | #0B0B1A | Page base, problem section right column |
| Card | #12122A | Most cards and elevated surfaces |
| Card Deep | #181836 | Solution box, stat backgrounds |
| Blue | #0A84FF | Primary CTAs, coach accent, links, stats |
| Gold | #FFB703 | User CTA, physiotherapist accent, "join" label |
| Green | #22C55E | Nutritionist accent |
| White | #FFFFFF | Headlines |
| Grey 1 | #C8C8DC | Body copy |
| Grey 2 | #8888A8 | Labels, meta text, muted copy |
| Border | #2A2A4A | Card borders, dividers |

---

## Motion & Animation Notes

**Currently implemented (pure CSS):**
- Floating orbs in hero: 10s ease-in-out infinite, 3 orbs at staggered delays
- Pulsing dot in hero badge: 2s infinite
- Ticker bar scrolling: 24s linear infinite
- Social proof strip scrolling: 32s linear infinite
- Scroll reveal: IntersectionObserver, translateY(20px) → translateY(0), 0.55s ease
- Provider card hover: translateY(-6px) with box-shadow
- FAQ accordion: display toggle on click

**Future motion upgrades:**
- Staggered counter animation on stats (count up from 0 when scrolled into view)
- Provider card hover video preview
- Smooth page-level language transition (crossfade instead of instant swap)
- Parallax on hero orbs

---

## RTL/LTR Design Considerations

The page switches between RTL (Arabic) and LTR (English) by toggling `dir` and `lang` on the `<html>` element. Key CSS decisions made:

- All directional spacing uses `margin-inline` / `padding-inline` (logical properties) where possible
- The `.solution-tag` badge repositions itself using `right`/`left` swap based on `data-lang`
- Arrow icons use `.arrow-icon` class with `scaleX(-1)` in RTL
- The steps connector line inherits direction from the document
- Ticker and strip animations run left-to-right in both directions (intentional — RTL reversal of marquees looks wrong on screen)
- Font rendering: Cairo handles both Arabic and Latin gracefully, so there's no font-family mismatch during transition
