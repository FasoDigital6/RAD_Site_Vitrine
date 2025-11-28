// ✅ APRÈS : Conversion CSS pur - Affichage immédiat, pas de "use client"

import { LucideIcon } from "lucide-react"

export interface MissionVisionValueItem {
  title: string
  content: string
  icon: LucideIcon
}

interface MissionVisionValuesCardsProps {
  mission: MissionVisionValueItem
  vision: MissionVisionValueItem
  values: MissionVisionValueItem
}

export function MissionVisionValuesCards({
  mission,
  vision,
  values,
}: MissionVisionValuesCardsProps) {
  const MissionIcon = mission.icon
  const VisionIcon = vision.icon
  const ValuesIcon = values.icon

  return (
    <section className="bg-gradient-to-b from-white to-slate-100 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {/* Mission */}
          <div className="animate-scale-in rounded-2xl bg-white p-6 shadow-xl shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20 sm:rounded-3xl sm:p-8 md:p-10">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
              <MissionIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl font-bold text-rad-blue-900 sm:text-2xl">
              {mission.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-base">
              {mission.content}
            </p>
          </div>

          {/* Vision */}
          <div className="animate-scale-in delay-100 rounded-2xl bg-white p-6 shadow-xl shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20 sm:rounded-3xl sm:p-8 md:p-10">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
              <VisionIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl font-bold text-rad-blue-900 sm:text-2xl">
              {vision.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-base">
              {vision.content}
            </p>
          </div>

          {/* Values */}
          <div className="animate-scale-in delay-200 rounded-2xl bg-white p-6 shadow-xl shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20 sm:rounded-3xl sm:p-8 md:p-10">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
              <ValuesIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl font-bold text-rad-blue-900 sm:text-2xl">
              {values.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-base">
              {values.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
