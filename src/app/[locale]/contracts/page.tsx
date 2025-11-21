"use client"

import { Footer } from "@/components/Footer"
import { useTranslations } from "next-intl"
import {
  SectionHeader,
  StatsSection,
  ProjectsGrid,
  CTASection,
  type Project,
} from "@/components/sections"

const projectImages = [
  "/projet.jpg",
  "/informatique.jpg",
  "/surface-equipment-miningtrucks.jpg",
  "/route.jpg",
]

export default function ProjectsPage() {
  const t = useTranslations("projects")
  const tCommon = useTranslations("common")

  // Prepare stats data
  const stats = [
    {
      value: t("overview.completed.value"),
      label: t("overview.completed.label"),
      icon: t("overview.completed.icon"),
    },
    {
      value: t("overview.equipment.value"),
      label: t("overview.equipment.label"),
      icon: t("overview.equipment.icon"),
    },
  ]

  // Prepare projects data
  const projects: Project[] = (["1", "2", "3", "4"] as const).map((id, index) => ({
    id,
    title: t(`list.${id}.title`),
    description: t(`list.${id}.description`),
    sector: t(`list.${id}.sector`),
    location: t(`list.${id}.location`),
    year: t(`list.${id}.year`),
    status: t(`list.${id}.status`),
    image: projectImages[index],
  }))

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO PROJETS */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-12 pt-24 sm:pb-16 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <SectionHeader
            badge={t("badge")}
            title={t("hero.title")}
            subtitle={t("hero.subtitle")}
            centered
            className="text-white [&_h2]:text-white [&_p]:text-slate-200 [&_div]:bg-white/20 [&_div]:text-white"
          />
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <StatsSection stats={stats} variant="banner" />
        </div>
      </section>

      {/* LISTE DES PROJETS */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <SectionHeader
            title={t("title")}
            subtitle={t("subtitle")}
            className="mb-8 sm:mb-12"
          />

          <ProjectsGrid projects={projects} learnMoreText={tCommon("learnMore")} />
        </div>
      </section>

      {/* CTA FINAL */}
      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        buttons={[
          { text: t("cta.primary"), href: "/contact", variant: "primary" },
          { text: t("cta.secondary"), href: "/services", variant: "secondary" },
        ]}
        variant="light"
      />

      <Footer />
    </main>
  )
}
