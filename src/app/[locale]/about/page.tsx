"use client"

import { Target, TrendingUp, Heart } from "lucide-react"
import { Footer } from "@/components/Footer"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import {
  SectionHeader,
  StatsSection,
  MissionVisionValuesCards,
  TeamGrid,
  CTASection,
  type TeamMember,
} from "@/components/sections"

const equipeImages = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
]

const equipeKeys = ["operations", "technical", "logistics", "admin"] as const

export default function About() {
  const t = useTranslations("about")

  // Prepare stats data
  const stats = (["experience", "projects", "countries"] as const).map((key) => ({
    icon: t(`stats.${key}.icon`),
    value: t(`stats.${key}.value`),
    label: t(`stats.${key}.label`),
  }))


  // Prepare team data
  const teamMembers: TeamMember[] = equipeKeys.map((key, idx) => ({
    key,
    name: t(`team.groups.${key}.name`),
    role: t(`team.groups.${key}.role`),
    expertise: t(`team.groups.${key}.expertise`),
    image: equipeImages[idx],
  }))

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-12 pt-24 sm:pb-16 sm:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900 opacity-95" />
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
      <StatsSection stats={stats} variant="cards" />

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-0">
        <SectionHeader title={t("story.title")} showDivider className="mb-6 sm:mb-8" />
        <div className="mx-auto max-w-4xl space-y-4 whitespace-pre-line text-left text-sm leading-relaxed text-slate-700 sm:space-y-6 sm:text-base md:text-lg">
          {t("story.content")}
        </div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <MissionVisionValuesCards
        mission={{
          title: t("mission.title"),
          content: t("mission.content"),
          icon: Target,
        }}
        vision={{
          title: t("vision.title"),
          content: t("vision.content"),
          icon: TrendingUp,
        }}
        values={{
          title: t("values.title"),
          content: t("values.content"),
          icon: Heart,
        }}
      />

      {/* TEAM */}
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <SectionHeader
            title={t("team.title")}
            subtitle={t("team.subtitle")}
            className="mb-8 sm:mb-12"
          />
          <TeamGrid members={teamMembers} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        buttons={[
          { text: t("cta.primary"), href: "/contact", variant: "primary" },
          { text: t("cta.secondary"), href: "/projects", variant: "secondary" },
        ]}
        variant="gradient"
      />

      <Footer />
    </main>
  )
}
