import type { TranslationKey } from "@/contexts/i18n-context";

export interface Skill {
  titleKey: TranslationKey;
  dataLevel: number;
  levelTextKey: TranslationKey;
  category: "frontend" | "backend";
  icon: string;
  descriptionKey?: TranslationKey;
}

export const skillsData: Skill[] = [
  {
    titleKey: 'skills.angular.title',
    levelTextKey: 'levels.intermediate',
    dataLevel: 70,
    category: "frontend",
    icon: "/skills_icon/angular-logo.png",
    descriptionKey: "skills.angular.description"
  },
  {
    titleKey: 'skills.react.title',
    levelTextKey: 'levels.intermediate',
    dataLevel: 65,
    category: "frontend",
    icon: "/skills_icon/react-logo.png",
    descriptionKey: "skills.react.description"
  },
  {
    titleKey: 'skills.htmlcss.title',
    levelTextKey: 'levels.expert',
    dataLevel: 90,
    category: "frontend",
    icon: "/skills_icon/html-css-logo.png",
    descriptionKey: "skills.htmlcss.description"
  },
  {
    titleKey: 'skills.java.title',
    levelTextKey: 'levels.intermediate',
    dataLevel: 65,
    category: "backend",
    icon: "/skills_icon/java-logo.png",
    descriptionKey: "skills.java.description"
  },
  {
    titleKey: 'skills.python.title',
    levelTextKey: 'levels.competent',
    dataLevel: 85,
    category: "backend",
    icon: "/skills_icon/python-logo.png",
    descriptionKey: "skills.python.description"
  },
  {
    titleKey: 'skills.javascript.title',
    levelTextKey: 'levels.intermediate',
    dataLevel: 70,
    category: "backend",
    icon: "/skills_icon/javascript-logo.png",
    descriptionKey: "skills.javascript.description"
  },
  {
    titleKey: 'skills.sql.title',
    levelTextKey: 'levels.competent',
    dataLevel: 80,
    category: "backend",
    icon: "/skills_icon/sql-logo.png",
    descriptionKey: "skills.sql.description"
  },
  {
    titleKey: 'skills.docker.title',
    levelTextKey: 'levels.regularuse',
    dataLevel: 60,
    category: "backend",
    icon: "/skills_icon/docker-logo.png",
    descriptionKey: "skills.docker.description"
  },
  {
    titleKey: 'skills.git.title',
    levelTextKey: 'levels.dailyuse',
    dataLevel: 90,
    category: "backend",
    icon: "/skills_icon/git-logo.png",
    descriptionKey: "skills.git.description"
  }
];

export interface Project {
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  tags: string[];
  imageUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  completed: boolean;
}

export const projectsData: Project[] = [
  {
    titleKey: "projects.travelManagement.title",
    descriptionKey: "projects.travelManagement.description",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Eureka", "RabbitMQ", "Keycloak"],
    imageUrl: "/images/travel-management.png",
    githubUrl: "https://github.com/santiagoBeltranF/TravelManagementSystem",
    completed: true,
  },
  {
    titleKey: "projects.recipeMaster.title",
    descriptionKey: "projects.recipeMaster.description",
    tags: ["Python", "FastAPI", "Docker", "Alembic", "SQL"],
    imageUrl: "/images/recipe-master.png",
    githubUrl: "https://github.com/santiagoBeltranF/Recipe_Master",
    completed: true,
  },
];