export interface Skill {
  title: string;
  dataLevel: number;
  levelText: string;
  category: "frontend" | "backend";
  icon: string;
  description?: string;
}

export const skillsData: Skill[] = [
  {
    title: 'ANGULAR',
    levelText: 'Intermedio',
    dataLevel: 70,
    category: "frontend",
    icon: "/skills_icon/angular-logo.png",
    description: "Framework potente para construir aplicaciones web complejas y SPA."
  },
  {
    title: 'REACT',
    levelText: 'Intermedio',
    dataLevel: 65,
    category: "frontend",
    icon: "/skills_icon/react-logo.png",
    description: "Biblioteca JS para interfaces de usuario interactivas y componentes reutilizables."
  },
  {
    title: 'HTML & CSS',
    levelText: 'Experto',
    dataLevel: 90,
    category: "frontend",
    icon: "/skills_icon/html-css-logo.png",
    description: "Fundamentos esenciales para la estructura y estilo de la web."
  },
  {
    title: 'Java',
    levelText: 'Intermedio',
    dataLevel: 65,
    category: "backend",
    icon: "/skills_icon/java-logo.png",
    description: "Lenguaje robusto y versátil para aplicaciones empresariales y de servidor."
  },
  {
    title: 'PYTHON',
    levelText: 'Competente',
    dataLevel: 85,
    category: "backend",
    icon: "/skills_icon/python-logo.png",
    description: "Lenguaje popular para desarrollo web backend, scripting y ciencia de datos."
  },
  {
    title: 'JavaScript',
    levelText: 'Intermedio',
    dataLevel: 70,
    category: "backend",
    icon: "/skills_icon/javascript-logo.png",
    description: "Uso de JavaScript en el servidor con Node.js para APIs y microservicios."
  },
  {
    title: 'SQL',
    levelText: 'Competente',
    dataLevel: 80,
    category: "backend",
    icon: "/skills_icon/sql-logo.png",
    description: "Gestión y consulta de bases de datos relacionales."
  },
  {
    title: 'DOCKER',
    levelText: 'Uso Regular',
    dataLevel: 60,
    category: "backend",
    icon: "/skills_icon/docker-logo.png",
    description: "Contenerización de aplicaciones para despliegues consistentes."
  },
  {
    title: 'GIT',
    levelText: 'Uso Diario',
    dataLevel: 90,
    category: "backend",
    icon: "/skills_icon/git-logo.png",
    description: "Control de versiones esencial para el desarrollo colaborativo."
  }
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
    title: "Travel Management System",
    description: "Microservices application for managing travel, allowing users to search for and book flights, accommodations, and more, with secure authentication via Keycloak.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Eureka", "RabbitMQ", "Keycloak"],
    imageUrl: "/images/travel-management.png",
    githubUrl: "https://github.com/santiagoBeltranF/TravelManagementSystem",
    completed: true,
  },
  {
    title: "Recipe Master",
    description: "Application for organizing cooking recipes, planning menus, generating shopping lists, and suggesting recipes from available ingredients.",
    tags: ["Python", "FastAPI", "Docker", "Alembic", "SQL"],
    imageUrl: "/images/recipe-master.png",
    githubUrl: "https://github.com/santiagoBeltranF/Recipe_Master",
    completed: true,
  },
];