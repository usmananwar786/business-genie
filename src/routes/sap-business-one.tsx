import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Factory,
  FileBarChart,
  Layers3,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Truck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/sap-business-one")({
  head: () => ({
    meta: [
      {
        title: "SAP Business One Consulting | Business Genie Consulting",
      },
      {
        name: "description",
        content:
          "Professional SAP Business One consulting, implementation, migration, finance, sales, purchasing, inventory, production, reporting, training and support.",
      },
      {
        property: "og:title",
        content: "SAP Business One Consulting | Business Genie Consulting",
      },
      {
        property: "og:description",
        content:
          "Gain real-time control over finance, sales, purchasing, inventory, production and reporting with SAP Business One.",
      },
    ],
  }),
  component: SapBusinessOne,
});

const SAP_BLUE = "#0A6ED1";
const SAP_SKY = "#00B9F2";
const SAP_NAVY = "#003366";

const modules: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
}> = [
  {
    icon: CircleDollarSign,
    title: "Financial Management",
    description:
      "Control general ledger, payables, receivables, banking, budgeting, fixed assets and financial reporting from one governed platform.",
    metric: "Finance",
  },
  {
    icon: TrendingUp,
    title: "Sales & Customer Management",
    description:
      "Manage opportunities, quotations, orders, deliveries, invoices, service activity and customer history through one connected process.",
    metric: "Sales",
  },
  {
    icon: ShoppingCart,
    title: "Purchasing & Supplier Control",
    description:
      "Standardise purchase requests, supplier quotations, purchase orders, receipts, invoices and approval workflows.",
    metric: "Procurement",
  },
  {
    icon: Boxes,
    title: "Inventory & Distribution",
    description:
      "Track stock across locations, control batches and serial numbers, improve replenishment and maintain accurate availability.",
    metric: "Inventory",
  },
  {
    icon: Factory,
    title: "Production & MRP",
    description:
      "Plan materials, manage bills of materials, issue production orders and align supply with actual business demand.",
    metric: "Production",
  },
  {
    icon: FileBarChart,
    title: "Analytics & Reporting",
    description:
      "Convert live operational data into dashboards, management reports, margin analysis and faster business decisions.",
    metric: "Insights",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Process Review",
    description:
      "We document your current operations, reporting needs, control gaps and implementation priorities.",
  },
  {
    number: "02",
    title: "Solution Architecture",
    description:
      "We design company structures, workflows, user roles, approvals, reports, integrations and the rollout roadmap.",
  },
  {
    number: "03",
    title: "Configuration & Data Migration",
    description:
      "We configure SAP Business One, validate master data, migrate agreed records and prepare connected systems.",
  },
  {
    number: "04",
    title: "Testing, Training & Go Live",
    description:
      "Your teams test real scenarios, receive role-based training and launch with structured go-live support.",
  },
];

const benefits = [
  "One reliable source of financial and operational data",
  "Stronger control over purchasing, stock and approvals",
  "Real-time visibility into revenue, margins and cash flow",
  "Faster reporting with fewer manual spreadsheets",
  "Consistent processes across teams and locations",
  "A scalable ERP foundation for sustainable growth",
];

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    text: "MRP, production orders, bills of materials, stock planning and cost visibility.",
  },
  {
    icon: Truck,
    title: "Wholesale & Distribution",
    text: "Purchasing, multi-warehouse inventory, pricing, fulfilment and delivery control.",
  },
  {
    icon: PackageCheck,
    title: "Consumer Products",
    text: "Batch tracking, item availability, demand planning and margin visibility.",
  },
  {
    icon: Building2,
    title: "Professional Services",
    text: "Customer management, project visibility, billing and financial control.",
  },
];

const faqs = [
  {
    question: "Is SAP Business One suitable for growing companies?",
    answer:
      "Yes. SAP Business One is designed for small and midsize organisations, growing groups and subsidiaries that need stronger control across finance, sales, purchasing, inventory, production and reporting.",
  },
  {
    question: "Can SAP Business One support multiple warehouses and locations?",
    answer:
      "Yes. The solution can manage inventory across multiple warehouses and locations, including item availability, stock transfers, batch or serial tracking and replenishment processes.",
  },
  {
    question: "Can you migrate data from our current accounting or ERP system?",
    answer:
      "Yes. We can prepare, cleanse, validate and migrate agreed master data, opening balances, customers, suppliers, items, inventory and other required records.",
  },
  {
    question: "Do you provide training and post-go-live support?",
    answer:
      "Yes. Our delivery can include role-based user training, administrator guidance, testing support, go-live assistance, reporting improvements and ongoing optimisation.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};


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

function readSapThemeMode(): ThemeMode {
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

  
  if (headerLooksDark()) return "dark";

  if (/\b(dark|night|black)\b/.test(themeText)) return "dark";
  if (/\b(light|day|off-white|offwhite)\b/.test(themeText)) return "light";

  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function useSapThemeMode(): ThemeMode {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const updateMode = () => {
      setMode(readSapThemeMode());
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

function SapBusinessOne() {
  const sapTheme = useSapThemeMode();

  return (
    <SiteLayout>
      <div
        className={`sap-theme-wrap ${sapTheme === "dark" ? "dark" : ""}`}
        data-sap-theme={sapTheme}
      >
        <SapThemeStyles />

        <main className="sap-page min-h-screen overflow-hidden bg-[var(--sap-bg)] text-[var(--sap-text)] transition-colors duration-300 selection:bg-[#00B9F2] selection:text-[#001B2E]">
          <HeroSection />
          <ProofBar />
          <ModulesSection />
          <OperationalSection />
          <IndustriesSection />
          <ProcessSection />
          <BenefitsSection />
          <FaqSection />
          <CtaSection />
        </main>
      </div>
    </SiteLayout>
  );
}

function SapThemeStyles() {
  return (
    <style>{`
      
      .sap-theme-wrap {
        color-scheme: light;
        background: #f7f8f5;
      }

      .sap-theme-wrap[data-sap-theme="dark"] {
        color-scheme: dark;
        background: #030405;
      }

      .sap-theme-wrap[data-sap-theme="light"] .sap-page {
        --sap-bg: #f7f8f5;
        --sap-bg-deep: #eef2f2;
        --sap-card: rgba(255, 255, 255, 0.96);
        --sap-card-soft: rgba(255, 255, 255, 0.88);
        --sap-card-strong: rgba(255, 255, 255, 0.97);
        --sap-title: #102331;
        --sap-text: #203746;
        --sap-body: #405968;
        --sap-muted: #6d8390;
        --sap-border: rgba(10, 110, 209, 0.15);
        --sap-border-strong: rgba(10, 110, 209, 0.26);
        --sap-grid: rgba(10, 110, 209, 0.07);
        --sap-overlay: rgba(247, 248, 245, 0.92);
        --sap-shadow: 0 18px 55px rgba(10, 74, 121, 0.09);
        background: #f7f8f5 !important;
        color: #203746 !important;
      }

      .sap-theme-wrap[data-sap-theme="dark"] .sap-page {
        --sap-bg: #030405;
        --sap-bg-deep: #080b0e;
        --sap-card: rgba(14, 18, 22, 0.96);
        --sap-card-soft: rgba(10, 14, 18, 0.90);
        --sap-card-strong: rgba(11, 15, 19, 0.97);
        --sap-title: #f7fbff;
        --sap-text: #e7f0f7;
        --sap-body: #c8d6df;
        --sap-muted: rgba(181, 201, 213, 0.72);
        --sap-border: rgba(255, 255, 255, 0.12);
        --sap-border-strong: rgba(0, 185, 242, 0.34);
        --sap-grid: rgba(0, 185, 242, 0.055);
        --sap-overlay: rgba(3, 4, 5, 0.94);
        --sap-shadow: 0 22px 70px rgba(0, 0, 0, 0.46);
        background: #030405 !important;
        color: #e7f0f7 !important;
      }

      .sap-theme-wrap[data-sap-theme="light"] .sap-page section {
        background-color: var(--sap-bg);
      }

      .sap-theme-wrap[data-sap-theme="dark"] .sap-page section {
        background-color: var(--sap-bg);
      }

      .sap-theme-wrap[data-sap-theme="light"] .sap-surface,
      .sap-theme-wrap[data-sap-theme="light"] .sap-solid-card {
        background: rgba(255, 255, 255, 0.96) !important;
        color: #203746 !important;
        border-color: rgba(10, 110, 209, 0.15) !important;
        box-shadow: 0 18px 55px rgba(10, 74, 121, 0.09) !important;
      }

      .sap-theme-wrap[data-sap-theme="dark"] .sap-surface,
      .sap-theme-wrap[data-sap-theme="dark"] .sap-solid-card {
        background: rgba(14, 18, 22, 0.96) !important;
        color: #e7f0f7 !important;
        border-color: rgba(255, 255, 255, 0.12) !important;
        box-shadow: 0 22px 70px rgba(0, 0, 0, 0.46) !important;
      }

      .sap-theme-wrap[data-sap-theme="light"] .sap-section-alt {
        background: #eef2f2 !important;
      }

      .sap-theme-wrap[data-sap-theme="dark"] .sap-section-alt {
        background: #080b0e !important;
      }

      .sap-theme-wrap[data-sap-theme="light"] .sap-process-section {
        background:
          radial-gradient(
            circle at 15% 20%,
            rgba(10, 110, 209, 0.24),
            transparent 34%
          ),
          radial-gradient(
            circle at 82% 72%,
            rgba(0, 185, 242, 0.17),
            transparent 34%
          ),
          linear-gradient(135deg, #063d68 0%, #0a6ed1 58%, #07537d 100%) !important;
      }

      .sap-theme-wrap[data-sap-theme="dark"] .sap-process-section {
        background:
          radial-gradient(
            circle at 15% 20%,
            rgba(10, 110, 209, 0.40),
            transparent 34%
          ),
          radial-gradient(
            circle at 82% 72%,
            rgba(0, 185, 242, 0.24),
            transparent 34%
          ),
          linear-gradient(135deg, #020608 0%, #07131d 55%, #001018 100%) !important;
      }

      .sap-theme-wrap[data-sap-theme="light"] .sap-hero-overlay {
        background:
          linear-gradient(
            90deg,
            #f7f8f5 0%,
            rgba(247, 248, 245, 0.96) 52%,
            rgba(231, 246, 249, 0.84) 100%
          ) !important;
      }

      .sap-theme-wrap[data-sap-theme="dark"] .sap-hero-overlay {
        background:
          linear-gradient(
            90deg,
            #030405 0%,
            rgba(4, 7, 9, 0.98) 52%,
            rgba(0, 20, 28, 0.92) 100%
          ) !important;
      }

      .sap-container {
        width: min(1200px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .sap-grid-bg {
        background-color: var(--sap-bg);
        background-image:
          linear-gradient(var(--sap-grid) 1px, transparent 1px),
          linear-gradient(90deg, var(--sap-grid) 1px, transparent 1px);
        background-size: 72px 72px;
      }

      .sap-surface {
        background: var(--sap-card-soft);
        border: 1px solid var(--sap-border);
        box-shadow: var(--sap-shadow);
        backdrop-filter: blur(18px);
      }

      .sap-solid-card {
        background: var(--sap-card);
        border: 1px solid var(--sap-border);
        box-shadow: var(--sap-shadow);
      }

      .sap-page section,
      .sap-page article,
      .sap-page div {
        border-color: var(--sap-border);
      }

      .sap-page,
      .sap-page section,
      .sap-page article,
      .sap-page div,
      .sap-page button,
      .sap-page a,
      .sap-page h1,
      .sap-page h2,
      .sap-page h3,
      .sap-page p {
        transition:
          background-color 0.3s ease,
          border-color 0.3s ease,
          color 0.3s ease,
          box-shadow 0.3s ease;
      }

      .sap-theme-wrap[data-sap-theme="dark"] img {
        filter: brightness(0.72) saturate(0.88) contrast(1.06);
      }

      .sap-theme-wrap[data-sap-theme="light"] img {
        filter: brightness(0.94) saturate(0.92);
      }
    `}</style>
  );
}

function HeroSection() {
  return (
    <section className="sap-grid-bg relative isolate overflow-hidden bg-[var(--sap-bg)] pb-20 pt-32 lg:pb-28">
      <div className="absolute inset-y-0 right-0 -z-30 w-full lg:w-[55%]">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=88"
          alt="Business leaders reviewing operational performance"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="sap-hero-overlay absolute inset-0" />
      </div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-20 -z-10 h-80 w-80 rounded-full bg-[#0A6ED1]/20 blur-[140px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-28 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#00B9F2]/15 blur-[150px]"
      />

      <div className="sap-container grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--sap-border-strong)] bg-[var(--sap-card-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0A6ED1] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#00B9F2] shadow-[0_0_18px_rgba(0,185,242,.8)]" />
            SAP Business One Consulting
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-[var(--sap-title)] sm:text-5xl lg:text-7xl">
            Run your growing business with
            <span
              className="mt-2 block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(110deg, ${SAP_BLUE}, ${SAP_SKY}, ${SAP_NAVY})`,
              }}
            >
              clarity, control and confidence
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--sap-body)] sm:text-lg">
            Connect finance, sales, purchasing, inventory, production and
            reporting in one professionally configured SAP Business One
            environment built around your operational priorities.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0A6ED1] px-6 py-3.5 font-semibold text-white shadow-[0_18px_45px_rgba(10,110,209,.28)] transition hover:-translate-y-1 hover:bg-[#085caf]"
            >
              Discuss Your SAP Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center rounded-xl border border-[var(--sap-border-strong)] bg-[var(--sap-card-soft)] px-6 py-3.5 font-semibold text-[var(--sap-title)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#00B9F2]/50"
            >
              Explore Capabilities
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--sap-muted)]">
            {[
              "Integrated ERP",
              "Real-time reporting",
              "Scalable operations",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#00B9F2]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 32 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.75 }}
          className="relative"
        >
          <PerformancePanel />
        </motion.div>
      </div>
    </section>
  );
}

function PerformancePanel() {
  const bars = [42, 58, 51, 72, 66, 82, 76, 91];

  return (
    <div className="sap-surface relative overflow-hidden rounded-[2rem] p-5 sm:p-6">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#00B9F2]/15 blur-[90px]" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4 border-b border-[var(--sap-border)] pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sap-muted)]">
              Business Performance
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--sap-title)]">
              Executive control centre
            </h2>
          </div>
          <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
            Live Data
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {[
            ["Revenue", "$428K", "+12.4%"],
            ["Gross Margin", "31.8%", "+3.1%"],
            ["Stock Value", "$186K", "Controlled"],
            ["Open Orders", "148", "On track"],
          ].map(([label, value, change]) => (
            <div
              key={label}
              className="rounded-2xl border border-[var(--sap-border)] bg-[var(--sap-card)] p-4"
            >
              <p className="text-xs text-[var(--sap-muted)]">{label}</p>
              <p className="mt-3 text-2xl font-semibold text-[var(--sap-title)]">
                {value}
              </p>
              <p className="mt-1 text-xs font-medium text-[#0A6ED1]">
                {change}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-[var(--sap-border)] bg-[var(--sap-card)] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.17em] text-[var(--sap-muted)]">
                Monthly Performance
              </p>
              <p className="mt-1 font-semibold text-[var(--sap-title)]">
                Revenue and margin trend
              </p>
            </div>
            <BarChart3 className="h-5 w-5 text-[#00B9F2]" />
          </div>
          <div className="mt-7 flex h-36 items-end gap-2">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.7 }}
                className="flex-1 rounded-t-md"
                style={{
                  background: `linear-gradient(180deg, ${SAP_SKY}, ${SAP_BLUE})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProofBar() {
  return (
    <section className="sap-section-alt border-y border-[var(--sap-border)] bg-[var(--sap-bg-deep)] py-7">
      <div className="sap-container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [
            Layers3,
            "Connected Operations",
            "One coordinated business platform",
          ],
          [
            ShieldCheck,
            "Controlled Access",
            "Role-based permissions and approvals",
          ],
          [
            Workflow,
            "Structured Processes",
            "Consistent workflows across teams",
          ],
          [
            BarChart3,
            "Real-time Insight",
            "Management visibility without delays",
          ],
        ].map(([Icon, title, text], index) => {
          const FeatureIcon = Icon as LucideIcon;
          return (
            <motion.div
              key={title as string}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="flex items-center gap-4"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#0A6ED1]/10 text-[#0A6ED1]">
                <FeatureIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-[var(--sap-title)]">
                  {title as string}
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--sap-muted)]">
                  {text as string}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function ModulesSection() {
  return (
    <section id="capabilities" className="relative bg-[var(--sap-bg)] py-24">
      <div className="sap-container">
        <SectionIntro
          label="Core Capabilities"
          title="A complete business management platform, not another disconnected tool"
          description="Deploy the functions your organisation needs today while creating a structured foundation for future growth, reporting and operational control."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.article
                key={module.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.55 }}
                whileHover={{ y: -5 }}
                className="sap-solid-card group grid gap-5 rounded-3xl p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0A6ED1] text-white shadow-[0_14px_34px_rgba(10,110,209,.22)]"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0A6ED1]">
                    {module.metric}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--sap-title)]">
                    {module.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[var(--sap-muted)]">
                    {module.description}
                  </p>
                </div>
                <div className="hidden h-10 w-10 place-items-center rounded-full border border-[var(--sap-border)] text-[#0A6ED1] transition group-hover:border-[#00B9F2]/50 group-hover:bg-[#00B9F2]/10 sm:grid">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OperationalSection() {
  return (
    <section className="sap-section-alt relative overflow-hidden bg-[var(--sap-bg-deep)] py-24">
      <div className="sap-container grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-[var(--sap-border)]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=88"
              alt="Operations team using enterprise business software"
              className="h-[570px] w-full object-cover"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#001b2e]/90 via-[#001b2e]/20 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="sap-surface absolute bottom-5 left-5 right-5 rounded-2xl p-5 sm:bottom-8 sm:left-8 sm:right-8"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#00B9F2] text-[#001B2E]">
                <Workflow className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-[var(--sap-title)]">
                  One connected operating model
                </p>
                <p className="mt-1 text-sm text-[var(--sap-muted)]">
                  Opportunity → Order → Inventory → Delivery → Invoice → Insight
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <SectionIntro
            label="Operational Control"
            title="Make every department work from the same reliable business data"
            description="SAP Business One replaces fragmented processes with a coordinated environment where finance, sales, purchasing, inventory and operations remain aligned."
            align="left"
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Unified records",
                "Keep customers, suppliers, items, transactions and reports in one governed system.",
              ],
              [
                "Better approvals",
                "Introduce defined controls for purchasing, discounts, payments and operational exceptions.",
              ],
              [
                "Accurate inventory",
                "Understand stock positions, commitments and availability across warehouses.",
              ],
              [
                "Management visibility",
                "Access reliable financial and operational insight without waiting for manual consolidation.",
              ],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-2xl border border-[var(--sap-border)] bg-[var(--sap-card)] p-5"
              >
                <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-[#0A6ED1] to-[#00B9F2]" />
                <h3 className="font-semibold text-[var(--sap-title)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--sap-muted)]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="bg-[var(--sap-bg)] py-24">
      <div className="sap-container">
        <SectionIntro
          label="Industry Applications"
          title="Configured around the realities of your sector"
          description="We translate SAP Business One capabilities into practical workflows, controls and reports for the way your organisation operates."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="group relative min-h-[280px] overflow-hidden rounded-3xl border border-[var(--sap-border)] bg-[var(--sap-card)] p-6"
              >
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#0A6ED1]/10 blur-2xl transition group-hover:bg-[#00B9F2]/15" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0A6ED1]/10 text-[#0A6ED1]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-10 text-xl font-semibold text-[var(--sap-title)]">
                    {industry.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--sap-muted)]">
                    {industry.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="sap-process-section py-24 text-white">
      <div className="sap-container">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#80ddff]">
            Implementation Approach
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            A controlled route from business requirements to confident go-live
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            Every stage is planned around business outcomes, data quality, user
            adoption and operational continuity.
          </p>
        </div>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/15 lg:block" />
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.09 }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm"
            >
              <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl bg-[#00B9F2] text-lg font-bold text-[#001B2E] shadow-[0_16px_40px_rgba(0,185,242,.18)]">
                {step.number}
              </div>
              <h3 className="mt-7 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-7 text-white/68">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="sap-section-alt bg-[var(--sap-bg-deep)] py-24">
      <div className="sap-container grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <SectionIntro
            label="Business Outcomes"
            title="Stronger control today, better decisions tomorrow"
            description="A well-designed SAP Business One implementation helps your organisation reduce manual work, improve accountability and make decisions from trusted information."
            align="left"
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0A6ED1] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#085caf]"
          >
            Request a Consultation
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
              transition={{ delay: index * 0.06 }}
              className="flex items-start gap-4 rounded-2xl border border-[var(--sap-border)] bg-[var(--sap-card)] p-5"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#00B9F2]/12 text-[#00B9F2]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="leading-7 text-[var(--sap-body)]">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[var(--sap-bg)] py-24">
      <div className="sap-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <SectionIntro
            label="Frequently Asked Questions"
            title="Clear answers before your ERP project begins"
            description="Understand suitability, migration, deployment and support before planning your SAP Business One implementation."
            align="left"
          />
        </div>

        <div className="space-y-3">
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
    <div className="overflow-hidden rounded-2xl border border-[var(--sap-border)] bg-[var(--sap-card)]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[var(--sap-title)]">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#0A6ED1] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 leading-7 text-[var(--sap-muted)]">{answer}</p>
      </motion.div>
    </div>
  );
}

function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--sap-bg)] py-24">
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=88"
        alt="Modern office prepared for digital transformation"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-20 bg-[var(--sap-overlay)]" />
      <div className="sap-container">
        <div
          className="relative overflow-hidden rounded-[2.25rem] border border-white/10 px-7 py-12 text-center text-white shadow-[0_30px_80px_rgba(10,110,209,.24)] sm:px-12 sm:py-16"
          style={{
            background: `linear-gradient(135deg, ${SAP_BLUE}, ${SAP_NAVY})`,
          }}
        >
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#00B9F2]/25 blur-[110px]" />
          <div className="relative mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Start with a focused consultation
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Build an SAP Business One environment that supports real
              operational growth
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/76">
              We will review your current processes, priorities, reporting needs
              and system landscape before recommending a practical
              implementation roadmap.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#003366] transition hover:-translate-y-1 hover:bg-[#eaf7ff]"
            >
              Start Your SAP Business One Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({
  label,
  title,
  description,
  align = "center",
}: {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={reveal}
      transition={{ duration: 0.55 }}
      className={`max-w-3xl ${alignment}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A6ED1]">
        {label}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--sap-title)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--sap-muted)]">
        {description}
      </p>
    </motion.div>
  );
}