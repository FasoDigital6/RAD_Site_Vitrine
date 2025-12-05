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
    <section className={`overflow-hidden py-16 sm:py-20 md:py-24 ${bgClass} ${className}`}>
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-5 sm:space-y-6 md:space-y-8"
        >
          <h3 className="mx-auto max-w-lg text-2xl font-bold leading-tight sm:max-w-2xl sm:text-3xl md:text-4xl md:leading-tight">
            {title}
          </h3>

          {subtitle && (
            <p
              className={`mx-auto max-w-md text-base leading-relaxed sm:max-w-xl sm:text-lg sm:leading-relaxed md:max-w-2xl ${
                variant === "gradient" ? "text-slate-200" : "text-slate-600"
              }`}
            >
              {subtitle}
            </p>
          )}

          <div className="flex flex-col items-stretch justify-center gap-3 pt-3 sm:flex-row sm:items-center sm:gap-4 sm:pt-4">
            {buttons.map((button, index) => {
              const isPrimary = button.variant !== "secondary"

              return (
                <Link
                  key={index}
                  href={button.href}
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 sm:w-auto sm:px-8 sm:py-4 sm:text-base ${
                    isPrimary
                      ? "bg-rad-orange text-white shadow-md shadow-rad-orange/25 hover:bg-rad-orange-hover hover:shadow-lg hover:shadow-rad-orange/35"
                      : variant === "gradient"
                        ? "border-2 border-white text-white hover:border-rad-orange hover:bg-rad-orange/10 hover:text-rad-orange"
                        : "border-2 border-rad-blue-900 text-rad-blue-900 hover:border-rad-orange hover:bg-rad-orange/10 hover:text-rad-orange"
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
