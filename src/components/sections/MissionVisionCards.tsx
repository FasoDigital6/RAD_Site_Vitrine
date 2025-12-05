"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { fadeInLeft, fadeInRight } from "@/lib/animations"

export interface MissionVisionItem {
  title: string
  content: string
  icon: LucideIcon
}

interface MissionVisionCardsProps {
  mission: MissionVisionItem
  vision: MissionVisionItem
}

export function MissionVisionCards({ mission, vision }: MissionVisionCardsProps) {
  const MissionIcon = mission.icon
  const VisionIcon = vision.icon

  return (
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
      {/* Mission */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-2xl bg-white p-8 shadow-md shadow-slate-300/40 sm:rounded-3xl sm:p-10"
      >
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-md shadow-rad-orange/15 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
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
        className="rounded-2xl bg-white p-8 shadow-md shadow-slate-300/40 sm:rounded-3xl sm:p-10"
      >
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-md shadow-rad-orange/15 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
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
  )
}
