"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type SoundType = "click" | "hover" | "navigate" | "toggle";

interface SoundContextProps {
  playSound: (sound: SoundType) => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextProps | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [sounds, setSounds] = useState<Record<SoundType, HTMLAudioElement | null>>({
    click: null,
    hover: null,
    navigate: null,
    toggle: null,
  });

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize sounds on client side only
    if (typeof window !== "undefined" && !isInitialized) {
      setSounds({
        click: new Audio("/sounds/click.mp3"),
        hover: new Audio("/sounds/hover.mp3"),
        navigate: new Audio("/sounds/navigate.mp3"),
        toggle: new Audio("/sounds/toggle.mp3"),
      });

      // Check if sound is enabled from localStorage
      const storedSoundEnabled = localStorage.getItem("soundEnabled");
      if (storedSoundEnabled !== null) {
        setIsSoundEnabled(storedSoundEnabled === "true");
      }

      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Save sound preference to localStorage when it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("soundEnabled", isSoundEnabled.toString());
    }
  }, [isSoundEnabled, isInitialized]);

  const playSound = (sound: SoundType) => {
    if (!isSoundEnabled || !sounds[sound]) return;

    // Clone the audio element to allow for rapid successive plays
    const audioClone = sounds[sound]!.cloneNode() as HTMLAudioElement;
    audioClone.volume = 0.3; // Lower volume to not be too intrusive
    audioClone.play().catch(error => {
      // Ignore play errors - common when user hasn't interacted with page yet
      console.log("Audio play error (likely needs user interaction first):", error);
    });
  };

  const toggleSound = () => {
    setIsSoundEnabled(prev => !prev);
    playSound("toggle");
  };

  return (
    <SoundContext.Provider value={{ playSound, isSoundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
