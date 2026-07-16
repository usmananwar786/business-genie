import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileBarChart,
  Fingerprint,
  Globe2,
  GraduationCap,
  IdCard,
  Plane,
  ScanFace,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  UserCheck,
  UserPlus,
  Users,
  WalletCards,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/webhr")({
  head: () => ({
    meta: [
      {
        title: "WebHR Consulting & Implementation | Business Genie Consulting",
      },
      {
        name: "description",
        content:
          "Professional WebHR implementation for recruitment, onboarding, employee records, attendance, leave, payroll, performance, employee self service, learning and workforce analytics.",
      },
      {
        property: "og:title",
        content: "WebHR Consulting & Implementation | Business Genie Consulting",
      },
      {
        property: "og:description",
        content:
          "Build a connected social HR environment for your complete employee journey with WebHR.",
      },
    ],
  }),
  component: WebHr,
});

const PURPLE_BRIGHT = "#9B39F0";
const CYAN = "#37C6F4";

type ThemeMode = "light" | "dark";
type IconText = { icon: LucideIcon; title: string; text: string };

const storageKeys = [
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

const companyNames = [
  "NorthStar",
  "Jiffy Lube",
  "Bose",
  "Payactiv",
  "Zenith",
  "Volvo",
];

const recognitions = [
  { title: "GetApp", value: "4.7", note: "Category Leader" },
  { title: "Software Advice", value: "4.6", note: "Front Runner" },
  { title: "Capterra", value: "4.7", note: "Top Rated" },
  { title: "Trustpilot", value: "4.5", note: "Excellent" },
];

const integrationApps = [
  { label: "LinkedIn", short: "in", bg: "#0A66C2" },
  { label: "QuickBooks", short: "qb", bg: "#2CA01C" },
  { label: "Google", short: "G", bg: "#4285F4" },
  { label: "Microsoft", short: "M", bg: "#0078D4" },
  { label: "Zoom", short: "Z", bg: "#2D8CFF" },
  { label: "Slack", short: "S", bg: "#611F69" },
  { label: "WhatsApp", short: "W", bg: "#25D366" },
  { label: "BambooHR", short: "B", bg: "#73C41D" },
  { label: "Workday", short: "W", bg: "#F68B1F" },
];

const moduleTabs: Array<{
  id: string;
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string }>;
}> = [
  {
    id: "core-hr",
    icon: Users,
    label: "Core HR",
    title: "One reliable employee record for your entire organization",
    description:
      "Centralize employee profiles, documents, departments, job information, assets and workforce history in one secure cloud workspace.",
    bullets: ["Employee directory", "Digital documents", "Organization structure"],
    metrics: [
      { label: "Active employees", value: "1,248" },
      { label: "Documents complete", value: "94%" },
      { label: "Profile accuracy", value: "98%" },
    ],
  },
  {
    id: "payroll",
    icon: WalletCards,
    label: "Payroll",
    title: "Run payroll with connected attendance and employee data",
    description:
      "Bring salary structures, allowances, deductions, attendance inputs and payslips together for faster and more controlled processing.",
    bullets: ["Salary structures", "Payroll reports", "Digital payslips"],
    metrics: [
      { label: "Monthly payroll", value: "$482K" },
      { label: "Processed", value: "1,221" },
      { label: "Exceptions", value: "7" },
    ],
  },
  {
    id: "recruitment",
    icon: UserPlus,
    label: "Recruitment",
    title: "Move candidates from application to onboarding with clarity",
    description:
      "Manage vacancies, applicant pipelines, interview stages, offers and hiring activity through a collaborative recruitment workspace.",
    bullets: ["Applicant tracking", "Interview workflow", "Offer management"],
    metrics: [
      { label: "Open roles", value: "18" },
      { label: "Candidates", value: "326" },
      { label: "Interviews", value: "42" },
    ],
  },
  {
    id: "performance",
    icon: Target,
    label: "Performance",
    title: "Keep goals, feedback and reviews connected to development",
    description:
      "Create measurable goals, run review cycles, capture continuous feedback and support employee growth with visible progress.",
    bullets: ["Goal tracking", "Review cycles", "Continuous feedback"],
    metrics: [
      { label: "Goals on track", value: "82%" },
      { label: "Reviews complete", value: "91%" },
      { label: "Feedback activity", value: "+24%" },
    ],
  },
  {
    id: "reports",
    icon: FileBarChart,
    label: "Reports",
    title: "Turn workforce activity into practical management insight",
    description:
      "Monitor headcount, attendance, turnover, recruitment, payroll and performance through clean, role-based dashboards.",
    bullets: ["Workforce analytics", "Custom reports", "Management dashboards"],
    metrics: [
      { label: "Headcount", value: "1,248" },
      { label: "Attendance", value: "96.2%" },
      { label: "Turnover", value: "4.8%" },
    ],
  },
];

const modules: IconText[] = [
  {
    icon: CalendarDays,
    title: "Scheduler",
    text: "Plan teams, shifts, calendars and employee availability.",
  },
  {
    icon: Fingerprint,
    title: "Time & Attendance",
    text: "Track attendance, shifts, overtime and biometric activity.",
  },
  {
    icon: IdCard,
    title: "Onboarding & Offboarding",
    text: "Coordinate tasks, documents and employee transitions.",
  },
  {
    icon: FileBarChart,
    title: "Documents",
    text: "Store policies, contracts, letters and employee files.",
  },
  {
    icon: WalletCards,
    title: "Payroll",
    text: "Process salaries, deductions and digital payslips.",
  },
  {
    icon: Plane,
    title: "Leave & PTO",
    text: "Automate requests, balances and approval workflows.",
  },
  {
    icon: Target,
    title: "Performance",
    text: "Manage goals, reviews, feedback and development.",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    text: "Plan training and monitor employee learning progress.",
  },
];

const implementationSteps = [
  {
    number: "",
    title: "HR Discovery",
    text: "Review employee data, policies, approvals, payroll, attendance and current HR challenges.",
  },
  {
    number: "",
    title: "Solution Blueprint",
    text: "Define modules, user roles, workflows, integrations, reports and the rollout roadmap.",
  },
  {
    number: "03",
    title: "Setup & Migration",
    text: "Configure WebHR, prepare employee information and migrate agreed records securely.",
  },
  {
    number: "04",
    title: "Testing & Training",
    text: "Validate real HR scenarios and train administrators, managers and employees.",
  },
  {
    number: "05",
    title: "Go Live & Support",
    text: "Launch with structured support, issue resolution and continuous optimization.",
  },
];

const benefits = [
  "One cloud-based employee record",
  "Faster requests and approvals",
  "Better employee communication",
  "Consistent global HR processes",
  "Current attendance and leave visibility",
  "Stronger workforce analytics",
];

const testimonials = [
  {
    name: "Meiraj H",
    role: "HR Operations Manager",
    quote:
      "The platform is customizable, easy for employees to use and gives our HR team a much clearer way to manage requests, records and reports.",
  },
  {
    name: "Accalia B",
    role: "People & Culture Lead",
    quote:
      "Employee information is organized in one place and our leave, attendance and onboarding processes are now far more consistent.",
  },
  {
    name: "Suzy H",
    role: "Regional HR Director",
    quote:
      "We gained better visibility across teams and locations while employees received a simpler self-service experience.",
  },
];

const faqs = [
  {
    q: "Which WebHR modules can be implemented?",
    a: "The implementation can include recruitment, onboarding, employee records, attendance, leave and PTO, payroll, performance, employee self service, learning and HR analytics according to your selected scope.",
  },
  {
    q: "Can WebHR support distributed and global teams?",
    a: "Yes. WebHR can be structured around countries, offices, departments, roles and access requirements while keeping workforce information centralized.",
  },
  {
    q: "Can existing employee data be migrated?",
    a: "Yes. Employee profiles, departments, job information, leave balances, salary structures and other agreed records can be prepared, validated and migrated.",
  },
  {
    q: "Does WebHR support mobile employee access?",
    a: "Yes. Employees and managers can use supported mobile experiences for attendance, leave, requests, payslips, approvals and other HR activities.",
  },
  {
    q: "Do you provide training and post-launch support?",
    a: "Yes. We provide administrator training, manager guidance, employee adoption support, launch assistance and ongoing workflow and reporting improvements.",
  },
];

function parseRgb(value: string) {
  const match = value.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;

  const parts = match[1]
    .split(",")
    .map((part) => Number(part.trim().replace("/", "")));

  if (parts.length < 3 || parts.some(Number.isNaN)) return null;

  return {
    r: parts[0],
    g: parts[1],
    b: parts[2],
    a: parts[3] ?? 1,
  };
}

function isDarkColor(value: string) {
  const rgb = parseRgb(value);
  if (!rgb || rgb.a < 0.1) return false;
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 < 90;
}

function headerIsDark() {
  if (typeof window === "undefined") return false;

  return [
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
        isDarkColor(style.backgroundColor) || isDarkColor(style.borderColor)
      );
    });
}

function readTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const html = document.documentElement;
  const body = document.body;

  const attributes = [
    html.className,
    body.className,
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

  let stored = "";

  try {
    stored = storageKeys
      .map((key) => window.localStorage.getItem(key) || "")
      .join(" ")
      .toLowerCase();
  } catch {
    stored = "";
  }

  const value = `${attributes} ${stored}`;

  if (headerIsDark() || /\b(dark|night|black)\b/.test(value)) return "dark";
  if (/\b(light|day|off-white|offwhite|cream)\b/.test(value)) return "light";

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function useThemeMode(): ThemeMode {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const update = () => setMode(readTheme());
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
    const click = () => window.setTimeout(update, 0);
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");

    window.addEventListener("click", click, true);
    window.addEventListener("storage", update);
    media?.addEventListener?.("change", update);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
      window.removeEventListener("click", click, true);
      window.removeEventListener("storage", update);
      media?.removeEventListener?.("change", update);
    };
  }, []);

  return mode;
}

function WebHr() {
  const theme = useThemeMode();

  return (
    <SiteLayout>
      <div
        className={`wh-wrap ${theme === "dark" ? "dark" : ""}`}
        data-wh-theme={theme}
      >
        <WebHrStyles />

        <main className="wh-page min-h-screen overflow-hidden bg-[var(--wh-bg)] text-[var(--wh-text)] selection:bg-[#9B39F0] selection:text-white">
          <HeroSection />
          <TrustSection />
          <IntegrationSection />
          <AffordableSection />
          <InteractiveSuite />
          <ModulesSection />
          <ImplementationSection />
          <TestimonialsSection />
          <BenefitsSection />
          <FaqSection />
          <CtaSection />
        </main>
      </div>
    </SiteLayout>
  );
}

function WebHrStyles() {
  return (
    <style>{`
      .wh-wrap {
        color-scheme: light;
        background: #f7f7fb;
      }

      .wh-wrap[data-wh-theme="dark"] {
        color-scheme: dark;
        background: #050308;
      }

      .wh-wrap[data-wh-theme="light"] .wh-page {
        --wh-bg: #f8f8fb;
        --wh-alt: #f0eef6;
        --wh-card: rgba(255,255,255,.96);
        --wh-card-soft: rgba(255,255,255,.84);
        --wh-title: #17131f;
        --wh-text: #30273b;
        --wh-body: #5a5064;
        --wh-muted: #7c7287;
        --wh-border: rgba(108,34,217,.15);
        --wh-border-strong: rgba(108,34,217,.28);
        --wh-shadow: 0 22px 70px rgba(62,31,104,.12);
        --wh-overlay: rgba(248,248,251,.94);
        --wh-phone: #22172d;
        background: #f8f8fb !important;
        color: #30273b !important;
      }

      .wh-wrap[data-wh-theme="dark"] .wh-page {
        --wh-bg: #050308;
        --wh-alt: #0c0812;
        --wh-card: rgba(20,14,27,.97);
        --wh-card-soft: rgba(15,10,21,.91);
        --wh-title: #fffaff;
        --wh-text: #f1e9f6;
        --wh-body: #d8cce1;
        --wh-muted: rgba(211,195,222,.72);
        --wh-border: rgba(255,255,255,.11);
        --wh-border-strong: rgba(155,57,240,.38);
        --wh-shadow: 0 28px 80px rgba(0,0,0,.52);
        --wh-overlay: rgba(5,3,8,.94);
        --wh-phone: #060407;
        background: #050308 !important;
        color: #f1e9f6 !important;
      }

      .wh-container {
        width: min(1220px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .wh-card {
        background: var(--wh-card);
        border: 1px solid var(--wh-border);
        box-shadow: var(--wh-shadow);
      }

      .wh-glass {
        background: var(--wh-card-soft);
        border: 1px solid var(--wh-border);
        box-shadow: var(--wh-shadow);
        backdrop-filter: blur(22px);
        -webkit-backdrop-filter: blur(22px);
      }

      .wh-wrap[data-wh-theme="light"] .wh-alt {
        background: #f0eef6 !important;
      }

      .wh-wrap[data-wh-theme="dark"] .wh-alt {
        background: #0c0812 !important;
      }

      .wh-wrap[data-wh-theme="light"] .wh-blue-section {
        background: linear-gradient(135deg, #075a93 0%, #087dab 55%, #035172 100%) !important;
      }

      .wh-wrap[data-wh-theme="dark"] .wh-blue-section {
        background: linear-gradient(135deg, #021421 0%, #06334a 55%, #020d14 100%) !important;
      }

      .wh-hero-gradient {
        background:
          radial-gradient(circle at 17% 18%, rgba(155,57,240,.50), transparent 31%),
          radial-gradient(circle at 88% 6%, rgba(55,198,244,.30), transparent 26%),
          linear-gradient(125deg, #26005d 0%, #5310ba 50%, #18003f 100%);
      }

      .wh-dot-grid {
        background-image: radial-gradient(rgba(255,255,255,.20) 1.25px, transparent 1.25px);
        background-size: 18px 18px;
      }

      .wh-app-orbit::before,
      .wh-app-orbit::after {
        content: "";
        position: absolute;
        inset: 50%;
        transform: translate(-50%, -50%);
        border-radius: 999px;
        border: 1px dashed rgba(255,255,255,.22);
      }

      .wh-app-orbit::before { width: 76%; height: 76%; }
      .wh-app-orbit::after { width: 104%; height: 104%; }

      .wh-wrap[data-wh-theme="light"] img {
        filter: brightness(.98) saturate(.95);
      }

      .wh-wrap[data-wh-theme="dark"] img {
        filter: brightness(.70) saturate(.88) contrast(1.08);
      }

      .wh-page,
      .wh-page section,
      .wh-page article,
      .wh-page div,
      .wh-page a,
      .wh-page button,
      .wh-page p,
      .wh-page h1,
      .wh-page h2,
      .wh-page h3 {
        transition:
          background-color .3s ease,
          border-color .3s ease,
          color .3s ease,
          box-shadow .3s ease;
      }

      @media (prefers-reduced-motion: reduce) {
        .wh-page *, .wh-page *::before, .wh-page *::after {
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
    <section className="wh-hero-gradient relative isolate min-h-[760px] overflow-hidden pb-16 pt-28 text-white lg:min-h-[820px] lg:pb-20 lg:pt-32">
      <div className="wh-dot-grid absolute inset-0 -z-10 opacity-35" />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute -right-36 -top-36 h-[32rem] w-[32rem] rounded-full border border-dashed border-white/20"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 36, 0], y: [0, -24, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-[#37C6F4]/18 blur-[130px]"
      />

      <div className="wh-container grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* <div className="mb-7 flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/12 text-xl font-bold shadow-xl backdrop-blur-xl">
              W
            </div>
            <div>
              <div className="text-3xl font-bold tracking-[-0.055em]">
                Web<span className="text-[#7FE2FF]">HR</span>
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/65">
                Cloud Social HR
              </div>
            </div>
          </div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-[#7FE2FF]" />
            All-in-one HR software
          </motion.div> */}

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-[68px] xl:text-[76px]">
            Social HR software for your complete workforce
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
            Automate recruitment, onboarding, payroll, attendance, leave,
            performance and employee self service through one connected WebHR
            environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#5510B9] shadow-[0_18px_50px_rgba(0,0,0,.22)] transition hover:-translate-y-1 hover:bg-[#F4EAFF]"
            >
              Start Your HR Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#suite"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/16"
            >
              Explore WebHR
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/16 pt-7">
            {[
              ["30,000+", "Companies onboard"],
              ["190+", "Countries globally"],
              ["1M+", "Employees served"],
            ].map(([value, label], index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08 }}
              >
                <div className="text-xl font-semibold sm:text-2xl">{value}</div>
                <div className="mt-1 text-[10px] leading-4 text-white/60 sm:text-xs">
                  {label}
                </div>
              </motion.div>
            ))}
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
      initial={{ opacity: 0, x: 42, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
      className="relative mx-auto min-h-[560px] w-full max-w-[680px]"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-4 w-[78%] overflow-hidden rounded-[2.2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl"
      >
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1500&q=90"
          alt="Professional HR team using WebHR"
          className="h-[400px] w-full rounded-[1.7rem] object-cover"
        />
        <div className="absolute inset-3 rounded-[1.7rem] bg-gradient-to-t from-[#16042B]/78 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 left-2 w-[260px] rounded-[2.2rem] border-[10px] border-[#1B0E2A] bg-white p-4 shadow-[0_30px_70px_rgba(0,0,0,.28)]"
      >
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[#1B0E2A]" />
        <div className="rounded-[1.6rem] bg-[#F6F2FA] p-4 text-[#25152F]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-[#7C7185]">Welcome back</p>
              <p className="font-semibold">Sarah Malik</p>
            </div>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#9B39F0] text-white">
              <UserCheck className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-[#6C22D9] p-4 text-white">
            <p className="text-[9px] uppercase tracking-[0.16em] text-white/65">
              Attendance
            </p>
            <div className="mt-2 flex items-end justify-between">
              <div>
                <div className="text-2xl font-semibold">09:04</div>
                <div className="text-[10px] text-white/70">Checked in</div>
              </div>
              <ScanFace className="h-7 w-7" />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              [CalendarDays, "Leave"],
              [WalletCards, "Payroll"],
              [Clock3, "Time"],
              [Target, "Goals"],
            ].map(([Icon, label]) => {
              const AppIcon = Icon as LucideIcon;
              return (
                <div
                  key={label as string}
                  className="rounded-xl border border-[#E3D9EC] p-2 text-center"
                >
                  <AppIcon className="mx-auto h-4 w-4 text-[#9B39F0]" />
                  <div className="mt-1 text-[9px]">{label as string}</div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-3 top-10 rounded-2xl border border-white/20 bg-white/14 p-4 shadow-xl backdrop-blur-xl"
      >
        <BellRing className="h-5 w-5 text-[#7FE2FF]" />
        <p className="mt-2 text-xs font-semibold">Live approvals</p>
      </motion.div>

      <motion.div
        animate={{ x: [0, -9, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-0 rounded-2xl border border-white/20 bg-white/14 p-4 shadow-xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#37C6F4] text-[#102A38]">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] text-white/65">Workforce active</p>
            <p className="font-semibold">96.2%</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TrustSection() {
  return (
    <section className="bg-[var(--wh-bg)] py-16">
      <div className="wh-container">
        <div className="grid gap-6 border-b border-[var(--wh-border)] pb-10 sm:grid-cols-3">
          {[
            [Globe2, "Global reach", "Teams across 190+ countries"],
            [ShieldCheck, "Secure cloud", "Controlled access and protected data"],
            [BadgeCheck, "Trusted platform", "Used by growing organizations"],
          ].map(([Icon, title, text], index) => {
            const FeatureIcon = Icon as LucideIcon;
            return (
              <motion.div
                key={title as string}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="flex items-center gap-4"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#9B39F0]/10 text-[#9B39F0]">
                  <FeatureIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-[var(--wh-title)]">
                    {title as string}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--wh-muted)]">
                    {text as string}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9B39F0]">
              Selected by growing teams
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[var(--wh-title)] sm:text-3xl">
              Trusted across industries and locations
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {companyNames.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="flex min-h-20 items-center justify-center rounded-2xl border border-[var(--wh-border)] bg-[var(--wh-card)] px-3 text-center text-sm font-bold text-[var(--wh-title)]"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F29A12]">
            Trusted and recognized HR software
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recognitions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="wh-card rounded-2xl p-5 text-left"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-[var(--wh-title)]">{item.title}</p>
                  <span className="text-lg font-bold text-[#F29A12]">{item.value}</span>
                </div>
                <div className="mt-3 flex gap-1 text-[#F6A313]">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-xs text-[var(--wh-muted)]">{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationSection() {
  return (
    <section className="wh-alt overflow-hidden bg-[var(--wh-alt)] py-24">
      <div className="wh-container grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <SectionHeading
            eyebrow="Connected tools"
            title="Streamline your operations with seamless integrations"
            description="Connect WebHR with the business tools your teams already use and keep important employee activity moving through one coordinated workflow."
            align="left"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {["Single sign-on", "Finance tools", "Collaboration apps"].map(
              (item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--wh-border)] bg-[var(--wh-card)] px-4 py-2 text-sm text-[var(--wh-body)]"
                >
                  <Check className="h-4 w-4 text-[#9B39F0]" />
                  {item}
                </div>
              ),
            )}
          </div>
        </motion.div>

        <div className="relative mx-auto min-h-[480px] w-full max-w-[650px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#9B39F0]/22"
          />
          <div className="wh-glass absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem]">
            <div className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#9B39F0] text-xl font-bold text-white">
                W
              </div>
              <p className="mt-2 text-xs font-semibold text-[var(--wh-title)]">WebHR</p>
            </div>
          </div>

          {integrationApps.map((app, index) => {
            const angle = (index / integrationApps.length) * Math.PI * 2 - Math.PI / 2;
            const left = 50 + Math.cos(angle) * 39;
            const top = 50 + Math.sin(angle) * 39;
            return (
              <motion.div
                key={app.label}
                initial={{ opacity: 0, scale: 0.65 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                style={{ left: `${left}%`, top: `${top}%` }}
                className="wh-card absolute grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl"
                title={app.label}
              >
                <div
                  className="grid h-9 w-9 place-items-center rounded-xl text-xs font-bold text-white"
                  style={{ backgroundColor: app.bg }}
                >
                  {app.short}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AffordableSection() {
  return (
    <section className="bg-[var(--wh-bg)] py-24">
      <div className="wh-container">
        <SectionHeading
          eyebrow="HR for everyone"
          title="A modern HR experience that is practical and accessible"
          description="Give HR teams, managers and employees the tools they need without building disconnected processes around spreadsheets and email."
        />

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative min-h-[600px]"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="wh-glass absolute left-8 top-6 w-[300px] rounded-[3rem] border-[10px] border-[var(--wh-phone)] p-4 sm:left-16"
            >
              <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-[var(--wh-phone)]" />
              <EmployeePhone name="Alex Morgan" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="wh-glass absolute bottom-0 right-4 w-[300px] rounded-[3rem] border-[10px] border-[var(--wh-phone)] p-4 sm:right-16"
            >
              <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-[var(--wh-phone)]" />
              <ManagerPhone />
            </motion.div>
          </motion.div>

          <div className="grid gap-4">
            {[
              [Smartphone, "Employee self service", "Let employees view attendance, leave, payslips and workplace information."],
              [Workflow, "Manager approvals", "Keep leave, attendance and employee requests moving through clear approval paths."],
              [BellRing, "Real-time communication", "Share updates, alerts and workplace information without scattered messages."],
              [ShieldCheck, "Controlled access", "Give every employee, manager and administrator the right level of access."],
            ].map(([Icon, title, text], index) => {
              const ItemIcon = Icon as LucideIcon;
              return (
                <motion.div
                  key={title as string}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ x: 5 }}
                  className="wh-card flex gap-4 rounded-2xl p-5"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#9B39F0]/10 text-[#9B39F0]">
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--wh-title)]">
                      {title as string}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--wh-muted)]">
                      {text as string}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EmployeePhone({ name }: { name: string }) {
  return (
    <div className="rounded-[2rem] bg-[var(--wh-card)] p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-[var(--wh-muted)]">Good morning</p>
          <p className="font-semibold text-[var(--wh-title)]">{name}</p>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-[#9B39F0] text-white">
          <UserCheck className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-[#6C22D9] p-4 text-white">
        <p className="text-[9px] uppercase tracking-[0.16em] text-white/65">Today</p>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <div className="text-2xl font-semibold">09:05</div>
            <div className="text-[10px] text-white/70">Checked in</div>
          </div>
          <ScanFace className="h-7 w-7" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          [CalendarDays, "Leave"],
          [WalletCards, "Payroll"],
          [Clock3, "Time"],
          [Target, "Goals"],
        ].map(([Icon, label]) => {
          const AppIcon = Icon as LucideIcon;
          return (
            <div
              key={label as string}
              className="rounded-xl border border-[var(--wh-border)] p-3 text-center"
            >
              <AppIcon className="mx-auto h-4 w-4 text-[#9B39F0]" />
              <p className="mt-1 text-[9px] text-[var(--wh-text)]">{label as string}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ManagerPhone() {
  return (
    <div className="rounded-[2rem] bg-[var(--wh-card)] p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-[var(--wh-muted)]">Manager workspace</p>
          <p className="font-semibold text-[var(--wh-title)]">Approvals</p>
        </div>
        <BellRing className="h-5 w-5 text-[#9B39F0]" />
      </div>
      <div className="mt-4 space-y-3">
        {[
          ["Leave request", "2 pending"],
          ["Attendance update", "4 pending"],
          ["Employee documents", "3 pending"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="rounded-2xl border border-[var(--wh-border)] p-3"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-[var(--wh-title)]">{title}</p>
              <span className="rounded-full bg-[#9B39F0]/10 px-2 py-1 text-[9px] font-semibold text-[#9B39F0]">
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-[#37C6F4]/12 p-4">
        <p className="text-[10px] text-[var(--wh-muted)]">Team attendance</p>
        <p className="mt-1 text-2xl font-semibold text-[var(--wh-title)]">96.2%</p>
      </div>
    </div>
  );
}

function InteractiveSuite() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = moduleTabs[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % moduleTabs.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const move = (direction: number) => {
    setActiveIndex((current) =>
      (current + direction + moduleTabs.length) % moduleTabs.length,
    );
  };

  return (
    <section id="suite" className="wh-blue-section overflow-hidden py-24 text-white">
      <div className="wh-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8BE7FF]">
            Complete HR suite
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            Simplify the complete HR workflow through one connected platform
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Select a module to explore how WebHR supports everyday HR work,
            employee service and management reporting.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto border-b border-white/18">
          <div className="mx-auto flex min-w-max justify-center gap-1">
            {moduleTabs.map((tab, index) => {
              const Icon = tab.icon;
              const selected = index === activeIndex;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex items-center gap-2 px-5 py-4 text-sm font-semibold transition ${
                    selected ? "text-white" : "text-white/62 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                  {selected && (
                    <motion.span
                      layoutId="suite-active-tab"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#8BE7FF]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: -22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 22 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
                <active.icon className="h-4 w-4 text-[#8BE7FF]" />
                {active.label}
              </div>
              <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                {active.title}
              </h3>
              <p className="mt-5 leading-8 text-white/70">{active.description}</p>
              <div className="mt-7 space-y-3">
                {active.bullets.map((bullet, index) => (
                  <motion.div
                    key={bullet}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-[#8BE7FF]/15 text-[#8BE7FF]">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{bullet}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Previous HR module"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/8 transition hover:bg-white/15"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Next HR module"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/8 transition hover:bg-white/15"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <DashboardPreview active={active} />
        </div>
      </div>
    </section>
  );
}

function DashboardPreview({ active }: { active: (typeof moduleTabs)[number] }) {
  const heights = useMemo(
    () => [52, 64, 48, 76, 68, 88, 74, 94],
    [active.id],
  );

  return (
    <motion.div
      key={active.id}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-[2rem] border border-white/16 bg-white/95 p-5 text-[#251D2C] shadow-[0_30px_90px_rgba(0,0,0,.28)]"
    >
      <div className="flex items-center justify-between border-b border-[#E8E0EE] pb-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8B7F93]">
            WebHR Workspace
          </p>
          <h3 className="mt-1 text-lg font-semibold">{active.label} Overview</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {active.metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07 }}
            className="rounded-2xl border border-[#E8E0EE] bg-[#FAF8FC] p-4"
          >
            <p className="text-[10px] text-[#8B7F93]">{metric.label}</p>
            <p className="mt-2 text-xl font-semibold">{metric.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1.3fr_.7fr]">
        <div className="rounded-2xl border border-[#E8E0EE] bg-[#FAF8FC] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#8B7F93]">
                Monthly activity
              </p>
              <p className="mt-1 font-semibold">Performance trend</p>
            </div>
            <BarChart3 className="h-5 w-5 text-[#9B39F0]" />
          </div>
          <div className="mt-6 flex h-40 items-end gap-2">
            {heights.map((height, index) => (
              <motion.div
                key={`${active.id}-${index}`}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: index * 0.05, duration: 0.7 }}
                className="flex-1 rounded-t-lg"
                style={{
                  background: `linear-gradient(180deg, ${CYAN}, ${PURPLE_BRIGHT})`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {[
            ["Pending approvals", "12"],
            ["Completed today", "48"],
            ["Notifications", "7"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-[#E8E0EE] bg-[#FAF8FC] p-4"
            >
              <p className="text-[10px] text-[#8B7F93]">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-[#6C22D9]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ModulesSection() {
  return (
    <section className="bg-[var(--wh-bg)] py-24">
      <div className="wh-container">
        <SectionHeading
          eyebrow="WebHR modules"
          title="Step into the future with a complete HR work environment"
          description="Select the HR capabilities your organization needs today and expand the platform as your workforce and processes grow."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.article
                key={module.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="wh-card group min-h-[250px] rounded-3xl p-6"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-[#9B39F0]/10 text-[#9B39F0]"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="mt-8 text-xl font-semibold text-[var(--wh-title)]">
                  {module.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--wh-muted)]">{module.text}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#9B39F0]">
                  Connected module
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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
    <section className="wh-alt bg-[var(--wh-alt)] py-24">
      <div className="wh-container">
        <SectionHeading
          eyebrow="Implementation roadmap"
          title="A structured path from HR requirements to confident adoption"
          description="Every phase focuses on clean employee data, practical workflows, secure access and successful team adoption."
        />

        <div className="relative mt-14 grid gap-5 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[#9B39F0]/40 to-transparent lg:block" />
          {implementationSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -7 }}
              className="wh-card relative rounded-3xl p-6"
            >
              <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl bg-[#9B39F0] text-lg font-bold text-white shadow-[0_16px_38px_rgba(155,57,240,.22)]">
                {step.number}
              </div>
              <h3 className="mt-7 text-lg font-semibold text-[var(--wh-title)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--wh-muted)]">
                {step.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((current) => (current + 1) % testimonials.length);
  const previous = () =>
    setActiveIndex((current) =>
      (current - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="bg-[var(--wh-bg)] py-24">
      <div className="wh-container">
        <SectionHeading
          eyebrow="Customer experience"
          title="What HR teams value about a connected platform"
          description="Organizations use WebHR to simplify routine work while giving employees and managers a clearer, more responsive HR experience."
        />

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[var(--wh-border)] bg-[var(--wh-card)] text-[var(--wh-title)] transition hover:-translate-y-1 hover:border-[#9B39F0]/45"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="wh-card mx-auto max-w-4xl rounded-[2rem] p-7 text-center sm:p-10"
            >
              <div className="mx-auto flex justify-center gap-1 text-[#F6A313]">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[var(--wh-body)] sm:text-xl">
                “{testimonials[activeIndex].quote}”
              </p>
              <p className="mt-7 font-semibold text-[var(--wh-title)]">
                {testimonials[activeIndex].name}
              </p>
              <p className="mt-1 text-sm text-[var(--wh-muted)]">
                {testimonials[activeIndex].role}
              </p>
              <div className="mt-7 flex justify-center gap-2">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-8 bg-[#9B39F0]"
                        : "w-2.5 bg-[#9B39F0]/22"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[var(--wh-border)] bg-[var(--wh-card)] text-[var(--wh-title)] transition hover:-translate-y-1 hover:border-[#9B39F0]/45"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="wh-alt bg-[var(--wh-alt)] py-24">
      <div className="wh-container grid items-center gap-14 lg:grid-cols-[.78fr_1.22fr]">
        <div>
          <SectionHeading
            eyebrow="Business outcomes"
            title="Better HR operations without losing the human side"
            description="A professionally configured WebHR environment reduces repetitive administration while improving employee service, visibility and workforce control."
            align="left"
          />
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#9B39F0] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#6F22C7]"
          >
            Discuss Your Requirements
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
              className="wh-card flex items-start gap-4 rounded-2xl p-5"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#9B39F0]/10 text-[#9B39F0]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="leading-7 text-[var(--wh-body)]">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[var(--wh-bg)] py-24">
      <div className="wh-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="Clear answers before your WebHR project begins"
          description="Understand modules, migration, mobile access, global teams, training and ongoing support."
          align="left"
        />

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
    <div className="wh-card overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[var(--wh-title)]">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#9B39F0] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="border-t border-[var(--wh-border)] px-5 py-5 leading-7 text-[var(--wh-muted)]">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

function CtaSection() {
  return (
    <section className="bg-[var(--wh-bg)] py-24">
      <div className="wh-container">
        <div className="relative overflow-hidden rounded-[3rem] bg-[linear-gradient(120deg,#28005D_0%,#6C22D9_58%,#1A8BB7_100%)] px-7 py-12 text-white shadow-[0_35px_100px_rgba(75,22,140,.30)] sm:px-12 sm:py-16">
          <div className="wh-dot-grid absolute inset-0 opacity-20" />
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -16, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#37C6F4]/24 blur-[100px]"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/68">
                WebHR consultation
              </p>
              <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Build a connected social HR experience for your complete workforce
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
                We will review your recruitment, attendance, leave, payroll,
                performance and employee experience requirements before
                recommending a practical implementation roadmap.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#6F22C7] transition hover:-translate-y-1 hover:bg-[#F4EAFF]"
            >
              Start Your WebHR Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className={`max-w-3xl ${alignment}`}
    >
      <div
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9B39F0] ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--wh-title)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--wh-muted)]">
        {description}
      </p>
    </motion.div>
  );
}