import { Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Lucide Icons Safe Imports
import * as LucideIcons from "lucide-react";

const getIcon = (name: string, fallback: any) => {
  return (LucideIcons as any)[name] || fallback;
};

const Menu = getIcon("Menu", LucideIcons.Menu || (() => null));
const X = getIcon("X", LucideIcons.X || (() => null));
const ChevronDown = getIcon("ChevronDown", LucideIcons.ChevronDown || (() => null));
const Database = getIcon("Database", LucideIcons.Database || (() => null));
const Megaphone = getIcon("Megaphone", LucideIcons.Megaphone || (() => null));
const Search = getIcon("Search", LucideIcons.Search || (() => null));
const Code2 = getIcon("Code2", LucideIcons.Code || (() => null));
const Palette = getIcon("Palette", LucideIcons.Paintbrush || (() => null));
const Workflow = getIcon("Workflow", LucideIcons.GitBranch || (() => null));
const Sun = getIcon("Sun", LucideIcons.Sun || (() => null));
const Moon = getIcon("Moon", LucideIcons.Moon || (() => null));
const Building2 = getIcon("Building2", LucideIcons.Building || (() => null));
const ReceiptText = getIcon("ReceiptText", LucideIcons.FileText || (() => null));
const BarChart3 = getIcon("BarChart3", LucideIcons.BarChart || (() => null));
const UsersRound = getIcon("UsersRound", LucideIcons.Users || (() => null));
const CloudCog = getIcon("CloudCog", LucideIcons.Cloud || (() => null));
const UserCheck = getIcon("UserCheck", LucideIcons.User || (() => null));
const FileText = getIcon("FileText", LucideIcons.FileText || (() => null));

// React Icons Import (Uncommented and Safe)
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

import { SITE } from "@/lib/site";

const THEME_STORAGE_KEY = "business-genie-theme-v2";

// Google favicon service + official product domains.
// This avoids unreliable copied image URLs and keeps each brand logo tied
// to the product's official website.
const getOfficialLogo = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;

const MAIN_NAV = [
  { label: "Home", to: "/" },
  { label: "Industries", to: "/industries" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact", to: "/contact" },
] as const;

const ERP_SOLUTIONS = [
{
  icon: BarChart3,
  logo: "images2.png",
  title: "Microsoft Dynamics 365",
  desc: "Business Central",
  to: "/microsoft-dynamics-365",
  iconBox:
    "border-[#00A6B2]/35 bg-[#00A6B2]/12 text-[#00A6B2] shadow-[0_0_18px_rgba(0,166,178,0.12)]",
  titleHover: "group-hover:text-[#00A6B2]",
},
 {
  icon: Building2,
  logo:
    "/sap.png",
  title: "SAP Business One",
  desc: "ERP for finance, sales and inventory.",
  to: "/sap-business-one",
  iconBox:
    "border-[#0A6ED1]/35 bg-[#0A6ED1]/12 text-[#0A6ED1] shadow-[0_0_18px_rgba(10,110,209,0.12)]",
  titleHover: "group-hover:text-[#0A6ED1]",
},
  {
    icon: Database,
    logo: getOfficialLogo("odoo.com"),
    title: "Odoo",
    desc: "All-in-one ERP for business operations.",
    to: "/odoo",
    iconBox: "border-[#875A7B]/35 bg-[#875A7B]/12 text-[#875A7B] shadow-[0_0_18px_rgba(135,90,123,0.14)]",
    titleHover: "group-hover:text-[#875A7B]",
  },
  {
    icon: ReceiptText,
    logo:"/QB logo.jpg",
    title: "QuickBooks",
    desc: "Simple accounting and invoicing software.",
    to: "/quickbooks",
    iconBox: "border-[#2CA01C]/35 bg-[#2CA01C]/12 text-[#2CA01C] shadow-[0_0_18px_rgba(44,160,28,0.12)]",
    titleHover: "group-hover:text-[#2CA01C]",
  },
 
] as const;

const BUSINESS_SOLUTIONS = [
  
   {
    icon: CloudCog,
    logo: "Eccountant_Cloud_ERP-removebg-preview (1).png",
    title: "Eccountant Cloud ERP",
    desc: "Cloud ERP for accounts and inventory.",
    to: "/eccountant-cloud-erp",
    iconBox: "border-[#4B88D8]/35 bg-[#4B88D8]/12 text-[#4B88D8] shadow-[0_0_18px_rgba(75,136,216,0.12)]",
    titleHover: "group-hover:text-[#4B88D8]",
  },
  {
    icon: UsersRound,
    logo: getOfficialLogo("primehrms.com"),
    title: "Prime HRMS",
    desc: "HR, payroll and attendance management.",
    to: "/prime-hrms",
    iconBox: "border-[#2F75D6]/35 bg-[#2F75D6]/12 text-[#2F75D6] shadow-[0_0_18px_rgba(47,117,214,0.12)]",
    titleHover: "group-hover:text-[#2F75D6]",
  },
  {
    icon: UserCheck,
    logo: getOfficialLogo("web.hr"),
    title: "WebHR",
    desc: "HR software for teams and employees.",
    to: "/webhr",
    iconBox: "border-[#1D4ED8]/35 bg-[#1D4ED8]/12 text-[#1D4ED8] shadow-[0_0_18px_rgba(29,78,216,0.12)]",
    titleHover: "group-hover:text-[#1D4ED8]",
  },
  {
    icon: FileText,
    logo: getOfficialLogo("digidoccloud.com"),
    title: "DIGIDOC",
    desc: "Digital document and workflow system.",
    to: "/digidoc",
    iconBox: "border-[#35B6B2]/35 bg-[#35B6B2]/12 text-[#35B6B2] shadow-[0_0_18px_rgba(53,182,178,0.12)]",
    titleHover: "group-hover:text-[#35B6B2]",
  },
 ] as const;

const SERVICES = [
  {
    icon: Database,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2L33C-HWOuAb9pxW0-YpPFaP09ZSbCWVeW-yXK7miQ&s=10",
    title: "ERP Implementation",
    desc: "Accounts, inventory, HR, sales & production.",
    to: "/erp-solutions",
    iconBox: "border-[#875A7B]/35 bg-[#875A7B]/12 text-[#875A7B] shadow-[0_0_18px_rgba(135,90,123,0.14)]",
  },
  {
    icon: Workflow,
    logo: getOfficialLogo("web.hr"),
    title: "HRMS",
    desc: "Employee onboarding, billing and operations.",
    to: "/HRMS",
    iconBox: "border-[#1D4ED8]/35 bg-[#1D4ED8]/12 text-[#1D4ED8] shadow-[0_0_18px_rgba(29,78,216,0.12)]",
  },
  {
    icon: Megaphone,
    logo: "data:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreuAwjcCHMTp9FYoDScAcysNbxYYMBV5x14lWATG53g&s=10",
    title: "Digital Marketing",
    desc: "Performance campaigns & lead generation.",
    to: "/digital-marketing",
    iconBox: "border-[#4285F4]/35 bg-[#4285F4]/12 text-[#4285F4] shadow-[0_0_18px_rgba(66,133,244,0.12)]",
  },
  {
    icon: Code2,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fqKk7Vl4SUNQV5AVQtDSLcuQAUqlPHpvL_XaKUqPpw&s=10",
    title: "Web Development",
    desc: "Modern websites, platforms & CMS.",
    to: "/web-development",
    iconBox: "border-[#21759B]/35 bg-[#21759B]/12 text-[#21759B] shadow-[0_0_18px_rgba(33,117,155,0.12)]",
  },
  {
    icon: Search,
    logo: getOfficialLogo("search.google.com"),
    title: "SEO Services",
    desc: "Technical, on-page & local SEO growth.",
    to: "/seo",
    iconBox: "border-[#34A853]/35 bg-[#34A853]/12 text-[#34A853] shadow-[0_0_18px_rgba(52,168,83,0.12)]",
  },
  {
    icon: Palette,
    logo: getOfficialLogo("figma.com"),
    title: "UI / UX Design",
    desc: "Conversion-focused, premium interfaces.",
    to: "/ui-ux",
    iconBox: "border-[#A259FF]/35 bg-[#A259FF]/12 text-[#A259FF] shadow-[0_0_18px_rgba(162,89,255,0.12)]",
  },
] as const;

// SOCIALS array active kar diya hai taake loop error na de
const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/businessgenieconsulting/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/businessgenieconsulting/", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/104830846/", icon: Linkedin },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [mSolOpen, setMSolOpen] = useState(false);
  const [mSvcOpen, setMSvcOpen] = useState(false);
  const [creamTheme, setCreamTheme] = useState(true);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const shouldUseCreamTheme = savedTheme !== "dark";
    setCreamTheme(shouldUseCreamTheme);
    document.body.classList.toggle("cream-theme", shouldUseCreamTheme);
    document.documentElement.classList.toggle("cream-theme", shouldUseCreamTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 24); };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  useEffect(() => {
    if (!open) {
      setMSolOpen(false);
      setMSvcOpen(false);
    }
  }, [open]);

  const handleThemeToggle = () => {
    setCreamTheme((currentTheme) => {
      const nextTheme = !currentTheme;
      document.body.classList.toggle("cream-theme", nextTheme);
      document.documentElement.classList.toggle("cream-theme", nextTheme);
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme ? "cream" : "dark");
      return nextTheme;
    });
  };

  const closeMobileMenu = () => {
    setOpen(false);
    setMSolOpen(false);
    setMSvcOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--header-border)] bg-[var(--header-bg-scrolled)] shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl"
          : "bg-[var(--header-bg)] backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-[74px] items-center justify-between py-2">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={closeMobileMenu}>
          <div className="header-logo-wrap relative grid place-items-center overflow-hidden bg-transparent">
            <img
              src={SITE.logo2}
              alt={`${SITE.name} dark logo`}
              className={`header-logo-img header-logo-dark absolute inset-0 transition-opacity duration-300 ${creamTheme ? "opacity-0" : "opacity-100"}`}
            />
            <img
              src="/logo3.png"
              alt={`${SITE.name} light logo`}
              className={`header-logo-img header-logo-cream absolute inset-0 transition-opacity duration-300 ${creamTheme ? "opacity-100" : "opacity-0"}`}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {MAIN_NAV.slice(0, 2).map((item) => (
            <NavLink key={item.to} {...item} />
          ))}

          {/* Solutions Dropdown */}
          <div className="relative" onMouseEnter={() => setSolOpen(true)} onMouseLeave={() => setSolOpen(false)}>
            <button
              type="button"
              aria-expanded={solOpen}
              aria-haspopup="menu"
              className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-[var(--nav-text)] transition-colors hover:text-[var(--brand-orange)]"
              onClick={() => setSolOpen((current) => !current)}
            >
              Solutions
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${solOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {solOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-[var(--header-border)] bg-[var(--dropdown-bg)] p-3 shadow-2xl backdrop-blur-xl">
                    <div className="grid gap-1">
                      {ERP_SOLUTIONS.map((solution, index) => (
                        <motion.div key={solution.to} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }}>
                          <SolutionDropdownItem solution={solution} onClick={() => setSolOpen(false)} />
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid gap-1">
                      {BUSINESS_SOLUTIONS.map((solution, index) => (
                        <motion.div key={solution.to} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }}>
                          <SolutionDropdownItem solution={solution} onClick={() => setSolOpen(false)} />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setSvcOpen(true)} onMouseLeave={() => setSvcOpen(false)}>
            <button
              type="button"
              aria-expanded={svcOpen}
              aria-haspopup="menu"
              className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-[var(--nav-text)] transition-colors hover:text-[var(--brand-orange)]"
              onClick={() => setSvcOpen((current) => !current)}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${svcOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {svcOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                >
                  <div className="grid grid-cols-2 gap-1 rounded-2xl border border-[var(--header-border)] bg-[var(--dropdown-bg)] p-3 shadow-2xl backdrop-blur-xl">
                    {SERVICES.map((service, index) => (
                      <motion.div key={service.to} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }}>
                        <Link to={service.to} onClick={() => setSvcOpen(false)} className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--nav-hover-bg)]">
                          <ServiceBrandMark service={service} size="desktop" />
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-[var(--dropdown-text)] transition-colors group-hover:text-[var(--brand-orange)]">{service.title}</div>
                            <div className="mt-0.5 text-xs leading-relaxed text-[var(--dropdown-muted)]">{service.desc}</div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {MAIN_NAV.slice(2).map((item) => (
            <NavLink key={item.to} {...item} />
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle creamTheme={creamTheme} onToggle={handleThemeToggle} />

          <div className="hidden items-center gap-2 sm:flex">
            {SOCIALS.map((social, index) => {
              const SocialIcon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.05, duration: 0.35 }}
                  whileHover={{ y: -3, scale: 1.08 }}
                  className="group grid h-9 w-9 place-items-center rounded-full border border-[var(--header-border)] bg-[var(--social-bg)] text-[var(--brand-orange)] transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-[var(--social-hover-bg)]"
                >
                  <SocialIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid h-9 w-9 place-items-center rounded-md border border-[var(--header-border)] bg-[var(--social-bg)] text-[var(--nav-text)] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--header-border)] bg-[var(--mobile-menu-bg)] backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-0.5 py-3">
              {MAIN_NAV.slice(0, 2).map((item) => (
                <Link key={item.to} to={item.to} onClick={closeMobileMenu} className="rounded-md px-3 py-2.5 text-sm text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)]">
                  {item.label}
                </Link>
              ))}

              {/* Mobile Solutions Trigger */}
              <button
                type="button"
                onClick={() => { setMSolOpen((current) => !current); setMSvcOpen(false); }}
                className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)]"
                aria-expanded={mSolOpen}
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mSolOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {mSolOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pl-3">
                    <div className="py-1">
                      {ERP_SOLUTIONS.map((solution) => (
                        <MobileSolutionItem key={solution.to} solution={solution} onClick={closeMobileMenu} />
                      ))}
                    </div>
                    <div className="py-1">
                      {BUSINESS_SOLUTIONS.map((solution) => (
                        <MobileSolutionItem key={solution.to} solution={solution} onClick={closeMobileMenu} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Services Trigger */}
              <button
                type="button"
                onClick={() => { setMSvcOpen((current) => !current); setMSolOpen(false); }}
                className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)]"
                aria-expanded={mSvcOpen}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mSvcOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {mSvcOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden pl-3">
                    {SERVICES.map((service) => (
                      <Link key={service.to} to={service.to} onClick={closeMobileMenu} className="flex items-center gap-2.5 px-3 py-2 text-sm text-[var(--nav-muted)] hover:text-[var(--brand-orange)]">
                        <ServiceBrandMark service={service} size="mobile" />
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {MAIN_NAV.slice(2).map((item) => (
                <Link key={item.to} to={item.to} onClick={closeMobileMenu} className="rounded-md px-3 py-2.5 text-sm text-[var(--nav-text)] hover:bg-[var(--nav-hover-bg)]">
                  {item.label}
                </Link>
              ))}

              {/* Mobile Socials Block */}
              <div className="mt-3 flex items-center justify-center gap-3 border-t border-[var(--header-border)] pt-4">
                {SOCIALS.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-[var(--header-border)] bg-[var(--social-bg)] text-[var(--brand-orange)] transition-all duration-300 hover:border-[var(--brand-orange)]/60 hover:bg-[var(--social-hover-bg)]"
                    >
                      <SocialIcon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

type SolutionItem = (typeof ERP_SOLUTIONS)[number] | (typeof BUSINESS_SOLUTIONS)[number];
type ServiceItem = (typeof SERVICES)[number];

function SolutionDropdownItem({ solution, onClick }: { solution: SolutionItem; onClick: () => void; }) {
  return (
    <Link to={solution.to} onClick={onClick} className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--nav-hover-bg)]">
      <BrandMark solution={solution} size="desktop" />
      <div className="min-w-0">
        <div className={`text-sm font-semibold text-[var(--dropdown-text)] transition-colors ${solution.titleHover}`}>{solution.title}</div>
        <div className="mt-0.5 text-xs leading-relaxed text-[var(--dropdown-muted)]">{solution.desc}</div>
      </div>
    </Link>
  );
}

function MobileSolutionItem({ solution, onClick }: { solution: SolutionItem; onClick: () => void; }) {
  return (
    <Link to={solution.to} onClick={onClick} className="flex items-center gap-2.5 px-3 py-2 text-sm text-[var(--nav-muted)] hover:text-[var(--brand-orange)]">
      <BrandMark solution={solution} size="mobile" />
      {solution.title}
    </Link>
  );
}

function BrandMark({
  solution,
  size,
}: {
  solution: SolutionItem;
  size: "desktop" | "mobile";
}) {
  const [logoFailed, setLogoFailed] = useState(false);
  const Icon = solution.icon;
  const isDesktop = size === "desktop";

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden border bg-white transition-transform duration-300 ${
        isDesktop
          ? "h-10 w-10 rounded-xl p-1.5 group-hover:scale-110"
          : "h-8 w-8 rounded-lg p-1"
      } ${solution.iconBox}`}
    >
      {!logoFailed ? (
        <img
          src={solution.logo}
          alt={`${solution.title} official logo`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setLogoFailed(true)}
          className="h-full w-full object-contain"
        />
      ) : (
        <Icon className={isDesktop ? "h-[18px] w-[18px]" : "h-3.5 w-3.5"} />
      )}
    </span>
  );
}

function ServiceBrandMark({
  service,
  size,
}: {
  service: ServiceItem;
  size: "desktop" | "mobile";
}) {
  const [logoFailed, setLogoFailed] = useState(false);
  const Icon = service.icon;
  const isDesktop = size === "desktop";

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden border bg-white transition-transform duration-300 ${
        isDesktop
          ? "h-10 w-10 rounded-xl p-1.5 group-hover:scale-110"
          : "h-8 w-8 rounded-lg p-1"
      } ${service.iconBox}`}
    >
      {!logoFailed ? (
        <img
          src={service.logo}
          alt={`${service.title} service logo`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setLogoFailed(true)}
          className="h-full w-full object-contain"
        />
      ) : (
        <Icon className={isDesktop ? "h-[18px] w-[18px]" : "h-3.5 w-3.5"} />
      )}
    </span>
  );
}

function ThemeToggle({ creamTheme, onToggle }: { creamTheme: boolean; onToggle: () => void; }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={creamTheme ? "Switch to dark theme" : "Switch to light theme"}
      aria-pressed={creamTheme}
      className={`relative h-9 w-[68px] shrink-0 rounded-full border transition-all duration-300 ${creamTheme ? "border-[var(--brand-orange)] bg-white" : "border-white/10 bg-white/[0.04]"}`}
    >
      <span className={`absolute left-1 top-1 grid h-7 w-7 place-items-center rounded-full bg-[var(--brand-orange)] text-black shadow-lg transition-transform duration-300 ${creamTheme ? "translate-x-8" : "translate-x-0"}`}>
        {creamTheme ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}

function NavLink({ label, to }: { label: string; to: string; }) {
  return (
    <Link to={to} className="group relative px-3 py-2 text-[13px] font-medium text-[var(--nav-text)] transition-colors hover:text-[var(--brand-orange)]" activeProps={{ className: "text-[var(--brand-orange)]" }}>
      {label}
      <span className="bg-gradient-orange absolute -bottom-0.5 left-3 right-3 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}