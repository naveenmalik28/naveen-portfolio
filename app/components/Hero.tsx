"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ServerCog, ShieldCheck, Zap } from "lucide-react";
import { highlights, profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="container-pad grid min-h-[calc(100vh-4rem)] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
      <motion.div
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 rounded-md border border-mint/20 bg-mint/10 px-3 py-2 text-sm text-mint">
          <Zap size={16} aria-hidden="true" />
          {profile.location} - {profile.experience}
        </div>
        <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.04] text-pearl sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-mint sm:text-2xl">{profile.title}</p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-steel sm:text-xl">{profile.tagline}</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-steel">
          I build production-ready systems including exam platforms, CMS tools, and AI-integrated products — focusing on performance, scalability, and delivering real user impact.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-mint px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-pearl"
          >
            View Projects
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-bold text-pearl transition hover:-translate-y-0.5 hover:border-coral/50 hover:text-coral"
          >
            Contact Me
            <Mail size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-md border border-white/10 bg-white/[0.03] p-4">
                <Icon className="mb-3 text-amber" size={20} aria-hidden="true" />
                <p className="text-lg font-semibold text-pearl">{item.value}</p>
                <p className="mt-1 text-sm leading-6 text-steel">{item.label}</p>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
        className="panel overflow-hidden rounded-lg"
      >
        <div className="border-b border-white/10 bg-white/[0.04] px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-pearl">SaaS Architecture Console</p>
              <p className="mt-1 text-xs text-steel">API-first systems, analytics, AI workflows</p>
            </div>
            <div className="flex gap-2">
              <span className="size-2 rounded-full bg-coral" />
              <span className="size-2 rounded-full bg-amber" />
              <span className="size-2 rounded-full bg-mint" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            {[
              ["API latency", "118ms", "mint"],
              ["Concurrent", "10k+", "amber"],
              ["Deploys", "CI/CD", "coral"],
            ].map(([label, value, color]) => (
              <div key={label} className="rounded-md border border-white/10 bg-ink/70 p-4">
                <p className="text-xs text-steel">{label}</p>
                <p className={`mt-2 text-xl font-bold ${color === "mint" ? "text-mint" : color === "amber" ? "text-amber" : "text-coral"}`}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-md border border-white/10 bg-ink/70 p-4">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-pearl">
              <ServerCog size={18} className="text-mint" aria-hidden="true" />
              Request Flow
            </div>
            <div className="grid gap-3 sm:grid-cols-4">
              {["React UI", "DRF APIs", "PostgreSQL", "Redis/AWS"].map((step, index) => (
                <div key={step} className="rounded-md border border-white/10 bg-white/[0.035] p-3">
                  <p className="text-xs text-steel">0{index + 1}</p>
                  <p className="mt-2 text-sm font-semibold text-pearl">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-md border border-white/10 bg-ink/70 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-pearl">
                <ShieldCheck size={18} className="text-amber" aria-hidden="true" />
                Reliability
              </div>
              <div className="mt-4 space-y-3">
                {[86, 74, 92].map((value) => (
                  <div key={value} className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 0.9, delay: 0.3 }}
                      className="h-full rounded-full bg-mint"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-white/10 bg-ink/70 p-4">
              <p className="text-sm font-semibold text-pearl">Product Signals</p>
              <div className="mt-4 grid grid-cols-7 items-end gap-2">
                {[38, 54, 46, 68, 74, 62, 88].map((height, index) => (
                  <motion.span
                    key={`${height}-${index}`}
                    initial={{ height: 16 }}
                    animate={{ height }}
                    transition={{ duration: 0.6, delay: 0.15 + index * 0.04 }}
                    className="rounded-t-sm bg-coral/80"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
