"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useSound } from "@/contexts/sound-context";

interface SoundPixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
  soundType?: "click" | "navigate";
}

export function SoundPixelButton({
  variant = "primary",
  size = "default",
  children,
  className,
  soundType = "click",
  onMouseEnter,
  onClick,
  ...props
}: SoundPixelButtonProps) {
  const { playSound } = useSound();

  const baseClasses = "pixel-button font-pixel transition-all";

  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline: "border-2 border-primary bg-background hover:bg-primary/10",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  const sizeClasses = {
    default: "py-2 px-4 text-sm",
    sm: "py-1 px-3 text-xs",
    lg: "py-3 px-6 text-base",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound("hover");
    onMouseEnter?.(e);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playSound(soundType);
    onClick?.(e);
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
