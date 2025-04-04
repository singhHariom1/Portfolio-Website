import { useState, useEffect } from "react";
import { Moon, Sun, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }

    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="p-2 rounded-full hover:bg-accent/20 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme"
      >
        <Palette className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 glass rounded-lg shadow-lg py-2 z-50">
          <button
            className={cn(
              "flex items-center w-full px-4 py-2 text-left hover:bg-accent/20 transition-colors",
              theme === "light" && "text-accent"
            )}
            onClick={() => toggleTheme("light")}
          >
            <Sun className="w-4 h-4 mr-2" />
            Light
          </button>
          <button
            className={cn(
              "flex items-center w-full px-4 py-2 text-left hover:bg-accent/20 transition-colors",
              theme === "dark" && "text-accent"
            )}
            onClick={() => toggleTheme("dark")}
          >
            <Moon className="w-4 h-4 mr-2" />
            Dark
          </button>
          <button
            className={cn(
              "flex items-center w-full px-4 py-2 text-left hover:bg-accent/20 transition-colors",
              theme === "system" && "text-accent"
            )}
            onClick={() => toggleTheme("system")}
          >
            <svg
              className="w-4 h-4 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="4"
                width="20"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M12 16V8" stroke="currentColor" strokeWidth="2" />
              <path d="M8 12L16 12" stroke="currentColor" strokeWidth="2" />
            </svg>
            System
          </button>
        </div>
      )}
    </div>
  );
}
