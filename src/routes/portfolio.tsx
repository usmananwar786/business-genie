// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { useEffect, useState, type ReactNode } from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   BarChart3,
//   Briefcase,
//   CheckCircle2,
//   Code2,
//   Database,
//   Gauge,
//   LineChart,
//   Megaphone,
//   Monitor,
//   Palette,
//   Search,
//   Settings,
//   Sparkles,
//   Target,
//   type LucideIcon,
// } from "lucide-react";
// import { SiteLayout } from "@/components/layout/SiteLayout";
// import { PageHero, Section } from "@/components/layout/Section";

// export const Route = createFileRoute("/portfolio")({
//   head: () => ({
//     meta: [
//       { title: "Portfolio & Case Studies — Business Genie Consulting" },
//       {
//         name: "description",
//         content:
//           "Selected portfolio work across ERP implementation, digital marketing, SEO, web development and UI/UX.",
//       },
//     ],
//   }),
//   component: Portfolio,
// });

// const stats: {
//   number: number;
//   suffix: string;
//   label: string;
//   desc: string;
//   to: "/portfolio"  | "/contact";
// }[] = [
//   {
//     number: 200,
//     suffix: "+",
//     label: "Projects Delivered",
//     desc: "ERP, websites, marketing campaigns and business systems.",
//     to: "/portfolio",
//   },
//   {
//     number: 20,
//     suffix: "+",
//     label: "Industries Covered",
//     desc: "Retail, , SaaS, ecommerce, real estate and more.",
//     to: "/contact",
//   },
//   {
//     number: 360,
//     suffix: "°",
//     label: "Growth Support",
//     desc: "Strategy, systems, design, tracking and performance growth.",
//     to: "/contact",
//   },
// ];

// const happyClients = [
//   {
//     name: "",
//     logo: "/import &export.png",
//   },
//   {
//     name: "",
//     logo: "/stone.png",
//   },
//   {
//     name: "",
//     logo: "/packing.png",
//   },
//   {
//     name: "",
//     logo: "/pharma.png",
//   },
//   {
//     name: "",
//     logo: "/ravi.png",
//   },
//   {
//     name: "",
//     logo: "/filtech.png",
//   },
//   {
//     name: "",
//     logo: "/3star.png",
//   },
//   {
//     name: "",
//     logo: "/semet.png",
//   },
//     {
//     name: "",
//     logo: "/english pharma.png",
//   },
//     {
//     name: "",
//     logo: "/mailik correcution.png",
//   },
//     {
//     name: "",
//     logo: "/pak.png",
//   },
// ];

// const featuredProjects: {
//   icon: LucideIcon;
//   title: string;
//   category: string;
//   result: string;
//   desc: string;
//   tags: string[];
// }[] = [
//   {
//     icon: Database,
//     title: "Retail ERP Transformation",
//     category: "ERP Implementation",
//     result: "14 branches connected",
//     desc: "A complete ERP setup covering inventory, accounts, HR, payroll and branch-level reporting for better business control.",
//     tags: ["Inventory", "Accounts", "Payroll", "Reports"],
//   },
//   {
//     icon: Megaphone,
//     title: "Performance Marketing Growth",
//     category: "Digital Marketing",
//     result: "Lead quality improved",
//     desc: "Full-funnel campaign structure across Google Ads, Meta Ads and conversion tracking to improve qualified lead flow.",
//     tags: ["Google Ads", "Meta Ads", "CRO", "Tracking"],
//   },
//   {
//     icon: Monitor,
//     title: "Premium Business Website",
//     category: "Web & UI/UX",
//     result: "Modern brand experience",
//     desc: "A dark premium website experience designed to improve trust, clarity, service presentation and conversion flow.",
//     tags: ["UI/UX", "Website", "Branding", "Responsive"],
//   },
// ];

// const groups: {
//   title: string;
//   eyebrow: string;
//   icon: LucideIcon;
//   items: {
//     t: string;
//     d: string;
//     result: string;
//     icon: LucideIcon;
//   }[];
// }[] = [
//   {
//     title: "ERP Implementation",
//     eyebrow: "Systems & Operations",
//     icon: Database,
//     items: [
//       {
//         icon: Database,
//         t: "Retail Group — Complete ERP",
//         d: "Stock alignment, accounts setup, HR and payroll across multiple branches.",
//         result: "Centralized operations",
//       },
//       {
//         icon: Settings,
//         t: "Distribution Company — Module Setup",
//         d: "Inventory, sales and purchase modules with vendor onboarding.",
//         result: "Better process control",
//       },
//       {
//         icon: Gauge,
//         t: "Manufacturing — Production Module",
//         d: "BOMs, MRP, costing and production reporting dashboards.",
//         result: "Improved reporting",
//       },
//       {
//         icon: BarChart3,
//         t: "Services Firm — Business Reporting",
//         d: "Custom dashboards across finance, sales and operations.",
//         result: "Clearer decisions",
//       },
//     ],
//   },
//   {
//     title: "Digital Marketing",
//     eyebrow: "Traffic, Leads & Growth",
//     icon: Megaphone,
//     items: [
//       {
//         icon: Target,
//         t: "B2B SaaS — Lead Generation",
//         d: "Google Ads and LinkedIn campaign planning with funnel structure and conversion tracking.",
//         result: "Qualified lead flow",
//       },
//       {
//         icon: LineChart,
//         t: "D2C Brand — Meta Ads Growth",
//         d: "Creative testing, audience structure and funnel rebuild to improve paid social performance.",
//         result: "Stronger ROAS direction",
//       },
//       {
//         icon: Search,
//         t: "Local Service — SEO Visibility",
//         d: "Local SEO structure, service pages, Google Business optimization and commercial keyword mapping.",
//         result: "Better local presence",
//       },
//       {
//         icon: BarChart3,
//         t: "Analytics — GA4 & GTM Setup",
//         d: "Conversion tracking, events, lead attribution and reporting dashboards configured for clarity.",
//         result: "Accurate tracking",
//       },
//     ],
//   },
//   {
//     title: "Web & UI/UX",
//     eyebrow: "Design, Experience & Conversion",
//     icon: Monitor,
//     items: [
//       {
//         icon: Monitor,
//         t: "Business Website Redesign",
//         d: "A premium responsive website layout with stronger service positioning and conversion sections.",
//         result: "Modern brand presence",
//       },
//       {
//         icon: Code2,
//         t: "SaaS Dashboard UI",
//         d: "Dashboard screens redesigned for better usability, navigation and task completion flow.",
//         result: "Cleaner user journey",
//       },
//       {
//         icon: Palette,
//         t: "E-commerce Storefront",
//         d: "Product-focused storefront structure with improved category, product and checkout experience.",
//         result: "Better shopping flow",
//       },
//       {
//         icon: Sparkles,
//         t: "Mobile App UI",
//         d: "Onboarding and app screens designed for simplicity, trust and better user engagement.",
//         result: "Improved app experience",
//       },
//     ],
//   },
// ];

// const industries = [
//   "Retail",
//   "Distribution",
//   "Manufacturing",
//   "Professional Services",
//   "SaaS",
//   "E-commerce",
//   "Local Services",
//   "Real Estate",
// ];

// const tools = [
//   "Odoo",
//   "ERPNext",
//   "Google Ads",
//   "Meta Ads",
//   "GA4",
//   "GTM",
//   "WordPress",
//   "React",
//   "Figma",
//   "SEO Tools",
// ];

// function Portfolio() {
//   return (
//     <SiteLayout>
//       <PageHero
//         eyebrow="Portfolio"
//         title={
//           <>
//             Professional work across{" "}
//             <span className="text-gradient-orange">
//               ERP, marketing and digital products
//             </span>
//           </>
//         }
//         subtitle="A premium portfolio showcase of business systems, digital marketing campaigns, websites, UI/UX design and automation solutions."
//       />

//       {/* Premium Portfolio Stats */}
//       <Section className="!py-10 sm:!py-12">
//         <div className="container-x">
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//             {stats.map((stat, i) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 28, scale: 0.96 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{
//                   delay: i * 0.08,
//                   duration: 0.65,
//                   ease: "easeOut",
//                 }}
//               >
//                 <Link
//                   to={stat.to}
//                   className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[var(--brand-orange)]/60 hover:bg-white/[0.06]"
//                 >
//                   <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand-orange)]/0 blur-[90px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/24" />
//                   <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

//                   <div className="relative flex items-start justify-between gap-4">
//                     <div>
//                       <div className="text-4xl font-bold text-gradient-orange sm:text-5xl">
//                         <CountUp end={stat.number} suffix={stat.suffix} />
//                       </div>

//                       <h3 className="mt-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
//                         {stat.label}
//                       </h3>

//                       <p className="mt-2 text-sm leading-relaxed text-white/55">
//                         {stat.desc}
//                       </p>
//                     </div>

//                     <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/45 transition-all duration-300 group-hover:border-[var(--brand-orange)]/45 group-hover:text-[var(--brand-orange)]">
//                       <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </Section>

//       {/* Happy Clients Logo Loop */}
//       <HappyClientsLoop />

//       {/* Featured Work */}
//       <Section className="!pt-8">
//         <div className="container-x">
//           <PortfolioHeading
//             eyebrow="Featured Work"
//             title={
//               <>
//                 Selected work examples with{" "}
//                 <span className="text-gradient-orange">
//                   strategy, execution and business impact
//                 </span>
//               </>
//             }
//             subtitle="A professional snapshot of the type of results, systems and digital experiences we create for growth-focused businesses."
//           />

//           <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
//             {featuredProjects.map((project, i) => {
//               const Icon = project.icon;

//               return (
//                 <motion.div
//                   key={project.title}
//                   initial={{ opacity: 0, y: 36, scale: 0.96 }}
//                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                   viewport={{ once: true, amount: 0.25 }}
//                   transition={{
//                     delay: i * 0.08,
//                     duration: 0.65,
//                     ease: "easeOut",
//                   }}
//                   whileHover={{ y: -10 }}
//                   className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/60 hover:bg-white/[0.06]"
//                 >
//                   <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--brand-orange)]/12 blur-[115px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/25" />
//                   <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

//                   <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5">
//                     <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/25 via-transparent to-transparent opacity-75" />

//                     <motion.div
//                       animate={{
//                         y: [0, -8, 0],
//                       }}
//                       transition={{
//                         duration: 4,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                       className="absolute right-6 top-6 h-24 w-24 rounded-full border border-[var(--brand-orange)]/20"
//                     />

//                     <div className="relative flex h-40 flex-col justify-between">
//                       <div className="flex items-center justify-between gap-4">
//                         <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black">
//                           <Icon className="h-6 w-6" />
//                         </div>

//                         <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/60 transition-colors duration-300 group-hover:border-[var(--brand-orange)]/40 group-hover:text-[var(--brand-orange)]">
//                           Case Study
//                         </div>
//                       </div>

//                       <div>
//                         <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-orange)]">
//                           {project.category}
//                         </div>

//                         <div className="mt-2 text-xl font-semibold text-white">
//                           {project.result}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
//                       {project.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-relaxed text-white/60">
//                       {project.desc}
//                     </p>

//                     <div className="mt-5 flex flex-wrap gap-2">
//                       {project.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55 transition-all duration-300 group-hover:border-[var(--brand-orange)]/35 group-hover:text-[var(--brand-orange)]"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </Section>

//       {/* Portfolio Groups */}
//       {groups.map((group) => {
//         const GroupIcon = group.icon;

//         return (
//           <Section key={group.title} className="!pt-0">
//             <div className="container-x">
//               <motion.div
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{ duration: 0.6 }}
//                 className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
//               >
//                 <div>
//                   <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[var(--brand-orange)]">
//                     <GroupIcon className="h-3.5 w-3.5" />
//                     {group.eyebrow}
//                   </div>

//                   <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
//                     {group.title}
//                   </h2>
//                 </div>

//                 <p className="max-w-xl text-sm leading-relaxed text-white/55">
//                   A focused collection of work examples built around business
//                   clarity, stronger systems, better tracking and premium digital
//                   presentation.
//                 </p>
//               </motion.div>

//               <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//                 {group.items.map((item, i) => {
//                   const Icon = item.icon;

//                   return (
//                     <motion.div
//                       key={item.t}
//                       initial={{ opacity: 0, y: 28, scale: 0.97 }}
//                       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                       viewport={{ once: true, amount: 0.25 }}
//                       transition={{
//                         delay: i * 0.06,
//                         duration: 0.55,
//                         ease: "easeOut",
//                       }}
//                       whileHover={{ y: -8 }}
//                       className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/60 hover:bg-white/[0.06]"
//                     >
//                       <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[var(--brand-orange)]/0 blur-[90px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/20" />
//                       <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

//                       <div className="relative flex items-start justify-between gap-5">
//                         <div className="flex gap-4">
//                           <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-orange text-black">
//                             <Icon className="h-5 w-5" />
//                           </div>

//                           <div>
//                             <div className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--brand-orange)]">
//                               {group.title}
//                             </div>

//                             <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
//                               {item.t}
//                             </h3>

//                             <p className="mt-2 text-sm leading-relaxed text-white/60">
//                               {item.d}
//                             </p>

//                             <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65 transition-all duration-300 group-hover:border-[var(--brand-orange)]/35 group-hover:text-[var(--brand-orange)]">
//                               <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
//                               {item.result}
//                             </div>
//                           </div>
//                         </div>

//                         <ArrowUpRight className="h-5 w-5 shrink-0 text-white/35 transition-all duration-300 group-hover:rotate-12 group-hover:text-[var(--brand-orange)]" />
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </Section>
//         );
//       })}

//       {/* Industries + Tools */}
//       <Section className="!pt-0">
//         <div className="container-x grid gap-6 lg:grid-cols-2">
//           <InfoPanel
//             eyebrow="Industries"
//             title="Business categories we support"
//             items={industries}
//           />

//           <InfoPanel
//             eyebrow="Tools & Platforms"
//             title="Platforms we work with"
//             items={tools}
//           />
//         </div>
//       </Section>

//       {/* Professional CTA */}
//       <Section className="!pt-0 !pb-32">
//         <div className="container-x">
//           <motion.div
//             initial={{ opacity: 0, y: 28 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.65 }}
//             className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur-xl sm:p-10 lg:p-12"
//           >
//             <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--brand-orange)]/20 blur-[110px]" />
//             <div
//               className="absolute inset-0 opacity-[0.045]"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
//                 backgroundSize: "72px 72px",
//               }}
//             />

//             <div className="relative mx-auto max-w-3xl">
//               <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/65">
//                 <Briefcase className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
//                 Work With Us
//               </div>

//               <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
//                 Want to build your next{" "}
//                 <span className="text-gradient-orange">
//                   system, campaign or website?
//                 </span>
//               </h2>

//               <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
//                 Share your business requirements and our team will guide you
//                 with the right strategy, technology and execution plan.
//               </p>

//               <div className="mt-8 flex flex-wrap justify-center gap-3">
//                 <Link
//                   to="/contact"
//                   className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-orange px-7 py-3.5 font-semibold text-black glow-orange transition-transform duration-300 hover:scale-[1.03]"
//                 >
//                   Start a Project
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>

//                 <Link
//                   to="/portfolio"
//                   className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-white/80 transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:text-[var(--brand-orange)]"
//                 >
//                   View Portfolio
//                   <ArrowUpRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Section>
//     </SiteLayout>
//   );
// }

// function HappyClientsLoop() {
//   const loopClients = [...happyClients, ...happyClients, ...happyClients];

//   return (
//     <Section className="!pt-0">
//       <div className="container-x">
//         <PortfolioHeading
//           eyebrow="Happy Clients"
//           title={
//             <>
//               Trusted businesses where our{" "}
//               <span className="text-gradient-orange">software is running</span>
//             </>
//           }
//           subtitle="Client logos moving smoothly from right to left, showing businesses using our software, systems and digital solutions."
//         />

//         <div className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-10">
//           <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050505] to-transparent sm:w-28" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050505] to-transparent sm:w-28" />

//           <motion.div
//             className="flex w-max items-center gap-14 sm:gap-20"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               duration: 34,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           >
//             {loopClients.map((client, index) => (
//               <motion.div
//                 key={`${client.name}-${index}`}
//                 whileHover={{ y: -6, scale: 1.04 }}
//                 className="group flex w-[170px] shrink-0 flex-col items-center justify-center text-center sm:w-[210px]"
//               >
//                 <motion.div
//                   animate={{ y: [0, -5, 0] }}
//                   transition={{
//                     duration: 3.2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: (index % happyClients.length) * 0.12,
//                   }}
//                   className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-white p-2 shadow-[0_0_24px_rgba(255,132,0,0.16)] ring-1 ring-white/20 transition-all duration-300 group-hover:shadow-[0_0_34px_rgba(255,132,0,0.35)] group-hover:ring-[var(--brand-orange)]/70"
//                 >
//                   <img
//                     src={client.logo}
//                     alt={client.name}
//                     className="h-full w-full rounded-full object-contain transition-all duration-300 group-hover:scale-110"
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                     }}
//                   />
//                 </motion.div>

//                 <div className="relative mt-4 text-sm font-semibold text-white/80 transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
//                   {client.name}
//                   <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-orange transition-all duration-300 group-hover:w-full" />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </Section>
//   );
// }

// function CountUp({ end, suffix }: { end: number; suffix: string }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 1200;
//     const frameRate = 20;
//     const totalFrames = duration / frameRate;
//     const increment = end / totalFrames;

//     const timer = window.setInterval(() => {
//       start += increment;

//       if (start >= end) {
//         setCount(end);
//         window.clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, frameRate);

//     return () => window.clearInterval(timer);
//   }, [end]);

//   return (
//     <>
//       {count}
//       {suffix}
//     </>
//   );
// }

// function PortfolioHeading({
//   eyebrow,
//   title,
//   subtitle,
// }: {
//   eyebrow: string;
//   title: ReactNode;
//   subtitle: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.6 }}
//       className="mx-auto mb-10 max-w-3xl text-center"
//     >
//       <div className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
//         {eyebrow}
//       </div>

//       <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
//         {title}
//       </h2>

//       <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
//         {subtitle}
//       </p>
//     </motion.div>
//   );
// }

// function InfoPanel({
//   eyebrow,
//   title,
//   items,
// }: {
//   eyebrow: string;
//   title: string;
//   items: string[];
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 28 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{ duration: 0.6 }}
//       className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/55 hover:bg-white/[0.055] sm:p-8"
//     >
//       <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-orange)]/0 blur-[110px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/18" />
//       <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

//       <div className="relative">
//         <div className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
//           {eyebrow}
//         </div>

//         <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)] sm:text-3xl">
//           {title}
//         </h3>

//         <div className="mt-6 flex flex-wrap gap-2">
//           {items.map((item) => (
//             <span
//               key={item}
//               className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 transition-all duration-300 hover:border-[var(--brand-orange)]/40 hover:text-[var(--brand-orange)]"
//             >
//               {item}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }



import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  LineChart,
  Megaphone,
  Monitor,
  Palette,
  Search,
  Settings,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section } from "@/components/layout/Section";
import portfolioHeroDark from "@/assets/portfolio-header-night.png";
import portfolioHeroLight from "@/assets/portfolio-header-day.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Selected portfolio work across ERP implementation, digital marketing, SEO, web development and UI/UX.",
      },
    ],
  }),
  component: Portfolio,
});

const stats: {
  number: number;
  suffix: string;
  label: string;
  desc: string;
  to: "/portfolio"  | "/contact";
}[] = [
  {
    number: 200,
    suffix: "+",
    label: "Projects Delivered",
    desc: "ERP, websites, marketing campaigns and business systems.",
    to: "/portfolio",
  },
  {
    number: 20,
    suffix: "+",
    label: "Industries Covered",
    desc: "Retail, , SaaS, ecommerce, real estate and more.",
    to: "/contact",
  },
  {
    number: 360,
    suffix: "°",
    label: "Growth Support",
    desc: "Strategy, systems, design, tracking and performance growth.",
    to: "/contact",
  },
];

const happyClients = [
  {
    name: "",
    logo: "/import &export.png",
  },
  {
    name: "",
    logo: "/stone.png",
  },
  {
    name: "",
    logo: "/packing.png",
  },
  {
    name: "",
    logo: "/pharma.png",
  },
  {
    name: "",
    logo: "/ravi.png",
  },
  {
    name: "",
    logo: "/filtech.png",
  },
  {
    name: "",
    logo: "/3star.png",
  },
  {
    name: "",
    logo: "/semet.png",
  },
    {
    name: "",
    logo: "/english pharma.png",
  },
    {
    name: "",
    logo: "/mailik correcution.png",
  },
    {
    name: "",
    logo: "/pak.png",
  },
];

const featuredProjects: {
  icon: LucideIcon;
  title: string;
  category: string;
  result: string;
  desc: string;
  tags: string[];
}[] = [
  {
    icon: Database,
    title: "Retail ERP Transformation",
    category: "ERP Implementation",
    result: "14 branches connected",
    desc: "A complete ERP setup covering inventory, accounts, HR, payroll and branch-level reporting for better business control.",
    tags: ["Inventory", "Accounts", "Payroll", "Reports"],
  },
  {
    icon: Megaphone,
    title: "Performance Marketing Growth",
    category: "Digital Marketing",
    result: "Lead quality improved",
    desc: "Full-funnel campaign structure across Google Ads, Meta Ads and conversion tracking to improve qualified lead flow.",
    tags: ["Google Ads", "Meta Ads", "CRO", "Tracking"],
  },
  {
    icon: Monitor,
    title: "Premium Business Website",
    category: "Web & UI/UX",
    result: "Modern brand experience",
    desc: "A dark premium website experience designed to improve trust, clarity, service presentation and conversion flow.",
    tags: ["UI/UX", "Website", "Branding", "Responsive"],
  },
];

const groups: {
  title: string;
  eyebrow: string;
  icon: LucideIcon;
  items: {
    t: string;
    d: string;
    result: string;
    icon: LucideIcon;
  }[];
}[] = [
  {
    title: "ERP Implementation",
    eyebrow: "Systems & Operations",
    icon: Database,
    items: [
      {
        icon: Database,
        t: "Retail Group — Complete ERP",
        d: "Stock alignment, accounts setup, HR and payroll across multiple branches.",
        result: "Centralized operations",
      },
      {
        icon: Settings,
        t: "Distribution Company — Module Setup",
        d: "Inventory, sales and purchase modules with vendor onboarding.",
        result: "Better process control",
      },
      {
        icon: Gauge,
        t: "Manufacturing — Production Module",
        d: "BOMs, MRP, costing and production reporting dashboards.",
        result: "Improved reporting",
      },
      {
        icon: BarChart3,
        t: "Services Firm — Business Reporting",
        d: "Custom dashboards across finance, sales and operations.",
        result: "Clearer decisions",
      },
    ],
  },
  {
    title: "Digital Marketing",
    eyebrow: "Traffic, Leads & Growth",
    icon: Megaphone,
    items: [
      {
        icon: Target,
        t: "B2B SaaS — Lead Generation",
        d: "Google Ads and LinkedIn campaign planning with funnel structure and conversion tracking.",
        result: "Qualified lead flow",
      },
      {
        icon: LineChart,
        t: "D2C Brand — Meta Ads Growth",
        d: "Creative testing, audience structure and funnel rebuild to improve paid social performance.",
        result: "Stronger ROAS direction",
      },
      {
        icon: Search,
        t: "Local Service — SEO Visibility",
        d: "Local SEO structure, service pages, Google Business optimization and commercial keyword mapping.",
        result: "Better local presence",
      },
      {
        icon: BarChart3,
        t: "Analytics — GA4 & GTM Setup",
        d: "Conversion tracking, events, lead attribution and reporting dashboards configured for clarity.",
        result: "Accurate tracking",
      },
    ],
  },
  {
    title: "Web & UI/UX",
    eyebrow: "Design, Experience & Conversion",
    icon: Monitor,
    items: [
      {
        icon: Monitor,
        t: "Business Website Redesign",
        d: "A premium responsive website layout with stronger service positioning and conversion sections.",
        result: "Modern brand presence",
      },
      {
        icon: Code2,
        t: "SaaS Dashboard UI",
        d: "Dashboard screens redesigned for better usability, navigation and task completion flow.",
        result: "Cleaner user journey",
      },
      {
        icon: Palette,
        t: "E-commerce Storefront",
        d: "Product-focused storefront structure with improved category, product and checkout experience.",
        result: "Better shopping flow",
      },
      {
        icon: Sparkles,
        t: "Mobile App UI",
        d: "Onboarding and app screens designed for simplicity, trust and better user engagement.",
        result: "Improved app experience",
      },
    ],
  },
];

const industries = [
  "Retail",
  "Distribution",
  "Manufacturing",
  "Professional Services",
  "SaaS",
  "E-commerce",
  "Local Services",
  "Real Estate",
];

const tools = [
  "Odoo",
  "ERPNext",
  "Google Ads",
  "Meta Ads",
  "GA4",
  "GTM",
  "WordPress",
  "React",
  "Figma",
  "SEO Tools",
];
function parseThemeRgb(value: string) {
  const match = value.match(
    /rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:\s*[,/]\s*([\d.]+))?\s*\)/i,
  );

  if (!match) return null;

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    alpha: match[4] !== undefined ? Number(match[4]) : 1,
  };
}

function isDarkThemeRgb(value: string) {
  const rgb = parseThemeRgb(value);

  if (!rgb || rgb.alpha <= 0.05) return null;

  const brightness =
    (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;

  return brightness < 145;
}

function getExplicitThemeValue(element: HTMLElement | null) {
  if (!element) return null;

  const attributeValue = [
    element.getAttribute("data-theme"),
    element.getAttribute("data-mode"),
    element.getAttribute("data-color-scheme"),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (/\b(dark|night)\b/.test(attributeValue)) return true;
  if (/\b(light|day)\b/.test(attributeValue)) return false;

  // Check exact class tokens only. This avoids treating Tailwind classes such
  // as "dark:bg-black" as proof that dark mode is currently active.
  if (element.classList.contains("dark") || element.classList.contains("night")) {
    return true;
  }

  if (element.classList.contains("light") || element.classList.contains("day")) {
    return false;
  }

  return null;
}

function checkDarkTheme() {
  if (typeof window === "undefined") return false;

  const html = document.documentElement;
  const body = document.body;
  const root = document.querySelector<HTMLElement>("#root");
  const main = document.querySelector<HTMLElement>("main");
  const themeElement = document.querySelector<HTMLElement>(
    "[data-theme], [data-mode], [data-color-scheme]",
  );

  const candidates = Array.from(
    new Set(
      [themeElement, html, body, root, main].filter(Boolean) as HTMLElement[],
    ),
  );

  // 1. Prefer an explicit theme attribute or exact theme class.
  for (const element of candidates) {
    const explicitTheme = getExplicitThemeValue(element);

    if (explicitTheme !== null) return explicitTheme;
  }

  // 2. Read any theme-related localStorage key used by the application.
  try {
    const storageValues: string[] = [];

    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index);

      if (!key) continue;

      const normalizedKey = key.toLowerCase();

      if (
        normalizedKey.includes("theme") ||
        normalizedKey.includes("mode") ||
        normalizedKey.includes("scheme") ||
        normalizedKey.includes("appearance")
      ) {
        storageValues.push(window.localStorage.getItem(key) ?? "");
      }
    }

    const storedTheme = storageValues.join(" ").toLowerCase();

    if (/\b(dark|night)\b/.test(storedTheme)) return true;
    if (/\b(light|day)\b/.test(storedTheme)) return false;
  } catch {
    // localStorage can be unavailable in restricted browser modes.
  }

  // 3. Check the browser-resolved color scheme and visible backgrounds.
  // Transparent backgrounds are ignored rather than treated as black.
  for (const element of candidates) {
    const styles = window.getComputedStyle(element);
    const colorScheme = styles.colorScheme.toLowerCase();

    if (colorScheme.includes("dark")) return true;
    if (colorScheme.includes("light")) return false;

    const backgroundIsDark = isDarkThemeRgb(styles.backgroundColor);

    if (backgroundIsDark !== null) return backgroundIsDark;
  }

  // 4. Final fallback: operating-system/browser preference.
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function PortfolioHeroImage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    let lastTheme: boolean | null = null;

    const updateThemeImage = () => {
      const nextTheme = checkDarkTheme();

      if (nextTheme !== lastTheme) {
        lastTheme = nextTheme;
        setIsDarkMode(nextTheme);
      }
    };

    updateThemeImage();

    const observer = new MutationObserver(updateThemeImage);

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

    observer.observe(document.body, {
      attributes: true,
      childList: true,
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
    const handleClick = () => window.setTimeout(updateThemeImage, 0);

    mediaQuery.addEventListener("change", updateThemeImage);
    document.addEventListener("click", handleClick, true);
    window.addEventListener("storage", updateThemeImage);
    window.addEventListener("themechange", updateThemeImage);

    const intervalId = window.setInterval(updateThemeImage, 250);

    const darkImage = new Image();
    darkImage.src = portfolioHeroDark;

    const lightImage = new Image();
    lightImage.src = portfolioHeroLight;

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", updateThemeImage);
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("storage", updateThemeImage);
      window.removeEventListener("themechange", updateThemeImage);
      window.clearInterval(intervalId);
    };
  }, []);

  const activeHeroImage = isDarkMode
    ? portfolioHeroDark
    : portfolioHeroLight;

  return (
    <section
      aria-label="Business Genie Consulting portfolio"
      className={`relative w-full overflow-hidden ${
        isDarkMode ? "bg-[#050505]" : "bg-[#f4f7fc]"
      }`}
    >
      <motion.img
        key={activeHeroImage}
        src={activeHeroImage}
        alt="Business Genie Consulting portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        loading="eager"
        decoding="sync"
        draggable={false}
        onError={(event) => {
          console.error(
            "Portfolio hero image failed to load:",
            event.currentTarget.src,
          );
        }}
        className="block h-auto w-full select-none object-cover object-center"
      />
    </section>
  );
}

function Portfolio() {
  return (
    <SiteLayout>
      {/* Theme-aware Portfolio Hero Image */}
      <PortfolioHeroImage />

      {/* Premium Portfolio Stats */}
      <Section className="!py-10 sm:!py-12">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.65,
                  ease: "easeOut",
                }}
              >
                <Link
                  to={stat.to}
                  className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[var(--brand-orange)]/60 hover:bg-white/[0.06]"
                >
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand-orange)]/0 blur-[90px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/24" />
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <div className="text-4xl font-bold text-gradient-orange sm:text-5xl">
                        <CountUp end={stat.number} suffix={stat.suffix} />
                      </div>

                      <h3 className="mt-3 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                        {stat.label}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-white/55">
                        {stat.desc}
                      </p>
                    </div>

                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/45 transition-all duration-300 group-hover:border-[var(--brand-orange)]/45 group-hover:text-[var(--brand-orange)]">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Happy Clients Logo Loop */}
      <HappyClientsLoop />

      {/* Featured Work */}
      <Section className="!pt-8">
        <div className="container-x">
          <PortfolioHeading
            eyebrow="Featured Work"
            title={
              <>
                Selected work examples with{" "}
                <span className="text-gradient-orange">
                  strategy, execution and business impact
                </span>
              </>
            }
            subtitle="A professional snapshot of the type of results, systems and digital experiences we create for growth-focused businesses."
          />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, i) => {
              const Icon = project.icon;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 36, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.65,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/60 hover:bg-white/[0.06]"
                >
                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[var(--brand-orange)]/12 blur-[115px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/25" />
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

                  <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-orange)]/25 via-transparent to-transparent opacity-75" />

                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute right-6 top-6 h-24 w-24 rounded-full border border-[var(--brand-orange)]/20"
                    />

                    <div className="relative flex h-40 flex-col justify-between">
                      <div className="flex items-center justify-between gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/60 transition-colors duration-300 group-hover:border-[var(--brand-orange)]/40 group-hover:text-[var(--brand-orange)]">
                          Case Study
                        </div>
                      </div>

                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-orange)]">
                          {project.category}
                        </div>

                        <div className="mt-2 text-xl font-semibold text-white">
                          {project.result}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      {project.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/55 transition-all duration-300 group-hover:border-[var(--brand-orange)]/35 group-hover:text-[var(--brand-orange)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Portfolio Groups */}
      {groups.map((group) => {
        const GroupIcon = group.icon;

        return (
          <Section key={group.title} className="!pt-0">
            <div className="container-x">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
              >
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[var(--brand-orange)]">
                    <GroupIcon className="h-3.5 w-3.5" />
                    {group.eyebrow}
                  </div>

                  <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                    {group.title}
                  </h2>
                </div>

                <p className="max-w-xl text-sm leading-relaxed text-white/55">
                  A focused collection of work examples built around business
                  clarity, stronger systems, better tracking and premium digital
                  presentation.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {group.items.map((item, i) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.t}
                      initial={{ opacity: 0, y: 28, scale: 0.97 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        delay: i * 0.06,
                        duration: 0.55,
                        ease: "easeOut",
                      }}
                      whileHover={{ y: -8 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/60 hover:bg-white/[0.06]"
                    >
                      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[var(--brand-orange)]/0 blur-[90px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/20" />
                      <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

                      <div className="relative flex items-start justify-between gap-5">
                        <div className="flex gap-4">
                          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-orange text-black">
                            <Icon className="h-5 w-5" />
                          </div>

                          <div>
                            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--brand-orange)]">
                              {group.title}
                            </div>

                            <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                              {item.t}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-white/60">
                              {item.d}
                            </p>

                            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/65 transition-all duration-300 group-hover:border-[var(--brand-orange)]/35 group-hover:text-[var(--brand-orange)]">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
                              {item.result}
                            </div>
                          </div>
                        </div>

                        <ArrowUpRight className="h-5 w-5 shrink-0 text-white/35 transition-all duration-300 group-hover:rotate-12 group-hover:text-[var(--brand-orange)]" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Section>
        );
      })}

      {/* Industries + Tools */}
      <Section className="!pt-0">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <InfoPanel
            eyebrow="Industries"
            title="Business categories we support"
            items={industries}
          />

          <InfoPanel
            eyebrow="Tools & Platforms"
            title="Platforms we work with"
            items={tools}
          />
        </div>
      </Section>

      {/* Professional CTA */}
      <Section className="!pt-0 !pb-32">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur-xl sm:p-10 lg:p-12"
          >
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--brand-orange)]/20 blur-[110px]" />
            <div
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />

            <div className="relative mx-auto max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/65">
                <Briefcase className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
                Work With Us
              </div>

              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Want to build your next{" "}
                <span className="text-gradient-orange">
                  system, campaign or website?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
                Share your business requirements and our team will guide you
                with the right strategy, technology and execution plan.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-orange px-7 py-3.5 font-semibold text-black glow-orange transition-transform duration-300 hover:scale-[1.03]"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-white/80 transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:text-[var(--brand-orange)]"
                >
                  View Portfolio
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function HappyClientsLoop() {
  const loopClients = [...happyClients, ...happyClients, ...happyClients];

  return (
    <Section className="!pt-0">
      <div className="container-x">
        <PortfolioHeading
          eyebrow="Happy Clients"
          title={
            <>
              Trusted businesses where our{" "}
              <span className="text-gradient-orange">software is running</span>
            </>
          }
          subtitle="Client logos moving smoothly from right to left, showing businesses using our software, systems and digital solutions."
        />

        <div className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050505] to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050505] to-transparent sm:w-28" />

          <motion.div
            className="flex w-max items-center gap-14 sm:gap-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 34,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {loopClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ y: -6, scale: 1.04 }}
                className="group flex w-[170px] shrink-0 flex-col items-center justify-center text-center sm:w-[210px]"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (index % happyClients.length) * 0.12,
                  }}
                  className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-white p-2 shadow-[0_0_24px_rgba(255,132,0,0.16)] ring-1 ring-white/20 transition-all duration-300 group-hover:shadow-[0_0_34px_rgba(255,132,0,0.35)] group-hover:ring-[var(--brand-orange)]/70"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-full rounded-full object-contain transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </motion.div>

                <div className="relative mt-4 text-sm font-semibold text-white/80 transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                  {client.name}
                  <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-orange transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const frameRate = 20;
    const totalFrames = duration / frameRate;
    const increment = end / totalFrames;

    const timer = window.setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => window.clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function PortfolioHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <div className="mb-3 text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
        {eyebrow}
      </div>

      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
        {subtitle}
      </p>
    </motion.div>
  );
}

function InfoPanel({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[var(--brand-orange)]/55 hover:bg-white/[0.055] sm:p-8"
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--brand-orange)]/0 blur-[110px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/18" />
      <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

      <div className="relative">
        <div className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
          {eyebrow}
        </div>

        <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)] sm:text-3xl">
          {title}
        </h3>

        <div className="mt-6 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 transition-all duration-300 hover:border-[var(--brand-orange)]/40 hover:text-[var(--brand-orange)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}