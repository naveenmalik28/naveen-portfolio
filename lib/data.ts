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
  title: "Senior Full Stack Developer",
  location: "Gurugram, India",
  experience: "5 Years",
  tagline: "Building scalable SaaS & AI-powered platforms",
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
      "Full-stack SaaS application built with React, Django REST Framework, and PostgreSQL for secure, scalable product workflows.",
    domain: "SaaS",
    year: "2026",
    stack: ["React (Vite)", "Tailwind CSS", "Django", "Django REST Framework", "PostgreSQL"],
    features: [
      "REST API architecture",
      "Secure authentication",
      "Scalable database design",
      "Optimized API performance",
    ],
    metrics: ["Production-ready", "API-first", "PostgreSQL core"],    website: "https://magnivel.com",    caseStudy: {
      problem:
        "Growing SaaS teams often outgrow stitched-together dashboards, slow APIs, and rigid data models before the product is ready to scale. Magnivel needed a clean foundation that could support authenticated workflows, predictable API contracts, and long-term feature expansion.",
      solution:
        "Magnivel was built as an API-first SaaS system with a React Vite frontend, Django REST Framework backend, and PostgreSQL data layer. The platform emphasizes secure access, reusable service boundaries, and fast product surfaces for operators and customers.",
      architecture: {
        frontend: "React (Vite) with Tailwind CSS for a fast, modular user interface.",
        backend: "Django REST Framework powering authenticated REST APIs and business workflows.",
        database: "PostgreSQL schema designed for normalized data, indexed reads, and future tenant growth.",
      },
      challenges: [
        "API performance optimization across high-traffic endpoints",
        "Database query optimization for read-heavy product screens",
        "Frontend performance tuning for fast navigation and low interaction latency",
      ],
      outcome: [
        "Improved API response patterns and frontend responsiveness",
        "Scalable architecture ready for production growth",
        "Maintainable full-stack system with clear product boundaries",
      ],
    },
  },
  {
    slug: "govixa",
    title: "Govixa - Exam Preparation Platform",
    shortTitle: "Govixa",
    description:
      "AI-powered exam preparation platform with a real-time mock test engine, large question bank, and recommendation workflows.",
    domain: "EdTech",
    year: "2025-26",
    stack: ["React.js", "Django REST Framework", "Redis", "AWS"],
    features: [
      "10,000+ concurrent users",
      "AI-powered recommendations",
      "Real-time mock tests",
      "Large question bank system",
    ],
    metrics: ["10,000+ users", "Real-time tests", "AI recommendations"],    website: "https://govixaindia.com",    caseStudy: {
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
      "FinTech SaaS platform with AI-based financial recommendations, scoring, analytics, and user-centric portfolio insights.",
    domain: "FinTech",
    year: "2025",
    stack: ["React.js", "Python", "Django REST Framework", "PostgreSQL", "OpenAI API"],
    features: [
      "AI-based financial recommendations",
      "Financial health scoring",
      "Analytics dashboards",
      "Secure user data workflows",
    ],
    metrics: ["AI insights", "FinTech SaaS", "Analytics-first"],
  },
  {
    slug: "supreme-child-learning-platform",
    title: "Supreme Child Learning Platform",
    shortTitle: "Supreme Child",
    description:
      "Family-focused learning platform with gamified habit building, parent-child dashboards, behavioral analytics, and AI progress insights.",
    domain: "EdTech",
    year: "2024-2025",
    stack: ["Angular", "Django", "Django REST Framework", "PostgreSQL", "AI Insights"],
    features: [
      "Gamified habit system",
      "Parent-child role dashboards",
      "Behavioral analytics",
      "AI progress insights",
      "Secure family data isolation",
    ],
    metrics: ["Role-based dashboards", "Family-safe data", "AI progress tracking"],
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
    points: ["Built SaaS platforms", "Delivered AI integrations", "Led performance optimization"],
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
    skills: ["Python", "Django", "Django REST Framework", "Node.js"],
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
  { label: "Core domains", value: "SaaS / AI / EdTech / FinTech", icon: Layers3 },
  { label: "Engineering focus", value: "Performance & scale", icon: Gauge },
];

export const capabilityCards = [
  { title: "API Systems", icon: LockKeyhole, body: "Secure REST APIs, auth flows, service boundaries, and maintainable data contracts." },
  { title: "AI Products", icon: Bot, body: "Recommendation flows, AI-assisted workflows, and pragmatic integrations using OpenAI and LangChain." },
  { title: "Scale Thinking", icon: TrendingUp, body: "Indexes, caching, background work, and frontend performance tuned for product growth." },
  { title: "Learning Platforms", icon: GraduationCap, body: "Mock test engines, large question banks, analytics, and high-concurrency exam flows." },
  { title: "Fast Interfaces", icon: Timer, body: "Responsive product surfaces with smooth transitions and quick paths to key actions." },
  { title: "Product Polish", icon: Sparkles, body: "Clean UX, measurable outcomes, and features shaped around real user workflows." },
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
