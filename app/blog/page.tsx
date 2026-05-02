import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Engineering notes by Naveen Malik on SaaS architecture, APIs, AI features, and scalable product systems.",
};

export default function BlogPage() {
  return (
    <div className="container-pad py-16">
      <p className="eyebrow">Blog</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-pearl sm:text-6xl">
        Engineering notes on scalable product systems.
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
        Short, practical writing on API design, SaaS architecture, exam platforms, performance, and AI-assisted workflows.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-mint/40">
            <p className="text-sm text-mint">{post.date}</p>
            <h2 className="mt-4 text-2xl font-semibold text-pearl">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-steel">{post.excerpt}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-steel">
              Draft article
              <ArrowUpRight size={16} aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
