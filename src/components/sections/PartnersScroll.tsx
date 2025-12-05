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
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient overlays */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-50 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-50 to-transparent sm:w-32" />

      {/* Scrolling content - Animation continue */}
      <div className="flex animate-slide gap-6 sm:gap-8 md:gap-10">
        {/* Premier set */}
        {partners.map((partner, idx) => (
          <div
            key={`partner-1-${idx}`}
            className="flex h-24 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm shadow-slate-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md hover:shadow-slate-400/30 sm:h-28 sm:w-48 md:h-32 md:w-56"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-full max-w-full object-contain opacity-95 transition-opacity hover:opacity-100"
            />
          </div>
        ))}

        {/* Deuxième set pour défilement infini */}
        {partners.map((partner, idx) => (
          <div
            key={`partner-2-${idx}`}
            className="flex h-24 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm shadow-slate-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md hover:shadow-slate-400/30 sm:h-28 sm:w-48 md:h-32 md:w-56"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-full max-w-full object-contain opacity-95 transition-opacity hover:opacity-100"
            />
          </div>
        ))}

        {/* Troisième set pour assurer un défilement fluide */}
        {partners.map((partner, idx) => (
          <div
            key={`partner-3-${idx}`}
            className="flex h-24 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm shadow-slate-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md hover:shadow-slate-400/30 sm:h-28 sm:w-48 md:h-32 md:w-56"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-full max-w-full object-contain opacity-95 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
