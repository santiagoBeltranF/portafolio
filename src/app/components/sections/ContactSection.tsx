"use client";

import React from "react";
import { DialogBox } from "@/components/ui/dialog-box";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PixelButton } from "@/components/ui/pixel-button";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Mail, Copy, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const email = "santiagobf08@gmail.com";
  const [_copiedText, copyToClipboard, _resetCopied, isCopied] = useCopyToClipboard();

  const handleCopyEmail = () => {
    copyToClipboard(email);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="game-container">
        <div className="max-w-2xl mx-auto"> 
          <h2 className="text-3xl font-pixel text-primary mb-8 text-center">
            START A NEW QUEST
          </h2>

          <DialogBox
            text="Ready to collaborate or have a question? The best way to reach me is via email. Copy my address below and let's make something awesome!"
            speaker="Santiago"
            avatar="/images/pixel-programmer.png"
            className="mb-10 text-base"
            typewriterEffect={false}
          />

          <Card className="pixel-corners border-2 border-primary/60 shadow-lg overflow-hidden">
            <CardHeader className="bg-card-muted/50 p-4 border-b border-primary/30">
              <CardTitle className="font-pixel text-lg text-primary flex items-center gap-2 justify-center">
                <Mail className="w-5 h-5" />
                GET IN TOUCH
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 flex flex-col items-center gap-6">
              <p className="text-center text-muted-foreground text-sm">
                Feel free to send me an email at:
              </p>
              
              <div 
                className="bg-background border-2 border-dashed border-primary/40 p-4 rounded-md w-full max-w-md sm:max-w-lg text-center relative group" 
              >
                <span 
                  className="font-pixel text-base sm:text-lg text-foreground whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {email}
                </span>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-md shadow-md font-pixel whitespace-nowrap">
                  Click button to copy
                </div>
              </div>

              <PixelButton
                onClick={handleCopyEmail}
                size="default"
                variant={isCopied ? "secondary" : "primary"}
                className="px-6 py-2.5 w-auto min-w-[180px] max-w-xs transition-all duration-150 ease-in-out" 
              >
                {isCopied ? (
                  <> 
                    <CheckCircle2 className="w-4 h-4 shrink-0" /> 
                    <span>COPIED!</span>
                  </>
                ) : (
                  <> 
                    <Copy className="w-4 h-4 shrink-0" /> 
                    <span>COPY EMAIL</span>
                  </>
                )}
              </PixelButton>
              {isCopied && (
                <p className="text-xs text-green-500 font-pixel animate-pulse">
                  Email copied to clipboard!
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}