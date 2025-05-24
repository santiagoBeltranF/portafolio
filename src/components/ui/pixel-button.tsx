
import type React from "react";
import { cn } from "@/lib/utils";

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "destructive";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export function PixelButton({
  variant = "primary",
  size = "default",
  children,
  className,
  ...props
}: PixelButtonProps) {
  const baseClasses = "pixel-button font-pixel transition-all";

  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline: "border-2 border-primary bg-background text-foreground hover:bg-primary/10 hover:text-primary",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };

  const sizeClasses = {
    default: "py-2 px-4 text-sm",
    sm: "py-1 px-3 text-xs",
    lg: "py-3 px-6 text-base",
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}