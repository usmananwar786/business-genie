import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, BriefcaseBusiness, CalendarDays, CheckCircle2, ChevronDown,
  Clock3, Fingerprint, Globe2, GraduationCap, IdCard, MessageCircleMore,
  Network, Plane, ScanFace, ShieldCheck, Smartphone, Sparkles, Target,
  UserCheck, UserPlus, Users, WalletCards, Workflow, BellRing, BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/webhr")({
  head: () => ({
    meta: [
      { title: "WebHR Consulting & Implementation | Business Genie Consulting" },
      {
        name: "description",
        content:
          "WebHR implementation for recruitment, onboarding, employee records, attendance, leave, payroll, performance, employee self service, learning and workforce analytics.",
      },
    ],
  }),
  component: WebHr,
});

const PURPLE = "#9B39F0";
const DARK_PURPLE = "#6F22C7";
const CYAN = "#37C6F4";
type ThemeMode = "light" | "dark";

const storageKeys = [
  "theme", "color-theme", "mode", "ui-theme", "themeMode",
  "vite-ui-theme", "chakra-ui-color-mode", "next-theme",
  "preferred-theme", "business-genie-theme-v2",
];

const chapters: Array<{
  no: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  points: string[];
}> = [
  {
    no: "01",
    icon: UserPlus,
    eyebrow: "Attract & Hire",
    title: "Turn recruitment into a visible, collaborative journey",
    text: "Manage jobs, candidates, interviews, offers and hiring decisions through one connected recruitment flow.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=90",
    points: ["Job openings", "Candidate pipeline", "Interview stages"],
  },
  {
    no: "02",
    icon: IdCard,
    eyebrow: "Onboard & Connect",
    title: "Give every new hire a confident first experience",
    text: "Coordinate tasks, documents, profiles and introductions before the first day becomes complicated.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=90",
    points: ["Digital onboarding", "Employee records", "Social introductions"],
  },
  {
    no: "03",
    icon: Clock3,
    eyebrow: "Manage & Support",
    title: "Make everyday HR tasks simple for everyone",
    text: "Connect attendance, leave, payroll, self service and manager approvals in one employee workspace.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90",
    points: ["Attendance", "Leave & PTO", "Payroll access"],
  },
  {
    no: "04",
    icon: GraduationCap,
    eyebrow: "Perform & Grow",
    title: "Keep feedback, recognition and development visible",
    text: "Manage goals, reviews and learning while employee growth remains connected to the organization.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=90",
    points: ["Performance", "Recognition", "Learning"],
  },
];

const modules = [
  "Recruitment", "Onboarding", "Employee Records", "Attendance", "Leave & PTO",
  "Payroll", "Performance", "Employee Self Service", "Learning", "HR Analytics",
];

const journey = [
  { icon: BriefcaseBusiness, label: "Attract" },
  { icon: UserPlus, label: "Hire" },
  { icon: IdCard, label: "Onboard" },
  { icon: Clock3, label: "Manage" },
  { icon: Target, label: "Develop" },
  { icon: Plane, label: "Offboard" },
];

const benefits = [
  "One cloud-based employee record",
  "Faster requests and approvals",
  "Better employee communication",
  "Consistent global HR processes",
  "Current attendance and leave visibility",
  "Stronger workforce analytics",
];

const faqs = [
  {
    q: "Which WebHR modules can be implemented?",
    a: "The implementation can include recruitment, onboarding, employee records, attendance, leave and PTO, payroll, performance, employee self service, learning and HR analytics according to your selected scope.",
  },
  {
    q: "Can WebHR support distributed and global teams?",
    a: "Yes. WebHR can be structured around countries, offices, departments, roles and access requirements.",
  },
  {
    q: "Can existing employee data be migrated?",
    a: "Yes. Employee profiles, departments, job information, leave balances, salary structures and other agreed records can be prepared, validated and migrated.",
  },
  {
    q: "Does WebHR support mobile employee access?",
    a: "Yes. Employees and managers can use supported mobile experiences for attendance, leave, requests and other HR activities.",
  },
];

function parseRgb(value: string) {
  const match = value.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;
  const p = match[1].split(",").map((x) => Number(x.trim().replace("/", "")));
  if (p.length < 3 || p.some(Number.isNaN)) return null;
  return { r: p[0], g: p[1], b: p[2], a: p[3] ?? 1 };
}

function darkColor(value: string) {
  const rgb = parseRgb(value);
  if (!rgb || rgb.a < 0.1) return false;
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 < 90;
}

function headerIsDark() {
  if (typeof window === "undefined") return false;
  return ["header", "nav", "[data-header]", ".site-header", ".navbar"]
    .flatMap((s) => Array.from(document.querySelectorAll<HTMLElement>(s)))
    .slice(0, 10)
    .some((el) => {
      const c = String(el.className || "").toLowerCase();
      if (c.includes("bg-black") || c.includes("dark") || c.includes("night"))
        return true;
      const style = getComputedStyle(el);
      return darkColor(style.backgroundColor) || darkColor(style.borderColor);
    });
}

function readTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const html = document.documentElement;
  const body = document.body;
  const attrs = [
    html.className, body.className, html.getAttribute("data-theme"),
    html.getAttribute("data-mode"), body.getAttribute("data-theme"),
    body.getAttribute("data-mode"), document.querySelector("#root")?.getAttribute("class"),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  let stored = "";
  try {
    stored = storageKeys.map((k) => localStorage.getItem(k) || "").join(" ").toLowerCase();
  } catch {}

  const value = `${attrs} ${stored}`;
  if (headerIsDark() || /\b(dark|night|black)\b/.test(value)) return "dark";
  if (/\b(light|day|off-white|offwhite|cream)\b/.test(value)) return "light";
  return matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const update = () => setMode(readTheme());
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
    const click = () => setTimeout(update, 0);
    const media = matchMedia?.("(prefers-color-scheme: dark)");
    window.addEventListener("click", click, true);
    window.addEventListener("storage", update);
    media?.addEventListener?.("change", update);

    return () => {
      observer.disconnect();
      clearInterval(interval);
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
        <Styles />
        <main className="wh-page min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
          <Hero />
          <Marquee />
          <Story />
          <Journey />
          <NetworkSection />
          <MobileExperience />
          <Results />
          <Faq />
          <Cta />
        </main>
      </div>
    </SiteLayout>
  );
}

function Styles() {
  return (
    <style>{`
      .wh-wrap{color-scheme:light;background:#f7f5fb}
      .wh-wrap[data-wh-theme="dark"]{color-scheme:dark;background:#050308}
      .wh-wrap[data-wh-theme="light"] .wh-page{
        --bg:#f7f5fb;--alt:#eee8f5;--card:rgba(255,255,255,.94);
        --title:#261738;--text:#49375a;--body:#655570;--muted:#887a91;
        --border:rgba(155,57,240,.16);--overlay:rgba(247,245,251,.93);
        --shadow:0 22px 70px rgba(111,34,199,.12);
      }
      .wh-wrap[data-wh-theme="dark"] .wh-page{
        --bg:#050308;--alt:#0c0812;--card:rgba(20,14,27,.94);
        --title:#fffaff;--text:#f1e9f6;--body:#d8cce1;--muted:rgba(211,195,222,.72);
        --border:rgba(255,255,255,.11);--overlay:rgba(5,3,8,.94);
        --shadow:0 28px 80px rgba(0,0,0,.52);
      }
      .wh-container{width:min(1240px,calc(100% - 2rem));margin-inline:auto}
      .wh-glass{background:var(--card);border:1px solid var(--border);box-shadow:var(--shadow);backdrop-filter:blur(24px)}
      .wh-wrap[data-wh-theme="light"] .wh-alt{background:#eee8f5!important}
      .wh-wrap[data-wh-theme="dark"] .wh-alt{background:#0c0812!important}
      .wh-wrap[data-wh-theme="light"] img{filter:brightness(.97) saturate(.94)}
      .wh-wrap[data-wh-theme="dark"] img{filter:brightness(.68) saturate(.88) contrast(1.08)}
      .wh-page,.wh-page *{transition:background-color .3s ease,border-color .3s ease,color .3s ease,box-shadow .3s ease}
    `}</style>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[98vh] overflow-hidden bg-[var(--bg)] pt-28">
      <div className="absolute inset-0 -z-30">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90"
          alt="WebHR connected workforce"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--overlay)_0%,var(--overlay)_46%,rgba(15,5,25,.22)_100%)]" />
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute -right-28 top-20 -z-10 h-[36rem] w-[36rem] rounded-full border border-dashed border-[#C58BFF]/28"
      />

      <div className="wh-container grid min-h-[82vh] items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#9B39F0] text-xl font-bold text-white shadow-xl">
              W
            </div>
            <div>
              <div className="text-3xl font-bold tracking-[-.05em] text-[var(--title)]">
                Web<span className="text-[#9B39F0]">HR</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-[.2em] text-[var(--muted)]">
                Cloud Social HR
              </div>
            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-[#9B39F0] backdrop-blur-xl">
            <Globe2 className="h-4 w-4" />
            Hire-to-Retire Platform
          </div>

          <h1 className="text-4xl font-semibold leading-[1.01] tracking-[-.055em] text-[var(--title)] sm:text-5xl lg:text-7xl">
            HR that feels
            <span className="block text-[#9B39F0]">connected to people</span>
            <span className="block">not paperwork</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--body)] sm:text-lg">
            Connect recruitment, onboarding, attendance, leave, payroll,
            performance and employee communication through one social HR cloud.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#9B39F0] px-7 py-3.5 font-semibold text-white shadow-[0_18px_50px_rgba(155,57,240,.28)] transition hover:-translate-y-1 hover:bg-[#6F22C7]"
            >
              Book WebHR Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-3.5 font-semibold text-[var(--title)] backdrop-blur-xl transition hover:-translate-y-1"
            >
              Explore the Journey
            </a>
          </div>
        </motion.div>

        <PeopleStage />
      </div>
    </section>
  );
}

function PeopleStage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 44 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.15, duration: 0.9 }}
      className="relative min-h-[650px]"
    >
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9B39F0]/16 blur-[90px]" />

      <motion.div
        animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-8 w-[62%] overflow-hidden rounded-[2.5rem] border border-white/20 shadow-2xl"
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=90"
          alt="WebHR team"
          className="h-[430px] w-full object-cover"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0], rotate: [1, -1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-[2.5rem] border border-white/20 shadow-2xl"
      >
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90"
          alt="Workforce meeting"
          className="h-[390px] w-full object-cover"
        />
      </motion.div>

      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="wh-glass absolute right-6 top-16 w-56 rounded-3xl p-5"
      >
        <Network className="h-5 w-5 text-[#9B39F0]" />
        <p className="mt-5 text-3xl font-semibold text-[var(--title)]">190+</p>
        <p className="mt-1 text-sm text-[var(--muted)]">Countries reached</p>
      </motion.div>

      <motion.div
        animate={{ x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="wh-glass absolute bottom-24 left-6 rounded-3xl p-5"
      >
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#9B39F0] text-white">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-[var(--muted)]">Connected people</p>
            <p className="font-semibold text-[var(--title)]">1M+</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Marquee() {
  const all = [...modules, ...modules];

  return (
    <section className="overflow-hidden bg-[#9B39F0] py-5 text-white">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-10 whitespace-nowrap"
      >
        {all.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-[#D9B9FF]" />
            <span className="text-sm font-semibold uppercase tracking-[.18em]">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="bg-[var(--bg)] py-24">
      <div className="wh-container">
        <div className="mb-16 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#9B39F0]">
            WebHR Story
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] text-[var(--title)] sm:text-5xl">
            A visual journey through the complete employee lifecycle
          </h2>
        </div>

        <div className="space-y-28">
          {chapters.map((chapter, index) => {
            const Icon = chapter.icon;
            const reverse = index % 2 === 1;

            return (
              <article
                key={chapter.no}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <div className="overflow-hidden rounded-[2.5rem]">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="h-[560px] w-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-[#13051F]/72 via-transparent to-transparent" />
                  </div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                    className="wh-glass absolute bottom-6 left-6 right-6 rounded-3xl p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#9B39F0] text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[.18em] text-[var(--muted)]">
                          Chapter {chapter.no}
                        </p>
                        <p className="mt-1 font-semibold text-[var(--title)]">
                          {chapter.eyebrow}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7 }}
                  className="lg:px-8"
                >
                  <div className="text-7xl font-semibold tracking-[-.06em] text-[#9B39F0]/16">
                    {chapter.no}
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[.22em] text-[#9B39F0]">
                    {chapter.eyebrow}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] text-[var(--title)] sm:text-4xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-6 text-base leading-8 text-[var(--muted)]">
                    {chapter.text}
                  </p>

                  <div className="mt-8 space-y-4">
                    {chapter.points.map((point, p) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: p * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-[#9B39F0]" />
                        <span className="font-medium text-[var(--text)]">
                          {point}
                        </span>
                      </motion.div>
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

function Journey() {
  return (
    <section className="wh-alt bg-[var(--alt)] py-24">
      <div className="wh-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#9B39F0]">
            Hire-to-Retire
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] text-[var(--title)] sm:text-5xl">
            One employee record through every stage
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-[#9B39F0] via-[#37C6F4] to-[#9B39F0] lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {journey.map((item, index) => {
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
                    className="wh-glass relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full"
                  >
                    <Icon className="h-7 w-7 text-[#9B39F0]" />
                  </motion.div>
                  <p className="mt-5 font-semibold text-[var(--title)]">
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

function NetworkSection() {
  const nodes = [
    { left: "10%", top: "16%", label: "HR", icon: Users },
    { left: "68%", top: "14%", label: "Managers", icon: BriefcaseBusiness },
    { left: "7%", top: "66%", label: "Employees", icon: UserCheck },
    { left: "70%", top: "67%", label: "Leaders", icon: BadgeCheck },
  ];

  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="wh-container grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
        <div className="relative min-h-[620px]">
          <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(155,57,240,.18),transparent_58%)]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#9B39F0]/24"
          />
          <div className="wh-glass absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full">
            <Network className="h-10 w-10 text-[#9B39F0]" />
          </div>

          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.label}
                animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                className="wh-glass absolute w-44 rounded-3xl p-5 text-center"
                style={{ left: node.left, top: node.top }}
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#9B39F0] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 font-semibold text-[var(--title)]">
                  {node.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#9B39F0]">
            Connected Organization
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] text-[var(--title)] sm:text-5xl">
            Bring HR, managers, employees and leadership into one shared flow
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--muted)]">
            WebHR connects people, requests, communication and workforce data
            instead of keeping HR activity isolated.
          </p>

          <div className="mt-8 space-y-5">
            {[
              [MessageCircleMore, "Social communication"],
              [Workflow, "Shared approvals"],
              [BellRing, "Real-time notifications"],
              [ShieldCheck, "Role-based access"],
            ].map(([Icon, label], index) => {
              const ItemIcon = Icon as LucideIcon;
              return (
                <motion.div
                  key={label as string}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="flex items-center gap-4"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#9B39F0]/12 text-[#9B39F0]">
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-[var(--text)]">
                    {label as string}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileExperience() {
  return (
    <section className="wh-alt overflow-hidden bg-[var(--alt)] py-24">
      <div className="wh-container grid items-center gap-16 lg:grid-cols-[.88fr_1.12fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#9B39F0]">
            Mobile Workforce
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] text-[var(--title)] sm:text-5xl">
            HR access that moves with your people
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--muted)]">
            Employees and managers can access attendance, leave, payroll,
            requests and notifications from a mobile-friendly experience.
          </p>
        </div>

        <div className="relative min-h-[640px]">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="wh-glass absolute left-1/2 top-0 w-[320px] -translate-x-1/2 rounded-[3rem] border-[10px] border-[#291437] p-4"
          >
            <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-[#291437]" />
            <div className="rounded-[2rem] bg-[var(--card)] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[var(--muted)]">Welcome back</p>
                  <h3 className="font-semibold text-[var(--title)]">
                    Elena Brooks
                  </h3>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#9B39F0] text-white">
                  <UserCheck className="h-5 w-5" />
                </div>
              </div>

              <div
                className="mt-5 rounded-2xl p-4 text-white"
                style={{
                  background: `linear-gradient(135deg, ${PURPLE}, ${DARK_PURPLE})`,
                }}
              >
                <p className="text-xs uppercase tracking-[.16em] text-white/70">
                  Today
                </p>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-semibold">09:05</div>
                    <div className="text-xs text-white/75">Checked in</div>
                  </div>
                  <ScanFace className="h-8 w-8" />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
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
                      className="rounded-2xl border border-[var(--border)] p-3 text-center"
                    >
                      <AppIcon className="mx-auto h-5 w-5 text-[#9B39F0]" />
                      <p className="mt-2 text-xs text-[var(--text)]">
                        {label as string}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="wh-glass absolute right-0 top-24 rounded-3xl p-5"
          >
            <Smartphone className="h-5 w-5 text-[#9B39F0]" />
            <p className="mt-2 text-sm font-semibold text-[var(--title)]">
              Mobile HR
            </p>
          </motion.div>

          <motion.div
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="wh-glass absolute bottom-16 left-0 rounded-3xl p-5"
          >
            <BellRing className="h-5 w-5 text-[#9B39F0]" />
            <p className="mt-2 text-sm font-semibold text-[var(--title)]">
              Live updates
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="wh-container grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#9B39F0]">
            Business Outcomes
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] text-[var(--title)] sm:text-5xl">
            Better HR operations without losing the human side
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#9B39F0] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#6F22C7]"
          >
            Discuss Your WebHR Requirements
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
              className="border-b border-[var(--border)] pb-6"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#9B39F0]/12 text-[#9B39F0]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-lg leading-7 text-[var(--body)]">{benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="wh-alt bg-[var(--alt)] py-24">
      <div className="wh-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#9B39F0]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.04em] text-[var(--title)] sm:text-5xl">
            Clear answers before your WebHR project begins
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--border)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-5 py-6 text-left"
      >
        <span className="text-lg font-semibold text-[var(--title)]">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#9B39F0] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 leading-7 text-[var(--muted)]">{answer}</p>
      </motion.div>
    </div>
  );
}

function Cta() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <div className="wh-container">
        <div className="relative overflow-hidden rounded-[3rem]">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90"
            alt="WebHR implementation"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,10,73,.96)_0%,rgba(111,34,199,.88)_52%,rgba(55,198,244,.45)_100%)]" />

          <div className="relative max-w-4xl p-8 text-white sm:p-14">
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-white/68">
              WebHR Consultation
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Build a connected social HR experience for your workforce
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78">
              We will review your recruitment, attendance, leave, payroll,
              performance and employee experience requirements before
              recommending a practical WebHR rollout.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-[#6F22C7] transition hover:-translate-y-1 hover:bg-[#F4EAFF]"
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