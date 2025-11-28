"use client"

// ✅ APRÈS : Framer Motion optimisé - Visible immédiatement avec animation subtile

import { motion } from "framer-motion"
import { MapPin, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Link } from "@/i18n/routing"

export interface Project {
  id: string
  title: string
  description: string
  sector: string
  location: string
  year: string
  status: string
  image: string
}

interface ProjectsGridProps {
  projects: Project[]
  learnMoreText?: string
}

export function ProjectsGrid({ projects, learnMoreText = "En savoir plus" }: ProjectsGridProps) {
  return (
    <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <Link key={project.id} href={`/contracts/${project.id}` as any}>
          <motion.article
            initial={{ opacity: 1, y: 0 }}  
            whileInView={{ y: -8 }}       
            viewport={{ once: true, amount: 0.1 }} 
            transition={{
              duration: 0.3,               
              delay: index * 0.05,          
              ease: "easeOut"
            }}
            className="group relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/40 sm:min-h-[480px] sm:rounded-3xl md:min-h-[540px]"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-64 lg:h-72">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                quality={80}
              />

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-rad-blue-900/90 via-rad-blue-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Sector badge */}
              <div className="absolute right-4 top-4">
                <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-rad-blue-900 shadow-lg backdrop-blur-sm">
                  {project.sector}
                </span>
              </div>

              {/* Status badge */}
              <div className="absolute left-4 top-4">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-lg backdrop-blur-sm ${
                    project.status === "Terminé" || project.status === "Completed"
                      ? "bg-green-500/90 text-white"
                      : "bg-rad-orange/90 text-white"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  {project.status}
                </span>
              </div>

              {/* Info overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0 sm:p-6">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
              <h3 className="text-lg font-bold text-rad-blue-900 transition-colors group-hover:text-rad-orange sm:text-xl md:text-2xl">
                {project.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:text-base md:text-base">
                {project.description}
              </p>

              {/* CTA */}
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-rad-orange transition-all group-hover:gap-3">
                <span>{learnMoreText}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </motion.article>
        </Link>
      ))}
    </div>
  )
}
