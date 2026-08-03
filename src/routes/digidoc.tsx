import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { ComponentType, ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import type { Variants } from "framer-motion";
import * as IconComponents from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

type IconComponent = ComponentType<{ className?: string }>;
type ThemeMode = "light" | "dark";

const iconLibrary = IconComponents as unknown as Record<
  string,
  IconComponent | undefined
>;

const DefaultIcon: IconComponent =
  iconLibrary.Circle ?? iconLibrary.File ?? (() => null);

const getIcon = (name: string): IconComponent =>
  iconLibrary[name] ?? DefaultIcon;

const Archive = getIcon("Archive");
const ArrowRight = getIcon("ArrowRight");
const Building2 = getIcon("Building2");
const CheckCircle2 = getIcon("CheckCircle2");
const ChevronDown = getIcon("ChevronDown");
const ChevronRight = getIcon("ChevronRight");
const CircleCheckBig = getIcon("CircleCheckBig");
const FileCheck2 = getIcon("FileCheck2");
const FileClock = getIcon("FileClock");
const FileLock2 = getIcon("FileLock2");
const FileSearch = getIcon("FileSearch");
const FileSignature = getIcon("FileSignature");
const Files = getIcon("Files");
const FolderArchive = getIcon("FolderArchive");
const History = getIcon("History");
const Layers3 = getIcon("Layers3");
const Mail = getIcon("Mail");
const MessageCircle = getIcon("MessageCircle");
const ScanLine = getIcon("ScanLine");
const Search = getIcon("Search");
const ShieldCheck = getIcon("ShieldCheck");
// const Sparkles = getIcon("Sparkles")
const UploadCloud = getIcon("UploadCloud");
const Users = getIcon("Users");
const Workflow = getIcon("Workflow");
const Zap = getIcon("Zap");

export const Route = createFileRoute("/digidoc")({
  head: () => ({
    meta: [
      {
        title: "DIGIDOC Document Management | Business Genie Consulting",
      },
      {
        name: "description",
        content:
          "DIGIDOC consulting and implementation for document archiving, document workflow, electronic contracts, digital signatures, secure storage, access control and paperless process automation.",
      },
      {
        property: "og:title",
        content: "DIGIDOC Document Management | Business Genie Consulting",
      },
      {
        property: "og:description",
        content:
          "Transform document archiving, approvals and electronic contracts with a secure DIGIDOC document management environment.",
      },
    ],
  }),
  component: Digidoc,
});

const THEME_KEYS = [
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

const solutions: Array<{
  code: string;
  icon: IconComponent;
  title: string;
  shortTitle: string;
  text: string;
  image: string;
  points: string[];
}> = [
  {
    code: "",
    icon: FolderArchive,
    title: "Document Archiving Solution",
    shortTitle: "DAS",
    text: "Digitize physical and digital records, organize every file through structured indexes and retain documents for secure long-term use.",
    image:
      "https://www.digidoccloud.com/assets/img/service/archivingneon-resize_11zon.png",
    points: ["Smart indexing", "Fast retrieval", "Retention control"],
  },
  {
    code: "",
    icon: Workflow,
    title: "Document Workflow Solution",
    shortTitle: "DWS",
    text: "Move documents through reviews, approvals, assignments and controlled workflows without depending on physical paperwork.",
    image:
      "https://www.digidoccloud.com/assets/img/service/workflowneon-resized_11zon.png",
    points: ["Approval routing", "Task ownership", "Escalation rules"],
  },
  {
    code: "03",
    icon: FileSignature,
    title: "Electronic Contract Solution",
    shortTitle: "ECS",
    text: "Create, route, approve, sign and retain electronic agreements through a secure and traceable contract lifecycle.",
    image: "https://www.digidoccloud.com/assets/img/service/GoldS.png",
    points: ["Digital signing", "Version history", "Contract visibility"],
  },
];

const trustItems = [
  { label: "Government", icon: Building2 },
  { label: "Enterprise", icon: Layers3 },
  { label: "Finance", icon: ShieldCheck },
  { label: "Healthcare", icon: FileLock2 },
  { label: "Education", icon: Users },
  { label: "Legal", icon: FileSignature },
];

const lifecycle = [
  { icon: ScanLine, label: "Capture", detail: "Scan or import" },
  { icon: UploadCloud, label: "Upload", detail: "Central repository" },
  { icon: FileSearch, label: "Index", detail: "Metadata and tags" },
  { icon: Workflow, label: "Approve", detail: "Rules and routing" },
  { icon: FileSignature, label: "Sign", detail: "Secure e-signing" },
  { icon: Archive, label: "Archive", detail: "Retention and audit" },
];

const benefits = [
  {
    icon: FolderArchive,
    title: "Centralized Control",
    text: "Access, manage and track business documents from one controlled digital environment.",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    text: "Protect sensitive information through permissions, audit history and controlled sharing.",
  },
  {
    icon: Zap,
    title: "Faster Operations",
    text: "Reduce manual document handling and move work forward with automated approvals.",
  },
  {
    icon: Layers3,
    title: "Flexible Customization",
    text: "Configure document categories, workflows, roles and rules around your organization.",
  },
  {
    icon: Search,
    title: "Instant Retrieval",
    text: "Find contracts, invoices, records and supporting files in seconds using structured search.",
  },
];

const faqs = [
  {
    question: "What are the main DIGIDOC solutions?",
    answer:
      "DIGIDOC includes Document Archiving Solution, Document Workflow Solution and Electronic Contract Solution, supported by secure access, digital signatures, search and audit capabilities.",
  },
  {
    question: "Can existing physical records be digitized?",
    answer:
      "Yes. Existing paper records can be scanned, indexed and organized into searchable digital files according to your departments, document types and retention requirements.",
  },
  {
    question: "Can approval processes be automated?",
    answer:
      "Yes. Documents can move through structured review, approval, assignment and escalation stages based on users, departments, values, dates or other business rules.",
  },
  {
    question: "Can document access be controlled by role?",
    answer:
      "Yes. Access can be configured by user, role, department, document category and process responsibility, with a clear activity history for accountability.",
  },
];

function readThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const html = document.documentElement;
  const body = document.body;
  const root = document.querySelector<HTMLElement>("#root");

  const domTheme = [
    html.className,
    body.className,
    root?.className,
    html.dataset.theme,
    body.dataset.theme,
    root?.dataset.theme,
    html.dataset.mode,
    body.dataset.mode,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  let storedTheme = "";

  try {
    storedTheme = THEME_KEYS.map(
      (key) => window.localStorage.getItem(key) ?? "",
    )
      .join(" ")
      .toLowerCase();
  } catch {
    storedTheme = "";
  }

  const value = `${domTheme} ${storedTheme}`;

  if (/\b(dark|night|black)\b/.test(value)) return "dark";
  if (/\b(light|day|white|cream)\b/.test(value)) return "light";

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function useThemeMode(): ThemeMode {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const update = () => setMode(readThemeMode());
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const observer = new MutationObserver(update);

    update();

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme", "data-mode"],
    });

    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      childList: true,
      attributeFilter: ["class", "style", "data-theme", "data-mode"],
    });

    const interval = window.setInterval(update, 400);
    const clickHandler = () => window.setTimeout(update, 0);

    window.addEventListener("click", clickHandler, true);
    window.addEventListener("storage", update);
    media?.addEventListener?.("change", update);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
      window.removeEventListener("click", clickHandler, true);
      window.removeEventListener("storage", update);
      media?.removeEventListener?.("change", update);
    };
  }, []);

  return mode;
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Digidoc() {
  const theme = useThemeMode();

  return (
    <SiteLayout>
      <div
        className="dd-wrap"
        data-dd-theme={theme}
        data-page="digidoc"
      >
        <ThemeStyles />
        <ScrollProgress />

        <main className="dd-page min-h-screen overflow-hidden bg-[var(--dd-bg)] text-[var(--dd-text)] selection:bg-[#159596] selection:text-white">
          <HeroSection />
          <TrustSection />
          <AboutSection />
          <SolutionsIntro />
          <SolutionPreview />
          <LifecycleSection />
          <DashboardShowcase />
          <WhyDigidocSection />
          <CtaSection />
        </main>
      </div>
    </SiteLayout>
  );
}

function ThemeStyles() {
  return (
    <style>{`
      .dd-wrap {
        color-scheme: light;
        background: #f8fbfb;
      }

      .dd-wrap[data-dd-theme="dark"] {
        color-scheme: dark;
        background: #051012;
      }

      .dd-page {
        --dd-bg: #fbfdfd;
        --dd-bg-soft: #f1f5f5;
        --dd-card: rgba(255, 255, 255, .92);
        --dd-card-solid: #ffffff;
        --dd-title: #101719;
        --dd-text: #26383b;
        --dd-body: #536569;
        --dd-muted: #7b898c;
        --dd-line: rgba(9, 67, 70, .12);
        --dd-line-strong: rgba(21, 149, 150, .35);
        --dd-glow: rgba(21, 149, 150, .12);
        --dd-shadow: 0 28px 80px rgba(17, 67, 70, .12);
        --dd-overlay: rgba(255, 255, 255, .88);
        --dd-panel: #eef3f3;
        --dd-teal: #159596;
        --dd-teal-deep: #0e7779;
        --dd-teal-soft: #dff1f0;
      }

      .dd-wrap[data-dd-theme="dark"] .dd-page {
        --dd-bg: #051012;
        --dd-bg-soft: #091719;
        --dd-card: rgba(10, 28, 31, .88);
        --dd-card-solid: #0b1a1d;
        --dd-title: #f5ffff;
        --dd-text: #dceced;
        --dd-body: #afc4c6;
        --dd-muted: #829c9f;
        --dd-line: rgba(190, 238, 239, .11);
        --dd-line-strong: rgba(42, 196, 197, .35);
        --dd-glow: rgba(19, 184, 186, .16);
        --dd-shadow: 0 32px 90px rgba(0, 0, 0, .42);
        --dd-overlay: rgba(5, 16, 18, .88);
        --dd-panel: #0a1719;
        --dd-teal: #2ac4c5;
        --dd-teal-deep: #159596;
        --dd-teal-soft: rgba(42, 196, 197, .11);
      }

      .dd-wrap,
      .dd-wrap * {
        box-sizing: border-box;
      }

      .dd-page {
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      .dd-serif {
        font-family: Georgia, "Times New Roman", serif;
      }

      .dd-container {
        width: min(1240px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .dd-card {
        background: var(--dd-card);
        border: 1px solid var(--dd-line);
        box-shadow: var(--dd-shadow);
        backdrop-filter: blur(24px);
      }

      .dd-noise {
        background-image:
          radial-gradient(circle at 15% 20%, var(--dd-glow), transparent 28%),
          radial-gradient(circle at 85% 80%, var(--dd-glow), transparent 30%);
      }

      .dd-grid-pattern {
        background-image:
          linear-gradient(var(--dd-line) 1px, transparent 1px),
          linear-gradient(90deg, var(--dd-line) 1px, transparent 1px);
        background-size: 52px 52px;
      }

      .dd-image {
        filter: saturate(.92) contrast(1.02);
      }

      .dd-wrap[data-dd-theme="dark"] .dd-image {
        filter: brightness(.72) saturate(.86) contrast(1.12);
      }

      .dd-section-line::before {
        content: "";
        position: absolute;
        inset-inline: 0;
        top: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--dd-line-strong), transparent);
      }

      .dd-page a,
      .dd-page button,
      .dd-page article,
      .dd-page img,
      .dd-page div {
        transition:
          background-color .3s ease,
          border-color .3s ease,
          color .3s ease,
          box-shadow .3s ease,
          filter .3s ease;
      }

      @media (prefers-reduced-motion: reduce) {
        .dd-page *,
        .dd-page *::before,
        .dd-page *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
          scroll-behavior: auto !important;
        }
      }
    `}</style>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });
  const [percentage, setPercentage] = useState(0);

  useEffect(
    () =>
      smoothProgress.on("change", (latest) => {
        setPercentage(Math.round(latest * 100));
      }),
    [smoothProgress],
  );

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[70] hidden h-16 w-16 place-items-center rounded-full bg-[var(--dd-card)] shadow-[0_16px_46px_rgba(0,0,0,.16)] backdrop-blur-xl sm:grid">
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="var(--dd-line)"
          strokeWidth="2"
        />
        <motion.circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="var(--dd-teal)"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength="1"
          style={{ pathLength: smoothProgress }}
        />
      </svg>
      <span className="text-[10px] font-bold text-[var(--dd-teal)]">
        {percentage}%
      </span>
    </div>
  );
}

function FloatingActions() {
  return (
    <>
      <Link
        to="/contact"
        aria-label="Contact DIGIDOC team"
        className="fixed left-0 top-[46%] z-[65] grid h-14 w-12 place-items-center rounded-r-2xl bg-[var(--dd-teal)] text-white shadow-[0_16px_38px_rgba(21,149,150,.32)] hover:w-14"
      >
        <Mail className="h-5 w-5" />
      </Link>

      <Link
        to="/contact"
        aria-label="Start a DIGIDOC conversation"
        className="fixed bottom-5 left-5 z-[65] grid h-14 w-14 place-items-center rounded-full border-4 border-white/80 bg-[#24d366] text-white shadow-[0_18px_38px_rgba(36,211,102,.3)] hover:-translate-y-1 hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </Link>
    </>
  );
}

function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="dd-noise relative isolate overflow-hidden bg-[var(--dd-bg)] lg:h-[calc(100svh-72px)] lg:min-h-[620px] lg:max-h-[820px]">
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--dd-panel)_0%,transparent_46%)] opacity-55" />

        <motion.div
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          className="absolute -right-60 -top-64 h-[620px] w-[620px] rounded-full border border-dashed border-[var(--dd-line-strong)] opacity-70"
        />

        <div className="absolute -bottom-40 -left-40 h-[420px] w-[560px] rounded-[50%] bg-[var(--dd-panel)] opacity-65" />
      </div>

      <div className="dd-container grid h-full items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:py-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="relative z-10 min-w-0"
        >
          <motion.div
            variants={reveal}
            className="mb-5 inline-flex items-center border-l-4 border-[var(--dd-teal)] pl-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--dd-teal)] sm:text-xs"
          >
            Intelligent Document Management
          </motion.div>

          <motion.h1
            variants={reveal}
            className="max-w-[760px] font-sans text-[clamp(3.35rem,6.15vw,6.15rem)] font-medium leading-[0.98] tracking-[-0.065em] text-[var(--dd-title)]"
          >
            Take control of every document
            <span className="block text-[var(--dd-teal)]">
              from capture to archive.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-5 max-w-[620px] text-base leading-7 text-[var(--dd-body)] sm:text-[1.05rem]"
          >
            DIGIDOC centralizes records, automates approvals and protects
            electronic contracts so teams can work faster without scattered files.
          </motion.p>

          <motion.div
            variants={reveal}
            className="relative z-20 mt-7 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center justify-center gap-3 bg-[var(--dd-teal)] px-6 font-semibold text-white shadow-[0_18px_45px_rgba(21,149,150,.28)] hover:-translate-y-1 hover:bg-[var(--dd-teal-deep)]"
            >
              Get Started Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#solutions"
              className="group inline-flex h-12 items-center justify-center gap-3 border border-[var(--dd-line-strong)] bg-[var(--dd-card-solid)] px-6 font-semibold text-[var(--dd-title)] shadow-[0_12px_32px_rgba(0,0,0,.08)] hover:-translate-y-1"
            >
              Discover Solutions
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 42 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[310px] sm:min-h-[410px] lg:h-[68%] lg:min-h-[430px] lg:max-h-[520px]"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full overflow-hidden rounded-[38px] border border-[var(--dd-line)] bg-[var(--dd-card-solid)] p-2 shadow-[var(--dd-shadow)] sm:p-3"
          >
            <div className="relative h-full overflow-hidden rounded-[30px] bg-[#071519]">
              <img
                src="https://www.digidoccloud.com/assets/img/service/archivingneon-resize_11zon.png"
                alt="DIGIDOC document management environment"
                className="dd-image h-full w-full object-cover object-[center_48%]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_45%,rgba(21,149,150,.16)_100%)]" />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-black/35 px-4 py-3 text-white backdrop-blur-md">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                    Secure workflow
                  </p>
                  <p className="mt-1 text-sm font-semibold sm:text-base">
                    Capture. Approve. Archive.
                  </p>
                </div>

                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--dd-teal)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="relative border-y border-[var(--dd-line)] bg-[var(--dd-bg)] py-16">
      <div className="dd-container">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="dd-serif text-center text-2xl font-semibold uppercase tracking-[-0.02em] text-[var(--dd-title)] sm:text-4xl"
        >
          Built for document-heavy organizations
        </motion.h2>

        <div className="mt-11 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group flex min-h-28 flex-col items-center justify-center gap-3 border border-[var(--dd-line)] bg-[var(--dd-card)] text-center"
              >
                <Icon className="h-7 w-7 text-[var(--dd-teal)] transition-transform group-hover:scale-110" />
                <span className="text-sm font-semibold text-[var(--dd-text)]">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative bg-[var(--dd-bg)] py-24 sm:py-32">
      <div className="dd-container grid items-center gap-14 lg:grid-cols-[1.03fr_.97fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="relative min-h-[520px]"
        >
          <div className="absolute left-0 top-0 h-[84%] w-[78%] overflow-hidden">
            <img
              src="https://www.digidoccloud.com/assets/img/service/GoldS.png"
              alt="DIGIDOC electronic contract solution"
              className="dd-image h-full w-full object-cover"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 h-[58%] w-[58%] overflow-hidden border-[10px] border-[var(--dd-bg)] shadow-[var(--dd-shadow)]"
          >
            <img
              src="https://www.digidoccloud.com/assets/img/service/workflowneon-resized_11zon.png"
              alt="DIGIDOC workflow automation"
              className="dd-image h-full w-full object-cover"
            />
          </motion.div>

          <div className="absolute bottom-8 left-8 bg-[var(--dd-teal)] px-7 py-6 text-white shadow-[0_22px_60px_rgba(21,149,150,.3)]">
            <p className="dd-serif text-4xl font-semibold">3</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[.18em] text-white/80">
              Core solutions
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
        >
          <SectionTag>About DIGIDOC</SectionTag>
          <h2 className="dd-serif mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-[var(--dd-title)] sm:text-5xl">
            One secure platform for modern document operations.
          </h2>
          <p className="mt-7 text-base leading-8 text-[var(--dd-body)]">
            DIGIDOC is designed as a connected environment for document
            archiving, process automation and electronic contracts. It helps
            organizations replace fragmented folders and manual paperwork with
            structured, traceable and accessible digital operations.
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--dd-body)]">
            From first capture to final retention, every important action can be
            controlled, searched and reviewed from one place.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {[
              ["Search in seconds", FileSearch],
              ["Automate approvals", Workflow],
              ["Protect information", ShieldCheck],
              ["Track every action", History],
            ].map(([label, Icon]) => {
              const ItemIcon = Icon as IconComponent;
              return (
                <div key={label as string} className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--dd-teal-soft)] text-[var(--dd-teal)]">
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-[var(--dd-text)]">
                    {label as string}
                  </span>
                </div>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center gap-3 border-b-2 border-[var(--dd-teal)] pb-2 font-bold text-[var(--dd-title)]"
          >
            Talk to our DIGIDOC team
            <ArrowRight className="h-4 w-4 text-[var(--dd-teal)] transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionsIntro() {
  return (
    <section
      id="solutions"
      className="dd-section-line relative bg-[var(--dd-bg-soft)] py-24 sm:py-32"
    >
      <div className="dd-container grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <SectionTag>Solutions</SectionTag>
          <h2 className="dd-serif mt-5 text-5xl font-semibold uppercase leading-[.96] tracking-[-0.05em] text-[var(--dd-title)] sm:text-6xl lg:text-7xl">
            DIGIDOC:
            <span className="block text-[var(--dd-teal)]">Ultimate</span>
            Archiving & Workflow
          </h2>
          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-3 bg-[var(--dd-teal)] px-6 py-4 font-semibold text-white hover:-translate-y-1 hover:bg-[var(--dd-teal-deep)]"
          >
            View all solutions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {solutions.slice(0, 2).map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.article
                key={solution.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -10 }}
                className="group border border-[var(--dd-line)] bg-[var(--dd-card-solid)] p-6 shadow-[var(--dd-shadow)]"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-9 w-9 text-[var(--dd-teal)]" />
                  <span className="dd-serif text-5xl font-semibold text-[var(--dd-teal)]/45">
                    {solution.code}
                  </span>
                </div>
                <h3 className="dd-serif mt-7 text-2xl font-semibold text-[var(--dd-title)]">
                  {solution.title}
                </h3>
                <div className="mt-6 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="dd-image h-44 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SolutionPreview() {
  return (
    <section className="relative bg-[var(--dd-bg)] py-28 sm:py-36">
      <div className="dd-container">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTag centered>Solution Preview</SectionTag>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="dd-serif mt-6 text-5xl font-semibold uppercase leading-[.98] tracking-[-0.05em] text-[var(--dd-title)] sm:text-6xl"
          >
            Discover three connected ways to go paperless
          </motion.h2>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.shortTitle}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
                className="group relative min-h-[410px] overflow-hidden border border-[var(--dd-line)] bg-[var(--dd-card-solid)] p-8"
              >
                <motion.div
                  variants={{ hover: { y: "0%" } }}
                  initial={{ y: index === 1 ? "0%" : "102%" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-[var(--dd-teal)]"
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className={`text-xs font-bold uppercase tracking-[.2em] ${index === 1 ? "text-white/70" : "text-[var(--dd-teal)] group-hover:text-white/70"}`}>
                      {solution.shortTitle}
                    </span>
                    <Icon
                      className={`h-8 w-8 ${index === 1 ? "text-white" : "text-[var(--dd-teal)] group-hover:text-white"}`}
                    />
                  </div>

                  <h3
                    className={`dd-serif mt-14 text-3xl font-semibold leading-tight ${index === 1 ? "text-white" : "text-[var(--dd-title)] group-hover:text-white"}`}
                  >
                    {solution.title}
                  </h3>

                  <p
                    className={`mt-5 leading-7 ${index === 1 ? "text-white/76" : "text-[var(--dd-body)] group-hover:text-white/76"}`}
                  >
                    {solution.text}
                  </p>

                  <div className="mt-auto pt-9">
                    {solution.points.map((point) => (
                      <div
                        key={point}
                        className={`mb-3 flex items-center gap-3 text-sm font-medium ${index === 1 ? "text-white" : "text-[var(--dd-text)] group-hover:text-white"}`}
                      >
                        <CircleCheckBig className="h-4 w-4" />
                        {point}
                      </div>
                    ))}
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
    <section className="dd-grid-pattern relative bg-[var(--dd-bg-soft)] py-24 sm:py-32">
      <div className="absolute inset-0 bg-[var(--dd-overlay)]" />
      <div className="dd-container relative">
        <SectionHeading
          eyebrow="Document Lifecycle"
          title="One controlled digital journey for every document"
          description="Capture, index, approve, sign and archive documents without losing visibility, ownership or accountability."
        />

        <div className="relative mt-16">
          <div className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[var(--dd-teal)] to-transparent lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[8%] right-[8%] top-10 hidden h-px origin-left bg-[var(--dd-teal)] lg:block"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {lifecycle.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.09 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="dd-card relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full text-[var(--dd-teal)]"
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  <p className="mt-5 font-bold text-[var(--dd-title)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-[var(--dd-muted)]">
                    {item.detail}
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

function DashboardShowcase() {
  return (
    <section className="relative overflow-hidden bg-[var(--dd-bg)] py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-[18%] h-[64%] w-[34%] bg-[var(--dd-teal)] [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%,0_45%)]" />

      <div className="dd-container relative grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="dd-card relative overflow-hidden p-4 sm:p-6"
        >
          <div className="rounded-2xl border border-[var(--dd-line)] bg-[var(--dd-bg-soft)] p-4 sm:p-5">
            <div className="flex items-center justify-between border-b border-[var(--dd-line)] pb-4">
              <div>
                <p className="text-xs text-[var(--dd-muted)]">Welcome back</p>
                <p className="font-bold text-[var(--dd-title)]">
                  Document Control Center
                </p>
              </div>
              <div className="flex gap-2">
                {[0, 1, 2].map((item) => (
                  <span
                    key={item}
                    className="h-2.5 w-2.5 rounded-full bg-[var(--dd-line-strong)]"
                  />
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["184", "Uploaded", UploadCloud],
                ["53", "In review", FileClock],
                ["33", "Approved", FileCheck2],
                ["84", "Archived", Archive],
              ].map(([value, label, Icon], index) => {
                const ItemIcon = Icon as IconComponent;
                return (
                  <motion.div
                    key={label as string}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .15 + index * .08 }}
                    className="rounded-xl border border-[var(--dd-line)] bg-[var(--dd-card-solid)] p-4"
                  >
                    <div className="flex items-center justify-between">
                      <ItemIcon className="h-5 w-5 text-[var(--dd-teal)]" />
                      <span className="text-[10px] text-[var(--dd-muted)]">
                        +{8 + index * 3}%
                      </span>
                    </div>
                    <p className="dd-serif mt-5 text-3xl font-semibold text-[var(--dd-title)]">
                      {value as string}
                    </p>
                    <p className="mt-1 text-xs text-[var(--dd-muted)]">
                      {label as string}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
              <div className="rounded-xl border border-[var(--dd-line)] bg-[var(--dd-card-solid)] p-5">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-[var(--dd-title)]">
                    Monthly workflow activity
                  </p>
                  <span className="text-xs text-[var(--dd-muted)]">6 months</span>
                </div>
                <div className="mt-8 flex h-44 items-end gap-3">
                  {[45, 64, 52, 78, 68, 92, 75, 100, 86, 116, 102, 132].map(
                    (height, index) => (
                      <motion.div
                        key={`${height}-${index}`}
                        initial={{ height: 0 }}
                        whileInView={{ height }}
                        viewport={{ once: true }}
                        transition={{ delay: .25 + index * .04, duration: .6 }}
                        className="min-w-0 flex-1 rounded-t-sm bg-[var(--dd-teal)]/80"
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-[var(--dd-line)] bg-[var(--dd-card-solid)] p-5">
                <p className="font-bold text-[var(--dd-title)]">Recent files</p>
                <div className="mt-5 space-y-4">
                  {[
                    ["Invoice-1048.pdf", "Review"],
                    ["Contract-2026.pdf", "Approved"],
                    ["Project-report.pdf", "Archived"],
                    ["Employee-records", "Secure"],
                  ].map(([name, status]) => (
                    <div key={name} className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <Files className="h-4 w-4 shrink-0 text-[var(--dd-teal)]" />
                        <span className="truncate text-xs text-[var(--dd-text)]">
                          {name}
                        </span>
                      </div>
                      <span className="text-[9px] text-[var(--dd-muted)]">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-5 top-1/2 hidden w-52 -translate-y-1/2 rounded-2xl bg-[var(--dd-teal)] p-5 text-white shadow-[0_25px_60px_rgba(21,149,150,.32)] md:block"
          >
            <p className="text-xs text-white/70">Created Date</p>
            <p className="mt-2 text-sm font-semibold">8/22/2026 4:18 PM</p>
            <div className="mt-5 h-px bg-white/25" />
            <p className="mt-4 text-xs text-white/70">Document status</p>
            <p className="mt-2 flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="h-4 w-4" /> Approved
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 lg:pl-8"
        >
          <SectionTag>Real-time Visibility</SectionTag>
          <h2 className="dd-serif mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--dd-title)] sm:text-5xl">
            See documents, tasks and approvals as they move.
          </h2>
          <p className="mt-6 leading-8 text-[var(--dd-body)]">
            Give teams a clear operational view of document status, ownership,
            activity and deadlines without switching between disconnected tools.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Live workflow status",
              "Document-level audit history",
              "Searchable repository insights",
              "Actionable team dashboards",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[var(--dd-teal)]" />
                <span className="font-semibold text-[var(--dd-text)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyDigidocSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[var(--dd-bg-soft)] py-24 sm:py-32">
      <div className="dd-container grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTag>Why DIGIDOC</SectionTag>
          <h2 className="dd-serif mt-5 text-6xl font-semibold uppercase leading-[.9] tracking-[-0.06em] text-[var(--dd-title)] sm:text-7xl lg:text-[7.2rem]">
            DIGIDOC?
          </h2>
          <p className="mt-7 max-w-md leading-8 text-[var(--dd-body)]">
            Replace document chaos with a structured digital environment that
            improves control, visibility and speed across the organization.
          </p>
        </div>

        <div className="border-t border-[var(--dd-line)]">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const open = activeIndex === index;

            return (
              <div key={benefit.title} className="border-b border-[var(--dd-line)]">
                <button
                  type="button"
                  onClick={() => setActiveIndex(open ? -1 : index)}
                  className="group flex w-full items-center gap-4 py-5 text-left"
                >
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center ${
                      open
                        ? "bg-[var(--dd-teal)] text-white"
                        : "bg-[var(--dd-card-solid)] text-[var(--dd-teal)]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="flex-1 font-semibold text-[var(--dd-title)]">
                    {benefit.title}
                  </span>
                  <div className="grid h-12 w-12 place-items-center bg-[var(--dd-teal)] text-white">
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pl-16 leading-7 text-[var(--dd-body)] sm:pl-20">
                        {benefit.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[var(--dd-bg)] py-24 sm:py-32">
      <div className="dd-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <SectionTag>Frequently Asked Questions</SectionTag>
          <h2 className="dd-serif mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--dd-title)] sm:text-5xl">
            Clear answers before your DIGIDOC project begins.
          </h2>
          <p className="mt-6 max-w-md leading-8 text-[var(--dd-body)]">
            Understand digitization, approvals, electronic contracts and access
            control before planning your implementation.
          </p>
        </div>

        <div className="border-t border-[var(--dd-line)]">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="border-b border-[var(--dd-line)]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center gap-5 py-6 text-left"
      >
        <span className="dd-serif text-sm font-semibold text-[var(--dd-teal)]">
          0{index + 1}
        </span>
        <span className="flex-1 text-lg font-semibold text-[var(--dd-title)]">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[var(--dd-teal)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .35 }}
            className="overflow-hidden"
          >
            <p className="pb-7 pl-9 leading-8 text-[var(--dd-body)]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--dd-bg-soft)] py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-dashed border-[var(--dd-line-strong)]" />
      <div className="dd-container">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden bg-[var(--dd-teal)] px-7 py-16 text-white sm:px-14 sm:py-20 lg:px-20"
        >
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://www.digidoccloud.com/assets/img/service/workflowneon-resized_11zon.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,84,86,.96),rgba(21,149,150,.82),rgba(21,149,150,.48))]" />

          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-white/70">
                DIGIDOC Consultation
              </p>
              <h2 className="dd-serif mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl">
                Build a secure paperless workplace around your real processes.
              </h2>
              <p className="mt-6 max-w-2xl leading-8 text-white/78">
                We will review your archiving, approval, contract and access
                requirements before recommending a practical implementation plan.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex min-h-16 items-center gap-4 bg-white px-8 font-bold text-[#0e7779] shadow-[0_18px_50px_rgba(0,0,0,.16)] hover:-translate-y-1"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTag({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[var(--dd-teal)] ${centered ? "justify-center" : ""}`}
    >
      <span className="h-px w-8 bg-[var(--dd-teal)]" />
      {children}
      {centered && <span className="h-px w-8 bg-[var(--dd-teal)]" />}
    </motion.div>
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto max-w-4xl text-center"
    >
      <SectionTag centered>{eyebrow}</SectionTag>
      <h2 className="dd-serif mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-[var(--dd-title)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl leading-8 text-[var(--dd-body)]">
        {description}
      </p>
    </motion.div>
  );
}