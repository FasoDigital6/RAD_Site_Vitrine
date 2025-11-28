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
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
      {members.map((member, idx) => (
        <div
          key={member.key}
          className={`animate-scale-in overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20 sm:rounded-3xl delay-${idx * 50}`}
        >
          <div className="relative h-48 sm:h-56 md:h-64">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-base font-bold text-rad-blue-900 sm:text-lg">
              {member.name}
            </h3>
            <p className="mt-1 text-xs font-medium text-rad-orange sm:text-sm">
              {member.role}
            </p>
            <p className="mt-2 text-xs text-slate-600 sm:mt-3">
              {member.expertise}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
