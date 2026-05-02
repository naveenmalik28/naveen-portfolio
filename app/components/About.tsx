"use client";

import { capabilityCards } from "@/lib/data";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Full-stack engineering for products that need to scale."
      description="With 5 years across SaaS, AI, EdTech, and FinTech, Naveen builds systems that are fast, maintainable, and ready for real customer traffic."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {capabilityCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-mint/40 hover:bg-white/[0.055]">
              <Icon size={22} className="text-mint" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-pearl">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-steel">{card.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
