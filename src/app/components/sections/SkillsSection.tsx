"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { skillsData, Skill } from "@/data/portfolio-data";

export function SkillsSection() {
  const categories: Skill["category"][] = ['frontend', 'backend', 'languages', 'tools'];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="game-container">
        <h2 className="text-2xl font-pixel text-primary mb-6 text-center">SKILL TREE</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category} className="p-6 pixel-corners overflow-hidden">
              <h3 className="font-pixel text-primary text-lg mb-4 text-center uppercase">
                {category}
              </h3>

              <div className="space-y-5">
                {skillsData
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center text-sm">
                        <span>{skill.name}</span>
                        <span className="text-xs font-pixel">{skill.level}/100</span>
                      </div>
                      <div className="relative h-2.5 w-full rounded-sm overflow-hidden border border-[#333]">
                        <div
                          className="h-full bg-gradient-to-r from-primary/80 to-primary"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}