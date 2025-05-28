import type React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type StatBarType = "health" | "mana" | "experience" | "skill";

interface StatBarProps extends React.HTMLAttributes<HTMLDivElement> {
  type: StatBarType;
  value: number;
  maxValue: number;
  showIcon?: boolean;
  showText?: boolean;
  label?: string;
}

export function StatBar({
  type,
  value,
  maxValue,
  showIcon = true,
  showText = true,
  label,
  className,
  ...props
}: StatBarProps) {
  const percentage = Math.floor((value / maxValue) * 100);

  const barClasses = {
    health: "health-bar",
    mana: "mana-bar",
    experience: "xp-bar",
    skill: "skill-bar",
  };

  const icons = {
    health: "/images/pixel-heart.png",
    mana: "/images/pixel-potion.png",
    experience: "/images/pixel-star.png",
    skill: "/images/pixel-skill.png",
  };

  return (
    <div className={cn("flex flex-col space-y-1", className)} {...props}>
      {label && (
        <div className="flex justify-between text-xs font-pixel mb-1">
          <span>{label}</span>
          {showText && (
            <span>
              {value}/{maxValue}
            </span>
          )}
        </div>
      )}
      <div className="flex items-center gap-2">
        {showIcon && icons[type] && (
          <img
            src={`${basePath}${icons[type]}`}
            alt={`${type} icon`}
            className="w-6 h-6 object-contain"
          />
        )}
        <Progress
          value={percentage}
          className={cn("h-4 w-full", barClasses[type])}
        />
      </div>
    </div>
  );
}