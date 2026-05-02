"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";
import Section from "./Section";

export default function Projects({ showHeader = true }: { showHeader?: boolean }) {
  const content = (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {projects.map((project, index) => (
        <motion.article
          key={project.slug}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="flex min-h-full flex-col rounded-lg border border-white/10 bg-white/[0.035] p-5"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-mint">{project.domain} / {project.year}</p>
              <h3 className="mt-3 text-xl font-semibold text-pearl">{project.title}</h3>
            </div>
            <span className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 bg-ink text-sm font-bold text-amber">
              0{index + 1}
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-steel">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-md border border-white/10 bg-ink/70 px-3 py-1.5 text-xs text-steel">
                {tech}
              </span>
            ))}
          </div>
          <ul className="mt-5 space-y-3">
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex gap-3 text-sm leading-6 text-steel">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-mint" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-pearl transition hover:text-mint"
            >
              View case study
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );

  if (!showHeader) {
    return content;
  }

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Real SaaS products, not placeholder work."
      description="A focused set of product builds across SaaS architecture, exam technology, AI recommendations, analytics, and production performance."
    >
      {content}
    </Section>
  );
}
