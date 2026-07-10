import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section, SectionTitle } from "@/components/layout/Section";

export const Route = createFileRoute("/ui-ux")({
  head: () => ({
    meta: [
      { title: "Content Design — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Professional content design, UI/UX visuals, social media posts, banners, logo concepts, ad creatives and brand visuals for digital businesses.",
      },
    ],
  }),
  component: UX,
});

const portfolioCards = [
  {
    img: "/post-design-1.jpg",
    alt: "ui and ux design work for clients",
  },
  {
    img: "/post-design-2.jpg",
    alt: "website and app design",
  },
  {
    img: "/post-design-3.jpg",
    alt: "seo and marketing content design",
  },
  {
    img: "/post-design-4.jpg",
    alt: "creative post design",
  },
  {
    img: "/post-design-6.jpg",
    alt: "brand banner design",
  },
  {
    img: "/post-design-5.jpg",
    alt: "social media creative design",
  },
];

const designDetails = [
  "Social media post design",
  "Brand banner design",
  "Logo concept design",
  "Ad creative design",
  "Website UI sections",
  "Mobile app UI screens",
  "Wireframes and layouts",
  "Design system structure",
  "Prototype and handoff",
];

const designTools = [
  "Canva",
  "Photoshop",
  "Illustrator",
  "Figma",
  "CapCut",
  "After Effects",
];

const highlights = [
  "Social Posts",
  "Brand Banners",
  "Logo Concepts",
];

function UX() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCards = Array.from({ length: 3 }, (_, index) => {
    return portfolioCards[(activeIndex + index) % portfolioCards.length];
  });

  const nextCards = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioCards.length);
  };

  return (
    <SiteLayout>
      {/* Hero Section */}
  {/* Hero Section */}
<section className="uiux-hero-light relative isolate overflow-hidden px-0 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36">
  {/* <img
    src="/post-design-1.jpg"
    alt="Content designer banner"
    className="uiux-hero-bg-image absolute inset-0 -z-30 h-full w-full object-cover"
  /> */}

  <div
    className="absolute inset-0 -z-20"
    style={{ background: "var(--uiux-hero-overlay-1)" }}
  />

  <div
    className="absolute inset-0 -z-20"
    style={{ background: "var(--uiux-hero-overlay-2)" }}
  />

  <div
    className="absolute inset-0 -z-20"
    style={{ background: "var(--uiux-hero-overlay-3)" }}
  />

  <motion.div
    className="absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-[var(--brand-orange)]/15 blur-[120px]"
    animate={{
      scale: [1, 1.12, 1],
      opacity: [0.35, 0.7, 0.35],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="absolute -right-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-[var(--brand-orange)]/12 blur-[120px]"
    animate={{
      y: [0, -14, 0],
      opacity: [0.25, 0.55, 0.25],
    }}
    transition={{
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div className="container-x relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mx-auto max-w-4xl text-center"
    >
      <div className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--brand-orange)]">
        Content Design
      </div>

      <h1 className="text-[34px] font-bold leading-tight text-[var(--uiux-hero-title)] sm:text-5xl lg:text-6xl">
        Creative visuals built for{" "}
        <span className="text-gradient-orange">
          brands and conversions
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[var(--uiux-hero-desc)] sm:text-base lg:text-lg">
        Professional content designs, UI/UX visuals, social media posts,
        banners, ad creatives, logo concepts and brand visuals that help
        businesses look premium online.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
        <Link
          to="/contact"
          className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-orange px-6 py-3.5 font-semibold text-black glow-orange transition-transform duration-300 hover:scale-[1.03]"
        >
          Start a Design Project
          <ArrowRight className="h-4 w-4" />
        </Link>

        <a
          href="#creative-portfolio"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--uiux-hero-outline-border)] px-6 py-3.5 text-[var(--uiux-hero-outline-text)] transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-[var(--uiux-hero-outline-hover)] hover:text-[var(--brand-orange)]"
        >
          View Portfolio
        </a>
      </div>

      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2 + index * 0.08,
              duration: 0.45,
              ease: "easeOut",
            }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-[var(--uiux-hero-card-border)] bg-[var(--uiux-hero-card-bg)] px-3 py-3 text-center text-xs text-[var(--uiux-hero-card-text)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-[var(--uiux-hero-card-hover)] hover:text-[var(--brand-orange)] sm:text-sm"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* Creative Portfolio */}
      <Section className="relative overflow-hidden">
        <div id="creative-portfolio" className="absolute -top-24" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--brand-orange)]/5 to-transparent" />
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--brand-orange)]/10 blur-[120px]" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[var(--brand-orange)]/10 blur-[120px]" />

        <div className="container-x relative">
          <SectionTitle
            eyebrow="Creative Portfolio"
            title="Posts, logos, banners and ad creatives"
            subtitle="A professional design showcase created for social media, brand campaigns, website visuals and performance marketing creatives."
          />

          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-7"
            >
              {visibleCards.map((card, i) => (
                <motion.div
                  key={`${card.img}-${activeIndex}-${i}`}
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.94,
                    rotateX: -6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                  }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.025,
                  }}
                  className="group relative h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition-all duration-500 hover:border-[var(--brand-orange)]/60 hover:shadow-[0_0_35px_rgba(255,132,0,0.18)] sm:h-[320px] lg:h-[430px] lg:rounded-3xl"
                >
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.09]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  <motion.div
                    className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--brand-orange)]/0 blur-[90px] transition-colors duration-500 group-hover:bg-[var(--brand-orange)]/20"
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.25, 0.65, 0.25],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-7 flex justify-center sm:justify-end">
              <motion.button
                type="button"
                onClick={nextCards}
                whileHover={{ scale: 1.06, x: 4 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-white/[0.08] hover:text-[var(--brand-orange)] sm:w-auto"
              >
                Next Designs
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-orange text-black">
                  <ChevronRight className="h-5 w-5" />
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </Section>

      {/* Details + Tools */}
      <Section className="!pt-0 !pb-28">
        <div className="container-x">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10 xl:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/40 sm:rounded-3xl sm:p-8 lg:p-10"
            >
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-orange)]/12 blur-[110px]" />

              <div className="relative">
                <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                  What We Design
                </div>

                <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Creative content designed for premium brand presence
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">
                  We create clean, modern and brand-focused visuals for social
                  media, websites, ads and digital campaigns with strong layout,
                  consistent style and professional presentation.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {designDetails.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.035,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-white/[0.05]"
                    >
                      <Palette className="h-5 w-5 shrink-0 text-[var(--brand-orange)]" />

                      <span className="text-sm text-white/75">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/40 sm:rounded-3xl sm:p-8 lg:p-10"
            >
              <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[var(--brand-orange)]/8 blur-[110px]" />

              <div className="relative">
                <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                  Design Tools
                </div>

                <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl">
                  Tools used for content, posts and branding
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">
                  Professional tools for designing content, editing visuals,
                  creating brand assets and preparing high-quality creative
                  designs.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {designTools.map((tool, i) => (
                    <motion.div
                      key={tool}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.04,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-4 transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-white/[0.05]"
                    >
                      {/* {tool === "Figma" ? (
                        <Figma className="h-5 w-5 shrink-0 text-[var(--brand-orange)]" />
                      ) : (
                        <Palette className="h-5 w-5 shrink-0 text-[var(--brand-orange)]" />
                      )} */}

                      <span className="text-sm text-white/75">{tool}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-orange)]" />

                    <p className="text-sm leading-relaxed text-white/65">
                      Every design is prepared with proper layout, spacing,
                      typography, brand consistency and responsive presentation
                      for modern digital platforms.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}