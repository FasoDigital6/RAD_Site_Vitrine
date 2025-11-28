"use client"

import { useEffect, useState } from "react"
import { Link, useRouter } from "@/i18n/routing"
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
    InternationalPresence,
    type Service,
    type Project,
    type TeamMember,
} from "@/components/sections"
import { fadeUp } from "@/lib/animations"
import {
    heroSlideImages,
    domaineKeys,
    domaineFeatured,
    domaineIconsMap,
    realisationImages,
    equipeImages,
    equipeKeys,
    partenaires,
} from "@/config/site-data"

export function HomeContent() {
    const tHero = useTranslations("hero")
    const tHome = useTranslations("home")
    const tServices = useTranslations("services")
    const tProjects = useTranslations("projects")
    const tCommon = useTranslations("common")
    const router = useRouter()

    const [currentSlide, setCurrentSlide] = useState(0)

    // Auto-rotate hero slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % 3)
        }, 7000)
        return () => clearInterval(interval)
    }, [])

    // Naviguer vers la page services
    const navigateToServices = () => {
        router.push("/services")
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
        }[domaineIconsMap[key] as "ShoppingCart" | "Pickaxe" | "Truck" | "Building2" | "UserCog" | "Lightbulb"]!,
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

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* HERO SECTION */}
            <HeroSection
                currentSlide={currentSlide}
                slide={currentSlideData}
                badge={tHero("badge")}
                scrollText="Scroll"
                onExploreClick={navigateToServices}
                totalSlides={3}
            />

            {/* ABOUT SECTION */}
            <section id="about" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-0">
                <SectionHeader
                    badge={tHome("about.badge")}
                    title={tHome("about.title")}
                    subtitle={tHome("about.intro")}
                    showDivider
                />

                <StatsSection stats={stats} variant="cards" />

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-4 text-sm leading-relaxed text-slate-700 sm:space-y-6 sm:text-base sm:leading-loose md:text-lg md:leading-loose"
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
            <section className="bg-slate-100 py-12 sm:py-16 md:py-20">
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
            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-4">
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
                        href="/contracts"
                        className="group inline-flex items-center gap-2 rounded-full bg-rad-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60 sm:px-8 sm:py-4 sm:text-base"
                    >
                        <span>{tHome("projects.cta")}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
                    </Link>
                </motion.div>
            </section>

            {/* TEAM */}
            <section className="bg-slate-100 py-12 sm:py-16 md:py-20">
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
            <section className="py-12 sm:py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-0">
                    <SectionHeader
                        title={tHome("partners.title")}
                        subtitle={tHome("partners.subtitle")}
                        className="mb-8 sm:mb-12"
                    />
                    <PartnersScroll partners={partenaires} />
                </div>
            </section>

            {/* PRÉSENCE INTERNATIONALE */}
            <InternationalPresence
                title="Une présence sur 2 continents"
                subtitle="RAD opère en Afrique et en Amérique du Nord, combinant expertise locale et vision internationale pour servir ses clients."
                countries={[
                    {
                        name: "Guinée",
                        flag: "🇬🇳",
                        city: "Siguiri",
                        offices: "Siège social",
                        employees: "300+",
                        description: "Notre siège social basé à Siguiri, Guinée pilote l'ensemble de nos opérations en Afrique de l'Ouest, avec une expertise reconnue dans le mining, la construction et la logistique.",
                    },
                    {
                        name: "Canada",
                        flag: "🇨🇦",
                        city: "Moncton",
                        offices: "Bureau",
                        employees: "50+",
                        description: "Notre bureau canadien assure la liaison avec nos partenaires internationaux et facilite l'accès aux technologies et équipements de pointe pour nos projets africains.",
                    },
                ]}
            />

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
