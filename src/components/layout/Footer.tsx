import { Link } from "@tanstack/react-router";
import type { SVGProps } from "react";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { LOCATIONS } from "@/lib/site";

/*
  Social media brand icons ko lucide-react se import nahi kiya gaya,
  kyun ke lucide-react Facebook, Instagram aur LinkedIn brand icons
  provide nahi karta.

  Yeh inline SVG icons hain, is liye kisi extra package ki zaroorat nahi.
*/

type SocialIconProps = SVGProps<SVGSVGElement>;

function FacebookIcon({
  className,
  ...props
}: SocialIconProps) {
  return (
    <svg
      {...props}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13.5 21v-8h2.75l.41-3.2H13.5V7.76c0-.93.26-1.56 1.59-1.56h1.7V3.34A22.9 22.9 0 0 0 14.31 3c-2.44 0-4.11 1.49-4.11 4.23V9.8H7.44V13h2.76v8h3.3Z" />
    </svg>
  );
}

function LinkedinIcon({
  className,
  ...props
}: SocialIconProps) {
  return (
    <svg
      {...props}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5.34 3.5a1.84 1.84 0 1 1 0 3.68 1.84 1.84 0 0 1 0-3.68ZM3.75 8.5h3.18V20H3.75V8.5Zm5.12 0h3.05v1.57h.04c.42-.8 1.46-1.65 3.01-1.65 3.22 0 3.82 2.12 3.82 4.87V20h-3.18v-5.95c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.55-2.28 3.15V20H8.87V8.5Z" />
    </svg>
  );
}

function InstagramIcon({
  className,
  ...props
}: SocialIconProps) {
  return (
    <svg
      {...props}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="17.4"
        cy="6.6"
        r="1.15"
        fill="currentColor"
      />
    </svg>
  );
}

const sections = [
  {
    title: "Quick Links",
    items: [
      { l: "Home", to: "/" },
      { l: "ERP Solutions", to: "/erp-solutions" },
      { l: "Portfolio", to: "/portfolio" },
      { l: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      {
        l: "ERP Implementation",
        to: "/erp-solutions",
      },
      {
        l: "HR Solutions",
        to: "/HRMS",
      },
      {
        l: "Digital Marketing",
        to: "/digital-marketing",
      },
      {
        l: "SEO Services",
        to: "/seo",
      },
      {
        l: "Web Development",
        to: "/web-development",
      },
      {
        l: "UI/UX Design",
        to: "/ui-ux",
      },
      {
        l: "Business Automation",
        to: "/portfolio",
      },
    ],
  },
] as const;

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/businessgenieconsulting/",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/104830846/",
    icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
] as const;

export function Footer() {
  const footerEmail = "info@businessgenie.net";

  const footerNumbers = [
    "04238977959",
    "+923394050121",
  ];

  return (
    <footer className="site-footer relative mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-split" />

      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[var(--footer-glow-one)] blur-[120px]" />

      <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[var(--footer-glow-two)] blur-[120px]" />

      <div className="container-x relative pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Company Information */}
          <div>
            {/* Theme Logo Area */}
            <div className="-ml-2 md:-ml-4">
              <Link
                to="/"
                className="footer-logo-wrap relative block h-14 w-[220px] max-w-[220px]"
                aria-label="Business Genie Consulting"
              >
                {/* Logo 2: Black/original theme */}
                <img
                  src="/logo2.png"
                  alt="Business Genie Consulting"
                  className="footer-logo-dark absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300"
                />

                {/* Logo 3: Cream/off-white theme */}
                <img
                  src="/logo3.png"
                  alt="Business Genie Consulting"
                  className="footer-logo-cream absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300"
                />
              </Link>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--footer-muted)]">
              Business Genie Consulting helps businesses streamline
              operations, accelerate transformation, achieve sustainable
              growth through innovative technology and consulting solutions.
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex justify-start gap-3">
              {SOCIALS.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="footer-social-icon grid h-10 w-10 place-items-center rounded-full border border-[var(--footer-border)] bg-[var(--footer-social-bg)] text-[var(--footer-text)] transition-all hover:border-transparent hover:bg-[var(--brand-orange)] hover:text-black"
                  >
                    <SocialIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Navigation Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-5 font-semibold text-[var(--footer-heading)]">
                {section.title}
              </h4>

              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.l}>
                    <Link
                      to={item.to}
                      className="text-sm text-[var(--footer-muted)] transition-colors hover:text-[var(--brand-orange)]"
                    >
                      {item.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Global Presence */}
          <div>
            <h4 className="mb-5 font-semibold text-[var(--footer-heading)]">
              Global Presence
            </h4>

            <ul className="mb-6 space-y-3">
              {LOCATIONS.map((loc) => (
                <li
                  key={loc.country}
                  className="flex items-start gap-2 text-sm text-[var(--footer-muted)]"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-orange)]" />

                  <span>
                    <span className="text-[var(--footer-heading)]">
                      {loc.country}
                    </span>{" "}
                    — {loc.city}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact Information */}
            <div className="space-y-3">
              {footerNumbers.map((number) => (
                <a
                  key={number}
                  href={`tel:${number}`}
                  className="flex items-center gap-2 text-sm text-[var(--footer-text)] transition-colors hover:text-[var(--brand-orange)]"
                >
                  <Phone className="h-4 w-4" />

                  {number}
                </a>
              ))}

              <a
                href={`mailto:${footerEmail}`}
                className="flex items-center gap-2 text-sm text-[var(--footer-text)] transition-colors hover:text-[var(--brand-orange)]"
              >
                <Mail className="h-4 w-4" />

                {footerEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[var(--footer-border)] pt-6 text-xs text-[var(--footer-soft)] md:flex-row">
          <p>
            © {new Date().getFullYear()} Business Genie Consulting. All Rights
            Reserved. Designed &amp; Developed by Usman.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition-colors hover:text-[var(--brand-orange)]"
            >
              Terms &amp; Conditions
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[var(--brand-orange)]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}