"use client"

// ✅ APRÈS : Framer Motion optimisé - Visible immédiatement avec animation subtile

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { Link } from "@/i18n/routing"

export interface Service {
  key: string
  title: string
  description: string
  details: string
  icon: LucideIcon
  featured?: boolean
}

interface ServicesGridProps {
  services: Service[]
  linkHref?: string
  learnMoreText?: string
}

export function ServicesGrid({ services, linkHref = "/services#domaines", learnMoreText = "Learn more" }: ServicesGridProps) {
  return (
    <div className="grid gap-6 sm:gap-8 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const IconComponent = service.icon
        const isFeatured = service.featured

        return (
          <Link key={service.key} href={linkHref}>
            <motion.article
              initial={{ opacity: 1, y: 0 }}  // ✅ Visible dès le départ
              whileInView={{ y: -8 }}         // ✅ Léger lift au scroll
              viewport={{ once: true, amount: 0.1 }}  // ✅ 10% au lieu de 20%
              transition={{
                duration: 0.3,                // ✅ 0.3s au lieu de 0.7s
                delay: index * 0.05,          // ✅ 0.05s au lieu de 0.1s
                ease: "easeOut"
              }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm shadow-slate-300/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rad-orange/15 sm:rounded-3xl sm:p-8 md:p-10 ${isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              {/* Badge "Phare" pour services mis en avant */}
              {isFeatured && (
                <div className="absolute right-4 top-3 rounded-full bg-rad-orange/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg backdrop-blur-sm sm:top-4">
                  Phare
                </div>
              )}

              {/* Icône */}
              <div
                className={`mb-3 flex items-center justify-center rounded-xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 text-white shadow-md shadow-rad-blue-900/15 transition-all duration-300 group-hover:scale-105 group-hover:from-rad-orange group-hover:to-rad-orange-hover group-hover:shadow-lg group-hover:shadow-rad-orange/20 sm:mb-5 ${isFeatured ? "h-16 w-16 sm:h-20 sm:w-20" : "h-14 w-14 sm:h-16 sm:w-16"
                  }`}
              >
                <IconComponent className={isFeatured ? "h-8 w-8 sm:h-10 sm:w-10" : "h-7 w-7 sm:h-8 sm:w-8"} />
              </div>

              {/* Titre */}
              <h3 className="text-lg font-bold text-rad-blue-900 transition-colors group-hover:text-rad-orange sm:text-xl md:text-2xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600 sm:mt-2 sm:text-base md:text-base">
                {service.description}
              </p>

              {/* Détails */}
              {service.details && (
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-rad-orange sm:mt-3">
                  {service.details}
                </p>
              )}

              {/* Flèche de navigation au hover */}
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-rad-orange opacity-0 transition-all group-hover:opacity-100 sm:mt-5 sm:text-sm">
                <span>{learnMoreText}</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.article>
          </Link>
        )
      })}
    </div>
  )
}
