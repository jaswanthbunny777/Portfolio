"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, TrendingUp, BookOpen, Bot } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const projects = [
  {
    title: "Stock Market Analysis & Recommendation System",
    tagline: "ML-powered Buy / Hold / Sell classifier with web dashboard",
    description:
      "Analyzed historical stock price data to extract trends and momentum features. Built an ML-based classification model (Buy / Hold / Sell). Deployed as a full-stack web application displaying real-time recommendations with performance analytics.",
    tags: ["Python", "Machine Learning", "scikit-learn", "Flask", "JavaScript"],
    icon: TrendingUp,
    gradient: "from-blue-600/20 via-blue-500/10 to-transparent",
    accent: "#3B82F6",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-400",
    accentBorder: "border-blue-500/25",
    // demoUrl: "#",
    // githubUrl: "#",
    featured: true,
  },
  {
    title: "Online Book Recommendation System",
    tagline: "Deep learning model with personalized suggestions UI",
    description:
      "Built a web-based recommendation engine using deep learning techniques. Generates personalized book suggestions through an interactive, user-friendly interface with filtering and rating features.",
    tags: ["Deep Learning", "Python", "TensorFlow", "Node.js", "MongoDB"],
    icon: BookOpen,
    gradient: "from-purple-600/20 via-purple-500/10 to-transparent",
    accent: "#A78BFA",
    accentBg: "bg-purple-500/10",
    accentText: "text-purple-400",
    accentBorder: "border-purple-500/25",
    // demoUrl: "#",
    // githubUrl: "#",
    featured: false,
  },
  {
    title: "MERN Full-Stack Application",
    tagline: "Production-ready MERN stack project with auth & REST APIs",
    description:
      "Developed a complete full-stack application leveraging MongoDB, Express, React, and Node.js. Includes JWT authentication, RESTful API design, and a responsive UI — certifying expertise earned via Six Phrases MERN program.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    icon: Bot,
    gradient: "from-green-600/20 via-green-500/10 to-transparent",
    accent: "#34D399",
    accentBg: "bg-green-500/10",
    accentText: "text-green-400",
    accentBorder: "border-green-500/25",
    // demoUrl: "#",
    // githubUrl: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="mb-16 text-center">
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            03. Projects
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-white mt-3">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of projects I've built, from ML-powered systems to
            full-stack web apps.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: `0 0 50px ${project.accent}30, 0 20px 60px rgba(0,0,0,0.5)`,
                }}
                className={`relative rounded-2xl overflow-hidden card-surface ${
                  project.featured ? "lg:col-span-2 xl:col-span-1" : ""
                } group flex flex-col transition-all duration-300`}
              >
                {/* Gradient header bar */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} opacity-80`}
                  style={{
                    background: `linear-gradient(to right, ${project.accent}, transparent)`,
                  }}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + title */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${project.accentBg} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon size={20} style={{ color: project.accent }} />
                    </div>
                    {project.featured && (
                      <span className="text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-white font-700 text-lg leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className={`text-sm font-medium mb-3 ${project.accentText}`}>
                    {project.tagline}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-mono px-2.5 py-1 rounded-lg ${project.accentBg} ${project.accentText} border ${project.accentBorder}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg ${project.accentBg} ${project.accentText} border ${project.accentBorder} hover:opacity-80 transition-opacity`}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-white/5 text-slate-300 border border-white/8 hover:bg-white/10 transition-colors"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.5)} className="mt-12 text-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white border border-white/10 hover:border-accent/40 px-6 py-3 rounded-xl transition-all duration-200 hover:bg-accent/5"
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
