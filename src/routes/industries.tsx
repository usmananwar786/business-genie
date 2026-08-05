// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import type { IconType } from "react-icons";
// import {
//   FaBuilding,
//   FaCapsules,
//   FaIndustry,
//   FaShoppingCart,
//   FaStore,
//   FaTruck,
// } from "react-icons/fa";
// import { GiClothes } from "react-icons/gi";
// import { MdSolarPower } from "react-icons/md";

// import { SiteLayout } from "@/components/layout/SiteLayout";
// import { PageHero, Section } from "@/components/layout/Section";
// import { HardHat } from "lucide-react";

// export const Route = createFileRoute("/industries")({
//   head: () => ({
//     meta: [
//       { title: "Industries We Serve — Business Genie Consulting" },
//       {
//         name: "description",
//         content:
//           "Retail, manufacturing, distribution, real estate, healthcare, pharma, e-commerce, textile and enterprise ERP solutions.",
//       },
//     ],
//   }),
//   component: Industries,
// });

// type IndustryItem = {
//   icon: IconType;
//   t: string;
//   d: string;
//   iconColor: string;
//   borderColor: string;
//   iconBackground: string;
// };

// const items: IndustryItem[] = [
//   {
//     icon: FaIndustry,
//     t: "Manufacturing",
//     d: "BOMs, production planning, costing and MRP.",
//     iconColor: "#2563eb",
//     borderColor: "#bfdbfe",
//     iconBackground: "#eff6ff",
//   },
  
//   {
//     icon: FaTruck,
//     t: "Distribution",
//     d: "Warehouses, routes, vendor and dealer networks.",
//     iconColor: "#0891b2",
//     borderColor: "#a5f3fc",
//     iconBackground: "#ecfeff",
//   },
//   {
//     icon: FaStore,
//     t: "Retail",
//     d: "POS, inventory, multi-branch and customer loyalty systems.",
//     iconColor: "#7c3aed",
//     borderColor: "#d8b4fe",
//     iconBackground: "#faf5ff",
//   },
  
//   {
//     icon: GiClothes,
//     t: "Garments /Textile",
//     d: " Cut to pack process,knitting,  dyeing, printing and stitching.",
//     iconColor: "#db2777",
//     borderColor: "#fbcfe8",
//     iconBackground: "#fdf2f8",
//   },
//  {
//   icon: HardHat,
//   t: "Engineering",
//   d: "Reliable engineering solutions focused on performance, efficiency, and lasting results",
//   iconColor: "#f59e0b",
//   borderColor: "#fde68a",
//   iconBackground: "#fffbeb",
// },
//   {
//     icon: MdSolarPower,
//     t: "Solar EPC & Renewables",
//     d: "Design, Supply, Installation and maintenance.",
//     iconColor: "#f59e0b",
//     borderColor: "#fde68a",
//     iconBackground: "#fffbeb",
//   },
//   {
//     icon: FaCapsules,
//     t: "Food/Pharma/chamicals",
//     d: "Weighing raw materials, formulation, processing and packaging.",
//     iconColor: "#16a34a",
//     borderColor: "#bbf7d0",
//     iconBackground: "#f0fdf4",
//   },
//  {
//   icon: FaBuilding,
//   t: "Construction",
//   d: "Project planning, costing, site management, procurement and contractor billing.",
//   iconColor: "#16a34a",
//   borderColor: "#bbf7d0",
//   iconBackground: "#f0fdf4",
// },
//   // {
//   //   icon: FaShoppingCart,
//   //   t: "E-commerce",
//   //   d: "Conversion-focused storefronts and growth marketing.",
//   //   iconColor: "#ea580c",
//   //   borderColor: "#fed7aa",
//   //   iconBackground: "#fff7ed",
//   // },
//   // {
//   //   icon: FaBuilding,
//   //   t: "Enterprises",
//   //   d: "Scalable platforms and multi-country rollouts.",
//   //   iconColor: "#4f46e5",
//   //   borderColor: "#c7d2fe",
//   //   iconBackground: "#eef2ff",
//   // },
// ];

// const industryCards = [
//   // {
//   //   img: "/retail.jpg",
//   //   title: "Retail Operations",
//   //   desc: "Manage POS, stock, branches, purchases, customers and daily sales reports from one connected system.",
//   // },
//   // {
//   //   img: "/manufacturing.jpg",
//   //   title: "Manufacturing Control",
//   //   desc: "Track production planning, raw materials, costing, wastage, finished goods and factory reporting.",
//   // },
//   // {
//   //   img: "/distribution.jpg",
//   //   title: "Distribution Network",
//   //   desc: "Control warehouses, dealers, vendors, routes, dispatch, deliveries and payment follow-ups.",
//   // },
//   {
//     img: "/textile.jpg",
//     title: "Textile/Garments Manufacturing",
//     desc: "Complete cut to pack process management nitting, dyeing, printing, stitching And stock movement with clear visibility.",
//   },
//   {
//     img: "/pharma.jpg",
//     title: "Pharma / Food processing",
//     desc: "Manage raw material weighing, formulation, batch processing, coating, packaging and compliance records.",
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW68f8g8WriuTsQygCcqDzOQ6rbBtHea4qd8KhzyhqAQ&s=10",
//     title: "Engineering",
//     desc: "Manage design, development, and implementation of engineering projects.",
//   },
//   {
//     img: "/solor.png",
//     title: "Solar",
//     desc: "Manage sale inquires Quotations with end to end project management. Site wise Inventory and expense tracking.",
//   },
//   {
//     img: "/Construction.jpg",
//     title: "Construction ",
//     desc: "Healping goverment contractors and loacl compaines to gain complete control over their projects and operations.",
//   },
// ];

// function Industries() {
//   return (
//     <SiteLayout>
//       <PageHero
//         eyebrow="Industries We Serve"
//         title={
//           <>
//             Real experience across{" "}
//             <span className="text-gradient-orange">industries</span>
//           </>
//         }
//         subtitle="We solve practical operational problems for different sectors through ERP, automation, reporting, web and growth systems."
//       />

//       {/* Top Industry Boxes */}
//       <Section>
//         <div className="container-x">
//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
//             {items.map((it, i) => {
//               const Icon = it.icon;

//               return (
//                 <motion.div
//                   key={it.t}
//                   initial={{ opacity: 0, y: 22, scale: 0.96 }}
//                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                   viewport={{ once: true, amount: 0.25 }}
//                   transition={{
//                     delay: i * 0.04,
//                     duration: 0.5,
//                     ease: "easeOut",
//                   }}
//                   whileHover={{ y: -7, scale: 1.015 }}
//                   className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-white/[0.06] ${
//                     i < 3 ? "lg:col-span-4" : "lg:col-span-3"
//                   }`}
//                 >
//                   <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-orange)]/0 blur-2xl transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/18" />

//                   <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-500 group-hover:w-full" />

//                   <div className="relative">
//                     <div
//                       className="mb-4 grid h-14 w-14 place-items-center rounded-2xl border bg-white shadow-[0_8px_22px_rgba(0,0,0,0.10)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
//                       style={{
//                         borderColor: it.borderColor,
//                         backgroundColor: it.iconBackground,
//                       }}
//                     >
//                       <Icon
//                         className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
//                         style={{ color: it.iconColor }}
//                         aria-hidden="true"
//                       />
//                     </div>

//                     <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
//                       {it.t}
//                     </h3>

//                     <p className="mt-2 text-sm leading-relaxed text-white/60">
//                       {it.d}
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </Section>

//       {/* 6 Image Cards Under Boxes */}
//       <Section className="!pb-28 !pt-0">
//         <div className="container-x">
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="mb-8 max-w-3xl"
//           >
//             <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
//               Industry Solutions
//             </div>

//             <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
//               Practical systems designed for{" "}
//               <span className="text-gradient-orange">real business work</span>
//             </h2>

//             <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
//               Every industry has its own workflow. We design ERP, automation,
//               marketing and reporting systems according to actual operations,
//               not generic templates.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
//             {industryCards.map((card, i) => (
//               <motion.div
//                 key={card.title}
//                 initial={{ opacity: 0, y: 35, scale: 0.94 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{
//                   delay: i * 0.08,
//                   duration: 0.65,
//                   ease: "easeOut",
//                 }}
//                 whileHover={{
//                   y: -10,
//                   scale: 1.018,
//                   rotateX: 1.5,
//                   rotateY: -1.5,
//                 }}
//                 className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/55 hover:bg-white/[0.06] sm:rounded-3xl"
//               >
//                 {/* Animated Glow */}
//                 <motion.div
//                   className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--brand-orange)]/0 blur-[80px] transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/20"
//                   animate={{
//                     scale: [1, 1.15, 1],
//                     opacity: [0.4, 0.8, 0.4],
//                   }}
//                   transition={{
//                     duration: 3.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />

//                 <motion.div
//                   className="absolute -left-20 bottom-8 h-40 w-40 rounded-full bg-[var(--brand-teal)]/0 blur-[90px] transition-colors duration-300 group-hover:bg-[var(--brand-teal)]/15"
//                   animate={{
//                     y: [0, -12, 0],
//                     opacity: [0.25, 0.55, 0.25],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />

//                 {/* Animated Top Line */}
//                 <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

//                 <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">
//                   <motion.img
//                     src={card.img}
//                     alt={card.title}
//                     className="h-[220px] w-full object-cover"
//                     whileHover={{ scale: 1.08 }}
//                     transition={{ duration: 0.7, ease: "easeOut" }}
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

//                   {/* Moving Shine Effect */}
//                   <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
//                 </div>

//                 <div className="relative p-2 pt-5">
//                   <motion.h3
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       delay: i * 0.07 + 0.15,
//                       duration: 0.45,
//                       ease: "easeOut",
//                     }}
//                     className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]"
//                   >
//                     {card.title}
//                   </motion.h3>

//                   <motion.p
//                     initial={{ opacity: 0, y: 12 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       delay: i * 0.07 + 0.25,
//                       duration: 0.45,
//                       ease: "easeOut",
//                     }}
//                     className="mt-3 text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/75"
//                   >
//                     {card.desc}
//                   </motion.p>

//                   {/* Bottom Accent Animation */}
//                   <div className="mt-5 h-[1px] w-full overflow-hidden rounded-full bg-white/10">
//                     <div className="h-full w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </Section>
//     </SiteLayout>
//   );
// }

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, HardHat } from "lucide-react";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
  FaBuilding,
  FaCapsules,
  FaIndustry,
  FaStore,
  FaTruck,
} from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { MdSolarPower } from "react-icons/md";

import industriesHeroDark from "@/assets/industries-hero-dark.jpeg";
import industriesHeroLight from "@/assets/industries-hero-light(3).jpeg";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section } from "@/components/layout/Section";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Retail, manufacturing, distribution, engineering, pharma, food processing, textile, solar and construction ERP solutions.",
      },
    ],
  }),
  component: Industries,
});

type IndustryItem = {
  icon: IconType;
  t: string;
  d: string;
  iconColor: string;
  borderColor: string;
  iconBackground: string;
};

const items: IndustryItem[] = [
  {
    icon: FaIndustry,
    t: "Manufacturing",
    d: "BOMs, production planning, costing and MRP.",
    iconColor: "#2563eb",
    borderColor: "#bfdbfe",
    iconBackground: "#eff6ff",
  },
  {
    icon: FaTruck,
    t: "Distribution",
    d: "Warehouses, routes, vendor and dealer networks.",
    iconColor: "#0891b2",
    borderColor: "#a5f3fc",
    iconBackground: "#ecfeff",
  },
  {
    icon: FaStore,
    t: "Retail",
    d: "POS, inventory, multi-branch and customer loyalty systems.",
    iconColor: "#7c3aed",
    borderColor: "#d8b4fe",
    iconBackground: "#faf5ff",
  },
  {
    icon: GiClothes,
    t: "Garments / Textile",
    d: "Cut-to-pack processes, knitting, dyeing, printing and stitching.",
    iconColor: "#db2777",
    borderColor: "#fbcfe8",
    iconBackground: "#fdf2f8",
  },
  {
    icon: HardHat,
    t: "Engineering",
    d: "Reliable engineering solutions focused on performance, efficiency and lasting results.",
    iconColor: "#f59e0b",
    borderColor: "#fde68a",
    iconBackground: "#fffbeb",
  },
  {
    icon: MdSolarPower,
    t: "Solar EPC & Renewables",
    d: "Design, supply, installation and maintenance.",
    iconColor: "#f59e0b",
    borderColor: "#fde68a",
    iconBackground: "#fffbeb",
  },
  {
    icon: FaCapsules,
    t: "Food / Pharma / Chemicals",
    d: "Raw-material weighing, formulation, processing and packaging.",
    iconColor: "#16a34a",
    borderColor: "#bbf7d0",
    iconBackground: "#f0fdf4",
  },
  {
    icon: FaBuilding,
    t: "Construction",
    d: "Project planning, costing, site management, procurement and contractor billing.",
    iconColor: "#16a34a",
    borderColor: "#bbf7d0",
    iconBackground: "#f0fdf4",
  },
];

const industryCards = [
  {
    img: "/textile.jpg",
    title: "Textile / Garments Manufacturing",
    desc: "Manage the complete cut-to-pack process, including knitting, dyeing, printing, stitching and stock movement with clear visibility.",
  },
  {
    img: "/pharma.jpg",
    title: "Pharma / Food Processing",
    desc: "Manage raw-material weighing, formulation, batch processing, coating, packaging and compliance records.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW68f8g8WriuTsQygCcqDzOQ6rbBtHea4qd8KhzyhqAQ&s=10",
    title: "Engineering",
    desc: "Manage the design, development and implementation of engineering projects.",
  },
  {
    img: "/solor.png",
    title: "Solar",
    desc: "Manage sales inquiries, quotations and end-to-end project delivery, with site-wise inventory and expense tracking.",
  },
  {
    img: "/Construction.jpg",
    title: "Construction",
    desc: "Help government contractors and local companies gain complete control over their projects and operations.",
  },
];

function parseRgb(value: string) {
  const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);

  if (!match) return null;

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
  };
}

function isDarkRgb(value: string) {
  const rgb = parseRgb(value);

  if (!rgb) return null;

  const brightness =
    (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;

  return brightness < 145;
}

function getCurrentThemeIsDark() {
  if (typeof window === "undefined") return false;

  const html = document.documentElement;
  const body = document.body;
  const appRoot =
    document.querySelector<HTMLElement>("#root") ??
    document.querySelector<HTMLElement>("[data-theme]") ??
    document.querySelector<HTMLElement>("main");

  const directThemeValues = [
    html.className,
    body.className,
    appRoot?.className,
    html.getAttribute("data-theme"),
    body.getAttribute("data-theme"),
    appRoot?.getAttribute("data-theme"),
    html.getAttribute("data-mode"),
    body.getAttribute("data-mode"),
    appRoot?.getAttribute("data-mode"),
    html.getAttribute("data-color-scheme"),
    body.getAttribute("data-color-scheme"),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (/\b(dark|night)\b/.test(directThemeValues)) return true;
  if (/\b(light|day)\b/.test(directThemeValues)) return false;

  const storageValues: string[] = [];

  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);

    if (!key) continue;

    const normalizedKey = key.toLowerCase();

    if (
      normalizedKey.includes("theme") ||
      normalizedKey.includes("mode") ||
      normalizedKey.includes("scheme") ||
      normalizedKey.includes("appearance")
    ) {
      storageValues.push(localStorage.getItem(key) ?? "");
    }
  }

  const storedTheme = storageValues.join(" ").toLowerCase();

  if (/\b(dark|night)\b/.test(storedTheme)) return true;
  if (/\b(light|day)\b/.test(storedTheme)) return false;

  const elementsToCheck = [
    body,
    html,
    appRoot,
    document.querySelector<HTMLElement>("main"),
  ].filter(Boolean) as HTMLElement[];

  for (const element of elementsToCheck) {
    const styles = window.getComputedStyle(element);
    const colorScheme = styles.colorScheme.toLowerCase();

    if (colorScheme.includes("dark")) return true;
    if (colorScheme.includes("light")) return false;

    const backgroundIsDark = isDarkRgb(styles.backgroundColor);

    if (backgroundIsDark !== null) return backgroundIsDark;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function IndustriesHero() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    let lastTheme: boolean | null = null;

    const updateTheme = () => {
      const nextTheme = getCurrentThemeIsDark();

      if (nextTheme !== lastTheme) {
        lastTheme = nextTheme;
        setIsDarkMode(nextTheme);
      }
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: [
        "class",
        "style",
        "data-theme",
        "data-mode",
        "data-color-scheme",
      ],
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateTheme);
    window.addEventListener("storage", updateTheme);

    const intervalId = window.setInterval(updateTheme, 250);

    const darkImage = new Image();
    darkImage.src = industriesHeroDark;

    const lightImage = new Image();
    lightImage.src = industriesHeroLight;

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", updateTheme);
      window.removeEventListener("storage", updateTheme);
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      aria-label="Industries We Serve"
      className={`relative isolate w-full overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-[#050606]" : "bg-[#f4ebe1]"
      }`}
    >
      <div className="relative min-h-[520px] w-full sm:min-h-[550px] lg:min-h-[clamp(500px,31vw,600px)]">
        {/* Both images stay mounted so day/night switching is smooth. */}
        <img
          src={industriesHeroLight}
          alt=""
          aria-hidden="true"
          width={1894}
          height={715}
          loading="eager"
          decoding="async"
          draggable={false}
          className={`pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center transition-opacity duration-500 ${
            isDarkMode ? "opacity-0" : "opacity-100"
          }`}
        />

        <img
          src={industriesHeroDark}
          alt=""
          aria-hidden="true"
          width={1896}
          height={736}
          loading="eager"
          decoding="async"
          draggable={false}
          className={`pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center transition-opacity duration-500 ${
            isDarkMode ? "opacity-100" : "opacity-0"
          }`}
        />

        {/*
          The supplied artwork already contains the full composition.
          This layer hides its old left-side text so the heading, paragraph
          and button below are real responsive frontend elements.
        */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-[1] hidden lg:block ${
            isDarkMode
              ? "bg-[linear-gradient(90deg,#050606_0%,#050606_43%,rgba(5,6,6,0.99)_48%,rgba(5,6,6,0.93)_53%,rgba(5,6,6,0.56)_58%,rgba(5,6,6,0)_66%)]"
              : "bg-[linear-gradient(90deg,#f4ebe1_0%,#f4ebe1_43%,rgba(244,235,225,0.99)_48%,rgba(244,235,225,0.94)_53%,rgba(244,235,225,0.60)_58%,rgba(244,235,225,0)_66%)]"
          }`}
        />

        {/* Mobile readability overlay */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-[1] lg:hidden ${
            isDarkMode
              ? "bg-[linear-gradient(180deg,rgba(5,6,6,0.99)_0%,rgba(5,6,6,0.96)_58%,rgba(5,6,6,0.72)_100%)]"
              : "bg-[linear-gradient(180deg,rgba(244,235,225,0.99)_0%,rgba(244,235,225,0.96)_58%,rgba(244,235,225,0.74)_100%)]"
          }`}
        />

        <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1920px] items-center px-5 py-10 sm:min-h-[550px] sm:px-8 sm:py-12 lg:min-h-[clamp(500px,31vw,600px)] lg:px-[5vw] lg:py-[2.5vw]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="w-full max-w-[820px] lg:w-[48%]"
          >
            <h1
              className={`font-bold tracking-[-0.045em] text-[clamp(3.2rem,5vw,6rem)] leading-[0.98] ${
                isDarkMode ? "text-white" : "text-[#171412]"
              }`}
            >
              <span className="block">We serve</span>
              <span className="mt-2 block sm:mt-3">
                multiple{" "}
                <span className="text-[#f4770b]">industries</span>
              </span>
            </h1>

            <div
              aria-hidden="true"
              className="mt-7 h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,#f4770b_0%,rgba(244,119,11,0.08)_100%)] sm:w-28"
            />

            <p
              className={`mt-6 max-w-[720px] text-[clamp(1.05rem,1.55vw,1.9rem)] leading-[1.35] ${
                isDarkMode ? "text-white/70" : "text-[#68635f]"
              }`}
            >
              Delivering professional solutions tailored to your business needs
              across diverse sectors.
            </p>

            <motion.div
              className="mt-10 sm:mt-12"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.985 }}
            >
              <Link
                to="/services"
                aria-label="View our services"
                style={{
                  color: "#111111",
                  backgroundColor: "#f57c00",
                }}
className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f77b00] px-7 py-2.5 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff8a0a] sm:px-9 sm:py-3"              >
                <span className="!text-[#111111]">Our Services</span>

                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={2.2}
                  style={{ color: "#111111", stroke: "#111111" }}
                  className="h-5 w-5 shrink-0 !text-[#111111] transition-transform duration-300 group-hover:translate-x-1.5 sm:h-6 sm:w-6"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <SiteLayout>
      <IndustriesHero />

      {/* Top Industry Boxes */}
      <Section>
        <div className="container-x">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
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
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-white/[0.06] ${
                    i < 3 ? "lg:col-span-4" : "lg:col-span-3"
                  }`}
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-orange)]/0 blur-2xl transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/18" />

                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-500 group-hover:w-full" />

                  <div className="relative">
                    <div
                      className="mb-4 grid h-14 w-14 place-items-center rounded-2xl border bg-white shadow-[0_8px_22px_rgba(0,0,0,0.10)] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                      style={{
                        borderColor: it.borderColor,
                        backgroundColor: it.iconBackground,
                      }}
                    >
                      <Icon
                        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: it.iconColor }}
                        aria-hidden="true"
                      />
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

      {/* Industry Image Cards */}
      <Section className="!pb-28 !pt-0">
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

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Practical systems designed for{" "}
              <span className="text-gradient-orange">real business work</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">
              Every industry has its own workflow. We design ERP, automation,
              marketing and reporting systems according to actual operations,
              not generic templates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
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
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/55 hover:bg-white/[0.06] sm:rounded-3xl"
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
                    loading="lazy"
                    decoding="async"
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