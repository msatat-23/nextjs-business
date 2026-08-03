# Business Developer — Next.js Rebuild

A full rebuild of the original Vite + React app as a modern **Next.js 15 (App Router)** application, written in **TypeScript** and styled entirely with **CSS Modules** (Tailwind removed).

## What changed vs. the original

- **Framework**: Vite + client-only React → Next.js App Router (file-based routing, real `/` and `/contact` routes instead of client-side state).
- **Styling**: Tailwind utility classes fully removed; every visual style now lives in a `.module.css` file scoped to its component.
- **Structure**: The old `HomePage.tsx` (~900 lines, everything in one file) was split into focused, single-responsibility components:
  - `components/home/HeroSection.tsx` + `HeroDashboard.tsx`
  - `components/home/StatsSection.tsx`
  - `components/home/ServicesSection.tsx`
  - `components/home/MethodologySection.tsx`
  - `components/home/CaseStudiesSlider.tsx`
  - `components/home/SectorPlaybooksSlider.tsx`
  - `components/home/RoiCalculatorSection.tsx`
  - `components/home/RoadmapSection.tsx`
  - `components/home/CtaBannerSection.tsx`
  - `components/contact/ContactHero.tsx` + `ContactForm.tsx`
  - `components/layout/Header.tsx` + `MobileMenu.tsx`, `Footer.tsx`
- **Data**: All hard-coded arrays (services, case studies, sector playbooks, chart data, roadmap, methodology tabs, nav links) were extracted into `lib/data/*.ts`, fully typed via `types/index.ts`.
- **Images**: Converted to `next/image` with `next.config.ts` configured to allow the Unsplash remote domain.
- **Navigation**: Real Next.js `<Link>`/routing replaces the old in-memory `currentRoute` state; smooth-scrolling to in-page sections (Services, Case Studies, ROI Simulator) works from any route via `lib/scroll.ts`.
- **Removed**: The old `NextJsInspector` "blueprint preview" modal — it existed only to *show* what Next.js code would look like. Since this app now *is* that Next.js code, it was no longer needed.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm start` — run the production build
- `npm run lint` — Next.js lint
"# business" 
"# nextjs-business" 
