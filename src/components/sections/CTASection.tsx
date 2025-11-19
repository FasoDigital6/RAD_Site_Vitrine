"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { fadeUp } from "@/lib/animations"

interface CTAButton {
  text: string
  href: string
  variant?: "primary" | "secondary"
}

interface CTASectionProps {
  title: string
  subtitle?: string
  buttons: CTAButton[]
  variant?: "gradient" | "light"
  className?: string
}

export function CTASection({
  title,
  subtitle,
  buttons,
  variant = "gradient",
  className = "",
}: CTASectionProps) {
  const bgClass =
    variant === "gradient"
      ? "bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 text-white"
      : "bg-slate-100 text-rad-blue-900"

  return (
    <section className={`py-12 sm:py-16 ${bgClass} ${className}`}>
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-4 sm:space-y-6"
        >
          <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            {title}
          </h3>

          {subtitle && (
            <p
              className={`mx-auto max-w-2xl text-base sm:text-lg ${
                variant === "gradient" ? "text-slate-200" : "text-slate-600"
              }`}
            >
              {subtitle}
            </p>
          )}

          <div className="flex flex-col flex-wrap items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4 sm:pt-4">
            {buttons.map((button, index) => {
              const isPrimary = button.variant !== "secondary"

              return (
                <Link
                  key={index}
                  href={button.href}
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 sm:w-auto sm:px-8 sm:py-4 sm:text-base ${
                    isPrimary
                      ? "bg-rad-orange text-white shadow-lg shadow-rad-orange/40 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
                      : variant === "gradient"
                        ? "border-2 border-white text-white hover:bg-white/10"
                        : "border-2 border-rad-blue-900 text-rad-blue-900 hover:bg-rad-blue-900/5"
                  }`}
                >
                  <span>{button.text}</span>
                  {isPrimary && (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                  )}
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
