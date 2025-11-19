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
  "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
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
      value: t("overview.budget.value"),
      label: t("overview.budget.label"),
      icon: t("overview.budget.icon"),
    },
    {
      value: t("overview.jobs.value"),
      label: t("overview.jobs.label"),
      icon: t("overview.jobs.icon"),
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
            className="text-white [&_h2]:text-white [&_p]:text-slate-200"
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
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-4">
        <SectionHeader
          title={t("title")}
          subtitle={t("subtitle")}
          className="mb-8 sm:mb-12"
        />

        <ProjectsGrid projects={projects} learnMoreText={tCommon("learnMore")} />
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
