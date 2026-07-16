import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  Clock,
  Database,
  Factory,
  LineChart,
  Network,
  Rocket,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  UserCheck,
  Users,
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


  .odoo-reference-hero {
    background: #FFFFFF;
    color: #111827;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-reference-hero {
    background: #030303;
    color: #F8F4F7;
  }

  .odoo-handwritten {
    font-family: "Segoe Print", "Bradley Hand", "Comic Sans MS", cursive;
    font-style: normal;
  }

  .odoo-brush-highlight {
    position: relative;
    display: inline-block;
    isolation: isolate;
    padding: 0 0.08em;
  }

  .odoo-brush-highlight::before,
  .odoo-brush-highlight::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: -0.08em;
    right: -0.08em;
    background: #FFB52E;
    transform: rotate(-1.2deg);
  }

  .odoo-brush-highlight::before {
    top: 24%;
    height: 48%;
    border-radius: 999px 22px 999px 30px;
    clip-path: polygon(1% 18%, 97% 0, 100% 68%, 96% 89%, 4% 100%, 0 72%);
  }

  .odoo-brush-highlight::after {
    top: 51%;
    left: 2%;
    right: -2%;
    height: 20%;
    opacity: 0.94;
    border-radius: 999px;
    transform: rotate(0.8deg);
  }

  .odoo-teal-underline {
    position: relative;
    display: inline-block;
  }

  .odoo-teal-underline::after {
    content: "";
    position: absolute;
    left: 2%;
    right: -3%;
    bottom: -0.18em;
    height: 0.14em;
    min-height: 6px;
    border-radius: 999px 70% 999px 70%;
    background: #2CB8EA;
    transform: rotate(-2deg);
  }

  .odoo-reference-note {
    color: #714B67;
    transform: rotate(-4deg);
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-reference-note {
    color: #E7C7DE;
  }

  .odoo-reference-curve {
    position: absolute;
    left: 50%;
    bottom: -150px;
    width: 132%;
    min-width: 1000px;
    height: 245px;
    transform: translateX(-50%);
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    background: #F3F4F6;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-reference-curve {
    background: #0B0B0F;
  }

  @media (max-width: 1023px) {
    .odoo-reference-curve {
      bottom: -170px;
      width: 158%;
      min-width: 900px;
    }
  }

  @media (max-width: 639px) {
    .odoo-brush-highlight {
      padding: 0 0.03em;
    }

    .odoo-reference-curve {
      bottom: -188px;
      width: 220%;
      min-width: 760px;
    }
  }

  .odoo-app-stage {
    background:
      radial-gradient(circle at 15% 10%, rgba(0, 160, 157, 0.08), transparent 30%),
      radial-gradient(circle at 88% 78%, rgba(135, 90, 123, 0.10), transparent 32%),
      #F3F4F6;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-app-stage {
    background:
      radial-gradient(circle at 15% 10%, rgba(0, 160, 157, 0.12), transparent 30%),
      radial-gradient(circle at 88% 78%, rgba(135, 90, 123, 0.20), transparent 32%),
      #0B0B0F;
  }

  .odoo-app-tile {
    background: #FFFFFF;
    border: 1px solid rgba(33, 21, 31, 0.04);
    box-shadow:
      0 16px 30px rgba(33, 21, 31, 0.10),
      0 3px 9px rgba(33, 21, 31, 0.05);
  }

  .odoo-app-card:hover .odoo-app-tile,
  .odoo-app-card:focus-visible .odoo-app-tile {
    transform: translateY(-7px) scale(1.045);
    box-shadow:
      0 22px 42px rgba(33, 21, 31, 0.15),
      0 5px 13px rgba(0, 160, 157, 0.10);
  }

  .odoo-app-card:focus-visible {
    outline: none;
  }

  .odoo-app-card:focus-visible .odoo-app-tile {
    box-shadow:
      0 0 0 4px rgba(0, 160, 157, 0.16),
      0 22px 42px rgba(33, 21, 31, 0.15);
  }

  .odoo-app-card:hover .odoo-app-label,
  .odoo-app-card:focus-visible .odoo-app-label {
    color: #714B67;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-app-card:hover .odoo-app-label,
  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-app-card:focus-visible .odoo-app-label {
    color: #7DE0DB;
  }


  .odoo-business-showcase {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    background: #FFFFFF;
  }

  .odoo-business-showcase::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 50%;
    z-index: -2;
    width: 125%;
    min-width: 1180px;
    height: 100%;
    transform: translateX(-50%);
    background: #F3F4F6;
    clip-path: ellipse(50% 100% at 50% 100%);
  }

  .odoo-business-showcase::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background:
      radial-gradient(circle at 16% 70%, rgba(0, 160, 157, 0.055), transparent 26%),
      radial-gradient(circle at 84% 72%, rgba(135, 90, 123, 0.065), transparent 28%);
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-business-showcase {
    background: #030303;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-business-showcase::before {
    background: #0B0B0F;
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-business-showcase::after {
    background:
      radial-gradient(circle at 16% 70%, rgba(0, 160, 157, 0.09), transparent 26%),
      radial-gradient(circle at 84% 72%, rgba(135, 90, 123, 0.13), transparent 28%);
  }

  .odoo-event-pill {
    background: rgba(255, 255, 255, 0.97);
    border: 1px solid rgba(33, 21, 31, 0.045);
    box-shadow:
      0 10px 24px rgba(33, 21, 31, 0.09),
      0 2px 5px rgba(33, 21, 31, 0.045);
  }

  .odoo-theme-wrap[data-odoo-theme="dark"] .odoo-event-pill {
    background: rgba(20, 20, 25, 0.97);
    border-color: rgba(255, 255, 255, 0.10);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.38);
  }

  .odoo-featured-app-grid .odoo-app-tile {
    width: 90px;
    height: 90px;
    border-radius: 6px;
  }

  .odoo-featured-app-grid .odoo-app-label {
    margin-top: 18px;
    min-height: 24px;
    font-size: 16px;
    line-height: 1.25;
  }

  @media (max-width: 1023px) {
    .odoo-business-showcase::before {
      width: 145%;
      min-width: 980px;
    }
  }

  @media (max-width: 639px) {
    .odoo-business-showcase::before {
      width: 205%;
      min-width: 760px;
    }

    .odoo-featured-app-grid .odoo-app-tile {
      width: 78px;
      height: 78px;
    }

    .odoo-featured-app-grid .odoo-app-label {
      margin-top: 13px;
      min-height: 38px;
      font-size: 14px;
    }
  }

  .odoo-app-tooltip {
    pointer-events: none;
    opacity: 0;
    transform: translate(-50%, 8px);
  }

  .odoo-app-card:hover .odoo-app-tooltip,
  .odoo-app-card:focus-visible .odoo-app-tooltip {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  @media (max-width: 639px) {
    .odoo-app-tooltip {
      display: none;
    }
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
};

type OdooApp = {
  name: string;
  icon: string;
  href: string;
  category: string;
  desc: string;
};

const odooApps: OdooApp[] = [
  {
    name: "Accounting",
    icon: "data:image/png;base64,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",
    href: "#finance-accounting",
    category: "Finance",
    desc: "Invoices, bills, bank reconciliation, taxes and financial reporting.",
  },
  {
    name: "Knowledge",
    icon: "data:image/png;base64,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",
    href: "#odoo-erp",
    category: "Collaboration",
    desc: "Centralize SOPs, internal knowledge and company documentation.",
  },
  {
    name: "Sign",
    icon: "data:image/png;base64,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",
    href: "#project-management",
    category: "Documents",
    desc: "Prepare, send, approve and track electronic signatures.",
  },
  {
    name: "CRM",
    icon: "data:image/png;base64,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",
    href: "#sales-crm",
    category: "Sales",
    desc: "Manage leads, opportunities, activities and sales pipelines.",
  },
  {
    name: "Studio",
    icon: "data:image/png;base64,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",
    href: "#odoo-erp",
    category: "Customization",
    desc: "Create fields, forms, automations and business apps without heavy coding.",
  },
  {
    name: "Subscriptions",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAPoUlEQVR42u2de3RV1Z3Hv7+9zzk3uSQkgYSQ8H5DQAve1Ae2YHxObXGKQnBZnZnOmoHVWVXHqe3Y2pmbqLW2dWxhlh1llKW149Kg+JrxNZX4ZLBNBExugICBBAJ5P+8j57H3b/64N4oOOIp6g+F8Vs66KzfnnrPP/u3fb/9+v71/N4CPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj8/HwMzc2zvwt8xMzGyehs9vMjOl+oDT3oDe3v7vphoiTuNBKI7tixFrwGluCcRI3djwDbHfFz4+Pj4+Pj4+Pl9K6MvU2Cpm2QuIjbW1H3q/FkBo+AgBIYRQSuT64v0cCdfXW5/qA9XVRj2zdapH66eEBjAz/d8mMYiIh/9ORMzMJTXAeXe37FQ9ti3btY0e14UCMEYIXJRdgBW5hfhmdgET0aZjbkAMvH89XwAf6fwTdQzXrDURul91A1k/a214sD4+cE7RzBlT6rrb4RBgs4atNRiAQYRCM4ApZiYKDQuR1pYnNs4+T80BfkZEdb4GnGjkVxBRJTQzz8CeF3mo5U3KyACw7A5FRC2p83Kf623vuT7aTK1tR4fyM4NSa7AggI7RGIcZDms4rFE0frxVHMjCXC36V2bm7boiZ+J3iahpNbOsAoiIPF8A1dUGlZV53Pr2fRjYtQ6RrUD0CCAJTtYc25o2dy2W/LCaiA4x84zXYW/9u4M7p7f193lBwzB0Kg3PDCYCEQipH7isPVspWJZlAIS/mLEA5zh076qcid8HgDCzqCTSp60AmKskUblytv/2frPlybXx2lcUBYMCQjBAYDuGYMligbN+2IB5V19ERG3MPO8VL7r1+kP1xYf6ex2DSEgSUkpJtud6kggGESwICUHEzGAGCwBdrs3zJhSK6yZM3/IDK/9ZInq4ntlaROSMpABGJI3K9VUWUbnjNr15p/HuHWuH6rYmxPjiTCgXQHJCJmsM4nsidnDgn0q8QPFrAOYR0V5mXnrX+Fk1G8Z25xMzBvv7MOjYicmTijNjykWfVmjp7IDhsTvWsEwXmjSACYFMOtTT7f470ZWBfKzk5OTzO2YOEJF92giAw2GBzns1M0/3niwv85q2eTpzvCW8j/SBciGCuZbdcdiTtb+dwcxlAN4gomZmXnoRCm7XALLzsR3ALgDrauN9elP3IdEztmBlW16W9dZ7jV6BGZBERB5rjJGG2dnV6d3W2yv7Js96uGewRxPR78PhsKisrNSnhwasWCGptNLlvsOXGgV558Z3DNgyuzDA+jhzovZIwUSgp87EkXd+QZNCZzc2Ph8gon0Arv6o53/M5H7hFm+grKwk56cPtOxBbGhIjZGGdLRGtpVhTHRdvuO1JzwvdOEjzGwQ8DBXVBgjMTGnXwC1G5MDvP7xmGzbp8kKEvOJBx8JArRm1Rk5CgBzBg5pZqYIYALAQkAjeRi1AD8XiRARbQWwlZkfmZnv/LxK2le+fGCvPSkjOzDesVHfXEe26/Bv3qtRA4Pxq1Gy7CFavhxgJqQ5Vhi5pbScyRKdYwTUxw861howDKLCM4oBAKG1wwHVRyfP93+v5mqjDBdoImoEcFVDfODZCbMDK6r37FCRo/tl3HNgWQFzsKvLfUbsu2RzW+OGVYVzflIOJDYDKp3dkP4wPbQWACAXXOEiZwqgHIDoRMMfUhBcFXDExMW3D88O/98tyqjMA5GuYpZhrjZKgmOveCBrylNfH5cn47E+xxIGlNawrAyz6fBBVNvd1wMYW5XcbUOj3gQxc8Dddk+e0boDCIwBjmOCSEgoz1XBTMtwS8oPEdGzSKYTPvFkWU6kmJmQXDRfc/fMcx7vGoqu/K/d7yhDWtJVCkZmFv1b3Vtqvm3+xw1zS8vA6XXN06oBzEy0bqMLIMNE4t6hPds1WVkWhgMqEpw6tB4adAIWS8z/9kFzyrnLub7eOpnRSURcASgicgsocOVf5cx8KjMzi8A6lWcCSCnxaMfeUmY+C2BwOH0JvPSaoJSp0Yff/me88xAQzCPoDyyKqRNkqjhlIiEyZ59pybKfNg/M+5tLafryA2hoUCebTEsl8iQArJo073s/WrxMeImoNoUEEUg7ruowOOvFtqbbQcQbvvOCOWpNEDMb3o7fraNYJ0AmAAZIAE7Uw2W/6hdT5kp3359+bZoDzyVKf9CTk/T7BRGpzyZ7UuGkKYrOUoG7zph/xi31TY2uYQZMIQ0cjfbxzQ3VMWa2Sms36tGpAcmO8FTNA0fJsABmkJDQiQGdsfRqQy+8arkovmScdcGtt9H5v9gRJGpmDgv6nHI2F+BVEFHsuqK5L88O5raRFACDTSGNRFeXu3Dy9FUx5VxbW7rOreEac1QJgJklAcydjdcIt73QsW1NAGlmZWYK0rbxhJU18UgFEXEYgjksOBwWRJ9fhFpGZd6fPf98gEyz2u3qfTEvv9B0lVIaDEiJVjtKm480EgBsrB1tJuiFFwwASg0cus7MycuOdR32pBUQ8BzPLJ4aSOx/vSpI1MvhEosqGxxUVn4hzfjrqVP5BWbxUkdTQePB7ehmBUACQqIlPoDN0d1JZw21o8wERd9mANAdkW4koiyETKUbbEL2JFhLb8pjZsKKr32hkejqhQs1Eemzc4r+qBzHJimImSGEQIcdR03PUcnMVJsmDUh/INa9z4C2CSQAEMAKCIwFxs9OeTmhL3wOAjONywje1tzZ0SYCGZKZmZjYI6Cjq6UvnUuXaRRAQyqOHQKGH48AKA2YQcjsovRnQyyLhmMQUwhLd3Tof734L+9h5mlYu9ZLx4J++jXAykm6nXyMFJQLDA2mLRhMvc5TJDJYqWRAlnwP3nC7aNRpQEnyJTBGJ81P6qmlBJwoVG9TWtoSAUwQcVy598wsKp6gbVsJIcjRyskqmiRu2vbMPxBRM2o2GpSGJcv0CaBkYfI1f+EYWEEkU9AMCBOIt0Pt3hIfzhV9oYYwEgEzi+qu5oH+RJwhREozNI03Algz4yu5zEwhjDYNGJrJACAnldYrDw6BCWDACJDuPABoewEzZ+FILX8RZqeG2QxztfG212oSkX5w/y67nz1639awxjgrQ38ld4JLRBxCaHQJgEpLXWaQHD/zVm9woDUzMyhZM5MwzER3v7amn3ErYrFsVLBiDn9u7QqHw4KIuJTIraQy718WXxZj5hmdGVjc29utDCmFAAGOzUsKJ4sfzzk3CABrQ+kRQHpzQQRUVVVJkVOTzTsfSL6hPYhgHuntD2su/tZ9RtbSP/+8VKCa2Sgj8ph5egfUxs1Nu5iZ8cCBnXP6PHuGStjasgLCZaWC48abbUfaX0Exnl5eXW2EAG/0CQBAeXm58g688S7v3LQclHLziKATA8R7t1zGzDOBioOMis+0lTCVwPP2tuyddPv+t7c91tNU1BEfhCBCIjGEwVhUSysgNDO08nTBuHzzinFTY0TUuj657uyNKhOU6hUAgAxa3xFfXSU50a9JGCAwuQqe2fyflrvzsd8QVWrse8E62dtUcZUkIl3f3j57g93+1h37thU1HGpyunq6VUd3tzcYj2lDSjHcHpKGzHcpeu3khU8xh8UNc76RtsX5tAqAiJjDyw1MODvqORkbgkXFUnmOBxBgBAyns9UT7/46NPTOpstp7uU2N64PnMyEG8FqZuY5u6j/D7/fVzONE0PKNCxLCimlEIYUQvAH5zObplg3saQ7KxB4iFDJnzX1fWoHYhdUgIiixvm3PoPpX+sWKqqZBBOYFGUY3BopDrT/8Rm3q/VSmnujzfx84NOshFUAVEmkG3p7nVdi7dP6+3pdaVhSH+fbBAQRFGsO5RZiQiB3ZbLeN70bqNO/HlBW5nHj+gBlF2x1p656NWPGQovtQQckQFDk6oBWXe8asvORl9zD/30x0eV2UnPC4pN4RxUgZmaKRDtu2tK4U8vMLOlqdSKfANAak4NjkUhEu4jIS/f+9ZHZljLnBpe5RwAr71KD75UF2+4cl7AdRcKUcvoioYvGahx5WcCMPMt25EVYJTcRUTMqAQ5DYMX9EggBIYCo1E3lbCQRuQQGA+hwor19ni0MQJ+oU5OBicSheL+qCfYYacxAfHgQjATvF10MDM3HGzdu8+oey/OKF2tzcq5gNwbWAgQbxtQFUHLxIY8TlwTm/z2n9vp8cJ2q1RaVb3aS16w2CK9qUKXG3WumjAuVHejt64MEyeMJQZKAYyf0daFl4nv5C+YszS3c/3H1CqNHA4YnZK4xiTL22K/etdxYtu5l040UqsSAEmRKEgxGgN2DDcq09k6RY6ftQd/TUJG7fy6y57yHwlIBq1gR0SZmng1gORE9yMyCUIkn14QnPTTUKp9rf9OVGdnS4+OZIVbIsFCo6NXzcib0IRwWSPMkMKJfMkFU6nJ12KALbqmzW166xIjlvWYd3TrOHRpySGaaBE0wAoaridHTzPz6HbCKpv0YxhGgrQ6Q2XBeuvhSb/v3S40zvj6Le3fPIqKfPN+4PvCNyQv21jX1P7pr6oxrWloPDVlGwCQiqVMbfwwixONR58Kvnp85n8euJ6Ku1VVVFqV5u/opUiOWrBUYGhiaH+h7+n/Q/3Ku27JXk5ElQEht3CJASLByXCibwR7ACmZ+gYVoDG68N26eeWUQE6/7JWXO+seUmVvzy+7dd67fUT3ziJ0ABvodmCYl886Od25JKHhz4cL7rpo495ZaID4SlZWnTJlq0hyVusx8JrydN7s1D14r+neyZsGggBhubbIQht5vPmvlgUgQGYLtbtcsucTUedf8So4r+dHwtdfv/9O9jx/Zu2zmjBmLDnS1IzeQiXnjJ2KZGrPx28Vz142oFcApxLETIMcPr4G99zE0bQH6GwEIKMeBUp5HwvzAiyZKRdg6udAT71TmWd8K6DFXbpAFoRuruN4qp0UOMxclgIsfba7Ti8bmi3PyikBEj4TDYVFRUcEjVUF5yhVqJ13KiEG0yEkwz85ofkRpq3iTiNbNcttqi8xcy4AdA+ABOnUIAxAWQEZyfTna3aXHLt0nSm46H6igjVgh11Gpe5xUqcAIFWacsgL4wL2sklRe/iHXxWNvjfQiK709f/BgdxgcbwWGeoDMAtCY6RBjJnti7jcNG0WVGUS7j70GM4ta1MqNtcMV9SGEAO9UrB0+pUwSJ4usiT/lruV0bzP/UrqhnyRWOFZXkxtsIzIS2YyFANDQ8MHJJak154WrAWz26BQoQfXx8fHx8fHx8fEZhUGS8HvB74vTF9u2lzCzcbr//wBmNmzbXpL2m/f09b2TagSdxgKgY/viZDjp0ZuI25OY+fVYLLbkdLODw88ai8WWMPPribg9ybeJPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4fx/8CNRL6CQ4SWHgAAAAASUVORK5CYII=",
    href: "#finance-accounting",
    category: "Revenue",
    desc: "Manage recurring contracts, renewals, billing and subscription revenue.",
  },
  {
    name: "AI",
    icon: "data:image/png;base64,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",
    href: "#advanced-capabilities",
    category: "Intelligence",
    desc: "Use smart assistance, summaries, automation and data-driven actions.",
  },
  {
    name: "Point of Sale",
    icon: "data:image/png;base64,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",
    href: "#pos-retail",
    category: "Retail",
    desc: "Fast counter billing, payment collection and real-time stock sync.",
  },
  {
    name: "Discuss",
    icon: "data:image/png;base64,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",
    href: "#project-management",
    category: "Collaboration",
    desc: "Connect internal chat, channels, notifications and team conversations.",
  },
  {
    name: "Documents",
    icon: "data:image/png;base64,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",
    href: "#project-management",
    category: "Documents",
    desc: "Organize, share, request, validate and automate business documents.",
  },
  {
    name: "Project",
    icon: "data:image/png;base64,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",
    href: "#project-management",
    category: "Operations",
    desc: "Plan projects, tasks, milestones, responsibilities and service delivery.",
  },
  {
    name: "Timesheets",
    icon: "data:image/png;base64,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",
    href: "#project-management",
    category: "Services",
    desc: "Track billable time, employee hours and project profitability.",
  },
  {
    name: "Field Service",
    icon: "data:image/png;base64,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",
    href: "#project-management",
    category: "Operations",
    desc: "Schedule field teams, onsite work, service tasks and customer visits.",
  },
  {
    name: "Planning",
    icon: "data:image/png;base64,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",
    href: "#project-management",
    category: "Workforce",
    desc: "Plan shifts, capacity, resources and team schedules visually.",
  },
  {
    name: "Helpdesk",
    icon: "data:image/png;base64,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",
    href: "#project-management",
    category: "Support",
    desc: "Manage support tickets, SLAs, customer requests and team performance.",
  },
  {
    name: "eCommerce",
    icon: "data:image/png;base64,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",
    href: "#website-ecommerce",
    category: "Commerce",
    desc: "Run online products, checkout, orders, payments and customer accounts.",
  },
  {
    name: "Website",
    icon: "data:image/png;base64,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",
    href: "#website-ecommerce",
    category: "Digital",
    desc: "Build connected websites, landing pages, forms and customer portals.",
  },
  {
    name: "Email Marketing",
    icon: "data:image/png;base64,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",
    href: "#marketing-automation",
    category: "Marketing",
    desc: "Create campaigns, segment audiences and automate customer communication.",
  },
  {
    name: "Purchase",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAADx0lEQVR42u3dzWtcVRgG8Oc9597JpEloQoKmCU3BSAwNUoaKK+u2btyJ25KFunHh1tUky4K4KOKiO7f+EV0UEQTjQowiFBRi1RKaycTMx5378bjICFlIF9UzmcM8P7gMzObeeZ9z3jn35uYOICIiIiIiIiIiIiLPQJKt1sl7JI1kOoGfPyVpwxpw5AfQarW3hwfiJngQuvO1uLADmPBO4C5qx4kasWohIiIiIiIiIlGxUe3oWzK9u79v+/gxmuJs4Tq+3NrKzYzxRkxYs9l0GusXPAMenBzeu3f82/xPJ8esObNxLoqH4bDIqrdWrrkPpxc/bswsPSZpIWZCsMuoJG0H8DtA/dOjg8/uWvvOI5ejmJ9BhrGuP7wZugOP6cVF9E/dJwAe75wN1ngC2AOSXbP8jeMn29/M+TsP9n/uLvk0HfPaAwCcGfIiL3tPWz6vLRQh9xUsgA/29gAAHx3sl72leS75WuIMaQzfZg4GgznnzNtU2HYZ/C85T6s+EtAQYv6Gap8V4ROP9u9HOHjyx9mbO6HCDiyBj6Hr/MvyxFDmBQanA0Q9AyrnkHgH+Ihi4NnQdD786jl8AKcZykt9sJuPYL79Xys4A43IixyDWAPYu38fAPDn518D07PwfgC4OGaBOUPRyfDD1RXUX3kBALAb6EtgNLdTGFD+1R/led9/7v/Ic9AZOsFXXKNbXEezOWeAGeYqYH3Yg5rRBxDhRZrLhcPLp7VYZ8BNAMD0sM9ZXLWHEaiZw2wt0hb0/vD1nV6K5cqBwyB8BFsCgKywMlPH7ReX4wzg5vD17TzFu/0UUwQKI8oItswRCxlwu34Zy2vLwxPhSFdBhw64lSdAXsf3aYVT49i3owU4vNZzWC8dHgVuQcEDcAC6BrxaeNwoE2QRBHDJHNos0TViLfYz4fMhmBEO439Rrm1EPqIl4sjua3fnVkLjPgMcgGKE+5ILDlsUgAIQBaAARAEoAFEACkAUwMUzM5AoQz8JJXgAzowkCSOJCDaS5oz9Tq9aXb/qr2xdO3sUz06Y+gS/GFeS6VRSMzdwU4lLIhj5wCAbYLNxPeWc/wLAryQ9gCqqADaubBAAWFRHVYJfarP1AcnaeFcfqAZluXnrhnvpzc2v1l7f2IYBJBH3f8lEjKQFzjz8uGo2m1Hen7u7u0vEc1O3iIiIiIiIiEgwenC3ajHZsixrkEwm/fcDSCZZljVGvvOj4+PvhgdhExyAna/F83ju0dvrZqskH3Y6ncak9cF/Pmun02mQfNjrZqvqiSIiIiIiIiIiIiLP8jcokz1w6xhYugAAAABJRU5ErkJggg==",
    href: "#purchase-vendors",
    category: "Procurement",
    desc: "Control quotations, purchase orders, vendors, approvals and costs.",
  },
  {
    name: "Inventory",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAI9UlEQVR42u2daWxU1xXH/+e++8a7AbMajMFtsAmYEmOaUEwFrppEkAaaqHFKUz6kW1SBIlGpqlRVGlClfqgUpVWlSqT9ELUJQnZLSpMASgETFhVSAym2WYwLGOOAAS9je5a33Hv6YcYL1NCUOp6xfX+fZtO8d///c889dxkbMBgMBoPBYDAYDAaDwWAwGAwGwwNgZu7q6vk+MxMz2xOw/TYzU0IDHvUb6OoKvZy4ETGBg1AM1SJpNzDBM4FI1oWlScRGC4PBYDAYDAaDYdTr79qgZN5hmwnh6E98iBuqA3e9ds9zw2cDMYP6n3g3//EkO3/4LjMXAwBXwxr6vmEko75uhz2kB5Rw555d3rHvxPjaFvb//spV/uTAW/1LAgwQ1wbHxPJAykcLM1vAK4LoDY+ZMxC+sEe37CwXsUt5XnsbQ8Oz0wMBZE+HLqi8Luas20k09ycA0LT312kL1r7qEhEbAx5K/KAg2q4BwG8/sgnX93/bsm88pdouQ2nhk7QtIhBr1oCv7TSSUPOAi95r/up1B+zSb+0HAA4GBW2Pf48x4FMMsMBhi6jSTzx/ER1vPYdbZ15E+1m4EcVC2gQwwIkWSAHu8aDPhVhf7OSM3Azh5BVw2obNf8Sy9b8kosZ41cSSKsk3BtxffJuIPACIMRendZ3Zry69Odey26X3SasDO0sSkQWtASLAFkBMg//VC30uBPR5gLSgtfbJdUT6/CKBwiUd+pnN/xRzFz5LRJG6H+ywyzcWM1VW+saAAeFBOBy0qHK7z8w5UMfX+fUHX5duQ77f2Q6tLV/YAQnW8ai3CdAAXw+DG3vA7VFAEGDFOwYAMAmGE/WJyE4rKkRk9opDXate/V3BkoJdABAMBsX2FEhLlFzhqy3U1ICqahQAsNP7c1x7cw0CratU4zEoymAhrMF0YxEgCNzpgOu7wS1hgBmQYkD4eBUUb5ZFGoI0X4vMwCVrJQVKVmHGwvxdi77xxHtE9HY8LdVKrFmjkjVQUxLTjSAinXic71/Y8WOZ1b4VV07AC3W7lD4pAFZxgfujO6ygL/aAm3qAqIqnIMJd4msQLGhI8hFSk/CxsxTN3gI4KqBVX8jLnzs7Lb+0UGfOzNlU/tLqvxHR7f6xJxkmUDLFd5gXB3o/qEDb6R248SE8J6wYNoRlWwPpJiAAV4FbIvGoD7kDPQH3yMUgpJGDiM5Es/sIPnaWoE/nQsIDgUGWBTfmesSwJ0/Pw+xlRbcef3rVDzOLJx8kotDQoBgtZFLSTtyEx9Hx3h60/2WWd+WcgswWJDIsAgNaJ0QGuC0CbgyB26KAQDzqeTDqB9INFIgYzd7nUR8rRZs3B5I82HDBcfnBSkMGpA0Gh7q60fH+RzPskP5z4VOLjjPzhpqamu7R7glJmC1+ThCRx8xL4TfPci+eCFu587NYuXFVRVx49HjQ9SHw1T7A03HhcW+6EZDwIaDRqfNwOvYYrrrz4bGNNHIGhL+nmwAACSGQOTkLR/56KLZxxSMVAKZUVVV1xMvgcdwDcGrgUQS+1BTItlmrwfddDW5OlJURFe8J9vCDbDo56NNZuOiU4KxTiqjOgEUKAXLxaZaEtNLImpQdiDgxBSApZWky10sEiAU4kXKJAE9B1d4CbkbjlU1ivjU03RAYEj4YwAWnGPVOKdr9mbDJg03e8FH/IBO0BgFWssbD1FmwIgAeA7ec+MDLw6Qb8kHMuKOm4VS0DNf8QjDT/dPNGCC1Vgypf5L1n2NgOjkI6Rw0xkpxzl0IT9uwKD7wjuUV6NRbsh2m/lAQaHAW4WxsCTpVHgLkQpI/YlFPxoD7Y0HhjsrDsUgFNATSKQYNMaJRz8aAB6MgIaBhQUFjfG3/jonWUCJGx+NuozlNYAwwBhiMAcYAgzHAGGAwBhgDRhMGg5N9MIOIkJQfWqeAATZIEZTrgazkiC8EnKjrSUsSkhQJo29AeS8zBwWAO7CmaXtWQRbHuhwGadDwGtCIC09gZj8aCqvixcVpVobVAcAZ7e1IIAmLcUSVPnOtJKJ3fcfZZDHW2dPOv4TWk/B8VzMREUAYkhVGLD/Ej7CwG3F46tSpMmfJVCx/euVvZ1UUvUFEbcxsEZEa1wYMmsBERDsB7OSeU7u1k7XZzrn8FfitUD48Sk+X0JpG5nrxsxa+4yopbbtkWSkFpmW8/tjGL+2dPGvagSGfU+O+BwxpLDOzxOE1oNzy3cy8D71N71rLw0vtttZpsZYWjcxcGtgzftgcKwR832fSJGbPKxBFKxZeLllbtidzevaPsBVo2tuUtmDtAm+0zwMl3YCECYkT0LWSiKIAvsrMi3Hota04+P7LVksTs2VzolT6n3sDAxwLR9SUvDyZWTC5rWxDxb75K4u3EJEDgBIHsZxkapASGzKDR9GDInGU/Hve1Q/3ydbrf8I7v6H0OxrK18pOk5ZW+r+mG6W0gtIkpRTzyhfJL3x9Rfuc5UVPEtH5IIKi//cCyUg5n3WB8f9PDpgFarZJqtruMvNcNB7a4pyo+2b1Iavwzs0ON2tKtg0GDVe6C8uCE42pSdm5lpVto/zZisuFX370pxl5GYeI6HbT3r1pxevWOanU3pTdYuIXXrCoJnFqmpka95+qVa2R1UffOQgQaZluEwbLRiYiREJ9qqCoUGbOzDm6aH15bdETjwb7v6+6utqqqqpSqdbOlN0TppoaxcyEmhpBRIqZnwHwvD+FfnHzo6sF15taoFgzMyshhGTNWLF+tZxXUfJBfvn8DUQUCwaDctu2bSpZFc6Y7gEPSFEzO87fqGg52fSr+gN1cydl5qLXj3iLv/bF1mXPr9wAoJmIYg0NDYHS0lLXrDaNnPDEdXV3/XHAM7uP/6zh90d3XTl58bl7PztW2jUWewCBAIrf+tCReGBgTuWfpY55A4ZSW1srpx++Lc4thkrFAdZgMBgMBoPBYBiHM1NzpMVoMYFxHKeMmeVE//8BzCwdxykb9Yt3dnefTtwETWADaKgWD8NDR2804sxh5iPhcLhsouXB/raGw+EyZj4SjThzTE40GAwGg8FgMBgMBoPBYDAYDIYH8W9OZndj8456qAAAAABJRU5ErkJggg==",
    href: "#inventory-warehouse",
    category: "Warehouse",
    desc: "Manage stock, locations, transfers, replenishment, lots and serials.",
  },
  {
    name: "Manufacturing",
    icon: "data:image/png;base64,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",
    href: "#manufacturing-production",
    category: "Production",
    desc: "Plan BOMs, work orders, materials, operations and production costing.",
  },
  {
    name: "Sales",
    icon: "data:image/png;base64,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",
    href: "#sales-crm",
    category: "Sales",
    desc: "Create quotations, sales orders, price lists and customer workflows.",
  },
  {
    name: "HR",
    icon: "data:image/png;base64,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",
    href: "#hrms-employees",
    category: "People",
    desc: "Manage employees, attendance, leave, approvals and workforce records.",
  },
  {
    name: "Dashboard",
    icon: "data:image/png;base64,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",
    href: "#dashboards-reports",
    category: "Analytics",
    desc: "Monitor real-time KPIs, department performance and management reports.",
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

        <section className="odoo-reference-hero relative isolate min-h-[690px] overflow-hidden px-4 pb-48 pt-32 sm:px-6 sm:pb-52 sm:pt-36 lg:min-h-[760px] lg:px-8 lg:pb-56 lg:pt-40">
          <div className="container-x relative z-10">
            <div className="relative mx-auto max-w-[1240px] text-center">
              {/* <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="odoo-chip mx-auto mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] shadow-sm"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: ODOO_TEAL }}
                />
                Odoo ERP by Business Genie
              </motion.div> */}

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.7 }}
                className="odoo-handwritten mx-auto max-w-[1180px] text-[40px]  lg:-mt-10 font-bold leading-[1.18] tracking-[-0.045em] text-[#111827] sm:text-[56px] md:text-[68px] lg:text-[78px] xl:text-[88px] dark:text-[#F8F4F7]"
              >
                All your business on{" "}
                <span className="odoo-brush-highlight">
                  <span className="relative z-10">one connected platform.</span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.65 }}
                className="odoo-handwritten mx-auto mt-5 max-w-[900px] text-[28px] font-semibold leading-tight text-[#111827] sm:mt-7 sm:text-[38px] md:text-[48px] lg:text-[56px] dark:text-[#F8F4F7]"
              >
                Simple, smart and{" "}
                <span className="odoo-teal-underline">built to scale!</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.6 }}
                className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-[4px] bg-[#714B67] px-7 py-4 text-base font-semibold text-white shadow-[0_14px_34px_rgba(113,75,103,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#875A7B]"
                >
                  Start your Odoo journey
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#modules"
                  className="odoo-outline-btn inline-flex min-h-14 items-center justify-center gap-2 rounded-[4px] border px-7 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-[#00A09D]/45"
                >
                  Explore Odoo apps
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: -8, y: 12 }}
                animate={{ opacity: 1, rotate: -4, y: 0 }}
                transition={{ delay: 0.52, duration: 0.65 }}
                className="odoo-reference-note odoo-handwritten mx-auto mt-9 max-w-[360px] text-center text-[22px] font-semibold leading-[1.22] lg:absolute lg:-right-4 lg:bottom-[-10px] lg:mt-0 lg:text-left lg:text-[27px]"
              >
                One ERP for sales, finance, stock, people and reports.
              </motion.div>

              <motion.svg
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ delay: 0.55, duration: 0.9 }}
                viewBox="0 0 150 112"
                fill="none"
                aria-hidden="true"
                className="absolute bottom-[44px] right-[215px] hidden h-[108px] w-[145px] lg:block"
              >
                <motion.path
                  d="M8 10C56 19 83 44 112 78"
                  stroke={ODOO_PRIMARY}
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.56, duration: 0.9 }}
                />
                <motion.path
                  d="M95 74L114 82L109 61"
                  stroke={ODOO_PRIMARY}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.12, duration: 0.35 }}
                />
              </motion.svg>
            </div>
          </div>

          <div className="odoo-reference-curve" aria-hidden="true" />
        </section>

        <OdooSection className="!py-0">
          <div id="modules" className="scroll-mt-28">
            <section className="odoo-business-showcase min-h-[610px] px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:min-h-[650px] lg:px-8 lg:pb-28 lg:pt-[110px]">
              <div className="container-x relative">
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="odoo-event-pill mx-auto flex w-full max-w-[600px] flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full px-5 py-3 text-[13px] sm:flex-nowrap sm:justify-start sm:px-6 sm:text-sm"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-[4px] bg-[#075B32] text-[12px] leading-none shadow-sm" aria-hidden="true">
                    🇵🇰
                  </span>

                  <span className={`font-semibold ${UI.title}`}>
                    Business Show - Lahore, Pakistan
                  </span>

                  <span className={`hidden whitespace-nowrap sm:inline ${UI.text}`}>
                    Jul 15, 2026
                  </span>

                  <Link
                    to="/contact"
                    className="ml-0 inline-flex items-center gap-1.5 whitespace-nowrap font-semibold text-[#714B67] transition-colors hover:text-[#00A09D] sm:ml-auto dark:text-[#E7C7DE] dark:hover:text-[#7DE0DB]"
                  >
                    Register
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                <div className="odoo-featured-app-grid relative mx-auto mt-[70px] grid max-w-[1040px] grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-11 lg:grid-cols-6 lg:gap-x-12 lg:gap-y-10">
                  {odooApps.slice(0, 12).map((app, index) => (
                    <OdooAppCard key={app.name} app={app} index={index} />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  className="relative mx-auto mt-20 max-w-[1040px] border-t border-[#875A7B]/12 pt-10 dark:border-white/10"
                >


                  <div className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-6 lg:gap-x-12">
                    {odooApps.slice(12).map((app, index) => (
                      <OdooAppCard key={app.name} app={app} index={index + 12} />
                    ))}
                  </div>


                </motion.div>
              </div>
            </section>
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
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative py-20 ${UI.section} ${className}`}>
      {children}
    </section>
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

function OdooAppCard({
  app,
  index,
}: {
  app: OdooApp;
  index: number;
}) {
  return (
    <motion.a
      href={app.href}
      aria-label={`${app.name}: ${app.desc}`}
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        delay: Math.min(index * 0.025, 0.32),
        duration: 0.48,
        ease: "easeOut",
      }}
      className="odoo-app-card group relative flex min-w-0 flex-col items-center text-center"
    >
      <div className="odoo-app-tile grid h-[78px] w-[78px] place-items-center rounded-[7px] transition-all duration-300 sm:h-[86px] sm:w-[86px] lg:h-[90px] lg:w-[90px]">
        <img
          src={app.icon}
          alt=""
          aria-hidden="true"
          loading={index < 12 ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
          className="h-[62px] w-[62px] select-none object-contain sm:h-[68px] sm:w-[68px]"
        />
      </div>

      <div
        className={`odoo-app-label mt-4 min-h-[40px] text-sm font-semibold leading-snug transition-colors duration-300 sm:text-[15px] ${UI.title}`}
      >
        {app.name}
      </div>

      <span
        className={`odoo-app-tooltip absolute left-1/2 top-[calc(100%+4px)] z-20 hidden w-[210px] rounded-xl border px-3 py-2 text-left text-[11px] leading-relaxed shadow-xl transition-all duration-200 lg:block ${UI.surface} ${UI.border} ${UI.text}`}
      >
        <strong className={`mb-1 block text-[10px] uppercase tracking-[0.14em] ${UI.eyebrow}`}>
          {app.category}
        </strong>
        {app.desc}
      </span>
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
