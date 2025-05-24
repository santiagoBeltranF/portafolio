"use client";

import React from "react";
import { useTheme } from "@/contexts/theme-context";
import { useSound } from "@/contexts/sound-context";
import { cn } from "@/lib/utils";

// Ya no se necesita la interfaz ThemeToggleProps porque estaba vacía
// interface ThemeToggleProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function ThemeToggle({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  const { theme, toggleTheme } = useTheme();
  const { playSound } = useSound();

  const handleMouseEnter = () => {
    playSound("hover");
  };

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={handleMouseEnter}
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

// Sound toggle component
// Ya no se necesita la interfaz SoundToggleProps porque estaba vacía
// interface SoundToggleProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function SoundToggle({ className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  const { isSoundEnabled, toggleSound } = useSound();

  return (
    <button
      onClick={toggleSound}
      className={cn(
        "relative w-10 h-10 rounded-full overflow-hidden border-2 transition-all focus:outline-none",
        isSoundEnabled ? "border-primary/60 bg-primary/20" : "border-muted bg-muted/30",
        className
      )}
      aria-label={`Sound ${isSoundEnabled ? "on" : "off"}`}
      {...props}
    >
      {/* Sound on icon */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isSoundEnabled ? "opacity-100" : "opacity-0 scale-0"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      </div>

      {/* Sound off icon */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          !isSoundEnabled ? "opacity-100" : "opacity-0 scale-0"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      </div>
    </button>
  );
}