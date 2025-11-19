"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  showDivider?: boolean
  className?: string
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  showDivider = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {badge && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rad-blue-900/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rad-blue-900 sm:mb-6 sm:gap-3 sm:text-sm">
          <span className="flex h-1 w-8 overflow-hidden rounded-full sm:w-10">
            <span className="flex-1 bg-rad-red" />
            <span className="flex-1 bg-rad-yellow" />
            <span className="flex-1 bg-rad-green" />
          </span>
          {badge}
        </div>
      )}

      <h2 className="text-3xl font-bold text-rad-blue-900 sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {showDivider && (
        <div className={`mt-3 flex h-1.5 w-24 overflow-hidden rounded-full sm:mt-4 sm:w-32 ${centered ? "mx-auto" : ""}`}>
          <span className="flex-1 bg-rad-red" />
          <span className="flex-1 bg-rad-yellow" />
          <span className="flex-1 bg-rad-green" />
        </div>
      )}

      {subtitle && (
        <p className={`mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base md:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-3xl"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
