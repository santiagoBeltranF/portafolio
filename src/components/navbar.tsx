"use client";

import React, { useState, useEffect } from "react";
import { PixelButton } from "@/components/ui/pixel-button";
import { StatBar } from "@/components/ui/stat-bar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useSoundEffect } from "@/hooks/useSoundEffect";
import { useI18n, Locale, TranslationKey } from "@/contexts/i18n-context"; 

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} >
    <line x1="3" y1="12" x2="21" y2="12" /> <line x1="3" y1="6" x2="21" y2="6" /> <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props} >
    <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


interface NavItem {
  labelKey: Extract<TranslationKey, "navbar.home" | "navbar.about" | "navbar.skills" | "navbar.projects" | "navbar.contact">;
  href: string;
}

const navItemsConfig: NavItem[] = [
  { labelKey: "navbar.home", href: "#home" },
  { labelKey: "navbar.about", href: "#about" },
  { labelKey: "navbar.skills", href: "#skills" },
  { labelKey: "navbar.projects", href: "#projects" },
  { labelKey: "navbar.contact", href: "#contact" },
];

export function Navbar() {
  const { locale, setLocale, t } = useI18n(); 
  const [activeItem, setActiveItem] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { playSound, preloadSound } = useSoundEffect({ volume: 0.4 }); 

  useEffect(() => {
    preloadSound('/sounds/mouse_click.mp3');
    preloadSound('/sounds/change-idiom.mp3');
  }, [preloadSound]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (position / height) * 100 : 0;
      setScrollProgress(progress);

      const sections = document.querySelectorAll('section[id]');
      let currentActive = activeItem;

      if (position < (document.getElementById('about')?.offsetTop ?? 200) - 150) {
        currentActive = "#home";
      } else {
        for (const section of sections) {
          const sectionEl = section as HTMLElement;
          const sectionTop = sectionEl.offsetTop - 150;
          const sectionBottom = sectionTop + sectionEl.offsetHeight;
          
          if (position >= sectionTop && position < sectionBottom) {
            currentActive = `#${sectionEl.id}`;
            break;
          }
        }
      }
      
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
            currentActive = `#${lastSection.getAttribute('id')}`;
        }
      }

      if (activeItem !== currentActive) {
        setActiveItem(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeItem]);

  const handleNavClick = (href: string, event?: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (event) event.preventDefault();
    playSound("navigate");
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveItem(href); 
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    playSound("click");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (lang: Locale) => {
    playSound("languageChange");
    setLocale(lang);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b-2 border-primary/30 shadow-md">
        <div className="game-container py-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <a
                href="#home"
                className="flex items-center gap-2 cursor-pointer"
                onClick={(e) => handleNavClick("#home", e)}
              >
                <img
                  src={`${basePath}/images/pixel-programmer.png`}
                  alt={t("navbar.santiago")}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-pixel text-primary">{t("navbar.santiago")}</span>
              </a>

              <nav className="hidden md:flex items-center gap-1"> 
                {navItemsConfig.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`text-xs font-pixel py-1 px-2 transition-colors ${
                      activeItem === item.href
                        ? "text-primary border-b-2 border-primary"
                        : "text-foreground/70 hover:text-primary"
                    }`}
                    onClick={(e) => handleNavClick(item.href, e)}
                  >
                    {t(item.labelKey)}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-2"> 
                <div className="hidden md:flex items-center gap-1">
                  <PixelButton
                    size="sm"
                    variant={locale === 'en' ? 'primary' : 'outline'}
                    onClick={() => handleLanguageChange('en')}
                    className={`!px-2 !py-1 ${locale === 'en' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                    aria-label={t('lang.en')}
                  >
                    {t('lang.en')}
                  </PixelButton>
                  <PixelButton
                    size="sm"
                    variant={locale === 'es' ? 'primary' : 'outline'}
                    onClick={() => handleLanguageChange('es')}
                    className={`!px-2 !py-1 ${locale === 'es' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                    aria-label={t('lang.es')}
                  >
                    {t('lang.es')}
                  </PixelButton>
                </div>

                <ThemeToggle className="hidden sm:block" />
                <PixelButton
                  variant="primary"
                  size="sm"
                  className="md:hidden !p-2"
                  onClick={toggleMobileMenu}
                  aria-label={isMobileMenuOpen ? t("navbar.home") : t("navbar.home")}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
                </PixelButton>
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

      {isMobileMenuOpen && (
        <nav 
            className="md:hidden fixed top-[84px] left-0 w-full bg-background/95 backdrop-blur-sm shadow-lg z-40 border-b-2 border-primary/30 animate-in fade-in-20 slide-in-from-top-6 duration-300"
        >
          <div className="game-container flex flex-col items-center py-4 space-y-3">
            {navItemsConfig.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className={`text-lg font-pixel py-2 transition-colors w-full text-center ${
                  activeItem === item.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {t(item.labelKey)}
              </a>
            ))}
            <div className="flex items-center gap-2 mt-4">
                <PixelButton
                    size="sm"
                    variant={locale === 'en' ? 'primary' : 'outline'}
                    onClick={() => handleLanguageChange('en')}
                    className={`!px-3 !py-1.5 ${locale === 'en' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                    aria-label={t('lang.en')}
                >
                    {t('lang.en')}
                </PixelButton>
                <PixelButton
                    size="sm"
                    variant={locale === 'es' ? 'primary' : 'outline'}
                    onClick={() => handleLanguageChange('es')}
                    className={`!px-3 !py-1.5 ${locale === 'es' ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                    aria-label={t('lang.es')}
                >
                    {t('lang.es')}
                </PixelButton>
            </div>
            <div className="mt-4 sm:hidden">
                <ThemeToggle />
            </div>
          </div>
        </nav>
      )}
    </>
  );
}