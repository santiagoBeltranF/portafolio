"use client";

import React from "react";
import { SoundProvider } from "@/contexts/sound-context";
import { ThemeProvider } from "@/contexts/theme-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SoundProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SoundProvider>
  );
}
