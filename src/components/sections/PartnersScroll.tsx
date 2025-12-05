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
    <div className="w-full py-4">
      {/* Défilement horizontal manuel par l'utilisateur */}
      <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-4 sm:gap-8 md:gap-10 lg:justify-center lg:overflow-visible">
        {partners.map((partner, idx) => (
          <div
            key={`partner-${idx}`}
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
