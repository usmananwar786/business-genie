import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  PhoneCall,
  Mail,
} from "lucide-react";
import { SITE } from "@/lib/site";

type ChatMessage = {
  type: "bot" | "user";
  text: string;
};

const options = [
  "ERP Consultation",
  "Digital Marketing",
  "Website Development",
  "SEO Services",
  "Career Inquiry",
];

const botReplies: Record<string, string> = {
  "ERP Consultation":
    "Great. Please share your business type and current ERP or manual process. Our team will guide you with the best implementation plan.",
  "Digital Marketing":
    "Perfect. Please share your business website and target location so we can suggest a lead generation strategy.",
  "Website Development":
    "Sure. Please tell us what type of website you need, business website, landing page, portfolio, ecommerce or custom platform.",
  "SEO Services":
    "Good choice. Please share your website URL and main target keywords or services. We will review the SEO opportunity.",
  "Career Inquiry":
    "Thanks for your interest. Please share your role, experience and portfolio or CV details.",
};

const contactEmail = "info@businessgenie.net";

// WhatsApp number country code ke sath hota hai.
// Baad me sirf ye number change kar lena.
const whatsappNumber = "+923394050121";

const whatsappUrl = whatsappNumber
  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
  : SITE.whatsappUrl;

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: "bot",
      text: "Hi! Welcome to Business Genie Consulting. How can we help your business today?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  if (!mounted) return null;

  const sendMessage = (text?: string) => {
    const value = text || input.trim();

    if (!value) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: value,
      },
    ]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text:
            botReplies[value] ||
            "Thanks for your message. Our team will review it and contact you shortly.",
        },
      ]);
    }, 700);
  };

  return (
    <>
      {/* Chat Box */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed bottom-[92px] right-3 z-[9999] flex h-[calc(100dvh-112px)] max-h-[620px] w-[calc(100vw-24px)] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-[var(--brand-orange)]/25 bg-[#070707] text-white shadow-2xl shadow-black/45 sm:bottom-24 sm:right-6 sm:h-[600px]"
          >
            {/* Header */}
            <div className="relative shrink-0 overflow-hidden bg-gradient-orange px-5 py-4 text-black">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/25 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black/10">
                    <Bot className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold">
                      Business Genie
                    </div>
                    <div className="flex items-center gap-1.5 text-xs opacity-80">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-green-600" />
                      <span className="truncate">Online, replies quickly</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setChatOpen(false)}
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black/10 transition hover:bg-black/20"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="min-h-0 flex-1 overflow-y-auto bg-[#0b0b0b] px-4 py-5">
              <div className="space-y-3">
                {messages.map((msg, index) => (
                  <div
                    key={`${msg.text}-${index}`}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[84%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.type === "user"
                          ? "rounded-br-sm bg-gradient-orange text-black"
                          : "rounded-bl-sm border border-white/10 bg-[#171717] text-[#f5f5f5]"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Options + Input + Contact Actions */}
            <div className="shrink-0 border-t border-[#262626] bg-[#080808] px-4 py-3">
              {/* Quick Options */}
              <div className="mb-3 flex flex-wrap gap-2">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => sendMessage(option)}
                    className="rounded-full border border-[var(--brand-orange)]/45 bg-[#121212] px-3 py-1.5 text-[11px] font-medium text-[var(--brand-orange)] transition-all duration-300 hover:bg-[var(--brand-orange)] hover:text-black"
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div
                className="flex items-center gap-2 rounded-full border border-[#303030] !bg-[#050505] p-1.5 shadow-inner"
                style={{
                  backgroundColor: "#050505",
                }}
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                  }}
                  placeholder="Type your message..."
                  className="h-11 min-w-0 flex-1 rounded-full !bg-[#050505] px-4 text-sm !text-white outline-none placeholder:!text-white/45 focus:!bg-[#050505]"
                  style={{
                    backgroundColor: "#050505",
                    color: "#ffffff",
                    boxShadow: "0 0 0 1000px #050505 inset",
                    WebkitTextFillColor: "#ffffff",
                  }}
                />

                <button
                  onClick={() => sendMessage()}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-orange text-black transition-transform duration-300 hover:scale-105"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>

              {/* Contact Actions */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex min-w-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#2f2f2f] bg-[#121212] px-3 py-2 text-xs font-medium text-[#e5e5e5] transition hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  <span>Email</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#2f2f2f] bg-[#121212] px-3 py-2 text-xs font-medium text-[#e5e5e5] transition hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <PhoneCall className="h-3.5 w-3.5 shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setChatOpen((prev) => !prev)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-4 z-[10000] grid h-16 w-16 place-items-center rounded-full bg-gradient-orange text-black shadow-2xl shadow-[var(--brand-orange)]/30 sm:bottom-6 sm:right-6"
        aria-label="Open live chat"
      >
        <AnimatePresence mode="wait">
          {chatOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-7 w-7" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ opacity: 0, rotate: 45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -45, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-7 w-7" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}