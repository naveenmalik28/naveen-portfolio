import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
import { projects } from "@/lib/data";

const project = projects.find((item) => item.slug === "govixa");

export const metadata: Metadata = {
  title: "Govixa Case Study",
  description: "Govixa exam preparation platform case study covering real-time mock tests, AI recommendations, Redis, AWS, and scale.",
  openGraph: {
    title: "Govixa - Exam Preparation Platform Case Study",
    description: "AI-powered exam preparation platform with a real-time mock test engine.",
  },
};

export default function GovixaPage() {
  if (!project) {
    return null;
  }

  return <CaseStudy project={project} />;
}
