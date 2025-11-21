import { ServiceCardSkeleton, Skeleton } from "@/components/ui/skeleton-loader"

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SKELETON */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-12 pt-24 sm:pb-16 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="text-center">
            <Skeleton className="mx-auto mb-6 h-8 w-40 rounded-full bg-white/20" />
            <Skeleton className="mx-auto mb-4 h-12 w-3/4 bg-white/20 sm:h-16 md:w-2/3" />
            <div className="mx-auto max-w-2xl space-y-2">
              <Skeleton className="mx-auto h-5 w-full bg-white/20" />
              <Skeleton className="mx-auto h-5 w-5/6 bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID SKELETON */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="mb-8 sm:mb-12">
            <Skeleton className="mx-auto mb-4 h-10 w-1/3" />
            <Skeleton className="mx-auto h-4 w-2/3" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
