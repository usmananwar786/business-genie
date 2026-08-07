// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import {
//   useEffect,
//   useRef,
//   useState,
//   type ChangeEventHandler,
//   type FocusEventHandler,
//   type FormEvent,
// } from "react";
// import { useFormik } from "formik";
// import {
//   ArrowRight,
//   Mail,
//   MapPin,
//   Phone,
//   CheckCircle2,
//   Sparkles,
//   type LucideIcon,
// } from "lucide-react";
// import { SiteLayout } from "@/components/layout/SiteLayout";
// import { PageHero, Section } from "@/components/layout/Section";
// import { SITE } from "@/lib/site";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — Business Genie Consulting" },
//       {
//         name: "description",
//         content:
//           "Contact Business Genie Consulting for ERP implementation, HR automation, digital marketing, SEO, web development, UI/UX design and business automation services.",
//       },
//     ],
//   }),
//   component: Contact,
// });

// type ContactFormValues = {
//   Name: string;
//   CompanyName: string;
//   phone: string;
//   email: string;
//   service: string;
//   message: string;
// };

// const services = [
//   "ERP Implementation",
//   "HR Automation",
//   "Digital Marketing",
//   "Web Development",
//   "SEO Services",
//   "UI/UX Design",
//   "Other",
// ];

// const officeAddress = "968 Q Block, Johar Town, Lahore, Pakistan";
// const contactEmail = "info@businessgenie.net";
// const whatsappNumber = "+923394050121";
// const whatsappCleanNumber = whatsappNumber.replace(/\D/g, "");
// const whatsappUrl = SITE.whatsappUrl?.includes(whatsappCleanNumber)
//   ? SITE.whatsappUrl
//   : `https://wa.me/${whatsappCleanNumber}`;

// const formSubmitEndpoint = `https://formsubmit.co/${contactEmail}`;

// function Contact() {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   const [sent, setSent] = useState(false);
//   const [isSending, setIsSending] = useState(false);

//   const successRedirectUrl =
//     typeof window !== "undefined"
//       ? `${window.location.origin}/contact?sent=1`
//       : "";

//   const currentPageUrl =
//     typeof window !== "undefined" ? window.location.href : "";

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const params = new URLSearchParams(window.location.search);

//     if (params.get("sent") === "1") {
//       setSent(true);
//       window.history.replaceState({}, "", "/contact");
//     }
//   }, []);

//   const formik = useFormik<ContactFormValues>({
//     initialValues: {
//       Name: "",
//       CompanyName: "",
//       phone: "",
//       email: "",
//       service: "",
//       message: "",
//     },

//     validate: (values) => {
//       const errors: Partial<ContactFormValues> = {};

//       if (!values.Name.trim()) {
//         errors.Name = "Name is required";
//       }

//       if (!values.CompanyName.trim()) {
//         errors.CompanyName = "Company is required";
//       }

//       if (!values.phone.trim()) {
//         errors.phone = "Phone is required";
//       }

//       if (!values.email.trim()) {
//         errors.email = "Email is required";
//       } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
//         errors.email = "Enter a valid Email";
//       }

//       if (!values.service) {
//         errors.service = "Please select a service";
//       }

//       if (!values.message.trim()) {
//         errors.message = "Message is required";
//       }

//       return errors;
//     },

//     onSubmit: () => {
//       // Native FormSubmit submission is handled in handleFormSubmit.
//     },
//   });

//   const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsSending(true);

//     const errors = await formik.validateForm();

//     formik.setTouched({
//       Name: true,
//       CompanyName: true,
//       phone: true,
//       email: true,
//       service: true,
//       message: true,
//     });

//     if (Object.keys(errors).length > 0) {
//       setIsSending(false);
//       return;
//     }

//     formRef.current?.submit();
//   };

//   return (
//     <SiteLayout>
//       <PageHero
//         eyebrow="Contact Us"
//         title={
//           <>
//             Let’s discuss your{" "}
//             <span className="text-gradient-orange">business growth</span>
//           </>
//         }
//         subtitle="Share your requirements with our team. We’ll guide you with the right ERP, HR automation, digital marketing, SEO, website, UI/UX or business automation solution."
//       />

//       <Section className="!py-10 sm:!py-12">
//         <div className="container-x">
//           <motion.div
//             initial={{ opacity: 0, y: 26 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.65, ease: "easeOut" }}
//             className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
//           >
//             <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[var(--brand-orange)]/20 blur-[110px]" />
//             <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[var(--brand-teal)]/10 blur-[110px]" />

//             <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
//               <div>
//                 <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/70">
//                   <Sparkles className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
//                   Business Genie Consulting
//                 </div>

//                 <h2 className="max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white">
//                   Build smarter systems, stronger marketing and better business
//                   operations with one professional team.
//                 </h2>

//                 <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/65">
//                   Tell us what you need. Our team will review your message,
//                   understand your business requirement and guide you with the
//                   right next step.
//                 </p>
//               </div>

//               <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
//                 {[
//                   "Solution-focused consulting",
//                   "Clear project scope",
//                   "Practical implementation plan",
//                 ].map((item) => (
//                   <motion.div
//                     key={item}
//                     initial={{ opacity: 0, x: 16 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.45 }}
//                     whileHover={{ x: 5 }}
//                     className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/75"
//                   >
//                     <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--brand-orange)]" />
//                     {item}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Section>

//       <Section className="!pt-4">
//         <div className="container-x grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
//           <motion.div
//             initial={{ opacity: 0, x: -28 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.65, ease: "easeOut" }}
//             className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
//           >
//             <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--brand-orange)]/15 blur-[110px]" />
//             <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-orange)]/50 to-transparent" />

//             <div className="relative">
//               <h3 className="text-2xl sm:text-3xl font-semibold text-white">
//                 Send us a message
//               </h3>

//               <p className="mt-2 text-sm text-white/55">
//                 Share your requirements and our team will guide you with the
//                 right solution.
//               </p>

//               {sent ? (
//                 <motion.div
//                   initial={{ opacity: 0, y: 18 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="py-16 text-center"
//                 >
//                   <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-gradient-orange text-black">
//                     <CheckCircle2 className="h-8 w-8" />
//                   </div>

//                   <div className="text-2xl font-bold text-gradient-orange">
//                     Message sent successfully
//                   </div>

//                   <p className="mt-3 text-white/65">
//                     Thank you. Our team will contact you shortly.
//                   </p>

//                   <button
//                     type="button"
//                     onClick={() => setSent(false)}
//                     className="mt-6 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/70 transition hover:border-[var(--brand-orange)]/50 hover:text-[var(--brand-orange)]"
//                   >
//                     Send another message
//                   </button>
//                 </motion.div>
//               ) : (
//                 <form
//                   ref={formRef}
//                   action={formSubmitEndpoint}
//                   method="POST"
//                   onSubmit={handleFormSubmit}
//                   className="mt-7 grid gap-4 sm:grid-cols-2"
//                 >
//                   <input
//                     type="hidden"
//                     name="_subject"
//                     value="New Contact Form Message - Business Genie Consulting"
//                   />

//                   <input type="hidden" name="_template" value="table" />

//                   <input type="hidden" name="_captcha" value="false" />

//                   <input
//                     type="hidden"
//                     name="_next"
//                     value={successRedirectUrl}
//                   />

//                   <input type="hidden" name="_url" value={currentPageUrl} />

//                   <input
//                     type="hidden"
//                     name="_autoresponse"
//                     value="Thank you for contacting Business Genie Consulting. Our team has received your message and will contact you shortly."
//                   />

//                   <input
//                     type="hidden"
//                     name="_replyto"
//                     value={formik.values.email}
//                   />

//                   <Field
//                     label=" Name"
//                     name=" Name"
//                     value={formik.values.Name}
//                     onChange={(event) =>
//                       formik.setFieldValue("Name", event.target.value)
//                     }
//                     onBlur={() => formik.setFieldTouched("Name", true)}
//                     error={
//                       formik.touched.Name
//                         ? formik.errors.Name
//                         : ""
//                     }
//                     required
//                   />

//                   <Field
//                     label="Company"
//                     name="Company"
//                     value={formik.values.CompanyName}
//                     onChange={(event) =>
//                       formik.setFieldValue("CompanyName", event.target.value)
//                     }
//                     onBlur={() => formik.setFieldTouched("CompanyName", true)}
//                     error={
//                       formik.touched.CompanyName
//                         ? formik.errors.CompanyName
//                         : ""
//                     }
//                     required
//                   />

//                   <Field
//                     label="Phone"
//                     name="Phone"
//                     type="tel"
//                     value={formik.values.phone}
//                     onChange={(event) =>
//                       formik.setFieldValue("phone", event.target.value)
//                     }
//                     onBlur={() => formik.setFieldTouched("phone", true)}
//                     error={formik.touched.phone ? formik.errors.phone : ""}
//                     required
//                   />

//                   <Field
//                     label="Email"
//                     name="Email"
//                     type="email"
//                     value={formik.values.email}
//                     onChange={(event) =>
//                       formik.setFieldValue("email", event.target.value)
//                     }
//                     onBlur={() => formik.setFieldTouched("email", true)}
//                     error={formik.touched.email ? formik.errors.email : ""}
//                     required
//                   />

//                   <div className="sm:col-span-2">
//                     <Select
//                       label="Required Service 
// "
//                       name="Service"
//                       options={services}
//                       value={formik.values.service}
//                       onChange={(event) =>
//                         formik.setFieldValue("service", event.target.value)
//                       }
//                       onBlur={() => formik.setFieldTouched("service", true)}
//                       error={
//                         formik.touched.service ? formik.errors.service : ""
//                       }
//                       required
//                     />
//                   </div>

//                   <div className="sm:col-span-2">
//                     <label className="mb-1.5 block text-xs text-white/65">
//                       Message{" "}
//                       <span className="text-[var(--brand-orange)]">*</span>
//                     </label>

//                     <textarea
//                       name="Message"
//                       required
//                       rows={6}
//                       value={formik.values.message}
//                       onChange={(event) =>
//                         formik.setFieldValue("message", event.target.value)
//                       }
//                       onBlur={() => formik.setFieldTouched("message", true)}
//                       placeholder="Tell us about your business requirement..."
//                       className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[var(--brand-orange)]"
//                     />

//                     {formik.touched.message && formik.errors.message && (
//                       <p className="mt-1.5 text-xs text-red-400">
//                         {formik.errors.message}
//                       </p>
//                     )}
//                   </div>

//                   <div className="sm:col-span-2">
//                     <button
//                       type="submit"
//                       disabled={isSending}
//                       className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-orange px-7 py-3.5 font-semibold text-black glow-orange transition-transform duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
//                     >
//                       {isSending ? "Sending..." : "Submit Message"}
//                       <ArrowRight className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 28 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.65, ease: "easeOut" }}
//             className="space-y-4"
//           >
//             <ContactCard
//               icon={Mail}
//               title="Email Us"
//               value={contactEmail}
//               href={`mailto:${contactEmail}`}
//             />

//             <ContactCard
//               icon={Phone}
//               title="WhatsApp"
//               value={whatsappNumber}
//               href={whatsappUrl}
//               accent
//             />

//             <ContactCard
//               icon={MapPin}
//               title="Office Location"
//               value={officeAddress}
//               href="https://www.google.com/maps/search/?api=1&query=968%20Q%20Block%20Johar%20Town%20Lahore%20Pakistan"
//             />
//           </motion.div>
//         </div>
//       </Section>

//       <Section className="!pt-0 !pb-28">
//         <div className="container-x">
//           <motion.div
//             initial={{ opacity: 0, y: 28 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.65, ease: "easeOut" }}
//             className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-4 sm:p-5 backdrop-blur-xl"
//           >
//             <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--brand-orange)]/15 blur-[110px]" />

//             <div className="relative mb-5 flex flex-col gap-3 px-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <div className="text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
//                   Find Us
//                 </div>

//                 <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
//                   Visit our Lahore office
//                 </h3>

//                 <p className="mt-2 text-sm text-white/60">
//                   968 Q Block, Johar Town, Lahore, Pakistan
//                 </p>
//               </div>

//               <a
//                 href="https://www.google.com/maps/search/?api=1&query=968%20Q%20Block%20Johar%20Town%20Lahore%20Pakistan"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/75 transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:text-[var(--brand-orange)]"
//               >
//                 Open in Google Maps
//                 <ArrowRight className="h-4 w-4" />
//               </a>
//             </div>

//             <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white">
//               <iframe
//                 title="Business Genie Consulting Location"
//                 src="https://www.google.com/maps?q=968%20Q%20Block%20Johar%20Town%20Lahore%20Pakistan&output=embed"
//                 className="h-[320px] w-full border-0 sm:h-[420px] lg:h-[500px]"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </Section>
//     </SiteLayout>
//   );
// }

// function Field({
//   label,
//   name,
//   type = "text",
//   value,
//   onChange,
//   onBlur,
//   error,
//   required,
// }: {
//   label: string;
//   name: string;
//   type?: string;
//   value: string;
//   onChange: ChangeEventHandler<HTMLInputElement>;
//   onBlur: FocusEventHandler<HTMLInputElement>;
//   error?: string;
//   required?: boolean;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-xs text-white/65">
//         {label}
//         {required && <span className="text-[var(--brand-orange)]"> *</span>}
//       </label>

//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         required={required}
//         autoComplete="off"
//         className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[var(--brand-orange)]"
//       />

//       {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
//     </div>
//   );
// }

// function Select({
//   label,
//   name,
//   options,
//   value,
//   onChange,
//   onBlur,
//   error,
//   required,
// }: {
//   label: string;
//   name: string;
//   options: string[];
//   value: string;
//   onChange: ChangeEventHandler<HTMLSelectElement>;
//   onBlur: FocusEventHandler<HTMLSelectElement>;
//   error?: string;
//   required?: boolean;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block text-xs text-white/65">
//         {label}
//         {required && <span className="text-[var(--brand-orange)]"> *</span>}
//       </label>

//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         required={required}
//         className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--brand-orange)]"
//       >
//         <option value="" disabled className="bg-[#0a0a0a]">
//           Select service
//         </option>

//         {options.map((option) => (
//           <option key={option} value={option} className="bg-[#0a0a0a]">
//             {option}
//           </option>
//         ))}
//       </select>

//       {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
//     </div>
//   );
// }

// function ContactCard({
//   icon: Icon,
//   title,
//   value,
//   href,
//   accent,
// }: {
//   icon: LucideIcon;
//   title: string;
//   value: string;
//   href: string;
//   accent?: boolean;
// }) {
//   return (
//     <a
//       href={href}
//       target={href.startsWith("http") ? "_blank" : undefined}
//       rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
//       className={`group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-orange)]/50 ${
//         accent
//           ? "border-[var(--brand-orange)]/25 bg-[var(--brand-orange)]/5"
//           : ""
//       }`}
//     >
//       <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--brand-orange)]/0 blur-[80px] transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/15" />

//       <div className="relative flex items-center gap-4">
//         <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--brand-orange)]/25 bg-[var(--brand-orange)]/10 text-[var(--brand-orange)]">
//           <Icon className="h-5 w-5" />
//         </div>

//         <div className="min-w-0">
//           <div className="text-xs uppercase tracking-[0.18em] text-white/55">
//             {title}
//           </div>

//           <div className="mt-1 text-sm font-medium leading-relaxed text-white break-words">
//             {value}
//           </div>
//         </div>
//       </div>
//     </a>
//   );
// }





import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  useEffect,
  useState,
  type ChangeEventHandler,
  type FocusEventHandler,
  type FormEvent,
} from "react";
import { useFormik } from "formik";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Section } from "@/components/layout/Section";
import { SITE } from "@/lib/site";
import contactHeroDark from "@/assets/contact-hero-dark.png";
import contactHeroLight from "@/assets/contact-hero-light.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Business Genie Consulting" },
      {
        name: "description",
        content:
          "Contact Business Genie Consulting for ERP implementation, HR automation, digital marketing, SEO, web development, UI/UX design and business automation services.",
      },
    ],
  }),
  component: Contact,
});

type ContactFormValues = {
  Name: string;
  CompanyName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const services = [
  "ERP Implementation",
  "HR Automation",
  "Digital Marketing",
  "Web Development",
  "SEO Services",
  "UI/UX Design",
  "Other",
];

const officeAddress = "968 Q Block, Johar Town, Lahore, Pakistan";
const contactEmail = "info@businessgenie.net";
const whatsappNumber = "+923394050121";
const whatsappCleanNumber = whatsappNumber.replace(/\D/g, "");
const whatsappUrl = SITE.whatsappUrl?.includes(whatsappCleanNumber)
  ? SITE.whatsappUrl
  : `https://wa.me/${whatsappCleanNumber}`;

const formSubmitAjaxEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;


function useCreamTheme() {
  const [isCreamTheme, setIsCreamTheme] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const updateTheme = () => {
      setIsCreamTheme(document.body.classList.contains("cream-theme"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isCreamTheme;
}

function Contact() {
  const isCreamTheme = useCreamTheme();
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      Name: "",
      CompanyName: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },

    validate: (values) => {
      const errors: Partial<ContactFormValues> = {};

      if (!values.Name.trim()) {
        errors.Name = "Name is required";
      }

      if (!values.CompanyName.trim()) {
        errors.CompanyName = "Company is required";
      }

      if (!values.phone.trim()) {
        errors.phone = "Phone is required";
      }

      if (!values.email.trim()) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Enter a valid Email";
      }

      if (!values.service) {
        errors.service = "Please select a service";
      }

      return errors;
    },

    onSubmit: () => {
      // Submission is handled with FormSubmit AJAX in handleFormSubmit.
    },
  });

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    const errors = await formik.validateForm();

    formik.setTouched({
      Name: true,
      CompanyName: true,
      phone: true,
      email: true,
      service: true,
      message: true,
    });

    if (Object.keys(errors).length > 0) {
      setIsSending(false);
      return;
    }

    try {
      const payload = {
        Name: formik.values.Name,
        Company: formik.values.CompanyName,
        Phone: formik.values.phone,
        Email: formik.values.email,
        Service: formik.values.service,
        Message: formik.values.message,
        _subject: "New Contact Form Message - Business Genie Consulting",
        _template: "table",
        _captcha: "false",
        _autoresponse:
          "Thank you for contacting Business Genie Consulting. Our team has received your message and will contact you shortly.",
        _replyto: formik.values.email,
      };

      const response = await fetch(formSubmitAjaxEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSent(true);
      formik.resetForm();

      window.setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 50);
    } catch (error) {
      console.error("Contact form submission error:", error);
      alert("Sorry, your message could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <SiteLayout>
      {/* =========================================================
          CONTACT HERO
          IMPORTANT:
          This website uses body.cream-theme for LIGHT mode.
          DARK mode is the default theme.
          We therefore switch the image with React state instead of
          Tailwind dark: classes.
      ========================================================== */}
      <section
        className={`relative isolate overflow-hidden border-b ${
          isCreamTheme
            ? "border-black/5 bg-[#f8f7f4]"
            : "border-white/10 bg-[#070707]"
        }`}
      >
        {/* ONE IMAGE ELEMENT - source switches reliably with site theme */}
        <img
          src={isCreamTheme ? contactHeroLight : contactHeroDark}
          alt="Business Genie Consulting"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-[74%_center] lg:object-right"
        />

        {/* Readability gradient matching the active theme */}
        <div
          className={`absolute inset-0 ${
            isCreamTheme
              ? "bg-gradient-to-r from-white via-white/96 via-[35%] to-transparent"
              : "bg-gradient-to-r from-[#070707] via-[#070707]/96 via-[36%] to-transparent"
          }`}
        />

        {/* Mobile readability layer */}
        <div
          className={`absolute inset-0 lg:hidden ${
            isCreamTheme ? "bg-white/38" : "bg-black/42"
          }`}
        />

        {/* Brand glow */}
        <div className="pointer-events-none absolute -left-28 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[var(--brand-orange)]/12 blur-[105px]" />

        <div className="container-x relative z-10 flex min-h-[410px] items-center py-12 sm:min-h-[455px] sm:py-14 lg:min-h-[500px] lg:py-16 xl:min-h-[520px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-[540px] lg:max-w-[520px]"
          >
            {/* <div
              className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] shadow-sm backdrop-blur-md ${
                isCreamTheme
                  ? "border-black/10 bg-white/78 text-black/60"
                  : "border-white/10 bg-white/[0.05] text-white/70"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
              Business Genie Consulting
            </div> */}

            <h1
              className={`text-[34px] font-semibold leading-[1.06] tracking-[-0.03em] sm:text-[42px] lg:text-[50px] xl:text-[55px] ${
                isCreamTheme ? "text-[#141414]" : "text-white"
              }`}
            >
              Let&apos;s discuss your{" "}
              <span className="text-gradient-orange">business growth</span>
            </h1>

            <p
              className={`mt-5 max-w-[520px] text-[15px] leading-7 sm:text-base ${
                isCreamTheme ? "text-black/60" : "text-white/65"
              }`}
            >
              From ERP and HR automation to digital marketing, SEO, web
              development, UI/UX and business automation, we help turn your
              requirements into practical solutions that support long-term
              business growth.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-orange px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/25 sm:w-auto"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-orange)]/50 hover:text-[var(--brand-orange)] sm:w-auto ${
                  isCreamTheme
                    ? "border-black/15 bg-white/68 text-black/75"
                    : "border-white/15 bg-white/[0.05] text-white/80"
                }`}
              >
                WhatsApp Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div
              className={`mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs ${
                isCreamTheme ? "text-black/52" : "text-white/50"
              }`}
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-orange)]" />
                Solution-focused consulting
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-orange)]" />
                Clear project scope
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-orange)]" />
                Practical implementation
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Section className="!py-10 sm:!py-12">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative scroll-mt-24 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
          >
            <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[var(--brand-orange)]/20 blur-[110px]" />
            <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[var(--brand-teal)]/10 blur-[110px]" />

            <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/70">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--brand-orange)]" />
                  Business Genie Consulting
                </div> */}

                <h2 className="max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white">
                  Build smarter systems, stronger marketing and better business
                  operations with one professional team.
                </h2>

                <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/65">
                  Tell us what you need. Our team will review your message,
                  understand your business requirement and guide you with the
                  right next step.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  "Solution-focused consulting",
                  "Clear project scope",
                  "Practical implementation plan",
                ].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/75"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--brand-orange)]" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="!pt-4">
        <div className="container-x grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
          >
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--brand-orange)]/15 blur-[110px]" />
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-orange)]/50 to-transparent" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Send us a message
              </h3>

              <p className="mt-2 text-sm text-white/55">
                Share your requirements and our team will guide you with the
                right solution.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-gradient-orange text-black">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <div className="text-2xl font-bold text-gradient-orange">
                    Message sent successfully
                  </div>

                  <p
                    className={`mt-3 ${
                      isCreamTheme ? "text-black/60" : "text-white/65"
                    }`}
                  >
                    Thank you. Our team will contact you shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className={`mt-6 rounded-full border px-5 py-2.5 text-sm transition hover:border-[var(--brand-orange)]/50 hover:text-[var(--brand-orange)] ${
                      isCreamTheme
                        ? "border-black/10 bg-white/55 text-black/65"
                        : "border-white/10 text-white/70"
                    }`}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleFormSubmit}
                  className="mt-7 grid gap-4 sm:grid-cols-2"
                >
                  <Field
                    label=" Name"
                    name=" Name"
                    value={formik.values.Name}
                    onChange={(event) =>
                      formik.setFieldValue("Name", event.target.value)
                    }
                    onBlur={() => formik.setFieldTouched("Name", true)}
                    error={
                      formik.touched.Name
                        ? formik.errors.Name
                        : ""
                    }
                    required
                  />

                  <Field
                    label="Company"
                    name="Company"
                    value={formik.values.CompanyName}
                    onChange={(event) =>
                      formik.setFieldValue("CompanyName", event.target.value)
                    }
                    onBlur={() => formik.setFieldTouched("CompanyName", true)}
                    error={
                      formik.touched.CompanyName
                        ? formik.errors.CompanyName
                        : ""
                    }
                    required
                  />

                  <Field
                    label="Phone"
                    name="Phone"
                    type="tel"
                    value={formik.values.phone}
                    onChange={(event) =>
                      formik.setFieldValue("phone", event.target.value)
                    }
                    onBlur={() => formik.setFieldTouched("phone", true)}
                    error={formik.touched.phone ? formik.errors.phone : ""}
                    required
                  />

                  <Field
                    label="Email"
                    name="Email"
                    type="email"
                    value={formik.values.email}
                    onChange={(event) =>
                      formik.setFieldValue("email", event.target.value)
                    }
                    onBlur={() => formik.setFieldTouched("email", true)}
                    error={formik.touched.email ? formik.errors.email : ""}
                    required
                  />

                  <div className="sm:col-span-2">
                    <Select
                      label="Required Service 
"
                      name="Service"
                      options={services}
                      value={formik.values.service}
                      onChange={(event) =>
                        formik.setFieldValue("service", event.target.value)
                      }
                      onBlur={() => formik.setFieldTouched("service", true)}
                      error={
                        formik.touched.service ? formik.errors.service : ""
                      }
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs text-white/65">
                      Message <span className="text-white/40">(Optional)</span>
                    </label>

                    <textarea
                      name="Message"
                      rows={6}
                      value={formik.values.message}
                      onChange={(event) =>
                        formik.setFieldValue("message", event.target.value)
                      }
                      onBlur={() => formik.setFieldTouched("message", true)}
                      placeholder="Tell us about your business requirement..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[var(--brand-orange)]"
                    />

                    {formik.touched.message && formik.errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">
                        {formik.errors.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-orange px-7 py-3.5 font-semibold text-black glow-orange transition-transform duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {isSending ? "Sending..." : "Submit Message"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="space-y-4"
          >
            <ContactCard
              icon={Mail}
              title="Email Us"
              value={contactEmail}
              href={`mailto:${contactEmail}`}
            />

            <ContactCard
              icon={Phone}
              title="WhatsApp"
              value={whatsappNumber}
              href={whatsappUrl}
              accent
            />

            <ContactCard
              icon={MapPin}
              title="Office Location"
              value={officeAddress}
              href="https://www.google.com/maps/search/?api=1&query=968%20Q%20Block%20Johar%20Town%20Lahore%20Pakistan"
            />
          </motion.div>
        </div>
      </Section>

      <Section className="!pt-0 !pb-28">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.035] p-4 sm:p-5 backdrop-blur-xl"
          >
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--brand-orange)]/15 blur-[110px]" />

            <div className="relative mb-5 flex flex-col gap-3 px-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--brand-orange)]">
                  Find Us
                </div>

                <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                  Visit our Lahore office
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  968 Q Block, Johar Town, Lahore, Pakistan
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=968%20Q%20Block%20Johar%20Town%20Lahore%20Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/75 transition-all duration-300 hover:border-[var(--brand-orange)]/50 hover:text-[var(--brand-orange)]"
              >
                Open in Google Maps
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white">
              <iframe
                title="Business Genie Consulting Location"
                src="https://www.google.com/maps?q=968%20Q%20Block%20Johar%20Town%20Lahore%20Pakistan&output=embed"
                className="h-[320px] w-full border-0 sm:h-[420px] lg:h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-white/65">
        {label}
        {required && <span className="text-[var(--brand-orange)]"> *</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        autoComplete="off"
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[var(--brand-orange)]"
      />

      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function Select({
  label,
  name,
  options,
  value,
  onChange,
  onBlur,
  error,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  onBlur: FocusEventHandler<HTMLSelectElement>;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-white/65">
        {label}
        {required && <span className="text-[var(--brand-orange)]"> *</span>}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--brand-orange)]"
      >
        <option value="" disabled className="bg-[#0a0a0a]">
          Select service
        </option>

        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0a0a0a]">
            {option}
          </option>
        ))}
      </select>

      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  accent,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-orange)]/50 ${
        accent
          ? "border-[var(--brand-orange)]/25 bg-[var(--brand-orange)]/5"
          : ""
      }`}
    >
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--brand-orange)]/0 blur-[80px] transition-colors duration-300 group-hover:bg-[var(--brand-orange)]/15" />

      <div className="relative flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--brand-orange)]/25 bg-[var(--brand-orange)]/10 text-[var(--brand-orange)]">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <div className="text-xs uppercase tracking-[0.18em] text-white/55">
            {title}
          </div>

          <div className="mt-1 text-sm font-medium leading-relaxed text-white break-words">
            {value}
          </div>
        </div>
      </div>
    </a>
  );
}