"use client"

import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Footer } from "@/components/Footer"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

export default function ContactPage() {
  const t = useTranslations('contact')
  const tCommon = useTranslations('common')

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO CONTACT */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-16 pt-32 sm:pb-20 sm:pt-36">
        <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900" />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="animate-fade-in text-center text-white">
            {/* Badge tricolore */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur-md ring-1 ring-white/20">
              <span className="flex h-1 w-10 overflow-hidden rounded-full">
                <span className="flex-1 bg-rad-red" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-green" />
              </span>
              {t('badge')}
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* ÉLÉMENTS DE RÉASSURANCE */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: <Clock className="h-6 w-6" />, text: t('reassurance.response') },
              { icon: <CheckCircle className="h-6 w-6" />, text: t('reassurance.consultation') },
              { icon: <Phone className="h-6 w-6" />, text: t('reassurance.quote') },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`animate-scale-in flex items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-lg shadow-slate-300/50 ring-1 ring-slate-100 delay-${idx * 100}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rad-orange/10 text-rad-orange">
                  {item.icon}
                </div>
                <div className="text-left">
                  <span className="text-lg font-bold text-rad-blue-900">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAIRE + INFO CONTACT */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Colonne gauche – texte & infos */}
            <div className="animate-slide-up space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-rad-blue-900 sm:text-4xl md:text-5xl">
                  {t('form.title')}
                </h2>
                <div className="mt-4 flex h-1.5 w-32 overflow-hidden rounded-full">
                  <span className="flex-1 bg-rad-red" />
                  <span className="flex-1 bg-rad-yellow" />
                  <span className="flex-1 bg-rad-green" />
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                {t('form.subtitle')}
              </p>

              {/* Infos de contact direct */}
              <div className="mt-8 space-y-4 rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-6 text-white shadow-xl shadow-rad-blue-900/30">
                <h3 className="text-lg font-bold">{t('info.title')}</h3>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('info.address.title')}</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {t('info.address.value')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('info.phone.title')}</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {t('info.phone.value')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('info.email.title')}</p>
                    <a href={`mailto:${t('info.email.value')}`} className="mt-1 block text-sm text-rad-yellow hover:underline">
                      {t('info.email.value')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('info.hours.title')}</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {t('info.hours.weekdays')}<br />
                      {t('info.hours.saturday')}<br />
                      {t('info.hours.sunday')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite – formulaire */}
            <div className="animate-slide-up delay-100 rounded-3xl bg-white p-8 shadow-xl shadow-slate-300/60">
              <h3 className="text-2xl font-bold text-rad-blue-900 sm:text-3xl md:text-4xl">
                {t('form.title')}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {t('form.subtitle')}
              </p>

              <form className="mt-6 space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="mb-2 block text-sm font-semibold text-slate-700">
                      {t('form.fields.name.label')} *
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                      placeholder={t('form.fields.name.placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="societe" className="mb-2 block text-sm font-semibold text-slate-700">
                      {t('form.fields.company.label')}
                    </label>
                    <input
                      id="societe"
                      name="societe"
                      type="text"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                      placeholder={t('form.fields.company.placeholder')}
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                      {t('form.fields.email.label')} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                      placeholder={t('form.fields.email.placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="mb-2 block text-sm font-semibold text-slate-700">
                      {t('form.fields.phone.label')}
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                      placeholder={t('form.fields.phone.placeholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project-type" className="mb-2 block text-sm font-semibold text-slate-700">
                    {t('form.fields.service.label')} *
                  </label>
                  <select
                    id="project-type"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                  >
                    <option value="">{t('form.fields.service.placeholder')}</option>
                    <option value="commerce">{t('form.fields.service.options.commerce')}</option>
                    <option value="mines">{t('form.fields.service.options.mining')}</option>
                    <option value="logistique">{t('form.fields.service.options.transport')}</option>
                    <option value="construction">{t('form.fields.service.options.construction')}</option>
                    <option value="services">{t('form.fields.service.options.services')}</option>
                    <option value="autre">{t('form.fields.service.options.other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                    {t('form.fields.message.label')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                    placeholder={t('form.fields.message.placeholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
                >
                  <span className="flex items-center justify-center gap-2">
                    {t('form.submit')}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA AUTRES PAGES */}
      <section className="bg-slate-100 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
          <div className="animate-fade-in space-y-6">
            <h3 className="mx-auto max-w-md text-2xl font-bold text-rad-blue-900 sm:max-w-none sm:text-3xl md:text-4xl">
              {t('cta.title')}
            </h3>
            <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 pt-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="/services"
                className="w-full rounded-full border-2 border-rad-blue-900 px-8 py-4 text-base font-semibold text-rad-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-900/5 sm:w-auto"
              >
                {tCommon('seeServices')}
              </Link>
              <Link
                href="/contracts"
                className="w-full rounded-full border-2 border-rad-blue-900 px-8 py-4 text-base font-semibold text-rad-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-900/5 sm:w-auto"
              >
                {tCommon('seeProjects')}
              </Link>
              <Link
                href="/about"
                className="w-full rounded-full border-2 border-rad-blue-900 px-8 py-4 text-base font-semibold text-rad-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-900/5 sm:w-auto"
              >
                {t('cta.secondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
