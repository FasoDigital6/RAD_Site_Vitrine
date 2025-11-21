"use client"

import { motion, type Variants } from "framer-motion"
import { MapPin, Calendar, Users, Award, CheckCircle, ArrowLeft } from "lucide-react"
import { Footer } from "@/components/Footer"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import Image from "next/image"
import { useParams } from "next/navigation"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

// Images des projets
const projectImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&q=80",
  "2": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
  "3": "/surface-equipment-miningtrucks.jpg",
  "4": "/route.jpg",
}

export default function ProjectDetailPage() {
  const params = useParams()
  const id = params.id as string
  const t = useTranslations('projects')
  const tCommon = useTranslations('common')

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-20 pt-32">
        <div className="absolute inset-0">
          <Image
            src={projectImages[id] || projectImages["1"]}
            alt={t(`list.${id}.title`)}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-rad-blue-900/95 via-rad-blue-900/90 to-rad-blue-900/95" />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          {/* Breadcrumb */}
          <Link
            href="/contracts"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>{t('badge')}</span>
          </Link>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            {/* Status badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-300 backdrop-blur-sm ring-1 ring-green-500/30">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              {t(`list.${id}.status`)}
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {t(`list.${id}.title`)}
            </h1>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              {t(`list.${id}.description`)}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-5 w-5 text-rad-orange" />
                <span className="font-medium">{t(`list.${id}.location`)}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="h-5 w-5 text-rad-orange" />
                <span className="font-medium">{t(`list.${id}.year`)}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="h-5 w-5 text-rad-orange" />
                <span className="font-medium">{t(`list.${id}.sector`)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Image principale */}
                <div className="relative h-96 overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src={projectImages[id] || projectImages["1"]}
                    alt={t(`list.${id}.title`)}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Description détaillée */}
                <div className="rounded-3xl bg-white p-8 shadow-lg">
                  <h2 className="mb-6 text-3xl font-bold text-rad-blue-900">
                    À propos du projet
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg leading-relaxed text-slate-700">
                      Ce projet représente une étape majeure dans le développement des infrastructures en Afrique de l'Ouest.
                      Notre équipe a travaillé en étroite collaboration avec les parties prenantes locales et internationales
                      pour garantir la réussite de cette initiative.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                      Les travaux ont été réalisés dans le respect des normes internationales les plus strictes,
                      en utilisant des technologies de pointe et en mobilisant une expertise multisectorielle.
                    </p>
                  </div>
                </div>

                {/* Impacts & Résultats */}
                <div className="rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-white shadow-lg">
                  <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                    <CheckCircle className="h-8 w-8 text-rad-orange" />
                    Impacts & Résultats
                  </h2>
                  <div className="space-y-4">
                    {t.raw(`list.${id}.impacts`).map((impact: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                        <p className="text-lg leading-relaxed">{impact}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Galerie d'images (placeholder) */}
                <div className="rounded-3xl bg-white p-8 shadow-lg">
                  <h2 className="mb-6 text-3xl font-bold text-rad-blue-900">
                    Galerie
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="relative h-48 overflow-hidden rounded-2xl bg-slate-200">
                        <Image
                          src={projectImages[id] || projectImages["1"]}
                          alt={`Galerie ${i}`}
                          fill
                          className="object-cover opacity-60 transition hover:opacity-100"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="sticky top-24 space-y-6"
              >
                {/* Informations clés */}
                <div className="rounded-3xl bg-white p-6 shadow-lg">
                  <h3 className="mb-4 text-xl font-bold text-rad-blue-900">
                    Informations clés
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 pb-3">
                      <p className="text-sm font-semibold text-slate-500">Secteur</p>
                      <p className="mt-1 text-base font-bold text-rad-blue-900">
                        {t(`list.${id}.sector`)}
                      </p>
                    </div>
                    <div className="border-b border-slate-200 pb-3">
                      <p className="text-sm font-semibold text-slate-500">Localisation</p>
                      <p className="mt-1 text-base font-bold text-rad-blue-900">
                        {t(`list.${id}.location`)}
                      </p>
                    </div>
                    <div className="border-b border-slate-200 pb-3">
                      <p className="text-sm font-semibold text-slate-500">Année</p>
                      <p className="mt-1 text-base font-bold text-rad-blue-900">
                        {t(`list.${id}.year`)}
                      </p>
                    </div>
                    <div className="pb-3">
                      <p className="text-sm font-semibold text-slate-500">Statut</p>
                      <p className="mt-1 text-base font-bold text-green-600">
                        {t(`list.${id}.status`)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Contact */}
                <div className="rounded-3xl bg-gradient-to-br from-rad-orange to-rad-orange-hover p-6 text-white shadow-lg">
                  <h3 className="mb-3 text-xl font-bold">
                    Un projet similaire ?
                  </h3>
                  <p className="mb-4 text-sm text-white/90">
                    Discutons de votre projet et découvrons comment nous pouvons vous accompagner.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-rad-orange transition hover:bg-slate-50"
                  >
                    <span>{tCommon("contactUs")}</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>

                {/* Partenaires */}
                <div className="rounded-3xl bg-white p-6 shadow-lg">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-rad-blue-900">
                    <Users className="h-6 w-6" />
                    Partenaires
                  </h3>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-600">
                      Ce projet a été réalisé en collaboration avec nos partenaires stratégiques locaux et internationaux.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETS SIMILAIRES */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-rad-blue-900">
              Autres projets
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Découvrez nos autres réalisations
            </p>
          </motion.div>

          <div className="flex items-center justify-center">
            <Link
              href="/contracts"
              className="group rounded-full bg-rad-blue-900 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-rad-blue-800"
            >
              <span className="flex items-center gap-2">
                Voir tous les projets
                <ArrowLeft className="h-5 w-5 rotate-180 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
