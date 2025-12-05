// ✅ APRÈS : Conversion CSS pur - Affichage immédiat, pas de "use client"

export interface TeamMember {
  key: string
  name: string
  role: string
  expertise: string
  image: string
}

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
      {members.map((member, idx) => (
        <div
          key={member.key}
          className="animate-scale-in group relative aspect-square overflow-hidden rounded-3xl shadow-lg shadow-slate-900/15 ring-1 ring-slate-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-rad-orange/20 hover:ring-rad-orange/50"
          style={{ animationDelay: `${idx * 100}ms` }}
        >
          {/* Background Image - Full size */}
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
          />

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Content overlaid on image - Bottom aligned */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center">
            <div className="space-y-1">
              {/* Name - Moderate size */}
              <h3 className="text-2xl font-bold text-white drop-shadow-2xl sm:text-3xl lg:text-4xl">
                {member.name}
              </h3>

              {/* Role - Subtle */}
              <p className="text-base font-medium text-white/90 drop-shadow-lg sm:text-lg lg:text-xl">
                {member.role}
              </p>

              {/* Expertise - Small */}
              {member.expertise && (
                <p className="text-xs text-white/75 drop-shadow-md sm:text-sm lg:text-base max-w-md mx-auto">
                  {member.expertise}
                </p>
              )}
            </div>
          </div>

          {/* Subtle hover glow effect */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br from-rad-orange/20 via-transparent to-transparent" />
        </div>
      ))}
    </div>
  )
}
