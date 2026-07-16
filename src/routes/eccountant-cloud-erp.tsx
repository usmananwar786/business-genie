import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Cloud,
  Database,
  Factory,
  FileBarChart,
  FileText,
  Globe2,
  Layers3,
  LockKeyhole,
  PackageCheck,
  ReceiptText,
  RefreshCw,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Truck,
  Users,
  WalletCards,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/eccountant-cloud-erp")({
  head: () => ({
    meta: [
      {
        title: "Eccountant Cloud ERP | Business Genie Consulting",
      },
      {
        name: "description",
        content:
          "Eccountant Cloud ERP implementation for finance, sales, purchasing, inventory, production, HR, CRM, reporting, migration, training and support.",
      },
      {
        property: "og:title",
        content: "Eccountant Cloud ERP | Business Genie Consulting",
      },
      {
        property: "og:description",
        content:
          "Build a connected cloud ERP environment for finance, inventory, sales, purchasing and reporting with Eccountant.",
      },
    ],
  }),
  component: EccountantCloudErp,
});

const BRAND_BLUE = "#4298C7";
const BRAND_BLUE_DARK = "#2479AA";
const BRAND_SKY = "#75C6EC";
const BRAND_INK = "#163B55";

type ThemeMode = "light" | "dark";

type ModuleItem = {
  icon: LucideIcon;
  title: string;
  summary: string;
  details: string[];
  accent: string;
};

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

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
  "business-genie-theme-v2",
];

const heroFeatures: FeatureItem[] = [
  {
    icon: FileBarChart,
    title: "Custom Reports",
    text: "Build role-based reports and forms around your real workflow.",
  },
  {
    icon: Layers3,
    title: "One Platform",
    text: "Connect finance, inventory, CRM, HR and operations.",
  },
  {
    icon: Globe2,
    title: "Multi-Branch",
    text: "Work across branches, warehouses and locations securely.",
  },
  {
    icon: Users,
    title: "Multi-User",
    text: "Give every team controlled access to the data they need.",
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security",
    text: "Protect records with permissions, backups and audit trails.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Pricing",
    text: "Start with essential modules and expand as you grow.",
  },
];

const modules: ModuleItem[] = [
  {
    icon: CircleDollarSign,
    title: "Accounting & Finance",
    summary:
      "Keep your accounts, cash flow, receivables, payables and financial reports connected.",
    details: [
      "General ledger, journals and chart of accounts",
      "Customer receivables and supplier payables",
      "Banking, cash flow and payment tracking",
      "Tax, budgeting and management reporting",
    ],
    accent: "#2EA3D0",
  },
  {
    icon: ShoppingCart,
    title: "Sales Management",
    summary:
      "Manage quotations, orders, invoices, collections and customer activity from one workspace.",
    details: [
      "Lead, quotation and sales order tracking",
      "Price lists, discounts and approval control",
      "Customer balances and collection follow-up",
      "Sales performance and margin visibility",
    ],
    accent: "#5E9FD3",
  },
  {
    icon: Boxes,
    title: "Inventory & Warehousing",
    summary:
      "See stock availability, transfers, reorder levels and warehouse activity in real time.",
    details: [
      "Multi-warehouse stock visibility",
      "Transfers, adjustments and stock counts",
      "Batch, serial and expiry tracking",
      "Reorder alerts and item movement history",
    ],
    accent: "#6DB5C8",
  },
  {
    icon: ReceiptText,
    title: "Purchasing",
    summary:
      "Control requests, purchase orders, supplier invoices and approval workflows.",
    details: [
      "Purchase requests and supplier quotations",
      "Purchase orders and goods receipts",
      "Supplier invoices and outstanding balances",
      "Approval rules and purchase analysis",
    ],
    accent: "#4E86C8",
  },
  {
    icon: Factory,
    title: "Assembly & Production",
    summary:
      "Plan material usage, assembly, production costs and finished goods more accurately.",
    details: [
      "Bills of materials and assembly orders",
      "Raw material issue and finished goods receipt",
      "Job costing and production variance",
      "Production planning and material availability",
    ],
    accent: "#388DBF",
  },
  {
    icon: PackageCheck,
    title: "Asset Management",
    summary:
      "Track assets, allocation, depreciation, maintenance and responsible users.",
    details: [
      "Asset register and category management",
      "Location, custodian and allocation history",
      "Depreciation schedules and book values",
      "Maintenance reminders and supporting records",
    ],
    accent: "#4BA9C7",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    summary:
      "Organize employees, attendance, leave, payroll inputs and HR records in one place.",
    details: [
      "Employee profiles and document records",
      "Attendance, leave and shift information",
      "Payroll inputs, allowances and deductions",
      "Department, role and reporting structures",
    ],
    accent: "#3C91C5",
  },
  {
    icon: Workflow,
    title: "CRM & Workflow",
    summary:
      "Keep opportunities, follow-ups, approvals and customer communication organized.",
    details: [
      "Lead and opportunity pipeline",
      "Tasks, reminders and follow-up activities",
      "Approval routing and workflow notifications",
      "Customer history and service visibility",
    ],
    accent: "#648FC8",
  },
  {
    icon: FileBarChart,
    title: "Project Management",
    summary:
      "Control project tasks, expenses, billing, profitability and management reporting.",
    details: [
      "Project setup, stages and task tracking",
      "Time, expense and resource visibility",
      "Project billing and receivable tracking",
      "Budget versus actual performance",
    ],
    accent: "#2C7FB4",
  },
];

const processSteps = [
  {
    number: "",
    title: "Business Discovery",
    text: "We review finance, sales, stock, branches, users, reports and operational pain points.",
  },
  {
    number: "",
    title: "ERP Blueprint",
    text: "We define modules, workflows, permissions, warehouses, approvals and reporting requirements.",
  },
  {
    number: "",
    title: "Configuration & Migration",
    text: "We configure the platform and prepare agreed customers, suppliers, items, balances and stock data.",
  },
  {
    number: "",
    title: "Testing & Training",
    text: "Your teams test real scenarios and receive practical role-based training before launch.",
  },
  {
    number: "",
    title: "Go Live & Support",
    text: "We support launch, resolve issues and continue improving workflows, reports and controls.",
  },
];

const benefits = [
  "Live visibility across finance, sales and inventory",
  "One source of truth for business records",
  "Faster invoicing and payment follow-up",
  "Better stock accuracy across warehouses",
  "Controlled user permissions and approvals",
  "Secure cloud access across locations",
];

const faqs = [
  {
    q: "Which Eccountant modules can be implemented?",
    a: "The implementation can cover accounting, sales, purchasing, inventory, warehouses, production, HR, payroll, CRM, assets, projects and reporting according to your selected scope.",
  },
  {
    q: "Can data be migrated from our current system?",
    a: "Yes. Customers, suppliers, chart of accounts, products, opening balances, stock and other agreed records can be prepared, validated and migrated.",
  },
  {
    q: "Can Eccountant support branches and multiple warehouses?",
    a: "Yes. The system can support multiple locations, warehouses, controlled access, stock transfers and centralized reporting.",
  },
  {
    q: "Do you provide training and post-launch support?",
    a: "Yes. We provide user training, testing assistance, launch support, reporting improvements and ongoing configuration guidance.",
  },
];

function parseCssRgb(
  value: string,
): { r: number; g: number; b: number; a: number } | null {
  const match = value.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;

  const parts = match[1]
    .split(",")
    .map((part) => Number(part.trim().replace("/", "")));

  if (parts.length < 3 || parts.some((part) => Number.isNaN(part))) return null;

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

  return selectors
    .flatMap((selector) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector)),
    )
    .slice(0, 12)
    .some((element) => {
      const classText = String(element.className || "").toLowerCase();

      if (
        classText.includes("bg-black") ||
        classText.includes("bg-[#000") ||
        classText.includes("bg-[#030303") ||
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

function readThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const html = document.documentElement;
  const body = document.body;

  const classText = `${html.className} ${body.className}`.toLowerCase();

  const attrText = [
    html.getAttribute("data-theme"),
    html.getAttribute("data-mode"),
    html.getAttribute("data-color-mode"),
    body.getAttribute("data-theme"),
    body.getAttribute("data-mode"),
    body.getAttribute("data-color-mode"),
    document.querySelector("#root")?.getAttribute("class"),
    document.querySelector("#root")?.getAttribute("data-theme"),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  let storageText = "";

  try {
    storageText = THEME_STORAGE_KEYS
      .map((key) => localStorage.getItem(key) || "")
      .join(" ")
      .toLowerCase();
  } catch {
    storageText = "";
  }

  const themeText = `${classText} ${attrText} ${storageText}`;

  if (headerLooksDark()) return "dark";
  if (/\b(dark|night|black)\b/.test(themeText)) return "dark";
  if (/\b(light|day|off-white|offwhite|cream)\b/.test(themeText)) {
    return "light";
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function useThemeMode(): ThemeMode {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const update = () => setMode(readThemeMode());

    update();

    const observer = new MutationObserver(update);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [
        "class",
        "style",
        "data-theme",
        "data-mode",
        "data-color-mode",
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
      ],
    });

    const interval = window.setInterval(update, 300);
    const onClick = () => window.setTimeout(update, 0);
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");

    window.addEventListener("click", onClick, true);
    window.addEventListener("storage", update);
    media?.addEventListener?.("change", update);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
      window.removeEventListener("click", onClick, true);
      window.removeEventListener("storage", update);
      media?.removeEventListener?.("change", update);
    };
  }, []);

  return mode;
}

function EccountantCloudErp() {
  const theme = useThemeMode();

  return (
    <SiteLayout>
      <div
        className={`ec-theme-wrap ${theme === "dark" ? "dark" : ""}`}
        data-ec-theme={theme}
      >
        <ThemeStyles />

        <main className="ec-page min-h-screen overflow-hidden bg-[var(--ec-bg)] text-[var(--ec-text)] selection:bg-[#75C6EC] selection:text-[#163B55]">
          <HeroSection />
          <KpiRibbon />
          <ModulesSection />
          <BusinessOverviewSection />
          <ConnectedFlowSection />
          <CustomerStorySection />
          <ImplementationSection />
          <BenefitsSection />
          <FaqSection />
          <CtaSection />
        </main>
      </div>
    </SiteLayout>
  );
}

function ThemeStyles() {
  return (
    <style>{`
      .ec-theme-wrap {
        color-scheme: light;
        background: #f7f9fb;
      }

      .ec-theme-wrap[data-ec-theme="dark"] {
        color-scheme: dark;
        background: #030609;
      }

      .ec-theme-wrap[data-ec-theme="light"] .ec-page {
        --ec-bg: #f7f9fb;
        --ec-alt: #eef4f8;
        --ec-card: #ffffff;
        --ec-card-soft: rgba(255,255,255,.88);
        --ec-title: #173b54;
        --ec-text: #294a60;
        --ec-body: #4c6879;
        --ec-muted: #738895;
        --ec-border: rgba(66,152,199,.17);
        --ec-border-strong: rgba(66,152,199,.34);
        --ec-grid: rgba(66,152,199,.065);
        --ec-shadow: 0 18px 55px rgba(36,121,170,.10);
        --ec-overlay: rgba(247,249,251,.94);
        background: #f7f9fb !important;
        color: #294a60 !important;
      }

      .ec-theme-wrap[data-ec-theme="dark"] .ec-page {
        --ec-bg: #030609;
        --ec-alt: #081018;
        --ec-card: #0d1821;
        --ec-card-soft: rgba(10,19,27,.91);
        --ec-title: #f7fbfe;
        --ec-text: #e8f2f8;
        --ec-body: #c8d8e2;
        --ec-muted: rgba(182,204,216,.72);
        --ec-border: rgba(255,255,255,.11);
        --ec-border-strong: rgba(117,198,236,.36);
        --ec-grid: rgba(117,198,236,.05);
        --ec-shadow: 0 24px 75px rgba(0,0,0,.48);
        --ec-overlay: rgba(3,6,9,.94);
        background: #030609 !important;
        color: #e8f2f8 !important;
      }

      .ec-container {
        width: min(1200px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .ec-card {
        background: var(--ec-card);
        border: 1px solid var(--ec-border);
        box-shadow: var(--ec-shadow);
      }

      .ec-glass {
        background: var(--ec-card-soft);
        border: 1px solid var(--ec-border);
        box-shadow: var(--ec-shadow);
        backdrop-filter: blur(20px);
      }

      .ec-alt {
        background: var(--ec-alt) !important;
      }

      .ec-grid-bg {
        background-color: var(--ec-bg);
        background-image:
          linear-gradient(var(--ec-grid) 1px, transparent 1px),
          linear-gradient(90deg, var(--ec-grid) 1px, transparent 1px);
        background-size: 76px 76px;
      }

      .ec-hero-shell {
        background:
          radial-gradient(circle at 15% 25%, rgba(117,198,236,.20), transparent 33%),
          radial-gradient(circle at 86% 70%, rgba(36,121,170,.25), transparent 36%),
          linear-gradient(135deg, #184f7a 0%, #2b78a9 48%, #1d5d8c 100%);
      }

      .ec-theme-wrap[data-ec-theme="dark"] .ec-hero-shell {
        background:
          radial-gradient(circle at 15% 25%, rgba(117,198,236,.15), transparent 33%),
          radial-gradient(circle at 86% 70%, rgba(36,121,170,.23), transparent 36%),
          linear-gradient(135deg, #06131d 0%, #0c2f47 48%, #071d2b 100%);
      }

      .ec-hero-feature {
        background: rgba(255,255,255,.10) !important;
        border-color: rgba(255,255,255,.16) !important;
        box-shadow: 0 18px 45px rgba(4,24,38,.14) !important;
      }

      .ec-theme-wrap[data-ec-theme="dark"] .ec-hero-feature {
        background: rgba(255,255,255,.07) !important;
        border-color: rgba(255,255,255,.13) !important;
      }

      .ec-module-card {
        isolation: isolate;
      }

      .ec-module-card::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        opacity: 0;
        background: radial-gradient(circle at 50% 0%, rgba(117,198,236,.12), transparent 55%);
        transition: opacity .35s ease;
      }

      .ec-module-card:hover::before,
      .ec-module-card[data-open="true"]::before {
        opacity: 1;
      }

      .ec-module-card[data-open="true"] {
        border-color: var(--ec-border-strong);
        box-shadow: 0 24px 70px rgba(36,121,170,.16);
      }

      .ec-page,
      .ec-page section,
      .ec-page article,
      .ec-page div,
      .ec-page a,
      .ec-page button,
      .ec-page p,
      .ec-page h1,
      .ec-page h2,
      .ec-page h3 {
        transition:
          background-color .3s ease,
          border-color .3s ease,
          color .3s ease,
          box-shadow .3s ease;
      }

      .ec-theme-wrap[data-ec-theme="light"] img {
        filter: brightness(.97) saturate(.94);
      }

      .ec-theme-wrap[data-ec-theme="dark"] img {
        filter: brightness(.70) saturate(.88) contrast(1.07);
      }

      @media (prefers-reduced-motion: reduce) {
        .ec-page *,
        .ec-page *::before,
        .ec-page *::after {
          scroll-behavior: auto !important;
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: .01ms !important;
        }
      }
    `}</style>
  );
}

function HeroSection() {
  return (
    <section className="ec-hero-shell relative isolate overflow-hidden px-4 pb-24 pt-28 text-white sm:px-6 lg:min-h-[760px] lg:px-8 lg:pb-28 lg:pt-32">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 28, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-16 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#75C6EC]/18 blur-[150px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -22, 0], y: [0, 20, 0], scale: [1.06, 1, 1.06] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-36 bottom-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#0b3354]/30 blur-[145px]"
      />

      <div className="ec-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/[0.18] bg-white/[0.10] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-xl">
            <Cloud className="h-4 w-4 text-[#AEE7FF]" />
            Eccountant Cloud ERP
          </div> */}

          <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Do more with Eccountant
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/[0.76] sm:text-lg">
            A connected cloud ERP for finance, sales, inventory, purchasing,
            production, people and management reporting.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-[1100px] lg:min-h-[430px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.18, duration: 0.75, type: "spring" }}
            className="relative z-20 mx-auto grid h-52 w-52 place-items-center rounded-full border-[10px] border-white/10 bg-white text-center shadow-[0_30px_80px_rgba(0,0,0,.24)] sm:h-60 sm:w-60"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-15px] rounded-full border border-dashed border-[#75C6EC]/55"
            />

            <div>
              <div className="mx-auto grid h-16 w-20 place-items-center rounded-[46%_54%_56%_44%] bg-[#4298C7] text-3xl font-bold text-white shadow-[0_14px_34px_rgba(66,152,199,.30)]">
                E
              </div>
              <div className="mt-3 text-2xl font-bold tracking-[-0.045em] text-[#4298C7]">
                ccountant
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#648396]">
                Cloud Business ERP
              </div>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:absolute lg:inset-0 lg:mt-0 lg:grid-cols-2 lg:content-between lg:justify-between">
            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const alignRight = index % 2 === 1;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: alignRight ? 28 : -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.32 + index * 0.08, duration: 0.55 }}
                  className={`ec-hero-feature relative flex max-w-[360px] items-start gap-4 rounded-2xl p-4 text-left text-white backdrop-blur-md lg:w-[360px] ${
                    alignRight ? "lg:justify-self-end" : "lg:justify-self-start"
                  }`}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#2479AA]"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <h2 className="font-semibold text-white">{feature.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-white/68">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.82, duration: 0.55 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#2479AA] shadow-[0_18px_45px_rgba(0,0,0,.18)] transition hover:-translate-y-1 hover:bg-[#EAF7FD]"
          >
            Start ERP Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href="#modules"
            className="inline-flex items-center justify-center rounded-full border border-white/[0.24] bg-white/[0.08] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.14]"
          >
            Explore Modules
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function KpiRibbon() {
  const items: FeatureItem[] = [
    {
      icon: Cloud,
      title: "Cloud Access",
      text: "Secure work across branches and locations",
    },
    {
      icon: Database,
      title: "Connected Records",
      text: "One source of financial and operational data",
    },
    {
      icon: ShieldCheck,
      title: "Controlled Users",
      text: "Role-based permissions and approvals",
    },
    {
      icon: RefreshCw,
      title: "Live Synchronization",
      text: "Current finance, sales and stock information",
    },
  ];

  return (
    <section className="ec-alt border-y border-[var(--ec-border)] py-7">
      <div className="ec-container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center gap-4"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#4298C7]/12 text-[#4298C7]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-[var(--ec-title)]">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--ec-muted)]">
                  {item.text}
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
  const [openModule, setOpenModule] = useState<string | null>(null);

  return (
    <section id="modules" className="scroll-mt-28 bg-[var(--ec-bg)] py-24">
      <div className="ec-container">
        <SectionIntro
          eyebrow="Our Modules"
          title="Different needs, one connected solution"
          description="Choose the modules your business needs today. Every module shares the same records, users and reporting structure."
        />

        <div className="mt-14 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openModule === item.title;

            return (
              <motion.article
                layout
                key={item.title}
                data-open={isOpen}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: index * 0.045, duration: 0.5 }}
                whileHover={!isOpen ? { y: -7 } : undefined}
                className="ec-module-card ec-card relative overflow-hidden rounded-3xl p-6 text-center"
              >
                <motion.div
                  layout
                  className="mx-auto grid h-20 w-20 place-items-center rounded-full border-[7px] border-[var(--ec-bg)] shadow-[0_12px_35px_rgba(36,121,170,.16)]"
                  style={{ backgroundColor: `${item.accent}20`, color: item.accent }}
                  whileHover={{ rotate: [0, -7, 7, 0], scale: 1.06 }}
                  transition={{ duration: 0.45 }}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>

                <motion.h3
                  layout="position"
                  className="mt-6 text-xl font-semibold text-[var(--ec-title)]"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  layout="position"
                  className="mt-3 text-sm leading-7 text-[var(--ec-muted)]"
                >
                  {item.summary}
                </motion.p>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="details"
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 22 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.34, ease: "easeInOut" }}
                      className="overflow-hidden text-left"
                    >
                      <div className="border-t border-[var(--ec-border)] pt-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4298C7]">
                          Included Capabilities
                        </p>

                        <div className="mt-4 space-y-3">
                          {item.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detail}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: detailIndex * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4298C7]" />
                              <span className="text-sm leading-6 text-[var(--ec-body)]">
                                {detail}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        <Link
                          to="/contact"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4298C7] transition hover:translate-x-1"
                        >
                          Discuss this module
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  layout="position"
                  type="button"
                  onClick={() =>
                    setOpenModule((current) =>
                      current === item.title ? null : item.title,
                    )
                  }
                  aria-expanded={isOpen}
                  className="mx-auto mt-6 inline-flex items-center gap-2 rounded-md bg-[#27B9E8] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(39,185,232,.20)] transition hover:-translate-y-0.5 hover:bg-[#159FD0]"
                >
                  {isOpen ? "Hide Details" : "View Details"}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BusinessOverviewSection() {
  return (
    <section className="ec-alt overflow-hidden py-24">
      <div className="ec-container grid items-center gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <SectionIntro
            eyebrow="Cloud Business Control"
            title="Manage your entire business from one reliable workspace"
            description="Eccountant brings departments, transactions, approvals and reports together so teams work with current information and management sees the complete picture."
            align="left"
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              [Database, "Unified records", "Customers, suppliers, products and transactions stay connected."],
              [LockKeyhole, "Controlled access", "Users see only the functions and records relevant to their role."],
              [Zap, "Faster workflows", "Approvals, reminders and recurring tasks reduce routine manual work."],
              [BarChart3, "Live reporting", "Monitor cash, sales, stock, receivables and profitability."],
            ].map(([Icon, title, text], index) => {
              const ItemIcon = Icon as LucideIcon;

              return (
                <motion.div
                  key={title as string}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="ec-card rounded-2xl p-5"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#4298C7]/12 text-[#4298C7]">
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-semibold text-[var(--ec-title)]">
                    {title as string}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ec-muted)]">
                    {text as string}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-[var(--ec-border)] shadow-[var(--ec-shadow)]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=88"
              alt="Business team reviewing cloud ERP operations"
              className="h-[560px] w-full object-cover"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#07131B]/92 via-[#07131B]/18 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className="ec-glass absolute bottom-6 left-6 right-6 rounded-2xl p-5 sm:bottom-8 sm:left-8 sm:right-8"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#4298C7] text-white">
                <Workflow className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-[var(--ec-title)]">
                  One connected operating model
                </p>
                <p className="mt-1 text-sm text-[var(--ec-muted)]">
                  Request → Approval → Transaction → Record → Report
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ConnectedFlowSection() {
  const steps: FeatureItem[] = [
    { icon: FileText, title: "Quotation", text: "" },
    { icon: ShoppingCart, title: "Sales Order", text: "" },
    { icon: Boxes, title: "Stock", text: "" },
    { icon: Truck, title: "Delivery", text: "" },
    { icon: ReceiptText, title: "Invoice", text: "" },
    { icon: WalletCards, title: "Payment", text: "" },
    { icon: FileBarChart, title: "Reporting", text: "" },
  ];

  return (
    <section className="bg-[var(--ec-bg)] py-24">
      <div className="ec-container">
        <div className="ec-glass relative overflow-hidden rounded-[2rem] p-7 sm:p-10">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#4298C7]/16 blur-[90px]" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#75C6EC]/16 blur-[90px]" />

          <div className="relative">
            <SectionIntro
              eyebrow="Connected Business Flow"
              title="Every transaction moves through one connected process"
              description="A single record can move across sales, inventory, delivery, finance and reporting without duplicate data entry."
            />

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="flex items-center gap-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      whileHover={{ y: -5 }}
                      className="ec-card flex items-center gap-3 rounded-full px-4 py-3"
                    >
                      <Icon className="h-4 w-4 text-[#4298C7]" />
                      <span className="text-sm font-medium text-[var(--ec-text)]">
                        {step.title}
                      </span>
                    </motion.div>

                    {index !== steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 + 0.08 }}
                      >
                        <ArrowRight className="hidden h-4 w-4 text-[#75C6EC] md:block" />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomerStorySection() {
  return (
    <section className="ec-alt py-24">
      <div className="ec-container">
        <SectionIntro
          eyebrow="Business Impact"
          title="Built for growing companies that need reliable control"
          description="A connected ERP environment helps teams reduce manual work, protect data quality and make decisions from current information."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=88"
              alt="Modern company using connected cloud ERP"
              className="h-[500px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07131B]/94 via-[#07131B]/24 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#AEE7FF]">
                Connected Growth
              </p>
              <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">
                Replace scattered spreadsheets with one clear operational view
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-white/[0.72]">
                Finance, sales, stock and reporting remain synchronized while
                every user works through controlled roles and workflows.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Faster closing", "Keep transactions, balances and reports connected throughout the month."],
              ["Cleaner inventory", "Understand stock movement and availability across warehouses."],
              ["Better collections", "Track invoices, due dates, balances and customer follow-up."],
              ["Management insight", "Review sales, margins, cash and operations from current data."],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ x: 5 }}
                className="ec-card rounded-2xl p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#4298C7]/12 text-[#4298C7]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--ec-title)]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--ec-muted)]">
                      {text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImplementationSection() {
  return (
    <section className="bg-[var(--ec-bg)] py-24">
      <div className="ec-container">
        <SectionIntro
          eyebrow="Implementation Roadmap"
          title="A structured journey from scattered records to ERP control"
          description="Every phase is designed around clean data, practical workflows, team adoption and a controlled launch."
        />

        <div className="relative mt-14 grid gap-5 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-[var(--ec-border)] lg:block" />

          {processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -7 }}
              className="ec-card relative rounded-3xl p-6"
            >
              {/* <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl bg-[#4298C7] text-lg font-bold text-white shadow-[0_16px_38px_rgba(66,152,199,.22)]">
                {step.number}
              </div> */}
              <h3 className="mt-7 text-lg font-semibold text-[var(--ec-title)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ec-muted)]">
                {step.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="ec-alt py-24">
      <div className="ec-container grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <SectionIntro
            eyebrow="Business Outcomes"
            title="More visibility, cleaner processes and better decisions"
            description="A properly configured ERP gives management current information and gives teams a more organized way to handle daily work."
            align="left"
          />

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#4298C7]/30 bg-[#4298C7]/10 px-6 py-3.5 font-semibold text-[#4298C7] transition hover:-translate-y-1 hover:bg-[#4298C7] hover:text-white"
          >
            Discuss Your Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -5 }}
              className="ec-card flex items-start gap-4 rounded-2xl p-5"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#4298C7]/12 text-[#4298C7]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="leading-7 text-[var(--ec-body)]">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[var(--ec-bg)] py-24">
      <div className="ec-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <SectionIntro
            eyebrow="Frequently Asked Questions"
            title="Clear answers before your ERP project begins"
            description="Understand modules, migration, cloud access and support before planning your Eccountant implementation."
            align="left"
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              initiallyOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  initiallyOpen = false,
}: {
  question: string;
  answer: string;
  initiallyOpen?: boolean;
}) {
  const [open, setOpen] = useState(initiallyOpen);

  return (
    <motion.div layout className="ec-card overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[var(--ec-title)]">{question}</span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#4298C7]/12 text-[#4298C7]">
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="border-t border-[var(--ec-border)] px-5 py-5 leading-7 text-[var(--ec-muted)]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--ec-bg)] py-24">
      <img
        src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=88"
        alt="Modern office prepared for cloud ERP transformation"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-20 bg-[var(--ec-overlay)]" />

      <div className="ec-container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2.25rem] border border-white/[0.12] px-7 py-12 text-center text-white shadow-[0_32px_100px_rgba(36,121,170,.28)] sm:px-12 sm:py-16"
          style={{
            background: `linear-gradient(135deg, ${BRAND_INK}, ${BRAND_BLUE_DARK}, ${BRAND_BLUE})`,
          }}
        >
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/[0.10] blur-[100px]" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#75C6EC]/28 blur-[110px]" />

          <div className="relative mx-auto max-w-4xl">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#4298C7]"
            >
              <Cloud className="h-7 w-7" />
            </motion.div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Eccountant Cloud ERP Consultation
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Build a cloud ERP environment around your real business process
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/[0.76]">
              We will assess your finance, sales, inventory, purchasing and
              reporting requirements before recommending a practical rollout.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#2479AA] transition hover:-translate-y-1 hover:bg-[#EAF7FD]"
            >
              Start Your Eccountant Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionIntro({
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
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className={`max-w-3xl ${alignment}`}
    >
      <div
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#4298C7] ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>

      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--ec-title)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-[var(--ec-muted)]">
        {description}
      </p>
    </motion.div>
  );
}