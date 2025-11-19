"use client"

import { motion } from "framer-motion"
import { LucideIcon, CheckCircle } from "lucide-react"
import { fadeInLeft, fadeInRight, fadeUp } from "@/lib/animations"

export interface MissionVisionItem {
  title: string
  content: string
  icon: LucideIcon
}

export interface Value {
  title: string
  description: string
}

interface MissionVisionValuesSectionProps {
  mission: MissionVisionItem
  vision: MissionVisionItem
  valuesTitle: string
  values: Value[]
}

export function MissionVisionValuesSection({
  mission,
  vision,
  valuesTitle,
  values,
}: MissionVisionValuesSectionProps) {
  const MissionIcon = mission.icon
  const VisionIcon = vision.icon

  return (
    <section className="bg-gradient-to-b from-white to-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Mission & Vision */}
        <div className="mb-12 grid gap-6 sm:mb-16 sm:gap-8 md:grid-cols-2">
          {/* Mission */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl bg-white p-8 shadow-xl shadow-slate-300/60 sm:rounded-3xl sm:p-10"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
              <MissionIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl font-bold text-rad-blue-900 sm:text-2xl">
              {mission.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-base">
              {mission.content}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl bg-white p-8 shadow-xl shadow-slate-300/60 sm:rounded-3xl sm:p-10"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
              <VisionIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl font-bold text-rad-blue-900 sm:text-2xl">
              {vision.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-base">
              {vision.content}
            </p>
          </motion.div>
        </div>

        {/* Values Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-8 text-center sm:mb-12"
        >
          <h3 className="text-2xl font-bold text-rad-blue-900 sm:text-3xl md:text-4xl">
            {valuesTitle}
          </h3>
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-300/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20 sm:rounded-3xl sm:p-8"
            >
              <CheckCircle className="h-10 w-10 text-rad-orange sm:h-12 sm:w-12" />
              <h4 className="mt-3 text-lg font-bold text-rad-blue-900 sm:mt-4 sm:text-xl">
                {value.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
