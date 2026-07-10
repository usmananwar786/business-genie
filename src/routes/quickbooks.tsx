import { createFileRoute, Link } from "@tanstack/react-router";
import {
  useEffect,
  useMemo,
  useState,
  type ComponentType,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

type AppIcon = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

const iconLibrary = LucideIcons as unknown as Record<
  string,
  AppIcon | undefined
>;

const EmptyIcon: AppIcon = () => null;
const fallbackIcon =
  iconLibrary.Circle ?? iconLibrary.Square ?? iconLibrary.File ?? EmptyIcon;

const getIcon = (name: string): AppIcon => iconLibrary[name] ?? fallbackIcon;

const ArrowRight = getIcon("ArrowRight");
const ArrowUpRight = getIcon("ArrowUpRight");
const BadgeCheck = getIcon("BadgeCheck");
const Banknote = getIcon("Banknote");
const BarChart3 = getIcon("BarChart3");
const BellRing = getIcon("BellRing");
const Boxes = getIcon("Boxes");
const BriefcaseBusiness = getIcon("BriefcaseBusiness");
const Calculator = getIcon("Calculator");
const Check = getIcon("Check");
const ChevronDown = getIcon("ChevronDown");
const CircleDollarSign = getIcon("CircleDollarSign");
const Clock3 = getIcon("Clock3");
const CreditCard = getIcon("CreditCard");
const FileBarChart = getIcon("FileBarChart");
const FileSpreadsheet = getIcon("FileSpreadsheet");
const FileText = getIcon("FileText");
const Gauge = getIcon("Gauge");
const Globe2 = getIcon("Globe2");
const Landmark = getIcon("Landmark");
const Layers3 = getIcon("Layers3");
const LineChart = getIcon("LineChart");
const LockKeyhole = getIcon("LockKeyhole");
const PackageCheck = getIcon("PackageCheck");
const PieChart = getIcon("PieChart");
const Receipt = getIcon("Receipt");
const RefreshCw = getIcon("RefreshCw");
const ScanLine = getIcon("ScanLine");
const ShieldCheck = getIcon("ShieldCheck");
const ShoppingBag = getIcon("ShoppingBag");
const Sparkles = getIcon("Sparkles");
const TrendingUp = getIcon("TrendingUp");
const UploadCloud = getIcon("UploadCloud");
const UserRoundCog = getIcon("UserRoundCog");
const Users = getIcon("Users");
const WalletCards = getIcon("WalletCards");
const Workflow = getIcon("Workflow");
const Zap = getIcon("Zap");

export const Route = createFileRoute("/quickbooks")({
  head: () => ({
    meta: [
      {
        title: "QuickBooks Online Consulting | Business Genie Consulting",
      },
      {
        name: "description",
        content:
          "QuickBooks Online consulting for setup, migration, bookkeeping workflows, invoicing, bank feeds, expenses, inventory, projects, reporting, automation and team training.",
      },
      {
        property: "og:title",
        content: "QuickBooks Online Consulting | Business Genie Consulting",
      },
      {
        property: "og:description",
        content:
          "Build a cleaner accounting operation with QuickBooks Online setup, migration, reporting, controls and automation.",
      },
    ],
  }),
  component: QuickBooksPage,
});

type ThemeMode = "light" | "dark";

const ROUTES = {
  home: "/",
  contact: "/contact",
  portfolio: "/portfolio",
  erpSolutions: "/erp-solutions",
  quickBooks: "/quickbooks",
  odoo: "/odoo",
  sapBusinessOne: "/sap-business-one",
  dynamics365: "/microsoft-dynamics-365",
} as const;

const PAGE_SECTIONS = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Advanced", href: "#advanced" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

const smartFeatures = [
  {
    icon: Landmark,
    number: "01",
    label: "Connected finance",
    title: "Bring bank activity into one review flow",
    description:
      "Connect supported accounts, review imported activity, apply consistent categories and reconcile with a cleaner month-end process.",
    points: ["Bank feed review", "Rule-based categorization", "Reconciliation support"],
    href: "#banking",
  },
  {
    icon: Boxes,
    number: "02",
    label: "Connected operations",
    title: "Link the business tools around your books",
    description:
      "Create a practical app ecosystem around sales, payroll, commerce, payments and reporting without losing financial visibility.",
    points: ["Commerce connections", "Payment workflows", "Reporting handoff"],
    href: "#advanced",
  },
  {
    icon: BellRing,
    number: "03",
    label: "Automatic follow-up",
    title: "Reduce repetitive finance administration",
    description:
      "Use reminders, recurring transactions and supported workflows to keep invoices, bills and review tasks moving on time.",
    points: ["Invoice reminders", "Recurring transactions", "Review notifications"],
    href: "#advanced",
  },
];

const coreCapabilities = [
  {
    icon: FileText,
    title: "Invoices & estimates",
    description:
      "Create branded estimates and invoices, monitor balances and keep customer follow-up organized.",
    accent: "Customer revenue",
  },
  {
    icon: Receipt,
    title: "Bills & expenses",
    description:
      "Capture receipts, organize suppliers, monitor due dates and understand where money is being spent.",
    accent: "Spend control",
  },
  {
    icon: Landmark,
    title: "Bank reconciliation",
    description:
      "Review bank activity, match transactions and maintain a more dependable accounting record.",
    accent: "Books accuracy",
  },
  {
    icon: PackageCheck,
    title: "Products & inventory",
    description:
      "Track items, purchase costs, stock movement and sales activity when supported by your plan.",
    accent: "Stock visibility",
  },
  {
    icon: BriefcaseBusiness,
    title: "Projects & profitability",
    description:
      "Group project income, costs and time to see which customers and jobs are contributing to profit.",
    accent: "Job performance",
  },
  {
    icon: FileBarChart,
    title: "Financial reporting",
    description:
      "Build profit and loss, cash-flow, balance sheet and management reports around decision-making needs.",
    accent: "Business insight",
  },
];

const advancedControls = [
  {
    id: "automation",
    icon: Workflow,
    title: "Finance workflows",
    eyebrow: "Automation engine",
    description:
      "Create structured reminders, review steps and approval routines for recurring accounting activity.",
    detail:
      "Design a controlled route for invoices, bills, reminders and management review. Your team sees what needs action while finance keeps a consistent process.",
    bullets: ["Reminder schedules", "Approval checkpoints", "Recurring transactions"],
  },
  {
    id: "permissions",
    icon: UserRoundCog,
    title: "Role-based access",
    eyebrow: "Controlled collaboration",
    description:
      "Give each user the access needed for their responsibilities while protecting sensitive financial areas.",
    detail:
      "Separate everyday operational work from confidential accounting controls. Roles can be designed around management, finance, sales and operations.",
    bullets: ["User responsibility mapping", "Sensitive-data protection", "Cleaner accountability"],
  },
  {
    id: "analysis",
    icon: FileSpreadsheet,
    title: "Advanced analysis",
    eyebrow: "Management intelligence",
    description:
      "Prepare management-ready data for deeper review, budgeting and spreadsheet-led finance processes.",
    detail:
      "Build reporting routines that give management a clearer view of performance, cash position, receivables and operational trends.",
    bullets: ["Custom reporting views", "Budget review support", "Decision-ready exports"],
  },
  {
    id: "batch",
    icon: ScanLine,
    title: "Batch processing",
    eyebrow: "High-volume efficiency",
    description:
      "Handle higher transaction volumes through supported batch entry, review and update workflows.",
    detail:
      "Reduce repeated manual work when teams manage larger transaction volumes. Standardized batch routines improve speed and consistency.",
    bullets: ["Bulk transaction handling", "Faster review", "Reduced repetitive entry"],
  },
  {
    id: "reporting",
    icon: Layers3,
    title: "Classes & locations",
    eyebrow: "Structured reporting",
    description:
      "Structure reporting around departments, branches, service lines or operational locations where available.",
    detail:
      "Compare the parts of your business separately without losing the consolidated financial picture. Use structure that matches your real operation.",
    bullets: ["Department reporting", "Branch comparison", "Service-line visibility"],
  },
  {
    id: "controls",
    icon: ShieldCheck,
    title: "Audit-ready controls",
    eyebrow: "Finance governance",
    description:
      "Improve traceability with cleaner records, controlled access and consistent reconciliation routines.",
    detail:
      "Create a dependable operating rhythm around documentation, reconciliation and access. This supports cleaner reviews and more confident reporting.",
    bullets: ["Traceable activity", "Controlled access", "Consistent month-end"],
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Review your current records, reporting needs, users, tax structure and operational workflow.",
  },
  {
    number: "02",
    title: "Design",
    text: "Plan the chart of accounts, products, services, customers, vendors, roles and reporting structure.",
  },
  {
    number: "03",
    title: "Migrate",
    text: "Prepare agreed lists, balances and historical information for a controlled transition.",
  },
  {
    number: "04",
    title: "Configure",
    text: "Set up forms, bank rules, reports, reminders, permissions and connected workflows.",
  },
  {
    number: "05",
    title: "Enable",
    text: "Train the team, test real scenarios and refine the system after launch.",
  },
];

const businessStories = [
  {
    icon: ShoppingBag,
    tag: "Retail & commerce",
    title: "A clearer view of products, sales and daily cash movement",
    text: "Connect sales activity with product, expense and bank records so finance teams can close the month with fewer gaps.",
    metric: "One connected view",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: BriefcaseBusiness,
    tag: "Professional services",
    title: "Understand project income, cost and customer profitability",
    text: "Organize estimates, time, expenses and invoices around each engagement to improve commercial visibility.",
    metric: "Project-level insight",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: Users,
    tag: "Growing finance teams",
    title: "Introduce better controls without slowing the business down",
    text: "Define access, standardize review routines and provide management with more dependable reporting.",
    metric: "Stronger finance control",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
];

const relatedSolutions = [
  {
    title: "Odoo",
    text: "A modular business platform for ERP, CRM, inventory, accounting and operations.",
    to: ROUTES.odoo,
    accent: "#875A7B",
  },
  {
    title: "SAP Business One",
    text: "Integrated business management for finance, sales, inventory and operational control.",
    to: ROUTES.sapBusinessOne,
    accent: "#0A6ED1",
  },
  {
    title: "Microsoft Dynamics 365",
    text: "Connected finance, customer and operational capabilities for growing organizations.",
    to: ROUTES.dynamics365,
    accent: "#00A6B2",
  },
];

const faqs = [
  {
    question: "Which QuickBooks Online plan should we use?",
    answer:
      "Plan selection depends on user count, inventory, projects, reporting, classes, locations, automation and access-control requirements. We review your workflow before recommending an option available in your region.",
  },
  {
    question: "Can you migrate data from another accounting system?",
    answer:
      "Yes. Migration can include agreed customer, vendor, account, product and opening-balance information. The exact scope depends on the quality and export format of the existing data.",
  },
  {
    question: "Can QuickBooks support inventory and project profitability?",
    answer:
      "Supported plans can provide product tracking, project income and cost visibility, and job-level profitability. Availability varies by product, plan and region.",
  },
  {
    question: "Do you provide cleanup and bookkeeping support?",
    answer:
      "Yes. Support can include account cleanup, bank reconciliation, workflow guidance, monthly reporting, transaction review and team training.",
  },
  {
    question: "Can user permissions and approvals be configured?",
    answer:
      "Role and workflow capabilities depend on the selected subscription. We design access around responsibilities and use the controls available in that product and region.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

function getThemeMode(): ThemeMode {
  if (typeof window === "undefined") return "light";

  const html = document.documentElement;
  const body = document.body;
  const classes = `${html.className} ${body.className}`.toLowerCase();

  if (classes.includes("cream-theme")) return "light";
  if (/\b(dark|night)\b/.test(classes)) return "dark";

  try {
    const stored = window.localStorage
      .getItem("business-genie-theme-v2")
      ?.toLowerCase();

    if (stored === "dark") return "dark";
    if (stored === "cream" || stored === "light") return "light";
  } catch {
    // Ignore storage errors and use the system preference.
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function useQuickBooksTheme(): ThemeMode {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const update = () => setTheme(getThemeMode());
    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme", "data-mode"],
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "data-theme", "data-mode"],
    });

    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    const handleStorage = () => update();
    const handleClick = () => window.setTimeout(update, 0);

    window.addEventListener("storage", handleStorage);
    window.addEventListener("click", handleClick, true);
    media?.addEventListener?.("change", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("click", handleClick, true);
      media?.removeEventListener?.("change", update);
    };
  }, []);

  return theme;
}

function QuickBooksPage() {
  const theme = useQuickBooksTheme();

  return (
    <SiteLayout>
      <div className="qb-shell" data-qb-theme={theme}>
        <QuickBooksStyles />
        <ScrollProgress />

        <main className="qb-page min-h-screen overflow-hidden bg-[var(--qb-bg)] text-[var(--qb-text)] selection:bg-[#6FE164] selection:text-[#0C2C0B]">
          <HeroSection />
          <QuickSectionNav />
          <TrustRail />
          <SmartFeaturesSection />
          <GuideBanner />
          <BusinessStoriesSection />
          <AdvancedOperationsSection />
          <CapabilitiesSection />
          <ImplementationSection />
          <RelatedSolutionsSection />
          <FaqSection />
          <FinalCtaSection />
        </main>
      </div>
    </SiteLayout>
  );
}

function QuickBooksStyles() {
  return (
    <style>{`
      html {
        scroll-behavior: smooth;
      }

      .qb-shell {
        color-scheme: light;
        background: #f7faf5;
      }

      .qb-shell[data-qb-theme="dark"] {
        color-scheme: dark;
        background: #020602;
      }

      .qb-shell[data-qb-theme="light"] .qb-page {
        --qb-bg: #f7faf5;
        --qb-surface: #ffffff;
        --qb-surface-soft: rgba(255,255,255,.78);
        --qb-alt: #edf5ea;
        --qb-title: #0c2c0b;
        --qb-text: #244522;
        --qb-body: #4f6c4d;
        --qb-muted: #71806f;
        --qb-border: rgba(44,160,28,.15);
        --qb-border-strong: rgba(44,160,28,.30);
        --qb-grid: rgba(44,160,28,.065);
        --qb-shadow: 0 24px 70px rgba(18,74,12,.11);
        --qb-shadow-soft: 0 12px 35px rgba(18,74,12,.08);
      }

      .qb-shell[data-qb-theme="dark"] .qb-page {
        --qb-bg: #020602;
        --qb-surface: #0a120a;
        --qb-surface-soft: rgba(10,18,10,.80);
        --qb-alt: #071007;
        --qb-title: #f5fff3;
        --qb-text: #e6f4e4;
        --qb-body: #c1d5be;
        --qb-muted: rgba(194,215,190,.68);
        --qb-border: rgba(255,255,255,.10);
        --qb-border-strong: rgba(111,225,100,.32);
        --qb-grid: rgba(111,225,100,.05);
        --qb-shadow: 0 30px 90px rgba(0,0,0,.50);
        --qb-shadow-soft: 0 15px 40px rgba(0,0,0,.34);
      }

      .qb-container {
        width: min(1220px, calc(100% - 2rem));
        margin-inline: auto;
      }

      .qb-card {
        background: var(--qb-surface);
        border: 1px solid var(--qb-border);
        box-shadow: var(--qb-shadow-soft);
      }

      .qb-glass {
        background: var(--qb-surface-soft);
        border: 1px solid var(--qb-border);
        box-shadow: var(--qb-shadow);
        backdrop-filter: blur(24px);
      }

      .qb-grid-pattern {
        background-image:
          linear-gradient(var(--qb-grid) 1px, transparent 1px),
          linear-gradient(90deg, var(--qb-grid) 1px, transparent 1px);
        background-size: 72px 72px;
      }

      .qb-shell[data-qb-theme="light"] .qb-section-alt {
        background: #edf5ea !important;
      }

      .qb-shell[data-qb-theme="dark"] .qb-section-alt {
        background: #071007 !important;
      }

      .qb-shell[data-qb-theme="dark"] .qb-story-image {
        filter: brightness(.66) saturate(.82) contrast(1.08);
      }

      .qb-noise::before {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        opacity: .035;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
      }

      .qb-anchor {
        scroll-margin-top: 120px;
      }

      .qb-page,
      .qb-page section,
      .qb-page article,
      .qb-page div,
      .qb-page a,
      .qb-page button,
      .qb-page h1,
      .qb-page h2,
      .qb-page h3,
      .qb-page p {
        transition:
          background-color .3s ease,
          border-color .3s ease,
          color .3s ease,
          box-shadow .3s ease;
      }

      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        .qb-page *, .qb-page *::before, .qb-page *::after {
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
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-[#1E7A16] via-[#2CA01C] to-[#75D96B]"
      style={{ scaleX }}
    />
  );
}

function QuickSectionNav() {
  return (
    <div className="sticky top-[74px] z-40 border-y border-[var(--qb-border)] bg-[var(--qb-surface-soft)] backdrop-blur-2xl">
      <div className="qb-container flex items-center justify-between gap-4 overflow-x-auto py-3">
        <div className="flex min-w-max items-center gap-1">
          {PAGE_SECTIONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs font-semibold text-[var(--qb-muted)] transition hover:bg-[#2CA01C]/10 hover:text-[#2CA01C]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Link
          to={ROUTES.contact}
          className="hidden min-w-max items-center gap-2 rounded-full bg-[#2CA01C] px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(44,160,28,.24)] transition hover:-translate-y-0.5 hover:bg-[#1E7A16] sm:inline-flex"
        >
          Get consultation
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

function HeroSection() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : 150]);
  const heroOpacity = useTransform(scrollY, [0, 750], [1, 0.35]);

  return (
    <section
      id="overview"
      className="qb-anchor qb-grid-pattern qb-noise relative isolate overflow-hidden bg-[var(--qb-bg)] pb-20 pt-28 sm:pt-32 lg:min-h-[890px] lg:pb-24"
    >
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 55, 0], y: [0, -35, 0], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-12rem] top-16 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#2CA01C]/[.14] blur-[145px]"
      />
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -45, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }
        }
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10rem] top-48 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#6FE164]/[.14] blur-[140px]"
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="qb-container grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div
            variants={reveal}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--qb-border-strong)] bg-[var(--qb-surface-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2CA01C] backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            QuickBooks Online Consulting
          </motion.div>

          <motion.div variants={reveal} className="mt-8 flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.08 }}
              className="grid h-14 w-14 place-items-center rounded-full bg-[#2CA01C] text-lg font-extrabold lowercase text-white shadow-[0_16px_36px_rgba(44,160,28,.30)]"
            >
              qb
            </motion.div>
            <div>
              <p className="text-2xl font-bold tracking-[-0.045em] text-[var(--qb-title)]">
                QuickBooks
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--qb-muted)]">
                Online accounting solution
              </p>
            </div>
          </motion.div>

          <motion.h1
            variants={reveal}
            className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[var(--qb-title)] sm:text-5xl lg:text-[4.8rem]"
          >
            Finance clarity for every
            <span className="block bg-gradient-to-r from-[#1E7A16] via-[#2CA01C] to-[#75D96B] bg-clip-text text-transparent">
              stage of business growth
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-7 max-w-2xl text-base leading-8 text-[var(--qb-body)] sm:text-lg"
          >
            Configure invoicing, expenses, banking, projects, products, reporting
            and controls around the way your team actually works.
          </motion.p>

          <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-3">
            <Link
              to={ROUTES.contact}
              className="group inline-flex items-center gap-2 rounded-full bg-[#2CA01C] px-6 py-3.5 font-semibold text-white shadow-[0_18px_50px_rgba(44,160,28,.28)] transition hover:-translate-y-1 hover:bg-[#1E7A16]"
            >
              Book QuickBooks consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--qb-border-strong)] bg-[var(--qb-surface-soft)] px-6 py-3.5 font-semibold text-[var(--qb-title)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#75D96B]/55"
            >
              Explore capabilities
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--qb-muted)]"
          >
            {["Cloud accounting", "Bank reconciliation", "Management reports"].map(
              (item) => (
                <motion.span key={item} variants={reveal} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-[#2CA01C]" />
                  {item}
                </motion.span>
              ),
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <FinanceCommandCenter />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FinanceCommandCenter() {
  const reduceMotion = useReducedMotion();
  const snapshots = [
    { icon: WalletCards, label: "Cash balance", value: "$84,240", change: "+8.4%" },
    { icon: TrendingUp, label: "Income", value: "$132,680", change: "+12.6%" },
    { icon: Banknote, label: "Expenses", value: "$61,420", change: "-4.2%" },
  ];

  return (
    <div className="qb-glass relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-dashed border-[#2CA01C]/25"
      />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2CA01C]/16 blur-[95px]" />

      <div className="relative">
        <div className="flex items-center justify-between rounded-2xl border border-[var(--qb-border)] bg-[var(--qb-surface)] px-4 py-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.20em] text-[var(--qb-muted)]">
              Financial command center
            </p>
            <h2 className="mt-1 text-lg font-semibold text-[var(--qb-title)]">
              Business overview
            </h2>
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { boxShadow: ["0 0 0 0 rgba(44,160,28,.35)", "0 0 0 8px rgba(44,160,28,0)"] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-500"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Books updated
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mt-4 grid gap-3 sm:grid-cols-3"
        >
          {snapshots.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={reveal}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-[var(--qb-border)] bg-[var(--qb-surface)] p-4"
              >
                <Icon className="h-5 w-5 text-[#2CA01C]" />
                <p className="mt-4 text-xl font-semibold text-[var(--qb-title)]">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-[var(--qb-muted)]">{item.label}</p>
                <p className="mt-3 text-xs font-semibold text-[#2CA01C]">
                  {item.change}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-4 grid gap-4 md:grid-cols-[1.15fr_.85fr]">
          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-[var(--qb-border)] bg-[var(--qb-surface)] p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--qb-muted)]">
                  Cash flow
                </p>
                <p className="mt-1 font-semibold text-[var(--qb-title)]">
                  Money in and out
                </p>
              </div>
              <LineChart className="h-5 w-5 text-[#2CA01C]" />
            </div>

            <div className="mt-7 flex h-36 items-end gap-2">
              {[45, 58, 53, 72, 64, 81, 74, 92].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: `${height}%`, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.7, ease: "easeOut" }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-[#1E7A16] to-[#75D96B]"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-[var(--qb-border)] bg-[var(--qb-surface)] p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--qb-muted)]">
                  Profitability
                </p>
                <p className="mt-1 font-semibold text-[var(--qb-title)]">
                  Current margin
                </p>
              </div>
              <PieChart className="h-5 w-5 text-[#2CA01C]" />
            </div>

            <div className="mt-7 grid place-items-center">
              <motion.div
                initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid h-36 w-36 place-items-center rounded-full"
                style={{
                  background:
                    "conic-gradient(#2CA01C 0deg 244deg, rgba(44,160,28,.13) 244deg 360deg)",
                }}
              >
                <div className="grid h-24 w-24 place-items-center rounded-full bg-[var(--qb-surface)]">
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-[var(--qb-title)]">
                      31.8%
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--qb-muted)]">
                      Net margin
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-[var(--qb-border)] bg-[var(--qb-surface)] px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              className="grid h-10 w-10 place-items-center rounded-xl bg-[#2CA01C]/12 text-[#2CA01C]"
            >
              <RefreshCw className="h-5 w-5" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-[var(--qb-title)]">
                Bank activity synchronized
              </p>
              <p className="text-xs text-[var(--qb-muted)]">
                Review • Categorize • Reconcile
              </p>
            </div>
          </div>
          <Landmark className="h-5 w-5 text-[#75D96B]" />
        </motion.div>
      </div>
    </div>
  );
}

function TrustRail() {
  const items = [
    "Invoicing",
    "Bank feeds",
    "Expenses",
    "Inventory",
    "Projects",
    "Cash flow",
    "Reports",
    "Automation",
  ];

  return (
    <section className="overflow-hidden border-y border-[var(--qb-border)] bg-[#2CA01C] py-4 text-white">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-10 whitespace-nowrap"
      >
        {[...items, ...items].map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-[#B9FFB2]" />
            <span className="text-xs font-semibold uppercase tracking-[0.20em]">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function SmartFeaturesSection() {
  return (
    <section id="features" className="qb-anchor bg-[var(--qb-bg)] py-24">
      <div className="qb-container">
        <SectionIntro
          eyebrow="Smart accounting operations"
          title="Features designed to save time without losing control"
          description="Build a connected accounting environment that keeps everyday finance work visible, organized and easier to review."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {smartFeatures.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.number}
                variants={reveal}
                whileHover={{ y: -10 }}
                className="qb-card group relative overflow-hidden rounded-[2rem] p-7"
              >
                <motion.div
                  aria-hidden="true"
                  animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 24 + index * 5, repeat: Infinity, ease: "linear" }}
                  className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-dashed border-[#2CA01C]/18"
                />
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#2CA01C]/12 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="grid h-12 w-12 place-items-center rounded-2xl bg-[#2CA01C]/12 text-[#2CA01C]"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <span className="text-5xl font-semibold tracking-[-0.06em] text-[#2CA01C]/15">
                      {feature.number}
                    </span>
                  </div>

                  <p className="mt-10 text-xs font-semibold uppercase tracking-[0.20em] text-[#2CA01C]">
                    {feature.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[var(--qb-title)]">
                    {feature.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--qb-muted)]">
                    {feature.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {feature.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-sm text-[var(--qb-body)]">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-[#2CA01C]/12 text-[#2CA01C]">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {point}
                      </div>
                    ))}
                  </div>

                  <a
                    href={feature.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#2CA01C]"
                  >
                    Explore this capability
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function GuideBanner() {
  return (
    <section className="qb-section-alt bg-[var(--qb-alt)] py-10">
      <div className="qb-container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="qb-glass relative overflow-hidden rounded-[2rem] p-7 sm:p-10"
        >
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -25, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#75D96B]/20 blur-[90px]"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#2CA01C]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#2CA01C]">
                <Calculator className="h-4 w-4" />
                Finance readiness review
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--qb-title)] sm:text-4xl">
                Start with the right accounting structure, not just software access
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-[var(--qb-muted)]">
                We map your chart of accounts, users, customers, suppliers, bank flow,
                products and reporting needs before configuration begins.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to={ROUTES.contact}
                  className="inline-flex items-center gap-2 rounded-full bg-[#2CA01C] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#1E7A16]"
                >
                  Request a readiness review
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to={ROUTES.portfolio}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--qb-border-strong)] px-5 py-3 text-sm font-semibold text-[var(--qb-title)] transition hover:-translate-y-1 hover:border-[#2CA01C]"
                >
                  View our work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="qb-card relative rounded-[1.75rem] p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--qb-muted)]">
                    Readiness score
                  </p>
                  <p className="mt-2 text-4xl font-semibold text-[var(--qb-title)]">86%</p>
                </div>
                <Gauge className="h-8 w-8 text-[#2CA01C]" />
              </div>
              <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#2CA01C]/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "86%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[#1E7A16] to-[#75D96B]"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Chart of accounts", "Bank workflow", "User roles", "Reporting model"].map((item) => (
                  <div key={item} className="rounded-xl border border-[var(--qb-border)] p-3 text-xs font-medium text-[var(--qb-body)]">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BusinessStoriesSection() {
  return (
    <section className="bg-[var(--qb-bg)] py-24">
      <div className="qb-container">
        <SectionIntro
          eyebrow="Built around real business models"
          title="One accounting platform, configured for different operating realities"
          description="Your setup should reflect how your organization sells, delivers work, tracks cost and reviews performance."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {businessStories.map((story) => {
            const Icon = story.icon;
            return (
              <motion.article
                key={story.title}
                variants={reveal}
                whileHover={{ y: -10 }}
                className="qb-card group overflow-hidden rounded-[2rem]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="qb-story-image h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061606]/90 via-[#061606]/20 to-transparent" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/92 text-[#2CA01C] shadow-xl"
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9FFB2]">
                      {story.tag}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white/90">{story.metric}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold leading-tight text-[var(--qb-title)]">
                    {story.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--qb-muted)]">{story.text}</p>
                  <Link
                    to={ROUTES.contact}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2CA01C]"
                  >
                    Discuss this business model
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function AdvancedOperationsSection() {
  const [activeId, setActiveId] = useState(advancedControls[0].id);
  const activeItem = useMemo(
    () => advancedControls.find((item) => item.id === activeId) ?? advancedControls[0],
    [activeId],
  );
  const ActiveIcon = activeItem.icon;

  return (
    <section id="advanced" className="qb-anchor qb-section-alt bg-[var(--qb-alt)] py-24">
      <div className="qb-container">
        <SectionIntro
          eyebrow="Advanced finance operations"
          title="Go beyond basic bookkeeping with stronger process and control"
          description="Replace the pricing section with capabilities that help growing finance teams work faster, collaborate safely and report with more confidence."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[.82fr_1.18fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-3"
          >
            {advancedControls.map((item) => {
              const Icon = item.icon;
              const active = item.id === activeId;
              return (
                <motion.button
                  key={item.id}
                  variants={reveal}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  whileHover={{ x: 6 }}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-[#2CA01C]/40 bg-[#2CA01C] text-white shadow-[0_18px_50px_rgba(44,160,28,.22)]"
                      : "border-[var(--qb-border)] bg-[var(--qb-surface)] text-[var(--qb-title)]"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
                      active ? "bg-white/16 text-white" : "bg-[#2CA01C]/12 text-[#2CA01C]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{item.title}</span>
                    <span className={`mt-1 block text-xs ${active ? "text-white/70" : "text-[var(--qb-muted)]"}`}>
                      {item.description}
                    </span>
                  </span>
                  <ArrowRight className={`ml-auto h-4 w-4 shrink-0 ${active ? "text-white" : "text-[#2CA01C]"}`} />
                </motion.button>
              );
            })}
          </motion.div>

          <div className="qb-glass relative min-h-[570px] overflow-hidden rounded-[2rem] p-7 sm:p-9">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2CA01C]/16 blur-[100px]" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#2CA01C]/8 to-transparent" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ duration: 0.38 }}
                className="relative"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.20em] text-[#2CA01C]">
                      {activeItem.eyebrow}
                    </p>
                    <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-[var(--qb-title)] sm:text-4xl">
                      {activeItem.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-[#2CA01C] text-white shadow-[0_18px_50px_rgba(44,160,28,.28)]"
                  >
                    <ActiveIcon className="h-8 w-8" />
                  </motion.div>
                </div>

                <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--qb-muted)]">
                  {activeItem.detail}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {activeItem.bullets.map((bullet, index) => (
                    <motion.div
                      key={bullet}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="qb-card rounded-2xl p-4"
                    >
                      <Check className="h-5 w-5 text-[#2CA01C]" />
                      <p className="mt-4 text-sm font-semibold text-[var(--qb-title)]">{bullet}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-9 rounded-[1.75rem] border border-[var(--qb-border)] bg-[var(--qb-surface)] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--qb-muted)]">
                        Live workflow preview
                      </p>
                      <p className="mt-1 font-semibold text-[var(--qb-title)]">
                        Trigger → Review → Approval → Report
                      </p>
                    </div>
                    <Zap className="h-5 w-5 text-[#2CA01C]" />
                  </div>

                  <div className="relative mt-7 grid grid-cols-4 gap-2">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                      className="absolute left-[8%] right-[8%] top-5 h-px origin-left bg-gradient-to-r from-[#1E7A16] via-[#2CA01C] to-[#75D96B]"
                    />
                    {[BellRing, Clock3, ShieldCheck, BarChart3].map((Icon, index) => (
                      <motion.div
                        key={index}
                        animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                        transition={{ duration: 3.5 + index, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 text-center"
                      >
                        <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#2CA01C] text-white shadow-lg">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--qb-muted)]">
                          {index === 0 ? "Trigger" : index === 1 ? "Review" : index === 2 ? "Approve" : "Report"}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Link
                  to={ROUTES.contact}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2CA01C] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#1E7A16]"
                >
                  Build this workflow
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section id="banking" className="qb-anchor bg-[var(--qb-bg)] py-24">
      <div className="qb-container">
        <SectionIntro
          eyebrow="Core capabilities"
          title="The everyday accounting tools your team needs in one place"
          description="Connect customer revenue, supplier spending, bank activity, stock, projects and reports into a more dependable finance operation."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {coreCapabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={reveal}
                whileHover={{ y: -9, rotateX: 2, rotateY: index % 2 === 0 ? 2 : -2 }}
                className="qb-card group relative overflow-hidden rounded-[1.75rem] p-6"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#2CA01C]/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.08 }}
                      className="grid h-12 w-12 place-items-center rounded-2xl bg-[#2CA01C]/12 text-[#2CA01C]"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2CA01C]">
                      {item.accent}
                    </span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold text-[var(--qb-title)]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--qb-muted)]">{item.description}</p>
                  <Link
                    to={ROUTES.contact}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#2CA01C]"
                  >
                    Configure this feature
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ImplementationSection() {
  return (
    <section id="process" className="qb-anchor qb-section-alt bg-[var(--qb-alt)] py-24">
      <div className="qb-container">
        <SectionIntro
          eyebrow="Implementation route"
          title="A controlled path from scattered records to confident reporting"
          description="Every phase is designed around accuracy, practical workflows, user adoption and reliable month-end information."
        />

        <div className="relative mt-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.25, ease: "easeOut" }}
            className="absolute left-[8%] right-[8%] top-10 hidden h-px origin-left bg-gradient-to-r from-[#1E7A16] via-[#2CA01C] to-[#75D96B] lg:block"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 lg:grid-cols-5"
          >
            {implementationSteps.map((step, index) => (
              <motion.article
                key={step.number}
                variants={reveal}
                whileHover={{ y: -8 }}
                className="qb-card relative z-10 rounded-[1.75rem] p-6 text-center lg:text-left"
              >
                <motion.div
                  animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-[#2CA01C]/25 bg-[var(--qb-surface)] text-2xl font-semibold text-[#2CA01C] shadow-[0_16px_40px_rgba(44,160,28,.12)] lg:mx-0"
                >
                  {step.number}
                </motion.div>
                <h3 className="mt-6 text-xl font-semibold text-[var(--qb-title)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--qb-muted)]">{step.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to={ROUTES.contact}
            className="inline-flex items-center gap-2 rounded-full bg-[#2CA01C] px-6 py-3.5 font-semibold text-white shadow-[0_18px_50px_rgba(44,160,28,.24)] transition hover:-translate-y-1 hover:bg-[#1E7A16]"
          >
            Start your implementation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function RelatedSolutionsSection() {
  return (
    <section className="bg-[var(--qb-bg)] py-24">
      <div className="qb-container">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Explore more solutions"
            title="Compare QuickBooks with other business platforms"
            description="Choose the system that matches your organization size, process complexity, integration needs and long-term growth plan."
            align="left"
          />

          <Link
            to={ROUTES.erpSolutions}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--qb-border-strong)] px-5 py-3 text-sm font-semibold text-[var(--qb-title)] transition hover:-translate-y-1 hover:border-[#2CA01C] hover:text-[#2CA01C]"
          >
            View all ERP solutions
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {relatedSolutions.map((solution) => (
            <motion.article
              key={solution.title}
              variants={reveal}
              whileHover={{ y: -8 }}
              className="qb-card group relative overflow-hidden rounded-[1.75rem] p-6"
            >
              <div
                className="absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-15 blur-3xl"
                style={{ backgroundColor: solution.accent }}
              />
              <div className="relative">
                <div
                  className="h-1.5 w-14 rounded-full"
                  style={{ backgroundColor: solution.accent }}
                />
                <h3 className="mt-8 text-2xl font-semibold text-[var(--qb-title)]">{solution.title}</h3>
                <p className="mt-4 leading-7 text-[var(--qb-muted)]">{solution.text}</p>
                <Link
                  to={solution.to}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: solution.accent }}
                >
                  Open solution page
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="qb-anchor qb-section-alt bg-[var(--qb-alt)] py-24">
      <div className="qb-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <SectionIntro
            eyebrow="Frequently asked questions"
            title="Clear answers before your QuickBooks project begins"
            description="Understand plan selection, migration, inventory, projects, reporting and support before setup."
            align="left"
          />

          <Link
            to={ROUTES.contact}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2CA01C] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#1E7A16]"
          >
            Ask your own question
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div key={faq.question} variants={reveal}>
              <FaqItem question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="qb-card overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[var(--qb-title)]">{question}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="h-5 w-5 shrink-0 text-[#2CA01C]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 leading-7 text-[var(--qb-muted)]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--qb-bg)] py-24">
      <div className="qb-container">
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0C2C0B] via-[#1E7A16] to-[#2CA01C] px-7 py-14 text-center text-white shadow-[0_35px_110px_rgba(30,122,22,.32)] sm:px-12 sm:py-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute -left-36 -top-36 h-96 w-96 rounded-full border border-dashed border-white/18"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 35, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#75D96B]/30 blur-[110px]"
          />

          <div className="relative mx-auto max-w-4xl">
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white text-[#2CA01C] shadow-2xl"
            >
              <CircleDollarSign className="h-8 w-8" />
            </motion.div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              QuickBooks implementation consultation
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">
              Build cleaner books and a clearer financial picture
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/76">
              We will review your records, invoicing, bank activity, expenses,
              reporting and user requirements before recommending the right setup.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to={ROUTES.contact}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#1E7A16] transition hover:-translate-y-1 hover:bg-[#EFFCEB]"
              >
                Start your QuickBooks project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={ROUTES.portfolio}
                className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/16"
              >
                View portfolio
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl ${alignment}`}
    >
      <div
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#2CA01C] ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>

      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[var(--qb-title)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-[var(--qb-muted)]">
        {description}
      </p>
    </motion.div>
  );
}