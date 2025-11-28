"use client"

import { Building2, ShoppingCart, Truck, ArrowRight, CheckCircle, Pickaxe, UserCog, Lightbulb } from "lucide-react"
import { Footer } from "@/components/Footer"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import Image from "next/image"

export function ServicesContent() {
    const t = useTranslations('services')

    // Services avec leurs icônes et images
    const domainesConfig = [
        {
            key: 'commerce',
            icon: ShoppingCart,
            featured: true,
            image: "/images/services/commerce.png",
        },
        {
            key: 'mining',
            icon: Pickaxe,
            featured: true,
            image: "/images/services/mining.png",
        },
        {
            key: 'transport',
            icon: Truck,
            featured: false,
            image: "/images/services/transport.png",
        },
        {
            key: 'construction',
            icon: Building2,
            featured: false,
            image: "/images/services/construction.png",
        },
        {
            key: 'services',
            icon: UserCog,
            featured: false,
            image: "/images/services/services.png",
        },
        {
            key: 'consulting',
            icon: Lightbulb,
            featured: false,
            image: "/images/services/audit.png",
        },
    ]

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* HERO SERVICES */}
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

            {/* DOMAINES D'INTERVENTION */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 md:py-24">
                {/* Effet de fond décoratif */}
                <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-rad-orange/5 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                    {/* En-tête de section */}
                    <div className="animate-fade-in mb-16 text-center">
                        <h2 className="text-3xl font-bold text-rad-blue-900 sm:text-4xl md:text-5xl">
                            {t('intro.title')}
                        </h2>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
                            {t('intro.subtitle')}
                        </p>
                    </div>

                    {/* Grille des services - Design amélioré */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {domainesConfig.map((domaine, index) => {
                            const IconComponent = domaine.icon

                            return (
                                <article
                                    key={domaine.key}
                                    className="animate-scale-in group relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-sm shadow-slate-200 ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/10 hover:ring-rad-orange/20"
                                    style={{ animationDelay: `${index * 50}ms` }}
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
                                        <div className="inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full bg-rad-orange/10 px-4 py-2 text-sm font-semibold leading-tight text-rad-orange">
                                            <CheckCircle className="h-4 w-4 flex-shrink-0" />
                                            <span className="leading-tight">{t(`domains.${domaine.key}.details`)}</span>
                                        </div>
                                    </div>

                                    {/* Effet de brillance subtil */}
                                    <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-rad-orange/5 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* DÉTAILS DES SERVICES - ALTERNANCE */}
            <section className="bg-white py-10 sm:py-14 md:py-24">
                <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-8 lg:px-0">
                    <h2 className="animate-fade-in mb-8 text-center text-2xl font-bold leading-tight text-rad-blue-900 sm:mb-12 sm:text-4xl md:text-5xl">
                        {t('details.title')}
                    </h2>

                    <div className="space-y-8 sm:space-y-12">
                        {domainesConfig.map((service, index) => {
                            const isEven = index % 2 === 0
                            const IconComponent = service.icon

                            return (
                                <article
                                  key={service.key}
                                  className={`animate-slide-up grid gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:gap-10 sm:p-8 md:grid-cols-2 md:items-center ${!isEven ? "md:grid-flow-dense" : ""}`}
                                  style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* TEXTE */}
                                    <div className={`order-1 ${isEven ? "md:order-1" : "md:order-2"} flex flex-col items-start text-left`}>
                                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30 sm:mb-4 sm:h-12 sm:w-12">
                                            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                                        </div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rad-orange">
                                            {t('details.serviceLabel')} {String(index + 1).padStart(2, "0")}
                                        </p>
                                        <h3 className="mt-1 text-xl font-bold leading-tight text-rad-blue-900 sm:text-3xl md:text-4xl">
                                            {t(`domains.${service.key}.title`)}
                                        </h3>
                                        <p className="mt-2 text-base leading-relaxed text-slate-700 sm:mt-3 sm:text-lg">
                                            {t(`domains.${service.key}.description`)}
                                        </p>

                                        <ul className="mt-3 space-y-2 text-sm text-slate-700 w-full sm:mt-4 sm:space-y-2.5 sm:text-base">
                                            {t.raw(`domains.${service.key}.bullets`).map((bullet: string, i: number) => (
                                                <li key={i} className="flex gap-2 items-start">
                                                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rad-orange" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* IMAGE */}
                                    <div className={`order-2 ${isEven ? "md:order-2" : "md:order-1"}`}>
                                        <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-slate-200 shadow-lg shadow-slate-300/80">
                                            <Image
                                                src={service.image}
                                                alt={t(`domains.${service.key}.title`)}
                                                fill
                                                className="object-cover transition duration-700 hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION MÉTHODOLOGIE */}
            <section className="bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 py-16 sm:py-20 md:py-24 text-white">
                <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
                    <h2 className="animate-fade-in mb-4 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
                        {t('methodology.title')}
                    </h2>
                    <p className="animate-fade-in delay-100 mb-10 text-center text-slate-200">
                        {t('methodology.subtitle')}
                    </p>

                    <div className="grid gap-6 md:grid-cols-4">
                        {['1', '2', '3', '4'].map((num, idx) => (
                            <div
                                key={num}
                                className="animate-scale-in rounded-3xl bg-white/10 p-6 text-slate-100 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rad-orange text-2xl font-bold text-white shadow-lg shadow-rad-orange/30">
                                    {num}
                                </div>
                                <h3 className="mb-2 text-lg font-bold text-white">{t(`methodology.steps.${num}.title`)}</h3>
                                <p className="text-sm text-slate-100/90">{t(`methodology.steps.${num}.description`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="bg-slate-100 py-16 sm:py-20 md:py-24">
                <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
                    <div className="animate-fade-in space-y-6">
                        <h3 className="text-2xl font-bold text-rad-blue-900 sm:text-3xl md:text-4xl">
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
                                href="/contracts"
                                className="rounded-full border-2 border-rad-blue-900 px-8 py-4 text-base font-semibold text-rad-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-900/5"
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
