"use client"

import { motion } from "framer-motion"
import { CheckCircle, LucideIcon } from "lucide-react"
import { fadeUp } from "@/lib/animations"

export interface Value {
  title: string
  description: string
  icon?: LucideIcon
}

interface ValuesGridProps {
  values: Value[]
  iconComponent?: LucideIcon
}

export function ValuesGrid({ values, iconComponent = CheckCircle }: ValuesGridProps) {
  const IconComponent = iconComponent

  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {values.map((value, idx) => {
        const ValueIcon = value.icon || IconComponent

        return (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-2xl bg-white p-6 shadow-md shadow-slate-300/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-rad-orange/15 sm:rounded-3xl sm:p-8"
          >
            <ValueIcon className="h-10 w-10 text-rad-orange sm:h-12 sm:w-12" />
            <h3 className="mt-3 text-lg font-bold text-rad-blue-900 sm:mt-4 sm:text-xl">
              {value.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
              {value.description}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}
