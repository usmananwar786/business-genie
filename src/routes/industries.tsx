import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Database,
  Factory,
  FileText,
  Globe2,
  Headphones,
  Layers3,
  Megaphone,
  PackageCheck,
  ReceiptText,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Store,
  Users,
  Workflow,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, Section } from "@/components/layout/Section";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Odoo ERP Solution — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Odoo ERP implementation for accounting, CRM, sales, inventory, purchase, POS, manufacturing, HR, projects, website, e-commerce and reporting.",
      },
      {
        property: "og:title",
        content: "Odoo ERP Solution — Business Genie Consulting",
      },
      {
        property: "og:description",
        content:
          "Complete Odoo ERP setup, customization, training and support for growing businesses.",
      },
    ],
  }),
  component: Odoo,
});

const odooModules = [
  {
    icon: Database,
    t: "Odoo ERP",
    d: "Central system for business operations, users, workflows and reporting.",
  },
  {
    icon: CircleDollarSign,
    t: "Accounting",
    d: "Invoices, payments, bills, expenses, taxes and financial reports.",
  },
  {
    icon: ShoppingCart,
    t: "Sales & CRM",
    d: "Leads, quotations, sales orders, follow-ups and customer tracking.",
  },
  {
    icon: PackageCheck,
    t: "Inventory",
    d: "Stock control, warehouses, transfers, products and reorder rules.",
  },
  {
    icon: ReceiptText,
    t: "Purchase",
    d: "Purchase orders, vendor bills, approvals and supplier management.",
  },
  {
    icon: Store,
    t: "POS",
    d: "Retail billing, counter sales, sessions, payments and stock sync.",
  },
  {
    icon: Factory,
    t: "Manufacturing",
    d: "BOM, production orders, work centers, costing and planning.",
  },
  {
    icon: Users,
    t: "HRMS",
    d: "Employees, attendance, leaves, payroll and HR operations.",
  },
  {
    icon: Workflow,
    t: "Projects",
    d: "Tasks, timesheets, milestones, project costing and team planning.",
  },
  {
    icon: Globe2,
    t: "Website & eCommerce",
    d: "Website, online store, product pages, orders and customer data.",
  },
  {
    icon: Megaphone,
    t: "Marketing",
    d: "Email marketing, campaigns, automation and customer communication.",
  },
  {
    icon: BarChart3,
    t: "Reporting",
    d: "Dashboards, KPIs, real-time reports and business visibility.",
  },
];

const odooCards = [
  {
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    title: "Finance & Accounting",
    desc: "Manage invoices, bills, expenses, payments, taxes, journals, bank reconciliation and financial reporting from one ERP system.",
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
    title: "Sales, CRM & Customer Pipeline",
    desc: "Track leads, opportunities, quotations, sales orders, customers, activities and follow-ups with a connected sales workflow.",
  },
  {
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    title: "Inventory & Warehouse",
    desc: "Control stock levels, warehouses, locations, transfers, deliveries, receipts, lots, serial numbers and product movement.",
  },
  {
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
    title: "Manufacturing & Production",
    desc: "Plan production with BOM, manufacturing orders, work centers, raw material consumption, costing and finished goods tracking.",
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    title: "HRMS & Employees",
    desc: "Manage employee profiles, attendance, leaves, payroll records, approvals, departments and HR operations in one place.",
  },
  {
    img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=85",
    title: "POS, Website & eCommerce",
    desc: "Connect retail POS, online orders, product catalog, customers, payments, stock and sales reports for complete visibility.",
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    title: "Projects & Services",
    desc: "Manage project tasks, timesheets, milestones, service delivery, team workload, billing and project profitability.",
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    title: "Dashboards & Business Reports",
    desc: "Get real-time reports for sales, finance, stock, purchases, HR, production and management decision-making.",
  },
];

const implementationSteps = [
  {
    n: "01",
    title: "Business Analysis",
    desc: "We study your current process, departments, users, reports and pain points.",
  },
  {
    n: "02",
    title: "Module Planning",
    desc: "We select the right Odoo apps according to your business workflow.",
  },
  {
    n: "03",
    title: "Configuration",
    desc: "We setup users, access rights, workflows, approvals and company settings.",
  },
  {
    n: "04",
    title: "Data Migration",
    desc: "We help move products, customers, vendors, accounts and opening data.",
  },
  {
    n: "05",
    title: "Training & Testing",
    desc: "Your team tests the system and learns how to use it properly.",
  },
  {
    n: "06",
    title: "Go Live & Support",
    desc: "We launch the system and provide support for fixes and improvements.",
  },
];

const benefits = [
  "Centralized business data",
  "Less manual work",
  "Better inventory control",
  "Real-time reporting",
  "Clear approval workflow",
  "Department-wise access",
  "Scalable ERP system",
  "Better management visibility",
];

function Odoo() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Odoo ERP Solution"
        title={
          <>
            Complete business management with{" "}
            <span className="text-gradient-orange">Odoo ERP</span>
          </>
        }
        subtitle="Odoo helps businesses manage accounting, sales, CRM, inventory, purchase, POS, manufacturing, HRMS, projects, website, e-commerce and reporting from one connected system."
      />

      {/* Top Odoo Modules */}
      <Section>
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {odooModules.map((it, i) => {
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
                    <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black transition-all duration-300 group-hover:scale-105">
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

      {/* Odoo Detail Image Cards */}
      <Section className="!pt-0">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 max-w-3xl"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              What Odoo Includes
            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              One ERP system for{" "}
              <span className="text-gradient-orange">all business departments</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/65">
              Odoo connects your teams, operations, data and reports so your
              business can work through one clean and scalable platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {odooCards.map((card, i) => (
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

                  <div className="mt-5 h-[1px] w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-0 bg-gradient-orange transition-all duration-700 group-hover:w-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Implementation Process */}
      <Section className="!pt-0">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 max-w-3xl"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
              Implementation Process
            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              How we setup{" "}
              <span className="text-gradient-orange">Odoo ERP</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/65">
              Our implementation process is designed to keep your ERP clean,
              practical and easy for your team to use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {implementationSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7, scale: 1.015 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-white/[0.06]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-orange)]/0 blur-2xl transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/18" />

                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-500 group-hover:w-full" />

                <div className="relative">
                  <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black text-sm font-bold">
                    {step.n}
                  </div>

                  <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="!pt-0">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[var(--brand-orange)]/15 blur-[90px]" />
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-orange" />

            <div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
              <div>
                <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div className="text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                  Business Benefits
                </div>

                <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                  Why businesses choose{" "}
                  <span className="text-gradient-orange">Odoo</span>
                </h2>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/65">
                  Odoo gives management better visibility, departments better
                  control and teams a more organized way to handle daily work.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.25 }}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70 transition-all duration-300 hover:border-[var(--brand-orange)]/45 hover:text-[var(--brand-orange)]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[var(--brand-orange)]" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Support / Customization */}
      <Section className="!pt-0 !pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Settings2,
                title: "Customization",
                desc: "Custom workflows, fields, reports, forms and dashboards according to your business needs.",
              },
              {
                icon: FileText,
                title: "Training & Documentation",
                desc: "Practical user training so your team can use Odoo confidently after implementation.",
              },
              {
                icon: Headphones,
                title: "Ongoing Support",
                desc: "Post-launch support for fixes, improvements, new modules and system optimization.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -7, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:bg-white/[0.06]"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--brand-orange)]/0 blur-2xl transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/18" />

                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-orange transition-all duration-500 group-hover:w-full" />

                  <div className="relative">
                    <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-orange text-black">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-7 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 backdrop-blur-xl"
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--brand-orange)]/15 blur-[80px]" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                  <Layers3 className="h-4 w-4" />
                  Odoo Consultation
                </div>

                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white">
                  Need Odoo setup for your business?
                </h2>

                <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/65">
                  We can help you select modules, setup workflows, migrate data,
                  train users and build a clean ERP system for your company.
                </p>
              </div>

              <Link
                to="/contact"
                className="btn-shine inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-orange text-black font-semibold glow-orange hover:scale-[1.03] transition-transform"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </SiteLayout>
  );
}