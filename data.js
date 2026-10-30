// All the portfolio content lives here. Edit this file; main.js reads it.

window.PORTFOLIO = {
  name: "Anis",
  status: "Open for projects",

  roles: ["Software Developer", "AI & Automation Specialist", "Business Engineer"],

  intro: "I build the software that does the boring part of the job, so people can get on with the rest.",

  // Chapter 2: one panel per craft. `color` is the panel background, `accent` (optional) the verb colour.
  crafts: [
    {
      verb: "build",
      word: "SOFTWARE",
      line: "Desktop ERPs that accountants actually like, web platforms in Turkish and English, and the APIs that hold them together.",
      visual: "code",
      color: "#b8601a",
      accent: "#15120e"
    },
    {
      verb: "automate",
      word: "WORKFLOWS",
      line: "A 200-page report that used to take days now starts with one form and one click. That's the kind of work I like.",
      visual: "flow",
      color: "#5a3357"
    },
    {
      verb: "engineer",
      word: "BUSINESSES",
      line: "I start with the process and the money, then decide what's worth building and what should stay manual.",
      visual: "chart",
      color: "#2e4d6b"
    }
  ],

  beliefs: [
    "If a person does it twice, a machine should do it the third time.",
    "The best automation is invisible. People just notice they go home earlier.",
    "AI drafts, people approve. Everything I ship keeps a human in the loop."
  ],

  // Chapter 4: what the machine turns into what, shown as items pass through it.
  machine: [
    ["supplier_invoice.pdf", "journal entry, tagged to a project"],
    ["HS code + 6 countries", "200-page export report"],
    ["electricity_bill.jpg", "carbon emission line"],
    ["client intake form", "13-section grant proposal"],
    ["EUR invoice", "TRY at that day's central bank rate"],
    ["fuel receipts", "Scope 1 emissions"],
    ["competitor list", "market comparison tables"]
  ],

  about: [
    "I sit where code meets operations. Most of my projects start the same way: someone shows me a process held together by spreadsheets, copy-paste and good intentions.",
    "Then I map it, find the steps a machine should own, and build the software around the people who are left. Usually that means a real app, connected to the tools the team already uses, with AI doing the first draft and a person giving the final yes."
  ],

  // Scrolls past as a band in the About chapter.
  stack: ["Python", "FastAPI", "C# / .NET 8", "WPF", "PostgreSQL", "SQLite", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Claude API", "Ollama", "OCR", "Playwright", "Celery", "Docker", "World Bank API", "Google Workspace APIs", "monday.com", "n8n", "Cloudflare"],

  skills: [
    { group: "Development", items: ["Python & FastAPI", "C# / .NET desktop apps", "JavaScript, React, Next.js", "PostgreSQL & SQLite"] },
    { group: "AI", items: ["Claude & LLM integration", "Document extraction & OCR", "Structured output pipelines", "Local models with Ollama"] },
    { group: "Automation", items: ["Browser automation (Playwright)", "API integrations & webhooks", "Background job queues", "n8n / Make / Zapier"] },
    { group: "Business", items: ["Process mapping & redesign", "Accounting & job costing", "Carbon accounting (ISO 14064-1)", "ROI & cost modelling"] }
  ],

  services: [
    { name: "Custom software", desc: "Web and desktop apps built around how your team actually works." },
    { name: "AI integration", desc: "Document extraction, drafting and assistants wired into the systems you already use." },
    { name: "Workflow automation", desc: "Connect your tools and remove the copy-paste between them." },
    { name: "Process consulting", desc: "Map the process, find the bottlenecks, and decide what's worth automating." }
  ],

  // `visual` picks the card illustration: "report", "ledger", "carbon" or "proposal".
  // Leave `href` empty to show a card without a link.
  projects: [
    {
      title: "Export Report Engine",
      year: "2026",
      kind: "Automation & AI",
      summary: "Turns a company name, an HS code and a list of target countries into a full export strategy report for a consulting team's clients.",
      before: "A consultant spent several days assembling each ~200-page report by hand.",
      after: "One form, nine automated steps: trade data, World Bank figures, competitors, buyer lists, then Claude writes the narrative. Out come HTML, PDF and Word.",
      tags: ["Python", "FastAPI", "Playwright", "Claude", "Next.js"],
      visual: "report",
      href: ""
    },
    {
      title: "Project-Aware Accounting & ERP",
      year: "2026",
      kind: "Software",
      summary: "A custom accounting and ERP desktop app for an industrial fabrication company: steel construction, pressure vessels, turnkey installations.",
      before: "Off-the-shelf accounting couldn't follow costs across months-long fabrication projects in three currencies.",
      after: "Every journal line is tagged to a project, so job costing falls out automatically, with TRY, EUR and USD at daily central bank rates.",
      tags: ["C# / .NET 8", "WPF", "PostgreSQL", "Clean architecture"],
      visual: "ledger",
      href: ""
    },
    {
      title: "Carbon Accounting Platform",
      year: "2026",
      kind: "Climate tech & AI",
      summary: "A web platform that builds a company's greenhouse-gas inventory from its own documents, with reports structured around ISO 14064-1.",
      before: "Invoices, fuel receipts and bills had to be read and typed into emission spreadsheets line by line.",
      after: "Upload the documents: OCR and a local language model draft the entries, a person approves them, and the platform produces HTML, Word and Excel reports in Turkish or English.",
      tags: ["Python", "FastAPI", "OCR", "Ollama", "TR / EN"],
      visual: "carbon",
      href: ""
    },
    {
      title: "Grant Proposal Writer",
      year: "2026",
      kind: "AI workflow",
      summary: "A web app that drafts TÜBİTAK 1831 grant proposals for carbon and water-efficiency projects.",
      before: "Every proposal meant rewriting the same 13 sections from scratch from a client questionnaire.",
      after: "Fill one intake form. An AI drafts all 13 sections from a curated writing guide, and the result lands as a Google Doc in the team's inbox.",
      tags: ["Node.js", "React", "Google Docs & Gmail APIs", "Knowledge graph"],
      visual: "proposal",
      href: ""
    }
  ],

  // Replace these with your real links before publishing.
  email: "you@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/anisnakib-ship-it" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" }
  ]
};
