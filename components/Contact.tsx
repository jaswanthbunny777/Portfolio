"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-96 h-96 bg-accent/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            05. Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-white mt-3">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            I'm open to internships, collaborations, and full-time roles. Reach
            out — I'd love to talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <motion.div {...fadeUp(0.1)} className="space-y-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "bunnyj335@gmail.com",
                href: "mailto:bunnyj335@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 9381772114",
                href: "tel:+919381772114",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Davajigudem, Gannavaram, AP, India",
                href: "#",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 card-surface rounded-xl p-5 hover:border-accent/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-mono uppercase tracking-widest">
                    {label}
                  </p>
                  <p className="text-white font-medium text-sm mt-0.5 group-hover:text-accent transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: Github, href: "https://github.com/", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl card-surface flex items-center justify-center text-slate-400 hover:text-white hover:border-accent/40 hover:bg-accent/10 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div {...fadeUp(0.2)}>
            {status === "sent" ? (
              <div className="card-surface rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4 min-h-[340px]">
                <CheckCircle size={48} className="text-green-400" />
                <h3 className="font-display text-white text-xl font-600">
                  Message Sent!
                </h3>
                <p className="text-slate-400">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-accent border border-accent/30 px-5 py-2 rounded-lg hover:bg-accent/10 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-surface rounded-2xl p-8 space-y-5"
              >
                {/* Web3Forms access key — replace with your own */}
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_WEB3FORMS_ACCESS_KEY"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Portfolio Contact"
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject_line"
                    placeholder="Internship opportunity / Project collab..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try emailing directly.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-blue-600 transition-colors shadow-glow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4" strokeDashoffset="10" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
