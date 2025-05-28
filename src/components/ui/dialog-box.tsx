import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface DialogBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  speaker?: string;
  typewriterEffect?: boolean;
  typingSpeed?: number;
  onComplete?: () => void;
  avatar?: string;
}

export function DialogBox({
  text,
  speaker,
  typewriterEffect = true,
  typingSpeed = 40,
  onComplete,
  avatar, 
  className,
  ...props
}: DialogBoxProps) {
  const [displayedText, setDisplayedText] = useState(typewriterEffect ? "" : text);
  const [isTyping, setIsTyping] = useState(typewriterEffect);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (!typewriterEffect) return;

    if (currentCharIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }

    setIsTyping(false);
    onComplete?.();
  }, [currentCharIndex, text, typewriterEffect, typingSpeed, onComplete]);

  const finalAvatarSrc = avatar && avatar.startsWith('/') ? `${basePath}${avatar}` : avatar;

  return (
    <Card className={cn("dialog-box flex flex-col overflow-hidden", className)} {...props}>
      {speaker && (
        <div className="flex items-center gap-3 px-3 py-2 font-pixel text-sm bg-muted mb-2">
          {finalAvatarSrc && (
            <img
              src={finalAvatarSrc}
              alt={speaker}
              className="w-8 h-8 object-contain rounded-full border-2 border-primary"
            />
          )}
          <span>{speaker}</span>
        </div>
      )}
      <div className="p-4 font-pixel text-sm leading-relaxed">
        {displayedText}
        {isTyping && <span className="cursor-blink">▮</span>}
      </div>
      {!isTyping && typewriterEffect && (
        <div className="self-end px-4 py-2">
          <span className="text-xs font-pixel animate-pulse">▼ Click to continue</span>
        </div>
      )}
    </Card>
  );
}