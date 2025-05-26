"use client";

import React from "react";
import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
        theme === "dark"
          ? "border-primary/60 bg-[#1a1a2e] hover:bg-[#22223a]"
          : "border-primary/60 bg-[#ffedeb] hover:bg-[#ffe0db]",
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500 transform",
          theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"
        )}
      >
        <img
          src="/images/moon.png"
          alt="Moon"
          className="w-7 h-7 object-contain animate-pulse-pixel"
        />
      </div>

      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500 transform",
          theme === "light" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 rotate-90"
        )}
      >
        <img
          src="/images/sun.png"
          alt="Sun"
          className="w-7 h-7 object-contain animate-pulse-pixel"
        />
      </div>

      <div
        className={cn(
          "absolute inset-0 z-0 transition-opacity duration-700",
          theme === "dark" ? "opacity-50" : "opacity-0 pointer-events-none"
        )}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-pulse-pixel-fast"
            style={{
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              opacity: Math.random() * 0.4 + 0.3,
            }}
          />
        ))}
      </div>

      <div
        className={cn(
          "absolute inset-0 z-0 transition-opacity duration-700",
          theme === "light" ? "opacity-40" : "opacity-0 pointer-events-none"
        )}
      >
         {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`cloud-${i}`}
            className="absolute bg-white/80 rounded-full animate-pulse-pixel-slow"
            style={{
              width: `${Math.random() * 10 + 8}px`,
              height: `${(Math.random() * 10 + 8) / 2}px`,
              top: `${Math.random() * 60 + 20}%`, 
              left: `${Math.random() * 70 + 15}%`,
              opacity: Math.random() * 0.3 + 0.2,
            }}
          />
        ))}
      </div>
    </button>
  );
}