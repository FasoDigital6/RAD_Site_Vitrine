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
        className={`mx-auto flex w-[92%] flex-wrap items-center justify-center gap-4 rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-6 shadow-xl shadow-rad-blue-900/20 sm:w-full sm:gap-12 sm:p-8 md:gap-16 md:p-10 lg:gap-20 ${className}`}
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="mb-3 text-3xl sm:mb-4 sm:text-4xl">{stat.icon}</div>
            <p className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white sm:mt-4 sm:text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    )
  }

  // Cards variant
  return (
    <section className={`bg-white py-16 sm:py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-center text-white shadow-xl shadow-rad-blue-900/30 sm:rounded-3xl sm:p-10 md:p-12"
            >
              <div className="mb-3 text-3xl sm:mb-4 sm:text-4xl md:text-5xl">{stat.icon}</div>
              <p className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white sm:mt-4 sm:text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
