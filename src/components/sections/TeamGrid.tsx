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
    <div className="grid gap-6 sm:grid-cols-2">
      {members.map((member, idx) => (
        <div
          key={member.key}
          className={`animate-scale-in relative overflow-hidden rounded-3xl bg-white p-6 text-center shadow-lg shadow-slate-300/60 ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20 delay-${idx * 50}`}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rad-orange/10 via-white to-rad-blue-50" />
          <div className="relative mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full ring-4 ring-white shadow-lg sm:mb-5 sm:h-32 sm:w-32">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative space-y-1">
            <p className="mx-auto inline-block rounded-full bg-rad-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rad-orange">
              {member.role}
            </p>
            <h3 className="text-lg font-bold text-rad-blue-900 sm:text-xl">
              {member.name}
            </h3>
            <p className="text-sm text-slate-600 sm:text-base">
              {member.expertise}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
