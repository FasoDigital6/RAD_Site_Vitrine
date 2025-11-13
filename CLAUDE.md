# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 showcase website for **Réseau Africain de Développement (RAD)**, a multisectoral development company based in Guinea. The site is built with TypeScript, React 19, Tailwind CSS v4, and shadcn/ui components.

## Tech Stack

- **Framework**: Next.js 16 (App Router with src directory)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with custom RAD color scheme
- **UI Components**: shadcn/ui (New York style variant)
- **Animations**: Framer Motion via `motion` package (v12.23+)
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono (via next/font)

## Development Commands

```bash
# Start development server (MUST use --webpack flag)
npm run dev

# Build for production (uses --webpack flag)
npm build

# Start production server
npm start

# Run linting
npm run lint
```

**Important**: This project requires the `--webpack` flag for both dev and build commands. These flags are already configured in package.json scripts.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── header/            # Header component (exported from page.tsx)
│   ├── projects/          # Projects page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout with fonts and Header
│   ├── page.tsx           # Homepage with hero, sections, animations
│   └── globals.css        # Tailwind imports + RAD color theme
├── components/
│   └── ui/                # shadcn/ui components (23 components)
├── hooks/
│   └── use-mobile.ts      # Mobile detection hook
└── lib/
    └── utils.ts           # cn() utility for class merging
```

## Path Aliases

TypeScript paths are configured in `tsconfig.json` and shadcn in `components.json`:

- `@/*` → `./src/*`
- `@/components` → `./src/components`
- `@/lib` → `./src/lib`
- `@/hooks` → `./src/hooks`
- `@/ui` → `./src/components/ui`

## RAD Brand Colors

Custom color scheme defined in [src/app/globals.css](src/app/globals.css):

```css
--color-rad-blue-900: #0A2A43;  /* Primary brand blue - headers, hero, titles */
--color-rad-blue-800: #0F4D8A;  /* Action blue - buttons, links, hover states */
--color-rad-green: #0E7E43;     /* Logo accent green */
--color-rad-yellow: #F2CF1D;    /* Logo accent yellow */
--color-rad-red: #C3261A;       /* Logo accent red */
--color-rad-orange: #E38A46;    /* Logo accent orange */
```

**Usage in code**: Use Tailwind classes like `bg-rad-blue-900`, `text-rad-blue-800`, `border-rad-green`, etc.

**Three-color badge pattern**: Throughout the site, RAD branding is reinforced with a three-stripe badge using green/yellow/red (see homepage hero).

## Animation Patterns

The site uses Framer Motion extensively. Common patterns in [src/app/page.tsx](src/app/page.tsx):

```tsx
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

// Usage:
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {/* content */}
</motion.div>
```

Other variants: `fadeInLeft`, `fadeInRight`. The `viewport={{ once: true }}` ensures animations only trigger once when scrolling into view.

## Component Architecture

### Header Component
- Located in [src/app/header/page.tsx](src/app/header/page.tsx)
- Client component with language toggle (FR/EN)
- Sticky header with backdrop blur
- Imported and used in root layout

### Homepage Structure
- Hero carousel with 3 slides (auto-rotates every 7 seconds)
- Sections: About, Mission/Vision/Values, Services (domaines), Réalisations, Team (équipe), Partners (infinite scroll), Why Choose RAD, Contact CTA, Footer
- All content is hardcoded in French (multilingual support is UI-only, not implemented)

## Working with shadcn/ui

Add new components:

```bash
npx shadcn@latest add <component-name>
```

Configuration is in [components.json](components.json):
- Style: `new-york`
- Base color: `neutral`
- CSS variables: enabled
- RSC: enabled

## Image Assets

All images are in `/public`:
- Logo: `rad-logo.jpeg`
- Hero images: `mining.png`, `constructions.jpg`, `logistics.jpg`
- Team: `team.jpeg`
- Partner logos: `cat-logo.png`, `toyota-logo.svg`, `rio-tinto-logo.png`, `sag-logo.jpg`
- Placeholder folders referenced in code: `/images/realisation-*.jpg`, `/images/equipe-*.jpg` (these don't exist yet)

When adding images, use Next.js `<Image>` component with appropriate `width`, `height`, and `priority` props. For hero/above-fold images, set `priority={true}`.

## Page Structure Pattern

All route pages follow this pattern:
- Located in `src/app/<route-name>/page.tsx`
- Export default function (can be named or anonymous)
- Use `"use client"` directive if using hooks or interactivity
- Layout is inherited from root `layout.tsx`

## Styling Approach

- Tailwind v4 with `@theme inline` block in globals.css
- Utility-first approach with custom RAD colors
- Consistent spacing: use Tailwind spacing scale (px-6, py-16, gap-6, etc.)
- Rounded corners: Prefer `rounded-3xl` for cards, `rounded-full` for buttons/badges
- Shadows: `shadow-sm shadow-rad-blue-900/10` for subtle depth
- Hover effects: Use `hover:-translate-y-0.5` and `hover:-translate-y-1` for interactive elements

## Animation Keyframes

Custom infinite slide animation for partners section:

```css
@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-slide {
  animation: slide 18s linear infinite;
}
```

## Important Notes

1. **Webpack mode required**: Next.js dev and build commands must include `--webpack` flag
2. **Image paths**: Some image paths in code reference `/images/` subdirectories that don't exist in `/public` yet
3. **Language toggle**: The FR/EN toggle in header changes UI state but doesn't actually translate content
4. **Client components**: Pages using `useState`, `useEffect`, or event handlers need `"use client"` directive
5. **Framer Motion**: Import from `"framer-motion"` for types and `motion` components, despite using the `motion` package
