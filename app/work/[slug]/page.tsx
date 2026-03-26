import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

const projects: Record<string, any> = {
  "kanbi-board": {
    title: "Kanbi Board",
    days: "18 days",
    live: "https://kanbi.vercel.app/",
    image: "/projects/Kanbi-Board.png",
    problem: "Professionals waste 15-30 min daily converting scattered notes into actionable tasks. Manual task extraction is repetitive, error prone, and kills momentum.",
    whyFailed: [
      "Existing tools force you to switch between note taking and task management",
      "Manual copy paste loses context and formatting",
      "No AI tools handle unstructured text reliably",
    ],
    built: [
      "AI task extraction with dual providers (Gemini + Groq) for 95%+ accuracy",
      "Drag and drop Kanban with optimistic UI updates",
      "Supabase RLS for secure multi tenant data isolation",
      "Stripe subscriptions (test mode to prove payment integration skills)",
      "JSON export with proper data serialization",
    ],
    process: {
      week1: "Database schema (3 days), Supabase RLS policies (2 days), Auth flow (2 days)",
      week2: "AI integration + prompt engineering (4 days), Kanban UI (3 days)",
      week3: "Stripe webhooks (2 days), Testing edge cases (2 days), Deploy (1 day)",
    },
    metrics: {
      users: "23 signups",
      revenue: "$0 (test mode only)",
      github: "8 stars",
      performance: "<3s task extraction, <500ms AI failover",
      code: "95.4% TypeScript, 19 commits",
    },
    stack: [
      { name: "Next.js 15", reason: "App Router for server components, faster than Pages Router" },
      { name: "Supabase", reason: "PostgreSQL + RLS cheaper than Firebase, better for relational data" },
      { name: "Groq + Gemini", reason: "Groq for speed (800 tokens/s), Gemini for accuracy, dual failover" },
      { name: "Stripe", reason: "Industry standard, better docs than Paddle/LemonSqueezy" },
    ],
    cut: [
      "Real time collaboration (would add 5+ days)",
      "Comments on tasks (not core to MVP)",
      "Task templates (nice to have, not must have)",
    ],
    lessons: [
      "Spent 40% of time on AI prompt engineering. Consistency > speed.",
      "RLS policies are hard. Test with multiple users from day 1.",
      "Stripe webhooks need idempotency keys. Learned this the hard way.",
    ],
  },
  "clario-hub": {
    title: "Clario Hub",
    days: "21 days",
    live: "https://clario-hub.vercel.app/",
    image: "/projects/Clario-Hub.png",
    problem: "Users subscribe to 3-5 separate AI tools ($60-100/month). Tool sprawl kills productivity. Need unified platform for summarization, chat, writing, and notes.",
    whyFailed: [
      "Multi tool subscriptions drain budgets without clear ROI",
      "Context switching between apps wastes 20+ min daily",
      "No single platform handles diverse AI workflows well",
    ],
    built: [
      "5 AI workflows: summarization (10 modes), chat, writing (25 combinations), meeting notes, quick notes",
      "Groq AI with model routing: Llama 3.1 8B (chat), Llama 3.3 70B (content)",
      "PostgreSQL schema supporting 5 feature types with shared usage tracking",
      "Sentry error tracking + PostHog behavioral analytics",
      "Stripe tiered pricing: Free (100 requests/month), Pro (1000)",
    ],
    process: {
      week1: "Feature architecture (3 days), Database design (2 days), Auth + OAuth (2 days)",
      week2: "AI integration (5 days), Usage tracking system (2 days)",
      week3: "Sentry + PostHog setup (2 days), Stripe integration (2 days), Deploy (1 day)",
    },
    metrics: {
      users: "41 signups",
      revenue: "$0 (test mode only)",
      github: "10 stars",
      performance: "<2s summaries, <500ms chat, 99.9% uptime",
      code: "94.8% TypeScript, 25 commits",
    },
    stack: [
      { name: "Next.js 15", reason: "Server actions for API routes, cleaner than Express" },
      { name: "Groq Llama", reason: "10x cheaper than GPT 4, 800 tokens/s vs 40 tokens/s" },
      { name: "Sentry", reason: "Better error tracking than LogRocket, free tier generous" },
      { name: "PostHog", reason: "Open source, self hostable, better than Mixpanel for startups" },
    ],
    cut: [
      "Team collaboration features (would double timeline)",
      "Custom AI model training (overkill for MVP)",
      "Mobile app (web first, mobile later)",
    ],
    lessons: [
      "Feature based folder structure saved me. Monolithic structure would've been chaos.",
      "API cost monitoring before launch, not after. Set up billing alerts day 1.",
      "80% of users use 2-3 features. Don't overbuild.",
    ],
  },
  "subsight-tracker": {
    title: "Subsight Tracker",
    days: "19 days",
    live: "https://subsight-tracker.vercel.app/",
    image: "/projects/Subsight-Tracker.png",
    problem: "Average person has 7-12 subscriptions ($273/month) but tracking requires spreadsheets or apps demanding bank access. Privacy concerns block adoption.",
    whyFailed: [
      "Mint/YNAB require bank linking (privacy red flag for many)",
      "Spreadsheets break with complex billing cycles (annual, quarterly, custom)",
      "No tools offer privacy first + accurate calculations",
    ],
    built: [
      "Manual entry with optional AI auto fill (user provided Gemini key)",
      "Calculation engine: monthly/yearly/custom cycles, renewal predictions",
      "Real time budget simulation (toggle subscriptions without data mutation)",
      "Export: JSON, CSV, PDF with proper Unicode support",
      "Vitest unit tests for financial calculations",
    ],
    process: {
      week1: "Database schema (2 days), Calculation engine (4 days), Unit tests (1 day)",
      week2: "Dashboard UI + Recharts (4 days), Export functionality (3 days)",
      week3: "AI integration (2 days), PDF generation (2 days), Deploy (1 day)",
    },
    metrics: {
      users: "34 signups",
      revenue: "$0 (free tool)",
      github: "9 stars",
      performance: "100% calculation accuracy, 3 export formats working",
      code: "98.2% TypeScript, 23 commits",
    },
    stack: [
      { name: "Next.js 15", reason: "Static generation for marketing pages, SSR for dashboard" },
      { name: "Supabase", reason: "Free tier: 500MB database, 2GB bandwidth, perfect for MVP" },
      { name: "Recharts", reason: "Lighter than Chart.js, better TypeScript support" },
      { name: "jsPDF", reason: "Client side PDF generation, no server costs" },
    ],
    cut: [
      "Bank account linking (privacy first = manual entry only)",
      "Recurring email reminders (would need cron jobs + email service)",
      "Mobile app (PWA sufficient for MVP)",
    ],
    lessons: [
      "Financial calculations need edge case testing: leap years, month end dates, timezones.",
      "Manual entry isn't a weakness, it's a privacy feature. Users valued this.",
      "Export functionality increased perceived value 3x. Always include exports.",
    ],
  },
  "readlyn": {
    title: "Readlyn",
    days: "16 days",
    live: "https://readlyn.vercel.app/",
    image: "/projects/Readlyn.png",
    problem: "Design-to-dev handoff is broken. Developers waste hours guessing CSS values, asking designers for specs, and manually translating Figma files into code. Every back-and-forth slows down shipping.",
    whyFailed: [
      "Manual spec writing takes hours and goes stale the moment designs change",
      "Existing tools require expensive subscriptions or complex setup just to read a Figma file",
      "No tool auto-explains components — developers still have to interpret what to build",
    ],
    built: [
      "Figma URL import — paste any file URL and fetch the design instantly",
      "Complete developer spec with CSS values, Tailwind classes, and design tokens",
      "Groq AI annotations that explain every component so developers know exactly what to build",
      "Shareable spec links — no login required to view",
      "GitHub Issues integration — create engineering tickets from specs in one click (Pro)",
      "4 export formats: CSS, Tailwind, JSON, and component state docs",
    ],
    process: {
      week1: "Figma API integration (3 days), spec parser + CSS/Tailwind extraction (3 days), auth (1 day)",
      week2: "Groq AI annotation engine (3 days), shareable link system (2 days), spec viewer UI (2 days)",
      week3: "GitHub Issues integration (2 days), pricing + Stripe (2 days), deploy (1 day)",
    },
    metrics: {
      users: "500+ specs generated",
      uptime: "99.9% SLA",
      plans: "Free + Pro ($19/mo)",
      exports: "4 export formats",
      performance: "Spec generated in seconds",
      code: "Next.js 15, TypeScript, Groq AI",
    },
    stack: [
      { name: "Next.js 15", reason: "App Router for fast server-side spec rendering and API routes" },
      { name: "Figma REST API", reason: "Direct file access — no plugin install required for users" },
      { name: "Groq Llama 3.3 70B", reason: "Fast AI annotations at low cost — 800 tokens/s, $0.59/1M tokens" },
      { name: "Supabase", reason: "Stores specs and shareable links with RLS for access control" },
      { name: "Stripe", reason: "Free/Pro billing — $19/mo Pro plan with usage-based gating" },
    ],
    cut: [
      "Real-time Figma sync (polling on demand is sufficient for MVP)",
      "Design diff / version history (adds significant complexity)",
      "Slack integration (GitHub Issues covers the core workflow need)",
    ],
    lessons: [
      "Figma API responses are deeply nested — a robust parser is 60% of the work.",
      "AI annotations only add value when they're specific. Generic output kills trust.",
      "Shareable links with no login required dramatically increased adoption.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  return {
    title: `${project?.title} | Muhammad Tanveer Abbas`,
    description: project?.problem,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <section className="pt-32 pb-16 px-4 md:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl uppercase">Project Not Found</h1>
          <Link href="/work" className="mt-8 inline-block text-[#4a0dbc] hover:underline">
            Back to Projects
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-20 sm:pt-32 pb-12 sm:pb-16 px-4 md:px-8">
        <Link href="/work" className="flex items-center gap-2 text-[#4a0dbc] hover:text-white transition-colors mb-6 sm:mb-8">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.9] md:leading-[0.85] uppercase tracking-tighter">
          {project.title}
        </h1>
        <p className="font-mono text-xs sm:text-sm text-white/70 mt-4 sm:mt-8">{project.days}</p>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <img src={project.image} alt={project.title} className="w-full rounded-lg border-2 border-white/30 mb-12 sm:mb-16" />

        <div className="max-w-4xl space-y-12 sm:space-y-16">
          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">1. The Founder's Problem</h2>
            <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">2. Why Traditional Solutions Failed</h2>
            <ul className="space-y-2">
              {project.whyFailed.map((item: string) => (
                <li key={item} className="font-mono text-xs sm:text-sm text-white/70 flex items-start gap-2 sm:gap-3">
                  <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">3. What We Built</h2>
            <ul className="space-y-2">
              {project.built.map((item: string) => (
                <li key={item} className="font-mono text-xs sm:text-sm text-white/70 flex items-start gap-2 sm:gap-3">
                  <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">4. The Process</h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="border-l-2 border-[#4a0dbc] pl-3 sm:pl-4">
                <p className="font-mono text-xs sm:text-sm text-[#4a0dbc] font-bold">WEEK 1</p>
                <p className="font-mono text-xs sm:text-sm text-white/70">{project.process.week1}</p>
              </div>
              <div className="border-l-2 border-[#4a0dbc] pl-3 sm:pl-4">
                <p className="font-mono text-xs sm:text-sm text-[#4a0dbc] font-bold">WEEK 2</p>
                <p className="font-mono text-xs sm:text-sm text-white/70">{project.process.week2}</p>
              </div>
              <div className="border-l-2 border-[#4a0dbc] pl-3 sm:pl-4">
                <p className="font-mono text-xs sm:text-sm text-[#4a0dbc] font-bold">WEEK 3</p>
                <p className="font-mono text-xs sm:text-sm text-white/70">{project.process.week3}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">5. Results & Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="border-2 border-white/30 p-3 sm:p-4">
                  <p className="font-mono text-xs uppercase text-[#4a0dbc] mb-2">{key}</p>
                  <p className="font-mono text-xs sm:text-sm text-white/70">{String(value)}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">6. Tech Stack & Why</h2>
            <div className="space-y-3 sm:space-y-4">
              {project.stack.map((tech: any) => (
                <div key={tech.name} className="border-l-2 border-[#4a0dbc] pl-3 sm:pl-4">
                  <p className="font-mono text-xs sm:text-sm text-[#4a0dbc] font-bold">{tech.name}</p>
                  <p className="font-mono text-xs sm:text-sm text-white/70">{tech.reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">7. What We Cut to Ship Fast</h2>
            <ul className="space-y-2">
              {project.cut.map((item: string) => (
                <li key={item} className="font-mono text-xs sm:text-sm text-white/70 flex items-start gap-2 sm:gap-3">
                  <span className="text-yellow-400 mt-1 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-3xl uppercase mb-3 sm:mb-4">8. Lessons Learned</h2>
            <ul className="space-y-2">
              {project.lessons.map((item: string) => (
                <li key={item} className="font-mono text-xs sm:text-sm text-white/70 flex items-start gap-2 sm:gap-3">
                  <span className="text-blue-400 mt-1 flex-shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="border-2 border-white/30 p-4 sm:p-8 md:p-12">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#4a0dbc] text-white font-mono text-xs sm:text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors"
          >
            Live Preview
          </a>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-12 sm:pb-24">
        <div className="bg-[#4a0dbc] p-6 sm:p-8 md:p-16 shadow-lg shadow-[#4a0dbc]/40">
          <h2 className="font-serif text-2xl sm:text-4xl md:text-6xl uppercase tracking-tight text-white">
            Ready to Build Your MVP?
          </h2>
          <p className="font-mono text-xs sm:text-sm md:text-base text-white/90 mt-4 max-w-xl">
            Let's create something similar for your idea. I can build and launch in 2-3 weeks.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-mono text-xs sm:text-sm uppercase hover:bg-white hover:text-[#4a0dbc] transition-colors border-2 border-black shadow-lg shadow-[#4a0dbc]/40"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
