# AGENTS.md — LitARy Printing Company Website

> This file is intended for AI coding agents. It describes the project architecture, technology stack, build process, and development conventions.

---

## Project Overview

This is a **React + TypeScript + Vite** single-page application (SPA) for **«Цифровая типография ЛитАРы»** (LitARy Digital Typography), a printing company based in Grodno, Belarus. The site is a marketing landing page with service descriptions, contact information, technical requirements for print layouts, and a privacy policy page.

The UI language is **Russian**. The design system uses a custom "precision industrial" aesthetic with sharp corners, a warm eggshell background, gold accents, and charcoal typography.

---

## Technology Stack

| Layer | Technology | Version (key) |
|-------|-----------|---------------|
| Framework | React | 19.2.0 |
| Language | TypeScript | ~5.9.3 |
| Build Tool | Vite | 7.2.4 |
| Styling | Tailwind CSS | 3.4.19 |
| UI Components | shadcn/ui + Radix UI | new-york style |
| Routing | react-router-dom | 7.14.0 |
| Icons | lucide-react | — |
| Forms | react-hook-form + zod | — |
| Charts | recharts | — |

Additional dev tools:
- **ESLint** (`eslint.config.js` flat config) with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.
- **kimi-plugin-inspect-react** is included in `vite.config.ts` as a Vite plugin.

---

## Build and Development Commands

All commands are run via `npm`:

```bash
# Start the Vite development server
npm run dev

# Production build (TypeScript check + Vite build to dist/)
npm run build

# Run ESLint
npm run lint

# Preview the production build locally
npm run preview
```

There is **no test runner configured** (no Jest, Vitest, or Playwright). If you add tests, wire them into `package.json` scripts.

---

## Code Organization

```
src/
├── components/          # Shared layout & UI components
│   ├── Header.tsx       # Fixed navbar with scroll-aware glassmorphism
│   ├── Footer.tsx       # Site footer
│   ├── StickyFooter.tsx # Mobile-only sticky CTA bar
│   └── ui/              # shadcn/ui components (40+ primitives)
├── pages/               # Route-level page components
│   ├── HomePage.tsx
│   ├── ColorPrintingPage.tsx
│   ├── BWPrintingPage.tsx
│   ├── ContactsPage.tsx
│   ├── RequirementsPage.tsx
│   └── PrivacyPage.tsx
├── sections/            # Homepage sections composed by HomePage
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── AdvantagesSection.tsx
│   ├── PortfolioSection.tsx
│   ├── TrustSection.tsx
│   └── CTASection.tsx
├── hooks/               # Custom React hooks
│   └── use-mobile.ts
├── lib/                 # Utilities
│   └── utils.ts         # cn() helper (clsx + tailwind-merge)
├── App.tsx              # Root component with BrowserRouter + Routes
├── main.tsx             # Entry point (createRoot + StrictMode)
├── index.css            # Global styles, custom CSS, Tailwind layers
└── App.css              # App-specific styles (mostly unused)
```

**Key file notes:**
- `src/index.css` contains the bulk of the design system: CSS variables, `@layer base` resets, `@layer components` (`.btn-primary`, `.service-card`, `.tech-frame`, `.section-padding`, `.container-custom`, etc.), and extensive page-specific utility classes.
- `src/App.tsx` wires all routes under `BrowserRouter`.

---

## Routing

Client-side routing is handled by `react-router-dom` v7:

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomePage` | Landing page |
| `/color-printing` | `ColorPrintingPage` | Color printing services |
| `/bw-printing` | `BWPrintingPage` | Black & white printing services |
| `/contacts` | `ContactsPage` | Contacts & requisites |
| `/requirements` | `RequirementsPage` | Technical requirements for print layouts |
| `/privacy` | `PrivacyPage` | Privacy policy |

**Note:** The header navigation explicitly links to `/color-printing`, `/bw-printing`, `/requirements`, and `/contacts`.

---

## Styling Conventions

### Tailwind Configuration (`tailwind.config.js`)
- **Custom colors:** `charcoal` (#423e37), `gold` (#e3b23c), `eggshell` (#edebd7).
- **Font families:** `font-sans` (Inter), `font-heading` (Space Grotesk), `font-mono` (IBM Plex Mono).
- **Border radius:** `--radius` is set to `0` in `index.css`, resulting in sharp corners across the UI.
- **Custom shadows:** `shadow-card`, `shadow-lift`.
- **Custom animations:** `accordion-down`, `accordion-up`, `caret-blink`, `slide-in-left`, `lift-up`, `count-up`.

### CSS Architecture
- Tailwind directives (`@tailwind base/components/utilities`) are at the top of `src/index.css`.
- Custom component classes live in `@layer components`.
- Page-specific legacy/plain CSS lives outside layers further down the same file (e.g., `.print-grid`, `.service-group`, `.equipment-card`, `.contacts-grid`, `.bleed-diagram-container`).
- The body has `padding-bottom: 70px` to accommodate the mobile sticky footer, removed on `lg` breakpoints.

### Utility Helper
Use the `cn()` utility from `src/lib/utils.ts` whenever you need conditional or merged Tailwind classes:

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", condition && "conditional-class")} />
```

---

## shadcn/ui Components

The project is initialized with the **shadcn/ui "new-york"** style and uses **Lucide** as the icon library. Components live in `src/components/ui/` and are imported with the `@/components/ui/*` alias.

Example:
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
```

`components.json` stores the shadcn configuration. Do not modify it unless you are adding new shadcn components via the CLI.

---

## TypeScript Configuration

The project uses **project references**:
- `tsconfig.json` — root config with references to `tsconfig.app.json` and `tsconfig.node.json`.
- `tsconfig.app.json` — app source (`src/`) with `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`, and `verbatimModuleSyntax: true`.
- `tsconfig.node.json` — Vite config types.

Path alias:
- `@/*` maps to `./src/*` in both Vite and TypeScript.

---

## ESLint & Code Style

ESLint is configured in `eslint.config.js` (flat config) for `**/*.{ts,tsx}` files with:
- `@eslint/js` recommended
- `typescript-eslint` recommended
- `eslint-plugin-react-hooks` recommended
- `eslint-plugin-react-refresh` Vite preset

### Coding Guidelines
- Write components as **function components** with explicit exported defaults.
- Prefer **TypeScript** everywhere; avoid implicit `any`.
- Use the `cn()` utility for dynamic class names instead of string concatenation.
- Keep Russian text in components as-is; the business domain is localized for the Belarus market.
- Do not introduce arbitrary `console.log` statements in production code.
- Follow the existing file organization: pages go in `src/pages/`, shared layout components in `src/components/`, and shadcn/ui primitives in `src/components/ui/`.

---

## Testing Strategy

There is **currently no test infrastructure**. If you introduce tests, the preferred stack for this Vite ecosystem would be **Vitest** for unit tests and **Playwright** for E2E tests. Add the corresponding scripts to `package.json` and keep test files colocated or in a `tests/` directory at the project root.

---

## Security Considerations

- The app is a **static SPA** with no backend API or authentication.
- `vite.config.ts` sets `base: './'` for relative-path deployments.
- Phone numbers and contact details are hardcoded in components and `index.html`.
- `StrictMode` is enabled in `src/main.tsx`.
- No `.env` file or secrets management is currently used.

---

## Deployment

The build outputs to `dist/` as a static site. Because `base: './'` is set, the site can be deployed to any directory on a standard static host. There is no server-side rendering (SSR) or edge configuration.

---

## Quick Reference

- Run dev server: `npm run dev`
- Build for production: `npm run build`
- Lint: `npm run lint`
- Add shadcn component: `npx shadcn add <component>`
- Path alias: `@/` → `src/`
- Utility for classes: `cn(...)` from `@/lib/utils`
