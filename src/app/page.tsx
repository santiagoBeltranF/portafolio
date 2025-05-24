"use client";

import React from "react";
import { GameLayout } from "@/components/game-layout";
import { DialogBox } from "@/components/ui/dialog-box";
import { StatBar } from "@/components/ui/stat-bar";
import { PixelButton } from "@/components/ui/pixel-button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Define skill data
interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "languages" | "tools";
  icon?: string;
}

const skills: Skill[] = [
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "TypeScript", level: 85, category: "languages" },
  { name: "React", level: 92, category: "frontend" },
  { name: "Next.js", level: 88, category: "frontend" },
  { name: "CSS/SCSS", level: 85, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Git", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 65, category: "tools" },
];

// Define project data
interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  completed: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with React, Next.js, and Stripe integration.",
    tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    imageUrl: "https://via.placeholder.com/300x200/FF7D7D/FFFFFF?text=E-Commerce",
    demoUrl: "#",
    githubUrl: "#",
    completed: true,
  },
  {
    title: "Task Management App",
    description: "A task manager with drag-and-drop functionality and real-time updates.",
    tags: ["React", "Firebase", "React DnD"],
    imageUrl: "https://via.placeholder.com/300x200/FF7D7D/FFFFFF?text=Task+Manager",
    demoUrl: "#",
    githubUrl: "#",
    completed: true,
  },
  {
    title: "Social Media Dashboard",
    description: "A responsive dashboard that displays social media analytics.",
    tags: ["React", "Chart.js", "Node.js"],
    imageUrl: "https://via.placeholder.com/300x200/FF7D7D/FFFFFF?text=Dashboard",
    demoUrl: "#",
    githubUrl: "#",
    completed: false,
  },
  {
    title: "Weather App",
    description: "A weather application with geolocation and 5-day forecast.",
    tags: ["JavaScript", "Weather API", "CSS"],
    imageUrl: "https://via.placeholder.com/300x200/FF7D7D/FFFFFF?text=Weather+App",
    demoUrl: "#",
    githubUrl: "#",
    completed: true,
  },
];

export default function Home() {
  return (
    <GameLayout>
      {/* Hero Section - Title Screen */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-pixel-pattern" />
        <div className="game-container text-center relative z-10">
          <div className="mb-8 animate-float">
            <img
              src="/images/pixel-programmer.png"
              alt="Programmer Avatar"
              className="w-32 h-32 mx-auto object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-pixel text-primary mb-4">
            DEV <span className="text-foreground">QUEST</span>
          </h1>
          <p className="text-lg md:text-xl font-pixel text-muted-foreground mb-8">
            A Programmer&apos;s Portfolio Adventure
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <PixelButton
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
            >
              START GAME
            </PixelButton>
            <PixelButton
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
            >
              CONTACT
            </PixelButton>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Character Stats */}
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
                    <p className="text-lg font-bold">42</p>
                  </div>
                  <div className="bg-muted p-3 rounded-sm text-center">
                    <p className="text-xs font-pixel">Clients</p>
                    <p className="text-lg font-bold">15</p>
                  </div>
                  <div className="bg-muted p-3 rounded-sm text-center">
                    <p className="text-xs font-pixel">Years</p>
                    <p className="text-lg font-bold">5+</p>
                  </div>
                  <div className="bg-muted p-3 rounded-sm text-center">
                    <p className="text-xs font-pixel">Coffees</p>
                    <p className="text-lg font-bold">∞</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl font-pixel text-primary mb-6">CHARACTER PROFILE</h2>

              <DialogBox
                text="Greetings, adventurer! I'm a passionate software developer with expertise in building modern web applications. I specialize in frontend development with React and Next.js, but I'm also skilled in backend technologies like Node.js and various databases."
                speaker="Developer"
                avatar="/images/pixel-programmer.png"
                className="mb-6"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="p-4 pixel-corners">
                  <h3 className="font-pixel text-primary text-sm mb-2">BACKGROUND</h3>
                  <p className="text-sm">5+ years of experience in web development with a focus on creating accessible, performant, and visually appealing applications.</p>
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
                  <h3 className="font-pixel text-primary text-sm mb-2">INTERESTS</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Game Development</li>
                    <li>• UI/UX Design</li>
                    <li>• Open Source Contribution</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Skill Tree */}
      <section id="skills" className="py-20 bg-muted">
        <div className="game-container">
          <h2 className="text-2xl font-pixel text-primary mb-6 text-center">SKILL TREE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['frontend', 'backend', 'languages', 'tools'].map((category) => (
              <Card key={category} className="p-6 pixel-corners overflow-hidden">
                <h3 className="font-pixel text-primary text-lg mb-4 text-center uppercase">
                  {category}
                </h3>

                <div className="space-y-5">
                  {skills
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

      {/* Projects Section - Game Levels */}
      <section id="projects" className="py-20 bg-background">
        <div className="game-container">
          <h2 className="text-2xl font-pixel text-primary mb-8 text-center">COMPLETED QUESTS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
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

      {/* Contact Section - Quest Dialog */}
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-pixel">Your Name</label>
                    <input
                      type="text"
                      className="w-full p-3 bg-background border-2 border-primary/50 pixel-corners focus:outline-none focus:border-primary"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-pixel">Your Email</label>
                    <input
                      type="email"
                      className="w-full p-3 bg-background border-2 border-primary/50 pixel-corners focus:outline-none focus:border-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-pixel">Subject</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-background border-2 border-primary/50 pixel-corners focus:outline-none focus:border-primary"
                    placeholder="What is this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-pixel">Message</label>
                  <textarea
                    rows={5}
                    className="w-full p-3 bg-background border-2 border-primary/50 pixel-corners focus:outline-none focus:border-primary resize-none"
                    placeholder="Tell me about your project..."
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
    </GameLayout>
  );
}
