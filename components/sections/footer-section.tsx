"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { AnimatePresence } from "framer-motion";

const footerLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Team", href: "/team" },
];

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter your email");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("insights").insert([{ email }]);

    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        setError("You're already subscribed 😉");
      } else {
        setError("Something went wrong. Please try again.");
      }
      return;
    }

    setEmail("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };
 

  return (
    <>
<footer
  className={`relative bg-background px-6 py-24 overflow-hidden transition-all duration-300 ${
    submitted ? "blur-sm" : ""
  }`}
>
      {/* Gradient blob */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-purple-200 to-lime-200 opacity-40 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Logo and links */}
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-serif text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/logo.png"
                alt="Winx Marketing Media"
                width={250}
                height={80}
                className="object-contain text-black"
              />
            </motion.h2>

            <nav className="flex flex-wrap gap-6 mt-8">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  data-clickable
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Email signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm mb-4">
              Get growth insights, case studies & updates from Winx.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <motion.div
                animate={error ? { x: [-6, 6, -6, 6, 0] } : {}}
                transition={{ duration: 0.3 }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  placeholder="Enter your email"
                  className={`flex-1 bg-secondary rounded-lg px-4 py-3 outline-none border-2 transition-all
        ${error ? "border-red-500" : "border-transparent focus:border-primary"}
      `}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-foreground text-background p-3 rounded-lg"
                >
                  {loading ? "..." : <ArrowRight className="w-5 h-5" />}
                </button>
              </motion.div>

              {/* Error text */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs ml-1"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Winx Marketing Media. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm"
              data-clickable
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-sm"
              data-clickable
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
    <AnimatePresence>
  { submitted && (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl p-10 text-center shadow-2xl"
      >
        <div className="text-5xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="5" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-3xl font-black mb-2 font-serif">You’re Subscribed!</h3>
        <p className="text-gray-600 text-sm">
          Growth , insights are heading to your inbox 🚀
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </>
  );
}
