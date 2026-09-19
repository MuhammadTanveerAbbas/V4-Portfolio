/**
 * Single source of truth for the portfolio.
 *
 * Everything that shows project information reads from PROJECTS: the home page,
 * /work, /work/[slug], page metadata, the sitemap and the structured data.
 * Add or edit a project here and it changes everywhere.
 *
 * The content below describes software that exists. There are no invented
 * customers, revenue figures, signup counts or benchmarks.
 */

export type ProjectSlug = "clario" | "repurpose-ai" | "crivox" | "flowbook";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectStep {
  title: string;
  detail: string;
}

export interface ProjectPhase {
  phase: string;
  title: string;
  items: string[];
}

export interface ProjectDecision {
  title: string;
  detail: string;
}

export interface ProjectTool {
  name: string;
  reason: string;
}

export interface Project {
  slug: ProjectSlug;
  name: string;
  /** Plain language label used on cards and in metadata. */
  category: string;
  /** One sentence description used on cards and in metadata. */
  summary: string;
  image: ProjectImage;
  liveUrl: string;
  repoUrl: string;
  problem: string;
  whyExistingApproachesFallShort: string[];
  whatWasBuilt: string[];
  howItWorks: ProjectStep[];
  phases: ProjectPhase[];
  decisions: ProjectDecision[];
  leftOut: string[];
  lessons: string[];
  tools: ProjectTool[];
}

export const clario: Project = {
  slug: "clario",
  name: "Clario",
  category: "AI content platform",
  summary:
    "An AI platform that summarises long content, rewrites it for different platforms and answers questions about it in the user's own voice.",
  image: {
    src: "/projects/clario.png",
    alt: "Clario summariser screen showing summary modes running on a pasted transcript",
    width: 1200,
    height: 559,
  },
  liveUrl: "https://clario-hub.vercel.app",
  repoUrl: "https://github.com/MuhammadTanveerAbbas/Clario-ai",
  problem:
    "Producing long content is expensive and most of it is used once. A single video, podcast or article then has to be turned into summaries, posts, threads and newsletters by hand, which takes hours and rarely sounds like the person or brand publishing it.",
  whyExistingApproachesFallShort: [
    "Generic AI tools write text that does not sound like the person or brand publishing it.",
    "Most tools solve one job, so summaries, rewrites and drafts end up scattered across different products.",
    "Pasting content into a chat window loses context, history and any consistent structure between sessions.",
  ],
  whatWasBuilt: [
    "Summaries in ten formats, including executive brief, action items, SWOT, key quotes, sentiment and a plain language explanation.",
    "A YouTube summariser that accepts standard, short and live links and falls back across the transcripts available for a video.",
    "A remix studio that turns one piece of content into ten platform specific formats at the same time.",
    "An AI assistant that keeps conversation history and applies the selected brand voice to every answer.",
    "A brand voice library where writing samples are stored once and applied across summarising, remixing and chat.",
    "A dashboard and content calendar showing what was created and how much of the monthly allowance has been used.",
    "Accounts with email or Google sign in, monthly usage limits and subscription billing.",
  ],
  howItWorks: [
    {
      title: "Add the source material",
      detail: "Paste text, or drop in a YouTube link to pull the transcript automatically.",
    },
    {
      title: "Choose the outcome",
      detail: "Pick a summary format, a remix target, or start a conversation with the assistant.",
    },
    {
      title: "Review and adjust",
      detail: "Every result is editable, and a single format can be regenerated without losing the others.",
    },
    {
      title: "Take it away",
      detail: "Copy the result or export it as plain text or Markdown for wherever it will be published.",
    },
  ],
  phases: [
    {
      phase: "Phase 1",
      title: "Foundations",
      items: [
        "Feature architecture covering five AI workflows",
        "Database schema and per account access rules",
        "Accounts with email and Google sign in",
      ],
    },
    {
      phase: "Phase 2",
      title: "The AI features",
      items: [
        "A shared AI service handling model selection",
        "Summariser modes and the remix studio",
        "Brand voice applied consistently across chat and remix",
      ],
    },
    {
      phase: "Phase 3",
      title: "The product around it",
      items: [
        "Usage tracking and subscription limits",
        "Dashboard, content calendar and billing portal",
        "Error tracking and product analytics before launch",
      ],
    },
  ],
  decisions: [
    {
      title: "Separate instructions per output format",
      detail: "Each format has its own prompt, length limits and structure rules. That produces drafts people can actually use instead of generic text, and it is the main reason output quality holds up.",
    },
    {
      title: "One shared usage system",
      detail: "Every AI action is recorded against a single monthly allowance, so limits, plan changes and billing stay predictable for the user and for the code that gates features.",
    },
    {
      title: "Access rules enforced in the database",
      detail: "Row level security means an account can only ever read its own rows, even if a query is written incorrectly later. The rule lives with the data instead of in the interface.",
    },
    {
      title: "AI calls stay on the server",
      detail: "Keys never reach the browser, requests can be rate limited per user, and the AI provider can be swapped without touching the interface.",
    },
  ],
  leftOut: [
    "Team collaboration and shared workspaces, which need a proper permissions model rather than a quick switch.",
    "Direct publishing to social platforms, which depends on platform approvals and adds a support burden.",
    "A mobile app, because the same jobs are handled well in the browser.",
  ],
  lessons: [
    "Prompt quality per format matters more than which model is used. Generic instructions produce generic output.",
    "Usage limits have to be designed together with billing from the start, not bolted on afterwards.",
    "People edit AI output far more than expected, so editing and regeneration deserve to be first class features.",
  ],
  tools: [
    { name: "Next.js App Router", reason: "Server rendering for fast first loads and API routes in the same codebase." },
    { name: "TypeScript", reason: "Catches mistakes while building rather than after launch." },
    { name: "Supabase", reason: "Database, authentication and row level security in one place." },
    { name: "Groq running Llama models", reason: "Fast, low cost text generation for a product that makes many requests." },
    { name: "Stripe", reason: "Subscriptions, invoices and a customer billing portal without building payments from scratch." },
    { name: "Recharts", reason: "Usage charts without a heavy charting dependency." },
    { name: "Tailwind CSS and shadcn/ui", reason: "A consistent interface that stays quick to maintain." },
    { name: "Vercel", reason: "Deployment, preview builds and serverless functions with no server to look after." },
  ],
};

export const repurposeAi: Project = {
  slug: "repurpose-ai",
  name: "Repurpose AI",
  category: "Content repurposing platform",
  summary:
    "A workspace that turns one idea, transcript or video into nine platform ready drafts, and explains the strategy before the writing starts.",
  image: {
    src: "/projects/repurpose-ai.png",
    alt: "Repurpose AI workspace generating platform specific drafts from a transcript",
    width: 1200,
    height: 559,
  },
  liveUrl: "https://the-repurpose-ai.vercel.app",
  repoUrl: "https://github.com/MuhammadTanveerAbbas/Repurpose",
  problem:
    "One piece of content has to be rewritten for every platform that matters, and each platform has its own length, structure and tone. Doing that by hand takes hours, so most people either skip platforms or post the same text everywhere and get ignored.",
  whyExistingApproachesFallShort: [
    "Writing platform specific versions by hand is slow and easy to postpone.",
    "Generic AI output ignores the rules of each platform, so it has to be rewritten anyway.",
    "Most tools produce finished copy when what people actually want is a strong first draft they can edit.",
  ],
  whatWasBuilt: [
    "Four input modes: a rough idea, a transcript, a YouTube link, or a problem the audience has.",
    "A strategy step that identifies the core message, audience, tone, hook ideas and content pillars before anything is written.",
    "Nine output formats with platform rules built in, covering LinkedIn posts, X threads, short video scripts, cold email drafts, newsletter sections and more.",
    "Inline editing for every draft, plus the ability to regenerate a single format without losing the others.",
    "Four supporting tools: a format converter, a hook generator, a bio builder and a content angle finder.",
    "Saved sessions, usage limits per plan and a small usage dashboard.",
    "Accounts with email or Google sign in, with each account isolated from the others.",
  ],
  howItWorks: [
    { title: "Add the source", detail: "Paste a transcript, a video link, an idea or a customer problem." },
    { title: "Review the strategy", detail: "The platform sets out the message, audience and angles before producing drafts." },
    { title: "Generate and edit", detail: "Choose the formats you want, then rewrite each one in place." },
    { title: "Export the set", detail: "Copy everything at once or download the drafts as Markdown." },
  ],
  phases: [
    {
      phase: "Phase 1",
      title: "Inputs and accounts",
      items: [
        "YouTube transcript fetching and parsing",
        "Idea, transcript and pain point inputs",
        "Authentication and database schema",
      ],
    },
    {
      phase: "Phase 2",
      title: "Generation",
      items: [
        "Prompts for nine platform formats",
        "The strategy analysis step",
        "Inline editing and per format regeneration",
      ],
    },
    {
      phase: "Phase 3",
      title: "Supporting tools and hardening",
      items: [
        "Hook generator, bio builder, angle finder and format converter",
        "Usage limits and saved sessions",
        "Output sanitising and AI failure handling",
      ],
    },
  ],
  decisions: [
    {
      title: "Strategy before generation",
      detail: "Producing an outline first makes every later draft more consistent than asking a model for output immediately, and it gives the user something useful even if they only want the analysis.",
    },
    {
      title: "Every format keeps its own rules",
      detail: "Character limits, structure and tone conventions are part of each prompt rather than general guidance, which is what makes the output publishable.",
    },
    {
      title: "Treat AI output as untrusted text",
      detail: "All generated content is sanitised before it is rendered, and prompts are guarded against injection attempts in the source material.",
    },
    {
      title: "Server side AI calls with automatic recovery",
      detail: "The AI key stays on the server. The proxy discovers which models are available, honours rate limits, retries briefly on transient failures and then fails with a clear message instead of a silent hang.",
    },
  ],
  leftOut: [
    "Switching on paid plans, so billing is wired but not enabled yet.",
    "Direct publishing to social platforms, which depends on platform approvals.",
    "A native mobile app, since the browser covers the workflow.",
  ],
  lessons: [
    "Platform specific prompts create most of the value. The model is rarely the limiting factor.",
    "People want drafts they can edit rather than finished copy, so regeneration matters more than perfection.",
    "Handling AI service failures is part of the product, not an afterthought. Retired models and rate limits are normal events.",
  ],
  tools: [
    { name: "React with Vite", reason: "A fast single page app that is quick to build and cheap to host." },
    { name: "TypeScript", reason: "Safer refactoring and fewer runtime errors." },
    { name: "Supabase", reason: "Authentication, database and per user data isolation." },
    { name: "Groq running Llama 3.3 70B", reason: "Fast generation at a low cost per request." },
    { name: "TanStack Query", reason: "Predictable data loading and caching without custom state handling." },
    { name: "Stripe, wired but not enabled", reason: "Subscription billing prepared for launch." },
    { name: "Vercel serverless functions", reason: "Keeps the AI key and payment secrets on the server." },
    { name: "DOMPurify", reason: "Sanitises AI output before it is displayed." },
  ],
};

export const crivox: Project = {
  slug: "crivox",
  name: "Crivox",
  category: "Social engagement tool",
  summary:
    "An assistant that writes thoughtful, platform aware comments for people who need to engage online every day without sounding automated.",
  image: {
    src: "/projects/crivox.png",
    alt: "Crivox comment generator showing tone options and generated comment variations",
    width: 1200,
    height: 559,
  },
  liveUrl: "https://crivox.vercel.app",
  repoUrl: "https://github.com/MuhammadTanveerAbbas/Crivox",
  problem:
    "Posting consistently is only half of social media. Commenting thoughtfully on other people's posts is what builds visibility and relationships, but writing good comments at volume is slow, so most people either skip it or repeat the same short replies.",
  whyExistingApproachesFallShort: [
    "Generic AI replies sound templated and often miss the point of the original post.",
    "Every platform has its own tone and etiquette, and one style does not fit all of them.",
    "Managing comments across many posts by hand means nothing gets tracked or scheduled.",
  ],
  whatWasBuilt: [
    "Comment generation from pasted text, a shared link, or an uploaded screenshot.",
    "Up to five variations for each post, across eight tone styles.",
    "Bulk generation for several posts at once, with CSV export.",
    "A queue for scheduling comments, tracking them and marking them as posted.",
    "A template library with built in presets plus custom templates.",
    "An analytics view covering activity trends, tone distribution and a breakdown by platform.",
    "Saved history with search, filters and favourites so good comments can be reused.",
    "Shareable result links that open without requiring a login.",
    "A voice profile that stores writing samples so output matches the user's own style.",
  ],
  howItWorks: [
    { title: "Add the post", detail: "Paste the text, share a link, or upload a screenshot of the post." },
    { title: "Choose a tone", detail: "Pick one of eight tones and, if needed, a language for the reply." },
    { title: "Pick a variation", detail: "Review up to five options and keep the one that fits the conversation." },
    { title: "Track it", detail: "Add the comment to the queue and mark it as posted when it goes live." },
  ],
  phases: [
    {
      phase: "Phase 1",
      title: "Core generation",
      items: [
        "Text, link and image inputs",
        "Prompt set covering eight tones",
        "Authentication and database schema",
      ],
    },
    {
      phase: "Phase 2",
      title: "Working with comments",
      items: [
        "Five variations per post",
        "Queue, history and template library",
        "Shareable links that need no account",
      ],
    },
    {
      phase: "Phase 3",
      title: "Reporting and reliability",
      items: [
        "Analytics for trends, tones and platforms",
        "Bulk generation with CSV export",
        "Model discovery, retries and rate limit handling",
      ],
    },
  ],
  decisions: [
    {
      title: "Read screenshots instead of asking for a copy and paste",
      detail: "A lot of engagement happens on a phone, where copying a post is awkward. Accepting an image directly removes the most common reason people abandon the tool.",
    },
    {
      title: "Reliability handling around the AI service",
      detail: "The backend discovers which models are currently available, respects rate limits, and retries briefly on transient failures before reporting a clear error. Models get retired, so this is normal operating behaviour rather than an edge case.",
    },
    {
      title: "Secrets stay server side",
      detail: "The AI key lives in a server function and never reaches the browser, so it cannot be extracted from the page.",
    },
    {
      title: "Sharing without an account",
      detail: "Public result links let someone see the quality of the output before signing up, which makes the tool easier to recommend to a colleague.",
    },
  ],
  leftOut: [
    "Posting comments automatically, which depends on platform access and carries real risk for the user's account.",
    "A browser extension, because the web app already covers the main workflow.",
    "Sentiment analysis, which overlaps with choosing a tone.",
  ],
  lessons: [
    "Platform conventions are unwritten rules. Following them is what makes a comment believable.",
    "People want options rather than one perfect answer, because the right reply depends on the conversation.",
    "Features that remove a login step get used far more than expected.",
  ],
  tools: [
    { name: "React with Vite", reason: "A fast single page app for a tool that is used in short, frequent sessions." },
    { name: "TypeScript", reason: "Fewer mistakes in the parts that handle user input and AI responses." },
    { name: "Supabase", reason: "Accounts, database and per user data isolation in one platform." },
    { name: "Groq running Llama models", reason: "Fast generation, including reading text from screenshots." },
    { name: "Serverless function for AI calls", reason: "Keeps the AI key on the server and centralises retry logic." },
    { name: "Recharts", reason: "Analytics views without a heavy charting library." },
    { name: "Tailwind CSS and shadcn/ui", reason: "A consistent interface that is quick to extend." },
  ],
};

export const flowbook: Project = {
  slug: "flowbook",
  name: "Flowbook",
  category: "Freelance finance software",
  summary:
    "A finance workspace for freelancers and independent professionals: income, expenses, invoices, clients, projects and tax estimates in one place.",
  image: {
    src: "/projects/flowbook.png",
    alt: "Flowbook dashboard showing income trends, expense breakdown and recent invoices",
    width: 1200,
    height: 559,
  },
  liveUrl: "https://flowbooks.vercel.app",
  repoUrl: "https://github.com/MuhammadTanveerAbbas/flowbooks",
  problem:
    "Independent professionals run their finances across spreadsheets, notes and a separate invoicing tool. Income, expenses, invoices and tax estimates rarely live in the same place, so it is hard to answer simple questions like what was earned this quarter, what is still unpaid, and how much should be set aside.",
  whyExistingApproachesFallShort: [
    "Spreadsheets break as soon as there are several clients, projects and unusual billing cycles.",
    "Accounting software is built for companies with staff and bookkeepers, which is far more than one person billing a few clients needs.",
    "Invoicing tools usually stop at invoices and leave income tracking and tax estimates to the user.",
  ],
  whatWasBuilt: [
    "A dashboard with smoothed income tracking, expense breakdowns and six month charts.",
    "Income records linked to clients, projects and payment status.",
    "Invoicing where marking an invoice as paid creates the matching income record.",
    "Expense tracking with categories and spending patterns.",
    "A lightweight client and project list with budgets and status.",
    "A tax estimator that produces quarterly estimates from a configurable saving percentage.",
    "A three step setup covering country, income goal and first client.",
    "Sortable and searchable tables with one click CSV export for income, expenses and invoices.",
    "Accounts with email or Google sign in, with each account isolated from the others.",
  ],
  howItWorks: [
    { title: "Set up the basics", detail: "Choose a country, set an income goal and add the first client." },
    { title: "Record the work", detail: "Log income and link it to a client, a project or an invoice." },
    { title: "Invoice and track", detail: "Create invoices, mark them as paid, and let the income record update itself." },
    { title: "Watch the numbers", detail: "Use the dashboard, charts and tax estimate to see where things stand." },
  ],
  phases: [
    {
      phase: "Phase 1",
      title: "Data model and accounts",
      items: [
        "Schema covering profiles, clients, projects, invoices, income and expenses",
        "Access rules so each account only sees its own records",
        "Email and Google sign in",
      ],
    },
    {
      phase: "Phase 2",
      title: "Money in and money out",
      items: [
        "Income, expense and invoice records",
        "Invoices that create income when marked as paid",
        "Clients and projects with budgets and status",
      ],
    },
    {
      phase: "Phase 3",
      title: "Reporting and polish",
      items: [
        "Dashboard charts and a rolling income average",
        "Quarterly tax estimator",
        "Sorting, live search, CSV export and the guided setup",
      ],
    },
  ],
  decisions: [
    {
      title: "Marking an invoice as paid creates the income record",
      detail: "Invoices and income are the same money, so entering them twice guarantees they drift apart. Letting the invoice create the income record removes a whole category of mistakes.",
    },
    {
      title: "A rolling average instead of raw monthly totals",
      detail: "Freelance income is uneven. A three month rolling average shows the real trend instead of a line that jumps around with one large or quiet month.",
    },
    {
      title: "Access rules in the database",
      detail: "Row level security means an account can only read its own financial records, enforced by the database rather than by the interface.",
    },
    {
      title: "Exports on every list",
      detail: "Being able to take your own data out matters, so CSV export is built into the main tables rather than hidden behind a paid tier.",
    },
  ],
  leftOut: [
    "Bank connections, which add significant regulatory and security weight beyond a first release.",
    "Multi user company accounts, because the product is built for one person running their own books.",
    "A native mobile app, since the browser version already works on a phone.",
  ],
  lessons: [
    "Financial calculations need edge case testing, including month end dates, leap years and time zones.",
    "People value being able to export their own data more than expected, and it builds trust in the numbers.",
    "A short guided setup removes most of the confusion in the first session.",
  ],
  tools: [
    { name: "React with Vite", reason: "A responsive dashboard that stays fast as tables grow." },
    { name: "TypeScript", reason: "Financial logic benefits from strict types and checked calculations." },
    { name: "Supabase", reason: "Accounts, database and row level security in one platform." },
    { name: "TanStack Query", reason: "Reliable loading and updating across many related records." },
    { name: "TanStack Table", reason: "Sorting, filtering and paging for financial tables without custom code." },
    { name: "Recharts", reason: "Income and expense charts that stay lightweight." },
    { name: "Tailwind CSS and shadcn/ui", reason: "A consistent interface built from reusable parts." },
    { name: "Vitest", reason: "Unit tests for the calculations where mistakes are expensive." },
  ],
};

/** The portfolio, in display order. */
export const PROJECTS: Project[] = [clario, repurposeAi, crivox, flowbook];

export const PROJECT_SLUGS: ProjectSlug[] = PROJECTS.map((project) => project.slug);

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
