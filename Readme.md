<div align="center">

  <img src="public/Logo.png" alt="Muhammad Tanveer Abbas Logo" width="80" height="80" />

# Muhammad Tanveer Abbas Portfolio v4

**SaaS Developer & MVP Builder helping early-stage founders validate ideas and ship production-ready products in 2–3 weeks.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://muhammadtanveerabbas.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## Overview

This is the v4 portfolio of Muhammad Tanveer Abbas a SaaS developer and MVP builder based in Pakistan, working with early-stage founders in the USA, UK, and Europe. The site showcases 6 shipped SaaS products, a transparent build process, and a direct path for founders to start a project. It's built with Next.js 15, Framer Motion, and a dark, editorial design system fast, SEO-optimized, and fully responsive.

---

## ✨ Features

- 🚀 **Animated Hero Section** Scroll-driven Framer Motion animations with a rotating badge and parallax veil effect
- 📊 **Stats Bar** Live metrics: 6 SaaS products shipped, 2–3 week timeline, 100% hands-on execution
- 🎨 **Marquee Ticker** Infinite scrolling tech/service marquee with smooth CSS animation
- 💼 **Featured Work** Showcase of 6 real SaaS MVPs with project detail pages (problem, process, stack, metrics, lessons)
- 🛠 **Services Section** Idea Validation, Rapid Development, User Acquisition, Investor Ready each with tag chips
- ⚙️ **3-Step Process** Validate → Build → Launch with day-by-day breakdown per phase
- 🧠 **Tech Stack Grid** Full breakdown of Frontend, Backend, Payments/AI, and Infra tools used across projects
- 🤔 **Why Me Section** Honest comparison against agencies, freelancers, no-code tools, and in-house hiring
- ❓ **FAQ Accordion** 10 common founder questions with memoized, performance-optimized accordion
- 📬 **Contact Form** Web3Forms-powered form with name, email, company, idea, timeline, and additional details fields
- 🌐 **Full SEO Setup** Metadata, Open Graph, Twitter cards, JSON-LD structured data, sitemap, robots.txt, Google Search Console verification
- 📈 **Vercel Analytics** Built-in page view and event tracking via `@vercel/analytics`
- 🌙 **Dark-first Design** Pure black background with `#4a0dbc` accent, Playfair Display serif + Geist Mono font pairing

---

## 🛠 Tech Stack

| Category   | Technology                                        |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 15 (App Router)                           |
| Language   | TypeScript 5 (strict mode)                        |
| Styling    | Tailwind CSS v4 + shadcn/ui (Radix UI primitives) |
| Animation  | Framer Motion 12                                  |
| Forms      | React Hook Form + Zod + Web3Forms API             |
| Fonts      | Playfair Display + Geist Mono (Google Fonts)      |
| Analytics  | Vercel Analytics                                  |
| Deployment | Vercel                                            |

---

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/MuhammadTanveerAbbas/v4-portfolio.git
cd v4-portfolio

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill in your values (see Environment Variables section below)

# 4. Run the development server
pnpm dev

# 5. Open in browser
http://localhost:3000
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://muhammadtanveerabbas.vercel.app

# Web3Forms API Key (Get from https://web3forms.com)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_google_verification_code_here

# Google Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_google_analytics_id_here
```

Get your keys:

- Web3Forms: https://web3forms.com
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com

---

## 📁 Project Structure

```
v4-portfolio/
├── app/
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── services/        # Services page
│   ├── work/            # Work listing + [slug] detail pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout (metadata, fonts, analytics)
│   ├── page.tsx         # Home page
│   ├── robots.ts        # Robots.txt generation
│   └── sitemap.ts       # Sitemap generation
├── components/
│   ├── ui/              # shadcn/ui primitives (50 components)
│   ├── contact-form.tsx
│   ├── faq.tsx
│   ├── featured-work.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── JsonLd.tsx       # Structured data (JSON-LD)
│   ├── marquee-section.tsx
│   ├── navbar.tsx
│   ├── process.tsx
│   ├── service-card.tsx
│   ├── services.tsx
│   ├── stats-bar.tsx
│   ├── tech-stack.tsx
│   └── why-me.tsx
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/
│   ├── projects/        # Project screenshots (6 SaaS products)
│   └── Logo.png
├── .env.example
├── package.json
└── README.md
```

---

## 📦 Available Scripts

| Command      | Description                                |
| ------------ | ------------------------------------------ |
| `pnpm dev`   | Start development server on localhost:3000 |
| `pnpm build` | Build for production                       |
| `pnpm start` | Start production server                    |
| `pnpm lint`  | Run ESLint                                 |

---

## 🌐 Deployment

This project is deployed on **Vercel**.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MuhammadTanveerAbbas/v4-portfolio)

1. Click the button above
2. Connect your GitHub account
3. Add environment variables in the Vercel dashboard
4. Deploy

---

## 🗺 Roadmap

- [x] Hero with scroll-driven animations
- [x] 6 SaaS project case studies with full detail pages
- [x] Services, Process, Tech Stack, Why Me, FAQ sections
- [x] Web3Forms contact form with validation
- [x] Full SEO: metadata, OG, JSON-LD, sitemap, robots
- [x] Vercel Analytics integration
- [ ] Blog / writing section
- [ ] Case study video walkthroughs
- [ ] Dark/light theme toggle

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Built by The MVP Guy

<div align="center">

**Muhammad Tanveer Abbas**
SaaS Developer | Building production-ready MVPs in 14–21 days

[![Portfolio](https://img.shields.io/badge/Portfolio-muhammadtanveerabbas.vercel.app-black?style=for-the-badge)](https://muhammadtanveerabbas.vercel.app)
[![Twitter](https://img.shields.io/badge/Twitter-@m__tanveerabbas-1DA1F2?style=for-the-badge&logo=twitter)](https://x.com/m_tanveerabbas)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/muhammadtanveerabbas)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/MuhammadTanveerAbbas)

_If this project helped you, please consider giving it a ⭐_

</div>
