import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Database,
  Headphones,
  LineChart,
  Plug,
  Settings2,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/microsoft-dynamics-365")({
  head: () => ({
    meta: [
      {
        title: "Microsoft Dynamics 365 Consulting | Business Genie Consulting",
      },
      {
        name: "description",
        content:
          "Microsoft Dynamics 365 consulting, implementation, CRM, finance, supply chain, Power BI, automation, integrations, migration, training and support.",
      },
      {
        property: "og:title",
        content:
          "Microsoft Dynamics 365 Consulting | Business Genie Consulting",
      },
      {
        property: "og:description",
        content:
          "Connect sales, customer service, finance and operations with a secure Microsoft Dynamics 365 solution built around your business.",
      },
    ],
  }),
  component: MicrosoftDynamics365,
});

const CYAN = "#00D5E7";
const BLUE = "#2F7CFF";
const PURPLE = "#7B61FF";

const modules: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Users,
    title: "Sales & CRM",
    description:
      "Capture every lead, manage opportunities, create quotations and keep follow-ups moving through one clear sales pipeline.",
  },
  {
    icon: Headphones,
    title: "Customer Service",
    description:
      "Manage customer cases, service requests, SLAs and communication history from one connected service workspace.",
  },
  {
    icon: CircleDollarSign,
    title: "Finance & Operations",
    description:
      "Gain better control over invoices, expenses, approvals, budgets and everyday financial operations with accurate, connected data.",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description:
      "Coordinate purchasing, suppliers, inventory, warehousing, order fulfilment and delivery through streamlined workflows.",
  },
  {
    icon: LineChart,
    title: "Power BI Reporting",
    description:
      "Transform business data into live dashboards, executive reports and practical insights that support faster decisions.",
  },
  {
    icon: Bot,
    title: "Automation & AI",
    description:
      "Automate approvals, reminders, task assignments and repetitive processes so your teams can focus on higher-value work.",
  },
];

const implementationSteps = [
  {
    title: "Business Discovery",
    description:
      "We assess your current systems, teams, data, reporting needs and operational challenges to define clear priorities.",
  },
  {
    title: "Solution Blueprint",
    description:
      "We create a practical solution blueprint covering modules, permissions, workflows, dashboards and the rollout roadmap.",
  },
  {
    title: "Configuration & Migration",
    description:
      "We configure the platform, migrate essential data and integrate the tools your business already depends on.",
  },
  {
    title: "Training & Go Live",
    description:
      "Your team validates real processes, receives hands-on training and goes live with reliable post-launch support.",
  },
];

const benefits = [
  "One connected source of business data",
  "Faster lead response and sales follow-up",
  "Clearer finance and operational visibility",
  "Role-based access and secure permissions",
  "Less duplicate work across departments",
  "Real-time dashboards for better decisions",
];

const faqs = [
  {
    question: "Which Dynamics 365 modules can you implement?",
    answer:
      "We can implement Dynamics 365 Sales, Customer Service, Finance, Supply Chain, Field Service, Project Operations, Power BI reporting and workflow automation based on your requirements.",
  },
  {
    question: "Can you migrate data from our current system?",
    answer:
      "Yes. We can clean and migrate customer records, products, vendors, opportunities, invoices, service history and other important business data.",
  },
  {
    question: "Can Dynamics 365 connect with our website and other tools?",
    answer:
      "Yes. Dynamics 365 can connect with website forms, Microsoft 365, email, payment tools, accounting systems, Power BI and many third-party platforms.",
  },
  {
    question: "Do you provide training and ongoing support?",
    answer:
      "Yes. We provide user training, admin guidance, testing, go-live support and ongoing improvements for workflows, reports and integrations.",
  },
];


type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEYS = [
  "theme",
  "color-theme",
  "mode",
  "ui-theme",
  "themeMode",
  "vite-ui-theme",
  "chakra-ui-color-mode",
  "next-theme",
  "preferred-theme",
];

function parseCssRgb(
  value: string,
): { r: number; g: number; b: number; a: number } | null {
  const match = value.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;

  const parts = match[1]
    .split(",")
    .map((part) => Number(part.trim().replace("/", "")));

  if (parts.length < 3 || parts.some((part) => Number.isNaN(part))) {
    return null;
  }

  return {
    r: parts[0],
    g: parts[1],
    b: parts[2],
    a: parts.length >= 4 ? parts[3] : 1,
  };
}

function isDarkCssColor(value: string): boolean {
  const rgb = parseCssRgb(value);
  if (!rgb || rgb.a < 0.1) return false;

  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness < 90;
}

function headerLooksDark(): boolean {
  if (typeof window === "undefined") return false;

  const selectors = [
    "header",
    "nav",
    "[data-header]",
    ".site-header",
    ".navbar",
    ".main-header",
  ];

  const elements = selectors
    .flatMap((selector) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector)),
    )
    .slice(0, 12);

  return elements.some((element) => {
    const classText = String(element.className || "").toLowerCase();

    if (
      classText.includes("bg-black") ||
      classText.includes("bg-[#000") ||
      classText.includes("bg-[#030303") ||
      classText.includes("bg-[#050505") ||
      classText.includes("dark") ||
      classText.includes("night")
    ) {
      return true;
    }

    const style = window.getComputedStyle(element);

    return (
      isDarkCssColor(style.backgroundColor) ||
      isDarkCssColor(style.borderColor)
    );
  });
}

function readDynamicsThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const html = document.documentElement;
  const body = document.body;

  const classText = `${html.className} ${body.className}`.toLowerCase();

  const attrText = [
    html.getAttribute("data-theme"),
    html.getAttribute("data-mode"),
    html.getAttribute("data-color-mode"),
    html.getAttribute("data-bs-theme"),
    body.getAttribute("data-theme"),
    body.getAttribute("data-mode"),
    body.getAttribute("data-color-mode"),
    body.getAttribute("data-bs-theme"),
    document.querySelector("#root")?.getAttribute("class"),
    document.querySelector("#root")?.getAttribute("data-theme"),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  let storageText = "";

  try {
    storageText = THEME_STORAGE_KEYS
      .map((key) => window.localStorage.getItem(key) || "")
      .join(" ")
      .toLowerCase();
  } catch {
    storageText = "";
  }

  const themeText = `${classText} ${attrText} ${storageText}`;

  // Same working approach as the Odoo page:
  // read the real header background in case the global class is on another wrapper.
  if (headerLooksDark()) return "dark";

  if (/\b(dark|night|black)\b/.test(themeText)) return "dark";
  if (/\b(light|day|off-white|offwhite)\b/.test(themeText)) return "light";

  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function useDynamicsThemeMode(): ThemeMode {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const updateMode = () => {
      setMode(readDynamicsThemeMode());
    };

    updateMode();

    const observer = new MutationObserver(updateMode);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [
        "class",
        "style",
        "data-theme",
        "data-mode",
        "data-color-mode",
        "data-bs-theme",
      ],
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: [
        "class",
        "style",
        "data-theme",
        "data-mode",
        "data-color-mode",
        "data-bs-theme",
      ],
    });

    const onStorage = () => updateMode();
    const onClick = () => window.setTimeout(updateMode, 0);
    const interval = window.setInterval(updateMode, 250);
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");

    window.addEventListener("storage", onStorage);
    window.addEventListener("click", onClick, true);
    media?.addEventListener?.("change", updateMode);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("click", onClick, true);
      media?.removeEventListener?.("change", updateMode);
    };
  }, []);

  return mode;
}

function MicrosoftDynamics365() {
  const dynamicsTheme = useDynamicsThemeMode();

  return (
    <SiteLayout>
      <div
        className={`d365-theme-wrap ${dynamicsTheme === "dark" ? "dark" : ""}`}
        data-d365-theme={dynamicsTheme}
      >
        <DynamicsThemeStyles />

        <main className="d365-page min-h-screen overflow-hidden bg-[var(--d-bg)] text-[var(--d-text)] transition-colors duration-300 selection:bg-cyan-300 selection:text-[#021113]">
          <HeroSection />
          <TrustedStrip />
          <ModulesSection />
          <BusinessControlSection />
          <ImplementationSection />
          <BenefitsSection />
          <FaqSection />
          <CtaSection />
        </main>
      </div>
    </SiteLayout>
  );
}

function DynamicsThemeStyles() {
  return (
    <style>{`
      /*
       * Odoo-style day/night behavior with the original
       * Microsoft Dynamics cyan, blue and purple palette preserved.
       */
      .d365-theme-wrap {
        color-scheme: light;
        background: #f7f8fb;
      }

      .d365-theme-wrap[data-d365-theme="dark"] {
        color-scheme: dark;
        background: #030406;
      }

      .d365-theme-wrap[data-d365-theme="light"] .d365-page {
        --d-bg: #f7f8fb;
        --d-section-alt: #edf1f6;
        --d-card-solid: #ffffff;
        --d-card-strong: rgba(255, 255, 255, 0.97);
        --d-surface: rgba(255, 255, 255, 0.82);
        --d-text: #1f2d3d;
        --d-title: #111827;
        --d-body: #425466;
        --d-muted: #6b7c90;
        --d-border: rgba(47, 124, 255, 0.14);
        --d-border-strong: rgba(47, 124, 255, 0.24);
        --d-overlay-strong: rgba(247, 248, 251, 0.92);
        --d-card-gradient:
          linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.98),
            rgba(245, 248, 255, 0.96)
          );
        --d-shadow: 0 18px 55px rgba(47, 76, 120, 0.10);
        background: #f7f8fb !important;
        color: #1f2d3d !important;
      }

      .d365-theme-wrap[data-d365-theme="dark"] .d365-page {
        --d-bg: #030406;
        --d-section-alt: #080b10;
        --d-card-solid: #0d141c;
        --d-card-strong: rgba(8, 16, 24, 0.96);
        --d-surface: rgba(255, 255, 255, 0.045);
        --d-text: #f5fbfc;
        --d-title: #ffffff;
        --d-body: #cbd5e1;
        --d-muted: #94a3b8;
        --d-border: rgba(255, 255, 255, 0.10);
        --d-border-strong: rgba(255, 255, 255, 0.16);
        --d-overlay-strong: rgba(3, 4, 6, 0.93);
        --d-card-gradient:
          linear-gradient(
            145deg,
            rgba(10, 24, 29, 0.96),
            rgba(3, 10, 13, 0.96)
          );
        --d-shadow: 0 24px 80px rgba(0, 0, 0, 0.48);
        background: #030406 !important;
        color: #f5fbfc !important;
      }

      .d365-container {
        width: min(1180px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .d365-grid {
        background-color: var(--d-bg);
        background-image:
          linear-gradient(rgba(0, 213, 231, 0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(47, 124, 255, 0.055) 1px, transparent 1px);
        background-size: 72px 72px;
      }

      .d365-card {
        background: var(--d-card-gradient);
        border: 1px solid var(--d-border);
        box-shadow: var(--d-shadow);
        backdrop-filter: blur(18px);
      }

      .d365-theme-wrap[data-d365-theme="light"] .d365-card:hover {
        border-color: rgba(47, 124, 255, 0.34);
        box-shadow: 0 24px 70px rgba(47, 124, 255, 0.12);
      }

      .d365-theme-wrap[data-d365-theme="dark"] .d365-card:hover {
        border-color: rgba(0, 213, 231, 0.42);
        box-shadow: 0 28px 90px rgba(0, 213, 231, 0.10);
      }

      .d365-theme-wrap[data-d365-theme="light"] .d365-hero-overlay {
        background:
          linear-gradient(
            90deg,
            #f7f8fb 5%,
            rgba(247, 248, 251, 0.97) 45%,
            rgba(238, 244, 255, 0.80) 100%
          ) !important;
      }

      .d365-theme-wrap[data-d365-theme="dark"] .d365-hero-overlay {
        background:
          linear-gradient(
            90deg,
            #030406 5%,
            rgba(3, 4, 6, 0.97) 45%,
            rgba(3, 4, 6, 0.76) 100%
          ) !important;
      }

      .d365-theme-wrap[data-d365-theme="light"] img {
        filter: brightness(0.96) saturate(0.94);
      }

      .d365-theme-wrap[data-d365-theme="dark"] img {
        filter: brightness(0.72) saturate(0.88) contrast(1.06);
      }

      .d365-page,
      .d365-page section,
      .d365-page article,
      .d365-page div,
      .d365-page button,
      .d365-page a,
      .d365-page h1,
      .d365-page h2,
      .d365-page h3,
      .d365-page p {
        transition:
          background-color 0.3s ease,
          border-color 0.3s ease,
          color 0.3s ease,
          box-shadow 0.3s ease;
      }
    `}</style>
  );
}

function HeroSection() {
  return (
    <section className="d365-grid relative isolate min-h-[90vh] overflow-hidden pt-32 pb-20">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=88"
        alt="Business analytics dashboard"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-20"
      />
      <div className="d365-hero-overlay absolute inset-0 -z-20" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 28, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-12rem] top-20 -z-10 h-[32rem] w-[32rem] rounded-full bg-cyan-400/15 blur-[150px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -24, 0], y: [0, 20, 0], scale: [1.06, 1, 1.06] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8rem] bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-600/15 blur-[150px]"
      />

      <div className="d365-container grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Microsoft Dynamics 365 Consulting
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold text-[var(--d-title)] leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            Connect your entire business with
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(120deg, ${CYAN}, ${BLUE}, ${PURPLE})`,
              }}
            >
              Microsoft  Bussiness Centeral
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--d-body)] sm:text-lg">
            Bring sales, customer service, finance, supply chain and reporting
            into one secure platform designed around the way your business
            actually works.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-semibold text-[#031013] shadow-[0_18px_50px_rgba(0,213,231,.25)] transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--d-border-strong)] bg-[var(--d-surface)] px-6 py-3.5 font-semibold text-[var(--d-title)] transition hover:border-cyan-300/40 hover:bg-cyan-300/5"
            >
              Explore Solutions
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["CRM + ERP", "Connected platform"],
              ["Power BI", "Real-time reporting"],
              ["Secure Cloud", "Scalable operations"],
            ].map(([title, label]) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--d-border)] bg-[var(--d-surface)] p-4 backdrop-blur-xl"
              >
                <div className="font-semibold text-[var(--d-title)]">{title}</div>
                <div className="mt-1 text-xs text-[var(--d-muted)]">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className="relative"
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  const metrics = [
    { label: "Sales Pipeline", value: "$84K", icon: Users },
    { label: "Open Cases", value: "26", icon: Headphones },
    { label: "Orders", value: "312", icon: Truck },
    { label: "Automation", value: "94%", icon: Bot },
  ];

  return (
    <div className="d365-card relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
      <div className="absolute right-[-7rem] top-[-7rem] h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px]" />

      <div className="relative">
        <div className="flex items-center justify-between border-b border-[var(--d-border)] pb-5">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--d-muted)]">
              Dynamics 365
            </div>
            <div className="mt-1 text-xl font-semibold">Executive Overview</div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-300" /> Live
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="rounded-2xl border border-[var(--d-border)] bg-[var(--d-surface)] p-4"
              >
                <Icon className="h-5 w-5 text-cyan-300" />
                <div className="mt-5 text-2xl font-semibold">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs text-[var(--d-muted)]">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl border border-[var(--d-border)] bg-[var(--d-surface)] p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--d-muted)]">
                Revenue Forecast
              </div>
              <div className="mt-1 font-semibold">Pipeline performance</div>
            </div>
            <BarChart3 className="h-5 w-5 text-cyan-300" />
          </div>
          <div className="mt-6 flex h-40 items-end gap-2">
            {[48, 64, 45, 78, 58, 88, 70, 96, 76, 90].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.75 }}
                className="flex-1 rounded-t-lg"
                style={{
                  background: `linear-gradient(180deg, ${CYAN}, ${BLUE})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustedStrip() {
  return (
    <section className="border-y border-[var(--d-border)] bg-[var(--d-section-alt)] py-6">
      <div className="d365-container flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-[var(--d-muted)]">
        {[
          "CRM",
          "Finance",
          "Supply Chain",
          "Customer Service",
          "Power BI",
          "Automation",
        ].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="h-4 w-4 text-cyan-300" />
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(0,213,231,.07),transparent_35%)]" />
      <div className="d365-container">
        <SectionHeading
          eyebrow="Core Solutions"
          title="The right Dynamics 365 tools for every department"
          description="Start with the Dynamics 365 capabilities your business needs today, then scale the platform as your teams, processes and reporting requirements evolve."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.article
                key={module.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                whileHover={{ y: -7 }}
                className="d365-card group rounded-3xl p-6 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                  transition={{ duration: 0.45 }}
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-[#031013]"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 + 0.12, duration: 0.4 }}
                  className="text-xl font-semibold"
                >
                  {module.title}
                </motion.h3>
                <p className="mt-3 leading-7 text-[var(--d-muted)]">
                  {module.description}
                </p>
                <div className="mt-6 text-sm font-semibold text-cyan-300 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Built around your workflow
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BusinessControlSection() {
  return (
    <section className="py-24">
      <div className="d365-container grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2rem] border border-[var(--d-border)]"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=88"
            alt="Business team reviewing Microsoft Dynamics 365 strategy"
            className="h-[560px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020608] via-[#020608]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="d365-card rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300 text-[#031013]">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">
                    Connected business process
                  </div>
                  <div className="mt-1 text-sm text-[var(--d-muted)]">
                    Lead → Sale → Invoice → Service → Report
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeading
            eyebrow="Connected Operations"
            title="Bring every department together with one complete business view"
            description="Dynamics 365 connects customer, financial and operational data so every team can work with the right information while management gains a reliable view of the entire business."
            align="left"
          />

          <div className="mt-8 space-y-4">
            {[
              {
                icon: Database,
                title: "Centralized Data",
                text: "Keep customers, sales, service and operational records in one structured system.",
              },
              {
                icon: Plug,
                title: "Useful Integrations",
                text: "Connect Microsoft 365, website leads, Power BI, payment tools and third-party systems.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Access",
                text: "Control who can view, edit and approve records through role-based permissions.",
              },
              {
                icon: Settings2,
                title: "Configured for Your Business",
                text: "Use forms, fields, views, reports and workflows built around your real process.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-[var(--d-border)] bg-[var(--d-surface)] p-4"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--d-muted)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ImplementationSection() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[var(--d-section-alt)]" />
      <div className="d365-container">
        <SectionHeading
          eyebrow="Implementation Process"
          title="A clear implementation journey from discovery to go-live"
          description="Our structured approach reduces risk, keeps every stage measurable and ensures the final solution supports the way your teams actually work."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {implementationSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="relative rounded-3xl border border-[var(--d-border)] bg-[var(--d-card-solid)] p-6"
            >
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-[var(--d-muted)]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-24">
      <div className="d365-container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Business Benefits"
            title="More visibility. Faster execution. Smarter daily operations."
            description="A well-designed Dynamics 365 environment gives teams trusted data, consistent processes and the real-time insights they need to work with confidence."
            align="left"
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-[#031013]"
          >
            Discuss Your Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="d365-card flex items-start gap-3 rounded-2xl p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
              <span className="leading-6 text-[var(--d-body)]">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[var(--d-section-alt)] py-24">
      <div className="d365-container">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="What businesses usually ask before implementation"
          description="Straightforward answers about modules, integrations, migration and support."
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {faqs.map((faq) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--d-border)] bg-[var(--d-card-solid)]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[var(--d-title)]">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-cyan-300 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 leading-7 text-[var(--d-muted)]">{answer}</p>
      </motion.div>
    </div>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=88"
        alt="Modern business office"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-20 bg-[var(--d-overlay-strong)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[140px]" />

      <div className="d365-container">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-300/20 bg-[var(--d-card-strong)] p-7 text-center shadow-[0_30px_100px_rgba(0,213,231,.12)] backdrop-blur-xl sm:p-12">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300 text-[#031013]">
            <Sparkles className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-[var(--d-title)] tracking-[-0.035em] sm:text-5xl">
            Ready to connect and modernize your business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--d-body)]">
            Let us assess your current systems and recommend the right Dynamics 365 modules, integrations and implementation roadmap for your growth goals.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-7 py-3.5 font-semibold text-[#031013] transition hover:-translate-y-1 hover:bg-cyan-200"
          >
            Start Your Dynamics 365 Project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className={`max-w-3xl ${alignment}`}
    >
      <div
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 ${align === "center" ? "justify-center" : ""}`}
      >
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold text-[var(--d-title)] leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--d-muted)]">{description}</p>
    </motion.div>
  );
}