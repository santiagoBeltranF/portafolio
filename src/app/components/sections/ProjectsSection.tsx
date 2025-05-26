"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { projectsData } from "@/data/portfolio-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="game-container">
        <h2 className="text-2xl font-pixel text-primary mb-8 text-center">COMPLETED QUESTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.title}
              className={`p-0 overflow-hidden pixel-corners transition-transform hover:-translate-y-1 ${
                !project.completed ? 'opacity-70 grayscale' : ''
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {!project.completed && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="font-pixel text-white text-lg">LOCKED</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-pixel text-primary text-lg">{project.title}</h3>
                  {project.completed && (
                    <img
                      src="/images/pixel-heart.png"
                      alt="Completed"
                      className="w-6 h-6 object-contain"
                    />
                  )}
                </div>

                <p className="text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-muted rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.completed && (
                  <div className="flex gap-3 mt-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-button inline-block text-xs"
                      >
                        LIVE DEMO
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-button inline-block bg-secondary text-secondary-foreground text-xs"
                      >
                        VIEW CODE
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}