import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Mail,
  Sparkles,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero } from "@/components/layout/Section";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      {
        title: "Business Insights & Guides | Business Genie Consulting",
      },
      {
        name: "description",
        content:
          "Practical guides on ERP implementation, HRMS automation, digital marketing, SEO, reporting dashboards and scalable business systems.",
      },
      {
        property: "og:title",
        content: "Business Genie Consulting Blog",
      },
      {
        property: "og:description",
        content:
          "Actionable ERP, HRMS, digital marketing and business automation insights.",
      },
    ],
  }),
  component: Blogs,
});

type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  points: string[];
};

const blogPosts: BlogPost[] = [
  {
    slug: "erp-implementation-roadmap",
    category: "ERP Implementation",
    title: "A Practical ERP Implementation Roadmap for Growing Businesses",
    excerpt:
      "Move from disconnected spreadsheets and manual processes to one structured ERP system without disrupting daily operations.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=86",
    imageAlt: "Business team planning an ERP implementation roadmap",
    paragraphs: [
      "ERP implementation should begin with business processes, not software screens. Before selecting modules or creating workflows, document how sales, purchase, inventory, accounts, production and reporting currently operate. This reveals duplicate work, approval gaps and data that is being entered in more than one place.",
      "The next step is to define a phased rollout. Start with the modules that create the strongest operational foundation, migrate clean data, test real scenarios and train users before going live. A controlled launch reduces risk and gives the team enough time to adjust.",
      "After launch, review reports, user adoption and process exceptions regularly. ERP is most valuable when dashboards, permissions and automations keep improving as the business grows.",
    ],
    points: [
      "Map existing sales, purchase, inventory and accounts workflows",
      "Clean and validate master data before migration",
      "Roll out priority modules in manageable phases",
      "Train users with role-based scenarios",
      "Track adoption, errors and reporting quality after go-live",
    ],
  },
  {
    slug: "hrms-automation-guide",
    category: "HRMS Automation",
    title: "How HRMS Automation Improves Employee Operations",
    excerpt:
      "Connect recruitment, employee records, attendance, payroll and reporting in one reliable HR workflow.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=86",
    imageAlt: "HR team collaborating around a meeting table",
    paragraphs: [
      "Manual HR processes often create delays because employee information is scattered across emails, files and spreadsheets. HRMS automation creates one controlled source for employee records and turns repetitive work into consistent workflows.",
      "Recruitment requests, onboarding documents, attendance records, leave approvals and payroll inputs can move through clear approval stages. Managers gain visibility while employees receive faster responses and fewer administrative errors.",
      "A successful HRMS setup should also include permissions, audit history and meaningful reports. These controls help the organization protect employee data and make better workforce decisions.",
    ],
    points: [
      "Centralized employee profiles and documents",
      "Structured onboarding and approval workflows",
      "Attendance, leave and payroll integration",
      "Role-based access to sensitive information",
      "Live HR dashboards for management decisions",
    ],
  },
  {
    slug: "digital-marketing-growth-system",
    category: "Digital Marketing",
    title: "Build a Digital Marketing System That Generates Measurable Growth",
    excerpt:
      "Combine positioning, paid media, SEO, landing pages and conversion tracking into one performance-focused growth system.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=86",
    imageAlt: "Digital marketing analytics dashboard on a laptop",
    paragraphs: [
      "Digital marketing works best when every channel supports the same customer journey. Paid ads can create immediate demand, SEO can build long-term visibility and high-converting web pages can turn that traffic into enquiries or sales.",
      "Start with a clear offer and audience, then map the steps from first interaction to conversion. Every campaign should use accurate analytics, conversion events and reporting so decisions are based on business outcomes rather than clicks alone.",
      "Optimization should focus on message quality, audience relevance, landing-page experience and lead quality. When these elements are reviewed together, marketing becomes a scalable system instead of a collection of disconnected campaigns.",
    ],
    points: [
      "Define a clear audience, offer and conversion goal",
      "Align Google Ads, social ads, SEO and content",
      "Use dedicated landing pages for important services",
      "Configure GA4, GTM and conversion tracking correctly",
      "Optimize for qualified leads and revenue, not vanity metrics",
    ],
  },
  {
    slug: "seo-web-conversion-foundation",
    category: "SEO & Web Growth",
    title: "Why SEO and Web Development Must Work Together",
    excerpt:
      "A modern website should be technically searchable, fast, helpful and designed to convert visitors into real business opportunities.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=86",
    imageAlt: "Website performance and SEO analytics on a laptop",
    paragraphs: [
      "SEO cannot reach its full potential on a website with weak structure, slow performance or unclear service pages. Search engines need clean technical foundations, while visitors need useful content and an easy path to contact the business.",
      "Each important service should have a focused page with relevant headings, supporting information, internal links and a clear call to action. The website should also load quickly and work properly across mobile, tablet and desktop devices.",
      "When SEO, UX and conversion tracking are planned together, organic traffic becomes easier to measure and more likely to generate enquiries.",
    ],
    points: [
      "Create focused pages for priority services",
      "Improve mobile speed and Core Web Vitals",
      "Use logical navigation and internal linking",
      "Add clear calls to action and trust signals",
      "Track forms, calls and important user actions",
    ],
  },
  {
    slug: "business-reporting-dashboards",
    category: "Reporting Dashboards",
    title: "Turn Business Data Into Clear Reporting Dashboards",
    excerpt:
      "Replace delayed manual reporting with live dashboards that show the KPIs management needs to act confidently.",
    image:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=86",
    imageAlt: "Business reporting charts and performance dashboards",
    paragraphs: [
      "A dashboard is useful only when it answers specific business questions. Instead of displaying every available metric, begin with the decisions that management needs to make across sales, finance, inventory, HR and marketing.",
      "Data definitions should remain consistent across departments. Revenue, margin, active customers, stock value and lead status must mean the same thing in every report. This creates trust and prevents teams from debating numbers instead of acting on them.",
      "Well-designed dashboards combine summary KPIs with drill-down detail, helping leaders spot changes quickly and investigate the reason behind them.",
    ],
    points: [
      "Choose KPIs linked to real management decisions",
      "Standardize definitions across teams and systems",
      "Connect reliable ERP, HRMS and marketing data",
      "Use alerts for unusual changes or exceptions",
      "Review dashboard relevance as the business evolves",
    ],
  },
  {
    slug: "connected-business-automation",
    category: "Business Automation",
    title: "Create a Connected Digital Ecosystem for Scalable Growth",
    excerpt:
      "Bring ERP, HRMS, websites, analytics and marketing together so information moves smoothly across the business.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=86",
    imageAlt: "Business team discussing connected digital systems",
    paragraphs: [
      "Businesses often adopt new tools one at a time, which can create another layer of disconnected systems. A scalable digital ecosystem connects the most important workflows and ensures that teams work from accurate, shared information.",
      "For example, a website enquiry can enter the CRM, become a sales opportunity, create an order in ERP and appear in management reporting without repeated manual entry. Similar connections can improve employee onboarding, inventory visibility and marketing attribution.",
      "The goal is not to automate everything immediately. Prioritize repetitive work, common errors and processes where faster information creates a clear business benefit.",
    ],
    points: [
      "Identify repeated data entry between departments",
      "Connect high-value workflows before minor tasks",
      "Use clear ownership and approval rules",
      "Protect data with permissions and audit trails",
      "Measure time saved, errors reduced and outcomes improved",
    ],
  },
 {
  slug: "crm-customer-experience-strategy",
  category: "CRM & Customer Experience",
  title: "Build a Smarter CRM System That Converts Leads Into Customers",
  excerpt:
    "Organize enquiries, automate follow-ups and give your sales team a clear view of every customer interaction.",
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=86",
  imageAlt:
    "Sales and customer experience team planning a CRM strategy",
  paragraphs: [
    "A CRM system helps businesses manage leads, customer communication, sales opportunities and follow-up activities in one organized platform. Without a structured system, important enquiries can be missed and sales teams may struggle to understand the status of each opportunity.",
    "A professional CRM setup should define clear sales stages, assign ownership, record customer interactions and automate reminders for follow-ups. This gives management better visibility while helping sales teams respond faster and more consistently.",
    "CRM performance should be reviewed through lead source reports, conversion rates, sales pipeline value and follow-up activity. These insights help businesses identify bottlenecks and improve the complete customer journey.",
  ],
  points: [
    "Centralize leads and customer information",
    "Create clear sales pipeline stages",
    "Automate reminders and follow-up activities",
    "Track calls, emails and customer interactions",
    "Measure lead quality and conversion performance",
  ],
},
];


function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [open, setOpen] = useState(false);
  const contentId = `blog-content-${post.slug}`;

  return (
    <motion.article
      id={post.slug}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 3) * 0.07, duration: 0.55 }}
      className="blog-card group flex min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-3xl border"
    >
      <div className="relative h-56 overflow-hidden sm:h-64">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full bg-gradient-orange px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-black shadow-lg">
          {post.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        <h2 className="blog-title mt-1 text-2xl font-semibold leading-tight tracking-[-0.025em] transition-colors duration-300 group-hover:text-[var(--brand-orange)]">
          {post.title}
        </h2>

        <p className="blog-body mt-3 text-sm leading-6 sm:text-[15px] sm:leading-7">
          {post.excerpt}
        </p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={contentId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="blog-expanded mt-5 border-t pt-5">
                <div className="space-y-4">
                  {post.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="blog-body text-sm leading-6 sm:text-[15px] sm:leading-7"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <h3 className="blog-title mt-6 text-base font-semibold">
                  Key implementation points
                </h3>

                <ul className="mt-3 space-y-2.5">
                  {post.points.map((point) => (
                    <li
                      key={point}
                      className="blog-body flex items-start gap-2.5 text-sm leading-6"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-orange)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="blog-note mt-6 rounded-2xl border p-4 text-sm leading-6">
                  Need a plan tailored to your operations? Our team can review your
                  current process and recommend the right implementation approach.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={contentId}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-orange px-4 py-2 text-xs font-bold text-black transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-orange)] focus-visible:ring-offset-2"
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


function FeaturedBlogCard({ post }: { post: BlogPost }) {
  const [open, setOpen] = useState(false);
  const contentId = `featured-blog-content-${post.slug}`;

  return (
    <motion.article
      id={post.slug}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.62 }}
      className="featured-blog scroll-mt-28 overflow-hidden rounded-[2rem] border"
    >
      <div className="grid lg:grid-cols-[1.08fr_.92fr]">
        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[390px] lg:min-h-full">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />

          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-6 sm:top-6">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
            Featured insight
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--brand-orange)]/12 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-orange)]">
            <BookOpen className="h-3.5 w-3.5" />
            {post.category}
          </div>

          <h2 className="blog-title mt-5 text-3xl font-semibold leading-[1.12] tracking-[-0.035em] sm:text-4xl">
            {post.title}
          </h2>

          <p className="blog-body mt-4 text-sm leading-7 sm:text-base">
            {post.excerpt}
          </p>

          <div className="mt-6 space-y-3">
            {post.points.slice(0, 3).map((point) => (
              <div
                key={point}
                className="blog-body flex items-start gap-3 text-sm leading-6"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-orange)]" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={contentId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="blog-expanded mt-7 border-t pt-6">
                  <div className="space-y-4">
                    {post.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="blog-body text-sm leading-7"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <h3 className="blog-title mt-6 text-base font-semibold">
                    Complete action checklist
                  </h3>

                  <ul className="mt-3 space-y-2.5">
                    {post.points.map((point) => (
                      <li
                        key={point}
                        className="blog-body flex items-start gap-2.5 text-sm leading-6"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-orange)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls={contentId}
            className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-orange px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            {open ? "Close guide" : "Read featured guide"}
            {open ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function Blogs() {
  return (
    <SiteLayout>
      <main className="blogs-page">
        <style>{`
          .blogs-page {
            --blogs-bg: #050505;
            --blogs-title: #ffffff;
            --blogs-body: rgba(255,255,255,.68);
            --blogs-muted: rgba(255,255,255,.48);
            --blogs-border: rgba(255,255,255,.11);
            --blogs-card: rgba(255,255,255,.035);
            --blogs-card-hover: rgba(255,255,255,.055);
            --blogs-note: rgba(255,255,255,.035);
            --blogs-control: rgba(255,255,255,.035);
            background: var(--blogs-bg);
            color: var(--blogs-title);
            font-family: inherit;
          }

          .cream-theme .blogs-page,
          .light .blogs-page,
          [data-theme="light"] .blogs-page {
            --blogs-bg: #e8e4da;
            --blogs-title: #171512;
            --blogs-body: #514c45;
            --blogs-muted: #746d63;
            --blogs-border: rgba(23,21,18,.14);
            --blogs-card: rgba(255,255,255,.48);
            --blogs-card-hover: rgba(255,255,255,.70);
            --blogs-note: rgba(255,255,255,.52);
            --blogs-control: rgba(255,255,255,.52);
          }
          .blog-title { color: var(--blogs-title); }
          .blog-body { color: var(--blogs-body); }
          .blog-muted { color: var(--blogs-muted); }

          .blog-card {
            border-color: var(--blogs-border);
            background: var(--blogs-card);
            box-shadow: 0 20px 52px rgba(0,0,0,.12);
            transition: border-color .3s ease, background .3s ease, transform .3s ease, box-shadow .3s ease;
          }

          .blog-card:hover {
            border-color: color-mix(in srgb, var(--brand-orange) 48%, transparent);
            background: var(--blogs-card-hover);
            box-shadow: 0 28px 70px rgba(0,0,0,.18);
            transform: translateY(-4px);
          }

          .blog-expanded { border-color: var(--blogs-border); }

          .blog-note {
            border-color: var(--blogs-border);
            background: var(--blogs-note);
            color: var(--blogs-body);
          }

          .featured-blog {
            border-color: var(--blogs-border);
            background: var(--blogs-card);
            box-shadow: 0 24px 70px rgba(0,0,0,.14);
          }

          .editorial-card {
            border-color: var(--blogs-border);
            background: var(--blogs-card);
          }
        `}</style>

        <PageHero
          eyebrow="Business Insights"
          title={
            <>
              Practical insights for smarter systems and{" "}
              <span className="text-gradient-orange">sustainable growth</span>
            </>
          }
          subtitle="Explore actionable guides on ERP, HRMS, digital marketing, SEO, reporting and connected business automation."
        >
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#latest-insights"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-orange px-6 py-3.5 font-semibold text-black glow-orange transition-transform duration-300 hover:scale-[1.03]"
            >
              Explore Insights
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-white/10 hover:text-[var(--brand-orange)]"
            >
              Contact Our Team
            </Link>
          </div>
        </PageHero>

        <section
          id="latest-insights"
          className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        >
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-orange)]/50 to-transparent" />
          <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-[var(--brand-orange)]/8 blur-[130px]" />

          <div className="container-x relative">
            <div className="mb-8 flex flex-col justify-between gap-5 md:mb-10 md:flex-row md:items-end">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)] sm:text-xs">
                  Featured Business Guide
                </div>
                <h2 className="blog-title mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                  Expert guidance built for real business decisions
                </h2>
              </div>

              <p className="blog-body max-w-xl text-sm leading-6 sm:text-[15px] sm:leading-7">
                Clear frameworks, implementation checklists and practical advice from
                ERP, HRMS, web and performance marketing specialists.
              </p>
            </div>

            <FeaturedBlogCard post={blogPosts[0]} />

            <div className="my-12 grid gap-4 sm:grid-cols-3 lg:my-16">
              {[
                {
                  title: "Specialist-led content",
                  text: "Insights focused on systems, people, technology and measurable growth.",
                },
                {
                  title: "Practical frameworks",
                  text: "Every guide includes clear steps that teams can use in real projects.",
                },
                {
                  title: "Business-first advice",
                  text: "Recommendations are connected to efficiency, reporting and long-term value.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="editorial-card rounded-2xl border p-5 sm:p-6"
                >
                 
                  <h3 className="blog-title mt-4 text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="blog-body mt-2 text-sm leading-6">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)] sm:text-xs">
                  Latest Insights
                </div>
                <h2 className="blog-title mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  More guides from our specialists
                </h2>
              </div>

           
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.slice(1).map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden pb-20 sm:pb-24 lg:pb-28">
          <div className="container-x">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.62 }}
              className="relative overflow-hidden rounded-3xl border border-[var(--blogs-border)] bg-[var(--blogs-card)] px-6 py-10 sm:px-10 sm:py-12 lg:px-14"
            >
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--brand-orange)]/18 blur-[95px]" />
              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-orange)]/55 to-transparent" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
                    <Mail className="h-4 w-4" />
                    Start a Conversation
                  </div>
                  <h2 className="blog-title mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                    Ready to improve your systems, reporting or digital growth?
                  </h2>
                  <p className="blog-body mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
                    Tell us what is slowing your business down. Business Genie
                    Consulting can help you plan the right ERP, HRMS, web or
                    marketing solution.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="btn-shine inline-flex w-fit items-center gap-2 rounded-full bg-gradient-orange px-6 py-3.5 font-semibold text-black transition hover:-translate-y-1"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}