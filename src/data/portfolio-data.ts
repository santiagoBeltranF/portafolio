export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "languages" | "tools";
  icon?: string;
}

export const skillsData: Skill[] = [
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

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  completed: boolean;
}

export const projectsData: Project[] = [
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