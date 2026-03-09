"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const skillCategories = [
  {
    category: "Languages",
    emoji: "⚡",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    skills: ["Java", "Python", "C", "C++"],
  },
  {
    category: "Frontend",
    emoji: "🎨",
    color: "from-purple-500/20 to-purple-600/5",
    accent: "text-purple-400",
    border: "border-purple-500/20",
    skills: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    color: "from-green-500/20 to-green-600/5",
    accent: "text-green-400",
    border: "border-green-500/20",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    emoji: "🗄️",
    color: "from-yellow-500/20 to-yellow-600/5",
    accent: "text-yellow-400",
    border: "border-yellow-500/20",
    skills: ["SQL", "MongoDB"],
  },
  {
    category: "ML / AI",
    emoji: "🤖",
    color: "from-rose-500/20 to-rose-600/5",
    accent: "text-rose-400",
    border: "border-rose-500/20",
    skills: ["Machine Learning", "Deep Learning", "Data Analysis"],
  },
  {
    category: "Competitive Programming",
    emoji: "🏆",
    color: "from-orange-500/20 to-orange-600/5",
    accent: "text-orange-400",
    border: "border-orange-500/20",
    skills: ["LeetCode 100+", "CodeChef", "HackerEarth", "DSA"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            02. Skills
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-white mt-3">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Technologies I work with, organized by domain.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map(
            ({ category, emoji, color, accent, border, skills }, catIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: catIdx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-2xl p-6 bg-gradient-to-br ${color} border ${border} overflow-hidden group transition-shadow hover:shadow-glow-sm`}
              >
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/[0.02] transition-opacity rounded-2xl" />

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{emoji}</span>
                  <h3 className={`font-display font-600 ${accent} text-sm uppercase tracking-widest`}>
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIdx * 0.08 + i * 0.05 }}
                      className="text-xs font-mono text-slate-200 bg-white/8 border border-white/10 px-3 py-1.5 rounded-lg hover:bg-white/12 hover:border-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Proficiency visual row */}
        <motion.div {...fadeUp(0.4)} className="mt-12 card-surface rounded-2xl p-8">
          <h3 className="font-display text-white font-600 mb-6 text-center">
            Proficiency Overview
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
            {[
              { name: "Java", pct: 85 },
              { name: "JavaScript / Node.js", pct: 80 },
              { name: "Python", pct: 75 },
              { name: "DSA & Problem Solving", pct: 82 },
              { name: "SQL / MongoDB", pct: 72 },
              { name: "HTML / CSS", pct: 88 },
            ].map(({ name, pct }, i) => (
              <div key={name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-slate-300 font-medium">{name}</span>
                  <span className="text-xs font-mono text-accent">{pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-blue-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
