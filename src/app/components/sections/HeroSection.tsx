"use client";

import React from "react";
import { PixelButton } from "@/components/ui/pixel-button";
import { useSoundEffect } from "@/hooks/useSoundEffect";
import { useI18n } from "@/contexts/i18n-context"; 

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function HeroSection() {
  const { t } = useI18n(); 
  const { playSound, preloadSound } = useSoundEffect({ volume: 0.3 });

  React.useEffect(() => {
    preloadSound('/sounds/mouse_click.mp3');
  }, [preloadSound]);

  const handleStartGameClick = () => {
    playSound("click");
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    playSound("click");
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-pixel-pattern" />
      <div className="game-container text-center relative z-10">
        <div className="mb-8 animate-float">
          <img
            src={`${basePath}/images/pixel-programmer.png`}
            alt={t('about.avatar.title')}
            className="w-96 h-96 mx-auto object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-pixel text-primary mb-4">
          {t('hero.name')} <span className="text-foreground">{t('hero.lastname')}</span>
        </h1>
        <p className="text-lg md:text-xl font-pixel text-muted-foreground mb-8">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <PixelButton
            onClick={handleStartGameClick}
            size="lg"
          >
            {t('hero.startGame')}
          </PixelButton>
          <PixelButton
            variant="outline"
            onClick={handleContactClick}
            size="lg"
          >
            {t('hero.contact')}
          </PixelButton>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true" 
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}