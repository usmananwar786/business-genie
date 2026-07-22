import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Database,
  Megaphone,
  Search,
  Code2,
  Palette,
  Workflow,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Globe,
  ShieldCheck,
  Rocket,
  Star,
  StarHalf,
  Building2,
  Users,
  BarChart3,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock3,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section, SectionTitle } from "@/components/layout/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Business Genie Consulting — ERP, HRMS & Digital Marketing Solutions",
      },
      {
        name: "description",
        content:
          "Professional ERP, HRMS automation and digital marketing solutions for growing businesses. Automate operations, improve reporting and scale with smart systems.",
      },
      { property: "og:title", content: "Business Genie Consulting" },
      {
        property: "og:description",
        content:
          "Smart solutions for ERP, HRMS automation and digital marketing growth.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Database,
    title: "ERP Implementation",
    desc: "Complete ERP setup for accounts, inventory, HRMS, sales, purchase, production & reporting.",
    to: "/erp-solutions",
    color: "orange",
  },
  {
    icon: Workflow,
    title: "HRMS Automation",
    desc: "Employee onboarding, billing and operations.",
    to: "/HRMS",
    color: "orange",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Performance-driven campaigns that generate leads, grow brand visibility and online sales.",
    to: "/digital-marketing",
    color: "orange",
  },
    {
    icon: Code2,
    title: "Web Development",
    desc: "Modern websites, platforms, CMS systems and custom web solutions that convert.",
    to: "/web-development",
    color: "orange",
  },
  
  {
    icon: Search,
    title: "SEO Services",
    desc: "Technical SEO, on-page, local SEO and organic growth that compounds over time.",
    to: "/seo",
    color: "orange",
  },

  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, conversion-focused interfaces for web, mobile, dashboards and SaaS.",
    to: "/ui-ux",
    color: "orange",
  },
];

const stats = [
  { v: 200, suffix: "+", label: "Projects Delivered" },
  { v: 12, suffix: "+", label: "Industries Served" },
  { v: 2, suffix: "", label: "Global Offices" },
  { v: 99, suffix: "%", label: "Client Retention" },
];

function useCount(target: number, active: boolean) {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!active) return;

    const dur = 1400;
    const start = performance.now();
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setV(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return v;
}

function Counter({
  to,
  suffix,
  label,
}: {
  to: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(true),
      { threshold: 0.4 }
    );

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const v = useCount(to, active);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient-orange">
        {v}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-white/65">{label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="home-hero-light relative min-h-[92vh] flex items-center overflow-hidden pt-16 bg-[var(--home-hero-bg)]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="home-hero-video h-full w-full object-cover scale-105"
        >
          <source
            src="https://res.cloudinary.com/djry1d68x/video/upload/hero-bg_uivghf.mp4"
            type="video/mp4"
          />
        </video>

        <div
          className="absolute inset-0"
          style={{ background: "var(--home-hero-overlay-1)" }}
        />

        <div
          className="absolute inset-0"
          style={{ background: "var(--home-hero-overlay-2)" }}
        />

        <div
          className="absolute inset-0"
          style={{ background: "var(--home-hero-overlay-3)" }}
        />
      </div>

      {/* Slow Orange Glow */}
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 -left-24 h-[420px] w-[420px] rounded-full bg-[var(--brand-orange)]/20 blur-[145px]"
      />

      <motion.div
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[var(--brand-orange)]/12 blur-[160px]"
      />

      {/* Soft Grid */}
      <div
        className="absolute inset-0"
        style={{
          opacity: "var(--home-hero-grid-opacity)",
          backgroundImage:
            "linear-gradient(var(--home-hero-grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--home-hero-grid-color) 1px, transparent 1px)",
          backgroundSize: "82px 82px",
        }}
      />

      <div className="relative container-x grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--home-hero-badge-border)] bg-[var(--home-hero-badge-bg)] text-[11px] md:text-xs uppercase tracking-[0.22em] text-[var(--home-hero-badge-text)] hover:text-[var(--brand-orange)] hover:border-[var(--brand-orange)]/50 transition-all duration-300 mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Business Automation Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.75 }}
            className="max-w-4xl text-[32px] sm:text-[40px] md:text-[50px] lg:text-[56px] xl:text-[62px] font-semibold leading-[1.12] tracking-[-0.025em] text-[var(--home-hero-title)]"
          >
            Smart Solutions for{" "}
            <span className="text-[var(--home-hero-title)] transition-colors duration-300 hover:text-[var(--brand-orange)]">
              ERP
            </span>
            ,{" "}
            <span className="text-[var(--home-hero-title)] transition-colors duration-300 hover:text-[var(--brand-orange)]">
              HRMS
            </span>{" "}
            and{" "}
            <span className="text-[var(--home-hero-title)] transition-colors duration-300 hover:text-[var(--brand-orange)]">
              Digital Marketing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.65 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-[var(--home-hero-desc)] max-w-2xl leading-relaxed"
          >
            Business Genie Consulting helps businesses streamline operations
            accelerate transformation, achieve sustainable growth innovative
            technology and consulting solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.65 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="btn-shine inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-orange text-black font-semibold glow-orange hover:scale-[1.03] transition-transform"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--home-hero-outline-border)] text-[var(--home-hero-outline-text)] hover:text-[var(--brand-orange)] hover:border-[var(--brand-orange)]/60 hover:bg-[var(--home-hero-outline-hover)] transition-all duration-300"
            >
              Explore services
            </Link>

            {/* <Link
              to="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--home-hero-outline-border)] text-[var(--home-hero-outline-text)] hover:text-[var(--brand-orange)] hover:border-[var(--brand-orange)]/60 hover:bg-[var(--home-hero-outline-hover)] transition-all duration-300"
            >
              Read our blogs
              <BookOpen className="h-4 w-4" />
            </Link> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.65 }}
            className="mt-9 grid sm:grid-cols-3 gap-3 max-w-2xl"
          >
            {[
              [
                "ERP Systems",
                "Accounts, Sales & Purchase, Inventory, Production & Reporting",
              ],
              [
                "HRMS Automation",
                "Recruitment, Employee Records, Attendance & Payroll",
              ],
              [
                "Digital Marketing",
                "SEO, Google Ads, Lead Generation, and Digital Growth Solutions",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="group rounded-2xl border border-[var(--home-hero-card-border)] bg-[var(--home-hero-card-bg)] px-5 py-4 backdrop-blur-md hover:border-[var(--brand-orange)]/60 hover:bg-[var(--home-hero-card-hover)] transition-all duration-300"
              >
                <div className="text-sm font-semibold text-[var(--home-hero-card-title)] group-hover:text-[var(--brand-orange)] transition-colors duration-300">
                  {title}
                </div>

                <div className="mt-1 text-xs leading-relaxed text-[var(--home-hero-card-desc)]">
                  {text}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.65 }}
            className="mt-8 flex flex-wrap gap-5 text-sm text-[var(--home-hero-small-text)]"
          >
            {[
              "Clean Implementation",
              "Professional Reporting",
              "Ongoing Support",
            ].map((item) => (
              <div
                key={item}
                className="group flex items-center gap-2 hover:text-[var(--brand-orange)] transition-colors duration-300"
              >
                <CheckCircle2 className="h-4 w-4 text-[var(--home-hero-check)] group-hover:text-[var(--brand-orange)] transition-colors duration-300" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side Cards */}
        <div className="relative h-[520px] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.65 }}
            className="absolute top-0 right-0 w-80 rounded-3xl border border-[var(--home-hero-floating-border)] bg-[var(--home-hero-floating-bg)] p-6 backdrop-blur-xl hover:border-[var(--brand-orange)]/60 transition-all duration-300 animate-float-slow"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs text-[var(--home-hero-floating-muted)] uppercase tracking-wider">
                  ERP Control
                </div>

                <div className="text-sm font-semibold text-[var(--home-hero-floating-title)] hover:text-[var(--brand-orange)] transition-colors">
                  Business Dashboard
                </div>
              </div>

              <div className="h-2.5 w-2.5 rounded-full bg-[var(--brand-orange)] animate-pulse" />
            </div>

            <div className="text-4xl font-bold text-[var(--home-hero-floating-title)]">
              $284,910
            </div>

            <div className="text-xs text-[var(--brand-orange)] mt-1">
              ▲ 24.6% monthly growth
            </div>

            <div className="mt-5 flex items-end gap-1.5 h-20">
              {[42, 66, 52, 78, 61, 92, 74, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-orange"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65 }}
            className="absolute top-48 left-0 w-72 rounded-3xl border border-[var(--home-hero-floating-border)] bg-[var(--home-hero-floating-bg)] p-6 backdrop-blur-xl hover:border-[var(--brand-orange)]/60 transition-all duration-300 animate-float-slow"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-orange text-black">
                <Users className="h-5 w-5" />
              </div>

              <div>
                <div className="text-sm font-semibold text-[var(--home-hero-floating-title)] hover:text-[var(--brand-orange)] transition-colors">
                  HRMS Automation
                </div>

                <div className="text-xs text-[var(--home-hero-floating-muted)]">
                  Recruitment, Employee Records, Attendance & Payroll
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              {[
                ["Staff", "250+"],
                ["Payroll", "Auto"],
                ["Reports", "Live"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-lg py-2 bg-[var(--home-hero-mini-bg)]"
                >
                  <div className="text-[10px] text-[var(--home-hero-floating-muted)]">
                    {k}
                  </div>

                  <div className="text-sm font-bold text-[var(--brand-orange)]">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.72, duration: 0.65 }}
            className="absolute bottom-0 right-8 w-72 rounded-3xl border border-[var(--home-hero-floating-border)] bg-[var(--home-hero-floating-bg)] p-6 backdrop-blur-xl hover:border-[var(--brand-orange)]/60 transition-all duration-300 animate-float-slow"
            style={{ animationDelay: "2s" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-[var(--home-hero-floating-muted)] uppercase tracking-wider">
                  Marketing Growth
                </div>

                <div className="text-sm font-semibold text-[var(--home-hero-floating-title)] hover:text-[var(--brand-orange)] transition-colors">
                  Digital Performance
                </div>
              </div>

              <TrendingUp className="h-5 w-5 text-[var(--brand-orange)]" />
            </div>

            <div className="mt-4 text-5xl font-bold text-[var(--home-hero-floating-title)]">
              4.8
              <span className="text-lg text-[var(--home-hero-floating-muted)]">
                x
              </span>
            </div>

            <div className="mt-4 h-2.5 rounded-full overflow-hidden bg-[var(--home-hero-mini-bg)]">
              <div className="h-full bg-gradient-orange w-[88%]" />
            </div>

            <div className="mt-3 text-[11px] text-[var(--home-hero-floating-muted)]">
              SEO • Paid Ads • Leads • Conversion Tracking
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--home-hero-scroll)] text-xs flex flex-col items-center gap-2"
      >
        <span className="hover:text-[var(--brand-orange)] transition-colors duration-300"></span>

        <div className="h-8 w-px bg-gradient-to-b from-[var(--home-hero-scroll)] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}


function useReplayWhenVisible(threshold = 0.24) {
  const sectionRef = useRef<HTMLElement>(null);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let wasVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible =
          entry.isIntersecting && entry.intersectionRatio >= threshold;

        if (isVisible && !wasVisible) {
          setCycle((current) => current + 1);
        }

        wasVisible = isVisible;
      },
      {
        threshold: [0, threshold, 0.55, 0.85],
        rootMargin: "-8% 0px -8% 0px",
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { sectionRef, cycle };
}

function VideoAboutCounter({
  to,
  suffix,
  label,
  eyebrow,
  accent = "orange",
  delay = 0,
}: {
  to: number;
  suffix: string;
  label: string;
  eyebrow: string;
  accent?: "orange" | "contrast";
  delay?: number;
}) {
  const counterRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = counterRef.current;
    if (!element || active) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [active]);

  const value = useCount(to, active);

  return (
    <motion.div
      ref={counterRef}
      data-accent={accent}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="video-about-counter min-w-0"
    >
      <div className="video-about-counter-value text-3xl font-bold leading-none sm:text-4xl lg:text-[42px]">
        {value}
        {suffix}
      </div>
      <div className="mt-3 min-w-0">
        <div className="video-about-counter-eyebrow text-[10px] font-semibold uppercase tracking-[0.17em] sm:text-[11px]">
          {eyebrow}
        </div>
        <div className="video-about-counter-label mt-1.5 max-w-[17rem] break-words text-sm leading-5 sm:leading-6">
          {label}
        </div>
      </div>
    </motion.div>
  );
}


function AnimatedVisionHeading({ cycle }: { cycle: number }) {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <motion.h2
      key={`animated-vision-heading-${cycle}`}
      aria-label="Your Vision, Our Expertise Every Step of the Way"
      className="vision-heading video-about-title mt-1 max-w-[720px] font-bold leading-[1.02] tracking-[-0.045em]"
    >
      <span className="vision-heading-mask block overflow-hidden pb-[0.08em]">
        <motion.span
          initial={{ y: "118%", opacity: 0, rotate: 1.2 }}
          animate={{ y: "0%", opacity: 1, rotate: 0 }}
          transition={{ delay: 0.08, duration: 0.82, ease }}
          className="block origin-left"
        >
          Your Vision,{" "}
          <span className="vision-heading-accent relative inline-block whitespace-nowrap pb-[0.16em]">
            Our Expertise

            <motion.svg
              aria-hidden="true"
              viewBox="0 0 340 22"
              preserveAspectRatio="none"
              className="pointer-events-none absolute -bottom-[0.02em] left-0 h-[0.25em] w-full overflow-visible"
            >
              <motion.path
                d="M3 13 C 68 7, 132 9, 195 13 C 245 17, 292 13, 337 8"
                fill="none"
                stroke="var(--brand-orange)"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.94, duration: 0.78, ease }}
              />
            </motion.svg>
          </span>
        </motion.span>
      </span>

      <span className="vision-heading-mask block overflow-hidden pb-[0.1em]">
        <motion.span
          initial={{ y: "118%", opacity: 0, rotate: 1.2 }}
          animate={{ y: "0%", opacity: 1, rotate: 0 }}
          transition={{ delay: 0.24, duration: 0.84, ease }}
          className="block origin-left"
        >
          Every Step of the Way
        </motion.span>
      </span>
    </motion.h2>
  );
}

function VideoAboutSection() {
  const { sectionRef, cycle } = useReplayWhenVisible(0.24);

  return (
    <section
      ref={sectionRef}
      className="video-about-section relative overflow-hidden py-9 sm:py-10 lg:py-11"
    >
      <style>{`
        .video-about-section {
          --video-about-bg: #050505;
          --video-about-title: #ffffff;
          --video-about-body: rgba(255,255,255,.72);
          --video-about-muted: rgba(255,255,255,.58);
          --video-about-border: rgba(255,255,255,.12);
          --video-about-card: rgba(255,255,255,.045);
          --video-about-image-border: rgba(255,255,255,.16);
          background: var(--video-about-bg);
          color: var(--video-about-title);
        }

        .cream-theme .video-about-section,
        .light .video-about-section,
        [data-theme="light"] .video-about-section {
          --video-about-bg: #e8e4da;
          --video-about-title: #171512;
          --video-about-body: #4f4a43;
          --video-about-muted: #6f695f;
          --video-about-border: rgba(23,21,18,.14);
          --video-about-card: rgba(255,255,255,.52);
          --video-about-image-border: rgba(23,21,18,.14);
        }

        .video-about-title { color: var(--video-about-title); }
        .video-about-body { color: var(--video-about-body); }
        .video-about-muted { color: var(--video-about-muted); }
        .video-about-display {
          font-family: Georgia, "Times New Roman", serif;
        }
        .vision-heading {
          font-family: inherit;
          font-size: clamp(2.05rem, 4.15vw, 3.2rem);
          text-wrap: balance;
        }
        .vision-heading-accent {
          color: var(--video-about-title);
        }
        .video-about-counter {
          border-top: 1px solid var(--video-about-border);
          padding-top: 1rem;
        }
        .video-about-counter-value {
          color: var(--video-about-title);
          letter-spacing: -.035em;
        }
        .video-about-counter[data-accent="orange"] .video-about-counter-value {
          color: var(--brand-orange);
        }
        .video-about-counter[data-accent="contrast"] .video-about-counter-value {
          color: var(--video-about-title);
        }
        .video-about-counter-eyebrow { color: var(--brand-orange); }
        .video-about-counter-label { color: var(--video-about-muted); }
        .video-about-image-frame {
          border: 1px solid var(--video-about-image-border);
          background: var(--video-about-card);
          box-shadow: 0 22px 62px rgba(0,0,0,.17);
        }

        .video-about-copy {
          min-height: 0;
          align-self: start;
        }

        @media (prefers-reduced-motion: reduce) {
          .video-about-section *,
          .video-about-section *::before,
          .video-about-section *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 24, 0], y: [0, -14, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-28 top-14 h-72 w-72 rounded-full bg-[var(--brand-orange)]/10 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -20, 0], y: [0, 14, 0], scale: [1.04, 1, 1.04] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[var(--brand-orange)]/10 blur-[130px]"
      />

      {/* <div className="container-x relative grid min-w-0 items-start gap-9 lg:grid-cols-[1.02fr_.98fr] lg:gap-11 xl:gap-14">
        <div className="relative h-[350px] sm:h-[400px] lg:h-[465px] xl:h-[500px]">
          <motion.div
            key={`video-about-main-image-${cycle}`}
            initial={{
              clipPath: "inset(0 100% 0 0)",
              opacity: 1,
              x: -4,
            }}
            animate={{
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="video-about-image-frame absolute left-[8%] right-0 top-0 h-[86%] overflow-hidden rounded-sm sm:left-[11%]"
            style={{ willChange: "clip-path, transform" }}
          >
            <motion.img
              key={`video-about-main-photo-${cycle}`}
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=88"
              alt="Business automation and consulting workflow"
              initial={{ scale: 1.08, x: -14 }}
              animate={{ scale: 1, x: 0 }}
              transition={{
                duration: 1.72,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-[var(--brand-orange)]/10" />
          </motion.div>

          <motion.div
            key={`video-about-small-image-${cycle}`}
            initial={{
              clipPath: "inset(0 100% 0 0)",
              opacity: 0,
              x: -48,
              y: 22,
            }}
            animate={{
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              delay: 0.62,
              duration: 1.02,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6, rotate: -1.2 }}
            className="video-about-image-frame absolute bottom-0 left-0 z-30 w-[43%] overflow-hidden rounded-sm border-[6px] sm:w-[40%] sm:border-[8px]"
            style={{
              borderColor: "var(--video-about-bg)",
              willChange: "clip-path, transform",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=88"
              alt="Digital reporting and analytics dashboard"
              className="aspect-[1.14/1] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-[var(--brand-orange)]/10" />
          </motion.div>

          <motion.div
            key={`video-about-line-${cycle}`}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.82, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[4%] left-[36%] right-[4%] h-px origin-left bg-gradient-to-r from-[var(--brand-orange)]/70 to-transparent"
          />
        </div>

        <div className="video-about-copy relative flex min-w-0 flex-col justify-start self-start pt-0">
          <motion.div
            key={`video-about-eyebrow-${cycle}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)] sm:text-xs"
          >
            About Us
          </motion.div>

          <AnimatedVisionHeading cycle={cycle} />

          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.2, duration: 0.58, ease: "easeOut" }}
            className="video-about-title mt-3 text-base font-semibold leading-snug sm:text-lg"
          >
            One partner for systems, people and sustainable growth
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.28, duration: 0.62, ease: "easeOut" }}
            className="video-about-body mt-2.5 max-w-2xl text-sm leading-6 sm:text-[15px] sm:leading-7"
          >
            Business Genie Consulting helps organizations connect ERP, HRMS,
            reporting, websites and digital marketing through one practical
            growth strategy. We simplify complex operations, improve visibility
            and build scalable systems that support confident business decisions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.36, duration: 0.58, ease: "easeOut" }}
            className="video-about-muted mt-2.5 text-sm leading-6 sm:text-[15px]"
          >
            From implementation and automation to performance marketing and
            long-term optimization, every solution is aligned with measurable
            business outcomes.
          </motion.p>

         

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.54, duration: 0.56 }}
            className="mt-4"
          >
            <Link
              to="/contact"
              className="btn-shine inline-flex items-center gap-2 rounded-sm bg-gradient-orange px-6 py-3 font-semibold text-black shadow-[0_14px_34px_rgba(246,160,26,.2)] transition hover:-translate-y-1"
            >
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div> */}
    </section>
  );
}


type HomeBlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  details: string[];
};

const homeBlogPosts: HomeBlogPost[] = [
  {
    slug: "erp-implementation-roadmap",
    category: "ERP Implementation",
    title: "A Practical ERP Implementation Roadmap for Growing Businesses",
    excerpt:
      "Move from disconnected spreadsheets and manual processes to one structured ERP system without disrupting daily operations.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=86",
    date: "July 18, 2026",
    readTime: "7 min read",
    details: [
      "Start by mapping sales, purchase, inventory, accounts, production and reporting workflows before selecting modules.",
      "Clean master data, define responsibilities and launch priority modules in manageable phases. Testing and role-based training should happen before go-live.",
      "After launch, review user adoption, report accuracy and process exceptions so the ERP continues improving with the business.",
    ],
  },
  {
    slug: "hrms-automation-guide",
    category: "HRMS Automation",
    title: "How HRMS Automation Improves Employee Operations",
    excerpt:
      "Connect recruitment, employee records, attendance, payroll and reporting in one reliable HR workflow.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=86",
    date: "July 12, 2026",
    readTime: "6 min read",
    details: [
      "HRMS automation creates one controlled source for employee records and replaces scattered files, messages and spreadsheets.",
      "Recruitment, onboarding, attendance, leave approvals and payroll inputs can move through clear approval stages with role-based access.",
      "Live dashboards help management understand workforce trends while employees receive faster and more consistent support.",
    ],
  },
  {
    slug: "digital-marketing-growth-system",
    category: "Digital Marketing",
    title: "Build a Digital Marketing System That Generates Measurable Growth",
    excerpt:
      "Combine paid media, SEO, landing pages and conversion tracking into one performance-focused growth system.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=86",
    date: "July 6, 2026",
    readTime: "8 min read",
    details: [
      "Begin with a clear audience, offer and conversion goal, then align paid ads, SEO, content and landing pages around the same customer journey.",
      "Configure GA4, GTM and meaningful conversion events so optimization is based on qualified leads and revenue rather than clicks alone.",
      "Review message quality, audience relevance, landing-page experience and lead quality together to create sustainable growth.",
    ],
  },
];

function HomeBlogCard({ post, index }: { post: HomeBlogPost; index: number }) {
  const [open, setOpen] = useState(false);
  const contentId = `home-blog-${post.slug}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      className="home-blog-card group flex min-w-0 flex-col overflow-hidden rounded-3xl border"
    >
      <div className="relative h-56 overflow-hidden sm:h-64">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-[var(--brand-orange)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-black">
          {post.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="home-blog-muted flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <span>{post.date}</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
            {post.readTime}
          </span>
        </div>

        <h3 className="home-blog-title mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
          {post.title}
        </h3>

        <p className="home-blog-body mt-3 text-sm leading-6 sm:text-[15px] sm:leading-7">
          {post.excerpt}
        </p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={contentId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="home-blog-expanded mt-5 space-y-3 border-t pt-5">
                {post.details.map((detail) => (
                  <p
                    key={detail}
                    className="home-blog-body text-sm leading-6 sm:text-[15px] sm:leading-7"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={contentId}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-orange)] px-4 py-2 text-xs font-bold text-black transition hover:-translate-y-0.5"
        >
          {open ? "Show less" : "Read more"}
          {open ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
      </div>
    </motion.article>
  );
}

function HomeBlogSection() {
  return (
    <section className="home-blog-section relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <style>{`
        .home-blog-section {
          --home-blog-bg: #050505;
          --home-blog-title: #ffffff;
          --home-blog-body: rgba(255,255,255,.68);
          --home-blog-muted: rgba(255,255,255,.48);
          --home-blog-border: rgba(255,255,255,.11);
          --home-blog-card: rgba(255,255,255,.035);
          --home-blog-card-hover: rgba(255,255,255,.055);
          background: var(--home-blog-bg);
          color: var(--home-blog-title);
          font-family: inherit;
        }

        .cream-theme .home-blog-section,
        .light .home-blog-section,
        [data-theme="light"] .home-blog-section {
          --home-blog-bg: #e8e4da;
          --home-blog-title: #171512;
          --home-blog-body: #514c45;
          --home-blog-muted: #746d63;
          --home-blog-border: rgba(23,21,18,.14);
          --home-blog-card: rgba(255,255,255,.48);
          --home-blog-card-hover: rgba(255,255,255,.7);
        }

        .home-blog-title { color: var(--home-blog-title); }
        .home-blog-body { color: var(--home-blog-body); }
        .home-blog-muted { color: var(--home-blog-muted); }
        .home-blog-card {
          border-color: var(--home-blog-border);
          background: var(--home-blog-card);
          box-shadow: 0 20px 52px rgba(0,0,0,.12);
          transition: border-color .3s ease, background .3s ease, transform .3s ease;
        }
        .home-blog-card:hover {
          border-color: color-mix(in srgb, var(--brand-orange) 48%, transparent);
          background: var(--home-blog-card-hover);
          transform: translateY(-4px);
        }
        .home-blog-expanded { border-color: var(--home-blog-border); }
      `}</style>

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-orange)]/45 to-transparent" />
      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[var(--brand-orange)]/8 blur-[130px]" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[var(--brand-orange)]/8 blur-[130px]" />

      <div className="container-x relative">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)] sm:text-xs">
              Business Insights
            </div>
            <h2 className="home-blog-title mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Practical guidance for smarter business growth
            </h2>
            <p className="home-blog-body mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
              Explore useful articles based on our ERP, HRMS, reporting, web and
              digital marketing experience.
            </p>
          </div>

          <Link
            to="/blogs"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--home-blog-border)] px-5 py-3 text-sm font-semibold text-[var(--home-blog-title)] transition hover:border-[var(--brand-orange)]/60 hover:text-[var(--brand-orange)]"
          >
            View all blogs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homeBlogPosts.map((post, index) => (
            <HomeBlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.58 }}
          className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-[var(--home-blog-border)] bg-[var(--home-blog-card)] px-6 py-7 sm:flex-row sm:items-center sm:px-8"
        >
          <div>
            <h3 className="home-blog-title text-xl font-semibold sm:text-2xl">
              Need help applying these ideas to your business?
            </h3>
            <p className="home-blog-body mt-2 text-sm leading-6">
              Talk with Business Genie Consulting about ERP, HRMS, web or digital growth.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-shine inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--brand-orange)] px-6 py-3 font-semibold text-black transition hover:-translate-y-1"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <SiteLayout>
      <Hero />

      <Section>
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 2xl:gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10"
            >
              <img
                src="/business-automation.jpg"
                alt="ERP, HRMS and Digital Marketing Automation"
                className="h-[300px] sm:h-[380px] md:h-[440px] lg:h-[520px] xl:h-[560px] 2xl:h-[620px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

              <div className="absolute left-5 right-5 bottom-5 sm:left-7 sm:right-7 sm:bottom-7">
                <div className="inline-flex rounded-full bg-[var(--brand-orange)] px-4 py-1.5 text-[11px] sm:text-xs font-semibold text-black">
                  ERP • HRMS • Digital Marketing
                </div>

                <h3 className="mt-4 max-w-md text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight text-white">
                  Smart systems for modern business growth
                </h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-2xl lg:max-w-none"
          >
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-[var(--brand-orange)] mb-3 sm:mb-4">
              Trusted Growth Partner
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[62px] font-semibold leading-[1.12] tracking-[-0.025em] text-white">
              Build a smarter business with{" "}
              <span className="text-white transition-colors duration-300 hover:text-[var(--brand-orange)]">
                ERP
              </span>
              ,{" "}
              <span className="text-white transition-colors duration-300 hover:text-[var(--brand-orange)]">
                HRMS
              </span>{" "}
              and{" "}
              <span className="text-white transition-colors duration-300 hover:text-[var(--brand-orange)]">
                Digital Marketing
              </span>
            </h2>

            <div className="mt-5 sm:mt-6 space-y-4 text-sm sm:text-base md:text-lg 2xl:text-xl leading-relaxed text-white/70">
              <p>
                Business Genie Consulting helps companies transform fragmented manual processes into structured, automated, and scalable digital ecosystems.

We partner with organizations to streamline operations, improve visibility, and drive sustainable growth. 
              </p>

              <p>
               
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "ERP Implementation",
                "HRMS Automation",
                "Digital Marketing",
                "SEO & Web Growth",
                "Reporting Dashboards",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.25 }}
                  className="group flex items-center gap-3 text-sm sm:text-[15px] text-white/75 hover:text-[var(--brand-orange)] transition-colors duration-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-white/55 group-hover:text-[var(--brand-orange)] transition-colors duration-300" />
                  {item}
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Practical",
                "Result-focused",
                "Long-term support",
                // "Transparent",
                "Scalable",
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-white/10 text-white/75 hover:text-[var(--brand-orange)] hover:border-[var(--brand-orange)]/50 transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-orange)]/5 to-transparent" />
        <div className="relative container-x">
          <SectionTitle
            eyebrow="Services"
            title={
              <>
                End to End Growth Solutions{" "}
                <span className="text-gradient-orange">
                  Entire Growth Stack
                </span>
              </>
            }
            subtitle="ERP, HRMS, marketing, web and design built to work together, not in silos."
          />




          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08 }}
                className="group relative glass-card p-7 hover:border-[var(--brand-orange)]/40 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity glow-orange" />
                <div className="relative grid h-12 w-12 place-items-center rounded-xl mb-5 bg-gradient-orange text-black">
                  <s.icon className="h-6 w-6" />
                </div>

                <h3 className="relative text-xl font-bold mb-2 group-hover:text-[var(--brand-orange)] transition-colors">
                  {s.title}
                </h3>

                <p className="relative text-sm text-white/65 leading-relaxed">
                  {s.desc}
                </p>

                <Link
                  to={s.to}
                  className="relative inline-flex items-center gap-1.5 mt-5 text-sm text-[var(--brand-orange)] group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!py-12 sm:!py-14 lg:!py-16">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 backdrop-blur-xl"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--brand-orange)]/15 blur-[100px]" />
            <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-[var(--brand-orange)]/10 blur-[120px]" />

            {/* Light Border Line */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-orange)]/40 to-transparent" />

            <div className="relative grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative text-center"
                >
                  {/* Divider desktop only */}
                  {i !== 0 && (
                    <div className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white/10 lg:block" />
                  )}

                  <Counter to={s.v} suffix={s.suffix} label={s.label} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <VideoAboutSection />

      <Section>
        <div className="container-x">
          <SectionTitle
            eyebrow="Why Choose Us"
            title={
              <>
                Built for the way{" "}
                <span className="text-gradient-orange">real businesses</span>{" "}
                work
              </>
            }
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Rocket,
                t: "Real implementation experience",
                d: "Hands-on with admin, sales and ERP — we've done it, not just consulted on it.",
              },
              {
                icon: ShieldCheck,
                t: "Result-focused strategy",
                d: "Every system, campaign and design ties back to measurable business outcomes.",
              },
              {
                icon: Users,
                t: "Long-term support",
                d: "Training, optimization, error fixing and ongoing partnership beyond go-live.",
              },
              {
                icon: Globe,
                t: "Global delivery",
                d: "Teams across Pakistan, USA, UAE, UK and KSA — 24/7 timezone coverage.",
              },
              {
                icon: BarChart3,
                t: "Transparent reporting",
                d: "Dashboards, KPIs and clear communication. No black boxes, no surprises.",
              },
              {
                icon: Building2,
                t: "Industry experience",
                d: "Retail, manufacturing, distribution, real estate, healthcare, education and more.",
              },
            ].map((w, i) => (
              <motion.div
                key={w.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 hover:border-[var(--brand-orange)]/40 transition-colors"
              >
                <w.icon className="h-8 w-8 text-[var(--brand-orange)] mb-4" />

                <h3 className="font-semibold mb-2 hover:text-[var(--brand-orange)] transition-colors">
                  {w.t}
                </h3>

                <p className="text-sm text-white/60 leading-relaxed">
                  {w.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-orange)]/5 to-transparent" />
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--brand-orange)]/15 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--brand-orange)]/10 blur-[150px]" />

        <div className="relative container-x">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <SectionTitle
              eyebrow="Director"
              title={
                <>
                  Meet the people behind{" "}
                  <span className="text-gradient-orange">
                    Business Genie Consulting
                  </span>
                </>
              }
              subtitle="Experienced professionals helping businesses automate operations, improve systems and grow with digital strategy."
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {[
              {
                img: "/owner-2.png",
                n: "Syed Umar Javaid",
                r: "Entrepreneur | HRMS & Operations Strategist",
                q: "Umer has a proven track record of success, having worked for several notable companies in the past, including Systems Ltd, Xavor Corporation, and i2C Inc. HRMS throughout his career, he has held various key leadership roles, including Director Strategy and planning and has consistently demonstrated an ability to drive growth, innovation, and profitability.",
                badge: "Director",
                status: "Trusted Expert",
                tags: [ "HRMS", "Leadership", "Trainings", "AI Automation","ERP",],
              },
              {
                img: "/owner-1.jpg",
                n: "Saleem Zia",
                r: "ERP & Sales Strategist",
                q: "Saleem is a visionary and results-driven leader with a proven track record of success in IT sales. With 10 years of experience in leadership roles, he has consistently demonstrated the ability to drive organizational growth and profitability. He has a deep understanding of market trends, competitive landscapes, and emerging opportunities..",
                badge: "Director",
                status: "Trusted Expert",
                tags: ["ERP", "Accounts", "Sales", "Purchase",  "Inventory", "Production", "Project Management", "Asset Management", "CRM", ],
              },
              {
                img: "/owner-3.jpg",
                n: "Business Genie Team",
                r: "ERP systems, HRMS automation, web design and digital marketing specialists",
                q: " ERP & HRMS system implementation ,Designing modern websites,  UI/UX systems,  and Workflow automation for scalable business growth.",
                badge: "Team",
                status: "Professional Team",
                tags: [ "ERP", "HRMS",  "Automation", "Web", "UI/UX", "Systems Design", , ],
              },
            ].map((t, i) => (
              <motion.div
                key={t.n}
                initial={{ opacity: 0, y: 34, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/55 hover:bg-white/[0.06]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[var(--brand-orange)]/25 blur-[70px]" />
                  <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[var(--brand-orange)]/10 blur-[70px]" />
                </div>

                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-500 group-hover:w-full" />

                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <img
                      src={t.img}
                      alt={t.n}
                      className="h-[260px] sm:h-[280px] lg:h-[310px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    <div className="absolute left-4 right-4 bottom-4">
                      <div className="inline-flex rounded-full bg-[var(--brand-orange)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
                        {t.badge}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                      {t.n}
                    </h3>

                    <div className="mt-1 text-sm font-medium text-[var(--brand-orange)]">
                      {t.r}
                    </div>

                    <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-white/65">
                      {t.q}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55 transition-all duration-300 group-hover:border-[var(--brand-orange)]/35 group-hover:text-white/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                     <div className="flex gap-1">
  {/* 4 full orange stars */}
  {Array.from({ length: 4 }).map((_, j) => (
    <Star
      key={j}
      className="h-4 w-4 fill-[var(--brand-orange)] text-[var(--brand-orange)]"
    />
  ))}

  {/* 5th star half orange and half white */}
  <span className="relative inline-flex h-4 w-4">
    {/* White full star background */}
    <Star className="h-4 w-4 fill-white/40 text-white/45" />

    {/* Orange half star on top */}
    <StarHalf className="absolute left-0 top-0 h-4 w-4 fill-[var(--brand-orange)] text-[var(--brand-orange)]" />
  </span>
</div>

                      <span className="text-xs text-white/45 group-hover:text-white/70 transition-colors">
                        {t.status}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <HomeBlogSection />
    </SiteLayout>
  );
}








