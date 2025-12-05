import { MapPin, Calendar, Award, CheckCircle, ArrowLeft } from "lucide-react"
import { Footer } from "@/components/Footer"
import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/routing"
import Image from "next/image"

// Images des projets
const projectImages: Record<string, string> = {
  "1": "/images/projects/project-1.jpg",
  "2": "/images/projects/project-2.jpg",
  "3": "/images/projects/project-3.jpg",
  "4": "/images/projects/project-4.jpg",
}

// Générer les paramètres statiques pour toutes les pages de projets
export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ]
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const { id } = await params
  const t = await getTranslations('projects')
  const tCommon = await getTranslations('common')
  const tDetail = await getTranslations('projects.detail')

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

          <div className="text-white">
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
          </div>
        </div>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Colonne principale */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
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
                    {tDetail("aboutTitle")}
                  </h2>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg leading-relaxed text-slate-700">
                      {tDetail("about.paragraph1")}
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                      {tDetail("about.paragraph2")}
                    </p>
                  </div>
                </div>

                {/* Impacts & Résultats */}
                <div className="rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-white shadow-lg">
                  <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
                    <CheckCircle className="h-8 w-8 text-rad-orange" />
                    {tDetail("impactsTitle")}
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
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Informations clés */}
                <div className="rounded-3xl bg-white p-6 shadow-lg">
                  <h3 className="mb-4 text-xl font-bold text-rad-blue-900">
                    {tDetail("infoTitle")}
                  </h3>
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 pb-3">
                      <p className="text-sm font-semibold text-slate-500">{tDetail("labels.sector")}</p>
                      <p className="mt-1 text-base font-bold text-rad-blue-900">
                        {t(`list.${id}.sector`)}
                      </p>
                    </div>
                    <div className="border-b border-slate-200 pb-3">
                      <p className="text-sm font-semibold text-slate-500">{tDetail("labels.location")}</p>
                      <p className="mt-1 text-base font-bold text-rad-blue-900">
                        {t(`list.${id}.location`)}
                      </p>
                    </div>
                    <div className="border-b border-slate-200 pb-3">
                      <p className="text-sm font-semibold text-slate-500">{tDetail("labels.year")}</p>
                      <p className="mt-1 text-base font-bold text-rad-blue-900">
                        {t(`list.${id}.year`)}
                      </p>
                    </div>
                    <div className="pb-3">
                      <p className="text-sm font-semibold text-slate-500">{tDetail("labels.status")}</p>
                      <p className="mt-1 text-base font-bold text-green-600">
                        {t(`list.${id}.status`)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Contact */}
                <div className="rounded-3xl bg-gradient-to-br from-rad-orange to-rad-orange-hover p-6 text-white shadow-lg">
                  <h3 className="mb-3 text-xl font-bold">
                    {tDetail("ctaTitle")}
                  </h3>
                  <p className="mb-4 text-sm text-white/90">
                    {tDetail("ctaDescription")}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-rad-orange transition hover:bg-slate-50"
                  >
                    <span>{tCommon("contactUs")}</span>
                    <ArrowLeft className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETS SIMILAIRES */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-rad-blue-900">
              {tDetail("otherProjectsTitle")}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {tDetail("otherProjectsSubtitle")}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Link
              href="/contracts"
              className="group rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-rad-orange-hover"
            >
              <span className="flex items-center gap-2">
                {tDetail("viewAll")}
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
