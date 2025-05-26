"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/theme-context";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Github, Linkedin } from "lucide-react";

interface GameLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function GameLayout({ children, className }: GameLayoutProps) {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700">
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
                key={`star-bg-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity: Math.random() * 0.7 + 0.3,
                  animation: `pulse-pixel ${animationDuration}s infinite`,
                }}
              />
            );
          })}
        </div>

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
                key={`cloud-bg-${i}`}
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

        <div
          className={cn(
            "absolute inset-0 transition-colors duration-700",
            theme === "dark"
              ? "bg-gradient-to-b from-[#0f172a]/50 to-transparent opacity-100"
              : "bg-gradient-to-b from-sky-300/30 to-transparent opacity-100"
          )}
        />
      </div>

      <Navbar />
      <main className={cn("flex-1 pt-20 relative z-10", className)}>
        {children}
      </main>
      
      <footer className="relative z-10 mt-24 border-t-4 border-primary/50 bg-background/70 backdrop-blur-sm shadow-2xl shadow-primary/20">
        <div 
          className="absolute inset-x-0 top-0 h-2 bg-repeat-x opacity-50"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='10' viewBox='0 0 20 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L10 10 L20 0 Z' fill='%23FF7D7D'/%3E%3C/svg%3E\")",
            backgroundSize: '20px 10px',
          }}
        />
        <div className="game-container py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-3">
                <img src="/images/pixel-programmer.png" alt="Logo" className="w-10 h-10 object-contain" />
                <h3 className="font-pixel text-xl text-primary">SANTIAGO BELTRAN</h3>
              </div>
              <p className="text-sm text-muted-foreground font-pixel tracking-wider">
                Level Up Your Digital Presence.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-pixel text-lg text-primary mb-4 border-b-2 border-primary/30 pb-2 inline-block">
                NAVIGATION
              </h3>
              <div className="flex flex-col space-y-2 items-center">
                {['#home', '#about', '#skills', '#projects', '#contact'].map(link => (
                  <a 
                    key={link}
                    href={link} 
                    className="font-pixel text-sm text-foreground/80 hover:text-primary hover:translate-x-1 transition-all duration-200 ease-in-out group"
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.substring(1);
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    <span className="group-hover:text-accent mr-1 transition-colors duration-200">{'>'}</span> {link.substring(1).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right flex flex-col items-center md:items-end">
              <h3 className="font-pixel text-lg text-primary mb-4">CONNECT</h3>
              <div className="flex justify-center md:justify-end gap-5 mb-6">
                <a
                  href="https://github.com/santiagoBeltranF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-transform duration-200 hover:scale-125 group"
                  aria-label="Github"
                >
                  <Github className="w-8 h-8 " />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs bg-card text-card-foreground px-2 py-1 rounded-md shadow-lg font-pixel">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/santiago-beltran-florez-4890052b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-transform duration-200 hover:scale-125 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-8 h-8" />
                   <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs bg-card text-card-foreground px-2 py-1 rounded-md shadow-lg font-pixel">
                    LinkedIn
                  </span>
                </a>
              </div>
              <div className="flex justify-center md:justify-end mt-4 gap-4 sm:hidden">
                <ThemeToggle />
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-2 border-primary/20 text-center">
            <p className="text-xs text-muted-foreground font-pixel">
              © {new Date().getFullYear()} SANTIAGO BELTRAN. ALL RIGHTS RESERVED.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Designed & Coded with <span className="text-red-500 animate-pulse">❤</span> and Pixels.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}