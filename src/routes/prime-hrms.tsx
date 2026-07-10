import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileBarChart,
  Fingerprint,
  GraduationCap,
  IdCard,
  LineChart,
  LockKeyhole,
  Medal,
  ScanFace,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  UserCheck,
  UserPlus,
  Users,
  WalletCards,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/prime-hrms")({
  head: () => ({
    meta: [
      {
        title: "Prime HRMS Consulting | Business Genie Consulting",
      },
      {
        name: "description",
        content:
          "Prime HRMS implementation for employee records, attendance, leave, payroll, ESS, biometric integration, recruitment, performance, learning and workforce analytics.",
      },
      {
        property: "og:title",
        content: "Prime HRMS Consulting | Business Genie Consulting",
      },
      {
        property: "og:description",
        content:
          "Transform employee operations with Prime HRMS for attendance, payroll, leave, recruitment, performance and workforce analytics.",
      },
    ],
  }),
  component: PrimeHrms,
});

const ORANGE = "#F59E0B";
const ORANGE_DARK = "#D97706";
const CHARCOAL = "#2F2F2F";
const GREY = "#5C5C5C";

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

const modules: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
}> = [
  {
    icon: Users,
    title: "Employee Management",
    text: "Centralize employee profiles, departments, documents, contracts and workforce history.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=88",
  },
  {
    icon: Fingerprint,
    title: "Attendance & Biometric",
    text: "Track shifts, overtime, late arrivals, absences and connected attendance devices.",
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1400&q=88",
  },
  {
    icon: WalletCards,
    title: "Payroll Management",
    text: "Process salary, allowances, deductions, benefits and payroll reports with greater accuracy.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=88",
  },
  {
    icon: UserPlus,
    title: "Recruitment",
    text: "Manage vacancies, candidates, interviews, hiring stages and applicant reporting.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=88",
  },
  {
    icon: Medal,
    title: "Performance",
    text: "Set goals, run reviews, track evaluations and support employee development.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=88",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    text: "Plan training, monitor completion and support employee growth across teams.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=88",
  },
];

const lifecycle = [
  { icon: UserPlus, title: "Recruit" },
  { icon: IdCard, title: "Onboard" },
  { icon: Clock3, title: "Attend" },
  { icon: Target, title: "Perform" },
  { icon: WalletCards, title: "Pay" },
  { icon: GraduationCap, title: "Develop" },
];

const benefits = [
  "Centralized employee records",
  "Faster leave and attendance approvals",
  "More accurate payroll execution",
  "Mobile employee self service",
  "Stronger manager accountability",
  "Live workforce reporting",
];

const faqs = [
  {
    question: "Which Prime HRMS modules can be implemented?",
    answer:
      "The implementation can include employee management, attendance, leave, payroll, ESS, biometric integration, recruitment, performance, learning, expenses, assets and workforce reporting according to your scope.",
  },
  {
    question: "Can Prime HRMS connect with biometric devices?",
    answer:
      "Yes. Prime HRMS can support attendance and biometric-related workflows. Final integration depends on the selected device and implementation setup.",
  },
  {
    question: "Can employees use Prime HRMS on mobile?",
    answer:
      "Yes. Supported employee and manager experiences can provide access to attendance, leave, requests, payslips and workplace information from mobile devices.",
  },
  {
    question: "Can existing HR and payroll data be migrated?",
    answer:
      "Yes. Employee profiles, departments, salary structures, leave balances and other agreed records can be prepared, validated and migrated.",
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

  const text = `${classText} ${attrText} ${storageText}`;

  if (headerLooksDark()) return "dark";
  if (/\b(dark|night|black)\b/.test(text)) return "dark";
  if (/\b(light|day|off-white|offwhite|cream)\b/.test(text)) return "light";

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function usePrimeThemeMode(): ThemeMode {
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

    const onClick = () => window.setTimeout(update, 0);
    const interval = window.setInterval(update, 250);
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

function PrimeHrms() {
  const theme = usePrimeThemeMode();

  return (
    <SiteLayout>
      <div
        className={`prime-theme-wrap ${theme === "dark" ? "dark" : ""}`}
        data-prime-theme={theme}
      >
        <ThemeStyles />

        <main className="prime-page min-h-screen overflow-hidden bg-[var(--prime-bg)] text-[var(--prime-text)] selection:bg-[#F59E0B] selection:text-[#2F2F2F]">
          <HeroSection />
          <FeatureShowcase />
          <LifecycleSection />
          <RecruitmentPipeline />
          <PayrollSection />
          <MobileEssSection />
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
      .prime-theme-wrap {
        color-scheme: light;
        background: #f7f5f1;
      }

      .prime-theme-wrap[data-prime-theme="dark"] {
        color-scheme: dark;
        background: #030303;
      }

      .prime-theme-wrap[data-prime-theme="light"] .prime-page {
        --prime-bg: #f7f5f1;
        --prime-alt: #efeae2;
        --prime-card: rgba(255,255,255,.96);
        --prime-card-soft: rgba(255,255,255,.84);
        --prime-title: #2f2f2f;
        --prime-text: #454545;
        --prime-body: #626262;
        --prime-muted: #808080;
        --prime-border: rgba(47,47,47,.14);
        --prime-border-strong: rgba(245,158,11,.32);
        --prime-overlay: rgba(247,245,241,.92);
        --prime-shadow: 0 20px 60px rgba(47,47,47,.11);
        background: #f7f5f1 !important;
        color: #454545 !important;
      }

      .prime-theme-wrap[data-prime-theme="dark"] .prime-page {
        --prime-bg: #030303;
        --prime-alt: #0a0a0a;
        --prime-card: rgba(18,18,18,.96);
        --prime-card-soft: rgba(13,13,13,.90);
        --prime-title: #ffffff;
        --prime-text: #eeeeee;
        --prime-body: #d1d1d1;
        --prime-muted: rgba(205,205,205,.70);
        --prime-border: rgba(255,255,255,.11);
        --prime-border-strong: rgba(245,158,11,.36);
        --prime-overlay: rgba(3,3,3,.92);
        --prime-shadow: 0 24px 75px rgba(0,0,0,.48);
        background: #030303 !important;
        color: #eeeeee !important;
      }

      .prime-container {
        width: min(1220px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .prime-card {
        background: var(--prime-card);
        border: 1px solid var(--prime-border);
        box-shadow: var(--prime-shadow);
      }

      .prime-glass {
        background: var(--prime-card-soft);
        border: 1px solid var(--prime-border);
        box-shadow: var(--prime-shadow);
        backdrop-filter: blur(24px);
      }

      .prime-theme-wrap[data-prime-theme="light"] .prime-alt {
        background: #efeae2 !important;
      }

      .prime-theme-wrap[data-prime-theme="dark"] .prime-alt {
        background: #0a0a0a !important;
      }

      .prime-theme-wrap[data-prime-theme="light"] img {
        filter: brightness(.97) saturate(.93);
      }

      .prime-theme-wrap[data-prime-theme="dark"] img {
        filter: brightness(.68) saturate(.86) contrast(1.08);
      }

      .prime-page,
      .prime-page section,
      .prime-page article,
      .prime-page div,
      .prime-page a,
      .prime-page button,
      .prime-page p,
      .prime-page h1,
      .prime-page h2,
      .prime-page h3 {
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
    <section className="relative isolate min-h-[96vh] overflow-hidden bg-[var(--prime-bg)] pb-24 pt-32">
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90"
          alt="Prime HRMS professional workforce"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--prime-overlay)_0%,var(--prime-overlay)_48%,rgba(0,0,0,.26)_100%)]" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, 24, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-28 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#F59E0B]/20 blur-[145px]"
      />

      <div className="prime-container grid min-h-[74vh] items-center gap-16 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex items-center gap-5">
            <div className="relative text-4xl font-bold tracking-[-0.06em] text-[var(--prime-title)]">
              PR
              <span className="relative">
                I
                <span className="absolute -top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#F59E0B]" />
              </span>
              ME
            </div>

            <div className="border-l border-[var(--prime-border)] pl-5">
              <div className="text-2xl font-light tracking-[0.08em] text-[var(--prime-muted)]">
                HRMS
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--prime-muted)]">
                Make HR Strategic
              </div>
            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--prime-border-strong)] bg-[var(--prime-card-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D97706] backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Complete Workforce Experience
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--prime-title)] sm:text-5xl lg:text-7xl">
            HR technology that helps
            <span className="mt-3 block text-[#F59E0B]">
              people perform better
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--prime-body)] sm:text-lg">
            Connect employee records, attendance, leave, payroll, recruitment,
            performance and employee self service in one modern Prime HRMS
            environment.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-7 py-3.5 font-semibold text-white shadow-[0_18px_50px_rgba(245,158,11,.28)] transition hover:-translate-y-1 hover:bg-[#D97706]"
            >
              Book HRMS Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--prime-border-strong)] bg-[var(--prime-card-soft)] px-7 py-3.5 font-semibold text-[var(--prime-title)] backdrop-blur-xl transition hover:-translate-y-1"
            >
              Explore Platform
            </a>
          </div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 44, rotateY: 8 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 0.15, duration: 0.9 }}
      className="relative"
    >
      <div className="prime-glass relative overflow-hidden rounded-[2.25rem] p-5">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=88"
          alt="HR leadership team"
          className="h-[560px] w-full rounded-[1.75rem] object-cover"
        />
        <div className="absolute inset-5 rounded-[1.75rem] bg-gradient-to-t from-[#111]/90 via-transparent to-transparent" />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="prime-glass absolute left-8 top-8 rounded-2xl p-4"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F59E0B] text-white">
              <Fingerprint className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-[var(--prime-muted)]">Attendance</p>
              <p className="font-semibold text-[var(--prime-title)]">94.8%</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="prime-glass absolute right-8 top-24 rounded-2xl p-4"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#F59E0B] text-white">
              <UserPlus className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-[var(--prime-muted)]">Open roles</p>
              <p className="font-semibold text-[var(--prime-title)]">18</p>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-8 right-8">
          <div className="prime-glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--prime-muted)]">
                  Workforce Today
                </p>
                <p className="mt-1 text-xl font-semibold text-[var(--prime-title)]">
                  392 employees active
                </p>
              </div>
              <BarChart3 className="h-6 w-6 text-[#F59E0B]" />
            </div>

            <div className="mt-5 flex h-20 items-end gap-2">
              {[58, 74, 62, 88, 76, 94, 84, 98].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.4 + index * 0.06, duration: 0.7 }}
                  className="flex-1 rounded-full bg-[#F59E0B]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureShowcase() {
  return (
    <section id="features" className="bg-[var(--prime-bg)] py-24">
      <div className="prime-container">
        <SectionIntro
          eyebrow="Prime HRMS Modules"
          title="A complete HR platform built around the way people work"
          description="Every module is designed to reduce manual HR effort while improving employee experience and management visibility."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {modules.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                whileHover={{ y: -8 }}
                className="prime-card group overflow-hidden rounded-[2rem]"
              >
                <div className="grid md:grid-cols-[1.05fr_.95fr]">
                  <div className="relative min-h-[320px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111]/82 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 grid h-12 w-12 place-items-center rounded-xl bg-[#F59E0B] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7">
                    <h3 className="text-2xl font-semibold text-[var(--prime-title)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[var(--prime-muted)]">
                      {item.text}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#D97706]">
                      Explore capability
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

function LifecycleSection() {
  return (
    <section className="prime-alt bg-[var(--prime-alt)] py-24">
      <div className="prime-container">
        <SectionIntro
          eyebrow="Employee Lifecycle"
          title="One connected journey from candidate to high performer"
          description="Recruitment, onboarding, attendance, payroll, performance and learning all stay connected to the same employee record."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent lg:block" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {lifecycle.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="prime-card relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-[1.75rem]"
                  >
                    <Icon className="h-7 w-7 text-[#F59E0B]" />
                  </motion.div>

                  <p className="mt-5 font-semibold text-[var(--prime-title)]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-[var(--prime-muted)]">
                    Step 0{index + 1}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RecruitmentPipeline() {
  return (
    <section className="bg-[var(--prime-bg)] py-24">
      <div className="prime-container grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionIntro
            eyebrow="Recruitment Pipeline"
            title="Move candidates from application to hiring with complete visibility"
            description="Manage open roles, shortlisted candidates, interviews and hiring decisions through a structured recruitment workflow."
            align="left"
          />

          <div className="mt-9 space-y-4">
            {[
              ["Applied", "124 candidates", "100%"],
              ["Shortlisted", "48 candidates", "68%"],
              ["Interviewed", "21 candidates", "42%"],
              ["Selected", "8 candidates", "18%"],
            ].map(([label, value, width], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="prime-card rounded-2xl p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[var(--prime-title)]">
                      {label}
                    </p>
                    <p className="mt-1 text-xs text-[var(--prime-muted)]">
                      {value}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-[#F59E0B]">
                    {width}
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#F59E0B]/12">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.08 }}
                    className="h-full rounded-full bg-[#F59E0B]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2rem]"
        >
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=88"
            alt="Recruitment interview"
            className="h-[620px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111]/90 via-transparent to-transparent" />

          <div className="prime-glass absolute bottom-7 left-7 right-7 rounded-2xl p-5">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#F59E0B] text-white">
                <UserPlus className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-[var(--prime-title)]">
                  Candidate journey
                </p>
                <p className="mt-1 text-sm text-[var(--prime-muted)]">
                  Application → Review → Interview → Offer → Onboard
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PayrollSection() {
  return (
    <section className="prime-alt bg-[var(--prime-alt)] py-24">
      <div className="prime-container grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="prime-glass rounded-[2rem] p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--prime-muted)]">
                Payroll Control
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--prime-title)]">
                Monthly payroll summary
              </h3>
            </div>
            <WalletCards className="h-6 w-6 text-[#F59E0B]" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Gross Payroll", "$184K"],
              ["Deductions", "$24K"],
              ["Net Payroll", "$160K"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-[var(--prime-border)] bg-[var(--prime-card)] p-5"
              >
                <p className="text-xs text-[var(--prime-muted)]">{label}</p>
                <p className="mt-3 text-2xl font-semibold text-[var(--prime-title)]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[var(--prime-border)] bg-[var(--prime-card)] p-5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[var(--prime-title)]">
                Payroll trend
              </span>
              <LineChart className="h-5 w-5 text-[#F59E0B]" />
            </div>

            <div className="mt-7 flex h-44 items-end gap-3">
              {[62, 66, 70, 74, 72, 80, 84, 88, 92].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.7 }}
                  className="flex-1 rounded-full bg-[#F59E0B]"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <SectionIntro
          eyebrow="Payroll Management"
          title="Run payroll with better accuracy and fewer manual steps"
          description="Connect attendance, leave, salary structures, allowances and deductions so payroll teams can process monthly salaries with greater confidence."
          align="left"
        />
      </div>
    </section>
  );
}

function MobileEssSection() {
  return (
    <section className="bg-[var(--prime-bg)] py-24">
      <div className="prime-container grid items-center gap-16 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <SectionIntro
            eyebrow="Employee Self Service"
            title="Give employees a modern HR experience from their phone"
            description="Employees can view attendance, request leave, access payslips and complete routine HR actions without waiting for HR support."
            align="left"
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              [CalendarDays, "Leave requests"],
              [WalletCards, "Digital payslips"],
              [Clock3, "Attendance records"],
              [Target, "Goals and reviews"],
            ].map(([Icon, label], index) => {
              const ItemIcon = Icon as LucideIcon;

              return (
                <motion.div
                  key={label as string}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="prime-card flex items-center gap-4 rounded-2xl p-5"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#F59E0B]/12 text-[#F59E0B]">
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-[var(--prime-title)]">
                    {label as string}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="prime-glass relative mx-auto max-w-[320px] rounded-[3rem] border-[10px] border-[#2F2F2F] p-4"
          >
            <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-[#2F2F2F]" />

            <div className="rounded-[2rem] bg-[var(--prime-card)] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[var(--prime-muted)]">
                    Good morning
                  </p>
                  <h3 className="font-semibold text-[var(--prime-title)]">
                    Sarah Malik
                  </h3>
                </div>

                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#F59E0B] text-white">
                  <UserCheck className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-[#F59E0B] p-4 text-white">
                <p className="text-xs uppercase tracking-[0.16em] text-white/70">
                  Attendance
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-semibold">09:02</div>
                    <div className="text-xs text-white/75">Checked in</div>
                  </div>
                  <ScanFace className="h-8 w-8" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  [CalendarDays, "Leave"],
                  [WalletCards, "Payslip"],
                  [Clock3, "Attendance"],
                  [Target, "Goals"],
                ].map(([Icon, label]) => {
                  const AppIcon = Icon as LucideIcon;

                  return (
                    <div
                      key={label as string}
                      className="rounded-2xl border border-[var(--prime-border)] p-3 text-center"
                    >
                      <AppIcon className="mx-auto h-5 w-5 text-[#F59E0B]" />
                      <p className="mt-2 text-xs text-[var(--prime-text)]">
                        {label as string}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="prime-card absolute -right-2 top-20 rounded-2xl p-4 sm:-right-10"
          >
            <Smartphone className="h-5 w-5 text-[#F59E0B]" />
            <p className="mt-2 text-xs font-semibold text-[var(--prime-title)]">
              Mobile ESS
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="prime-alt bg-[var(--prime-alt)] py-24">
      <div className="prime-container grid gap-14 lg:grid-cols-[.78fr_1.22fr]">
        <div>
          <SectionIntro
            eyebrow="Business Outcomes"
            title="A faster HR team and a stronger employee experience"
            description="Prime HRMS reduces repetitive administration while improving accuracy, visibility and workforce service."
            align="left"
          />

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#D97706]"
          >
            Discuss Your HR Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="prime-card flex items-start gap-4 rounded-2xl p-5"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F59E0B]/12 text-[#F59E0B]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="leading-7 text-[var(--prime-body)]">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[var(--prime-bg)] py-24">
      <div className="prime-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <SectionIntro
          eyebrow="Frequently Asked Questions"
          title="Clear answers before implementation"
          description="Understand modules, mobile access, biometric integration, migration and support."
          align="left"
        />

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
    <div className="prime-card overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[var(--prime-title)]">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#F59E0B] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 leading-7 text-[var(--prime-muted)]">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--prime-bg)] py-24">
      <div className="prime-container">
        <div className="grid overflow-hidden rounded-[2.5rem] lg:grid-cols-[1.05fr_.95fr]">
          <div
            className="relative p-8 text-white sm:p-12"
            style={{
              background: `linear-gradient(135deg, ${CHARCOAL}, ${GREY})`,
            }}
          >
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[90px]" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                Prime HRMS Consultation
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Build a professional HR experience for your entire workforce
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">
                We will review your employee data, attendance, leave, payroll
                and approval workflows before recommending a practical HRMS
                rollout.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#D97706]"
              >
                Start Your Prime HRMS Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1500&q=88"
              alt="Prime HRMS business team"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#2F2F2F]/55" />
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
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D97706] ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>

      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--prime-title)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-[var(--prime-muted)]">
        {description}
      </p>
    </motion.div>
  );
}