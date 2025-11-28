// ✅ APRÈS : Conversion CSS pur - Affichage immédiat, pas de "use client"

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
      <section className={`mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0 ${className}`}>
        <div className="grid grid-cols-1 gap-6 animate-fade-in sm:gap-8 md:grid-cols-2">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex h-full flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 px-8 py-8 text-center text-white shadow-xl shadow-rad-blue-900/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/40 sm:px-10 sm:py-10 md:px-12 md:py-12 delay-${idx * 100}`}
            >
              <div className="mb-3 text-3xl sm:mb-4 sm:text-4xl">{stat.icon}</div>
              <p className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-white sm:mt-4 sm:text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }

  // Cards variant
  return (
    <section className={`bg-white py-16 sm:py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 gap-8 animate-fade-in md:grid-cols-3 md:gap-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-center text-white shadow-xl shadow-rad-blue-900/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/40 sm:rounded-3xl sm:p-10 md:p-12 delay-${idx * 100}`}
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
        </div>
      </div>
    </section>
  )
}
