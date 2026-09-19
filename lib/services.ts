/**
 * Single source of truth for the services offered.
 * Used by the home page services section and the /services page, and by the
 * contact form so a "service" link from a card actually preselects that service.
 */

export interface Service {
  /** Query value used in links such as /contact?service=business-software */
  slug: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "business-software",
    number: "01",
    title: "Business Software",
    summary:
      "Software built around the way your business already works, covering the jobs that spreadsheets and disconnected tools cannot handle.",
    deliverables: ["Internal tools", "Dashboards", "Reporting", "Roles and permissions"],
  },
  {
    slug: "customer-applications",
    number: "02",
    title: "Customer Applications",
    summary:
      "Portals and products your customers log into, with accounts, payments and an experience that feels finished.",
    deliverables: ["Customer portals", "Accounts and billing", "Self service", "Mobile friendly"],
  },
  {
    slug: "workflow-automation",
    number: "03",
    title: "Workflow and Automation",
    summary:
      "Software that takes over the manual steps, the copy and paste work and the follow ups that slow a team down.",
    deliverables: ["Process automation", "Integrations", "Notifications", "Data clean up"],
  },
  {
    slug: "ai-assisted-products",
    number: "04",
    title: "AI Assisted Products",
    summary:
      "AI used where it genuinely saves time, such as summarising, drafting, classifying or answering questions from your own content.",
    deliverables: ["Summarisation", "Drafting", "Search and answers", "Practical guardrails"],
  },
];

export function getService(slug: string | undefined | null): Service | undefined {
  if (!slug) return undefined;
  return SERVICES.find((service) => service.slug === slug);
}