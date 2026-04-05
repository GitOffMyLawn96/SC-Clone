# Starcopter Design System

## Brand Direction
The interface should feel precise, engineered, premium, and expensive. It should communicate technical competence and operational confidence rather than startup energy or generic SaaS friendliness.

## Typography
- Primary display font: `Oswald`
- Primary body font: a neutral sans-serif optimized for readability and contrast
- Use bold, compressed headlines for product and metric storytelling
- Keep body copy restrained and easy to scan

## Color System
- `Obsidian`: near-black background for premium sections
- `Cloud`: near-white for contrast and high-legibility surfaces
- `Signal Blue`: primary accent for technical energy and UI focus
- `Aurum`: restrained gold accent for premium highlights and trust details
- Supporting neutrals should stay cool and low-saturation

## Visual Language
- Deep contrast, layered surfaces, and precise edge highlights
- Subtle grid, glow, and radial lighting effects used sparingly
- Premium borders, glass tints, and shadowing without looking noisy
- Large negative space and strong vertical rhythm

## Motion Language
- Motion should feel intentional, smooth, and confident
- Avoid bouncy, playful, or exaggerated consumer-style interactions
- Use fades, parallax drift, masked reveals, and subtle perspective changes
- Use longer easing curves for hero transitions and shorter ones for UI feedback
- Respect `prefers-reduced-motion`

## Component Rules
- Buttons should feel dense, precise, and tactile
- Cards should be structured with strong hierarchy and quiet premium surfaces
- Metrics should read like engineering proof points, not marketing counters
- Section headers should pair a small label with a strong headline and short supporting copy
- Reusable layout primitives should keep alignment consistent across all pages

## Section Types
- Hero
- Metrics strip
- Feature grid
- Capability cards
- Use-case spotlight
- Comparison or business-model explainer
- FAQ accordion
- CTA band
- Legal/simple content layout

## 3D Experience Rules
- Keep the drone scene clean and hero-focused
- Use dramatic but controlled lighting
- Prefer technical hotspot reveals over decorative effects
- Preserve page readability while the 3D canvas loads
- Provide graceful fallback rendering for constrained devices

## Implementation Notes
- Store core colors and layout values in CSS variables
- Build reusable visual primitives before page-specific one-offs
- Make dark mode the primary visual expression for the premium marketing experience
