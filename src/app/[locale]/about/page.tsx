"use client"

import { motion, Variants } from "framer-motion"
import { Award, Globe, Users, Target, TrendingUp, CheckCircle } from "lucide-react"
import { Footer } from "@/components/Footer"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

export default function About() {
  const t = useTranslations('about')
  const tCommon = useTranslations('common')

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900 opacity-95" />
        <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center text-white">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md ring-1 ring-white/20">
              <span className="flex h-1 w-10 overflow-hidden rounded-full">
                <span className="flex-1 bg-rad-red" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-green" />
              </span>
              {t('badge')}
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{t('hero.title')}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">{t('hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {['experience', 'projects', 'countries', 'partners'].map((key) => (
              <div key={key} className="rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-center text-white shadow-xl shadow-rad-blue-900/30">
                <div className="mb-2 text-3xl">{t(`stats.${key}.icon`)}</div>
                <p className="text-4xl font-bold">{t(`stats.${key}.value`)}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-200">{t(`stats.${key}.label`)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 lg:px-0">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center">
          <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">{t('story.title')}</h2>
          <div className="mx-auto mt-4 flex h-1.5 w-32 overflow-hidden rounded-full">
            <span className="flex-1 bg-rad-red" />
            <span className="flex-1 bg-rad-yellow" />
            <span className="flex-1 bg-rad-green" />
          </div>
          <div className="mx-auto mt-8 max-w-4xl space-y-6 text-left text-base leading-relaxed text-slate-700 md:text-lg whitespace-pre-line">
            {t('story.content')}
          </div>
        </motion.div>
      </section>

      {/* MISSION VISION */}
      <section className="bg-gradient-to-b from-white to-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="rounded-3xl bg-white p-10 shadow-xl shadow-slate-300/60">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-rad-blue-900">{t('mission.title')}</h3>
              <p className="mt-4 leading-relaxed text-slate-700">{t('mission.content')}</p>
            </motion.div>
            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="rounded-3xl bg-white p-10 shadow-xl shadow-slate-300/60">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-rad-blue-900">{t('vision.title')}</h3>
              <p className="mt-4 leading-relaxed text-slate-700">{t('vision.content')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="mb-12 text-center text-4xl font-bold text-rad-blue-900 md:text-5xl">{t('values.title')}</motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {['1', '2', '3', '4', '5'].map((num, idx) => (
              <motion.div key={num} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: idx * 0.1 }} className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-300/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20">
                <CheckCircle className="h-12 w-12 text-rad-orange" />
                <h3 className="mt-4 text-xl font-bold text-rad-blue-900">{t(`values.list.${num}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{t(`values.list.${num}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">{t('team.title')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">{t('team.subtitle')}</p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {['operations', 'technical', 'logistics', 'admin'].map((key, idx) => {
              const imageIds = ['1600880292203-757bb62b4baf', '1573496359142-b8d87734a5a2', '1560250097-0b93528c311a', '1573497019940-1c28c88b4f3e']
              return (
                <motion.div key={key} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ delay: idx * 0.1 }} className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-300/60">
                  <div className="relative h-64">
                    <img src={`https://images.unsplash.com/photo-${imageIds[idx]}?w=600&q=80`} alt={t(`team.groups.${key}.name`)} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-rad-blue-900">{t(`team.groups.${key}.name`)}</h3>
                    <p className="mt-1 text-sm font-medium text-rad-orange">{t(`team.groups.${key}.role`)}</p>
                    <p className="mt-3 text-xs text-slate-600">{t(`team.groups.${key}.expertise`)}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className="space-y-6">
            <h3 className="text-3xl font-bold md:text-4xl">{t('cta.title')}</h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-200">{t('cta.subtitle')}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link href="/contact" className="group rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60">
                {t('cta.primary')}
              </Link>
              <Link href="/projects" className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
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
