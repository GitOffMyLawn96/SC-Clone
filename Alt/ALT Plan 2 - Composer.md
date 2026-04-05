Perfect. I have everything I need. Here is the full action plan.

---

# Starcopter Premium Website — Full Action Plan

## What We're Building

A cinematic, B2B-grade marketing site for **Starcopter GmbH** and the **HIGHDRA** hexacopter. The site must feel like what DJI Enterprise, Boston Dynamics, or Rolls-Royce would ship — not a WordPress brochure. The drone is the hero. Everything serves the product.

---

## Tech Stack Decision

### Core Framework: **Next.js 15 (App Router)**
- Server components + streaming for sub-second TTFB
- Static generation for all marketing pages (near-zero server load)
- Built-in image optimization (WebP/AVIF auto-conversion)
- Edge-ready for global CDN deployment
- API routes for the contact form and future integrations
- TypeScript throughout — no exceptions

### 3D Engine: **Three.js via React Three Fiber + Drei + Postprocessing**
| Package | Purpose |
|---|---|
| `@react-three/fiber` | Declarative Three.js inside React |
| `@react-three/drei` | Environment maps, HDRI, orbit controls, shadows, text3D |
| `@react-three/postprocessing` | Bloom, depth of field, chromatic aberration, film grain, vignette |
| `three-stdlib` | Loaders, helpers |
| `leva` (dev only) | Live GUI for tweaking lighting/materials |

The HIGHDRA 3D model will be loaded as a **GLB** (compressed with Draco). PBR materials with metalness/roughness maps. The scene will run with real-time **environment-based IBL lighting** (HDRI sky).

### Animation: **GSAP + ScrollTrigger + Framer Motion**
- **GSAP ScrollTrigger** — scrub the 3D drone rotation, part reveals, spec counters tied to scroll position
- **Framer Motion** — page transitions, staggered text reveals, hover states
- These two do not conflict and complement each other perfectly

### Styling: **Tailwind CSS v4 + CSS custom properties**
- Design token system (colors, spacing, typography) in `globals.css`
- No CSS-in-JS overhead
- Custom Tailwind plugin for the brand palette (midnight black, arctic white, electric blue, gold)

### Performance Strategy
- 3D canvas is **lazy-loaded** behind an `IntersectionObserver` — only renders when in viewport
- Drone model: Draco-compressed GLB, target < 4 MB
- Suspense + skeleton loader during model download
- `@vercel/speed-insights` + `@vercel/analytics` baked in

### Hosting: **Vercel**
- Zero-config Next.js deployment
- Edge network for global sub-50ms static delivery
- Automatic preview URLs per branch

---

## Brand System

| Token | Value |
|---|---|
| `--color-black` | `#0A0A0A` |
| `--color-white` | `#F5F5F0` |
| `--color-blue` | `#1A6BFF` (electric, not corporate) |
| `--color-gold` | `#C8973A` |
| `--font-heading` | Oswald (Google Fonts, preloaded) |
| `--font-body` | Inter or DM Sans (clean, legible) |

---

## Site Architecture

```
starcopter.com/
├── /                     ← Hero + HIGHDRA teaser + value props
├── /highdra              ← Full product deep-dive with 3D explorer
├── /business-model       ← Pay-per-use, ROI calculator
├── /applications         ← LiDAR, thermal, RGB, spectral use cases
├── /about                ← Company, team, Made in Germany
├── /contact              ← Form + map
└── /[future]             ← /news, /partners, /careers (scaffolded, not built)
```

Every page is a Next.js `page.tsx` under `app/`. Layout-level nav and footer are shared. The 3D canvas is a client component island — the rest of every page is server-rendered HTML.

---

## Page-by-Page Feature Spec

### 1. Home (`/`)
- **Full-viewport hero**: Black background. HIGHDRA 3D model centered. Dramatic rim lighting. Subtle auto-rotation. Mouse parallax — moving your cursor tilts the drone slightly. Gold particle dust floating.
- **Scroll: "The Machine" sequence**: ScrollTrigger scrubs the drone 360° as you scroll. Each arm lights up with a label. Depth of field pulls focus to each highlighted part.
- **Value pillars strip**: 4 animated counters — 35 min / 10 kg / 2000 cycles / C3 certified. Numbers count up on scroll-in.
- **"Pay only for what you fly" teaser**: Animated cost comparison card. CTA → `/business-model`
- **Applications mosaic**: 4 use cases with hover video loops (LiDAR scan, thermal overlay, RGB orthophoto, spectral analysis).
- **CTA banner**: Full bleed blue-to-black gradient. "Ready to fly?" — contact form trigger.

### 2. HIGHDRA Product Page (`/highdra`)
- **3D Explorer**: Persistent canvas in the right half of the screen. Left side scrolls through specs. ScrollTrigger rotates/zooms/explodes the drone as you read.
- **"Exploded view" moment**: Drone parts fly apart to show modular architecture, then snap back together.
- **Specs table**: Animated row reveals. Comparison column vs. generic competition (anonymized).
- **Battery story section**: Charge cycle timeline. 2000 cycles vs. competition 400 cycles — animated bar race.
- **Payload carousel**: Click to swap payloads on the 3D model in real time (LiDAR module, RGB camera, thermal sensor — separate GLB attachments).
- **FAQ accordion**: Smooth height animations.

### 3. Business Model (`/business-model`)
- **ROI Calculator**: Interactive slider — "How many flight hours per month?" → live calculation of cost vs. buying + maintenance + storage + depreciation. Line chart using **Recharts** or hand-rolled SVG animation.
- **4-step onboarding flow**: Animated numbered steps with icon reveals.
- **"No..." list**: The 4 "NO" value props (NO DOWNTIME, NO INVESTMENT, etc.) — each animates in as a bold statement.

### 4. Applications (`/applications`)
- Grid of use cases. Click one → modal-style full bleed expansion with video/imagery, use case description, relevant sensor type.
- Industries served: Construction, Agriculture, Infrastructure, Energy, Public Safety.

### 5. Contact (`/contact`)
- Minimal, high-trust form. Name, Company, Email, Project type (select), Message.
- Server action form submission (Next.js 15 server actions → email via Resend or Nodemailer).
- Map embed (Braunschweig HQ).

---

## 3D Rendering Plan (The Drone)

### Model Sourcing Options (in order of preference)
1. **Client provides original CAD/STEP files** → convert to GLB via Blender with PBR materials baked. Best quality.
2. **Photogrammetry session** → 100+ photos of the physical drone → Meshroom/RealityCapture → Blender cleanup → GLB.
3. **Commission a 3D artist** (Fiverr/CGTrader) to model from product photos. Budget ~€300–800.

### Material Setup
- Carbon fiber arms: dark anisotropic carbon weave texture
- Aluminum body: brushed metal PBR (metalness 0.95, roughness 0.15)
- Motor housings: satin black plastic
- LED nav lights: emissive material for glow effect

### Lighting Presets (user-toggleable on `/highdra`)
| Preset | Mood |
|---|---|
| **Studio** | Clean white infinite space, soft key + rim |
| **Golden Hour** | Warm HDRI, long shadows, cinematic |
| **Night Ops** | Dark, cool blue fill, dramatic underlighting |
| **Industrial** | Overcast industrial HDRI, neutral |

### Post-Processing Stack
```
Bloom → DepthOfField → ChromaticAberration → Vignette → Noise (film grain)
```
All tunable. Bloom makes the nav lights glow. DoF focuses the hero shot.

---

## Animation System

### Scroll-Driven Animations (GSAP ScrollTrigger)
- Drone rotation: `0° → 720°` over the first 200vh of homepage
- Text reveals: `y: 40 → 0`, `opacity: 0 → 1`, stagger 0.1s
- Counter animations: `0 → target` with ease-out

### Micro-interactions (Framer Motion)
- Nav link hover: gold underline slides in from left
- Button hover: scale 1.03, background shimmer
- Card hover: subtle 3D tilt (CSS perspective transform)
- Page transition: cross-fade + slight upward drift

### Loader
- Full-screen black with gold Starcopter wordmark
- Progress bar as model downloads
- Fade out to reveal hero

---

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥ 95 |
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS | < 0.05 |
| Initial JS bundle | < 150 KB gzipped (excl. 3D) |
| 3D model download | < 4 MB (Draco compressed) |
| Time to Interactive | < 3.5s on 4G |

---

## Implementation Phases

### Phase 0 — Foundation (Week 1)
- [ ] Init Next.js 15 repo, TypeScript, ESLint, Prettier
- [ ] Install + configure Tailwind v4
- [ ] Install R3F, Drei, postprocessing, GSAP, Framer Motion
- [ ] Set up design tokens, Oswald font preload
- [ ] Shared Layout: Navbar (transparent → solid on scroll), Footer
- [ ] Deploy skeleton to Vercel, connect domain

### Phase 1 — 3D Core (Week 1–2)
- [ ] Acquire/source HIGHDRA GLB model
- [ ] Build `<DroneCanvas />` client component
- [ ] Implement PBR materials + 4 lighting presets
- [ ] Add postprocessing pipeline
- [ ] Mouse parallax interaction
- [ ] Model loading suspense + progress indicator

### Phase 2 — Homepage (Week 2–3)
- [ ] Hero section with live 3D + copy
- [ ] ScrollTrigger drone rotation sequence
- [ ] Animated spec counters
- [ ] Applications mosaic with hover effects
- [ ] CTA section

### Phase 3 — HIGHDRA Product Page (Week 3–4)
- [ ] Split-screen scroll layout
- [ ] Exploded view animation
- [ ] Payload swap interaction (LiDAR / RGB / Thermal)
- [ ] Specs table + battery comparison
- [ ] FAQ accordion

### Phase 4 — Business Model + Contact (Week 4–5)
- [ ] ROI calculator with live chart
- [ ] Onboarding steps animation
- [ ] Contact form with server action + email delivery
- [ ] Applications page grid + modal

### Phase 5 — Polish + Launch (Week 5–6)
- [ ] Page transition system
- [ ] Full mobile responsive pass
- [ ] Lighthouse audit + performance fixes
- [ ] Accessibility audit (WCAG AA minimum — B2B clients will have compliance requirements)
- [ ] Cookie consent (required, German company)
- [ ] Privacy policy, Imprint, AGB pages
- [ ] Final QA across Chrome, Safari, Firefox, Edge

---

## File/Folder Structure

```
src/
├── app/
│   ├── layout.tsx              ← Root layout, fonts, metadata
│   ├── page.tsx                ← Homepage
│   ├── highdra/page.tsx
│   ├── business-model/page.tsx
│   ├── applications/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── 3d/
│   │   ├── DroneCanvas.tsx     ← R3F canvas wrapper
│   │   ├── DroneModel.tsx      ← GLTF loader + materials
│   │   ├── LightingPresets.tsx
│   │   └── PostFX.tsx          ← Postprocessing pipeline
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── AnimatedCounter.tsx
│   │   ├── SectionReveal.tsx
│   │   └── ROICalculator.tsx
│   └── sections/               ← Page-specific sections
├── lib/
│   ├── gsap.ts                 ← GSAP + ScrollTrigger singleton
│   └── fonts.ts
├── styles/
│   └── globals.css             ← Design tokens + Tailwind config
└── public/
    ├── models/
    │   └── highdra.glb
    └── hdri/
        └── *.hdr               ← Lighting environments
```

---

## Dependency List

```json
{
  "dependencies": {
    "next": "^15",
    "react": "^19",
    "react-dom": "^19",
    "three": "^0.175",
    "@react-three/fiber": "^9",
    "@react-three/drei": "^10",
    "@react-three/postprocessing": "^3",
    "gsap": "^3.12",
    "framer-motion": "^12",
    "tailwindcss": "^4",
    "resend": "^4",
    "recharts": "^2",
    "clsx": "^2",
    "tailwind-merge": "^3"
  },
  "devDependencies": {
    "typescript": "^5",
    "leva": "^0.10",
    "@types/three": "^0.175"
  }
}
```

---

## Immediate Next Step

The single blocker before writing a line of code is **the 3D model**. Everything else can start in parallel, but the drone GLB defines the quality ceiling of the whole site. The recommendation is:

1. **If Starcopter has CAD files** → export as STEP/OBJ → Blender cleanup → Draco GLB. Free, highest quality.
2. **If not** → commission a Blender artist from the product photos on the existing site. One week turnaround, ~€400.

Once you confirm how you want to handle the model, I can scaffold the full Next.js project immediately and have a live Vercel preview running with the 3D canvas, lighting system, and homepage skeleton within a day.

**Ready to scaffold?**