"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PixelButton } from "@/components/ui/pixel-button"; // <--- SoundPixelButton se reemplazará por PixelButton
// import { SoundPixelButton } from "@/components/ui/sound-pixel-button"; // <--- ELIMINAR ESTA LÍNEA
import { StatBar } from "@/components/ui/stat-bar";
import { ThemeToggle } from "@/components/ui/theme-toggle"; // <--- SoundToggle se eliminará
// import { SoundToggle } from "@/components/ui/theme-toggle"; // <--- ELIMINAR ESTA LÍNEA
// import { useSound } from "@/contexts/sound-context"; // <--- ELIMINAR ESTA LÍNEA

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [activeItem, setActiveItem] = useState("#home");
  // const { playSound } = useSound(); // <--- ELIMINAR ESTA LÍNEA

  // Scroll progress - works as XP bar
  const [scrollProgress, setScrollProgress] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = (position / height) * 100;
      setScrollProgress(progress);

      // Update active nav item based on scroll position
      const sections = document.querySelectorAll('section[id]');

      for (const section of sections) {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = `#${section.getAttribute('id')}`;

        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          setActiveItem(sectionId);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    // playSound("navigate"); // <--- ELIMINAR ESTA LÍNEA
    setActiveItem(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b-2 border-primary/30 shadow-md">
      <div className="game-container py-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Link
              href="#home"
              className="flex items-center gap-2"
              onClick={() => handleNavClick("#home")}
            >
              <img
                src="/images/pixel-programmer.png"
                alt="Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-pixel text-primary">SANTIAGO</span>
            </Link>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs font-pixel py-1 px-2 transition-colors ${
                      activeItem === item.href
                        ? "text-primary border-b-2 border-primary"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                    onClick={() => handleNavClick(item.href)}
                    // onMouseEnter={() => playSound("hover")} // <--- ELIMINAR ESTA LÍNEA
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-1">
                {/* <SoundToggle className="hidden sm:block" /> */} {/* <--- ELIMINAR ESTA LÍNEA */}
                <ThemeToggle className="hidden sm:block" />

                <PixelButton // <--- CAMBIAR SoundPixelButton a PixelButton
                  variant="primary"
                  size="sm"
                  className="md:hidden"
                  // soundType="click" // <--- ELIMINAR ESTA PROPIEDAD
                  onClick={() => alert('Mobile menu not implemented yet!')}
                >
                  MENU
                </PixelButton>
              </div>
            </div>
          </div>

          <div className="w-full">
            <StatBar
              type="experience"
              value={scrollProgress}
              maxValue={100}
              showIcon={false}
              showText={false}
            />
          </div>
        </div>
      </div>
    </header>
  );
}