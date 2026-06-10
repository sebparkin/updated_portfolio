import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

const setThemeColor = (isDark) => {
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", isDark ? "#27272a" : "#fafaf9");
};

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (prefersDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    setThemeColor(prefersDark);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      setThemeColor(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      setThemeColor(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-colors",
        "duration-300 focus:outline-hidden",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-foreground" />
      ) : (
        <Moon className="h-6 w-6 text-foreground" />
      )}
    </button>
  );
};
