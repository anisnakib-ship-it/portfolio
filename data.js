// All the portfolio content lives here. Edit this file; main.js reads it.
// Projects marked `sample: true` are placeholders showing the layout.
// Replace them with real ones (or delete them) before publishing.

window.PORTFOLIO = {
  name: "Anis",
  status: "Open for projects",

  roles: ["Software Developer", "AI & Automation Specialist", "Business Engineer"],

  intro: "I write software, put AI to work and automate the boring parts of a business.",

  // Chapter 2: one panel per craft. `color` is the panel background, `accent` (optional) the verb colour.
  crafts: [
    {
      verb: "build",
      word: "SOFTWARE",
      line: "Web apps, internal tools and APIs, shaped around how a team actually works.",
      visual: "code",
      color: "#b8601a",
      accent: "#15120e"
    },
    {
      verb: "automate",
      word: "WORKFLOWS",
      line: "AI agents and integrations that take the copy-paste out of everyone's day.",
      visual: "flow",
      color: "#5a3357"
    },
    {
      verb: "engineer",
      word: "BUSINESSES",
      line: "I start from the process and the numbers, then decide what is worth building.",
      visual: "chart",
      color: "#2e4d6b"
    }
  ],

  beliefs: [
    "If a person does it twice, a machine should do it the third time.",
    "Software is only as good as the business it moves.",
    "Automate the boring parts, so people can do the interesting ones."
  ],

  about: [
    "My work sits where code meets operations. I build the software, connect it to AI models and the tools a team already uses, and automate the workflows that eat up hours every week.",
    "The business engineering side keeps it grounded: I map the process first, then decide what to build, what to automate, and what should stay manual."
  ],

  skills: [
    { group: "Development", items: ["JavaScript / TypeScript", "Python", "Web apps & APIs", "Databases & SQL"] },
    { group: "AI", items: ["LLM integration", "AI agents & tool use", "Prompt engineering", "RAG & document AI"] },
    { group: "Automation", items: ["n8n / Make / Zapier", "APIs & webhooks", "Scraping & data pipelines"] },
    { group: "Business", items: ["Process redesign", "ROI & cost modelling", "Project management"] }
  ],

  services: [
    { name: "Custom software", desc: "Web apps, internal tools and APIs built around how your team actually works." },
    { name: "AI integration", desc: "Assistants, agents and document processing wired into your existing systems." },
    { name: "Workflow automation", desc: "Connect your tools and remove the copy-paste work between them." },
    { name: "Process consulting", desc: "Map the process, find the bottlenecks, and decide what is worth automating." }
  ],

  // `visual` picks the little illustration on the card: "chat", "doc" or "chart".
  projects: [
    {
      sample: true,
      title: "AI Lead Qualification Agent",
      year: "2026",
      summary: "Scores inbound leads and drafts the first reply automatically.",
      tags: ["AI", "Automation", "Python"],
      visual: "chat",
      href: "#"
    },
    {
      sample: true,
      title: "Invoice Processing Pipeline",
      year: "2025",
      summary: "Reads invoices from email, extracts the fields with AI and posts them to accounting.",
      tags: ["n8n", "Document AI", "APIs"],
      visual: "doc",
      href: "#"
    },
    {
      sample: true,
      title: "Operations Dashboard",
      year: "2025",
      summary: "Live KPIs for a small business, pulled from five different tools.",
      tags: ["TypeScript", "Dashboards", "KPIs"],
      visual: "chart",
      href: "#"
    }
  ],

  // Replace these with your real links before publishing.
  email: "you@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/your-handle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" }
  ]
};
