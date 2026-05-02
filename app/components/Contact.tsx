"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import Section from "./Section";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "https://www.linkedin.com/in/naveenmalikofficial/", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "https://github.com/naveenmalik28", href: profile.github, icon: Github },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let us build a product surface that can carry real traffic."
      description="Available for senior full-stack roles, SaaS builds, AI integrations, backend architecture, and performance-heavy product work."
      className="pb-10"
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
          <MapPin size={24} className="text-coral" aria-hidden="true" />
          <h3 className="mt-5 text-2xl font-semibold text-pearl">{profile.location}</h3>
          <p className="mt-4 text-sm leading-7 text-steel">
            Senior Full Stack Developer with 5 years of experience across EdTech, FinTech, SaaS, AI features, analytics, and scalable API systems.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-mint/40"
              >
                <Icon size={22} className="text-mint" aria-hidden="true" />
                <p className="mt-5 text-sm font-semibold text-pearl">{item.label}</p>
                <p className="mt-2 break-words text-sm leading-6 text-steel">{item.value}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
