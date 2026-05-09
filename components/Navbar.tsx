"use client";

import { useEffect, useMemo, useState } from "react";

type Section =
  | "about"
  | "experience"
  | "publications"
  | "education"
  | "achievements"
  | "contact"
  | "resume";

interface NavbarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navItems: { id: Section; label: string }[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume" },
];

const THEME_OPTIONS = [
  { value: "theme-white", label: "Normal White" },
  { value: "theme-dark-white", label: "Dark White" },

  { value: "theme-orange", label: "Orange (Light)" },
  { value: "theme-dark-orange", label: "Orange (Dark)" },

  { value: "theme-blue", label: "Blue (Light)" },
  { value: "theme-dark-blue", label: "Blue (Dark)" },

  { value: "theme-gray", label: "Gray (Light)" },
  { value: "theme-dark-gray", label: "Gray (Dark)" },

  { value: "theme-violet", label: "Violet (Light)" },
  { value: "theme-dark-violet", label: "Violet (Dark)" },

  { value: "theme-emerald", label: "Emerald (Light)" },
  { value: "theme-dark-emerald", label: "Emerald (Dark)" },
] as const;

type ThemeValue = (typeof THEME_OPTIONS)[number]["value"];

function setHtmlTheme(nextTheme: ThemeValue) {
  const html = document.documentElement;
  html.classList.remove(
    "theme-white",
    "theme-dark-white",
    "theme-orange",
    "theme-dark-orange",
    "theme-blue",
    "theme-dark-blue",
    "theme-gray",
    "theme-dark-gray",
    "theme-violet",
    "theme-dark-violet",
    "theme-emerald",
    "theme-dark-emerald"
  );
  html.classList.add(nextTheme);
  try {
    localStorage.setItem("portfolioTheme", nextTheme);
  } catch {
    // ignore
  }
}

function ThemeDropdown() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeValue>("theme-white");

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("portfolioTheme") as
        | ThemeValue
        | null;
      if (saved && THEME_OPTIONS.some((t) => t.value === saved)) {
        setHtmlTheme(saved);
        return;
      }
    } catch {
      // ignore
    }

    const html = document.documentElement;
    const existing = THEME_OPTIONS.find((t) => html.classList.contains(t.value));
    if (existing) setTheme(existing.value);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const existing = THEME_OPTIONS.find((t) => html.classList.contains(t.value));
    if (existing) setTheme(existing.value);
  });

  const currentLabel = useMemo(() => {
    const opt = THEME_OPTIONS.find((t) => t.value === theme);
    return opt?.label ?? "Theme";
  }, [theme]);

  return (
    <label className="theme-select-wrapper">
      <span className="theme-select-label">Theme</span>
      <select
        className="theme-select"
        aria-label="Select theme"
        value={theme}
        disabled={!mounted}
        onChange={(e) => {
          const next = e.target.value as ThemeValue;
          setTheme(next);
          setHtmlTheme(next);
        }}
      >
        {THEME_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {!mounted && <span className="theme-select-fallback">{currentLabel}</span>}
    </label>
  );
}

export default function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item ${activeSection === item.id ? "active" : ""}`}
                onClick={() => onSectionChange(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <ThemeDropdown />
        </div>
      </div>
    </nav>
  );
}
