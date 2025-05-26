"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useSoundEffect } from "@/hooks/useSoundEffect";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  isThemeLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const { playSound, preloadSound } = useSoundEffect({ volume: 0.4 });

  useEffect(() => {
    preloadSound('/sounds/snap.mp3');
  }, [preloadSound]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme) {
      setTheme(storedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
    setIsThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (!isThemeLoaded) return;

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    document.body.style.transition = "background-color 0.5s ease, color 0.5s ease";

  }, [theme, isThemeLoaded]);

  const toggleTheme = useCallback(() => {
    playSound("themeChange");
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }, [playSound]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isThemeLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}