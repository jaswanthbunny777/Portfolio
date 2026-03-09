"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const nameControls = useAnimation();

  useEffect(() => {
    const runAnimationSequence = async () => {
      while (true) {
        await nameControls.start({
          rotate: [0, 6, -6, 6, -6, 0],
          transition: { duration: 2.5, ease: "easeInOut" },
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));

        await nameControls.start({
          backgroundPosition: ["0% center", "200% center"],
          transition: { duration: 4, ease: "linear" },
        });

        nameControls.set({ backgroundPosition: "0% center" });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    };

    runAnimationSequence();
  }, [nameControls]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a]"
    >
      {/* Background effects */}
      <div
        className="absolute inset-0 bg-grid-faint"
        style={{ backgroundSize: "56px 56px" }}
      />
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div {...fadeUp(0.1)} className="mb-5">
              <span className="inline-flex items-center gap-2 text-blue-400 font-mono text-sm px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to Internships & Opportunities
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.05] text-white mb-4 tracking-tight"
            >
              Thiriveedhi
              <br />
              <motion.span
                className="text-blue-500 inline-block origin-top"
                style={{ backgroundSize: "200% auto" }}
                animate={nameControls}
              >
                Jaswanth
              </motion.span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-xl sm:text-2xl text-slate-300 font-medium mb-4"
            >
              Full-Stack Developer
            </motion.p>

            <motion.p
              {...fadeUp(0.4)}
              className="text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              Third-year CS (AIML) student at VIT-AP · CGPA 9.2 · Building
              scalable web apps with Java, Node.js & ML. 100+ DSA problems
              solved across LeetCode, CodeChef & HackerEarth.
            </motion.p>

            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm overflow-hidden transition-all duration-200 hover:shadow-glow hover:scale-[1.03]"
              >
                <span className="relative z-10">View Work</span>
                <ArrowDown
                  size={16}
                  className="relative z-10 group-hover:translate-y-1 transition-transform"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1mjVQYjP-fRu8YJZXHnwT6tDhFQp146DQ/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-blue-500/30 text-blue-400 font-semibold text-sm hover:bg-blue-500/10 hover:border-blue-500/60 transition-all duration-200 hover:scale-[1.03]"
              >
                Resume ↗
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp(0.65)}
              className="flex items-center gap-5 mt-8 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/jaswanthbunny777", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/jaswanth-thiriveedhi-a4aa81376", label: "LinkedIn" },
                { icon: Mail, href: "mailto:bunnyj335@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Photo & Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent blur-2xl scale-110 animate-pulse-slow pointer-events-none" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed border-blue-500/30 pointer-events-none"
            />

            {/* Photo & Hello Container */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mt-8 lg:mt-0">
              
              {/* --- PERFECTLY SYNCHRONIZED WRAPPER --- */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3.8 }}
                className="absolute inset-0 z-10"
              >
                
                {/* --- THE "HELLO" SEQUENCE --- */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-[2px] z-50 font-display text-4xl sm:text-5xl font-bold pointer-events-none drop-shadow-md">
                  {/* All letters updated to text-blue-500 */}
                  <motion.div
                    initial={{ x: "-40vw", y: "-30vh", scale: 0, rotate: -90 }}
                    animate={{ x: ["-40vw", "5vw", 0], y: ["-30vh", "5vh", 0], scale: [0, 1.2, 1], rotate: [-90, 15, 0] }}
                    transition={{ duration: 2.2, ease: "easeOut", delay: 0.4 }}
                    className="text-blue-500"
                  >H</motion.div>

                  <motion.div
                    initial={{ x: "-20vw", y: "40vh", scale: 0, rotate: 90 }}
                    animate={{ x: ["-20vw", "-5vw", 0], y: ["40vh", "-10vh", 0], scale: [0, 1.2, 1], rotate: [90, -15, 0] }}
                    transition={{ duration: 2.3, ease: "easeOut", delay: 0.6 }}
                    className="text-blue-500"
                  >e</motion.div>

                  <motion.div
                    initial={{ x: "10vw", y: "-50vh", scale: 0, rotate: -45 }}
                    animate={{ x: ["10vw", "0vw", 0], y: ["-50vh", "10vh", 0], scale: [0, 1.2, 1], rotate: [-45, 10, 0] }}
                    transition={{ duration: 2.1, ease: "easeOut", delay: 0.8 }}
                    className="text-blue-500"
                  >l</motion.div>

                  <motion.div
                    initial={{ x: "30vw", y: "30vh", scale: 0, rotate: 45 }}
                    animate={{ x: ["30vw", "-5vw", 0], y: ["30vh", "-5vh", 0], scale: [0, 1.2, 1], rotate: [45, -10, 0] }}
                    transition={{ duration: 2.4, ease: "easeOut", delay: 1.0 }}
                    className="text-blue-500"
                  >l</motion.div>

                  <motion.div
                    initial={{ x: "40vw", y: "-20vh", scale: 0, rotate: 180 }}
                    animate={{ x: ["40vw", "-10vw", 0], y: ["-20vh", "10vh", 0], scale: [0, 1.2, 1], rotate: [180, -20, 0] }}
                    transition={{ duration: 2.5, ease: "easeOut", delay: 1.2 }}
                    className="text-blue-500"
                  >o</motion.div>

                  <motion.div
                    initial={{ x: "30vw", y: "30vh", scale: 0, rotate: 45 }}
                    animate={{ x: ["30vw", "-5vw", 0], y: ["30vh", "-5vh", 0], scale: [0, 1.2, 1], rotate: [45, -10, 0] }}
                    transition={{ duration: 2.4, ease: "easeOut", delay: 1.0 }}
                    className="text-blue-500"
                  >!</motion.div>
                </div>

                {/* --- PROFILE IMAGE --- */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="w-full h-full rounded-full overflow-hidden ring-4 ring-blue-500/30 shadow-glow cursor-pointer"
                >
                  <Image
                    src="/profile-photo.jpg"
                    alt="Thiriveedhi Jaswanth"
                    width={320}
                    height={320}
                    className="object-cover object-top w-full h-full"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Floating badge — CGPA */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -right-4 bg-slate-800/80 backdrop-blur-md border border-white/5 px-4 py-2 rounded-xl shadow-xl z-20"
              >
                <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">CGPA</p>
                <p className="font-display font-700 text-xl text-blue-400">9.2</p>
              </motion.div>

              {/* Floating badge — DSA */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0, type: "spring", stiffness: 200 }}
                className="absolute -top-4 -left-4 bg-slate-800/80 backdrop-blur-md border border-white/5 px-4 py-2 rounded-xl shadow-xl z-20"
              >
                <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">DSA Problems</p>
                <p className="font-display font-700 text-xl text-blue-400">150+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}