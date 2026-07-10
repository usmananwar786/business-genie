import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Clock,
  Database,
  Factory,
  Globe2,
  Layers3,
  LineChart,
  LockKeyhole,
  Megaphone,
  Network,
  PackageCheck,
  Plug,
  ReceiptText,
  Rocket,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Target,
  UserCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/odoo")({
  head: () => ({
    meta: [
      { title: "Odoo ERP Solution — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Professional Odoo ERP implementation for accounting, CRM, sales, inventory, purchase, POS, manufacturing, HRMS, projects, website, e-commerce, automation and reporting.",
      },
      {
        property: "og:title",
        content: "Odoo ERP Solution — Business Genie Consulting",
      },
      {
        property: "og:description",
        content:
          "Complete Odoo ERP setup, customization, training and support for businesses that need better control, reporting and automation.",
      },
    ],
  }),
  component: Odoo,
});

const ODOO_PRIMARY = "#875A7B";
const ODOO_DARK = "#714B67";
const ODOO_TEAL = "#00A09D";

type ThemeMode = "light" | "dark";

// Ye styles Tailwind dark class ke sath-sath direct CSS fallback bhi dete hain.
// Agar aapke header ka toggle sirf header ko dark kar raha ho, to ye Odoo page ko bhi proper night mode mein convert kar dega.
const ODOO_THEME_STYLES = `
  .odoo-theme-wrap {
    color-scheme: light;
    background: #FBF7F1;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] {
    color-scheme: dark;
    background: #030303;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-page,
  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-section {
    background: #FBF7F1 !important;
    color: #21151F !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-page,
  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-section,
  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-hero {
    background: #030303 !important;
    color: #F8F4F7 !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-surface {
    background: rgba(255, 255, 255, 0.95) !important;
    color: #21151F !important;
    border-color: rgba(135, 90, 123, 0.16) !important;
    box-shadow: 0 18px 55px rgba(135, 90, 123, 0.08) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-surface {
    background: rgba(14, 14, 18, 0.96) !important;
    color: #F8F4F7 !important;
    border-color: rgba(255, 255, 255, 0.12) !important;
    box-shadow: 0 22px 70px rgba(0, 0, 0, 0.45) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-surface-soft {
    background: rgba(255, 253, 252, 0.90) !important;
    color: #21151F !important;
    border-color: rgba(135, 90, 123, 0.16) !important;
    box-shadow: 0 12px 35px rgba(135, 90, 123, 0.06) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-surface-soft {
    background: rgba(9, 9, 12, 0.96) !important;
    color: #F8F4F7 !important;
    border-color: rgba(255, 255, 255, 0.12) !important;
    box-shadow: 0 18px 55px rgba(0, 0, 0, 0.35) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-border {
    border-color: rgba(135, 90, 123, 0.16) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-border {
    border-color: rgba(255, 255, 255, 0.12) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-title {
    color: #201820 !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-title {
    color: #F8F4F7 !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-text {
    color: #5A4655 !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-text {
    color: rgba(231, 218, 228, 0.82) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-muted {
    color: #7A6271 !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-muted {
    color: rgba(205, 190, 204, 0.68) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-eyebrow {
    color: #714B67 !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-eyebrow {
    color: #E7C7DE !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-chip {
    background: rgba(255, 255, 255, 0.80) !important;
    color: #714B67 !important;
    border-color: rgba(135, 90, 123, 0.16) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-chip {
    background: rgba(22, 13, 21, 0.88) !important;
    color: rgba(248, 244, 247, 0.82) !important;
    border-color: rgba(255, 255, 255, 0.12) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-hero-gradient {
    background: linear-gradient(90deg, #030303 0%, rgba(7, 7, 10, 0.98) 52%, rgba(0, 18, 17, 0.94) 100%) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-hero-gradient {
    background: linear-gradient(90deg, #FBF7F1 0%, rgba(251, 247, 241, 0.96) 52%, rgba(234, 246, 245, 0.88) 100%) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-hero-radial {
    background: radial-gradient(circle at 15% 20%, rgba(135, 90, 123, 0.40), transparent 34%),
      radial-gradient(circle at 82% 72%, rgba(0, 160, 157, 0.24), transparent 34%) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-hero-radial {
    background: radial-gradient(circle at 15% 20%, rgba(135, 90, 123, 0.18), transparent 34%),
      radial-gradient(circle at 82% 72%, rgba(0, 160, 157, 0.14), transparent 34%) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-outline-btn {
    background: rgba(14, 14, 18, 0.94) !important;
    color: rgba(248, 244, 247, 0.88) !important;
    border-color: rgba(255, 255, 255, 0.12) !important;
  }

  .odoo-theme-wrap[data-odoo-theme="light"] .odoo-outline-btn {
    background: rgba(255, 255, 255, 0.80) !important;
    color: #714B67 !important;
    border-color: rgba(135, 90, 123, 0.20) !important;
  }
`;

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

function parseCssRgb(value: string): { r: number; g: number; b: number; a: number } | null {
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

  const elements = selectors
    .flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector)))
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
    return isDarkCssColor(style.backgroundColor) || isDarkCssColor(style.borderColor);
  });
}

function readOdooThemeMode(): ThemeMode {
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
      .map((key) => window.localStorage.getItem(key) || "")
      .join(" ")
      .toLowerCase();
  } catch {
    storageText = "";
  }

  const themeText = `${classText} ${attrText} ${storageText}`;

  // Important fix:
  // Aapke video mein header black ho raha tha, lekin Odoo section off-white reh raha tha.
  // Is liye yahan header ke actual computed background ko bhi read kar rahe hain.
  if (headerLooksDark()) return "dark";

  if (/\b(dark|night|black)\b/.test(themeText)) return "dark";
  if (/\b(light|day|off-white|offwhite)\b/.test(themeText)) return "light";

  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}
function useOdooThemeMode(): ThemeMode {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const updateMode = () => {
      setMode(readOdooThemeMode());
    };

    updateMode();

    const observer = new MutationObserver(updateMode);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme", "data-mode", "data-color-mode"],
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["class", "style", "data-theme", "data-mode", "data-color-mode"],
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

const UI = {
  page:
    "odoo-page min-h-screen bg-[#FBF7F1] text-[#21151F] transition-colors duration-300 dark:bg-[#030303] dark:text-[#F8F4F7]",
  section:
    "odoo-section bg-[#FBF7F1] text-[#21151F] transition-colors duration-300 dark:bg-[#030303] dark:text-[#F8F4F7]",
  surface:
    "odoo-surface bg-white/95 text-[#21151F] shadow-[0_18px_55px_rgba(135,90,123,0.08)] dark:bg-[#0E0E12]/95 dark:text-[#F8F4F7] dark:shadow-[0_22px_70px_rgba(0,0,0,0.45)]",
  surfaceSoft:
    "odoo-surface-soft bg-[#FFFDFC]/90 text-[#21151F] shadow-[0_12px_35px_rgba(135,90,123,0.06)] dark:bg-[#09090C]/95 dark:text-[#F8F4F7] dark:shadow-[0_18px_55px_rgba(0,0,0,0.35)]",
  border: "odoo-border border-[#875A7B]/16 dark:border-white/12",
  title: "odoo-title text-[#201820] dark:text-[#F8F4F7]",
  text: "odoo-text text-[#5A4655] dark:text-[#E7DAE4]/82",
  muted: "odoo-muted text-[#7A6271] dark:text-[#CDBECC]/68",
  eyebrow: "odoo-eyebrow text-[#714B67] dark:text-[#E7C7DE]",
  chip:
    "odoo-chip border-[#875A7B]/16 bg-white/80 text-[#714B67] dark:border-white/12 dark:bg-[#160D15]/88 dark:text-[#F8F4F7]/80",
  iconBox:
    "shadow-[0_16px_35px_rgba(135,90,123,0.22)] dark:shadow-[0_18px_45px_rgba(0,160,157,0.12)]",
};

const dashboardRoutes = [
  {
    icon: ShoppingCart,
    label: "Sales",
    value: "Live",
    href: "#sales-crm",
  },
  {
    icon: Boxes,
    label: "Stock",
    value: "Synced",
    href: "#inventory-warehouse",
  },
  {
    icon: CircleDollarSign,
    label: "Finance",
    value: "Ready",
    href: "#finance-accounting",
  },
  {
    icon: BarChart3,
    label: "Reports",
    value: "Smart",
    href: "#dashboards-reports",
  },
];

const dashboardProgress = [
  { label: "Accounting", value: 92 },
  { label: "Inventory", value: 84 },
  { label: "CRM Pipeline", value: 76 },
];

const heroStats = [
  {
    value: 12,
    suffix: "+",
    label: "Core Odoo Apps",
  },
  {
    value: 6,
    suffix: "",
    label: "Setup Phases",
  },
  {
    value: 360,
    suffix: "°",
    label: "Business Visibility",
  },
];

const odooModules = [
  {
    icon: Database,
    t: "Odoo ERP",
    href: "#odoo-erp",
    d: "Centralized business system for operations, users, workflows and reporting.",
  },
  {
    icon: CircleDollarSign,
    t: "Accounting",
    href: "#finance-accounting",
    d: "Invoices, bills, expenses, taxes, payments and financial reports.",
  },
  {
    icon: ShoppingCart,
    t: "Sales & CRM",
    href: "#sales-crm",
    d: "Leads, quotations, sales orders, customers and follow-ups.",
  },
  {
    icon: PackageCheck,
    t: "Inventory",
    href: "#inventory-warehouse",
    d: "Stock, warehouses, product movement, reorder rules and transfers.",
  },
  {
    icon: ReceiptText,
    t: "Purchase",
    href: "#purchase-vendors",
    d: "Purchase orders, vendors, approvals, bills and supplier records.",
  },
  {
    icon: Store,
    t: "Point of Sale",
    href: "#pos-retail",
    d: "Retail billing, counter sales, sessions, payments and stock sync.",
  },
  {
    icon: Factory,
    t: "Manufacturing",
    href: "#manufacturing-production",
    d: "BOM, production orders, work centers, costing and planning.",
  },
  {
    icon: Users,
    t: "HRMS",
    href: "#hrms-employees",
    d: "Employees, attendance, leaves, payroll records and HR operations.",
  },
  {
    icon: Workflow,
    t: "Projects",
    href: "#project-management",
    d: "Tasks, milestones, timesheets, service delivery and project costing.",
  },
  {
    icon: Globe2,
    t: "Website & eCommerce",
    href: "#website-ecommerce",
    d: "Website, online store, product catalog, orders and customer data.",
  },
  {
    icon: Megaphone,
    t: "Marketing",
    href: "#marketing-automation",
    d: "Email campaigns, automation, customer communication and follow-ups.",
  },
  {
    icon: BarChart3,
    t: "Reporting",
    href: "#dashboards-reports",
    d: "Dashboards, KPIs, real-time reports and management visibility.",
  },
];

const odooFeatures = [
  {
    id: "finance-accounting",
    icon: CircleDollarSign,
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85",
    title: "Finance & Accounting",
    desc: "Manage journals, invoices, vendor bills, payments, taxes, expenses, bank reconciliation and financial reports from one connected system.",
  },
  {
    id: "sales-crm",
    icon: ShoppingCart,
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    title: "Sales, CRM & Customer Pipeline",
    desc: "Track leads, opportunities, quotations, sales orders, activities, customers and follow-ups with full sales visibility.",
  },
  {
    id: "inventory-warehouse",
    icon: Boxes,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
    title: "Inventory & Warehouse",
    desc: "Control stock levels, warehouses, receipts, deliveries, internal transfers, lots, serial numbers and product movement.",
  },
  {
    id: "manufacturing-production",
    icon: Factory,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
    title: "Manufacturing & Production",
    desc: "Plan production with BOM, manufacturing orders, work centers, raw material consumption, costing and finished goods tracking.",
  },
  {
    id: "hrms-employees",
    icon: Users,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    title: "HRMS & Employee Management",
    desc: "Manage employee profiles, attendance, leaves, payroll data, departments, approvals and HR reporting from one platform.",
  },
  {
    id: "dashboards-reports",
    icon: LineChart,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    title: "Dashboards & Business Reports",
    desc: "Get real-time reporting for finance, sales, stock, purchase, HR, production and management decision-making.",
  },
];

const detailedApps = [
  {
    id: "odoo-erp",
    icon: Database,
    title: "Odoo ERP Core System",
    desc: "A single connected platform for users, departments, records, permissions, workflow, documents and management reporting.",
    points: [
      "Centralized user management",
      "Department-wise access",
      "Connected business records",
      "Scalable module structure",
    ],
  },
  {
    id: "purchase-vendors",
    icon: ReceiptText,
    title: "Purchase & Vendor Management",
    desc: "Control purchase orders, vendor bills, supplier records, approvals and cost visibility from one clean flow.",
    points: [
      "Purchase requests",
      "Vendor bills",
      "Approval workflow",
      "Supplier history",
    ],
  },
  {
    id: "pos-retail",
    icon: Store,
    title: "POS & Retail Operations",
    desc: "Manage counter sales, sessions, product pricing, payments, customers and stock movement with Odoo POS.",
    points: [
      "Retail billing",
      "POS sessions",
      "Customer records",
      "Stock sync",
    ],
  },
  {
    id: "project-management",
    icon: Workflow,
    title: "Project Management",
    desc: "Track tasks, deadlines, milestones, team assignments, service delivery and project costing in one place.",
    points: [
      "Task planning",
      "Milestone tracking",
      "Timesheets",
      "Project costing",
    ],
  },
  {
    id: "website-ecommerce",
    icon: Globe2,
    title: "Website & eCommerce",
    desc: "Connect your website, product catalog, online orders, customer records and inventory with your ERP system.",
    points: [
      "Product catalog",
      "Online orders",
      "Customer data",
      "Inventory connection",
    ],
  },
  {
    id: "marketing-automation",
    icon: Megaphone,
    title: "Marketing Automation",
    desc: "Automate customer communication, email campaigns, follow-ups, lead nurturing and sales support activities.",
    points: [
      "Email campaigns",
      "Customer follow-ups",
      "Lead nurturing",
      "Automation rules",
    ],
  },
];

const advancedCapabilities = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "Automate approvals, quotations, reminders, follow-ups, purchase flows and internal department processes.",
  },
  {
    icon: LockKeyhole,
    title: "User Roles & Access",
    desc: "Set department-wise permissions, approval rights, manager access and secure business data visibility.",
  },
  {
    icon: Plug,
    title: "Third-Party Integrations",
    desc: "Connect payment gateways, shipping tools, WhatsApp, websites, CRM sources and reporting tools.",
  },
  {
    icon: Bot,
    title: "Smart Automation",
    desc: "Reduce repetitive manual tasks with scheduled actions, alerts, automated records and clean system rules.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly Operations",
    desc: "Give teams access to sales, inventory, approvals and customer records from mobile-friendly workflows.",
  },
  {
    icon: Network,
    title: "Multi-Branch Control",
    desc: "Manage multiple warehouses, shops, teams, branches and departments with centralized reporting.",
  },
];

const processPoints = [
  {
    icon: ClipboardCheck,
    title: "Business Process Analysis",
    desc: "We study departments, daily operations, pain points, approval workflows and reports before setup.",
  },
  {
    icon: Target,
    title: "ERP Blueprint",
    desc: "We prepare the Odoo structure, selected modules, data flow, user roles and implementation plan.",
  },
  {
    icon: Settings2,
    title: "System Configuration",
    desc: "We configure users, access rights, workflows, fields, forms, taxes, warehouses and approval rules.",
  },
  {
    icon: Database,
    title: "Data Migration",
    desc: "We help move customers, vendors, products, stock, accounts, opening balances and important records.",
  },
  {
    icon: UserCheck,
    title: "Training & Testing",
    desc: "Your team gets practical training and testing support before final go-live.",
  },
  {
    icon: Rocket,
    title: "Go Live & Support",
    desc: "We support launch, issue fixing, report improvements, workflow updates and long-term optimization.",
  },
];

const flowItems = [
  "Website",
  "CRM",
  "Quotation",
  "Sales Order",
  "Invoice",
  "Inventory",
  "Delivery",
  "Payment",
  "Reports",
];

const benefits = [
  "Centralized business data",
  "Less manual work",
  "Better inventory control",
  "Real-time reporting",
  "Clear approval workflow",
  "Department-wise access",
  "Scalable ERP system",
  "Better management visibility",
];

const industries = [
  "Retail",
  "Manufacturing",
  "Distribution",
  "Trading",
  "Services",
  "E-commerce",
  "Pharma",
  "Construction",
  "Restaurants",
  "Clinics",
  "Warehouses",
  "Multi-branch Businesses",
];

const faqs = [
  {
    q: "What is Odoo ERP?",
    a: "Odoo ERP is a connected business management platform where accounting, sales, CRM, inventory, purchase, POS, manufacturing, HRMS, projects, website, e-commerce and reporting can work together from one system.",
  },
  {
    q: "Which Odoo modules can be implemented?",
    a: "We can implement accounting, CRM, sales, purchase, inventory, POS, manufacturing, HRMS, project management, website, e-commerce, marketing automation and reporting modules according to your business needs.",
  },
  {
    q: "Can existing data be migrated to Odoo?",
    a: "Yes. Customers, vendors, products, stock, accounts, opening balances, invoices and important business records can be cleaned, formatted and migrated into Odoo.",
  },
  {
    q: "Can Odoo be customized for our business process?",
    a: "Yes. Odoo can be customized with fields, forms, workflows, approvals, user permissions, reports, dashboards, automations and integrations.",
  },
  {
    q: "Do you provide training after setup?",
    a: "Yes. We provide practical training for users, managers and admin teams so they can use Odoo confidently in daily business operations.",
  },
  {
    q: "Is Odoo suitable for small and growing businesses?",
    a: "Yes. Odoo can start with a few modules and scale as the business grows. It is suitable for retail, trading, manufacturing, services, distribution, e-commerce and multi-branch businesses.",
  },
];

function Odoo() {
  const odooTheme = useOdooThemeMode();

  return (
    <SiteLayout>
      <div
        className={`odoo-theme-wrap ${odooTheme === "dark" ? "dark" : ""}`}
        data-odoo-theme={odooTheme}
      >
        <style>{ODOO_THEME_STYLES}</style>

        <main className={UI.page}>
        {/* Hero */}
        <section className="odoo-hero relative isolate flex min-h-[90vh] items-center overflow-hidden bg-[#FBF7F1] pt-28 pb-20 text-[#21151F] transition-colors duration-300 dark:bg-[#030303] dark:text-[#F8F4F7]">
          <div className="absolute inset-0 -z-10">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1900&q=90"
              alt="Odoo ERP dashboard"
              className="h-full w-full scale-105 object-cover opacity-[0.10] dark:opacity-[0.20]"
            />

            <div className="odoo-hero-gradient absolute inset-0 bg-gradient-to-r from-[#FBF7F1] via-[#FBF7F1]/96 to-[#EAF6F5]/88 dark:from-[#050305] dark:via-[#07070A]/98 dark:to-[#001211]/94" />

            <div className="odoo-hero-radial absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(135,90,123,0.18),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(0,160,157,0.14),transparent_34%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(135,90,123,0.40),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(0,160,157,0.24),transparent_34%)]" />

            <div
              className="absolute inset-0 opacity-[0.14] dark:opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(135,90,123,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,160,157,0.20) 1px, transparent 1px)",
                backgroundSize: "86px 86px",
              }}
            />
          </div>

          <motion.div
            animate={{ x: [0, 28, 0], y: [0, -24, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 -left-24 -z-10 h-[380px] w-[380px] rounded-full blur-[135px]"
            style={{ backgroundColor: `${ODOO_PRIMARY}45` }}
          />

          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 26, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 bottom-0 -z-10 h-[430px] w-[430px] rounded-full blur-[150px]"
            style={{ backgroundColor: `${ODOO_TEAL}24` }}
          />

          <div className="container-x grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="odoo-chip mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] shadow-sm backdrop-blur-xl transition-colors duration-300 border-[#875A7B]/20 bg-white/80 text-[#714B67] dark:border-white/12 dark:bg-[#0E0E12]/90 dark:text-[#F8F4F7]/78"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: ODOO_TEAL }}
                />
                Odoo ERP Solution
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06, duration: 0.6 }}
                className="odoo-surface mb-6 inline-flex items-center rounded-2xl border border-[#875A7B]/20 bg-white/90 px-5 py-3 shadow-[0_18px_55px_rgba(135,90,123,0.12)] backdrop-blur-xl transition-colors duration-300 dark:border-white/12 dark:bg-[#0E0E12]/95 dark:shadow-[0_18px_55px_rgba(0,0,0,0.40)]"
              >
                <span className="text-3xl font-bold tracking-[-0.05em] text-[#201820] sm:text-4xl dark:text-[#F8F4F7]">
                  od<span style={{ color: ODOO_TEAL }}>oo</span>
                </span>

                <span
                  className="mx-4 h-8 w-px"
                  style={{ backgroundColor: `${ODOO_PRIMARY}66` }}
                />

                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#714B67]/75 dark:text-[#F8F4F7]/70">
                  ERP
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.75 }}
                className="max-w-5xl text-[36px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#201820] sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[76px] dark:text-[#F8F4F7]"
              >
                Complete business management with{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
                  }}
                >
                  Odoo ERP
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.65 }}
                className="mt-6 max-w-3xl text-sm leading-relaxed text-[#5A4655] sm:text-base md:text-lg dark:text-[#E7DAE4]/82"
              >
                Odoo helps businesses manage accounting, sales, CRM, inventory,
                purchase, POS, manufacturing, HRMS, projects, website,
                e-commerce and reporting from one connected platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.65 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/contact"
                  className="btn-shine inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white shadow-[0_20px_50px_rgba(135,90,123,0.32)] transition-transform hover:scale-[1.03]"
                  style={{
                    background: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_DARK})`,
                  }}
                >
                  Get Odoo Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#modules"
                  className="odoo-outline-btn inline-flex items-center gap-2 rounded-full border border-[#875A7B]/20 bg-white/80 px-6 py-3.5 font-semibold text-[#714B67] backdrop-blur-xl transition-all duration-300 hover:border-[#00A09D]/40 hover:bg-white dark:border-white/12 dark:bg-[#0E0E12]/90 dark:text-[#F8F4F7]/86 dark:hover:bg-[#1A1018]"
                >
                  Explore Odoo Apps
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.65 }}
                className="mt-8 grid max-w-2xl grid-cols-3 gap-3"
              >
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl border p-4 shadow-sm backdrop-blur-xl ${UI.surface} ${UI.border}`}
                  >
                    <div className={`text-2xl font-semibold ${UI.title}`}>
                      <AnimatedNumber value={item.value} suffix={item.suffix} />
                    </div>
                    <div className={`mt-1 text-xs leading-relaxed ${UI.muted}`}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 34 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.65 }}
              className="hidden lg:block"
            >
              <div
                className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_32px_90px_rgba(33,21,31,0.16)] backdrop-blur-2xl dark:shadow-2xl ${UI.surface} ${UI.border}`}
              >
                <div
                  className="absolute -right-20 -top-20 h-60 w-60 rounded-full blur-[90px]"
                  style={{ backgroundColor: `${ODOO_PRIMARY}40` }}
                />

                <div
                  className="absolute -left-20 bottom-0 h-56 w-56 rounded-full blur-[90px]"
                  style={{ backgroundColor: `${ODOO_TEAL}28` }}
                />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div
                        className={`text-xs font-medium uppercase tracking-[0.26em] ${UI.muted}`}
                      >
                        ERP Control Center
                      </div>
                      <div className={`mt-1 text-2xl font-semibold ${UI.title}`}>
                        Business Dashboard
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.06, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
                      }}
                    >
                      <Database className="h-6 w-6" />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {dashboardRoutes.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.a
                          key={item.label}
                          href={item.href}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08, duration: 0.45 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                          className={`group rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:border-[#00A09D]/45 ${UI.surfaceSoft} ${UI.border}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className={`text-xs ${UI.muted}`}>
                              {item.label}
                            </div>
                            <Icon className="h-4 w-4 text-[#00A09D]" />
                          </div>
                          <div className={`mt-1 text-lg font-semibold ${UI.title}`}>
                            {item.value}
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>

                  <div
                    className={`mt-5 space-y-3 rounded-2xl border p-4 shadow-sm ${UI.surfaceSoft} ${UI.border}`}
                  >
                    {dashboardProgress.map((item) => (
                      <div key={item.label}>
                        <div
                          className={`mb-1.5 flex items-center justify-between text-xs ${UI.text}`}
                        >
                          <span>{item.label}</span>
                          <span>
                            <AnimatedNumber value={item.value} suffix="%" />
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-[#875A7B]/14 dark:bg-white/12">
                          <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: `${item.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`mt-5 rounded-2xl border p-4 ${UI.surfaceSoft} ${UI.border}`}
                  >
                    <div
                      className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${UI.muted}`}
                    >
                      <Zap className="h-4 w-4 text-[#00A09D]" />
                      Live ERP Routing
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["CRM", "Stock", "Invoice", "POS", "HRMS"].map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-3 py-1 text-xs ${UI.text} ${UI.border}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <OdooSection>
          <div id="modules" className="container-x scroll-mt-28">
            <SectionIntro
              eyebrow="Odoo Modules"
              title="Everything your business needs in one ERP"
              desc="Start with the modules you need today and scale your Odoo system as your operations grow."
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {odooModules.map((it, i) => (
                <ModuleCard key={it.t} item={it} index={i} />
              ))}
            </div>
          </div>
        </OdooSection>

        <OdooSection className="!pt-0">
          <div className="container-x">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className={`relative overflow-hidden rounded-3xl border p-6 shadow-sm backdrop-blur-xl sm:p-8 lg:p-10 ${UI.surface} ${UI.border}`}
            >
              <div
                className="absolute -left-20 -top-20 h-56 w-56 rounded-full blur-[90px]"
                style={{ backgroundColor: `${ODOO_PRIMARY}22` }}
              />
              <div
                className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full blur-[90px]"
                style={{ backgroundColor: `${ODOO_TEAL}22` }}
              />

              <div className="relative">
                <div
                  className={`mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${UI.surfaceSoft} ${UI.border} ${UI.eyebrow}`}
                >
                  <Network className="h-4 w-4 text-[#00A09D]" />
                  Connected Business Flow
                </div>

                <h2
                  className={`max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${UI.title}`}
                >
                  From lead to invoice, every department stays connected.
                </h2>

                <p
                  className={`mt-4 max-w-3xl text-sm leading-relaxed sm:text-base ${UI.text}`}
                >
                  Odoo connects your website, CRM, sales, accounting, inventory,
                  delivery and reporting so management gets a complete view of
                  the business.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {flowItems.map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        className={`rounded-full border px-4 py-2 text-sm font-medium shadow-sm ${UI.surface} ${UI.border} ${UI.text}`}
                      >
                        {item}
                      </motion.div>

                      {index !== flowItems.length - 1 && (
                        <ArrowRight className="hidden h-4 w-4 text-[#00A09D] sm:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </OdooSection>

        <OdooSection className="!pt-0">
          <div className="container-x">
            <SectionIntro
              eyebrow="What Odoo Includes"
              title="Connected apps for real business operations"
              desc="Odoo connects your departments, documents, users and reports so your team can work through one clean platform."
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
              {odooFeatures.map((card, i) => (
                <FeatureCard key={card.title} card={card} index={i} />
              ))}
            </div>
          </div>
        </OdooSection>

        <OdooSection className="!pt-0">
          <div className="container-x">
            <SectionIntro
              eyebrow="Complete Odoo Coverage"
              title="More Odoo apps for complete business control"
              desc="Apart from the main modules, Odoo can also handle purchase, POS, projects, website, e-commerce and marketing workflows."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {detailedApps.map((item, index) => (
                <DetailedAppCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </OdooSection>

        <OdooSection className="!pt-0">
          <div className="container-x">
            <SectionIntro
              eyebrow="Advanced Odoo Capabilities"
              title="More than simple boxes — complete ERP control"
              desc="Add automation, access control, integrations, reporting, mobile workflows and multi-branch management into your Odoo system."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {advancedCapabilities.map((item, index) => (
                <AdvancedCapabilityCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </OdooSection>

        <OdooSection className="!pt-0">
          <div className="container-x">
            <SectionIntro
              eyebrow="Implementation Process"
              title="A practical way to setup Odoo properly"
              desc="Every step is focused on real business use, clean configuration, data accuracy and team adoption."
            />

            <div className="relative">
              <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[#875A7B] via-[#00A09D] to-transparent lg:block" />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {processPoints.map((item, i) => (
                  <ProcessCard key={item.title} item={item} index={i} />
                ))}
              </div>
            </div>
          </div>
        </OdooSection>

        <OdooSection className="!pt-0">
          <div className="container-x grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-2xl border p-6 shadow-sm backdrop-blur-xl sm:rounded-3xl sm:p-8 ${UI.surface} ${UI.border}`}
            >
              <div
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[90px]"
                style={{ backgroundColor: `${ODOO_PRIMARY}24` }}
              />

              <div className="relative">
                <div
                  className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl text-white"
                  style={{
                    background: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
                  }}
                >
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div
                  className={`text-xs font-semibold uppercase tracking-[0.25em] ${UI.eyebrow}`}
                >
                  Business Benefits
                </div>

                <h2
                  className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${UI.title}`}
                >
                  Why businesses choose{" "}
                  <span style={{ color: ODOO_PRIMARY }}>Odoo</span>
                </h2>

                <p
                  className={`mt-4 text-sm leading-relaxed sm:text-base ${UI.text}`}
                >
                  Odoo gives management better visibility, departments better
                  control and teams a more organized way to handle daily work.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {benefits.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.45 }}
                  whileHover={{ x: 5 }}
                  className={`group flex items-center gap-3 rounded-2xl border px-4 py-4 text-sm shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#875A7B]/45 ${UI.surface} ${UI.border} ${UI.text}`}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00A09D]" />
                  <span className="transition-colors group-hover:text-[#875A7B] dark:group-hover:text-[#F8F4F7]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </OdooSection>

        <OdooSection className="!pt-0">
          <div className="container-x">
            <div
              className={`relative overflow-hidden rounded-2xl border p-6 shadow-sm backdrop-blur-xl sm:rounded-3xl sm:p-8 lg:p-10 ${UI.surface} ${UI.border}`}
            >
              <div
                className="absolute -left-20 -top-20 h-56 w-56 rounded-full blur-[90px]"
                style={{ backgroundColor: `${ODOO_TEAL}20` }}
              />
              <div
                className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full blur-[90px]"
                style={{ backgroundColor: `${ODOO_PRIMARY}24` }}
              />

              <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <div
                    className={`text-xs font-semibold uppercase tracking-[0.25em] ${UI.eyebrow}`}
                  >
                    Suitable Industries
                  </div>

                  <h2
                    className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${UI.title}`}
                  >
                    Odoo can fit different{" "}
                    <span style={{ color: ODOO_TEAL }}>business models</span>
                  </h2>

                  <p
                    className={`mt-4 text-sm leading-relaxed sm:text-base ${UI.text}`}
                  >
                    We configure Odoo according to your industry, departments,
                    locations, inventory flow, sales process and reporting
                    needs.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {industries.map((industry) => (
                    <motion.span
                      key={industry}
                      whileHover={{ y: -3, scale: 1.03 }}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 hover:border-[#875A7B]/45 hover:text-[#875A7B] dark:hover:text-[#F8F4F7] ${UI.surfaceSoft} ${UI.border} ${UI.text}`}
                    >
                      <Layers3 className="h-4 w-4 text-[#00A09D]" />
                      {industry}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </OdooSection>

        <OdooSection className="!pt-0">
          <div className="container-x">
            <SectionIntro
              eyebrow="FAQ"
              title="Common questions about Odoo ERP"
              desc="Clear answers for businesses that want to implement, customize or scale Odoo ERP."
            />

            <div className="mx-auto max-w-4xl space-y-3">
              {faqs.map((faq, index) => (
                <FaqItem key={faq.q} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </OdooSection>

        <OdooSection className="!pt-0 !pb-28">
          <div className="container-x">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-white/10 p-6 shadow-[0_30px_80px_rgba(135,90,123,0.24)] backdrop-blur-xl sm:rounded-3xl sm:p-8 lg:p-10"
              style={{
                background: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_DARK})`,
              }}
            >
              <div
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[90px]"
                style={{ backgroundColor: `${ODOO_TEAL}44` }}
              />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/70">
                    <Settings2 className="h-4 w-4" />
                    Odoo Consultation
                  </div>

                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                    Need a clean Odoo ERP setup for your business?
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/72 sm:text-base">
                    We can help you select modules, setup workflows, migrate
                    data, train users and build a scalable Odoo ERP system for
                    your company.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#875A7B] transition-transform hover:scale-[1.03]"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </OdooSection>
        </main>
      </div>
    </SiteLayout>
  );
}

function OdooSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative py-20 ${UI.section} ${className}`}>
      {children}
    </section>
  );
}

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1300,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setCount(Math.round(eased * value));

          if (progress < 1) {
            frame = requestAnimationFrame(animate);
          }
        };

        frame = requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

function SectionIntro({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-8 max-w-3xl"
    >
      <div
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${UI.eyebrow}`}
      >
        <Sparkles className="h-4 w-4 text-[#00A09D]" />
        {eyebrow}
      </div>

      <h2
        className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${UI.title}`}
      >
        {title}
      </h2>

      <p className={`mt-4 text-sm leading-relaxed sm:text-base ${UI.text}`}>
        {desc}
      </p>
    </motion.div>
  );
}

function ModuleCard({
  item,
  index,
}: {
  item: { icon: LucideIcon; t: string; d: string; href: string };
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: index * 0.04,
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{ y: -7, scale: 1.015 }}
      className={`group relative overflow-hidden rounded-2xl border p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#875A7B]/45 ${UI.surface} ${UI.border}`}
    >
      <div
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: `${ODOO_PRIMARY}25` }}
      />

      <div
        className="absolute left-0 top-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
        style={{
          background: `linear-gradient(90deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
        }}
      />

      <div className="relative">
        <div
          className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl text-white transition-all duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_DARK})`,
          }}
        >
          <Icon className="h-6 w-6" />
        </div>

        <h3
          className={`text-lg font-semibold transition-colors duration-300 group-hover:text-[#875A7B] dark:group-hover:text-[#F8F4F7] ${UI.title}`}
        >
          {item.t}
        </h3>

        <p className={`mt-2 text-sm leading-relaxed ${UI.text}`}>{item.d}</p>

        <div
          className={`mt-5 inline-flex items-center gap-2 text-xs font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100 ${UI.eyebrow}`}
        >
          View details
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </motion.a>
  );
}

function FeatureCard({
  card,
  index,
}: {
  card: {
    id: string;
    icon: LucideIcon;
    img: string;
    title: string;
    desc: string;
  };
  index: number;
}) {
  const Icon = card.icon;

  return (
    <motion.div
      id={card.id}
      initial={{ opacity: 0, y: 35, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: index * 0.08,
        duration: 0.65,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.018,
        rotateX: 1.5,
        rotateY: -1.5,
      }}
      className={`group relative scroll-mt-28 overflow-hidden rounded-2xl border p-4 shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-[#875A7B]/55 sm:rounded-3xl ${UI.surface} ${UI.border}`}
    >
      <div
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-[80px] transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: `${ODOO_PRIMARY}24` }}
      />

      <div
        className="absolute left-0 top-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
        style={{
          background: `linear-gradient(90deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
        }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-[#875A7B]/12 bg-[#21151F]/10 dark:border-white/10 dark:bg-black/35">
        <motion.img
          src={card.img}
          alt={card.title}
          className="h-[230px] w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/24 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <div
            className="grid h-11 w-11 place-items-center rounded-xl text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
            }}
          >
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </div>

      <div className="relative p-2 pt-5">
        <h3
          className={`text-xl font-semibold transition-colors duration-300 group-hover:text-[#875A7B] dark:group-hover:text-[#F8F4F7] ${UI.title}`}
        >
          {card.title}
        </h3>

        <p className={`mt-3 text-sm leading-relaxed ${UI.text}`}>
          {card.desc}
        </p>

        <div className="mt-5 h-[1px] w-full overflow-hidden rounded-full bg-[#875A7B]/14 dark:bg-white/12">
          <div
            className="h-full w-0 transition-all duration-700 group-hover:w-full"
            style={{
              background: `linear-gradient(90deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function DetailedAppCard({
  item,
  index,
}: {
  item: {
    id: string;
    icon: LucideIcon;
    title: string;
    desc: string;
    points: string[];
  };
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      id={item.id}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.015 }}
      className={`group relative scroll-mt-28 overflow-hidden rounded-3xl border p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#00A09D]/45 ${UI.surface} ${UI.border}`}
    >
      <div
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-[80px] transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: `${ODOO_TEAL}22` }}
      />

      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
        }}
      />

      <div className="relative">
        <div
          className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl text-white"
          style={{
            background: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
          }}
        >
          <Icon className="h-6 w-6" />
        </div>

        <h3 className={`text-xl font-semibold ${UI.title}`}>{item.title}</h3>

        <p className={`mt-3 text-sm leading-relaxed ${UI.text}`}>
          {item.desc}
        </p>

        <div className="mt-5 grid gap-2">
          {item.points.map((point) => (
            <div key={point} className={`flex items-center gap-2 text-sm ${UI.text}`}>
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00A09D]" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function AdvancedCapabilityCard({
  item,
  index,
}: {
  item: { icon: LucideIcon; title: string; desc: string };
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.015 }}
      className={`group relative overflow-hidden rounded-3xl border p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#00A09D]/45 ${UI.surface} ${UI.border}`}
    >
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
        }}
      />

      <div
        className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl text-white"
        style={{
          background: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
        }}
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className={`text-xl font-semibold ${UI.title}`}>{item.title}</h3>

      <p className={`mt-3 text-sm leading-relaxed ${UI.text}`}>
        {item.desc}
      </p>
    </motion.div>
  );
}

function ProcessCard({
  item,
  index,
}: {
  item: { icon: LucideIcon; title: string; desc: string };
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        delay: index * 0.05,
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{ y: -7, scale: 1.015 }}
      className={`group relative overflow-hidden rounded-2xl border p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#875A7B]/50 ${UI.surface} ${UI.border}`}
    >
      <div
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundColor: `${ODOO_PRIMARY}24` }}
      />

      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div
            className="inline-grid h-12 w-12 place-items-center rounded-xl text-white"
            style={{
              background: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
            }}
          >
            <Icon className="h-6 w-6" />
          </div>

          <div
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${UI.muted}`}
          >
            Phase {index + 1}
          </div>
        </div>

        <h3
          className={`text-lg font-semibold transition-colors duration-300 group-hover:text-[#875A7B] dark:group-hover:text-[#F8F4F7] ${UI.title}`}
        >
          {item.title}
        </h3>

        <p className={`mt-2 text-sm leading-relaxed ${UI.text}`}>
          {item.desc}
        </p>

        <div className={`mt-5 flex items-center gap-2 text-xs ${UI.muted}`}>
          <Clock className="h-4 w-4 text-[#00A09D]" />
          Structured implementation step
        </div>
      </div>
    </motion.div>
  );
}

function FaqItem({
  faq,
  index,
}: {
  faq: { q: string; a: string };
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.45 }}
      className={`overflow-hidden rounded-2xl border shadow-sm backdrop-blur-xl ${UI.surface} ${UI.border}`}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className={`text-base font-semibold ${UI.title}`}>{faq.q}</span>

        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-white transition-transform duration-300"
          style={{
            background: `linear-gradient(135deg, ${ODOO_PRIMARY}, ${ODOO_TEAL})`,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p
          className={`border-t px-5 py-5 text-sm leading-relaxed ${UI.text} ${UI.border}`}
        >
          {faq.a}
        </p>
      </motion.div>
    </motion.div>
  );
}