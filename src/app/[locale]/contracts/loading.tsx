import { ProjectCardSkeleton, StatsBannerSkeleton, Skeleton } from "@/components/ui/skeleton-loader"

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SKELETON */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-12 pt-24 sm:pb-16 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="text-center">
            {/* Badge skeleton */}
            <div className="mb-6 inline-block">
              <Skeleton className="h-8 w-40 rounded-full bg-white/20" />
            </div>

            {/* Title skeleton */}
            <Skeleton className="mx-auto mb-4 h-12 w-3/4 bg-white/20 sm:h-16 md:w-2/3" />

            {/* Subtitle skeleton */}
            <div className="mx-auto max-w-2xl space-y-2">
              <Skeleton className="mx-auto h-5 w-full bg-white/20" />
              <Skeleton className="mx-auto h-5 w-5/6 bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER SKELETON */}
      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <StatsBannerSkeleton />
        </div>
      </section>

      {/* PROJECTS GRID SKELETON */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          {/* Section header skeleton */}
          <div className="mb-8 text-center sm:mb-12">
            <Skeleton className="mx-auto mb-4 h-10 w-1/2 sm:h-12 md:w-1/3" />
            <div className="mx-auto max-w-2xl space-y-2">
              <Skeleton className="mx-auto h-4 w-3/4" />
              <Skeleton className="mx-auto h-4 w-2/3" />
            </div>
          </div>

          {/* Projects grid skeleton */}
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SKELETON */}
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 md:px-8">
          <Skeleton className="mx-auto mb-4 h-10 w-3/4 sm:h-12" />
          <Skeleton className="mx-auto mb-8 h-5 w-2/3" />
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Skeleton className="h-14 w-full rounded-full sm:w-48" />
            <Skeleton className="h-14 w-full rounded-full sm:w-48" />
          </div>
        </div>
      </section>
    </main>
  )
}
