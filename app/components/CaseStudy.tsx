"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Database, Layers3, Server, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";

type CaseStudyProps = {
  project: Project;
};

export default function CaseStudy({ project }: CaseStudyProps) {
  const caseStudy = project.caseStudy;

  return (
    <div className="container-pad py-12 sm:py-16">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-steel transition hover:text-mint">
        <ArrowLeft size={16} aria-hidden="true" />
        All projects
      </Link>

      <motion.header
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <p className="eyebrow">{project.domain} Case Study</p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight text-pearl sm:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">{project.description}</p>
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-mint transition hover:text-pearl"
            >
              Visit Website
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-steel">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="panel rounded-lg p-5">
          <p className="text-sm font-semibold text-pearl">Project Signals</p>
          <div className="mt-5 grid gap-3">
            {project.metrics.map((metric) => (
              <div key={metric} className="rounded-md border border-white/10 bg-ink/70 p-4">
                <p className="text-lg font-semibold text-mint">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.header>

      {caseStudy ? (
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-12 grid gap-5"
        >
          <CaseBlock title="Problem" body={caseStudy.problem} />
          <CaseBlock title="Solution" body={caseStudy.solution} />

          <section className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <p className="eyebrow">Architecture</p>
            <h2 className="mt-3 text-2xl font-semibold text-pearl">A clean full-stack foundation.</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <ArchitectureItem icon={Layers3} title="Frontend" body={caseStudy.architecture.frontend} />
              <ArchitectureItem icon={Server} title="Backend" body={caseStudy.architecture.backend} />
              <ArchitectureItem icon={Database} title="Database" body={caseStudy.architecture.database} />
            </div>
            {caseStudy.architecture.infrastructure && (
              <p className="mt-5 rounded-md border border-white/10 bg-ink/70 p-4 text-sm leading-7 text-steel">
                {caseStudy.architecture.infrastructure}
              </p>
            )}
          </section>

          <section className="grid gap-5 lg:grid-cols-2">
            <ListBlock title="Challenges" items={caseStudy.challenges} tone="coral" />
            <ListBlock title="Outcome" items={caseStudy.outcome} tone="mint" />
          </section>
        </motion.div>
      ) : (
        <motion.section
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-12 rounded-lg border border-white/10 bg-white/[0.035] p-6"
        >
          <p className="eyebrow">Overview</p>
          <h2 className="mt-3 text-2xl font-semibold text-pearl">FinTech SaaS with AI-assisted financial recommendations.</h2>
          <p className="mt-4 text-sm leading-7 text-steel">
            MyWealthScore focuses on scoring, analytics, secure user data workflows, and AI-powered recommendations that help users understand financial decisions with clearer context.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 rounded-md border border-white/10 bg-ink/70 p-4 text-sm leading-6 text-steel">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-mint" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      <div className="mt-12">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-md bg-mint px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-pearl"
        >
          Discuss a similar project
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <p className="eyebrow">{title}</p>
      <p className="mt-4 max-w-4xl text-base leading-8 text-steel">{body}</p>
    </section>
  );
}

function ArchitectureItem({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Layers3;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-ink/70 p-4">
      <Icon size={20} className="text-amber" aria-hidden="true" />
      <h3 className="mt-4 text-base font-semibold text-pearl">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-steel">{body}</p>
    </div>
  );
}

function ListBlock({ title, items, tone }: { title: string; items: string[]; tone: "mint" | "coral" }) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-steel">
            <CheckCircle2 size={17} className={`mt-1 shrink-0 ${tone === "mint" ? "text-mint" : "text-coral"}`} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
