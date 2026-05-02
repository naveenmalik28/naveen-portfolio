"use client";

import Link from "next/link";
import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import { experience } from "@/lib/data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Hands-on product engineering across SaaS and platform teams."
      description="The timeline highlights where Naveen has shipped production systems, integrated APIs, improved SEO, and optimized user-facing platforms."
    >
      <div className="relative">
        <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 md:block" />
        <div className="space-y-5">
          {experience.map((item) => (
            <article key={item.company} className="relative rounded-lg border border-white/10 bg-white/[0.035] p-5 md:ml-12">
              <div className="absolute -left-[3.25rem] top-5 hidden size-10 place-items-center rounded-md border border-mint/30 bg-ink text-mint md:grid">
                <BriefcaseBusiness size={18} aria-hidden="true" />
              </div>
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-pearl">{item.company}</h3>
                  <p className="mt-1 text-sm text-mint">{item.role}</p>
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-amber transition hover:text-mint"
                    >
                      Visit Company
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="rounded-md border border-white/10 bg-ink/70 px-3 py-1.5 text-sm text-steel">{item.period}</p>
              </div>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {item.points.map((point) => (
                  <li key={point} className="rounded-md border border-white/10 bg-ink/60 p-3 text-sm leading-6 text-steel">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
