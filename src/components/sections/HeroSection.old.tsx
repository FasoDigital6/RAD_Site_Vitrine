"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Pause, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

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
  onExploreClick?: () => void
  onSlideChange?: (index: number) => void
  isPaused?: boolean
  onTogglePause?: () => void
  totalSlides?: number
}

export function HeroSection({
  currentSlide,
  slide,
  badge,
  scrollText,
  onExploreClick,
  onSlideChange,
  isPaused = false,
  onTogglePause,
  totalSlides = 3,
}: HeroSectionProps) {
  // Gestion du focus pour accessibility
  const handleDotClick = (index: number) => {
    onSlideChange?.(index)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleDotClick(index)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      const prevIndex = index === 0 ? totalSlides - 1 : index - 1
      handleDotClick(prevIndex)
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      const nextIndex = (index + 1) % totalSlides
      handleDotClick(nextIndex)
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[75vh] w-full items-center overflow-hidden bg-rad-blue-900 sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]"
      aria-label="Hero carousel"
      role="region"
    >
      {/* Background image avec animation de transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
            loading={currentSlide === 0 ? "eager" : "lazy"}
            quality={90}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900/95 via-rad-blue-900/85 to-rad-blue-900/70" />

      {/* Content - Centré verticalement */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-4 text-white sm:space-y-5 md:space-y-6 lg:space-y-7"
          >
            {/* Badge tricolore */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-md ring-1 ring-white/20 sm:gap-3 sm:px-5 sm:py-2 sm:text-sm"
            >
              <span className="flex h-1.5 w-10 overflow-hidden rounded-full sm:w-12">
                <span className="flex-1 bg-rad-red" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-green" />
              </span>
              <span>{badge}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="whitespace-pre-line text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="max-w-2xl text-sm font-medium leading-relaxed text-white/95 sm:text-base md:text-lg lg:text-xl"
            >
              {slide.subtitle}
            </motion.p>

            {/* CTA Button */}
            {onExploreClick && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="pt-1 sm:pt-2"
              >
                <button
                  onClick={onExploreClick}
                  aria-label="Explorer nos services et domaines d'activité"
                  className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-full bg-rad-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rad-orange/50 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/70 sm:gap-3 sm:px-8 sm:py-3.5 sm:text-base md:px-9 md:py-4"
                >
                  <span>Explorer nos services</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5 sm:h-5 sm:w-5" />
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators (dots) - Cliquables + Keyboard nav + ARIA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5 sm:bottom-8 md:bottom-10"
        role="tablist"
        aria-label="Slides de carrousel"
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Aller au slide ${index + 1} sur ${totalSlides}`}
            tabIndex={index === currentSlide ? 0 : -1}
            className={`h-2 min-h-[44px] rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rad-blue-900 ${
              index === currentSlide
                ? "w-10 bg-white sm:w-12"
                : "w-2 bg-white/40 hover:bg-white/60 cursor-pointer"
            }`}
          />
        ))}
      </motion.div>

      {/* Bouton Play/Pause */}
      {onTogglePause && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          onClick={onTogglePause}
          aria-label={isPaused ? "Reprendre le carrousel" : "Mettre en pause le carrousel"}
          className="absolute bottom-6 left-6 z-20 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 p-3 backdrop-blur-md ring-1 ring-white/20 transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white sm:bottom-8 md:bottom-10"
        >
          {isPaused ? (
            <Play className="h-5 w-5 text-white" fill="white" />
          ) : (
            <Pause className="h-5 w-5 text-white" />
          )}
        </motion.button>
      )}

      {/* Scroll indicator - Desktop uniquement */}
      <motion.div
        className="absolute bottom-6 right-6 z-20 hidden flex-col items-center gap-2 md:flex md:bottom-10 md:right-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-white/90 drop-shadow-lg">
          {scrollText}
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-white drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </section>
  )
}
