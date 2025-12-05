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
    <div className="w-full">
      {/* Grid statique affichant tous les partenaires */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-8">
        {partners.map((partner, idx) => (
          <div
            key={`partner-${idx}`}
            className="flex h-24 items-center justify-center rounded-xl border border-slate-200/60 bg-white p-4 shadow-md shadow-slate-300/60 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-400/40 sm:h-28 sm:p-5 md:h-32 md:p-6"
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
