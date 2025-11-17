"use client"

import { motion, type Variants } from "framer-motion"
import { Computer, Building2, ShoppingCart, Truck, ArrowRight, CheckCircle, Pickaxe, UserCog } from "lucide-react"
import { Footer } from "@/components/Footer"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import Image from "next/image"

// Animations cohérentes
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

export default function ServicesPage() {
  const t = useTranslations('services')

  // Services avec leurs icônes et images
  const domainesConfig = [
    {
      key: 'commerce',
      icon: ShoppingCart,
      featured: true,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      key: 'mining',
      icon: Pickaxe,
      featured: true,
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
    },
    {
      key: 'transport',
      icon: Truck,
      featured: false,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      key: 'construction',
      icon: Building2,
      featured: false,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    },
    {
      key: 'services',
      icon: UserCog,
      featured: false,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SERVICES */}
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
                <span className="flex-1 bg-rad-red" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-green" />
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

      {/* DOMAINES D'INTERVENTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24">
        {/* Effet de fond décoratif */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-rad-orange/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          {/* En-tête de section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl lg:text-6xl">
              {t('intro.title')}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              {t('intro.subtitle')}
            </p>
          </motion.div>

          {/* Grille des services - Design amélioré */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {domainesConfig.map((domaine, index) => {
              const IconComponent = domaine.icon

              return (
                <motion.article
                  key={domaine.key}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-sm shadow-slate-200 ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/10 hover:ring-rad-orange/20"
                >
                  {/* Accent décoratif supérieur */}
                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-rad-orange via-rad-orange-hover to-rad-orange transition-all duration-500 group-hover:h-1.5" />

                  {/* Icône avec animation */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 text-white shadow-lg shadow-rad-blue-900/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:from-rad-orange group-hover:to-rad-orange-hover group-hover:shadow-rad-orange/30">
                    <IconComponent className="h-8 w-8" strokeWidth={2.5} />
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-3 text-xl font-bold text-rad-blue-900 transition-colors group-hover:text-rad-orange md:text-2xl">
                      {t(`domains.${domaine.key}.title`)}
                    </h3>

                    <p className="mb-4 flex-1 text-base leading-relaxed text-slate-600">
                      {t(`domains.${domaine.key}.description`)}
                    </p>

                    {/* Badge de détails */}
                    <div className="inline-flex items-center gap-2 self-start rounded-full bg-rad-orange/10 px-4 py-2 text-sm font-semibold text-rad-orange">
                      <CheckCircle className="h-4 w-4" />
                      <span>{t(`domains.${domaine.key}.details`)}</span>
                    </div>
                  </div>

                  {/* Effet de brillance subtil */}
                  <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-rad-orange/5 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* DÉTAILS DES SERVICES - ALTERNANCE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-16 text-center text-4xl font-bold text-rad-blue-900 md:text-5xl"
          >
            {t('details.title')}
          </motion.h2>

          <div className="space-y-14">
            {domainesConfig.map((service, index) => {
              const isEven = index % 2 === 0
              const IconComponent = service.icon

              return (
                <motion.article
                  key={service.key}
                  variants={isEven ? fadeInLeft : fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`grid gap-10 md:grid-cols-2 md:items-center ${
                    !isEven ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* TEXTE */}
                  <div className={isEven ? "order-1" : "order-2 md:order-1"}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30">
                      <IconComponent className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rad-orange">
                      {t('details.serviceLabel')} {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-rad-blue-900 md:text-3xl">
                      {t(`domains.${service.key}.title`)}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-700">
                      {t(`domains.${service.key}.description`)}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {t.raw(`domains.${service.key}.bullets`).map((bullet: string, i: number) => (
                        <li key={i} className="flex gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rad-orange" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* IMAGE */}
                  <div className={isEven ? "order-2" : "order-1"}>
                    <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-slate-200 shadow-lg shadow-slate-300/80">
                      <Image
                        src={service.image}
                        alt={t(`domains.${service.key}.title`)}
                        fill
                        className="object-cover transition duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION MÉTHODOLOGIE */}
      <section className="bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-4 text-center text-3xl font-bold md:text-4xl"
          >
            {t('methodology.title')}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-10 text-center text-slate-200"
          >
            {t('methodology.subtitle')}
          </motion.p>

          <div className="grid gap-6 md:grid-cols-4">
            {['1', '2', '3', '4'].map((num, idx) => (
              <motion.div
                key={num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl bg-white/10 p-6 text-slate-100 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rad-orange text-2xl font-bold text-white shadow-lg shadow-rad-orange/30">
                  {num}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{t(`methodology.steps.${num}.title`)}</h3>
                <p className="text-sm text-slate-100/90">{t(`methodology.steps.${num}.description`)}</p>
              </motion.div>
            ))}
          </div>
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
                href="/projects"
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
