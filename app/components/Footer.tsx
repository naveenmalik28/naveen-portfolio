import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-pad flex flex-col justify-between gap-4 text-sm text-steel sm:flex-row sm:items-center">
        <p>&copy; 2026 {profile.name}. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        <div className="flex gap-4">
          <Link href="/projects" className="transition hover:text-mint">Projects</Link>
          <Link href="/blog" className="transition hover:text-mint">Blog</Link>
          <Link href="/#contact" className="transition hover:text-mint">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
