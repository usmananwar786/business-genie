import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import * as IconComponents from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

type IconComponent = ComponentType<{ className?: string }>;

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
const CheckCircle2 = getIcon("CheckCircle2");
const ChevronDown = getIcon("ChevronDown");
const FileCheck2 = getIcon("FileCheck2");
const FileClock = getIcon("FileClock");
const FileLock2 = getIcon("FileLock2");
const FileSearch = getIcon("FileSearch");
const FileSignature = getIcon("FileSignature");
const Files = getIcon("Files");
const FolderArchive = getIcon("FolderArchive");
const History = getIcon("History");
const KeyRound = getIcon("KeyRound");
const LockKeyhole = getIcon("LockKeyhole");
const ScanLine = getIcon("ScanLine");
const Search = getIcon("Search");
const ShieldCheck = getIcon("ShieldCheck");
const Sparkles = getIcon("Sparkles");
const UploadCloud = getIcon("UploadCloud");
const Workflow = getIcon("Workflow");

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


type ThemeMode = "light" | "dark";

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
  text: string;
  image: string;
}> = [
  {
    code: "DAS",
    icon: FolderArchive,
    title: "Document Archiving Solution",
    text: "Digitize old and new records, organize them through structured indexes and keep business documents accessible for long-term use.",
    image:
      "https://www.digidoccloud.com/assets/img/service/archivingneon-resize_11zon.png",
  },
  {
    code: "DWS",
    icon: Workflow,
    title: "Document Workflow Solution",
    text: "Move documents through reviews, approvals, assignments and controlled business workflows without relying on physical paperwork.",
    image:
      "https://www.digidoccloud.com/assets/img/service/workflowneon-resized_11zon.png",
  },
  {
    code: "ECS",
    icon: FileSignature,
    title: "Electronic Contract Solution",
    text: "Create, route, approve and retain electronic agreements through a more secure and traceable contract lifecycle.",
    image:
      "https://www.digidoccloud.com/assets/img/service/GoldS.png",
  },
];

const lifecycle = [
  { icon: ScanLine, label: "Capture" },
  { icon: UploadCloud, label: "Upload" },
  { icon: FileSearch, label: "Index" },
  { icon: Workflow, label: "Approve" },
  { icon: FileSignature, label: "Sign" },
  { icon: Archive, label: "Archive" },
];

const benefits = [
  "Centralized document control",
  "Faster document retrieval",
  "Reduced physical paperwork",
  "Structured approval workflows",
  "Controlled user permissions",
  "Complete activity and audit history",
];

const faqs = [
  {
    question: "What are the main DIGIDOC solutions?",
    answer:
      "DIGIDOC includes Document Archiving Solution, Document Workflow Solution and Electronic Contract Solution. Additional capabilities can include digital signatures, secure storage and integrations.",
  },
  {
    question: "Can existing physical records be digitized?",
    answer:
      "Yes. Existing paper documents can be scanned, indexed and organized into searchable digital records according to your document structure.",
  },
  {
    question: "Can document approvals be automated?",
    answer:
      "Yes. Documents can move through structured review, approval, assignment and escalation workflows based on business rules.",
  },
  {
    question: "Can access be controlled by user or department?",
    answer:
      "Yes. Access can be configured by user role, department, document category and process responsibility.",
  },
];

function parseCssRgb(value: string) {
  const match = value.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;

  const values = match[1]
    .split(",")
    .map((item) => Number(item.trim().replace("/", "")));

  if (values.length < 3 || values.some(Number.isNaN)) return null;

  return {
    r: values[0],
    g: values[1],
    b: values[2],
    a: values[3] ?? 1,
  };
}

function isDarkColor(value: string) {
  const rgb = parseCssRgb(value);
  if (!rgb || rgb.a < 0.1) return false;

  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 < 90;
}

function headerLooksDark() {
  if (typeof window === "undefined") return false;

  return ["header", "nav", "[data-header]", ".site-header", ".navbar"]
    .flatMap((selector) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector)),
    )
    .slice(0, 12)
    .some((element) => {
      const classText = String(element.className || "").toLowerCase();

      if (
        classText.includes("bg-black") ||
        classText.includes("dark") ||
        classText.includes("night")
      ) {
        return true;
      }

      const style = window.getComputedStyle(element);

      return (
        isDarkColor(style.backgroundColor) ||
        isDarkColor(style.borderColor)
      );
    });
}

function readThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const html = document.documentElement;
  const body = document.body;

  const attrText = [
    html.className,
    body.className,
    html.getAttribute("data-theme"),
    html.getAttribute("data-mode"),
    body.getAttribute("data-theme"),
    body.getAttribute("data-mode"),
    document.querySelector("#root")?.getAttribute("class"),
    document.querySelector("#root")?.getAttribute("data-theme"),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  let storageText = "";

  try {
    storageText = THEME_KEYS
      .map((key) => window.localStorage.getItem(key) || "")
      .join(" ")
      .toLowerCase();
  } catch {
    storageText = "";
  }

  const themeText = `${attrText} ${storageText}`;

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
      attributeFilter: ["class", "style", "data-theme", "data-mode"],
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["class", "style", "data-theme", "data-mode"],
    });

    const interval = window.setInterval(update, 250);
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

function Digidoc() {
  const theme = useThemeMode();

  return (
    <SiteLayout>
      <div
        className={`dd-wrap ${theme === "dark" ? "dark" : ""}`}
        data-dd-theme={theme}
      >
        <ThemeStyles />

        <main className="dd-page min-h-screen overflow-hidden bg-[var(--dd-bg)] text-[var(--dd-text)] selection:bg-[#28C7D0] selection:text-[#10364A]">
          <HeroSection />
          <DocumentTicker />
          <SolutionsSection />
          <DocumentJourney />
          <SecuritySection />
          <SearchExperience />
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
      .dd-wrap {
        color-scheme: light;
        background: #f3f8f8;
      }

      .dd-wrap[data-dd-theme="dark"] {
        color-scheme: dark;
        background: #020708;
      }

      .dd-wrap[data-dd-theme="light"] .dd-page {
        --dd-bg: #f3f8f8;
        --dd-alt: #e6f1f1;
        --dd-card: rgba(255,255,255,.96);
        --dd-card-soft: rgba(255,255,255,.84);
        --dd-title: #10364a;
        --dd-text: #294f58;
        --dd-body: #52717a;
        --dd-muted: #789099;
        --dd-border: rgba(5,140,146,.17);
        --dd-border-strong: rgba(5,140,146,.32);
        --dd-overlay: rgba(243,248,248,.93);
        --dd-shadow: 0 22px 65px rgba(4,101,106,.12);
      }

      .dd-wrap[data-dd-theme="dark"] .dd-page {
        --dd-bg: #020708;
        --dd-alt: #071012;
        --dd-card: rgba(10,21,24,.96);
        --dd-card-soft: rgba(7,16,18,.90);
        --dd-title: #f7ffff;
        --dd-text: #e6f6f7;
        --dd-body: #c8dddd;
        --dd-muted: rgba(188,215,217,.72);
        --dd-border: rgba(255,255,255,.11);
        --dd-border-strong: rgba(40,199,208,.35);
        --dd-overlay: rgba(2,7,8,.94);
        --dd-shadow: 0 28px 80px rgba(0,0,0,.52);
      }

      .dd-container {
        width: min(1240px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .dd-card {
        background: var(--dd-card);
        border: 1px solid var(--dd-border);
        box-shadow: var(--dd-shadow);
      }

      .dd-glass {
        background: var(--dd-card-soft);
        border: 1px solid var(--dd-border);
        box-shadow: var(--dd-shadow);
        backdrop-filter: blur(24px);
      }

      .dd-wrap[data-dd-theme="light"] .dd-alt {
        background: #e6f1f1 !important;
      }

      .dd-wrap[data-dd-theme="dark"] .dd-alt {
        background: #071012 !important;
      }

      .dd-wrap[data-dd-theme="light"] img {
        filter: brightness(.97) saturate(.94);
      }

      .dd-wrap[data-dd-theme="dark"] img {
        filter: brightness(.7) saturate(.9) contrast(1.08);
      }

      .dd-page,
      .dd-page * {
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
    <section className="relative isolate min-h-[96vh] overflow-hidden bg-[var(--dd-bg)] pt-28">
      <div className="absolute inset-0 -z-30">
        <img
          src="https://www.digidoccloud.com/assets/img/service/archivingneon-resize_11zon.png"
          alt="DIGIDOC digital document archiving"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--dd-overlay)_0%,var(--dd-overlay)_48%,rgba(1,20,24,.34)_100%)]" />
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -right-24 top-20 -z-10 h-[34rem] w-[34rem] rounded-full border border-dashed border-[#28C7D0]/26"
      />

      <div className="dd-container grid min-h-[80vh] items-center gap-14 lg:grid-cols-[.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://www.digidoccloud.com/assets/img/logo/DigidLogo.png"
            alt="DIGIDOC logo"
            className="mb-8 h-16 w-auto object-contain"
          />

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--dd-border-strong)] bg-[var(--dd-card-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#058C92] backdrop-blur-xl">
            <Files className="h-4 w-4" />
            Paperless Document Management
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--dd-title)] sm:text-5xl lg:text-7xl">
            Control every document
            <span className="block text-[#058C92]">
              from capture to archive
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--dd-body)] sm:text-lg">
            DIGIDOC brings document archiving, workflow automation, electronic
            contracts, secure access and searchable records into one digital
            document environment.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#058C92] px-7 py-3.5 font-semibold text-white shadow-[0_18px_50px_rgba(5,140,146,.28)] transition hover:-translate-y-1 hover:bg-[#04656A]"
            >
              Start DIGIDOC Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--dd-border-strong)] bg-[var(--dd-card-soft)] px-7 py-3.5 font-semibold text-[var(--dd-title)] backdrop-blur-xl transition hover:-translate-y-1"
            >
              Explore Solutions
            </a>
          </div>
        </motion.div>

        <DocumentStage />
      </div>
    </section>
  );
}

function DocumentStage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 42 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15, duration: 0.9 }}
      className="relative min-h-[620px]"
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="dd-glass absolute left-4 top-10 w-[72%] rounded-[2.4rem] p-5"
      >
        <div className="rounded-[1.8rem] bg-[var(--dd-card)] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--dd-muted)]">
                Document Repository
              </p>
              <h2 className="mt-1 text-xl font-semibold text-[var(--dd-title)]">
                Active files
              </h2>
            </div>
            <FolderArchive className="h-6 w-6 text-[#058C92]" />
          </div>

          <div className="mt-6 space-y-3">
            {[
              ["Contract-2026.pdf", "Approved", FileCheck2],
              ["Invoice-1048.pdf", "In Review", FileClock],
              ["Employee-Records", "Secured", FileLock2],
              ["Project-Archive", "Archived", Archive],
            ].map(([name, status, Icon], index) => {
              const ItemIcon = Icon as IconComponent;

              return (
                <motion.div
                  key={name as string}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.09 }}
                  className="flex items-center justify-between rounded-2xl border border-[var(--dd-border)] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <ItemIcon className="h-5 w-5 text-[#058C92]" />
                    <span className="text-sm font-medium text-[var(--dd-text)]">
                      {name as string}
                    </span>
                  </div>
                  <span className="text-xs text-[var(--dd-muted)]">
                    {status as string}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="dd-glass absolute bottom-8 right-0 w-[58%] rounded-[2.2rem] p-5"
      >
        <div className="flex items-center justify-between">
          <Workflow className="h-6 w-6 text-[#28C7D0]" />
          <span className="text-xs text-[var(--dd-muted)]">Workflow</span>
        </div>

        <div className="mt-5 space-y-4">
          {["Upload", "Review", "Approve", "Archive"].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[#058C92] text-xs font-semibold text-white">
                {index + 1}
              </div>
              <span className="text-sm font-medium text-[var(--dd-title)]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function DocumentTicker() {
  const items = [
    "Secure Archiving",
    "Workflow Automation",
    "Electronic Contracts",
    "Digital Signatures",
    "Document Search",
    "Audit Trails",
    "Role-Based Access",
    "Paperless Operations",
  ];

  return (
    <section className="overflow-hidden bg-[#058C92] py-5 text-white">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-10 whitespace-nowrap"
      >
        {[...items, ...items].map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-[#8BE9ED]" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em]">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="bg-[var(--dd-bg)] py-24">
      <div className="dd-container">
        <SectionHeading
          eyebrow="DIGIDOC Solutions"
          title="Three focused solutions for a complete paperless workplace"
          description="Archive records, automate document movement and manage electronic contracts through one connected platform."
        />

        <div className="mt-16 space-y-24">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const reverse = index % 2 === 1;

            return (
              <article
                key={solution.code}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 32 : -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7 }}
                  className="relative overflow-hidden rounded-[2.5rem]"
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-[520px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031518]/76 via-transparent to-transparent" />

                  <div className="dd-glass absolute bottom-6 left-6 right-6 rounded-3xl p-5">
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#058C92] text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[var(--dd-muted)]">
                          {solution.code}
                        </p>
                        <p className="mt-1 font-semibold text-[var(--dd-title)]">
                          {solution.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reverse ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7 }}
                  className="lg:px-8"
                >
                  <div className="text-7xl font-semibold tracking-[-0.06em] text-[#058C92]/14">
                    {solution.code}
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--dd-title)] sm:text-4xl">
                    {solution.title}
                  </h3>

                  <p className="mt-6 text-base leading-8 text-[var(--dd-muted)]">
                    {solution.text}
                  </p>

                  <div className="mt-8 space-y-4">
                    {[
                      "Centralized control",
                      "Searchable records",
                      "Secure access",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#058C92]" />
                        <span className="font-medium text-[var(--dd-text)]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DocumentJourney() {
  return (
    <section className="dd-alt bg-[var(--dd-alt)] py-24">
      <div className="dd-container">
        <SectionHeading
          eyebrow="Document Lifecycle"
          title="Every document moves through one controlled digital journey"
          description="Capture, index, approve, sign and archive documents without losing visibility or accountability."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-[#058C92] via-[#28C7D0] to-[#058C92] lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {lifecycle.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.08 }}
                    className="dd-card relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full"
                  >
                    <Icon className="h-7 w-7 text-[#058C92]" />
                  </motion.div>

                  <p className="mt-5 font-semibold text-[var(--dd-title)]">
                    {item.label}
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

function SecuritySection() {
  return (
    <section className="bg-[var(--dd-bg)] py-24">
      <div className="dd-container grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <div className="relative min-h-[620px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#058C92]/24"
          />

          <div className="dd-glass absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full">
            <ShieldCheck className="h-12 w-12 text-[#058C92]" />
          </div>

          {[
            { left: "8%", top: "16%", label: "Encryption", icon: FileLock2 },
            { left: "67%", top: "14%", label: "Permissions", icon: KeyRound },
            { left: "7%", top: "68%", label: "Audit Trail", icon: History },
            { left: "69%", top: "68%", label: "Secure Access", icon: LockKeyhole },
          ].map((node, index) => {
            const Icon = node.icon;

            return (
              <motion.div
                key={node.label}
                animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="dd-glass absolute w-44 rounded-3xl p-5 text-center"
                style={{ left: node.left, top: node.top }}
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#058C92] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-semibold text-[var(--dd-title)]">
                  {node.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div>
          <SectionHeading
            eyebrow="Document Security"
            title="Protect sensitive information without slowing down access"
            description="Control document visibility, permissions and actions while maintaining a clear record of every important activity."
            align="left"
          />

          <div className="mt-9 space-y-5">
            {[
              "Role-based document access",
              "Complete activity history",
              "Secure document categories",
              "Controlled sharing and approvals",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#058C92]/12 text-[#058C92]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="font-medium text-[var(--dd-text)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchExperience() {
  return (
    <section className="dd-alt bg-[var(--dd-alt)] py-24">
      <div className="dd-container grid items-center gap-14 lg:grid-cols-[.88fr_1.12fr]">
        <div>
          <SectionHeading
            eyebrow="Search & Retrieval"
            title="Find the right document in seconds, not hours"
            description="Use structured indexes, categories, metadata and search tools to locate documents without searching through physical files or disconnected folders."
            align="left"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="dd-glass rounded-[2rem] p-6"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--dd-border)] bg-[var(--dd-card)] px-4 py-4">
            <Search className="h-5 w-5 text-[#058C92]" />
            <span className="text-sm text-[var(--dd-muted)]">
              Search contracts, invoices, employee records...
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {[
              ["Employment Contract", "HR / Contracts", "Modified today"],
              ["Supplier Agreement", "Procurement", "Modified yesterday"],
              ["Invoice 1048", "Finance", "Archived"],
              ["Project Completion Report", "Projects", "Approved"],
            ].map(([name, category, status], index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="flex flex-col gap-3 rounded-2xl border border-[var(--dd-border)] bg-[var(--dd-card)] p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-[var(--dd-title)]">{name}</p>
                  <p className="mt-1 text-xs text-[var(--dd-muted)]">
                    {category}
                  </p>
                </div>
                <span className="text-xs font-medium text-[#058C92]">
                  {status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-[var(--dd-bg)] py-24">
      <div className="dd-container grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <SectionHeading
            eyebrow="Business Outcomes"
            title="A cleaner, faster and more controlled document environment"
            description="DIGIDOC helps reduce paperwork while improving document visibility, security and process consistency."
            align="left"
          />

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#058C92] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#04656A]"
          >
            Discuss Your DIGIDOC Requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="border-b border-[var(--dd-border)] pb-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#058C92]/12 text-[#058C92]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-lg leading-7 text-[var(--dd-body)]">
                  {benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="dd-alt bg-[var(--dd-alt)] py-24">
      <div className="dd-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Clear answers before your DIGIDOC project begins"
          description="Understand archiving, workflows, electronic contracts, digitization and access control."
          align="left"
        />

        <div className="space-y-2">
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
    <div className="border-b border-[var(--dd-border)]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 py-6 text-left"
      >
        <span className="text-lg font-semibold text-[var(--dd-title)]">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#058C92] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 leading-7 text-[var(--dd-muted)]">{answer}</p>
      </motion.div>
    </div>
  );
}

function CtaSection() {
  return (
    <section className="bg-[var(--dd-bg)] py-24">
      <div className="dd-container">
        <div className="relative overflow-hidden rounded-[3rem]">
          <img
            src="https://www.digidoccloud.com/assets/img/service/workflowneon-resized_11zon.png"
            alt="DIGIDOC workflow automation"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,25,29,.97)_0%,rgba(5,140,146,.88)_55%,rgba(40,199,208,.44)_100%)]" />

          <div className="relative max-w-4xl p-8 text-white sm:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/68">
              DIGIDOC Consultation
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Build a secure paperless workplace around your document process
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78">
              We will review your archiving, approval, contract and document
              access requirements before recommending a practical DIGIDOC
              implementation plan.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#04656A] transition hover:-translate-y-1 hover:bg-[#EAFBFC]"
            >
              Start Your DIGIDOC Project
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
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#058C92] ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>

      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--dd-title)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-[var(--dd-muted)]">
        {description}
      </p>
    </motion.div>
  );
}