"use client"

export interface Partner {
  name: string
  logo: string
}

interface PartnersScrollProps {
  partners: Partner[]
}

export function PartnersScroll({ partners }: PartnersScrollProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-slate-100 to-transparent sm:w-24 md:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-slate-100 to-transparent sm:w-24 md:w-32" />

      {/* Scrolling content */}
      <div className="flex animate-slide gap-8 sm:gap-12 md:gap-16">
        {/* First set */}
        {partners.map((partner, idx) => (
          <div
            key={`partner-1-${idx}`}
            className="flex h-16 w-32 flex-shrink-0 items-center justify-center rounded-xl bg-white p-4 shadow-md shadow-slate-300/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-400/40 sm:h-20 sm:w-40 md:h-24 md:w-48"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-full w-full object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </div>
        ))}

        {/* Duplicate set for infinite scroll */}
        {partners.map((partner, idx) => (
          <div
            key={`partner-2-${idx}`}
            className="flex h-16 w-32 flex-shrink-0 items-center justify-center rounded-xl bg-white p-4 shadow-md shadow-slate-300/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-400/40 sm:h-20 sm:w-40 md:h-24 md:w-48"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-full w-full object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
