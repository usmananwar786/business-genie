import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Store,
  Factory,
  Truck,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Globe2,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, Section } from "@/components/layout/Section";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Retail, manufacturing, distribution, real estate, healthcare, pharma, e-commerce, textile and enterprise ERP solutions.",
      },
    ],
  }),
  component: Industries,
});

const items = [
  {
    icon: Store,
    t: "Retail",
    d: "POS, inventory, multi-branch and customer loyalty systems.",
  },
  {
    icon: Factory,
    t: "Manufacturing",
    d: "BOMs, production planning, costing and MRP.",
  },
  {
    icon: Truck,
    t: "Distribution",
    d: "Warehouses, routes, vendor and dealer networks.",
  },
  {
    icon: Building2,
    t: "Garments Manufacturing",
    d: "knitting, dyeing, printing and stitching.",
  },
  {
    icon: HeartPulse,
    t: "Solar",
    d: "Power generation, storage and smart grid.",
  },
  {
    icon: GraduationCap,
    t: "Pharma",
    d: "Weighing raw materials, formulation, coating and packaging.",
  },
  {
    icon: ShoppingBag,
    t: "E-commerce",
    d: "Conversion-focused storefronts and growth marketing.",
  },
  {
    icon: Globe2,
    t: "Enterprises",
    d: "Scalable platforms and multi-country rollouts.",
  },
];

const industryCards = [
  {
    img: "/retail.jpg",
    title: "Retail Operations",
    desc: "Manage POS, stock, branches, purchases, customers and daily sales reports from one connected system.",
  },
  {
    img: "/manufacturing.jpg",
    title: "Manufacturing Control",
    desc: "Track production planning, raw materials, costing, wastage, finished goods and factory reporting.",
  },
  {
    img: "/distribution.jpg",
    title: "Distribution Network",
    desc: "Control warehouses, dealers, vendors, routes, dispatch, deliveries and payment follow-ups.",
  },
  {
    img: "/textile.jpg",
    title: "Textile/Garments Manufacturing",
    desc: "Complete cut to pack process management nitting, dyeing, printing, stitching And stock movement with clear visibility.",
  },
  {
    img: "/pharma.jpg",
    title: "Pharma Processing",
    desc: "Manage raw material weighing, formulation, batch processing, coating, packaging and compliance records.",
  },
  {
    img: "/ecommerce.jpg",
    title: "E-commerce Growth",
    desc: "Connect online orders, inventory, marketing, customer data, conversion tracking and reporting dashboards.",
  },
  {
    img: "/solor.png",
    title: "Solar Companies",
    desc: "Manage sale inquires Quotations with end to end project management. Site wise Inventory and expense tracking.",
  },
   {
    img: "/Construction.jpg",
    title: "Construction ",
    desc: "Healping goverment contractors and loacl compaines to gain complete control over their projects and operations.",
  },
];

function Industries() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries We Serve"
        title={
          <>
            Real experience across{" "}
            <span className="text-gradient-orange">industries</span>
          </>
        }
        subtitle="We solve practical operational problems for different sectors through ERP, automation, reporting, web and growth systems."
      />

      {/* Top Industry Boxes */}
      <Section>
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((it, i) => {
              const Icon = it.icon;

              return (
                <motion.div
                  key={it.t}
                  initial={{ opacity: 0, y: 22, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: i * 0.04,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -7, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-white/[0.06]"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-orange)]/0 blur-2xl transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/18" />

                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-500 group-hover:w-full" />

                  <div className="relative">
                    <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-teal text-black transition-all duration-300 group-hover:bg-gradient-orange">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                      {it.t}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {it.d}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 6 Image Cards Under Boxes */}
      <Section className="!pt-0 !pb-28">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 max-w-3xl"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              Industry Solutions
            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              Practical systems designed for{" "}
              <span className="text-gradient-orange">real business work</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/65">
              Every industry has its own workflow. We design ERP, automation,
              marketing and reporting systems according to actual operations,
              not generic templates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {industryCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.65,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.018,
                  rotateX: 1.5,
                  rotateY: -1.5,
                }}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/55 hover:bg-white/[0.06]"
              >
                {/* Animated Glow */}
                <motion.div
                  className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--brand-orange)]/0 blur-[80px] transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/20"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute -left-20 bottom-8 h-40 w-40 rounded-full bg-[var(--brand-teal)]/0 blur-[90px] transition-colors duration-300 group-hover:bg-[var(--brand-teal)]/15"
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.25, 0.55, 0.25],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Animated Top Line */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="h-[220px] w-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Moving Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </div>

                <div className="relative p-2 pt-5">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.07 + 0.15,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]"
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.07 + 0.25,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                    className="mt-3 text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/75"
                  >
                    {card.desc}
                  </motion.p>

                  {/* Bottom Accent Animation */}
                  <div className="mt-5 h-[1px] w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}