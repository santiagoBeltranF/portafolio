"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/theme-context";
import { SoundToggle, ThemeToggle } from "@/components/ui/theme-toggle"; // <--- CORRECCIÓN AQUÍ

interface GameLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function GameLayout({ children, className }: GameLayoutProps) {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Day/Night cycle animation */}
      <div className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700">
        {/* Stars (only visible in dark mode) */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            theme === "dark" ? "opacity-70" : "opacity-0"
          )}
        >
          {Array.from({ length: 50 }).map((_, i) => {
            const size = Math.random() * 2 + 1;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 2;

            return (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity: Math.random() * 0.7 + 0.3,
                  animation: `pulse-pixel ${animationDuration}s infinite`
                }}
              />
            );
          })}
        </div>

        {/* Clouds (only visible in light mode) */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            theme === "light" ? "opacity-30" : "opacity-0"
          )}
        >
          {Array.from({ length: 10 }).map((_, i) => {
            const width = Math.random() * 100 + 50;
            const top = Math.random() * 50;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 100 + 50;

            return (
              <div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${width}px`,
                  height: `${width / 2}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity: Math.random() * 0.3 + 0.1,
                  animation: `float ${animationDuration}s linear infinite`,
                }}
              />
            );
          })}
        </div>

        {/* Color overlay for day/night */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            theme === "dark"
              ? "bg-gradient-to-b from-[#0f172a]/30 to-[#0f172a]/0 opacity-100"
              : "bg-gradient-to-b from-[#ffedeb]/30 to-[#ffedeb]/0 opacity-0"
          )}
        />
      </div>

      <Navbar />
      <main className={cn("flex-1 pt-20 relative z-10", className)}>
        {children}
      </main>
      <footer className="bg-muted border-t-2 border-primary/30 py-4 mt-16 relative z-10">
        <div className="game-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-pixel text-sm text-primary mb-2">GAME DEV PORTFOLIO</h3>
              <p className="text-xs text-muted-foreground">A showcase of coding skills and projects.</p>
            </div>

            <div className="text-center">
              <h3 className="font-pixel text-sm text-primary mb-2">QUICK LINKS</h3>
              <div className="flex flex-col space-y-1">
                <a href="#home" className="text-xs hover:text-primary transition-colors">Home</a>
                <a href="#about" className="text-xs hover:text-primary transition-colors">About</a>
                <a href="#skills" className="text-xs hover:text-primary transition-colors">Skills</a>
                <a href="#projects" className="text-xs hover:text-primary transition-colors">Projects</a>
                <a href="#contact" className="text-xs hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="font-pixel text-sm text-primary mb-2">CONNECT</h3>
              <div className="flex justify-center md:justify-end gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Github"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Game Dev Portfolio. All rights reserved.
            </p>

            <div className="flex justify-center mt-4 gap-4 sm:hidden">
              <SoundToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}