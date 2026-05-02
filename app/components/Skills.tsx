"use client";

import { skillGroups } from "@/lib/data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A senior full-stack toolkit with product judgment."
      description="The stack is shaped around fast interfaces, reliable APIs, well-modeled data, cloud deployment, and practical AI features."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-amber/45">
              <Icon size={22} className="text-amber" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-pearl">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-white/10 bg-ink/70 px-3 py-1.5 text-xs text-steel">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
