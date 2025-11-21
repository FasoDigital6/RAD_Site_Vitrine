import { Skeleton } from "@/components/ui/skeleton-loader"

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SKELETON */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-12 pt-24 sm:pb-16 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="text-center">
            <Skeleton className="mx-auto mb-6 h-8 w-40 rounded-full bg-white/20" />
            <Skeleton className="mx-auto mb-4 h-12 w-3/4 bg-white/20 sm:h-16" />
            <div className="mx-auto max-w-2xl space-y-2">
              <Skeleton className="mx-auto h-5 w-full bg-white/20" />
              <Skeleton className="mx-auto h-5 w-5/6 bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SKELETON */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          {/* Timeline skeleton */}
          <div className="space-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-6">
                <Skeleton className="h-16 w-16 flex-shrink-0 rounded-full" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-6 w-1/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
