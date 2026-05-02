import { useState, useEffect } from "react";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import PublicationsSection from "./sections/PublicationsSection";
import EducationSection from "./sections/EducationSection";
import AchievementsSection from "./sections/AchievementsSection";
import ContactSection from "./sections/ContactSection";
import ResumeSection from "./sections/ResumeSection";
import { Sun, Moon } from "lucide-react"; // Install lucide-react for icons

type Section =
  | "about"
  | "experience"
  | "publications"
  | "education"
  | "achievements"
  | "contact"
  | "resume";

interface ContentProps {
  activeSection: Section;
}

export default function Content({ activeSection }: ContentProps) {
  const [isDark, setIsDark] = useState(false);

  // Sync theme with HTML class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "publications":
        return <PublicationsSection />;
      case "education":
        return <EducationSection />;
      case "achievements":
        return <AchievementsSection />;
      case "contact":
        return <ContactSection />;
      case "resume":
        return <ResumeSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-background text-foreground">
      {/* Sticky Header with Toggle */}
      <header className="sticky top-0 z-50 flex justify-end p-4 bg-background/80 backdrop-blur-md border-b border-border">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-accent transition-colors border border-border shadow-sm"
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700" />
          )}
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {renderSection()}
      </main>
    </div>
  );
}
