"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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

function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="theme-toggle-button" type="button">
        Loading...
      </button>
    );
  }

  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-toggle-button"
      type="button"
      onClick={() => setTheme(nextTheme)}
    >
      {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default function Navbar({
  activeSection,
  onSectionChange,
}: NavbarProps) {
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
        {/* <div className="navbar-actions">
          <ThemeToggle />
        </div> */}
      </div>
    </nav>
  );
}
