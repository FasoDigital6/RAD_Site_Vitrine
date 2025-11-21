import { HeroSectionSkeleton, ServiceCardSkeleton, ProjectCardSkeleton, Skeleton } from "@/components/ui/skeleton-loader"

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SKELETON */}
      <HeroSectionSkeleton />

      {/* ABOUT SECTION SKELETON */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-0">
        <div className="mb-8 text-center sm:mb-12">
          <Skeleton className="mx-auto mb-4 h-8 w-32 rounded-full" />
          <Skeleton className="mx-auto mb-4 h-10 w-2/3 sm:h-12" />
          <div className="mx-auto max-w-3xl space-y-2">
            <Skeleton className="mx-auto h-4 w-full" />
            <Skeleton className="mx-auto h-4 w-5/6" />
          </div>
        </div>

        {/* Stats skeleton */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-3xl" />
          ))}
        </div>

        {/* Description skeleton */}
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </section>

      {/* MISSION/VISION/VALUES SKELETON */}
      <section className="bg-slate-100 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-3xl bg-white p-8 shadow-md">
                <Skeleton className="mb-4 h-12 w-12 rounded-full" />
                <Skeleton className="mb-3 h-7 w-32" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SKELETON */}
      <section className="bg-slate-100 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <Skeleton className="mx-auto mb-8 h-10 w-1/3 sm:mb-12" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SKELETON */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-4">
          <Skeleton className="mx-auto mb-8 h-10 w-1/3 sm:mb-12" />
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SKELETON */}
      <section className="bg-slate-100 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <Skeleton className="mx-auto mb-8 h-10 w-1/3 sm:mb-12" />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-3xl bg-white p-6 text-center shadow-md">
                <Skeleton className="mx-auto mb-4 h-24 w-24 rounded-full" />
                <Skeleton className="mx-auto mb-2 h-5 w-3/4" />
                <Skeleton className="mx-auto h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SKELETON */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <Skeleton className="mx-auto mb-8 h-10 w-1/4 sm:mb-12" />
          <div className="flex gap-8 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-20 w-40 flex-shrink-0 rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SKELETON */}
      <section className="bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 md:px-8">
          <Skeleton className="mx-auto mb-4 h-10 w-3/4 bg-white/20 sm:h-12" />
          <Skeleton className="mx-auto mb-8 h-5 w-2/3 bg-white/20" />
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Skeleton className="h-14 w-full rounded-full bg-white/20 sm:w-48" />
            <Skeleton className="h-14 w-full rounded-full bg-white/20 sm:w-48" />
          </div>
        </div>
      </section>
    </main>
  )
}
