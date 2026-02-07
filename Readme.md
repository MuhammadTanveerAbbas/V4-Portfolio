# V4 Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS. Features smooth animations, dark mode support, and a comprehensive component library.

## Features

- **Modern Stack**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 4 with custom animations
- **UI Components**: 50+ pre-built Radix UI components
- **Animations**: Framer Motion for smooth, performant animations
- **Dark Mode**: Next Themes for seamless theme switching
- **Forms**: React Hook Form with Zod validation
- **Responsive**: Mobile-first design with responsive utilities
- **Analytics**: Vercel Analytics integration
- **SEO**: Schema markup and sitemap included

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.1.6
- **UI Library**: [React](https://react.dev/) 19.2.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.1.9
- **Components**: [Radix UI](https://www.radix-ui.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) 12.26.2
- **Forms**: [React Hook Form](https://react-hook-form.com/) 7.60.0
- **Validation**: [Zod](https://zod.dev/) 3.25.76
- **Icons**: [Lucide React](https://lucide.dev/) 0.454.0
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) 1.7.4

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd V4-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
V4-Portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── work/              # Work/portfolio page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Radix UI components
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation bar
│   ├── footer.tsx        # Footer
│   ├── contact-form.tsx  # Contact form
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── projects/         # Project images
│   └── ...               # Other assets
├── styles/               # CSS files
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Pages

- **Home** (`/`) - Landing page with hero section
- **About** (`/about`) - About page
- **Services** (`/services`) - Services offered
- **Work** (`/work`) - Portfolio/projects showcase
- **Contact** (`/contact`) - Contact form

## Components

The project includes a comprehensive UI component library with:

- Accordion, Alert, Avatar, Badge
- Button, Card, Carousel, Checkbox
- Dialog, Drawer, Dropdown Menu
- Form, Input, Label, Pagination
- Select, Sidebar, Tabs, Textarea
- Toast, Tooltip, and more...

All components are built with Radix UI and styled with Tailwind CSS.

## Customization

### Theme

Edit `next.config.mjs` and component files to customize colors and styling.

### Content

Update page content in the `app/` directory and component files.

### Images

Replace images in the `public/` directory with your own assets.

## Performance

- Optimized with Next.js 16 features
- Turbopack for faster builds
- Image optimization
- Code splitting and lazy loading
- Analytics tracking with Vercel Analytics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For inquiries or support, use the contact form on the website or reach out directly.

---

Built with ❤️ using Next.js and modern web technologies.
