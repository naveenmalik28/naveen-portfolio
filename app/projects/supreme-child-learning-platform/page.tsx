import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
import { projects } from "@/lib/data";

const project = projects.find((item) => item.slug === "supreme-child-learning-platform");

export const metadata: Metadata = {
  title: "Supreme Child Learning Platform Case Study",
  description:
    "Supreme Child Learning Platform case study covering Angular, Django, PostgreSQL, gamified habits, parent-child dashboards, behavioral analytics, AI progress insights, and secure family data isolation.",
  openGraph: {
    title: "Supreme Child Learning Platform Case Study",
    description:
      "Family-focused EdTech platform with gamified habits, parent-child dashboards, behavioral analytics, and AI progress insights.",
  },
};

export default function SupremeChildLearningPlatformPage() {
  if (!project) {
    return null;
  }

  return <CaseStudy project={project} />;
}
