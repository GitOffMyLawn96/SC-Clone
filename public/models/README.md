# HIGHDRA 3D Asset Pipeline

Place the production-grade optimized `HIGHDRA` model here once available.

## Expected Production Assets
- `highdra.glb`
- `highdra-poster.webp`
- optional compressed texture set

## Optimization Notes
- Export to `glTF 2.0`
- Compress geometry with `Draco` or `Meshopt`
- Prefer reduced material count
- Cap texture sizes per visible need
- Keep a poster fallback for reduced-motion and low-power devices

The current website already ships a procedural 3D hero and SVG poster fallback so the production model can be slotted in later without redesigning the scene architecture.
