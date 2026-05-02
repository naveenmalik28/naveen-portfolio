import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Gauge,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Server,
  Sparkles,
  Timer,
  TrendingUp,
  Users,
} from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  domain: string;
  year: string;
  stack: string[];
  features: string[];
  metrics: string[];
  website?: string;
  caseStudy?: {
    problem: string;
    solution: string;
    architecture: {
      frontend: string;
      backend: string;
      database: string;
      infrastructure?: string;
    };
    challenges: string[];
    outcome: string[];
  };
};

export type Experience = {
  company: string;
  period: string;
  role: string;
  points: string[];
  website?: string;
};

export const profile = {
  name: "Naveen Malik",
  title: "Full Stack Developer",
  location: "Gurugram, India",
  experience: "5 Years",
  tagline: "Building scalable web applications and API-driven systems",
  email: "naveenmalik0928@gmail.com",
  linkedin: "https://www.linkedin.com/in/naveenmalikofficial/",
  github: "https://github.com/naveenmalik28",
};

export const projects: Project[] = [
  {
    slug: "magnivel",
    title: "Magnivel - SaaS Platform",
    shortTitle: "Magnivel",
    description:
      "Developed a full-stack SaaS platform with React and Django REST Framework, focusing on secure APIs, scalable architecture, and efficient data workflows.",
    domain: "SaaS",
    year: "2026",
    stack: ["React (Vite)", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL"],
    features: [
      "Secure REST API with authentication",
      "Role-based access control",
      "Optimized database queries",
      "Production-ready backend architecture",
    ],
    metrics: ["Production-ready", "API-first", "PostgreSQL core"],
    website: "https://magnivel.com",
    caseStudy: {
      problem:
        "Building SaaS platforms requires reliable backend infrastructure, fast APIs, and a scalable database. Magnivel needed a clean foundation with secure authentication and predictable API behavior for product growth.",
      solution:
        "Built Magnivel with React (Vite) frontend and Django REST Framework backend, backed by PostgreSQL. Focused on secure API design, optimized queries, and clear separation of concerns for maintainability.",
      architecture: {
        frontend: "React (Vite) with Tailwind CSS for responsive, fast user interface.",
        backend: "Django REST Framework with authentication, role-based access, and optimized endpoints.",
        database: "PostgreSQL with optimized queries, indexes, and normalized schema for scalability.",
      },
      challenges: [
        "Optimizing API performance for frequent user operations",
        "Designing efficient database queries for complex data workflows",
        "Balancing code maintainability with performance needs",
      ],
      outcome: [
        "Production-ready SaaS platform with reliable API architecture",
        "Optimized database performance handling real user traffic",
        "Maintainable codebase ready for feature expansion",
      ],
    },
  },
  {
    slug: "govixa",
    title: "Govixa India - Exam Preparation Platform",
    shortTitle: "Govixa",
    description:
      "Built a scalable exam platform handling 10,000+ concurrent users with real-time mock tests, large question banks, and AI recommendations. Optimized performance using Redis caching and Django REST APIs.",
    domain: "EdTech",
    year: "2025-26",
    stack: ["React.js", "Django REST Framework", "PostgreSQL", "Firebase", "Redis", "AWS"],
    features: [
      "Handles 10,000+ concurrent users",
      "Real-time mock test engine",
      "AI-powered learning recommendations",
      "Optimized for high-traffic performance",
    ],
    metrics: ["10,000+ users", "Real-time tests", "Redis caching"],    website: "https://govixaindia.com",    caseStudy: {
      problem:
        "Exam preparation platforms need to serve thousands of learners at the same time while keeping tests fair, fast, and personalized. Govixa needed a system that could handle high concurrency, AI-assisted guidance, and a large question bank without slowing down during peak mock test windows.",
      solution:
        "Govixa combines a React learner experience with Django REST Framework APIs, Redis-backed real-time flows, and AWS infrastructure. The platform supports mock tests, recommendation signals, and question delivery at scale.",
      architecture: {
        frontend: "React.js application optimized for timed test flows and progress visibility.",
        backend: "Django REST Framework services for exams, questions, attempts, analytics, and recommendations.",
        database: "Relational data model for question banks, attempts, results, and learner progress.",
        infrastructure: "Redis for high-speed state and AWS for production deployment capacity.",
      },
      challenges: [
        "Maintaining real-time test responsiveness during concurrent sessions",
        "Designing reliable question-bank and result-processing workflows",
        "Balancing AI recommendation quality with performance constraints",
      ],
      outcome: [
        "Real-time mock test engine supporting large learner cohorts",
        "Personalized recommendations that improve study direction",
        "Scalable EdTech foundation for high-traffic exam cycles",
      ],
    },
  },
  {
    slug: "mywealthscore",
    title: "MyWealthScore - FinTech SaaS",
    shortTitle: "MyWealthScore",
    description:
      "Developed a FinTech SaaS platform with AI-based financial scoring and recommendations. Built secure APIs and analytics dashboards for handling sensitive financial data.",
    domain: "FinTech",
    year: "2025",
    stack: ["React.js", "Python", "Django REST Framework", "PostgreSQL", "OpenAI API", "AWS"],
    features: [
      "AI-powered financial scoring",
      "Secure API design",
      "Analytics and insights dashboards",
      "Production-grade data handling",
    ],
    metrics: ["AI integrations", "FinTech SaaS", "Secure systems"],
  },
  {
    slug: "supreme-child-learning-platform",
    title: "Supreme Child Learning Platform",
    shortTitle: "Supreme Child",
    description:
      "Built a learning platform with gamified features, role-based dashboards for parents and children, behavioral tracking, and AI-based progress insights. Implemented secure family data isolation.",
    domain: "EdTech",
    year: "2024-2025",
    stack: ["Angular", "Django", "Django REST Framework", "PostgreSQL", "AI Insights", "AWS"],
    features: [
      "Gamified habit tracking system",
      "Separate parent and child dashboards",
      "Behavioral analytics and tracking",
      "AI-powered progress insights",
      "Secure family data isolation",
    ],
    metrics: ["Role-based access", "Secure data isolation", "AI analytics"],
    caseStudy: {
      problem:
        "Parents need a clear way to understand a child's learning habits without turning progress tracking into a manual spreadsheet. The platform needed to support child engagement, parent visibility, behavioral patterns, and strict separation between family accounts.",
      solution:
        "Supreme Child Learning Platform was designed around role-aware product flows for parents and children. Children get gamified habit loops that encourage consistency, while parents get dashboards, analytics, and AI-assisted progress summaries that make learning patterns easier to understand.",
      architecture: {
        frontend: "Angular application with separate parent and child interfaces for role-specific learning workflows.",
        backend: "Django and Django REST Framework APIs for habits, rewards, progress tracking, dashboards, and family account controls.",
        database: "PostgreSQL data model with family-scoped records, role-aware access rules, and analytics-ready progress tables.",
      },
      challenges: [
        "Designing separate parent and child experiences without duplicating core product logic",
        "Keeping family data isolated across accounts and role boundaries",
        "Transforming habit events into useful behavioral analytics and AI progress summaries",
      ],
      outcome: [
        "A gamified learning system that encourages consistent child engagement",
        "Parent dashboards with clear behavioral and progress visibility",
        "Secure family data architecture ready for product growth",
      ],
    },
  },
];

export const experience: Experience[] = [
  {
    company: "Actinium Softwares",
    period: "Nov 2024 - Present",
    role: "Senior Full Stack Developer",
    points: [
      "Built and architected SaaS platforms using Django and React",
      "Integrated OpenAI and AI features into production systems",
      "Optimized database queries and improved API response times",
      "Led performance improvements and system scalability initiatives",
    ],
  },
  {
    company: "Pulsus Healthtech",
    period: "May 2021 - Oct 2024",
    role: "Full Stack Developer",
    points: [
      "Built enterprise CMS & manuscript tracking systems improving publication speed",
      "Implemented role-based access control for 250+ users with optimized frontend rendering",
      "Integrated multiple REST APIs for content automation workflows",
      "Optimized complex database queries for improved performance",
      "Managed and maintained multiple Journals websites with continuous feature enhancements",
      "Built in-house plagiarism checker tool integrated into manuscript workflow",
    ],
    website: "https://www.pulsus.com/",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "Next.js", "Angular", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "Django", "Django REST Framework", "Flask", "FastAPI", "Node.js"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["AWS", "Redis", "CI/CD"],
  },
  {
    title: "AI",
    icon: BrainCircuit,
    skills: ["OpenAI API", "LangChain"],
  },
];

export const highlights = [
  { label: "Years building products", value: "5", icon: BriefcaseBusiness },
  { label: "Users handled", value: "10,000+", icon: Users },
  { label: "Core domains", value: "SaaS / AI / Publishing / EdTech / FinTech", icon: Layers3 },
  { label: "Engineering focus", value: "Performance & scale", icon: Gauge },
];

export const capabilityCards = [
  { title: "Backend & API Development", icon: LockKeyhole, body: "Designed secure REST APIs with authentication, role-based access control, and scalable backend architecture." },
  { title: "AI Integrations", icon: Bot, body: "Integrated OpenAI-based workflows for recommendations and automation in production systems." },
  { title: "Performance Optimization", icon: TrendingUp, body: "Improved query performance, implemented Redis caching, reduced API latency in production systems." },
  { title: "High-Scale Systems", icon: GraduationCap, body: "Built systems handling large datasets, concurrent users, and real-time workflows like exam platforms." },
  { title: "Frontend Development", icon: Timer, body: "Built responsive interfaces with smooth performance using React, Angular, and modern tooling." },
  { title: "Database Design", icon: Sparkles, body: "Optimized schema design, implemented efficient indexing, and structured workflows for production systems." },
];

export const blogPosts = [
  {
    title: "Scaling Exam Platforms for Peak Test Windows",
    excerpt: "Notes on caching, timed state, and API design for high-concurrency mock test systems.",
    date: "2026",
  },
  {
    title: "Designing API-first SaaS Foundations",
    excerpt: "How clean contracts, database design, and frontend boundaries make products easier to grow.",
    date: "2026",
  },
];
