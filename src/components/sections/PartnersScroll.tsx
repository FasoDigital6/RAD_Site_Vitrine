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
    <div className="w-full px-4 sm:px-6 lg:px-0">
      {/* Grid statique affichant tous les partenaires */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 lg:gap-6">
        {partners.map((partner, idx) => (
          <div
            key={`partner-${idx}`}
            className="flex aspect-square items-center justify-center rounded-lg border border-slate-200/60 bg-white p-3 shadow-sm shadow-slate-300/40 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md hover:shadow-slate-400/30 sm:rounded-xl sm:p-4 md:p-5"
            style={{ animationDelay: `${idx * 100}ms` }}
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
