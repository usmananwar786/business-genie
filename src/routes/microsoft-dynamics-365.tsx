import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Database,
  Headphones,
  LineChart,
  Sparkles,
  Truck,
  Users,
  Zap,
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

type ThemeMode = "light" | "dark";

type ActionItem = {
  title: string;
  description: string;
  link: string;
  image: string;
};

type ProductTab = {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: LucideIcon;
};

const overviewCards = [
  {
    title: "What is Dynamics 365?",
    description:
      "Become more data-driven and innovative with connected apps for sales, service, finance and operations.",
    cta: "Explore Dynamics 365",
    href: "#solutions",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=86",
  },
  {
    title: "Take a guided tour",
    description:
      "See how connected workflows help teams improve productivity and deliver better customer experiences.",
    cta: "Start your tour",
    href: "#applications",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=86",
  },
  {
    title: "Compare plans and solutions",
    description:
      "Choose the right Dynamics 365 capabilities for your current business priorities and future growth.",
    cta: "See solution options",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=86",
  },
];

const actionItems: ActionItem[] = [
  {
    title: "Modernize your CRM",
    description:
      "Enhance customer relationships across sales, marketing and service with connected data, intelligent assistance and clear next actions.",
    link: "Explore agentic CRM",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1500&q=88",
  },
  {
    title: "Achieve more with agentic ERP",
    description:
      "Reinvent operations, improve productivity and gain a complete view of finance, supply chain and project performance.",
    link: "Explore agentic ERP",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1500&q=88",
  },
  {
    title: "Improve sales efficiency",
    description:
      "Use AI and real-time insights to understand customers, personalize journeys and close more deals with less manual work.",
    link: "Explore agentic sales",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1500&q=88",
  },
  {
    title: "Personalize service experiences",
    description:
      "Create lasting customer connections with intelligent case routing, knowledge recommendations and proactive support.",
    link: "Explore agentic service",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1500&q=88",
  },
];

const productTabs: ProductTab[] = [
  {
    label: "Sales",
    eyebrow: "Dynamics 365 Sales",
    title: "Turn every customer signal into the next best action",
    description:
      "Prioritize opportunities, summarize customer conversations and keep sellers focused on the deals that matter most.",
    metric: "34%",
    metricLabel: "faster seller follow-up",
    icon: Users,
  },
  {
    label: "Finance",
    eyebrow: "Dynamics 365 Finance",
    title: "Make finance faster, clearer and more predictive",
    description:
      "Automate routine finance work, improve forecasting and give decision-makers a reliable view of performance.",
    metric: "42%",
    metricLabel: "less manual reporting",
    icon: CircleDollarSign,
  },
  {
    label: "Supply chain",
    eyebrow: "Dynamics 365 Supply Chain",
    title: "Build more resilient and connected operations",
    description:
      "Use real-time inventory, demand and fulfilment insights to keep products moving and customers informed.",
    metric: "29%",
    metricLabel: "better stock visibility",
    icon: Truck,
  },
  {
    label: "Customer service",
    eyebrow: "Dynamics 365 Customer Service",
    title: "Help every service agent resolve cases with confidence",
    description:
      "Surface the right knowledge, automate summaries and deliver personalized service across every customer channel.",
    metric: "31%",
    metricLabel: "faster case resolution",
    icon: Headphones,
  },
  {
    label: "Customer insights",
    eyebrow: "Dynamics 365 Customer Insights",
    title: "Create connected journeys around real customer intent",
    description:
      "Unify customer profiles, build practical segments and trigger personalized experiences at the right moment.",
    metric: "2.4x",
    metricLabel: "stronger engagement",
    icon: LineChart,
  },
];

const agentCards = [
  {
    title: "Sales qualification agent",
    description:
      "Research new leads, identify buying signals and prepare sellers with a concise opportunity brief.",
    icon: Users,
  },
  {
    title: "Supplier communication agent",
    description:
      "Track purchase commitments, surface risks and keep supplier conversations organized automatically.",
    icon: Truck,
  },
  {
    title: "Customer intent agent",
    description:
      "Recognize customer needs and suggest the most useful journey, offer or service response.",
    icon: Bot,
  },
];

const marketplaceApps = [
  {
    name: "Power BI",
    category: "Analytics",
    description: "Interactive business intelligence and executive reporting.",
    icon: LineChart,
  },
  {
    name: "Power Automate",
    category: "Automation",
    description: "Connected approvals, alerts and cross-platform workflows.",
    icon: Zap,
  },
  {
    name: "Microsoft Teams",
    category: "Collaboration",
    description: "Customer and operational context inside everyday teamwork.",
    icon: Users,
  },
  {
    name: "Business Central",
    category: "ERP",
    description: "Finance, purchasing, inventory and operations for growing teams.",
    icon: BriefcaseBusiness,
  },
];

const customerStories = [
  {
    company: "Northstar Retail",
    quote:
      "Business Genie connected our sales, service and reporting so teams stopped working from different versions of the truth.",
    result: "38% faster customer response",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1500&q=88",
  },
  {
    company: "Summit Distribution",
    quote:
      "We can now see inventory, purchasing and customer demand in one place and act before issues become delays.",
    result: "27% fewer fulfilment delays",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1500&q=88",
  },
  {
    company: "Apex Services",
    quote:
      "The new Dynamics 365 workflows gave managers visibility without adding more admin work for the service team.",
    result: "41% less manual reporting",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1500&q=88",
  },
];

const newsCards = [
  {
    eyebrow: "Product innovation",
    title: "How agentic workflows are changing modern business applications",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=86",
  },
  {
    eyebrow: "Customer experience",
    title: "Five practical ways to connect sales, service and customer data",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=86",
  },
  {
    eyebrow: "Operations",
    title: "Building a clearer path from business data to daily action",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=86",
  },
];

const themeStorageKeys = [
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

  const elements = [
    "header",
    "nav",
    "[data-header]",
    ".site-header",
    ".navbar",
    ".main-header",
  ]
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
    storageText = themeStorageKeys
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

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function useDynamicsThemeMode(): ThemeMode {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const updateMode = () => setMode(readDynamicsThemeMode());
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
    const interval = window.setInterval(updateMode, 300);
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
  const theme = useDynamicsThemeMode();

  return (
    <SiteLayout>
      <div
        className={`d365-theme-wrap ${theme === "dark" ? "dark" : ""}`}
        data-d365-theme={theme}
      >
        <DynamicsThemeStyles />

        <main className="d365-page min-h-screen overflow-hidden bg-[var(--d-bg)] text-[var(--d-text)]">
          <HeroSection />
          
          <OverviewSection />
          <ActionSection />
          <ApplicationsSection />
          <ProcessAgentsSection />
          <MarketplaceSection />
          <CustomerStoriesSection />
          <NewsSection />
          <ContactSection />
        </main>
      </div>
    </SiteLayout>
  );
}

function DynamicsThemeStyles() {
  return (
    <style>{`
      .d365-theme-wrap {
        color-scheme: light;
        background: #ffffff;
      }

      .d365-theme-wrap[data-d365-theme="dark"] {
        color-scheme: dark;
        background: #07080b;
      }

      .d365-theme-wrap[data-d365-theme="light"] .d365-page {
        --d-bg: #ffffff;
        --d-alt: #f5f6f8;
        --d-soft: #eef2f6;
        --d-card: #ffffff;
        --d-title: #111827;
        --d-text: #172033;
        --d-body: #4d596c;
        --d-muted: #68758a;
        --d-border: rgba(17, 24, 39, 0.13);
        --d-border-blue: rgba(0, 103, 184, 0.23);
        --d-shadow: 0 18px 48px rgba(18, 31, 53, 0.10);
        --d-shadow-lg: 0 32px 90px rgba(18, 31, 53, 0.14);
        --d-glass: rgba(255, 255, 255, 0.86);
        background: #ffffff !important;
        color: #172033 !important;
      }

      .d365-theme-wrap[data-d365-theme="dark"] .d365-page {
        --d-bg: #07080b;
        --d-alt: #0d1016;
        --d-soft: #111720;
        --d-card: #0c121a;
        --d-title: #ffffff;
        --d-text: #eef5ff;
        --d-body: #c4cede;
        --d-muted: #91a0b5;
        --d-border: rgba(255, 255, 255, 0.12);
        --d-border-blue: rgba(89, 217, 247, 0.24);
        --d-shadow: 0 22px 60px rgba(0, 0, 0, 0.42);
        --d-shadow-lg: 0 34px 100px rgba(0, 0, 0, 0.54);
        --d-glass: rgba(8, 13, 20, 0.84);
        background: #07080b !important;
        color: #eef5ff !important;
      }

      .d365-container {
        width: min(1200px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .d365-card {
        background: var(--d-card);
        border: 1px solid var(--d-border);
        box-shadow: var(--d-shadow);
      }

      .d365-soft-card {
        background: color-mix(in srgb, var(--d-card) 92%, transparent);
        border: 1px solid var(--d-border);
      }

      .d365-hero {
        background:
          radial-gradient(circle at 14% 25%, rgba(104, 235, 255, 0.64), transparent 33%),
          radial-gradient(circle at 68% 8%, rgba(143, 119, 255, 0.50), transparent 36%),
          linear-gradient(110deg, #73e6f6 0%, #91d8ff 43%, #d3ccff 100%);
      }

      .d365-theme-wrap[data-d365-theme="dark"] .d365-hero {
        background:
          radial-gradient(circle at 14% 25%, rgba(0, 213, 231, 0.23), transparent 34%),
          radial-gradient(circle at 72% 6%, rgba(107, 78, 255, 0.24), transparent 37%),
          linear-gradient(115deg, #06161f 0%, #0c1730 50%, #18122c 100%);
      }

      .d365-app-window {
        background: var(--d-glass);
        border: 1px solid rgba(255, 255, 255, 0.42);
        box-shadow: var(--d-shadow-lg);
        backdrop-filter: blur(20px);
      }

      .d365-theme-wrap[data-d365-theme="dark"] .d365-app-window {
        border-color: rgba(255, 255, 255, 0.12);
      }

      .d365-section {
        background: var(--d-bg);
      }

      .d365-section-alt {
        background: var(--d-alt);
      }

      .d365-sticky-nav {
        background: color-mix(in srgb, var(--d-card) 92%, transparent);
        border-color: var(--d-border);
        backdrop-filter: blur(18px);
      }

      .d365-image-mask {
        clip-path: polygon(11% 0, 100% 0, 100% 100%, 0 100%, 0 18%);
      }

      .d365-demo-gradient {
        background:
          radial-gradient(circle at 12% 82%, rgba(0, 231, 219, 0.78), transparent 28%),
          radial-gradient(circle at 88% 76%, rgba(226, 255, 37, 0.86), transparent 29%),
          radial-gradient(circle at 50% 0%, rgba(108, 78, 255, 0.64), transparent 35%),
          linear-gradient(135deg, #edf8ff, #f3f0ff 55%, #f6ffe7);
      }

      .d365-theme-wrap[data-d365-theme="dark"] .d365-demo-gradient {
        background:
          radial-gradient(circle at 12% 82%, rgba(0, 231, 219, 0.27), transparent 30%),
          radial-gradient(circle at 88% 76%, rgba(226, 255, 37, 0.20), transparent 30%),
          radial-gradient(circle at 50% 0%, rgba(108, 78, 255, 0.31), transparent 38%),
          linear-gradient(135deg, #07131a, #101020 55%, #10170b);
      }

      .d365-page h1,
      .d365-page h2,
      .d365-page h3,
      .d365-page p,
      .d365-page a,
      .d365-page button,
      .d365-page article,
      .d365-page section,
      .d365-page div {
        transition:
          color 0.3s ease,
          background-color 0.3s ease,
          border-color 0.3s ease,
          box-shadow 0.3s ease;
      }

      @media (max-width: 767px) {
        .d365-image-mask {
          clip-path: none;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .d365-page *,
        .d365-page *::before,
        .d365-page *::after {
          scroll-behavior: auto !important;
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.001ms !important;
        }
      }
    `}</style>
  );
}

function HeroSection() {
  const orbitItems = [
    { icon: Users, label: "Sales", x: "18%", y: "28%", delay: 0 },
    { icon: CircleDollarSign, label: "Finance", x: "80%", y: "23%", delay: 0.12 },
    { icon: Headphones, label: "Service", x: "86%", y: "68%", delay: 0.22 },
    { icon: Truck, label: "Supply chain", x: "22%", y: "72%", delay: 0.32 },
    { icon: LineChart, label: "Insights", x: "50%", y: "9%", delay: 0.42 },
    { icon: Bot, label: "AI", x: "50%", y: "88%", delay: 0.52 },
  ];

  return (
    <section className="d365-hero relative isolate overflow-hidden px-4 py-12 sm:px-6 sm:py-14 lg:h-[calc(100svh-80px)] lg:min-h-[480px] lg:max-h-[650px] lg:px-8 lg:py-8">
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 12, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 -top-32 h-[430px] w-[430px] rounded-full border-[60px] border-[#00A7D4]/80"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-30px] top-[64px] h-[220px] w-[110px] bg-[#FFD900]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-30px] top-[284px] h-[170px] w-[110px] bg-[#DDFB31]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-180px] left-[38%] h-[420px] w-[420px] rounded-full bg-white/22 blur-[4px]"
      />

      <div className="d365-container relative z-10 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[550px]"
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#123351] dark:text-[#b9e8ff]">
            Microsoft Dynamics 365
          </div>

          <h1 className="mt-5 text-[40px] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0d1b2d] sm:text-[50px] lg:text-[58px] dark:text-white">
            Agentic business apps for the frontier
          </h1>

          <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-[#21364d] sm:text-base dark:text-[#c8d7ea]">
            Use agentic CRM, ERP and AI-powered workflows to help your teams sell
            smarter, serve customers faster and operate more profitably.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] bg-[#143d70] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#0d2d58]"
            >
              See plans and pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-[3px] border border-[#173e67]/40 bg-white/20 px-5 py-3 text-sm font-semibold text-[#15324e] backdrop-blur transition hover:-translate-y-1 hover:bg-white/45 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              Try for free
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[690px]"
        >
          <div className="d365-app-window relative aspect-[1.72/1] overflow-hidden rounded-[24px] p-5 sm:p-8">
            <div className="absolute inset-x-0 top-0 flex h-10 items-center gap-2 border-b border-white/30 px-5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff605c]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd44]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#00ca4e]" />
            </div>

            <div className="relative mt-8 h-[calc(100%-2rem)] overflow-hidden rounded-2xl bg-white/42 dark:bg-white/[0.04]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6b4eff]/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0067b8]/22"
              />
              <div className="absolute left-1/2 top-1/2 h-[32%] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00b7c3]/18" />

              {orbitItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: [1, 1.08, 1], y: [0, -5, 0] }}
                    transition={{
                      opacity: { delay: 0.5 + item.delay, duration: 0.4 },
                      scale: {
                        delay: item.delay,
                        duration: 3.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      y: {
                        delay: item.delay,
                        duration: 3.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-white/50 bg-white text-[#0067B8] shadow-[0_12px_30px_rgba(38,69,114,.18)] dark:border-white/10 dark:bg-[#111a25] dark:text-[#59d9f7]"
                    style={{ left: item.x, top: item.y }}
                    title={item.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                );
              })}

              <motion.div
                animate={{ y: [0, -5, 0], boxShadow: [
                  "0 14px 36px rgba(72,54,150,.16)",
                  "0 22px 50px rgba(72,54,150,.28)",
                  "0 14px 36px rgba(72,54,150,.16)",
                ] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-lg bg-white px-4 py-3 text-xs font-semibold text-[#7b2f7e] shadow-xl dark:bg-[#111824] dark:text-[#eec8ff] sm:text-sm"
              >
                {/* <Sparkles className="h-4 w-4" /> */}
                Across one connected platform
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-3 hidden rounded-xl border border-white/60 bg-white/90 px-4 py-3 text-xs font-semibold text-[#24344a] shadow-xl backdrop-blur sm:block dark:border-white/10 dark:bg-[#101822]/92 dark:text-white"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#00b7c3]" />
            Real-time business signals
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// function SubNavigation() {
//   const links = [
//     ["Overview", "#overview"],
//     ["Solutions", "#solutions"],
//     ["Products", "#applications"],
//     ["Agents", "#agents"],
//     ["Apps and add-ons", "#marketplace"],
//     ["Customer stories", "#customers"],
//     ["Featured news", "#news"],
//   ];

//   return (
//     <div className="d365-sticky-nav sticky top-0 z-40 border-b">
//       <div className="d365-container flex min-h-14 items-center gap-7 overflow-x-auto py-2 text-xs font-semibold text-[var(--d-body)] sm:text-sm">
//         {links.map(([label, href]) => (
//           <a
//             key={label}
//             href={href}
//             className="whitespace-nowrap border-b-2 border-transparent py-3 transition hover:border-[#0067B8] hover:text-[#0067B8] dark:hover:border-[#59D9F7] dark:hover:text-[#59D9F7]"
//           >
//             {label}
//           </a>
//         ))}

//         <Link
//           to="/contact"
//           className="ml-auto hidden shrink-0 rounded-[3px] bg-[#143d70] px-4 py-2.5 text-white hover:bg-[#0d2d58] lg:inline-flex"
//         >
//           Talk to us
//         </Link>
//       </div>
//     </div>
//   );
// }

function OverviewSection() {
  return (
    <section id="overview" className="d365-section scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="d365-container">
        <SectionHeading
          eyebrow="Overview"
          title="Get to know Dynamics 365"
          description="Learn more about connected applications across sales, marketing, customer service, finance, supply chain and operations."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {overviewCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              whileHover={{ y: -7 }}
              className="d365-card group overflow-hidden rounded-2xl"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="h-44 w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--d-title)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--d-muted)]">
                  {card.description}
                </p>
                {card.href.startsWith("#") ? (
                  <a
                    href={card.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0067B8] dark:text-[#59D9F7]"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-[4px] bg-[#143d70] text-white">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    {card.cta}
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0067B8] dark:text-[#59D9F7]"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-[4px] bg-[#143d70] text-white">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    {card.cta}
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % actionItems.length);
    }, 4300);

    return () => window.clearInterval(interval);
  }, []);

  const activeItem = actionItems[activeIndex];

  return (
    <section id="solutions" className="d365-section-alt scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="d365-container">
        <div className="mb-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--d-muted)]">
            Solutions
          </div>
          <h2 className="mt-3 max-w-4xl text-[32px] font-semibold leading-tight tracking-[-0.035em] text-[var(--d-title)] sm:text-[40px] lg:text-[46px]">
            Move from a system of record to a system of action
          </h2>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
          <div className="divide-y divide-[var(--d-border)] border-l border-[var(--d-border)]">
            {actionItems.map((item, index) => {
              const active = activeIndex === index;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative block w-full px-6 py-5 text-left transition ${active ? "bg-[var(--d-card)]" : "hover:bg-[var(--d-card)]/50"}`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-action-line"
                      className="absolute -left-px inset-y-0 w-[3px] bg-[#0067B8] dark:bg-[#59D9F7]"
                    />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-semibold text-[var(--d-title)]">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[var(--d-muted)] transition-transform ${active ? "rotate-180" : ""}`}
                    />
                  </div>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm leading-7 text-[var(--d-muted)]">
                          {item.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0067B8] underline decoration-[#0067B8]/30 underline-offset-4 dark:text-[#59D9F7]">
                          {item.link}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[390px] overflow-hidden rounded-2xl bg-[#dce8f3] dark:bg-[#101a26] lg:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem.image}
                src={activeItem.image}
                alt={activeItem.title}
                initial={{ opacity: 0, scale: 1.06, x: 28 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -24 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="d365-image-mask absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-16 top-20 h-52 w-52 rounded-full border-[28px] border-[#59D9F7]"
            />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-lg border border-white/35 bg-black/30 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              {activeItem.title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const item = productTabs[activeTab];
  const Icon = item.icon;

  return (
    <section id="applications" className="d365-section scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="d365-container">
        <SectionHeading
          eyebrow="Applications"
          title="Do more with agentic business applications to help run your organization"
          description="Select an area of the business to see how connected data, automation and AI can improve everyday work."
        />

        <div className="mt-10 border-y border-[var(--d-border)]">
          <div className="flex items-center justify-between gap-3 overflow-x-auto">
            {productTabs.map((tab, index) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`relative min-w-max px-5 py-5 text-sm font-semibold transition ${activeTab === index ? "text-[#0067B8] dark:text-[#59D9F7]" : "text-[var(--d-muted)] hover:text-[var(--d-title)]"}`}
              >
                {tab.label}
                {activeTab === index && (
                  <motion.span
                    layoutId="product-tab-line"
                    className="absolute inset-x-3 bottom-0 h-[3px] bg-[#0067B8] dark:bg-[#59D9F7]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.45 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0067B8] text-white dark:bg-[#59D9F7] dark:text-[#061018]">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#0067B8] dark:text-[#59D9F7]">
                {item.eyebrow}
              </div>
              <h3 className="mt-3 text-[30px] font-semibold leading-tight tracking-[-0.03em] text-[var(--d-title)] sm:text-[38px]">
                {item.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-[var(--d-muted)]">
                {item.description}
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-[3px] bg-[#143d70] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0d2d58]"
              >
                Explore {item.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="d365-demo-gradient relative min-h-[470px] overflow-hidden rounded-2xl p-6 sm:p-10">
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="d365-card mx-auto max-w-[620px] rounded-2xl p-4 sm:p-6"
            >
              <div className="flex items-center justify-between border-b border-[var(--d-border)] pb-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-[var(--d-muted)]">
                    {item.eyebrow}
                  </div>
                  <div className="mt-1 font-semibold text-[var(--d-title)]">
                    Agent workspace
                  </div>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_0.72fr]">
                <div className="space-y-3">
                  {["New customer signal", "AI-generated summary", "Recommended next action"].map(
                    (label, index) => (
                      <motion.div
                        key={`${item.label}-${label}`}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.11, duration: 0.4 }}
                        className="rounded-xl border border-[var(--d-border)] bg-[var(--d-soft)] p-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0067B8]/10 text-[#0067B8] dark:bg-[#59D9F7]/10 dark:text-[#59D9F7]">
                            {index === 0 ? (
                              <Database className="h-4 w-4" />
                            ) : index === 1 ? (
                              <Sparkles className="h-4 w-4" />
                            ) : (
                              <ArrowRight className="h-4 w-4" />
                            )}
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-[var(--d-title)]">
                              {label}
                            </div>
                            <div className="mt-1 h-1.5 w-28 rounded-full bg-[var(--d-border)]" />
                          </div>
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>

                <div className="rounded-xl border border-[var(--d-border)] bg-[var(--d-card)] p-5 text-center">
                  <motion.div
                    key={item.metric}
                    initial={{ scale: 0.75, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 180, damping: 16 }}
                    className="text-4xl font-semibold text-[#0067B8] dark:text-[#59D9F7]"
                  >
                    {item.metric}
                  </motion.div>
                  <div className="mt-2 text-xs leading-5 text-[var(--d-muted)]">
                    {item.metricLabel}
                  </div>
                  <div className="mx-auto mt-6 flex h-28 items-end justify-center gap-2">
                    {[44, 61, 52, 76, 66, 91].map((height, index) => (
                      <motion.span
                        key={`${item.label}-${height}`}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: index * 0.07, duration: 0.55 }}
                        className="w-4 rounded-t bg-gradient-to-t from-[#0067B8] to-[#59D9F7]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#3d2758] shadow-2xl dark:bg-[#111824] dark:text-[#e9d8ff]"
            >
              <Bot className="h-4 w-4" />
              Automatically guide and de-risk every deal
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessAgentsSection() {
  const [activeAgent, setActiveAgent] = useState(0);

  const move = (direction: number) => {
    setActiveAgent((current) => {
      const next = current + direction;
      if (next < 0) return agentCards.length - 1;
      if (next >= agentCards.length) return 0;
      return next;
    });
  };

  const active = agentCards[activeAgent];
  const ActiveIcon = active.icon;

  return (
    <section id="agents" className="d365-section-alt scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="d365-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--d-muted)]">
              Agents
            </div>
            <h2 className="mt-3 max-w-4xl text-[32px] font-semibold leading-tight tracking-[-0.035em] text-[var(--d-title)] sm:text-[40px] lg:text-[46px]">
              Explore business process agents in Dynamics 365
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--d-muted)]">
              Extend your teams with agents designed to handle research,
              preparation, coordination and routine process work.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous agent"
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--d-border)] bg-[var(--d-card)] text-[var(--d-title)] transition hover:border-[#0067B8] hover:text-[#0067B8]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next agent"
              className="grid h-11 w-11 place-items-center rounded-full border border-[var(--d-border)] bg-[var(--d-card)] text-[var(--d-title)] transition hover:border-[#0067B8] hover:text-[#0067B8]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {agentCards.map((agent, index) => (
            <button
              key={agent.title}
              type="button"
              onClick={() => setActiveAgent(index)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeAgent === index ? "bg-[#143d70] text-white" : "border border-[var(--d-border)] bg-[var(--d-card)] text-[var(--d-body)] hover:border-[#0067B8]"}`}
            >
              {index === 0 ? "Sales" : index === 1 ? "Finance & supply" : "Service & marketing"}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.45 }}
              className="d365-card flex min-h-[360px] flex-col justify-between rounded-2xl p-7 sm:p-9"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#143d70] text-white">
                  <ActiveIcon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[var(--d-title)] sm:text-[34px]">
                  {active.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-[var(--d-muted)]">
                  {active.description}
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0067B8] dark:text-[#59D9F7]"
              >
                Learn about this agent
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="relative min-h-[360px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=88"
              alt="Business team using Dynamics 365 agents"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#051b37]/65 via-transparent to-[#59D9F7]/20" />
            <motion.div
              animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-6 top-6 max-w-[250px] rounded-xl border border-white/25 bg-white/90 p-4 text-[#1f2d3d] shadow-2xl backdrop-blur dark:bg-[#111824]/92 dark:text-white"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0067B8] dark:text-[#59D9F7]">
                <Sparkles className="h-4 w-4" /> Agent insight
              </div>
              <p className="mt-3 text-sm leading-6">
                Three high-intent accounts need seller follow-up today.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {agentCards.map((agent, index) => {
            const Icon = agent.icon;
            return (
              <motion.button
                key={agent.title}
                type="button"
                onClick={() => setActiveAgent(index)}
                whileHover={{ y: -5 }}
                className={`d365-soft-card rounded-2xl p-5 text-left ${activeAgent === index ? "border-[#0067B8] dark:border-[#59D9F7]" : ""}`}
              >
                <Icon className="h-5 w-5 text-[#0067B8] dark:text-[#59D9F7]" />
                <div className="mt-4 font-semibold text-[var(--d-title)]">
                  {agent.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--d-muted)]">
                  {agent.description}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MarketplaceSection() {
  return (
    <section id="marketplace" className="d365-section scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="d365-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--d-muted)]">
              Apps and add-ons
            </div>
            <h2 className="mt-3 max-w-4xl text-[32px] font-semibold leading-tight tracking-[-0.035em] text-[var(--d-title)] sm:text-[40px] lg:text-[46px]">
              Customize Dynamics 365 with apps from Microsoft Marketplace
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--d-muted)]">
              Extend your solution with analytics, automation, collaboration and
              industry-specific capabilities.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-[3px] border border-[#143d70] px-5 py-3 text-sm font-semibold text-[#143d70] hover:bg-[#143d70] hover:text-white dark:border-[#59D9F7] dark:text-[#59D9F7]"
          >
            Explore marketplace apps
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {marketplaceApps.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.article
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                whileHover={{ y: -5 }}
                className="d365-card flex items-start gap-4 rounded-2xl p-5 sm:p-6"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#0067B8]/10 text-[#0067B8] dark:bg-[#59D9F7]/10 dark:text-[#59D9F7]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--d-muted)]">
                    {app.category}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-[var(--d-title)]">
                    {app.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--d-muted)]">
                    {app.description}
                  </p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#0067B8] dark:text-[#59D9F7]" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CustomerStoriesSection() {
  const [activeStory, setActiveStory] = useState(0);
  const story = customerStories[activeStory];

  return (
    <section id="customers" className="d365-section-alt scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="d365-container">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--d-muted)]">
              Customer stories
            </div>
            <h2 className="mt-3 max-w-3xl text-[32px] font-semibold leading-tight tracking-[-0.035em] text-[var(--d-title)] sm:text-[40px] lg:text-[46px]">
              How customers innovate with Dynamics 365
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-[3px] border border-[#143d70] px-5 py-3 text-sm font-semibold text-[#143d70] hover:bg-[#143d70] hover:text-white dark:border-[#59D9F7] dark:text-[#59D9F7]"
          >
            Explore customer stories
          </Link>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--d-border)] bg-[var(--d-card)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${story.company}-copy`}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 18 }}
                transition={{ duration: 0.45 }}
                className="relative flex min-h-[390px] flex-col justify-center overflow-hidden p-7 sm:p-10 lg:p-12"
              >
                <div className="absolute -left-28 bottom-[-150px] h-72 w-72 rounded-full bg-[#8A007D]" />
                <div className="relative">
                  <div className="text-sm font-semibold text-[#0067B8] dark:text-[#59D9F7]">
                    {story.company}
                  </div>
                  <blockquote className="mt-6 text-[24px] font-semibold leading-[1.35] tracking-[-0.025em] text-[var(--d-title)] sm:text-[30px]">
                    “{story.quote}”
                  </blockquote>
                  <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0067B8]/10 px-4 py-2 text-sm font-semibold text-[#0067B8] dark:bg-[#59D9F7]/10 dark:text-[#59D9F7]">
                    <CheckCircle2 className="h-4 w-4" />
                    {story.result}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.img
                key={story.image}
                src={story.image}
                alt={`${story.company} customer story`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="h-[360px] w-full object-cover lg:h-full lg:min-h-[480px]"
              />
            </AnimatePresence>
          </div>

          <div className="grid border-t border-[var(--d-border)] sm:grid-cols-3">
            {customerStories.map((item, index) => (
              <button
                key={item.company}
                type="button"
                onClick={() => setActiveStory(index)}
                className={`border-b border-[var(--d-border)] px-5 py-5 text-left text-sm font-semibold transition sm:border-b-0 sm:border-r last:sm:border-r-0 ${activeStory === index ? "bg-[var(--d-soft)] text-[#0067B8] dark:text-[#59D9F7]" : "text-[var(--d-body)] hover:bg-[var(--d-soft)]"}`}
              >
                {item.company}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="d365-section scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="d365-container">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--d-muted)]">
          Get inspired
        </div>
        <h2 className="mt-3 text-[32px] font-semibold leading-tight tracking-[-0.035em] text-[var(--d-title)] sm:text-[40px] lg:text-[46px]">
          What’s new and notable
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {newsCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="d365-card group overflow-hidden rounded-2xl"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0067B8] dark:text-[#59D9F7]">
                  {card.eyebrow}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-[var(--d-title)]">
                  {card.title}
                </h3>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0067B8] dark:text-[#59D9F7]"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="d365-section-alt px-4 pb-0 pt-20 sm:px-6 lg:px-8 lg:pt-24">
      <div className="d365-container">
        <div className="relative overflow-hidden rounded-t-2xl border border-b-0 border-[var(--d-border)] bg-[var(--d-card)]">
          <div className="grid items-center lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative z-10 p-7 sm:p-10 lg:p-12"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--d-muted)]">
                Contact us
              </div>
              <h2 className="mt-3 text-[32px] font-semibold leading-tight tracking-[-0.035em] text-[var(--d-title)] sm:text-[40px]">
                Let’s build the right Dynamics 365 roadmap for your business
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--d-muted)]">
                Discuss your current systems, business priorities and the right
                mix of CRM, ERP, analytics, automation and AI.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-[3px] bg-[#143d70] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0d2d58]"
                >
                  Contact us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-[3px] border border-[var(--d-border-blue)] px-5 py-3 text-sm font-semibold text-[#0067B8] dark:text-[#59D9F7]"
                >
                  Book a consultation
                </Link>
              </div>
            </motion.div>

            <div className="relative min-h-[360px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1600&q=88"
                alt="Dynamics 365 consultation"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--d-card)] via-transparent to-transparent lg:hidden" />
            </div>
          </div>

          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 18, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-24 -left-20 h-44 w-[360px] rounded-t-full bg-[#59D9F7]"
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, -16, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-24 -right-20 h-44 w-[360px] rounded-t-full bg-[#8A007D]"
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-4xl text-center"
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--d-muted)]">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-[32px] font-semibold leading-tight tracking-[-0.035em] text-[var(--d-title)] sm:text-[40px] lg:text-[46px]">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[var(--d-muted)]">
        {description}
      </p>
    </motion.div>
  );
}