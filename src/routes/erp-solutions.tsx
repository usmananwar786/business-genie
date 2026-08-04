// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import {
//   CheckCircle2,
//   Briefcase,
//   Receipt,
//   ArrowRight,
//   Database,
//   FileSpreadsheet,
//   Users,
//   Package,
//   ShoppingCart,
//   BarChart3,
// } from "lucide-react";
// import { SiteLayout } from "@/components/layout/SiteLayout";
// import { PageHero, Section, SectionTitle } from "@/components/layout/Section";
// import { SITE } from "@/lib/site";

// export const Route = createFileRoute("/erp-solutions")({
//   head: () => ({
//     meta: [
//       { title: "ERP Solutions — Business Genie Consulting" },
//       {
//         name: "description",
//         content:
//           "Complete ERP implementation for accounts, inventory, HR, sales and reporting. Transform manual operations into fully automated systems.",
//       },
//     ],
//   }),
//   component: ERP,
// });

// const modules = [
//   {
//     icon: FileSpreadsheet,
//     t: "Accounts & Financials",
//     d: "Chart of accounts, GL, AP/AR, taxation, reconciliations.",
//   },
//    {
//     icon: ShoppingCart,
//     t: "Sales & Purchase",
//     d: "Quotations, orders, invoices, customer managment,  vendor management and reporting.",
//   },
//    {
//     icon: Package,
//     t: "Inventory & Stock",
//     d: "Warehouses,reorder levels, batches & expiry, stock movement, audit alignment.",
//   },
//    {
//     icon: Database,
//     t: "Production & MRP",
//     d: "BOM's, work orders, production tracking, costing.",
//   },
//  {
//   icon: Briefcase,
//   t: "Project Management",
//   d: "BOQ's, Timeline tracking, team collaboration, task assignment, and progress monitoring.",
// },
// // {
// //   icon: Receipt, // ya Calculator / Wallet
// //   t: "Bookkeeping",
// //   d: "Ledger management, expense tracking, invoicing, and financial record-keeping.",
// // },
 
 
//   {
//     icon: Users,
//     t: "HR & Payroll",
//     d: "Employees, attendance,leave management, payroll cycles, reimbursement.",
//   },
 
//   {
//     icon: BarChart3,
//     t: "Reporting Dashboards",
//     d: "Real-time KPIs, financial reports, custom analytics.",
//   },
// ];

// const includes = [
//   "Complete ERP setup and configuration",
//   "BOM's, work orders, production tracking, costing",

//   "Accounts and financial structuring",
//   "Inventory and stock audit alignment",
//  "Ledger management,  tracking, record-keeping",
//   "Sales and purchase module setup",
//   "HR and payroll setup",
//   "Opening balances and data migration",
//   "Stock audit and reconciliation",
//   "ERP error fixing",
//   "System optimization",
//   "Client training and ongoing support",
//   "Reporting dashboards",
//   "Workflow automation",
// ];

// function ERP() {
//   return (
//     <SiteLayout>
//       <PageHero
//         eyebrow="ERP Solutions"
//         title={
//           <>
//             Complete ERP for accounts, inventory, HR, sales &{" "}
//             <span className="text-gradient-orange">reporting</span>
//           </>
//         }
//         subtitle="We help businesses transform manual operations into fully automated ERP systems that improve efficiency, control, accuracy and profitability."
//       >
//         <div className="flex flex-wrap justify-center gap-3">
//           <Link
//             to="/contact"
//             className="btn-shine inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-orange text-black font-semibold glow-orange"
//           >
//             Book ERP Consultation <ArrowRight className="h-4 w-4" />
//           </Link>

//           <a
//             href={SITE.whatsappUrl}
//             target="_blank"
//             rel="noopener"
//             className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 hover:bg-white/10"
//           >
//             Discuss on WhatsApp
//           </a>
//         </div>
//       </PageHero>

//       <Section>
//         <div className="container-x">
//           <SectionTitle
//             eyebrow="ERP Modules"
//             title="Every part of your business on one system"
//           />

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {modules.map((m, i) => (
//               <motion.div
//                 key={m.t}
//                 initial={{
//                   opacity: 0,
//                   y: 34,
//                   scale: 0.94,
//                   rotateX: -8,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                   rotateX: 0,
//                 }}
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{
//                   delay: i * 0.08,
//                   duration: 0.65,
//                   ease: "easeOut",
//                 }}
//                 whileHover={{
//                   y: -10,
//                   scale: 1.025,
//                 }}
//                 className="group relative overflow-hidden glass-card p-7 hover:border-[var(--brand-orange)]/55 transition-all duration-500"
//               >
//                 <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand-orange)]/0 blur-[80px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/20" />

//                 <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

//                 <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

//                 <div className="relative">
//                   <motion.div
//                     whileHover={{
//                       rotate: [0, -8, 8, 0],
//                       scale: 1.12,
//                     }}
//                     transition={{ duration: 0.45, ease: "easeOut" }}
//                     className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black mb-4 shadow-[0_0_22px_rgba(255,132,0,0.22)] transition-all duration-300 group-hover:shadow-[0_0_32px_rgba(255,132,0,0.42)]"
//                   >
//                     <m.icon className="h-6 w-6" />
//                   </motion.div>

//                   <h3 className="font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
//                     {m.t}
//                   </h3>

//                   <p className="text-sm text-white/60 transition-colors duration-300 group-hover:text-white/75">
//                     {m.d}
//                   </p>

//                   <div className="mt-5 h-px w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </Section>

//       <Section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-teal)]/5 via-transparent to-[var(--brand-orange)]/5" />

//         <div className="relative container-x">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)] mb-3">
//                 Transformation
//               </div>

//               <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
//                 From messy records to a fully controlled ERP
//               </h2>

//               <p className="text-white/70">
//                 We don't just implement software. We optimize your workflow,
//                 fix stock issues, resolve accounting errors, train your team,
//                 and build a system that gives you full control.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="glass-card p-6">
//                 <div className="text-xs uppercase tracking-wider text-white/50 mb-4">
//                   Before ERP
//                 </div>

//                 <ul className="space-y-2.5 text-sm text-white/70">
//                   {[
//                     "Manual records",
//                     "Stock mismatch",
//                     "Accounting errors",
//                     "Delayed reports",
//                     "No business visibility",
//                     "Team confusion",
//                   ].map((i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       <span className="h-1.5 w-1.5 rounded-full bg-red-500/70" />
//                       {i}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="glass-card p-6 border-[var(--brand-teal)]/30 bg-[var(--brand-teal)]/5">
//                 <div className="text-xs uppercase tracking-wider text-[var(--brand-teal)] mb-4">
//                   After ERP
//                 </div>

//                 <ul className="space-y-2.5 text-sm text-white">
//                   {[
//                     "Automated workflow",
//                     "Accurate inventory",
//                     "Clean accounts",
//                     "Real-time reports",
//                     "Better control",
//                     "Scalable system",
//                   ].map((i) => (
//                     <li key={i} className="flex items-center gap-2">
//                       <CheckCircle2 className="h-4 w-4 text-[var(--brand-teal)] shrink-0" />
//                       {i}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Section>

//       <Section>
//         <div className="container-x">
//           <SectionTitle
//             eyebrow="What's Included"
//             title="Turnkey ERP Deployment Not Just a Software License"
//           />

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {includes.map((i, idx) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -10 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.03 }}
//                 whileHover={{ x: 6 }}
//                 className="flex items-center gap-3 glass-card px-5 py-4"
//               >
//                 <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)] shrink-0" />

//                 <span className="text-sm text-white/85">{i}</span>
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
import erpHeroBg from "@/assets/erp-hero-bg.png";
import {
  CheckCircle2,
  Briefcase,
  ArrowRight,
  Database,
  FileSpreadsheet,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section, SectionTitle } from "@/components/layout/Section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/erp-solutions")({
  head: () => ({
    meta: [
      { title: "ERP Solutions — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Complete ERP implementation for accounts, inventory, HR, sales and reporting. Transform manual operations into fully automated systems.",
      },
    ],
  }),
  component: ERP,
});

const modules = [
  {
    icon: FileSpreadsheet,
    t: "Accounts & Financials",
    d: "Chart of accounts, GL, AP/AR, taxation, reconciliations.",
  },
   {
    icon: ShoppingCart,
    t: "Sales & Purchase",
    d: "Quotations, orders, invoices, customer managment,  vendor management and reporting.",
  },
   {
    icon: Package,
    t: "Inventory & Stock",
    d: "Warehouses,reorder levels, batches & expiry, stock movement, audit alignment.",
  },
   {
    icon: Database,
    t: "Production & MRP",
    d: "BOM's, work orders, production tracking, costing.",
  },
 {
  icon: Briefcase,
  t: "Project Management",
  d: "BOQ's, Timeline tracking, team collaboration, task assignment, and progress monitoring.",
},
// {
//   icon: Receipt, // ya Calculator / Wallet
//   t: "Bookkeeping",
//   d: "Ledger management, expense tracking, invoicing, and financial record-keeping.",
// },
 
 
  {
    icon: Users,
    t: "HR & Payroll",
    d: "Employees, attendance,leave management, payroll cycles, reimbursement.",
  },
 
  {
    icon: BarChart3,
    t: "Reporting Dashboards",
    d: "Real-time KPIs, financial reports, custom analytics.",
  },
];

const heroContent = {
  eyebrow: "ERP Solutions",
  title: "Complete ERP for accounts, inventory, HR, sales &",
  highlight: "reporting",
  subtitle:
    "We help businesses transform manual operations into fully automated ERP systems that improve efficiency, control, accuracy and profitability.",
};

const includes = [
  "Complete ERP setup and configuration",
  "BOM's, work orders, production tracking, costing",

  "Accounts and financial structuring",
  "Inventory and stock audit alignment",
 "Ledger management,  tracking, record-keeping",
  "Sales and purchase module setup",
  "HR and payroll setup",
  "Opening balances and data migration",
  "Stock audit and reconciliation",
  "ERP error fixing",
  "System optimization",
  "Client training and ongoing support",
  "Reporting dashboards",
  "Workflow automation",
];

function ERP() {
  return (
    <SiteLayout>
      <section className="erp-image-hero relative isolate overflow-hidden border-b border-black/10 dark:border-white/10">
        <style>{`
          .erp-image-hero {
            --erp-hero-title: #ffffff;
            --erp-hero-body: rgba(255, 255, 255, 0.76);
            --erp-hero-eyebrow: #f6a01a;
            --erp-hero-outline: rgba(255, 255, 255, 0.25);
            --erp-hero-outline-hover: rgba(255, 255, 255, 0.10);
            --erp-hero-panel: transparent;
            background: #050505;

            /* The original banner is 2048 × 742. This keeps the desktop hero
               close to the same professional proportion without becoming huge. */
            height: clamp(430px, 36.23vw, 590px);
          }

          .erp-image-hero__image {
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            filter: brightness(0.92) saturate(1.04) contrast(1.02);
          }

          /* Covers the old text baked into the image, while keeping the laptop
             and orange graphics clearly visible on the right. */
          .erp-image-hero__cover {
            background: linear-gradient(
              90deg,
              #050505 0%,
              rgba(5, 5, 5, 0.99) 36%,
              rgba(5, 5, 5, 0.94) 48%,
              rgba(5, 5, 5, 0.70) 61%,
              rgba(5, 5, 5, 0.20) 78%,
              rgba(5, 5, 5, 0) 93%
            );
          }

          .erp-image-hero__content {
            width: min(64%, 850px);
          }

          /* Light / day mode: same image, warm premium overlay and dark text. */
          .cream-theme .erp-image-hero,
          .light .erp-image-hero,
          [data-theme="light"] .erp-image-hero {
            --erp-hero-title: #17130f;
            --erp-hero-body: #514940;
            --erp-hero-outline: rgba(23, 19, 15, 0.22);
            --erp-hero-outline-hover: rgba(23, 19, 15, 0.07);
            --erp-hero-panel: rgba(245, 240, 230, 0.28);
            background: #eee8dc;
          }

          .cream-theme .erp-image-hero__image,
          .light .erp-image-hero__image,
          [data-theme="light"] .erp-image-hero__image {
            filter: brightness(1.02) saturate(0.95) contrast(0.98);
          }

          .cream-theme .erp-image-hero__cover,
          .light .erp-image-hero__cover,
          [data-theme="light"] .erp-image-hero__cover {
            background: linear-gradient(
              90deg,
              #eee8dc 0%,
              rgba(238, 232, 220, 0.99) 38%,
              rgba(238, 232, 220, 0.95) 50%,
              rgba(238, 232, 220, 0.73) 62%,
              rgba(238, 232, 220, 0.20) 79%,
              rgba(238, 232, 220, 0) 93%
            );
          }

          @media (max-width: 1023px) {
            .erp-image-hero {
              height: clamp(470px, 58vw, 560px);
            }

            .erp-image-hero__content {
              width: min(72%, 720px);
            }

            .erp-image-hero__cover {
              background: linear-gradient(
                90deg,
                rgba(5, 5, 5, 0.99) 0%,
                rgba(5, 5, 5, 0.96) 52%,
                rgba(5, 5, 5, 0.67) 72%,
                rgba(5, 5, 5, 0.12) 100%
              );
            }

            .cream-theme .erp-image-hero__cover,
            .light .erp-image-hero__cover,
            [data-theme="light"] .erp-image-hero__cover {
              background: linear-gradient(
                90deg,
                rgba(238, 232, 220, 0.99) 0%,
                rgba(238, 232, 220, 0.96) 52%,
                rgba(238, 232, 220, 0.70) 74%,
                rgba(238, 232, 220, 0.16) 100%
              );
            }
          }

          @media (max-width: 767px) {
            .erp-image-hero {
              height: auto;
              min-height: 520px;
            }

            .erp-image-hero__image {
              background-position: 72% center;
            }

            .erp-image-hero__content {
              width: 100%;
            }

            .erp-image-hero__cover {
              background: linear-gradient(
                180deg,
                rgba(5, 5, 5, 0.84) 0%,
                rgba(5, 5, 5, 0.94) 48%,
                rgba(5, 5, 5, 0.99) 100%
              );
            }

            .cream-theme .erp-image-hero__cover,
            .light .erp-image-hero__cover,
            [data-theme="light"] .erp-image-hero__cover {
              background: linear-gradient(
                180deg,
                rgba(238, 232, 220, 0.82) 0%,
                rgba(238, 232, 220, 0.95) 48%,
                rgba(238, 232, 220, 0.99) 100%
              );
            }
          }
        `}</style>

        <div
          className="erp-image-hero__image absolute inset-0 -z-30"
          style={{ backgroundImage: `url(${erpHeroBg})` }}
        />
        <div className="erp-image-hero__cover absolute inset-0 -z-20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_48%,rgba(246,160,26,.16),transparent_27%)]" />

        <div className="container-x relative flex h-full min-h-[inherit] items-center py-10 sm:py-12 lg:py-10">
          <div className="erp-image-hero__content rounded-3xl bg-[var(--erp-hero-panel)] p-0 backdrop-blur-[1px] sm:p-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--erp-hero-eyebrow)] sm:mb-4 sm:text-[11px]"
            >
              {heroContent.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.65 }}
              className="max-w-[780px] text-[clamp(2rem,4vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-[var(--erp-hero-title)]"
            >
              {heroContent.title}{" "}
              <span className="text-[var(--brand-orange)]">
                {heroContent.highlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 max-w-[690px] text-sm font-medium leading-6 text-[var(--erp-hero-body)] sm:mt-5 sm:text-base sm:leading-7 lg:text-lg"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.58 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                to="/contact"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gradient-orange px-5 py-3 text-sm font-semibold text-black glow-orange sm:px-6"
              >
                Book ERP Consultation <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--erp-hero-outline)] px-5 py-3 text-sm font-medium text-[var(--erp-hero-title)] transition hover:bg-[var(--erp-hero-outline-hover)] sm:px-6"
              >
                Discuss on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Section>
        <div className="container-x">
          <SectionTitle
            eyebrow="ERP Modules"
            title="Every part of your business on one system"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <motion.div
                key={m.t}
                initial={{
                  opacity: 0,
                  y: 34,
                  scale: 0.94,
                  rotateX: -8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.65,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.025,
                }}
                className="group relative overflow-hidden glass-card p-7 hover:border-[var(--brand-orange)]/55 transition-all duration-500"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand-orange)]/0 blur-[80px] transition-all duration-500 group-hover:bg-[var(--brand-orange)]/20" />

                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <div className="relative">
                  <motion.div
                    whileHover={{
                      rotate: [0, -8, 8, 0],
                      scale: 1.12,
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black mb-4 shadow-[0_0_22px_rgba(255,132,0,0.22)] transition-all duration-300 group-hover:shadow-[0_0_32px_rgba(255,132,0,0.42)]"
                  >
                    <m.icon className="h-6 w-6" />
                  </motion.div>

                  <h3 className="font-semibold mb-2 text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                    {m.t}
                  </h3>

                  <p className="text-sm text-white/60 transition-colors duration-300 group-hover:text-white/75">
                    {m.d}
                  </p>

                  <div className="mt-5 h-px w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-teal)]/5 via-transparent to-[var(--brand-orange)]/5" />

        <div className="relative container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)] mb-3">
                Transformation
              </div>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                From messy records to a fully controlled ERP
              </h2>

              <p className="text-white/70">
                We don't just implement software. We optimize your workflow,
                fix stock issues, resolve accounting errors, train your team,
                and build a system that gives you full control.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6">
                <div className="text-xs uppercase tracking-wider text-white/50 mb-4">
                  Before ERP
                </div>

                <ul className="space-y-2.5 text-sm text-white/70">
                  {[
                    "Manual records",
                    "Stock mismatch",
                    "Accounting errors",
                    "Delayed reports",
                    "No business visibility",
                    "Team confusion",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500/70" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 border-[var(--brand-teal)]/30 bg-[var(--brand-teal)]/5">
                <div className="text-xs uppercase tracking-wider text-[var(--brand-teal)] mb-4">
                  After ERP
                </div>

                <ul className="space-y-2.5 text-sm text-white">
                  {[
                    "Automated workflow",
                    "Accurate inventory",
                    "Clean accounts",
                    "Real-time reports",
                    "Better control",
                    "Scalable system",
                  ].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[var(--brand-teal)] shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionTitle
            eyebrow="What's Included"
            title="Turnkey ERP Deployment Not Just a Software License"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {includes.map((i, idx) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 glass-card px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 text-[var(--brand-orange)] shrink-0" />

                <span className="text-sm text-white/85">{i}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}