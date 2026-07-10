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
  Cloud,
  Database,
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

const appRail = [
  { icon: CircleDollarSign, label: "Finance" },
  { icon: ShoppingCart, label: "Sales" },
  { icon: Boxes, label: "Inventory" },
  { icon: ReceiptText, label: "Purchase" },
  { icon: Users, label: "HR" },
];

const capabilities = [
  {
    icon: CircleDollarSign,
    title: "Accounting & Finance",
    text: "General ledger, receivables, payables, cash flow, taxation, budgeting and financial reporting.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=88",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Customer Control",
    text: "Quotations, orders, invoices, customer balances, collections and complete sales visibility.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=88",
  },
  {
    icon: Boxes,
    title: "Inventory & Warehousing",
    text: "Stock movement, warehouse control, transfers, reorder levels, batches and delivery tracking.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=88",
  },
  {
    icon: Workflow,
    title: "Operations & Production",
    text: "Production planning, assembling, material usage, job costing and operational coordination.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=88",
  },
];

const flowSteps = [
  { icon: FileText, label: "Quotation" },
  { icon: ShoppingCart, label: "Sales Order" },
  { icon: Boxes, label: "Stock Allocation" },
  { icon: Truck, label: "Delivery" },
  { icon: ReceiptText, label: "Invoice" },
  { icon: WalletCards, label: "Payment" },
  { icon: FileBarChart, label: "Reporting" },
];

const implementationSteps = [
  {
    number: "01",
    title: "Business Discovery",
    text: "We study accounting, sales, inventory, branches, users, reports and current bottlenecks.",
  },
  {
    number: "02",
    title: "ERP Architecture",
    text: "We define modules, workflows, permissions, warehouses, approval rules and reporting needs.",
  },
  {
    number: "03",
    title: "Setup & Migration",
    text: "We configure the platform, prepare master data and migrate agreed financial and operational records.",
  },
  {
    number: "04",
    title: "Testing & Training",
    text: "Teams test real scenarios and receive role-based training before launch.",
  },
  {
    number: "05",
    title: "Go Live & Support",
    text: "We support launch, issue resolution, reporting improvements and ongoing optimization.",
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

const industries = [
  { icon: Building2, title: "Trading", text: "Sales, purchases, margins and customer balances." },
  { icon: Truck, title: "Distribution", text: "Warehouses, delivery, stock and fulfilment." },
  { icon: PackageCheck, title: "Manufacturing", text: "Materials, production, cost and finished goods." },
  { icon: Globe2, title: "Multi-Branch", text: "Centralized access, permissions and reporting." },
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
      attributeFilter: ["class", "style", "data-theme", "data-mode", "data-color-mode"],
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["class", "style", "data-theme", "data-mode", "data-color-mode"],
    });

    const interval = window.setInterval(update, 250);
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
          <CapabilityMosaic />
          <ConnectedFlow />
          <AutomationSection />
          <IndustrySection />
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
        background: #f6f8fa;
      }

      .ec-theme-wrap[data-ec-theme="dark"] {
        color-scheme: dark;
        background: #030507;
      }

      .ec-theme-wrap[data-ec-theme="light"] .ec-page {
        --ec-bg: #f6f8fa;
        --ec-alt: #edf3f7;
        --ec-card: rgba(255,255,255,.96);
        --ec-card-soft: rgba(255,255,255,.82);
        --ec-title: #163b55;
        --ec-text: #26495f;
        --ec-body: #496779;
        --ec-muted: #718896;
        --ec-border: rgba(66,152,199,.17);
        --ec-border-strong: rgba(66,152,199,.30);
        --ec-grid: rgba(66,152,199,.07);
        --ec-overlay: rgba(246,248,250,.93);
        --ec-shadow: 0 18px 55px rgba(36,121,170,.10);
        background: #f6f8fa !important;
        color: #26495f !important;
      }

      .ec-theme-wrap[data-ec-theme="dark"] .ec-page {
        --ec-bg: #030507;
        --ec-alt: #080d12;
        --ec-card: rgba(12,20,27,.96);
        --ec-card-soft: rgba(9,16,22,.90);
        --ec-title: #f7fbfe;
        --ec-text: #e7f1f7;
        --ec-body: #c8d8e2;
        --ec-muted: rgba(180,202,215,.72);
        --ec-border: rgba(255,255,255,.11);
        --ec-border-strong: rgba(117,198,236,.34);
        --ec-grid: rgba(117,198,236,.055);
        --ec-overlay: rgba(3,5,7,.94);
        --ec-shadow: 0 24px 75px rgba(0,0,0,.48);
        background: #030507 !important;
        color: #e7f1f7 !important;
      }

      .ec-container {
        width: min(1200px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .ec-grid-bg {
        background-color: var(--ec-bg);
        background-image:
          linear-gradient(var(--ec-grid) 1px, transparent 1px),
          linear-gradient(90deg, var(--ec-grid) 1px, transparent 1px);
        background-size: 78px 78px;
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

      .ec-theme-wrap[data-ec-theme="light"] .ec-alt {
        background: #edf3f7 !important;
      }

      .ec-theme-wrap[data-ec-theme="dark"] .ec-alt {
        background: #080d12 !important;
      }

      .ec-theme-wrap[data-ec-theme="light"] .ec-hero-overlay {
        background:
          linear-gradient(
            90deg,
            #f6f8fa 0%,
            rgba(246,248,250,.96) 48%,
            rgba(225,242,250,.78) 100%
          ) !important;
      }

      .ec-theme-wrap[data-ec-theme="dark"] .ec-hero-overlay {
        background:
          linear-gradient(
            90deg,
            #030507 0%,
            rgba(3,5,7,.96) 48%,
            rgba(2,17,25,.86) 100%
          ) !important;
      }

      .ec-theme-wrap[data-ec-theme="light"] img {
        filter: brightness(.96) saturate(.92);
      }

      .ec-theme-wrap[data-ec-theme="dark"] img {
        filter: brightness(.68) saturate(.86) contrast(1.08);
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
    `}</style>
  );
}

function HeroSection() {
  return (
    <section className="ec-grid-bg relative isolate min-h-[92vh] overflow-hidden pb-20 pt-32">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=88"
        alt="Eccountant Cloud ERP analytics"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-20"
      />
      <div className="ec-hero-overlay absolute inset-0 -z-20" />

      <motion.div
        animate={{ x: [0, 28, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-36 top-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#4298C7]/18 blur-[150px]"
      />

      <motion.div
        animate={{ x: [0, -22, 0], y: [0, 22, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-28 bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#75C6EC]/18 blur-[145px]"
      />

      <div className="ec-container grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--ec-border-strong)] bg-[var(--ec-card-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2479AA] backdrop-blur-xl">
            <Cloud className="h-4 w-4" />
            Eccountant Cloud ERP
          </div>

          <div className="mb-7 flex items-center gap-4">
            <div className="grid h-14 w-16 place-items-center rounded-[45%_55%_55%_45%] bg-[#4298C7] text-2xl font-bold text-white shadow-[0_16px_38px_rgba(66,152,199,.25)]">
              E
            </div>
            <div>
              <div className="text-3xl font-bold tracking-[-0.05em] text-[var(--ec-title)]">
                <span style={{ color: BRAND_BLUE }}>ccountant</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ec-muted)]">
                Cloud ERP
              </div>
            </div>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.05em] text-[var(--ec-title)] sm:text-5xl lg:text-7xl">
            See your entire business
            <span
              className="mt-2 block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(120deg, ${BRAND_BLUE_DARK}, ${BRAND_BLUE}, ${BRAND_SKY})`,
              }}
            >
              from one cloud workspace
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--ec-body)] sm:text-lg">
            Bring finance, sales, purchasing, inventory, operations and
            reporting together in a secure Eccountant environment built around
            your real workflows.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white shadow-[0_18px_50px_rgba(66,152,199,.28)] transition hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, ${BRAND_BLUE}, ${BRAND_BLUE_DARK})`,
              }}
            >
              Start ERP Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--ec-border-strong)] bg-[var(--ec-card-soft)] px-6 py-3.5 font-semibold text-[var(--ec-title)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#75C6EC]/55"
            >
              Explore ERP Modules
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          className="relative"
        >
          <ErpWorkspace />
        </motion.div>
      </div>
    </section>
  );
}

function ErpWorkspace() {
  return (
    <div className="ec-glass relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
      <div className="grid gap-4 md:grid-cols-[92px_1fr]">
        <div className="rounded-2xl border border-[var(--ec-border)] bg-[var(--ec-card)] p-3">
          <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-[#4298C7] text-lg font-bold text-white">
            E
          </div>

          <div className="space-y-3">
            {appRail.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.07 }}
                  className={`group rounded-xl p-2 text-center ${
                    index === 0 ? "bg-[#4298C7]/12" : ""
                  }`}
                >
                  <Icon className="mx-auto h-5 w-5 text-[#4298C7]" />
                  <p className="mt-1 text-[10px] text-[var(--ec-muted)]">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between rounded-2xl border border-[var(--ec-border)] bg-[var(--ec-card)] px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--ec-muted)]">
                Executive Workspace
              </p>
              <h2 className="mt-1 text-lg font-semibold text-[var(--ec-title)]">
                Today’s financial position
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              ["Cash", "$96K", WalletCards],
              ["Receivables", "$128K", TrendingUp],
              ["Stock", "$214K", Boxes],
              ["Orders", "186", ShoppingCart],
            ].map(([label, value, Icon]) => {
              const MetricIcon = Icon as LucideIcon;

              return (
                <div
                  key={label as string}
                  className="rounded-2xl border border-[var(--ec-border)] bg-[var(--ec-card)] p-4"
                >
                  <MetricIcon className="h-5 w-5 text-[#4298C7]" />
                  <p className="mt-4 text-2xl font-semibold text-[var(--ec-title)]">
                    {value as string}
                  </p>
                  <p className="mt-1 text-xs text-[var(--ec-muted)]">
                    {label as string}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-4 rounded-2xl border border-[var(--ec-border)] bg-[var(--ec-card)] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--ec-muted)]">
                  Cashflow Forecast
                </p>
                <p className="mt-1 font-semibold text-[var(--ec-title)]">
                  Incoming vs outgoing
                </p>
              </div>
              <BarChart3 className="h-5 w-5 text-[#4298C7]" />
            </div>

            <div className="mt-6 flex h-32 items-end gap-2">
              {[44, 60, 52, 74, 66, 84, 78, 94].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.65 }}
                  className="flex-1 rounded-t-md"
                  style={{
                    background: `linear-gradient(180deg, ${BRAND_SKY}, ${BRAND_BLUE_DARK})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiRibbon() {
  return (
    <section className="ec-alt border-y border-[var(--ec-border)] bg-[var(--ec-alt)] py-7">
      <div className="ec-container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [Cloud, "Cloud Access", "Secure work across locations"],
          [Database, "Connected Records", "One source of business data"],
          [ShieldCheck, "Controlled Users", "Role-based permissions"],
          [RefreshCw, "Live Synchronization", "Current financial and stock data"],
        ].map(([Icon, title, text], index) => {
          const ItemIcon = Icon as LucideIcon;

          return (
            <motion.div
              key={title as string}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center gap-4"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#4298C7]/12 text-[#4298C7]">
                <ItemIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-[var(--ec-title)]">
                  {title as string}
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--ec-muted)]">
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

function CapabilityMosaic() {
  return (
    <section id="capabilities" className="bg-[var(--ec-bg)] py-24">
      <div className="ec-container">
        <SectionIntro
          eyebrow="Cloud ERP Capabilities"
          title="Built around the daily work that keeps your business moving"
          description="Each Eccountant module connects with the same shared records, so departments can work faster without losing control or visibility."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07, duration: 0.55 }}
                whileHover={{ y: -7 }}
                className="ec-card group overflow-hidden rounded-[1.75rem]"
              >
                <div className="grid md:grid-cols-[.9fr_1.1fr]">
                  <div className="relative min-h-[260px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B25]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 grid h-12 w-12 place-items-center rounded-xl bg-[#4298C7] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-7">
                    <h3 className="text-2xl font-semibold text-[var(--ec-title)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[var(--ec-muted)]">
                      {item.text}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4298C7]">
                      Connected with the full ERP
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ConnectedFlow() {
  return (
    <section className="ec-alt bg-[var(--ec-alt)] py-24">
      <div className="ec-container">
        <div className="ec-glass relative overflow-hidden rounded-[2rem] p-7 sm:p-10">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#4298C7]/16 blur-[90px]" />
          <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#75C6EC]/16 blur-[90px]" />

          <div className="relative">
            <SectionIntro
              eyebrow="Connected Business Flow"
              title="From quotation to reporting, every transaction stays connected"
              description="A single record can move across sales, inventory, delivery, finance and management reporting without duplicate work."
              align="left"
            />

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.label} className="flex items-center gap-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className="ec-card flex items-center gap-3 rounded-full px-4 py-3"
                    >
                      <Icon className="h-4 w-4 text-[#4298C7]" />
                      <span className="text-sm font-medium text-[var(--ec-text)]">
                        {step.label}
                      </span>
                    </motion.div>

                    {index !== flowSteps.length - 1 && (
                      <ArrowRight className="hidden h-4 w-4 text-[#75C6EC] md:block" />
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

function AutomationSection() {
  return (
    <section className="bg-[var(--ec-bg)] py-24">
      <div className="ec-container grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <SectionIntro
            eyebrow="Automation & Control"
            title="Reduce routine work without losing accountability"
            description="Use approvals, reminders, access rules and live dashboards to keep everyday processes fast, visible and controlled."
            align="left"
          />

          <div className="mt-9 space-y-4">
            {[
              [Zap, "Automated approvals", "Route purchases, discounts and exceptions to the right decision-maker."],
              [LockKeyhole, "Role-based access", "Control who can view, edit, approve and report on each area."],
              [FileBarChart, "Live dashboards", "See cash, sales, stock and receivables without manual consolidation."],
            ].map(([Icon, title, text], index) => {
              const ItemIcon = Icon as LucideIcon;

              return (
                <motion.div
                  key={title as string}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="ec-card flex gap-4 rounded-2xl p-5"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#4298C7]/12 text-[#4298C7]">
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--ec-title)]">
                      {title as string}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--ec-muted)]">
                      {text as string}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-[var(--ec-border)]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=88"
              alt="Team managing connected ERP workflows"
              className="h-[580px] w-full object-cover"
            />
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#07131B]/92 via-[#07131B]/20 to-transparent" />
          </div>

          <div className="ec-glass absolute bottom-7 left-7 right-7 rounded-2xl p-5">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#4298C7] text-white">
                <Workflow className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-[var(--ec-title)]">
                  Connected approval workflow
                </p>
                <p className="mt-1 text-sm text-[var(--ec-muted)]">
                  Request → Review → Approval → Record → Report
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IndustrySection() {
  return (
    <section className="ec-alt bg-[var(--ec-alt)] py-24">
      <div className="ec-container">
        <SectionIntro
          eyebrow="Industry Fit"
          title="Configured for the way different businesses actually operate"
          description="Eccountant can be structured around your products, warehouses, branches, teams and reporting priorities."
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
                whileHover={{ y: -8 }}
                className="ec-card relative min-h-[250px] overflow-hidden rounded-3xl p-6"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#4298C7]/14 blur-2xl" />

                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#4298C7]/12 text-[#4298C7]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-9 text-xl font-semibold text-[var(--ec-title)]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[var(--ec-muted)]">
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

function ImplementationSection() {
  return (
    <section className="bg-[var(--ec-bg)] py-24">
      <div className="ec-container">
        <SectionIntro
          eyebrow="Implementation Roadmap"
          title="A structured journey from scattered records to cloud ERP control"
          description="Every phase is designed around clean data, practical workflows, team adoption and a controlled launch."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {implementationSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="ec-card relative rounded-3xl p-6"
            >
              <div className="text-4xl font-bold tracking-[-0.05em] text-[#4298C7]/25">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--ec-title)]">
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
    <section className="ec-alt bg-[var(--ec-alt)] py-24">
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
          {faqs.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="ec-card overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[var(--ec-title)]">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#4298C7] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 leading-7 text-[var(--ec-muted)]">{answer}</p>
      </motion.div>
    </div>
  );
}

function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--ec-bg)] py-24">
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=88"
        alt="Modern office using cloud systems"
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-20 bg-[var(--ec-overlay)]" />

      <div className="ec-container">
        <div
          className="relative overflow-hidden rounded-[2.25rem] border border-white/12 px-7 py-12 text-center text-white shadow-[0_32px_100px_rgba(36,121,170,.28)] sm:px-12 sm:py-16"
          style={{
            background: `linear-gradient(135deg, ${BRAND_INK}, ${BRAND_BLUE_DARK}, ${BRAND_BLUE})`,
          }}
        >
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#75C6EC]/28 blur-[110px]" />

          <div className="relative mx-auto max-w-4xl">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#4298C7]">
              <Cloud className="h-7 w-7" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Eccountant Cloud ERP Consultation
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Build a cloud ERP environment around your real business process
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/76">
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
        </div>
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