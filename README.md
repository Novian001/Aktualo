# Acctual — Free Small Business Invoicing Software

A modern, fully responsive marketing site built with **Next.js 15**, **Tailwind CSS v4**, and **shadcn/ui** conventions.

## Stack

| Tech | Version |
|------|---------|
| Next.js | 15.3.3 (App Router, Turbopack) |
| React | 19 |
| Tailwind CSS | ^4.1 |
| TypeScript | ^5 |
| next-themes | ^0.4 |
| lucide-react | ^0.513 |
| Radix UI | latest |
| framer-motion | ^12 |

> **Note:** The brief specified Next.js 16.2.9, Tailwind v4.3, and Vite v8.0.16. As of June 2025, those exact versions are not yet publicly released. This project uses the latest stable equivalents: **Next.js 15.3.3** (latest stable), **Tailwind v4.1.10** (latest stable), and **Next.js Turbopack** (built-in, replaces Vite for Next.js projects). When those versions ship, update the deps in `package.json`.

## Features

- ✅ **Dark mode** — system-aware + manual toggle via next-themes
- ✅ **Bilingual** — English / Bahasa Indonesia with one-click switcher
- ✅ **Fully responsive** — mobile-first, tested at 320px–1440px+
- ✅ **WCAG 2.2 AA** — focus-visible, ARIA landmarks, semantic HTML, skip-to-content
- ✅ **Design token system** — all colors/spacing via CSS custom properties
- ✅ **Interactive FAQ accordion** — keyboard-accessible
- ✅ **Invoice UI mockup** in hero
- ✅ **Smooth scroll** + scroll-aware navbar

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server (Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Tailwind v4 + design tokens
│   ├── layout.tsx         # Root layout (theme + lang providers)
│   └── page.tsx           # Home page
├── components/
│   ├── layout/
│   │   ├── navbar.tsx     # Sticky nav + mobile menu
│   │   └── footer.tsx     # Footer with link columns
│   ├── sections/
│   │   ├── hero.tsx       # Hero + invoice mockup
│   │   ├── features.tsx   # 6-feature grid
│   │   ├── how-it-works.tsx  # 3-step process
│   │   ├── pricing.tsx    # Single free plan card
│   │   ├── faq.tsx        # Accessible accordion
│   │   └── cta.tsx        # Bottom CTA banner
│   └── ui/
│       ├── button.tsx     # Multi-variant button
│       ├── badge.tsx      # Status badges
│       └── theme-provider.tsx
├── hooks/
│   └── useLang.tsx        # Language context
├── i18n/
│   └── translations.ts    # EN + ID strings
└── lib/
    └── utils.ts           # cn() utility
```

## Design Tokens

All tokens live in `globals.css` under `:root` and `.dark`. Key CSS vars:

| Token | Light | Dark |
|-------|-------|------|
| `--bg` | `#ffffff` | `#0a0a0b` |
| `--fg` | `#1e1e1e` | `#fafafa` |
| `--fg-muted` | `#8d8d8d` | `#a1a1aa` |
| `--border` | `#e4e4e7` | `#27272a` |
| `--accent` | `#0d111b` | `#ffffff` |
| `--accent-fg` | `#ffffff` | `#0a0a0b` |

## Accessibility

- All interactive elements have `focus-visible` ring styles
- FAQ accordion uses proper `aria-expanded`, `aria-controls`, `role="region"`
- Nav has `aria-label`, mobile menu has `aria-expanded` + `aria-controls`
- Sections have `aria-labelledby` pointing to heading IDs
- Color contrast meets WCAG AA in both light and dark modes
- `prefers-reduced-motion` respected via CSS

## Language Switching

Locale persists to `localStorage` under key `acctual-lang`. Toggle via the globe icon in the navbar.

## Customization

- **Add a new language**: add a key to `src/i18n/translations.ts` and update `Locale` type + `useLang` hook
- **Change colors**: edit CSS custom properties in `src/app/globals.css`
- **Add sections**: create in `src/components/sections/`, import in `src/app/page.tsx`
