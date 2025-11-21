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
            <Skeleton className="mx-auto mb-4 h-12 w-2/3 bg-white/20 sm:h-16" />
            <Skeleton className="mx-auto h-5 w-1/2 bg-white/20" />
          </div>
        </div>
      </section>

      {/* CONTACT FORM SKELETON */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-lg sm:p-10 md:p-12">
            {/* Form fields skeleton */}
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-32 w-full rounded-lg" />
              </div>

              {/* Submit button */}
              <Skeleton className="h-14 w-full rounded-full sm:w-48" />
            </div>
          </div>

          {/* Contact info skeleton */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl bg-white p-6 text-center shadow-md">
                <Skeleton className="mx-auto mb-4 h-12 w-12 rounded-full" />
                <Skeleton className="mx-auto mb-2 h-5 w-24" />
                <Skeleton className="mx-auto h-4 w-32" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
