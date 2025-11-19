"use client"

import { useEffect, useState } from "react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import {
  Building2,
  ShoppingCart,
  Truck,
  ArrowRight,
  Lightbulb,
  Pickaxe,
  UserCog,
  Target,
  TrendingUp,
  Heart,
} from "lucide-react"
import { Footer } from "@/components/Footer"
import {
  HeroSection,
  StatsSection,
  SectionHeader,
  ServicesGrid,
  ProjectsGrid,
  TeamGrid,
  MissionVisionValuesCards,
  CTASection,
  PartnersScroll,
  type Service,
  type Project,
  type TeamMember,
  type Partner,
} from "@/components/sections"
import { fadeUp } from "@/lib/animations"

// ---------------- DATA ----------------

const heroSlideImages = ["/mining.png", "/constructions.jpg", "/logistics.jpg"]

const domaineKeys = ["commerce", "mining", "transport", "construction", "services", "consulting"] as const
const domaineFeatured = ["commerce", "mining"]
const domaineIcons: Record<string, string> = {
  commerce: "ShoppingCart",
  mining: "Pickaxe",
  transport: "Truck",
  construction: "Building2",
  services: "UserCog",
  consulting: "Lightbulb",
}

const realisationImages = [
  "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  "/surface-equipment-miningtrucks.jpg",
  "/route.jpg",
]

const equipeImages = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
]

const equipeKeys = ["operations", "technical", "logistics", "admin"] as const

const partenaires: Partner[] = [
  { name: "Caterpillar", logo: "/cat-logo.png" },
  { name: "Toyota", logo: "/toyota-logo.svg" },
  { name: "Rio Tinto", logo: "/rio-tinto-logo.png" },
  { name: "SAG", logo: "/sag-logo.jpg" },
  { name: "GPC", logo: "/GPC-Colour.svg" },
  { name: "Simandou 2040", logo: "/simandou.png" },
  { name: "Moto-Engil", logo: "/moto-engil.png" },
  { name: "Kououssa Gold Mine", logo: "/kourrousaGold.jpeg" },
]

// ---------------- MAIN COMPONENT ----------------

export default function HomePage() {
  const tHero = useTranslations("hero")
  const tHome = useTranslations("home")
  const tServices = useTranslations("services")
  const tProjects = useTranslations("projects")
  const tCommon = useTranslations("common")

  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  // Scroll to next section
  const scrollToNextSection = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  // Prepare services data
  const services: Service[] = domaineKeys.map((key) => ({
    key,
    title: tServices(`domains.${key}.title`),
    description: tServices(`domains.${key}.description`),
    details: tServices(`domains.${key}.details`),
    icon: {
      ShoppingCart,
      Pickaxe,
      Truck,
      Building2,
      UserCog,
      Lightbulb,
    }[domaineIcons[key]]!,
    featured: domaineFeatured.includes(key),
  }))

  // Prepare projects data
  const projects: Project[] = (["1", "2", "3", "4"] as const).map((id, index) => ({
    id,
    title: tProjects(`list.${id}.title`),
    description: tProjects(`list.${id}.description`),
    sector: tProjects(`list.${id}.sector`),
    location: tProjects(`list.${id}.location`),
    year: tProjects(`list.${id}.year`),
    status: tProjects(`list.${id}.status`),
    image: realisationImages[index],
  }))

  // Prepare team data
  const teamMembers: TeamMember[] = equipeKeys.map((key, idx) => ({
    key,
    name: tHome(`team.groups.${key}.name`),
    role: tHome(`team.groups.${key}.role`),
    expertise: tHome(`team.groups.${key}.expertise`),
    image: equipeImages[idx],
  }))

  // Values data is now just a single card, not needed anymore

  // Prepare stats data
  const stats = (["experience", "projects", "countries"] as const).map((key) => ({
    icon: tHome(`about.stats.${key}.icon`),
    value: tHome(`about.stats.${key}.value`),
    label: tHome(`about.stats.${key}.label`),
  }))

  // Current slide data
  const currentSlideData = {
    title: tHero(`slides.${currentSlide + 1}.title`),
    subtitle: tHero(`slides.${currentSlide + 1}.subtitle`),
    image: heroSlideImages[currentSlide],
  }

  const expertiseTags = [
    tHero("expertise.commerce"),
    tHero("expertise.mining"),
    tHero("expertise.transport"),
    tHero("expertise.construction"),
    tHero("expertise.services"),
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SECTION */}
      <HeroSection
        currentSlide={currentSlide}
        slide={currentSlideData}
        badge={tHero("badge")}
        expertiseTitle={tHero("expertise.title")}
        expertiseTags={expertiseTags}
        scrollText="Scroll"
        onExploreClick={scrollToNextSection}
      />

      {/* ABOUT SECTION */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-0">
        <SectionHeader
          badge={tHome("about.badge")}
          title={tHome("about.title")}
          subtitle={tHome("about.intro")}
          showDivider
        />

        <StatsSection stats={stats} variant="banner" className="mb-10 sm:mb-16" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 text-sm leading-relaxed text-slate-700 sm:space-y-6 sm:text-base md:text-lg"
        >
          <p>{tHome("about.description")}</p>
        </motion.div>
      </section>

      {/* MISSION, VISION & VALUES */}
      <MissionVisionValuesCards
        mission={{
          title: tHome("mission.title"),
          content: tHome("mission.content"),
          icon: Target,
        }}
        vision={{
          title: tHome("vision.title"),
          content: tHome("vision.content"),
          icon: TrendingUp,
        }}
        values={{
          title: tHome("values.title"),
          content: tHome("values.content"),
          icon: Heart,
        }}
      />

      {/* SERVICES */}
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <SectionHeader
            title={tHome("services.title")}
            subtitle={tHome("services.subtitle")}
            className="mb-8 sm:mb-12"
          />
          <ServicesGrid services={services} linkHref="/services" />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-4">
        <SectionHeader
          title={tHome("projects.title")}
          subtitle={tHome("projects.subtitle")}
          className="mb-8 sm:mb-12"
        />
        <ProjectsGrid projects={projects} learnMoreText={tCommon("learnMore")} />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-8 text-center sm:mt-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-rad-blue-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-800 sm:px-8 sm:py-4 sm:text-base"
          >
            <span>{tHome("projects.cta")}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </Link>
        </motion.div>
      </section>

      {/* TEAM */}
      <section className="bg-slate-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <SectionHeader
            title={tHome("team.title")}
            subtitle={tHome("team.subtitle")}
            className="mb-8 sm:mb-12"
          />
          <TeamGrid members={teamMembers} />
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
          <SectionHeader
            title={tHome("partners.title")}
            subtitle={tHome("partners.subtitle")}
            className="mb-8 sm:mb-12"
          />
          <PartnersScroll partners={partenaires} />
        </div>
      </section>

      {/* CONTACT CTA */}
      <CTASection
        title={tHome("cta.title")}
        subtitle={tHome("cta.subtitle")}
        buttons={[
          { text: tHome("cta.primary"), href: "/contact", variant: "primary" },
          { text: tHome("cta.secondary"), href: "/services", variant: "secondary" },
        ]}
        variant="gradient"
      />

      <Footer />
    </main>
  )
}
