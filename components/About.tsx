"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Trophy, Code } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const stats = [
  { label: "CGPA", value: "9.2", icon: GraduationCap },
  { label: "DSA Problems", value: "100+", icon: Code },
  { label: "Projects Built", value: "5+", icon: Trophy },
  { label: "Location", value: "AP, India", icon: MapPin },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            01. About
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-white mt-3">
            Who am <span className="text-gradient">I?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Bio */}
          <div className="space-y-5">
            <motion.p {...fadeUp(0.1)} className="text-slate-300 text-lg leading-relaxed">
              I'm a <span className="text-white font-medium">third-year Computer Science (AIML)</span>{" "}
              student at{" "}
              <span className="text-accent font-medium">
                Vellore Institute of Technology – AP
              </span>
              , Amaravati, with a CGPA of 9.2. I'm passionate about building
              full-stack applications that are fast, scalable, and genuinely
              useful.
            </motion.p>
            <motion.p {...fadeUp(0.2)} className="text-slate-400 leading-relaxed">
              My journey spans everything from backend API design in Node.js to
              machine-learning-powered web apps. I've solved 100+ algorithmic
              problems on LeetCode, CodeChef, and HackerEarth — sharpening my
              thinking on data structures, system design, and clean code.
            </motion.p>
            <motion.p {...fadeUp(0.3)} className="text-slate-400 leading-relaxed">
              Currently diving deep into the MERN stack and exploring how ML
              models can be seamlessly embedded in web products — making AI
              accessible, not just impressive.
            </motion.p>

            {/* Education cards */}
            <motion.div {...fadeUp(0.4)} className="space-y-4 mt-8">
              <h3 className="font-display text-white font-600 text-lg">Education</h3>
              {[
                {
                  school: "VIT-AP University, Amaravati",
                  degree: "B.Tech – CSE (AIML)",
                  period: "2023 – 2027",
                  grade: "CGPA: 9.2",
                  color: "accent",
                },
                {
                  school: "Chaitanya Junior College, Gannavaram",
                  degree: "Intermediate (PCM)",
                  period: "2021 – 2023",
                  grade: "Score: 98.2%",
                  color: "purple",
                },
              ].map((edu) => (
                <div key={edu.school} className="card-surface rounded-xl p-5 flex gap-4 hover:border-accent/30 transition-colors">
                  <div className="mt-1">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{edu.school}</p>
                    <p className="text-slate-400 text-sm mt-0.5">{edu.degree}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Stats */}
          <div>
            <motion.div
              {...fadeUp(0.2)}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  whileHover={{ scale: 1.03, borderColor: "rgba(59,130,246,0.4)" }}
                  className="card-surface rounded-2xl p-6 cursor-default transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <p className="font-display text-3xl font-700 text-white">{value}</p>
                  <p className="text-slate-400 text-sm mt-1">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Core subjects */}
            <motion.div {...fadeUp(0.5)} className="mt-6 card-surface rounded-2xl p-6">
              <h3 className="font-display text-white font-600 mb-4">Core Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Structures & Algorithms",
                  "Algorithm Analysis",
                  "OOP in Java",
                  "Database Management",
                  "Operating Systems",
                  "Computer Networks",
                ].map((subj) => (
                  <span
                    key={subj}
                    className="text-xs font-mono text-slate-300 bg-white/5 border border-white/8 px-3 py-1.5 rounded-lg"
                  >
                    {subj}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
