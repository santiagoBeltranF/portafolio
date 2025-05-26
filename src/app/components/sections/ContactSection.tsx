"use client";

import React from "react";
import { DialogBox } from "@/components/ui/dialog-box";
import { Card } from "@/components/ui/card";
import { PixelButton } from "@/components/ui/pixel-button";

export function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Message sent (not really)!");
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="game-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-pixel text-primary mb-8 text-center">START A NEW QUEST</h2>

          <DialogBox
            text="Interested in working together? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Fill out the form below to begin our adventure!"
            speaker="Developer"
            avatar="/images/pixel-programmer.png"
            className="mb-8"
          />

          <Card className="p-6 pixel-corners">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-pixel">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full p-3 bg-background border-2 border-primary/50 pixel-corners focus:outline-none focus:border-primary"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-pixel">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full p-3 bg-background border-2 border-primary/50 pixel-corners focus:outline-none focus:border-primary"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-pixel">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  className="w-full p-3 bg-background border-2 border-primary/50 pixel-corners focus:outline-none focus:border-primary"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-pixel">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-3 bg-background border-2 border-primary/50 pixel-corners focus:outline-none focus:border-primary resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <div className="flex justify-end">
                <PixelButton type="submit" size="lg">
                  SEND MESSAGE
                </PixelButton>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}