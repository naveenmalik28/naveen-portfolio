"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("container-pad py-16 sm:py-20", className)}>
      {(eyebrow || title || description) && (
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 max-w-3xl"
        >
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2 className="mt-3 text-3xl font-semibold text-pearl sm:text-4xl">{title}</h2>}
          {description && <p className="mt-4 text-base leading-8 text-steel">{description}</p>}
        </motion.div>
      )}
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
