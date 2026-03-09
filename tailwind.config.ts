import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F172A",
        accent: "#3B82F6",
        "accent-light": "#60A5FA",
        "surface": "#1E293B",
        "surface-2": "#0F1E33",
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(59,130,246,0.35)",
        "glow-sm": "0 0 20px rgba(59,130,246,0.2)",
        card: "0 8px 40px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(59,130,246,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.05) 1px,transparent 1px)",
        "hero-radial":
          "radial-gradient(ellipse 70% 60% at 60% 0%,rgba(59,130,246,0.12),transparent 70%)",
      },
      backgroundSize: { grid: "56px 56px" },
    },
  },
  plugins: [],
};
export default config;
