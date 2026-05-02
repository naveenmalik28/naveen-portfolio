import type { Metadata } from "next";
import Projects from "../components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "SaaS, EdTech, FinTech, AI, and full-stack engineering projects by Naveen Malik.",
  openGraph: {
    title: "Projects | Naveen Malik",
    description: "Real SaaS and AI-powered platform work across Magnivel, Govixa, MyWealthScore, and Supreme Child Learning Platform.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="py-8">
      <section className="container-pad py-12">
        <p className="eyebrow">Projects</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-pearl sm:text-6xl">
          Product builds shaped around architecture, scale, and outcomes.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
          A focused portfolio of full-stack systems, high-traffic education technology, AI recommendations, and SaaS architecture.
        </p>
      </section>
      <section className="container-pad pb-16">
        <Projects showHeader={false} />
      </section>
    </div>
  );
}
