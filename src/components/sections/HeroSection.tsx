"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { fadeUp } from "@/lib/animations"

interface HeroSlide {
  title: string
  subtitle: string
  image: string
}

interface HeroSectionProps {
  currentSlide: number
  slide: HeroSlide
  badge: string
  expertiseTitle: string
  expertiseTags: string[]
  scrollText: string
  onExploreClick?: () => void
}

export function HeroSection({
  currentSlide,
  slide,
  badge,
  expertiseTitle,
  expertiseTags,
  scrollText,
  onExploreClick,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative h-[100vh] min-h-[600px] w-full overflow-hidden bg-rad-blue-900 sm:h-[90vh]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-rad-blue-900/90 via-rad-blue-900/85 to-rad-blue-900/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          key={currentSlide}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl space-y-4 text-white sm:space-y-6 md:space-y-8"
        >
          {/* Badge tricolore */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md ring-1 ring-white/20 sm:gap-3 sm:px-4 sm:py-2 sm:text-[11px]">
            <span className="flex h-1 w-8 overflow-hidden rounded-full sm:w-10">
              <span className="flex-1 bg-rad-red" />
              <span className="flex-1 bg-rad-yellow" />
              <span className="flex-1 bg-rad-green" />
            </span>
            <span className="hidden sm:inline">{badge}</span>
            <span className="sm:hidden">RAD</span>
          </div>

          {/* Title */}
          <h1 className="whitespace-pre-line text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base font-medium leading-relaxed text-white sm:text-lg md:text-xl lg:text-2xl">
            {slide.subtitle}
          </p>

          {/* CTA Button */}
          {onExploreClick && (
            <div className="pt-2 sm:pt-4">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-2 rounded-full bg-rad-orange px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60 sm:gap-3 sm:px-8 sm:py-4 sm:text-base"
              >
                <span>Explorer nos services</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5 sm:h-5 sm:w-5" />
              </button>
            </div>
          )}

          {/* Expertise tags */}
          <div className="space-y-2 pt-2 sm:space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-200/80 sm:text-xs">
              {expertiseTitle}
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-medium sm:gap-3 sm:text-sm">
              {expertiseTags.map((tag, index) => (
                <span
                  key={index}
                  className="whitespace-pre-line rounded-full border border-white/30 bg-white/5 px-3 py-1.5 text-center leading-snug backdrop-blur-sm transition hover:bg-white/10 sm:px-4 sm:py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 right-4 z-20 hidden flex-col items-center gap-2 sm:flex sm:bottom-8 sm:right-8 sm:gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-white drop-shadow-lg sm:text-xs">
          {scrollText}
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white drop-shadow-lg sm:h-6 sm:w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
