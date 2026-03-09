"use client";
import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-10 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-accent/20 flex items-center justify-center">
            <Code2 size={12} className="text-accent" />
          </div>
          <span className="font-mono">Thiriveedhi Jaswanth</span>
        </div>
        <p className="flex items-center gap-1.5">
          Built with{" "}
          <Heart size={12} className="text-red-400 fill-red-400" />
          {" "}using Next.js · Tailwind CSS · Framer Motion
        </p>
        <p className="font-mono text-xs">© {new Date().getFullYear()}</p>
      </div>
    </motion.footer>
  );
}
