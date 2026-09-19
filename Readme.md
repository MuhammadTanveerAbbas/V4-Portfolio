<div align="center">

  <img src="public/Logo.png" alt="Muhammad Tanveer Abbas" width="80" height="80" />

# Muhammad Tanveer Abbas | Portfolio

**Software developer building practical business software and SaaS products for B2B companies.**

[![Live site](https://img.shields.io/badge/Live-Site-brightgreen?style=for-the-badge)](https://muhammadtanveerabbas.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## Overview

This repository contains the personal website of Muhammad Tanveer Abbas, a
software developer who builds practical business software and SaaS products for
B2B companies. The site explains what he builds, shows four real products with
case studies, and gives a direct way to start a project.

The public copy is written for non-technical decision makers. Technical depth
lives in the project case studies, where each build covers the problem, why
existing approaches fall short, what was built, how it works, the decisions and
trade offs, what was deliberately left out, lessons learned and the tools used.

---

## Pages

| Route | Purpose |
| ----- | ------- |
| `/` | Who Muhammad is, what he builds, services, the work, the process, why it works, FAQ |
| `/work` | Project listing |
| `/work/[slug]` | Case study for a project (problem, decisions, lessons, tools) |
| `/services` | Services and how a project runs |
| `/about` | About Muhammad and ways to work together |
| `/contact` | Contact form, preselected when linked from a service |

The four projects are Clario, Repurpose AI, Crivox and Flowbook.

---

## Features

- **One source of truth for projects**: `lib/projects.ts` drives the home page, `/work`, `/work/[slug]`, page metadata, the sitemap and the structured data.
- **One source of truth for services**: `lib/services.ts` drives the services sections and the contact form's service selector.
- **Static project pages**: `generateStaticParams()` builds the four case studies at build time, unknown slugs return a real 404 via `notFound()`.
- **SEO**: indexable metadata, canonical URLs, Open Graph and Twitter cards, JSON-LD (Person, WebSite, Service, ItemList, BreadcrumbList, CreativeWork), dynamic `robots.txt` and a sitemap that includes the project pages.
- **Contact form**: Web3Forms with a hidden honeypot for spam protection and the access key supplied through an environment variable.
- **Performance**: the WebGL background is loaded as a separate client chunk, frame throttled to 30fps, DPR capped on mobile, paused when the tab is hidden, and skipped entirely for visitors who prefer reduced motion.
- **Accessibility**: skip to content link, labelled controls, `aria-expanded` on the mobile menu and FAQ, semantic landmarks, visible focus rings and reduced motion support.
- **Security headers**: Content Security Policy, HSTS, Permissions Policy, `X-Content-Type-Options`, `X-Frame-Options` and `Referrer-Policy`.

---

## Tech stack

| Category | Technology |
| -------- | ---------- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| WebGL background | OGL |
| Fonts | Playfair Display + Geist Mono via `next/font` |
| Forms | React (plain state) + Web3Forms |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Required | Description |
| -------- | -------- | ----------- |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL used in metadata |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Yes | Web3Forms access key for the contact form |

---

## Available scripts

| Command | Description |
| ------- | ----------- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Production build, including the TypeScript check |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run the TypeScript compiler check |

---

## Project structure

```text
app/
  about/            # About page
  contact/          # Contact page with the form
  services/         # Services page
  work/             # Work listing + [slug] case studies
  error.tsx         # Error boundary styled like the site
  globals.css       # Design tokens and keyframes
  layout.tsx        # Root layout, metadata, skip link, analytics
  loading.tsx       # Loading state styled like the site
  not-found.tsx     # 404 styled like the site
  robots.ts         # robots.txt
  sitemap.ts        # Sitemap, derived from the project data
components/         # Page sections and shared components
lib/
  projects.ts       # Project source of truth
  services.ts       # Services source of truth
  site.ts           # Site identity, navigation and contact details
  utils.ts          # cn() helper
public/
  projects/         # Project screenshots
  Logo.png          # Logo
```

---

## Deployment

The site is deployed on Vercel.

1. Import the repository into Vercel
2. Add the environment variables from the table above
3. Deploy

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Built by Muhammad Tanveer Abbas

<div align="center">

**Muhammad Tanveer Abbas**
Software Developer | Building practical software for B2B businesses

[![Website](https://img.shields.io/badge/Website-muhammadtanveerabbas.vercel.app-black?style=for-the-badge)](https://muhammadtanveerabbas.vercel.app)
[![X](https://img.shields.io/badge/X-@m__tanveerabbas-000000?style=for-the-badge&logo=x)](https://x.com/m_tanveerabbas)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/muhammadtanveerabbas)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/MuhammadTanveerAbbas)

</div>
