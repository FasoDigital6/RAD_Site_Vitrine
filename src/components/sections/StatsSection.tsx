"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

interface Stat {
  icon: string
  value: string
  label: string
}

interface StatsSectionProps {
  stats: Stat[]
  variant?: "banner" | "cards"
  className?: string
}

export function StatsSection({ stats, variant = "banner", className = "" }: StatsSectionProps) {
  if (variant === "banner") {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className={`grid grid-cols-2 gap-4 rounded-2xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-6 shadow-2xl shadow-rad-blue-900/30 sm:gap-6 sm:rounded-3xl sm:p-8 md:grid-cols-3 md:p-10 ${className}`}
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="mb-1 text-2xl sm:mb-2 sm:text-3xl">{stat.icon}</div>
            <p className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-200 sm:mt-2 sm:text-xs md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    )
  }

  // Cards variant
  return (
    <section className={`bg-white py-12 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-6 text-center text-white shadow-xl shadow-rad-blue-900/30 sm:rounded-3xl sm:p-8"
            >
              <div className="mb-2 text-2xl sm:text-3xl">{stat.icon}</div>
              <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-wide text-slate-200 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
