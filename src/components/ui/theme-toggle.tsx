"use client";

import React from "react";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className, onMouseEnter, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={onMouseEnter}
      className={cn(
        "relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all focus:outline-none",
        theme === "dark"
          ? "border-primary/60 bg-[#1a1a2e]"
          : "border-primary/60 bg-[#ffedeb]",
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500 transform",
          theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0 rotate-180"
        )}
      >
        <img
          src="/images/moon.png"
          alt="Moon"
          className="w-8 h-8 object-contain animate-pulse-pixel"
        />
      </div>

      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500 transform",
          theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-0 rotate-180"
        )}
      >
        <img
          src="/images/sun.png"
          alt="Sun"
          className="w-8 h-8 object-contain animate-pulse-pixel"
        />
      </div>

      {/* Pixel stars background for night mode */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-70 transition-opacity duration-500",
          theme === "dark" ? "opacity-70" : "opacity-0"
        )}
      >
        <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-3 left-6 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-8 left-2 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-7 left-8 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-4 left-10 w-1 h-1 bg-white rounded-full"></div>
      </div>

      {/* Pixel clouds for day mode */}
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-70 transition-opacity duration-500",
          theme === "light" ? "opacity-70" : "opacity-0"
        )}
      >
        <div className="absolute top-2 left-2 w-3 h-2 bg-white rounded-full"></div>
        <div className="absolute top-2 left-4 w-3 h-2 bg-white rounded-full"></div>
        <div className="absolute top-6 left-7 w-3 h-2 bg-white rounded-full"></div>
        <div className="absolute top-6 left-9 w-3 h-2 bg-white rounded-full"></div>
      </div>
    </button>
  );
}