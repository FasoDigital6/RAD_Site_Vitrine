"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"

interface HeroSlide {
  title: string
  subtitle: string
  image: string
}

interface HeroSectionProps {
  currentSlide: number
  slide: HeroSlide
  badge: string
  scrollText: string
  exploreButtonText?: string
  onExploreClick?: () => void
  totalSlides?: number
}

export function HeroSection({
  currentSlide,
  slide,
  badge,
  scrollText,
  exploreButtonText = "Explore our services",
  onExploreClick,
  totalSlides = 3,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[60vh] w-full items-center overflow-hidden bg-rad-blue-900 sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]"
      aria-label="Hero carousel"
      role="region"
    >
      {/* Background image avec transition CSS */}
      <div className="absolute inset-0">
        <Image
          key={currentSlide}
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover transition-opacity duration-1000 ease-in-out"
          priority={currentSlide === 0}
          loading={currentSlide === 0 ? "eager" : "lazy"}
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900/95 via-rad-blue-900/85 to-rad-blue-900/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16">
        <div className="max-w-4xl space-y-4 text-white sm:space-y-5 md:space-y-6 lg:space-y-7 animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md ring-1 ring-white/20 sm:gap-3 sm:px-5 sm:py-2 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-rad-orange sm:h-2.5 sm:w-2.5"></span>
            <span>{badge}</span>
          </div>

          {/* Title */}
          <h1 className="whitespace-pre-line text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-sm font-medium leading-relaxed text-white/95 sm:text-base md:text-lg lg:text-xl">
            {slide.subtitle}
          </p>

          {/* CTA Button */}
          {onExploreClick && (
            <div className="pt-1 sm:pt-2">
              <button
                onClick={onExploreClick}
                aria-label={exploreButtonText}
                className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full bg-rad-orange px-6 py-3 text-sm font-bold text-white shadow-md shadow-rad-orange/25 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-lg hover:shadow-rad-orange/35 sm:gap-3 sm:px-8 sm:py-3.5 sm:text-base md:px-9 md:py-4"
              >
                <span>{exploreButtonText}</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5 sm:h-5 sm:w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator - Desktop uniquement */}
      <div className="absolute bottom-6 right-6 z-20 hidden flex-col items-center gap-2 md:flex md:bottom-10 md:right-10">
        <p className="text-xs font-bold uppercase tracking-widest text-white/90 drop-shadow-lg">
          {scrollText}
        </p>
        <div className="animate-bounce">
          <ChevronDown className="h-6 w-6 text-white drop-shadow-lg" />
        </div>
      </div>
    </section>
  )
}
