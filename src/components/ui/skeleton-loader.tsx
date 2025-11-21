import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-200", className)}
      {...props}
    />
  )
}

// Skeleton pour ProjectCard
export function ProjectCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg">
      {/* Image skeleton */}
      <Skeleton className="h-64 w-full rounded-none sm:h-72 md:h-80" />

      {/* Content skeleton */}
      <div className="p-6 sm:p-8">
        {/* Badge skeleton */}
        <Skeleton className="mb-4 h-6 w-24 rounded-full" />

        {/* Title skeleton */}
        <Skeleton className="mb-3 h-8 w-3/4" />

        {/* Description skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        {/* Meta info skeleton */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>

        {/* Button skeleton */}
        <Skeleton className="mt-6 h-12 w-full rounded-full" />
      </div>
    </div>
  )
}

// Skeleton pour Stats Banner
export function StatsBannerSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
      {[1, 2].map((i) => (
        <Skeleton
          key={i}
          className="h-48 w-full rounded-3xl sm:h-56 md:h-64"
        />
      ))}
    </div>
  )
}

// Skeleton pour Hero Section
export function HeroSectionSkeleton() {
  return (
    <div className="relative flex min-h-[75vh] w-full items-center overflow-hidden bg-rad-blue-900 sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16">
        <div className="max-w-4xl space-y-6">
          {/* Badge skeleton */}
          <Skeleton className="h-10 w-32 rounded-full bg-white/20" />

          {/* Title skeleton */}
          <Skeleton className="h-16 w-3/4 bg-white/20 sm:h-20 md:h-24" />

          {/* Subtitle skeleton */}
          <div className="space-y-3">
            <Skeleton className="h-6 w-full bg-white/20" />
            <Skeleton className="h-6 w-5/6 bg-white/20" />
          </div>

          {/* Button skeleton */}
          <Skeleton className="h-14 w-64 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  )
}

// Skeleton pour ServiceCard
export function ServiceCardSkeleton() {
  return (
    <div className="flex min-h-[320px] flex-col rounded-3xl bg-white p-7 shadow-md sm:min-h-[360px] md:min-h-[380px]">
      {/* Icon skeleton */}
      <Skeleton className="mb-5 h-16 w-16 rounded-xl" />

      {/* Title skeleton */}
      <Skeleton className="mb-3 h-7 w-3/4" />

      {/* Description skeleton */}
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>

      {/* Details skeleton */}
      <Skeleton className="mt-3 h-4 w-32" />
    </div>
  )
}

// Page Loader complet
export function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        {/* Logo spinner */}
        <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-rad-blue-900" />
        <p className="text-sm font-medium text-slate-600">Chargement...</p>
      </div>
    </div>
  )
}
