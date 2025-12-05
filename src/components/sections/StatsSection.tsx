
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
        <div className="grid grid-cols-1 gap-8 animate-fade-in sm:gap-10 md:grid-cols-2">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex h-full flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 px-10 py-10 text-center text-white shadow-lg shadow-rad-blue-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rad-orange/15 sm:px-12 sm:py-12 md:px-14 md:py-14"
              style={{ animationDelay: `${idx * 100}ms` }}
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
    <section className={`bg-white py-20 sm:py-24 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 gap-8 animate-fade-in md:grid-cols-3 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-10 text-center text-white shadow-lg shadow-rad-blue-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rad-orange/15 sm:rounded-3xl sm:p-12 md:p-14"
              style={{ animationDelay: `${idx * 100}ms` }}
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
