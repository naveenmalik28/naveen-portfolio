import type { Metadata } from "next";
import CaseStudy from "@/app/components/CaseStudy";
import { projects } from "@/lib/data";

const project = projects.find((item) => item.slug === "magnivel");

export const metadata: Metadata = {
  title: "Magnivel Case Study",
  description: "Magnivel SaaS platform case study by Naveen Malik covering problem, solution, architecture, challenges, and outcomes.",
  openGraph: {
    title: "Magnivel - SaaS Platform Case Study",
    description: "Full-stack SaaS application built with React, Django REST Framework, and PostgreSQL.",
  },
};

export default function MagnivelPage() {
  if (!project) {
    return null;
  }

  return <CaseStudy project={project} />;
}
