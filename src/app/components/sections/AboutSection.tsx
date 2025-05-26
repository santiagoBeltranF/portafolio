"use client";

import React from "react";
import { DialogBox } from "@/components/ui/dialog-box";
import { StatBar } from "@/components/ui/stat-bar";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="game-container">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <div className="pixel-corners bg-card p-6 border-2 border-primary">
              <div className="text-center mb-6">
                <img
                  src="/images/pixel-programmer.png"
                  alt="Character Avatar"
                  className="w-24 h-24 mx-auto object-contain mb-4"
                />
                <h2 className="text-xl font-pixel text-primary">PROGRAMMER</h2>
                <p className="text-xs text-muted-foreground">Level 30 Code Wizard</p>
              </div>

              <div className="space-y-4">
                <StatBar
                  type="health"
                  value={95}
                  maxValue={100}
                  label="Energy"
                />
                <StatBar
                  type="mana"
                  value={80}
                  maxValue={100}
                  label="Creativity"
                />
                <StatBar
                  type="experience"
                  value={75}
                  maxValue={100}
                  label="Experience"
                />
                <StatBar
                  type="skill"
                  value={85}
                  maxValue={100}
                  label="Problem Solving"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-muted p-3 rounded-sm text-center">
                  <p className="text-xs font-pixel">Projects</p>
                  <p className="text-lg font-bold">5</p>
                </div>
                <div className="bg-muted p-3 rounded-sm text-center">
                  <p className="text-xs font-pixel">Years</p>
                  <p className="text-lg font-bold">1.5+</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl font-pixel text-primary mb-6">CHARACTER PROFILE</h2>

            <DialogBox
              text="Greetings, adventurer! I'm a passionate software developer with experience in building modern web applications. I specialize in frontend development with Angular, but I am also skilled in backend technologies such as Java and various databases."
              speaker="Developer"
              avatar="/images/pixel-programmer.png"
              className="mb-6"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="p-4 pixel-corners">
                <h3 className="font-pixel text-primary text-sm mb-2">BACKGROUND</h3>
                <p className="text-sm">Over 1.5 years of experience in web development, with a strong background in both frontend and backend. My primary focus is on creating accessible, performant, and visually appealing applications, managing the development of end-to-end solutions.</p>
              </Card>

              <Card className="p-4 pixel-corners">
                <h3 className="font-pixel text-primary text-sm mb-2">MISSION</h3>
                <p className="text-sm">To craft elegant solutions to complex problems and create intuitive user experiences that delight users.</p>
              </Card>

              <Card className="p-4 pixel-corners">
                <h3 className="font-pixel text-primary text-sm mb-2">SPECIAL ABILITIES</h3>
                <ul className="text-sm space-y-1">
                  <li>• Responsive Design Mastery</li>
                  <li>• Component Architecture</li>
                  <li>• Performance Optimization</li>
                </ul>
              </Card>

              <Card className="p-4 pixel-corners">
                  <h3 className="font-pixel text-primary text-sm mb-2">MICROSERVICES EXPERTISE</h3>
                  <ul className="text-sm space-y-1">
                      <li>• Microservices Architecture & Design</li>
                      <li>• API Development</li>
                      <li>• Containerization</li>
                      <li>• Distributed Systems & Scalability</li>
                      <li>• UI/UX Design</li>
                  </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}