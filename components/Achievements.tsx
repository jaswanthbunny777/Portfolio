"use client";
import { motion } from "framer-motion";
import { Award, Code2, BookMarked, Cpu } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const achievements = [
  {
    icon: Award,
    title: "MERN Full Stack Certification",
    org: "Six Phrases",
    period: "Aug – Sep 2025",
    desc: "Completed an intensive full-stack program covering MongoDB, Express.js, React, and Node.js, building production-grade applications.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Cpu,
    title: "RPA UiPath Certification",
    org: "UiPath",
    period: "July 2025",
    desc: "Earned official UiPath certification in Robotic Process Automation, covering bot design, workflow automation, and enterprise deployment.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Code2,
    title: "100+ DSA Problems Solved",
    org: "LeetCode · CodeChef · HackerEarth",
    period: "Ongoing",
    desc: "Consistently solved algorithmic problems focused on arrays, graphs, dynamic programming, and system-design patterns across multiple platforms.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: BookMarked,
    title: "Academic Excellence",
    org: "VIT-AP University",
    period: "2023 – Present",
    desc: "Maintaining a CGPA of 9.2 in Computer Science (AIML), with top performance across core subjects including DSA, DBMS, and Operating Systems.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 relative">
      <div className="absolute right-0 top-1/2 w-72 h-72 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            04. Achievements
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-white mt-3">
            Milestones &amp; <span className="text-gradient">Certs</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.025 }}
                className={`card-surface rounded-2xl p-7 border ${item.border} flex gap-5 group transition-shadow hover:shadow-glow-sm`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}
                >
                  <Icon size={22} className={item.color} />
                </div>
                <div>
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                    <h3 className="font-display text-white font-600 text-lg leading-snug">
                      {item.title}
                    </h3>
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-full ${item.bg} ${item.color} border ${item.border} flex-shrink-0`}>
                      {item.period}
                    </span>
                  </div>
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>{item.org}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Competitive Programming strip */}
        <motion.div {...fadeUp(0.5)} className="mt-8 card-surface rounded-2xl p-7">
          <h3 className="font-display text-white font-600 mb-5 text-center">
            Competitive Programming
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { platform: "LeetCode", stat: "100+ Problems", color: "text-yellow-400", bg: "bg-yellow-400/10" },
              { platform: "CodeChef", stat: "Active Participant", color: "text-orange-400", bg: "bg-orange-400/10" },
              { platform: "HackerEarth", stat: "Active Participant", color: "text-blue-400", bg: "bg-blue-400/10" },
            ].map(({ platform, stat, color, bg }) => (
              <div key={platform} className={`flex flex-col items-center px-8 py-5 rounded-xl ${bg} border border-white/5`}>
                <span className={`font-display font-700 text-xl ${color}`}>{stat}</span>
                <span className="text-slate-400 text-sm mt-1">{platform}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
