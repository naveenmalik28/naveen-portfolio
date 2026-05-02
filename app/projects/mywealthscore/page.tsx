import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
import { projects } from "@/lib/data";

const project = projects.find((item) => item.slug === "mywealthscore");

export const metadata: Metadata = {
  title: "MyWealthScore Project",
  description: "FinTech SaaS platform with AI-based financial recommendations by Naveen Malik.",
  openGraph: {
    title: "MyWealthScore - FinTech SaaS",
    description: "FinTech SaaS platform with AI-based financial recommendations.",
  },
};

export default function MyWealthScorePage() {
  if (!project) {
    return null;
  }

  return <CaseStudy project={project} />;
}
