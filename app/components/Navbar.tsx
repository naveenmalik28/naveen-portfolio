"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-ink/88 backdrop-blur-xl"
    >
      <nav className="container-pad flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Naveen Malik home">
          <span className="grid size-9 place-items-center rounded-md border border-mint/35 bg-mint/10 text-sm font-bold text-mint">
            NM
          </span>
          <span className="hidden text-sm font-semibold text-pearl sm:inline">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-steel transition hover:bg-white/5 hover:text-pearl"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-pearl px-3 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-mint"
        >
          Contact
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </nav>
    </motion.header>
  );
}
