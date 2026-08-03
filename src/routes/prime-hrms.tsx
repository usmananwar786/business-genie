import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Database,
  FileBarChart,
  Fingerprint,
  GraduationCap,
  HeartPulse,
  IdCard,
  Landmark,
  LineChart,
  LockKeyhole,
  Mail,
  MapPin,
  Medal,
  Network,
  ScanFace,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Truck,
  UserCheck,
  UserCog,
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

const ORANGE = "#F6A01A";
const PURPLE = "#8B5CF6";
const BLUE = "#2563EB";
const GREEN = "#22C55E";

type ThemeMode = "light" | "dark";

type ModuleItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
  bullets: string[];
};

type SuiteTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  stats: Array<{ label: string; value: string; tone: string }>;
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

const heroBenefits = [
  { icon: TrendingUp, strong: "70%", text: "Higher employee productivity" },
  { icon: WalletCards, strong: "Accurate", text: "Payroll and attendance processing" },
  { icon: BarChart3, strong: "One", text: "Simple workforce dashboard" },
  { icon: ShieldCheck, strong: "24/7", text: "Secure cloud availability" },
];

const trustedCompanies = [
  "Horizon",
  "Nexa",
  "Vertex",
  "Crest",
  "Orbit",
  "Atlas",
  "Pioneer",
  "Summit",
  "Nova",
  "Apex",
  "Vantage",
  "Meridian",
];

const switchFeatures: Array<{
  icon: LucideIcon;
  title: string;
  text: string;
  tone: string;
}> = [
  {
    icon: CalendarDays,
    title: "Time & Attendance",
    text: "Shifts, overtime, lateness and absences in one live view.",
    tone: "#B7E4F8",
  },
  {
    icon: UserCog,
    title: "Employee Management",
    text: "Profiles, documents, contracts and department structure.",
    tone: "#D8CCFF",
  },
  {
    icon: Smartphone,
    title: "Employee Self Service",
    text: "Mobile access to requests, payslips and personal records.",
    tone: "#C8F4F2",
  },
  {
    icon: Workflow,
    title: "Leave Management",
    text: "Clear balances, approvals, policies and team calendars.",
    tone: "#FFE0C6",
  },
  {
    icon: WalletCards,
    title: "Payroll Management",
    text: "Salary structures, allowances, deductions and reporting.",
    tone: "#FFD3DF",
  },
  {
    icon: UserPlus,
    title: "Recruitment",
    text: "Vacancies, candidates, interviews and hiring pipelines.",
    tone: "#D8F6D4",
  },
  {
    icon: Medal,
    title: "Performance",
    text: "Goals, reviews, competency tracking and development plans.",
    tone: "#FFEBAA",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    text: "Training plans, completion, skills and employee growth.",
    tone: "#CFE0FF",
  },
  {
    icon: FileBarChart,
    title: "Workforce Reports",
    text: "Live HR, payroll, attendance and management insights.",
    tone: "#E5D6FF",
  },
  {
    icon: LockKeyhole,
    title: "Secure Access",
    text: "Role-based permissions, approvals and controlled records.",
    tone: "#D6EEF8",
  },
];

const setupSteps = [
  {
    number: "1",
    icon: BriefcaseBusiness,
    title: "Set Up Your HRMS",
    text: "Define your structure, roles, policies and workflows.",
    color: "#A855F7",
  },
  {
    number: "2",
    icon: UserPlus,
    title: "Add Your Team",
    text: "Import employees or invite them to self-onboard.",
    color: "#F7B733",
  },
  {
    number: "3",
    icon: Zap,
    title: "Start Working",
    text: "Launch attendance, leave, payroll and employee services.",
    color: "#22C55E",
  },
];

const modules: ModuleItem[] = [
  {
    icon: Users,
    title: "Employee Management",
    text: "Centralize employee profiles, departments, documents, contracts and workforce history.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=88",
    bullets: ["Employee directory", "Document tracking", "Organization structure"],
  },
  {
    icon: Fingerprint,
    title: "Attendance & Biometric",
    text: "Track shifts, overtime, late arrivals, absences and connected attendance devices.",
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1400&q=88",
    bullets: ["Shift planning", "Biometric integration", "Overtime rules"],
  },
  {
    icon: WalletCards,
    title: "Payroll Management",
    text: "Process salary, allowances, deductions, benefits and payroll reports with greater accuracy.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=88",
    bullets: ["Salary structures", "Allowances and deductions", "Payroll reporting"],
  },
  {
    icon: UserPlus,
    title: "Recruitment",
    text: "Manage vacancies, candidates, interviews, hiring stages and applicant reporting.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=88",
    bullets: ["Job requisitions", "Candidate pipeline", "Interview management"],
  },
  {
    icon: Medal,
    title: "Performance",
    text: "Set goals, run reviews, track evaluations and support employee development.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=88",
    bullets: ["Goal setting", "Review cycles", "Competency scoring"],
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    text: "Plan training, monitor completion and support employee growth across teams.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=88",
    bullets: ["Training plans", "Skills tracking", "Completion reports"],
  },
];

const suiteTabs: SuiteTab[] = [
  {
    id: "dashboard",
    label: "HR Dashboard",
    title: "One live view of your entire workforce",
    description: "Monitor headcount, attendance, leave, payroll and employee activity from one executive workspace.",
    stats: [
      { label: "Active employees", value: "392", tone: GREEN },
      { label: "Attendance", value: "94.8%", tone: PURPLE },
      { label: "Open roles", value: "18", tone: ORANGE },
      { label: "Pending requests", value: "26", tone: BLUE },
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    title: "Accurate time, shift and biometric control",
    description: "Understand check-ins, absences, overtime and shift compliance without manual consolidation.",
    stats: [
      { label: "Present today", value: "368", tone: GREEN },
      { label: "Late arrivals", value: "12", tone: ORANGE },
      { label: "On leave", value: "9", tone: PURPLE },
      { label: "Overtime", value: "84h", tone: BLUE },
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    title: "Confident payroll from attendance to payslip",
    description: "Connect salary structures, attendance, benefits and deductions through a controlled monthly process.",
    stats: [
      { label: "Gross payroll", value: "$184K", tone: BLUE },
      { label: "Deductions", value: "$24K", tone: ORANGE },
      { label: "Net payroll", value: "$160K", tone: GREEN },
      { label: "Employees", value: "392", tone: PURPLE },
    ],
  },
  {
    id: "employees",
    label: "Employee Mgmt",
    title: "Every employee record in one organized system",
    description: "Give HR and managers reliable access to profiles, documents, history, departments and reporting lines.",
    stats: [
      { label: "Departments", value: "14", tone: PURPLE },
      { label: "Documents", value: "1.8K", tone: BLUE },
      { label: "Contracts due", value: "11", tone: ORANGE },
      { label: "Profiles complete", value: "97%", tone: GREEN },
    ],
  },
  {
    id: "leave",
    label: "Leave Mgmt",
    title: "Simple leave policies and faster approvals",
    description: "Keep balances, requests, calendars and policy rules synchronized for employees and managers.",
    stats: [
      { label: "Pending", value: "17", tone: ORANGE },
      { label: "Approved", value: "46", tone: GREEN },
      { label: "Casual leave", value: "68%", tone: BLUE },
      { label: "Annual leave", value: "54%", tone: PURPLE },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    title: "Clear workforce analytics for better decisions",
    description: "Explore live headcount, payroll, attendance, turnover and workforce distribution reports.",
    stats: [
      { label: "Turnover", value: "6.8%", tone: ORANGE },
      { label: "Women", value: "38%", tone: PURPLE },
      { label: "Avg tenure", value: "3.7y", tone: BLUE },
      { label: "New joiners", value: "24", tone: GREEN },
    ],
  },
  {
    id: "other",
    label: "Other Modules",
    title: "A modular HR platform that grows with you",
    description: "Add recruitment, learning, performance, expenses, assets and employee services as your requirements expand.",
    stats: [
      { label: "Recruitment", value: "Live", tone: BLUE },
      { label: "Performance", value: "Ready", tone: PURPLE },
      { label: "Learning", value: "Active", tone: GREEN },
      { label: "Expenses", value: "Connected", tone: ORANGE },
    ],
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

const testimonials = [
  {
    company: "Horizon Manufacturing",
    quote: "Prime HRMS gave our managers one reliable view of attendance, employee records and approvals across multiple locations.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=88",
  },
  {
    company: "Nexa Distribution",
    quote: "Payroll preparation is faster, reporting is clearer and employees now complete routine HR requests without paperwork.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=88",
  },
  {
    company: "Crest Services Group",
    quote: "The platform helped us standardize recruitment, onboarding and performance processes while improving employee service.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=88",
  },
];

const industryItems = [
  { icon: Building2, label: "Manufacturing" },
  { icon: Network, label: "Telecom" },
  { icon: HeartPulse, label: "Pharmaceuticals" },
  { icon: Truck, label: "Retail & Distribution" },
  { icon: Landmark, label: "Real Estate" },
  { icon: GraduationCap, label: "Education" },
  { icon: Landmark, label: "Banking & Finance" },
  { icon: Stethoscope, label: "Healthcare" },
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

        <main className="prime-page min-h-screen overflow-hidden bg-[var(--prime-bg)] text-[var(--prime-text)] selection:bg-[#F6A01A] selection:text-[#161616]">
          <HeroSection />
          <TrustedCompaniesSection />
          <SwitchingReasonsSection />
          <QuickSwitchSection />
          <CompleteSuiteSection />
          <FeatureShowcase />
          <LifecycleSection />
          <RecruitmentPipeline />
          <PayrollSection />
          <MobileEssSection />
          <ResultsStoriesSection />
          <IndustryFitSection />
          <IntegrationsSecuritySection />
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
        background: #fbf8fc;
      }

      .prime-theme-wrap[data-prime-theme="dark"] {
        color-scheme: dark;
        background: #07070a;
      }

      .prime-theme-wrap[data-prime-theme="light"] .prime-page {
        --prime-bg: #fbf8fc;
        --prime-alt: #f7eef8;
        --prime-card: rgba(255,255,255,.96);
        --prime-card-soft: rgba(255,255,255,.84);
        --prime-title: #17151a;
        --prime-text: #36323b;
        --prime-body: #57515e;
        --prime-muted: #77707d;
        --prime-border: rgba(65,52,73,.12);
        --prime-border-strong: rgba(246,160,26,.34);
        --prime-overlay: rgba(253,249,253,.93);
        --prime-shadow: 0 20px 60px rgba(72,46,80,.10);
        --prime-pink-glow: rgba(246,199,255,.52);
        --prime-lilac-glow: rgba(215,205,255,.52);
        background: #fbf8fc !important;
        color: #36323b !important;
      }

      .prime-theme-wrap[data-prime-theme="dark"] .prime-page {
        --prime-bg: #07070a;
        --prime-alt: #101016;
        --prime-card: rgba(20,19,25,.96);
        --prime-card-soft: rgba(15,14,20,.90);
        --prime-title: #ffffff;
        --prime-text: #eeeeF2;
        --prime-body: #d0cad5;
        --prime-muted: rgba(209,202,215,.70);
        --prime-border: rgba(255,255,255,.11);
        --prime-border-strong: rgba(246,160,26,.38);
        --prime-overlay: rgba(7,7,10,.91);
        --prime-shadow: 0 26px 80px rgba(0,0,0,.52);
        --prime-pink-glow: rgba(123,56,145,.24);
        --prime-lilac-glow: rgba(78,64,145,.24);
        background: #07070a !important;
        color: #eeeeF2 !important;
      }

      .prime-container {
        width: min(1220px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .prime-heading {
        font-family: Georgia, "Times New Roman", serif;
      }

      .prime-soft-bg {
        background:
          radial-gradient(circle at 15% 20%, var(--prime-pink-glow), transparent 34%),
          radial-gradient(circle at 84% 70%, var(--prime-lilac-glow), transparent 34%),
          var(--prime-bg);
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
        background: #f7eef8 !important;
      }

      .prime-theme-wrap[data-prime-theme="dark"] .prime-alt {
        background: #101016 !important;
      }

      .prime-theme-wrap[data-prime-theme="light"] img {
        filter: brightness(.98) saturate(.94);
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

      .prime-tab-scroll::-webkit-scrollbar {
        height: 5px;
      }

      .prime-tab-scroll::-webkit-scrollbar-thumb {
        background: rgba(246,160,26,.42);
        border-radius: 999px;
      }
    `}</style>
  );
}

function HeroSection() {
  return (
    <section className="prime-soft-bg relative isolate overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:h-[500px] lg:min-h-[500px] lg:max-h-[500px] lg:px-8 lg:py-6">
      <motion.div
        animate={{ x: [0, 24, 0], y: [0, -18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-28 top-10 -z-10 h-[22rem] w-[22rem] rounded-full bg-[#E9B8F7]/30 blur-[125px]"
      />

      <motion.div
        animate={{ x: [0, -18, 0], y: [0, 20, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-0 -z-10 h-[21rem] w-[21rem] rounded-full bg-[#D8CFFC]/35 blur-[120px]"
      />

      <div className="prime-container grid items-center gap-8 lg:h-full lg:grid-cols-[.92fr_1.08fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold text-[var(--prime-title)] sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F6A01A] shadow-[0_0_18px_rgba(246,160,26,.7)]" />
            Complete HRMS for modern organizations
          </div>

          <h1 className="prime-heading max-w-3xl text-[38px] font-bold leading-[1.03] tracking-[-0.045em] text-[var(--prime-title)] sm:text-5xl lg:text-[54px]">
            Automate HR with a smarter, faster HRMS
          </h1>

          <div className="mt-5 space-y-2.5">
            {heroBenefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="flex items-start gap-3 text-sm text-[var(--prime-body)] sm:text-base"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--prime-title)]" />
                  <span>
                    <strong className="font-bold text-[var(--prime-title)]">{item.strong}</strong>{" "}
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#F6D76B] px-5 py-2.5 text-sm font-semibold text-[#17151A] shadow-[0_14px_34px_rgba(246,160,26,.20)] transition hover:-translate-y-1 hover:bg-[#F9E28E]"
            >
              Schedule Free Demo
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#suite"
              className="inline-flex items-center gap-2 rounded-md bg-[#151515] px-5 py-2.5 text-sm font-semibold !text-white transition hover:-translate-y-1 hover:bg-black"
            >
              Explore HR Suite
            </a>
          </div>
        </motion.div>

        <HeroDashboard />
      </div>
    </section>
  );
}

function HeroDashboard() {
  const bars = [48, 72, 55, 84, 64, 94, 78, 88];

  return (
    <motion.div
      initial={{ opacity: 0, x: 44, scale: 0.94 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.12, duration: 0.9 }}
      className="relative min-h-[390px] lg:min-h-[410px]"
    >
      <motion.div
        animate={{ rotate: [-2, 0, -2], y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="prime-card absolute left-2 top-16 w-[68%] rounded-2xl p-4 sm:left-5"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.17em] text-[var(--prime-muted)]">Attendance Insights</p>
            <p className="mt-1 font-semibold text-[var(--prime-title)]">Workforce attendance</p>
          </div>
          <Fingerprint className="h-5 w-5 text-[#8B5CF6]" />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-[.8fr_1.2fr]">
          <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#8B5CF6_0_70%,#F6A01A_70%_78%,rgba(139,92,246,.14)_78%_100%)]">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-[var(--prime-card)] text-center">
              <div>
                <div className="text-2xl font-bold text-[var(--prime-title)]">94.8%</div>
                <div className="text-[10px] text-[var(--prime-muted)]">Attendance</div>
              </div>
            </div>
          </div>
          <div className="flex h-28 items-end gap-2">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.35 + index * 0.05, duration: 0.75 }}
                className="flex-1 rounded-t-md"
                style={{ background: index % 3 === 0 ? ORANGE : BLUE }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: [2, 0, 2], y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="prime-card absolute right-0 top-4 w-[43%] rounded-2xl p-3"
      >
        <div className="text-xs uppercase tracking-[0.16em] text-[var(--prime-muted)]">Today</div>
        <div className="mt-3 space-y-2">
          {["Active employees", "New joiners", "Open positions"].map((label, index) => (
            <div key={label} className="flex items-center justify-between rounded-xl bg-[var(--prime-alt)] px-3 py-2">
              <span className="text-xs text-[var(--prime-body)]">{label}</span>
              <strong className="text-sm text-[var(--prime-title)]">{[392, 12, 18][index]}</strong>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="prime-card absolute bottom-8 left-8 w-[48%] rounded-2xl p-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[var(--prime-muted)]">Scheduled off</p>
            <p className="mt-1 text-lg font-semibold text-[var(--prime-title)]">Team availability</p>
          </div>
          <CalendarDays className="h-5 w-5 text-[#F6A01A]" />
        </div>
        <div className="mt-3 space-y-1.5">
          {["Ahmed Ali", "Sara Khan", "Bilal Raza"].map((name, index) => (
            <div key={name} className="flex items-center justify-between text-xs">
              <span className="text-[var(--prime-body)]">{name}</span>
              <span className={`rounded-full px-2 py-1 ${index === 1 ? "bg-[#8B5CF6]/12 text-[#8B5CF6]" : "bg-[#22C55E]/12 text-[#22C55E]"}`}>
                {index === 1 ? "Leave" : "Available"}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="prime-card absolute bottom-2 right-3 w-[36%] rounded-2xl p-3"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[#2563EB] text-white">
            <UserCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-[var(--prime-title)]">Aamir Junaid</p>
            <p className="text-xs text-[var(--prime-muted)]">Product Manager</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TrustedCompaniesSection() {
  return (
    <section className="bg-[var(--prime-bg)] py-16">
      <div className="prime-container">
        <SectionIntro
          eyebrow="Trusted Workforce Platform"
          title="Built for growing teams and established organizations"
          description="A flexible HRMS foundation for businesses that need clear people data, simple workflows and reliable reporting."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {trustedCompanies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="prime-card grid min-h-20 place-items-center rounded-2xl px-4 text-center"
            >
              <span className="text-sm font-bold tracking-[0.08em] text-[var(--prime-muted)]">{company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SwitchingReasonsSection() {
  return (
    <section className="prime-soft-bg py-24">
      <div className="prime-container">
        <SectionIntro
          eyebrow="Why Prime HRMS"
          title="Why companies are switching to Prime HRMS"
          description="A simpler, faster and more reliable HR system built for teams that need clarity and control."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {switchFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ delay: index * 0.045, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="prime-card group min-h-[250px] rounded-2xl p-6 text-center"
              >
                <div
                  className="mx-auto grid h-14 w-14 place-items-center rounded-2xl"
                  style={{ backgroundColor: `${item.tone}55`, color: item.tone }}
                >
                  <Icon className="h-7 w-7" style={{ color: item.tone }} />
                </div>
                <h3 className="prime-heading mt-8 text-xl font-bold leading-tight text-[var(--prime-title)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[var(--prime-muted)]">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuickSwitchSection() {
  return (
    <section className="prime-soft-bg py-24">
      <div className="prime-container grid items-center gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97808]">Fast implementation</div>
          <h2 className="prime-heading mt-5 text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[var(--prime-title)] sm:text-5xl lg:text-6xl">
            Make the switch in just a few clicks
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[var(--prime-body)] sm:text-lg">
            No complicated setup. No disconnected tools. Just structured HR workflows from day one.
          </p>
          <p className="mt-5 font-semibold italic text-[var(--prime-title)]">A focused rollout can be planned in practical phases.</p>
        </motion.div>

        <div className="relative space-y-5 lg:py-8">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-[46%] -translate-x-1/2 rounded-[2rem] bg-[var(--prime-card-soft)] lg:block" />
          {setupSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? 32 : -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                whileHover={{ x: index % 2 === 0 ? -6 : 6 }}
                className={`prime-card relative z-10 grid items-center gap-5 rounded-3xl p-6 sm:grid-cols-[auto_1fr_auto] ${index === 1 ? "lg:ml-24" : "lg:mr-24"}`}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl" style={{ backgroundColor: `${step.color}18`, color: step.color }}>
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="prime-heading text-2xl font-bold text-[var(--prime-title)]">{step.title}</h3>
                  <p className="mt-2 leading-7 text-[var(--prime-muted)]">{step.text}</p>
                </div>
                <div className="text-7xl font-bold leading-none opacity-90" style={{ color: step.color }}>
                  {step.number}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CompleteSuiteSection() {
  const [activeTab, setActiveTab] = useState(suiteTabs[0].id);
  const active = suiteTabs.find((tab) => tab.id === activeTab) ?? suiteTabs[0];

  const shiftTab = (direction: number) => {
    const currentIndex = suiteTabs.findIndex((tab) => tab.id === active.id);
    const nextIndex = (currentIndex + direction + suiteTabs.length) % suiteTabs.length;
    setActiveTab(suiteTabs[nextIndex].id);
  };

  return (
    <section id="suite" className="prime-soft-bg py-24">
      <div className="prime-container">
        <SectionIntro
          eyebrow="Complete HR Suite"
          title="Your complete HR suite — all in one place"
          description="Modular, scalable and designed for growing teams that need one connected employee experience."
        />

        <div className="prime-card prime-tab-scroll mt-12 flex gap-2 overflow-x-auto rounded-full p-2">
          {suiteTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition sm:px-7 ${
                activeTab === tab.id
                  ? "bg-[#171717] text-white shadow-lg"
                  : "text-[var(--prime-muted)] hover:bg-[var(--prime-alt)] hover:text-[var(--prime-title)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={() => shiftTab(-1)}
            aria-label="Previous HR suite tab"
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#111] text-white shadow-xl transition hover:scale-105 lg:grid"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => shiftTab(1)}
            aria-label="Next HR suite tab"
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#111] text-white shadow-xl transition hover:scale-105 lg:grid"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.985 }}
              transition={{ duration: 0.38 }}
              className="grid gap-8 lg:grid-cols-[.72fr_1.28fr]"
            >
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97808]">{active.label}</p>
                <h3 className="prime-heading mt-4 text-3xl font-bold leading-tight text-[var(--prime-title)] sm:text-4xl">
                  {active.title}
                </h3>
                <p className="mt-5 leading-8 text-[var(--prime-muted)]">{active.description}</p>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {active.stats.map((stat) => (
                    <div key={stat.label} className="prime-card rounded-2xl p-4">
                      <div className="text-2xl font-bold text-[var(--prime-title)]">{stat.value}</div>
                      <div className="mt-1 text-xs text-[var(--prime-muted)]">{stat.label}</div>
                      <div className="mt-3 h-1.5 rounded-full" style={{ backgroundColor: `${stat.tone}22` }}>
                        <div className="h-full w-3/4 rounded-full" style={{ backgroundColor: stat.tone }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <SuiteDashboard tab={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SuiteDashboard({ tab }: { tab: SuiteTab }) {
  return (
    <div className="relative min-h-[520px]">
      <motion.div
        animate={{ rotate: [-1.4, 0, -1.4], y: [0, -7, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="prime-card absolute left-0 top-12 w-[66%] rounded-2xl p-5"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--prime-muted)]">{tab.label}</p>
            <p className="mt-1 font-semibold text-[var(--prime-title)]">Executive overview</p>
          </div>
          <BarChart3 className="h-5 w-5 text-[#8B5CF6]" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {tab.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-[var(--prime-alt)] p-4">
              <div className="text-xl font-bold text-[var(--prime-title)]">{stat.value}</div>
              <div className="mt-1 text-[11px] text-[var(--prime-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: [1.5, 0, 1.5], y: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="prime-card absolute right-0 top-0 w-[43%] rounded-2xl p-5"
      >
        <div className="text-xs uppercase tracking-[0.16em] text-[var(--prime-muted)]">Analytics</div>
        <div className="mt-5 flex h-40 items-end gap-2">
          {[42, 68, 54, 86, 73, 91].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="flex-1 rounded-t-md"
              style={{ backgroundColor: tab.stats[index % tab.stats.length].tone }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="prime-card absolute bottom-8 left-[18%] w-[54%] rounded-2xl p-5"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-[var(--prime-title)]">Employee activity</p>
            <p className="mt-1 text-xs text-[var(--prime-muted)]">Live changes and approvals</p>
          </div>
          <Workflow className="h-5 w-5 text-[#F6A01A]" />
        </div>
        <div className="mt-5 space-y-3">
          {["Leave request approved", "New employee onboarded", "Payroll review completed"].map((item, index) => (
            <div key={item} className="flex items-center gap-3 text-xs text-[var(--prime-body)]">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tab.stats[index].tone }} />
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function FeatureShowcase() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="features" className="bg-[var(--prime-bg)] py-24">
      <div className="prime-container">
        <SectionIntro
          eyebrow="Prime HRMS Modules"
          title="A complete HR platform built around the way people work"
          description="Every module reduces manual HR effort while improving employee experience and management visibility."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {modules.map((item, index) => {
            const Icon = item.icon;
            const open = expanded === item.title;

            return (
              <motion.article
                key={item.title}
                layout
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.55 }}
                whileHover={{ y: open ? 0 : -7 }}
                className="prime-card group overflow-hidden rounded-[2rem]"
              >
                <div className="grid md:grid-cols-[1.05fr_.95fr]">
                  <div className="relative min-h-[300px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111]/82 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 grid h-12 w-12 place-items-center rounded-xl bg-[#F6A01A] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7">
                    <h3 className="prime-heading text-2xl font-bold text-[var(--prime-title)]">{item.title}</h3>
                    <p className="mt-4 leading-7 text-[var(--prime-muted)]">{item.text}</p>

                    <button
                      type="button"
                      onClick={() => setExpanded(open ? null : item.title)}
                      className="mt-7 inline-flex items-center gap-2 text-left text-sm font-semibold text-[#D97808]"
                      aria-expanded={open}
                    >
                      {open ? "Hide details" : "View details"}
                      <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32 }}
                      className="overflow-hidden border-t border-[var(--prime-border)]"
                    >
                      <div className="grid gap-3 p-6 sm:grid-cols-3">
                        {item.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-center gap-3 rounded-2xl bg-[var(--prime-alt)] p-4 text-sm text-[var(--prime-body)]">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F6A01A]" />
                            {bullet}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          description="Recruitment, onboarding, attendance, payroll, performance and learning stay connected to the same employee record."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-[#F6A01A] to-transparent lg:block" />
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
                    <Icon className="h-7 w-7 text-[#F6A01A]" />
                  </motion.div>
                  <p className="mt-5 font-semibold text-[var(--prime-title)]">{item.title}</p>
                  <p className="mt-1 text-xs text-[var(--prime-muted)]">Step 0{index + 1}</p>
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
                    <p className="font-semibold text-[var(--prime-title)]">{label}</p>
                    <p className="mt-1 text-xs text-[var(--prime-muted)]">{value}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#F6A01A]">{width}</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#F6A01A]/12">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.08 }}
                    className="h-full rounded-full bg-[#F6A01A]"
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
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#F6A01A] text-white">
                <UserPlus className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-[var(--prime-title)]">Candidate journey</p>
                <p className="mt-1 text-sm text-[var(--prime-muted)]">Application → Review → Interview → Offer → Onboard</p>
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
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--prime-muted)]">Payroll Control</p>
              <h3 className="mt-2 text-2xl font-semibold text-[var(--prime-title)]">Monthly payroll summary</h3>
            </div>
            <WalletCards className="h-6 w-6 text-[#F6A01A]" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Gross Payroll", "$184K"],
              ["Deductions", "$24K"],
              ["Net Payroll", "$160K"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-[var(--prime-border)] bg-[var(--prime-card)] p-5">
                <p className="text-xs text-[var(--prime-muted)]">{label}</p>
                <p className="mt-3 text-2xl font-semibold text-[var(--prime-title)]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[var(--prime-border)] bg-[var(--prime-card)] p-5">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[var(--prime-title)]">Payroll trend</span>
              <LineChart className="h-5 w-5 text-[#F6A01A]" />
            </div>
            <div className="mt-7 flex h-44 items-end gap-3">
              {[62, 66, 70, 74, 72, 80, 84, 88, 92].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.7 }}
                  className="flex-1 rounded-full bg-[#F6A01A]"
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
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#F6A01A]/12 text-[#F6A01A]">
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-[var(--prime-title)]">{label as string}</p>
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
                  <p className="text-xs text-[var(--prime-muted)]">Good morning</p>
                  <h3 className="font-semibold text-[var(--prime-title)]">Sarah Malik</h3>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#F6A01A] text-white">
                  <UserCheck className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-[#F6A01A] p-4 text-white">
                <p className="text-xs uppercase tracking-[0.16em] text-white/70">Attendance</p>
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
                    <div key={label as string} className="rounded-2xl border border-[var(--prime-border)] p-3 text-center">
                      <AppIcon className="mx-auto h-5 w-5 text-[#F6A01A]" />
                      <p className="mt-2 text-xs text-[var(--prime-text)]">{label as string}</p>
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
            <Smartphone className="h-5 w-5 text-[#F6A01A]" />
            <p className="mt-2 text-xs font-semibold text-[var(--prime-title)]">Mobile ESS</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ResultsStoriesSection() {
  const [active, setActive] = useState(0);
  const visible = testimonials.map((_, index) => testimonials[(index + active) % testimonials.length]);

  return (
    <section className="prime-soft-bg py-24">
      <div className="prime-container">
        <SectionIntro
          eyebrow="Customer Results"
          title="Real results. Real savings. Real stories."
          description="From growing teams to multi-location organizations, Prime HRMS creates clarity, automation and reliable people operations."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {visible.map((story, index) => (
            <motion.article
              key={`${story.company}-${active}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="prime-card overflow-hidden rounded-3xl p-5"
            >
              <img src={story.image} alt={story.company} className="h-56 w-full rounded-2xl object-cover" />
              <div className="mt-5 text-[#F6A01A]">★★★★★</div>
              <p className="mt-4 leading-7 text-[var(--prime-body)]">“{story.quote}”</p>
              <p className="mt-5 font-semibold text-[var(--prime-title)]">{story.company}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => setActive((value) => (value - 1 + testimonials.length) % testimonials.length)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--prime-border)] bg-[var(--prime-card)] text-[var(--prime-title)]"
            aria-label="Previous customer story"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setActive((value) => (value + 1) % testimonials.length)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--prime-border)] bg-[var(--prime-card)] text-[var(--prime-title)]"
            aria-label="Next customer story"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function IndustryFitSection() {
  return (
    <section className="prime-soft-bg py-24">
      <div className="prime-container grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="relative min-h-[560px]"
        >
          <motion.div
            animate={{ rotate: [-2, 0, -2], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="prime-card absolute left-0 top-8 w-[82%] rounded-2xl p-5"
          >
            <div className="grid grid-cols-[72px_1fr] gap-4">
              <div className="rounded-xl bg-[#2146A8] p-3 text-white">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15"><UserCheck className="h-5 w-5" /></div>
                <div className="mt-6 space-y-3">
                  {[Users, CalendarDays, BarChart3, WalletCards].map((Icon, index) => (
                    <Icon key={index} className="h-4 w-4 opacity-75" />
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[var(--prime-muted)]">Employee overview</p>
                    <p className="font-semibold text-[var(--prime-title)]">Aamir Junaid</p>
                  </div>
                  <span className="rounded-full bg-[#22C55E]/12 px-3 py-1 text-xs text-[#22C55E]">Active</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {["Attendance", "Leaves", "Goals", "Team"].map((item, index) => (
                    <div key={item} className="rounded-xl bg-[var(--prime-alt)] p-3">
                      <div className="text-xl font-bold text-[var(--prime-title)]">{[94, 8, 12, 16][index]}</div>
                      <div className="text-[10px] text-[var(--prime-muted)]">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="prime-card absolute bottom-6 right-0 w-[58%] rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[var(--prime-title)]">Attendance trend</p>
              <BarChart3 className="h-5 w-5 text-[#22C55E]" />
            </div>
            <div className="mt-5 flex h-40 items-end gap-2">
              {[46, 66, 58, 78, 72, 90, 86].map((height, index) => (
                <div key={index} className="flex-1 rounded-t-md bg-[#22C55E]" style={{ height: `${height}%` }} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97808]">Industry ready</p>
          <h2 className="prime-heading mt-4 text-4xl font-bold leading-tight tracking-[-0.035em] text-[var(--prime-title)] sm:text-5xl">
            Prime HRMS is for factories, offices, hospitals and beyond
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--prime-body)] sm:text-lg">
            Build efficient HR operations regardless of your size, structure, workforce model or compliance requirements.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {industryItems.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.label}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -12 : 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.045 }}
                  className="flex items-center gap-3 text-[var(--prime-title)]"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#25252B] text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{industry.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationsSecuritySection() {
  const integrations: Array<{ icon: LucideIcon; label: string; color: string }> = [
    { icon: Fingerprint, label: "Biometric", color: PURPLE },
    { icon: MapPin, label: "Location", color: GREEN },
    { icon: Mail, label: "Email", color: "#EA4335" },
    { icon: Smartphone, label: "Mobile", color: BLUE },
    { icon: Database, label: "Payroll Data", color: ORANGE },
    { icon: Workflow, label: "Workflow API", color: "#06B6D4" },
  ];

  return (
    <section className="prime-soft-bg py-24">
      <div className="prime-container">
        <SectionIntro
          eyebrow="Connected Ecosystem"
          title="Integrations that support everyday HR operations"
          description="Connect attendance devices, email, mobile access, location services and business data through a controlled HR environment."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="prime-card flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ backgroundColor: `${item.color}18`, color: item.color }}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-semibold text-[var(--prime-title)]">{item.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <h3 className="prime-heading text-4xl font-bold text-[var(--prime-title)]">Trusted security protocols</h3>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[var(--prime-muted)]">
            Role-based access, audit-ready activity, secure cloud practices and controlled employee information.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {["ISO-aligned", "Secure access", "Privacy controls", "Audit history", "Data protection"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="prime-card rounded-2xl p-5"
              >
                <ShieldCheck className="mx-auto h-7 w-7 text-[#F6A01A]" />
                <p className="mt-3 text-sm font-semibold text-[var(--prime-title)]">{item}</p>
              </motion.div>
            ))}
          </div>
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
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F6A01A] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#D97808]"
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
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F6A01A]/12 text-[#F6A01A]">
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
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
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
        <span className="font-semibold text-[var(--prime-title)]">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-[#F6A01A] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 leading-7 text-[var(--prime-muted)]">{answer}</p>
      </motion.div>
    </div>
  );
}

function CtaSection() {
  return (
    <section className="prime-soft-bg relative isolate overflow-hidden py-24">
      <div className="prime-container">
        <div className="prime-card grid overflow-hidden rounded-[2.5rem] lg:grid-cols-[1.08fr_.92fr]">
          <div className="p-8 sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D97808]">Prime HRMS Consultation</p>
            <h2 className="prime-heading mt-5 text-4xl font-bold leading-tight tracking-[-0.035em] text-[var(--prime-title)] sm:text-5xl">
              Ready to transform your HR?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--prime-body)]">
              Book a personalized consultation and see how Prime HRMS can streamline employee operations across your organization.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#F6D76B] px-7 py-3.5 font-semibold text-[#17151A] transition hover:-translate-y-1 hover:bg-[#F9E28E]"
              >
                Schedule Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#111] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-black"
              >
                Request Consultation
              </Link>
            </div>
          </div>

          <div className="relative min-h-[390px] overflow-hidden p-7">
            <motion.div
              animate={{ rotate: [-2, 0, -2], y: [0, -8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="prime-card absolute inset-8 rounded-2xl p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--prime-muted)]">Workforce dashboard</p>
                  <p className="mt-1 font-semibold text-[var(--prime-title)]">HR performance today</p>
                </div>
                <BarChart3 className="h-5 w-5 text-[#8B5CF6]" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {["Employees", "Attendance", "Leave", "Payroll"].map((label, index) => (
                  <div key={label} className="rounded-xl bg-[var(--prime-alt)] p-4">
                    <div className="text-xl font-bold text-[var(--prime-title)]">{[392, "94.8%", 17, "$160K"][index]}</div>
                    <div className="mt-1 text-[10px] text-[var(--prime-muted)]">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex h-24 items-end gap-2">
                {[48, 64, 58, 82, 70, 92, 84].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-md" style={{ height: `${height}%`, backgroundColor: index % 2 ? PURPLE : ORANGE }} />
                ))}
              </div>
            </motion.div>
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
      className={`max-w-4xl ${alignment}`}
    >
      <div
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D97808] ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {/* <Sparkles className="h-4 w-4" /> */}
        {eyebrow}
      </div>

      <h2 className="prime-heading mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] text-[var(--prime-title)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-[var(--prime-muted)]">{description}</p>
    </motion.div>
  );
}
