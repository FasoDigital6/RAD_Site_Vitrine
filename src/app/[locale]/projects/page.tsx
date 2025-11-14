"use client"

import { motion, type Variants } from "framer-motion"
import { MapPin, Calendar, CheckCircle, ArrowRight } from "lucide-react"
import { Footer } from "@/components/Footer"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

// Animations cohérentes
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export default function ProjectsPage() {
  const t = useTranslations('projects')
  const tCommon = useTranslations('common')

  const realisations = [
    {
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
      location: t('list.1.location'),
      year: t('list.1.year'),
      status: t('list.1.status'),
      stats: [
        { label: t('stats.duration'), value: t('list.1.stats.duration') },
        { label: t('stats.budget'), value: t('list.1.stats.budget') },
        { label: t('stats.impact'), value: t('list.1.stats.impact') },
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      location: t('list.2.location'),
      year: t('list.2.year'),
      status: t('list.2.status'),
      stats: [
        { label: t('stats.capacity'), value: t('list.2.stats.capacity') },
        { label: t('stats.fleet'), value: t('list.2.stats.fleet') },
        { label: t('stats.tonnage'), value: t('list.2.stats.tonnage') },
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1625218057599-ae80b8b63a93?w=800&q=80",
      location: t('list.3.location'),
      year: t('list.3.year'),
      status: t('list.3.status'),
      stats: [
        { label: t('stats.equipment'), value: t('list.3.stats.equipment') },
        { label: t('stats.partner'), value: t('list.3.stats.partner') },
        { label: t('stats.maintenance'), value: t('list.3.stats.maintenance') },
      ],
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      location: t('list.4.location'),
      year: t('list.4.year'),
      status: t('list.4.status'),
      stats: [
        { label: t('stats.housing'), value: t('list.4.stats.housing') },
        { label: t('stats.surface'), value: t('list.4.stats.surface') },
        { label: t('stats.beneficiaries'), value: t('list.4.stats.beneficiaries') },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO PROJETS */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900" />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center text-white"
          >
            {/* Badge tricolore */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md ring-1 ring-white/20">
              <span className="flex h-1 w-10 overflow-hidden rounded-full">
                <span className="flex-1 bg-rad-green" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-red" />
              </span>
              {t('badge')}
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { value: t('stats.completed.value'), label: t('stats.completed.label'), icon: t('stats.completed.icon') },
              { value: t('stats.budget.value'), label: t('stats.budget.label'), icon: t('stats.budget.icon') },
              { value: t('stats.jobs.value'), label: t('stats.jobs.label'), icon: t('stats.jobs.icon') },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-center text-white shadow-xl shadow-rad-blue-900/30"
              >
                <div className="mb-2 text-3xl">{stat.icon}</div>
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-200">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTE DES PROJETS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 lg:px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {['1', '2', '3', '4'].map((index, idx) => {
            const projet = realisations[idx]
            return (
              <motion.article
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-400/40"
              >
                {/* Image avec overlay au hover */}
                <div className="relative h-64 w-full overflow-hidden md:h-72">
                  <img
                    src={projet.image}
                    alt={t(`list.${index}.title`)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rad-blue-900/90 via-rad-blue-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-rad-blue-900 shadow-lg backdrop-blur-sm">
                      {t(`list.${index}.sector`)}
                    </span>
                  </div>

                  <div className="absolute left-4 top-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-sm ${
                      projet.status === "Terminé" || projet.status === "Completed"
                        ? "bg-green-500/90 text-white"
                        : "bg-rad-orange/90 text-white"
                    }`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      {projet.status}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                        <MapPin className="h-4 w-4" />
                        {projet.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                        <Calendar className="h-4 w-4" />
                        {projet.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-rad-blue-900 md:text-2xl">
                    {t(`list.${index}.title`)}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {t(`list.${index}.description`)}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                    {projet.stats.map((stat, statIdx) => (
                      <div key={statIdx} className="text-center">
                        <p className="text-lg font-bold text-rad-blue-900 md:text-xl">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-2">
                    {t.raw(`list.${index}.impacts`).map((impact: string, i: number) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rad-orange" />
                        <span>{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-rad-blue-900 md:text-4xl">
              {t('cta.title')}
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="group rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
              >
                <span className="flex items-center gap-2">
                  {t('cta.primary')}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/services"
                className="rounded-full border-2 border-rad-blue-900 px-8 py-4 text-base font-semibold text-rad-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-900/5"
              >
                {t('cta.secondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
