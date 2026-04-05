# Starcopter Website Action Plan

## Goal
Build a premium, high-converting B2B website for Starcopter that reimagines `www.starcopter.com` with a modern stack, cinematic visual design, a high-fidelity interactive `HIGHDRA` object, and a scalable page architecture for future growth.

## Core Principles
- Premium, technical, high-trust visual language
- Fast initial load with progressive enhancement for heavy visuals
- Modular page system for future subpages and campaigns
- Structured content management for non-developer updates
- Bilingual-ready architecture for future German/English expansion

## Recommended Stack
- `Next.js` App Router + `TypeScript`
- `Tailwind CSS` + CSS variable design tokens
- `Framer Motion` for UI animation
- `GSAP` for selective scroll choreography
- `React Three Fiber` + `Three.js` + `@react-three/drei` for the interactive drone experience
- `Sanity` for headless CMS content operations
- `Vercel` for hosting, previews, and CDN delivery

## Site Scope
- Homepage
- `HIGHDRA` product page
- Business Model page
- Use Cases hub
- Use Case detail pages
- Technology page
- About page
- Careers page
- News page
- Contact page
- Legal pages

## Conversion Strategy
Every major page should support one or more primary actions:
- `Request Quote`
- `Book Demo`
- `Talk To Sales`

## Delivery Phases

### Phase 0: Strategy And Design
- Audit current `starcopter.com` messaging and extract the strongest product and trust signals.
- Define sitemap, page hierarchy, CTA placement, and content priorities.
- Create the premium visual system using `Oswald`, white, black, blue, and gold.
- Define the motion system and 3D art direction.
- Decide the 3D source pipeline for the drone model.

### Phase 1: Foundation
- Scaffold the application with `Next.js`, `TypeScript`, and `Tailwind CSS`.
- Establish SEO, metadata, analytics, and route structure.
- Build shared layout, navigation, footer, and reusable section primitives.
- Prepare the project structure for CMS integration and future localization.

### Phase 2: Premium Homepage And Product Experience
- Implement the homepage storytelling and premium hero treatment.
- Build a high-fidelity interactive `HIGHDRA` scene with adaptive fallbacks.
- Create the product page with specs, feature storytelling, trust signals, and FAQs.

### Phase 3: Supporting Pages
- Build Business Model, Use Cases, Technology, About, Contact, Careers, News, and legal pages.
- Reuse a consistent premium component system across all pages.
- Connect structured content patterns for future CMS-driven expansion.

### Phase 4: Optimization And Launch Readiness
- Optimize bundle sizes, images, videos, and 3D assets.
- Add adaptive quality handling for lower-powered devices.
- Tune Core Web Vitals, accessibility, and structured SEO.
- Validate responsive behavior and interaction polish across devices.

## 3D Strategy
- Treat the 3D drone as progressive enhancement, not a blocker for first paint.
- Show fast-loading premium copy and art direction before the 3D scene is ready.
- Use adaptive quality tiers and poster/video fallbacks where needed.
- Keep interaction polished, technical, and restrained rather than gimmicky.

## Success Criteria
- The site feels premium enough to justify an expensive B2B product.
- The `HIGHDRA` is the visual centerpiece without harming SEO or performance.
- Future pages can be added quickly without redesigning the system.
- Editors can eventually manage most content without code changes.
- The site remains fast, modern, and polished on real-world devices.
