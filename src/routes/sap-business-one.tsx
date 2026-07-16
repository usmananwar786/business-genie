import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  Check,
  ChevronDown,
  CircleDollarSign,
  Factory,
  FileBarChart,
  Globe2,
  PackageCheck,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Truck,
  Users,
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
          "SAP Business One consulting, implementation, migration, finance, sales, purchasing, inventory, production, reporting, training and support.",
      },
      {
        property: "og:title",
        content: "SAP Business One Consulting | Business Genie Consulting",
      },
      {
        property: "og:description",
        content:
          "Connect finance, sales, purchasing, inventory, production and reporting with SAP Business One.",
      },
    ],
  }),
  component: SapBusinessOne,
});

type ThemeMode = "light" | "dark";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: CircleDollarSign,
    title: "Accounting and financials",
    description:
      "Manage accounting, banking, cash flow, fixed assets, budgeting and financial reporting in one governed system.",
  },
  {
    icon: ShoppingCart,
    title: "Sales and customer management",
    description:
      "Track opportunities, quotations, sales orders, deliveries, invoices and complete customer history.",
  },
  {
    icon: Boxes,
    title: "Inventory and distribution",
    description:
      "Improve stock accuracy across warehouses with batch, serial, availability and replenishment controls.",
  },
  {
    icon: Factory,
    title: "Production and MRP",
    description:
      "Plan materials, manage bills of materials and connect production demand with purchasing and inventory.",
  },
  {
    icon: FileBarChart,
    title: "Reporting and analytics",
    description:
      "Turn live operational data into dashboards, margin reporting and faster management decisions.",
  },
  {
    icon: Workflow,
    title: "Approvals and workflow",
    description:
      "Create structured approvals for purchases, discounts, payments and operational exceptions.",
  },
];

const customerStories = [
  {
    logo: "PS",
    company: "Premier Shukuroglou",
    title: "Reaching next-level business across three countries",
    text: "SAP Business One helped the team improve reporting, control stock and coordinate operations across locations.",
    accent: "#1E9E76",
  },
  {
    logo: "AS",
    company: "AS Company",
    title: "Creating and distributing toys beyond child's play",
    text: "Connected planning and reporting helped the business respond faster to demand and expand with confidence.",
    accent: "#C0183F",
  },
  {
    logo: "SM",
    company: "Sanmar",
    title: "Building stronger operational visibility",
    text: "A single ERP foundation improved stock planning, purchasing controls and business-wide reporting.",
    accent: "#0A6ED1",
  },
  {
    logo: "TF",
    company: "Tafel Flower",
    title: "Managing growth through reliable information",
    text: "Finance and operations now work from one source of truth with clearer reporting and faster decisions.",
    accent: "#D92D8A",
  },
];

const faqs = [
  {
    question: "What is SAP Business One used for?",
    answer:
      "SAP Business One is an ERP solution for small and midsize businesses. It connects finance, sales, purchasing, inventory, production, service and reporting in one system.",
  },
  {
    question: "What is the difference between SAP ERP and SAP Business One?",
    answer:
      "SAP Business One is designed for growing small and midsize companies and subsidiaries. Larger SAP ERP platforms are generally built for more complex global enterprise environments.",
  },
  {
    question: "Is SAP Business One customizable?",
    answer:
      "Yes. SAP Business One can be configured with user roles, approvals, reports, dashboards, fields, forms, integrations and industry-specific add-ons.",
  },
  {
    question: "Can you migrate data from our current system?",
    answer:
      "Yes. We can prepare, cleanse and migrate agreed master data, opening balances, customers, suppliers, items, stock and other required records.",
  },
];

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
    storageText = THEME_STORAGE_KEYS.map(
      (key) => window.localStorage.getItem(key) || "",
    )
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
    const update = () => setMode(readSapThemeMode());
    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme", "data-mode"],
    });
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["class", "style", "data-theme", "data-mode"],
    });

    const interval = window.setInterval(update, 300);
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    window.addEventListener("storage", update);
    window.addEventListener("click", update, true);
    media?.addEventListener?.("change", update);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
      window.removeEventListener("storage", update);
      window.removeEventListener("click", update, true);
      media?.removeEventListener?.("change", update);
    };
  }, []);

  return mode;
}

function SapBusinessOne() {
  const mode = useSapThemeMode();

  return (
    <SiteLayout>
      <div
        className={`sap-business-theme ${mode === "dark" ? "dark" : ""}`}
        data-sap-theme={mode}
      >
        <SapStyles />
        <main className="sap-page min-h-screen overflow-hidden bg-[var(--sap-bg)] text-[var(--sap-text)]">
          <HeroSection />
          <WhatIsSection />
          <CustomerStories />
          <QuoteSection />
          <FaqSection />
          <FeedbackSection />
        </main>
      </div>
    </SiteLayout>
  );
}

function SapStyles() {
  return (
    <style>{`
      .sap-business-theme {
        color-scheme: light;
        --sap-bg: #ffffff;
        --sap-bg-soft: #f5f7f8;
        --sap-surface: #ffffff;
        --sap-surface-soft: #f7f9fa;
        --sap-title: #101820;
        --sap-text: #23313d;
        --sap-body: #41515d;
        --sap-muted: #6d7b86;
        --sap-border: rgba(16, 24, 32, 0.13);
        --sap-shadow: 0 14px 42px rgba(24, 45, 60, 0.10);
      }

      .sap-business-theme[data-sap-theme="dark"] {
        color-scheme: dark;
        --sap-bg: #050708;
        --sap-bg-soft: #0b0f12;
        --sap-surface: #10161a;
        --sap-surface-soft: #0c1114;
        --sap-title: #f7fbfd;
        --sap-text: #e8f0f4;
        --sap-body: #c7d3d9;
        --sap-muted: #90a1aa;
        --sap-border: rgba(255, 255, 255, 0.12);
        --sap-shadow: 0 22px 70px rgba(0, 0, 0, 0.46);
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
        transition: background-color .3s ease, border-color .3s ease,
          color .3s ease, box-shadow .3s ease;
      }

      .sap-container {
        width: min(1160px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .sap-card {
        background: var(--sap-surface);
        border: 1px solid var(--sap-border);
        box-shadow: var(--sap-shadow);
      }

      .sap-section-soft { background: var(--sap-bg-soft); }

      .sap-dashboard-grid {
        background-image:
          linear-gradient(rgba(10,110,209,.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(10,110,209,.055) 1px, transparent 1px);
        background-size: 28px 28px;
      }

      .sap-business-theme[data-sap-theme="dark"] .sap-dashboard-grid {
        background-image:
          linear-gradient(rgba(0,185,242,.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,185,242,.06) 1px, transparent 1px);
      }

      .sap-green-hero {
        background:
          radial-gradient(circle at 18% 18%, rgba(255,255,255,.15), transparent 34%),
          linear-gradient(118deg, #18864B 0%, #147741 55%, #0f6538 100%);
      }

      .sap-business-theme[data-sap-theme="dark"] .sap-green-hero {
        background:
          radial-gradient(circle at 18% 18%, rgba(0,185,242,.12), transparent 34%),
          linear-gradient(118deg, #07140d 0%, #0a2517 58%, #07110c 100%);
      }

      .sap-image {
        filter: saturate(.94) contrast(1.02);
      }

      .sap-business-theme[data-sap-theme="dark"] .sap-image {
        filter: brightness(.72) saturate(.88) contrast(1.08);
      }

      .sap-marquee-track {
        animation: sap-marquee 24s linear infinite;
      }

      @keyframes sap-marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      @media (prefers-reduced-motion: reduce) {
        .sap-marquee-track { animation: none; }
      }
    `}</style>
  );
}

function HeroSection() {
  return (
    <section className="sap-green-hero relative isolate overflow-hidden pt-28 text-white lg:min-h-[660px] lg:pt-32">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 35, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-36 top-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-white/10 blur-[130px]"
      />

      <div className="sap-container grid items-center gap-12 pb-16 lg:grid-cols-[.92fr_1.08fr] lg:pb-20">
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-5xl lg:text-[66px]">
            A single, affordable ERP solution for managing your entire company
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
            Gain better control over accounting, sales, purchasing, inventory,
            production and reporting with one connected business platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-[3px] bg-white px-6 py-3.5 font-semibold text-[#12683a] shadow-lg transition hover:-translate-y-1"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-[3px] border border-white/45 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/16"
            >
              Request a quote
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.75 }}
          className="relative lg:-mr-20"
        >
          <SapDashboard />
        </motion.div>
      </div>
    </section>
  );
}

function SapDashboard() {
  const cards = useMemo(
    () => [
      ["Sales", "$142K", BarChart3],
      ["Orders", "312", ShoppingCart],
      ["Inventory", "2,488", Boxes],
      ["Receivables", "$38K", CircleDollarSign],
      ["Purchasing", "84", Truck],
      ["Production", "91%", Factory],
      ["Customers", "1,246", Users],
      ["Reports", "Live", FileBarChart],
      ["Warehouses", "6", Building2],
      ["On-time", "96%", PackageCheck],
      ["Regions", "12", Globe2],
      ["Approvals", "18", ShieldCheck],
    ],
    [],
  );

  return (
    <div className="sap-dashboard-grid relative overflow-hidden rounded-l-[2rem] border border-white/30 bg-white/95 p-4 shadow-[0_30px_80px_rgba(0,0,0,.18)] sm:p-6 dark:bg-[#10161a]/95">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            SAP Business One
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
            Business cockpit
          </h2>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
          Live
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3">
        {cards.map(([label, value, Icon], index) => {
          const CardIcon = Icon as LucideIcon;
          return (
            <motion.div
              key={label as string}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/[0.045]"
            >
              <CardIcon className="h-4 w-4 text-[#0A6ED1] dark:text-[#59D9F7]" />
              <p className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                <AnimatedDashboardValue
                  value={value as string}
                  delay={220 + index * 85}
                />
              </p>
              <p className="mt-1 text-[10px] leading-4 text-slate-500 dark:text-slate-400">
                {label as string}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}


function AnimatedDashboardValue({
  value,
  delay = 0,
}: {
  value: string;
  delay?: number;
}) {
  const parsedValue = useMemo(() => {
    const match = value.match(/^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);

    if (!match) return null;

    const numericValue = Number(match[2].replace(/,/g, ""));
    if (!Number.isFinite(numericValue)) return null;

    const decimalPart = match[2].split(".")[1];

    return {
      prefix: match[1],
      target: numericValue,
      suffix: match[3],
      decimals: decimalPart?.length ?? 0,
    };
  }, [value]);

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!parsedValue) return;

    let animationFrame = 0;
    let delayTimer = 0;
    let startTime = 0;
    const duration = parsedValue.target >= 1000 ? 1850 : 1450;

    const animateValue = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCurrentValue(parsedValue.target * easedProgress);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animateValue);
      } else {
        setCurrentValue(parsedValue.target);
      }
    };

    setCurrentValue(0);
    delayTimer = window.setTimeout(() => {
      animationFrame = window.requestAnimationFrame(animateValue);
    }, delay);

    return () => {
      window.clearTimeout(delayTimer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [delay, parsedValue]);

  if (!parsedValue) {
    return (
      <motion.span
        initial={{ opacity: 0.55, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay / 1000, duration: 0.45 }}
      >
        {value}
      </motion.span>
    );
  }

  const formattedValue = currentValue.toLocaleString("en-US", {
    minimumFractionDigits: parsedValue.decimals,
    maximumFractionDigits: parsedValue.decimals,
  });

  return (
    <motion.span
      aria-label={value}
      initial={{ opacity: 0.4, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.4 }}
      className="inline-block tabular-nums"
    >
      {parsedValue.prefix}
      {formattedValue}
      {parsedValue.suffix}
    </motion.span>
  );
}

function WhatIsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[var(--sap-bg)] py-20 sm:py-24">
      <div className="sap-container">
        <SectionTitle
          eyebrow="SAP Business One"
          title="What is SAP Business One?"
          description="An affordable ERP solution that helps growing businesses manage accounting, financials, purchasing, inventory, sales, customer relationships and reporting in one place."
          align="left"
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[1.75rem]"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=88"
              alt="Business team reviewing an SAP Business One dashboard"
              className="sap-image h-[440px] w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04131f]/72 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/35 px-5 py-4 text-white shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[350px]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-white/70">
                Connected ERP workspace
              </p>
              <p className="mt-1 text-sm leading-6 text-white/90">
                Finance, inventory, purchasing and reporting in one clear business view.
              </p>
            </motion.div>
          </motion.div>

          <div>
            <h3 className="text-2xl font-semibold text-[var(--sap-title)] sm:text-3xl">
              Gain greater control over your business or subsidiary
            </h3>
            <p className="mt-4 leading-8 text-[var(--sap-body)]">
              Connect departments, simplify everyday processes and access the
              information you need to make faster, more confident decisions.
            </p>
            <div className="mt-7 space-y-3">
              {features.slice(0, 4).map((feature, index) => {
                const Icon = feature.icon;
                const open = active === index;
                return (
                  <button
                    key={feature.title}
                    type="button"
                    onClick={() => setActive(index)}
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      open
                        ? "border-[#0A6ED1]/45 bg-[#0A6ED1]/[0.06]"
                        : "border-[var(--sap-border)] bg-[var(--sap-surface-soft)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-[#0A6ED1] dark:text-[#59D9F7]" />
                      <span className="font-semibold text-[var(--sap-title)]">
                        {feature.title}
                      </span>
                      <ChevronDown
                        className={`ml-auto h-4 w-4 text-[var(--sap-muted)] transition ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-8 pt-3 text-sm leading-6 text-[var(--sap-muted)]"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomerStories() {
  return (
    <section className="sap-section-soft overflow-hidden py-20 sm:py-24">
      <div className="sap-container">
        <SectionTitle
          eyebrow="Customer success"
          title="How growing businesses use SAP Business One"
          description="See how companies use connected finance, inventory, sales and reporting to support growth."
        />

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {customerStories.map((story, index) => (
            <motion.article
              key={story.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07 }}
              className="group"
            >
              <div className="flex items-center gap-4">
                <div
                  className="grid h-14 w-14 place-items-center rounded-lg text-lg font-bold text-white shadow-lg"
                  style={{ backgroundColor: story.accent }}
                >
                  {story.logo}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.17em] text-[var(--sap-muted)]">
                    Customer story
                  </p>
                  <h3 className="mt-1 font-semibold text-[var(--sap-title)]">
                    {story.company}
                  </h3>
                </div>
              </div>
              <h4 className="mt-6 text-xl font-semibold leading-snug text-[var(--sap-title)]">
                {story.title}
              </h4>
              <p className="mt-3 leading-7 text-[var(--sap-body)]">
                {story.text}
              </p>
              <a
                href="#quote"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A6ED1] transition hover:text-[#085caf] dark:text-[#59D9F7] dark:hover:text-[#8BE7FA]"
              >
                Read customer story
                <span className="grid h-7 w-7 place-items-center rounded-full border border-current/25 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="quote" className="bg-[var(--sap-bg)] py-20 sm:py-24">
      <div className="sap-container grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0A6ED1] via-[#3189df] to-[#7a5cff] p-8 text-white sm:p-10"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-[90px]" />
          <Sparkles className="h-8 w-8" />
          <h2 className="mt-6 max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">
            Request a quote tailored to your business
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-white/78">
            Tell us about your company, current systems and priorities. We will
            recommend a practical SAP Business One roadmap.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Transparent scope", "Module recommendations", "Migration plan", "Implementation timeline"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ),
            )}
          </div>
        </motion.div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0A6ED1] dark:text-[#59D9F7]">
            Get started
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[var(--sap-title)] sm:text-4xl">
            Get started with SAP Business One
          </h2>
          <p className="mt-4 leading-8 text-[var(--sap-body)]">
            Receive transparent pricing based on your users, modules,
            integrations and migration requirements.
          </p>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="mt-7 inline-flex items-center gap-2 rounded-[3px] bg-[#0A6ED1] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#085caf]"
          >
            Request a quote
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 overflow-hidden"
                onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Full name", "text"],
                    ["Business email", "email"],
                    ["Company", "text"],
                    ["Phone", "tel"],
                  ].map(([label, type]) => (
                    <label key={label} className="text-sm text-[var(--sap-body)]">
                      {label}
                      <input
                        type={type}
                        className="mt-2 h-12 w-full rounded-lg border border-[var(--sap-border)] bg-[var(--sap-surface)] px-4 text-[var(--sap-title)] outline-none focus:border-[#0A6ED1]"
                      />
                    </label>
                  ))}
                </div>
                <label className="mt-3 block text-sm text-[var(--sap-body)]">
                  Tell us what you need
                  <textarea className="mt-2 min-h-28 w-full rounded-lg border border-[var(--sap-border)] bg-[var(--sap-surface)] p-4 text-[var(--sap-title)] outline-none focus:border-[#0A6ED1]" />
                </label>
                <button
                  type="submit"
                  className="mt-4 rounded-[3px] bg-[#18864B] px-6 py-3 font-semibold text-white"
                >
                  Submit request
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="sap-section-soft py-20 sm:py-24">
      <div className="sap-container">
        <SectionTitle
          eyebrow="Frequently asked questions"
          title="Frequently asked questions about SAP Business One"
          description="Clear answers to the most common questions before an ERP implementation."
          align="left"
        />
        <div className="mt-10 divide-y divide-[var(--sap-border)] border-y border-[var(--sap-border)]">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} initiallyOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
  initiallyOpen,
}: {
  faq: { question: string; answer: string };
  initiallyOpen: boolean;
}) {
  const [open, setOpen] = useState(initiallyOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#0A6ED1] transition ${open ? "rotate-180" : ""}`}
        />
        <span className="font-semibold text-[var(--sap-title)]">
          {faq.question}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pb-6 pl-9 leading-7 text-[var(--sap-body)]"
          >
            {faq.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function FeedbackSection() {
  const [selected, setSelected] = useState<"up" | "down" | null>(null);

  return (
    <section className="bg-[var(--sap-bg)] py-14">
      <div className="sap-container flex flex-col items-center justify-center gap-5 text-center sm:flex-row">
        <p className="text-lg font-semibold text-[var(--sap-title)]">
          How is your experience with this page?
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setSelected("down")}
            className={`grid h-11 w-11 place-items-center rounded-lg border transition ${
              selected === "down"
                ? "border-[#0A6ED1] bg-[#0A6ED1] text-white"
                : "border-[var(--sap-border)] bg-[var(--sap-surface)] text-[#0A6ED1]"
            }`}
            aria-label="Not helpful"
          >
            <ThumbsDown className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setSelected("up")}
            className={`grid h-11 w-11 place-items-center rounded-lg border transition ${
              selected === "up"
                ? "border-[#0A6ED1] bg-[#0A6ED1] text-white"
                : "border-[var(--sap-border)] bg-[var(--sap-surface)] text-[#0A6ED1]"
            }`}
            aria-label="Helpful"
          >
            <ThumbsUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}


function SectionTitle({
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
      className={`max-w-3xl ${alignment}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0A6ED1] dark:text-[#59D9F7]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--sap-title)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--sap-body)]">
        {description}
      </p>
    </motion.div>
  );
}