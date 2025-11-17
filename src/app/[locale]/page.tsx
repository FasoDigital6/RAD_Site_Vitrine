"use client"

import { useEffect, useState } from "react"
import { Link } from "@/i18n/routing"
import { useTranslations } from "next-intl"
import { motion, type Variants } from "framer-motion"
import { Computer, Building2, ShoppingCart, Truck, ArrowRight, Award, Globe, Lightbulb, Leaf, CheckCircle, Clock, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Pickaxe, UserCog } from "lucide-react"
import Image from "next/image"


// ---------------- ANIMATIONS ----------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

type Partenaire = {
  name: string
  logo: string
}

const heroSlideImages = ["/mining.png", "/constructions.jpg", "/logistics.jpg"]

const domaineKeys = ["commerce", "mining", "transport", "construction", "services"] as const
const domaineFeatured = ["commerce", "mining"]
const domaineIcons: Record<string, string> = {
  commerce: "ShoppingCart",
  mining: "Pickaxe",
  transport: "Truck",
  construction: "Building2",
  services: "UserCog",
}

const realisationImages = [
  "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  "https://images.unsplash.com/photo-1625218057599-ae80b8b63a93?w=800&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
]

const equipeImages = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
]

const equipeKeys = ["operations", "technical", "logistics", "admin"] as const

// Mapping des statistiques pour chaque projet
const projectStats: Record<string, readonly string[]> = {
  "1": ["duration", "budget", "impact"],
  "2": ["capacity", "fleet", "tonnage"],
  "3": ["equipment", "partner", "maintenance"],
  "4": ["housing", "surface", "beneficiaries"],
}

// ---------------- PARTENAIRES ----------------



const partenaires: Partenaire[] = [
  { name: "Caterpillar", logo: "/cat-logo.png" },
  { name: "Toyota", logo: "/toyota-logo.svg" },
  { name: "Rio Tinto", logo: "/rio-tinto-logo.png" },
  { name: "SAG", logo: "/sag-logo.jpg" },
  { name: "GPC", logo: "/GPC-Colour.svg" },
  { name: "Simandou 2040", logo: "/simandou.png" },
  { name: "Moto-Engil", logo: "/moto-engil.png" },
  { name: "Kououssa Gold Mine", logo: "/kourrousaGold.jpeg" },
]




// ---------------- COMPONENT ----------------

export default function HomePage() {
  const tHero = useTranslations("hero")
  const tHome = useTranslations("home")
  const tServices = useTranslations("services")
  const tFooter = useTranslations("footer")
  const tCommon = useTranslations("common")
  const tNav = useTranslations("navigation")
  const tAbout = useTranslations("about")
  const tProjects = useTranslations("projects")

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const slideImage = heroSlideImages[currentSlide]

  return (


    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* ---------------- HERO ---------------- */}
      <section
        id="hero"
        className="relative h-[90vh] w-full overflow-hidden bg-rad-blue-900"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slideImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 1,
            transition: "opacity 0.8s ease-out",
          }}
        />

        {/* Overlay bleu RAD avec opacité augmentée pour meilleure lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-rad-blue-900/90 via-rad-blue-900/85 to-rad-blue-900/75" />

        {/* Contenu */}
        <div className="relative z-10 flex h-full items-center px-6 py-10 md:px-16 lg:px-24">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl space-y-6 text-white"
          >
            {/* Badge avec glassmorphism amélioré */}
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md ring-1 ring-white/20">
              <span className="flex h-1 w-10 overflow-hidden rounded-full">
                <span className="flex-1 bg-rad-red" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-green" />
              </span>
              {tHero("badge")}
            </div>

            {/* Titre principal plus imposant */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {tHero(`slides.${currentSlide + 1}.title`)}
            </h1>

            {/* Sous-titre plus visible avec meilleur contraste */}
            <p className="text-lg font-medium leading-relaxed text-white md:text-xl lg:text-2xl">
              {tHero(`slides.${currentSlide + 1}.subtitle`)}
            </p>

            {/* CTAs hiérarchisés : Orange primaire + Bleu outline secondaire */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/services"
                className="group rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
              >
                <span className="flex items-center gap-2">
                  {tHero("cta.primary")}
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/projects"
                className="rounded-full border-2 border-white/80 px-8 py-4 text-base font-semibold text-white shadow-sm shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
              >
                {tHero("cta.secondary")}
              </Link>
            </div>

            {/* Micro-titre + Tags sectoriels avec glassmorphism */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-200/80">
                {tHero("expertise.title")}
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-sm transition hover:bg-white/10">
                  {tHero("expertise.commerce")}
                </span>
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-sm transition hover:bg-white/10">
                  {tHero("expertise.mining")}
                </span>
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-sm transition hover:bg-white/10">
                  {tHero("expertise.transport")}
                </span>
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-sm transition hover:bg-white/10">
                  {tHero("expertise.construction")}
                </span>
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-sm transition hover:bg-white/10">
                  {tHero("expertise.services")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pagination améliorée avec numéros + barre de progression */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`group relative transition-all duration-300 ${
                  index === currentSlide ? "scale-110" : "scale-100"
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-12 bg-white"
                      : "w-8 bg-white/40 hover:bg-white/70"
                  }`}
                />
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-white/70">
                  {index === currentSlide && `0${index + 1}`}
                </span>
              </button>
            ))}
          </div>
          <p className="text-xs font-medium text-white/60">
            {String(currentSlide + 1).padStart(2, "0")} / 03
          </p>
        </div>

        {/* Indicateur de scroll animé */}
        <motion.div
          className="absolute bottom-8 right-8 z-20 hidden md:flex md:flex-col md:items-center md:gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
            {tCommon("scroll")}
          </p>
          <motion.div
            className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/40 p-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-2 w-2 rounded-full bg-white/80" />
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- QUI SOMMES-NOUS ---------------- */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20 md:px-8 lg:px-0"
      >
        {/* Titre affirmatif + intro courte */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
            {tHome("about.title")}
          </h2>
          <div className="mx-auto mt-4 flex h-1.5 w-32 overflow-hidden rounded-full">
            <span className="flex-1 bg-rad-red" />
            <span className="flex-1 bg-rad-yellow" />
            <span className="flex-1 bg-rad-green" />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg" dangerouslySetInnerHTML={{ __html: tHome("about.intro") }} />
        </motion.div>

        {/* Stats banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 grid grid-cols-2 gap-6 rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 shadow-2xl shadow-rad-blue-900/30 md:grid-cols-4 md:p-10"
        >
          {(["experience", "projects", "countries", "partners"] as const).map((key, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-2 text-3xl">{tHome(`about.stats.${key}.icon`)}</div>
              <p className="text-3xl font-bold text-white md:text-4xl">
                {tHome(`about.stats.${key}.value`)}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-200 md:text-sm">
                {tHome(`about.stats.${key}.label`)}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Contenu en 2 colonnes : Points clés + Image */}
        <div className="flex flex-col gap-12 md:flex-row md:items-center">
          {/* Colonne gauche : 3 points clés avec icônes */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 md:w-1/2"
          >
            {(["1", "2", "3"] as const).map((key, idx) => {
              const icons = [
                <svg key={key} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>,
                <svg key={key} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>,
                <svg key={key} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ]
              return (
                <div key={key} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-rad-orange text-white shadow-md shadow-rad-orange/30">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-rad-blue-900 md:text-xl">
                      {tHome(`about.points.${key}.title`)}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 md:text-base">
                      {tHome(`about.points.${key}.description`)}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* CTA plus visible */}
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-rad-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
            >
              {tHome("about.cta")}
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* Colonne droite : Image avec badge */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative md:w-1/2"
          >
            <div className="relative h-96 overflow-hidden rounded-3xl shadow-2xl shadow-slate-400/50">
              <Image
                src="/team.jpeg"
                alt="Équipe RAD sur le terrain"
                fill
                className="object-cover transition duration-700 hover:scale-105"
                priority
              />
              {/* Badge 15+ ans d'expertise */}
              <div className="absolute left-6 top-6">
                <div className="flex flex-col items-center gap-1 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm">
                  <p className="text-2xl font-bold text-rad-blue-900">{tHome("about.stats.experience.value")}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    {tHome("about.badge")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- MISSION / VISION / VALEURS ---------------- */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-8 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center text-4xl font-bold text-rad-blue-900 md:text-5xl"
          >
            {tHome("mission.title")}
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {(["mission", "vision", "values"] as const).map((pillar, index) => {
              const icons = [
                <svg key={pillar} className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>,
                <svg key={pillar} className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>,
                <svg key={pillar} className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ]
              return (
                <motion.div
                  key={pillar}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20"
                >
                  {/* Barre de couleur en haut */}
                  <div className="absolute left-0 right-0 top-0 h-2 bg-gradient-to-r from-rad-orange to-rad-orange-hover transition-all duration-500 group-hover:h-3" />

                  {/* Icône */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {icons[index]}
                  </div>

                  {/* Titre */}
                  <h3 className="mb-4 text-2xl font-bold text-rad-blue-900 md:text-3xl">
                    {tHome(`mission.${pillar}.title`)}
                  </h3>

                  {/* Contenu */}
                  <p className="text-base leading-relaxed text-slate-600">
                    {tHome(`mission.${pillar}.content`)}
                  </p>

                  {/* Effet de brillance au hover */}
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-rad-orange/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- DOMAINES D'INTERVENTION ---------------- */}
      <section
        id="services"
        className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24"
      >
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
              {tServices("intro.title")}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              {tServices("intro.subtitle")}
            </p>
          </motion.div>

          {/* Grille des services - Design amélioré */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {domaineKeys.map((key, index) => {
              const IconComponent = {
                Computer,
                Building2,
                ShoppingCart,
                Truck,
                Pickaxe,
                UserCog,
              }[domaineIcons[key]]

              return (
                <motion.article
                  key={key}
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
                    {IconComponent && <IconComponent className="h-8 w-8" strokeWidth={2.5} />}
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-1 flex-col">
                    <h3 className="mb-3 text-xl font-bold text-rad-blue-900 transition-colors group-hover:text-rad-orange md:text-2xl">
                      {tServices(`domains.${key}.title`)}
                    </h3>

                    <p className="mb-4 flex-1 text-base leading-relaxed text-slate-600">
                      {tServices(`domains.${key}.description`)}
                    </p>

                    {/* Badge de détails */}
                    <div className="mb-6 inline-flex items-center gap-2 self-start rounded-full bg-rad-orange/10 px-4 py-2 text-sm font-semibold text-rad-orange">
                      <CheckCircle className="h-4 w-4" />
                      <span>{tServices(`domains.${key}.details`)}</span>
                    </div>

                    {/* CTA avec flèche */}
                    <Link
                      href="/services"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-rad-blue-900 transition-all hover:gap-3 hover:text-rad-orange"
                    >
                      <span>{tCommon("learnMore")}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  {/* Effet de brillance subtil */}
                  <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-rad-orange/5 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                </motion.article>
              )
            })}
          </div>

          {/* CTA principal */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-16 text-center"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rad-orange to-rad-orange-hover px-10 py-5 text-lg font-bold text-white shadow-xl shadow-rad-orange/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rad-orange/40"
            >
              <span>{tCommon("seeServices")}</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------------- RÉALISATIONS ---------------- */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
              {tHome("projects.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
              {tHome("projects.subtitle")}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {(["1", "2", "3", "4"] as const).map((key, index) => (
              <motion.article
                key={key}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-400/40"
              >
                {/* Image avec overlay au hover */}
                <div className="relative h-64 w-full overflow-hidden md:h-72">
                  <Image
                    src={realisationImages[index]}
                    alt={tProjects(`list.${key}.title`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rad-blue-900/90 via-rad-blue-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Badge secteur en haut à droite */}
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-rad-blue-900 shadow-lg backdrop-blur-sm">
                      {tProjects(`list.${key}.sector`)}
                    </span>
                  </div>

                  {/* Texte overlay visible au hover */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {tProjects(`list.${key}.location`)}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {tProjects(`list.${key}.year`)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-rad-blue-900 md:text-2xl">
                    {tProjects(`list.${key}.title`)}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {tProjects(`list.${key}.description`)}
                  </p>

                  {/* Stats clés */}
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                    {(projectStats[key] || []).map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-lg font-bold text-rad-blue-900 md:text-xl">
                          {tProjects(`list.${key}.stats.${stat}`)}
                        </p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                          {tHome(`projects.stats.${stat}`)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA spécifique */}
                  <Link
                    href="/projects"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rad-orange transition-all hover:gap-3 hover:text-rad-orange-hover"
                  >
                    {tCommon("readMore")}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA global avec compteur de projets */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-12 flex flex-col items-center gap-4 text-center"
          >
            <Link
              href="/projects"
              className="group rounded-full bg-rad-blue-900 px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-800 hover:shadow-xl hover:shadow-rad-blue-900/50"
            >
              <span className="flex items-center gap-2">
                {tHome("projects.cta")}
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------------- ÉQUIPE ---------------- */}
      <section
        id="equipe"
        className="mx-auto max-w-6xl px-6 py-20 md:px-8 lg:px-0"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
            {tHome("team.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            {tHome("team.subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {equipeKeys.map((key, index) => (
            <motion.article
              key={key}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={equipeImages[index]}
                  alt={tAbout(`team.groups.${key}.name`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-rad-blue-900/90 via-rad-blue-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Badge expertise révélé au hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs font-semibold text-white">
                    ✓ {tAbout(`team.groups.${key}.expertise`)}
                  </p>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-rad-blue-900">
                  {tAbout(`team.groups.${key}.name`)}
                </h3>
                <p className="mt-2 text-sm font-medium text-rad-orange">
                  {tAbout(`team.groups.${key}.role`)}
                </p>
              </div>

              {/* Barre orange top */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-rad-orange to-rad-orange-hover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </section>

     {/* ---------------- NOS PARTENAIRES ---------------- */}
<section className="overflow-hidden bg-slate-100 py-20">
  <div className="mx-auto max-w-7xl px-6 md:px-8">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
        {tHome("partners.title")}
      </h2>
    </motion.div>

    {/* Conteneur de défilement infini */}
    <div className="relative">
      {/* Gradient gauche */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-slate-100 to-transparent" />

      {/* Gradient droit */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-slate-100 to-transparent" />

      {/* Bande défilante */}
      <div className="flex overflow-hidden">
        <div className="flex animate-slide gap-12">
          {partenaires.concat(partenaires).map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group flex h-40 w-72 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-10 shadow-md shadow-slate-300/50 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rad-orange/20 hover:ring-rad-orange"
            >
              <div className="relative h-24 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ---------------- POURQUOI NOUS CHOISIR ---------------- */}
      <section className="bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 py-20">
        <div className="mx-auto max-w-6xl px-6 text-white md:px-8 lg:px-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl">
              {tHome("why.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
              Quatre piliers qui font la différence dans chacun de nos projets.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {(["1", "2", "3", "4"] as const).map((key, index) => {
              const icons = [
                <Award key={key} className="h-8 w-8" strokeWidth={2} />,
                <Globe key={key} className="h-8 w-8" strokeWidth={2} />,
                <Lightbulb key={key} className="h-8 w-8" strokeWidth={2} />,
                <Leaf key={key} className="h-8 w-8" strokeWidth={2} />
              ]
              return (
                <motion.article
                  key={key}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl hover:shadow-black/30"
                >
                  {/* Icône */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rad-orange text-white shadow-lg shadow-rad-orange/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {icons[index]}
                  </div>

                  {/* Titre */}
                  <h3 className="mb-4 text-xl font-bold md:text-2xl">
                    {tHome(`why.reasons.${key}.title`)}
                  </h3>

                  {/* Points clés */}
                  <p className="text-sm text-slate-100 md:text-base">
                    {tHome(`why.reasons.${key}.description`)}
                  </p>

                  {/* Effet brillance */}
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CTA CONTACT AVEC FORMULAIRE ---------------- */}
      <section id="contact" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
              {tHome("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
              {tHome("cta.subtitle")}
            </p>
          </motion.div>

          {/* Éléments de réassurance */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-10 grid gap-6 md:grid-cols-3"
          >
            {[
              { icon: <Clock className="h-6 w-6" />, text: "Réponse sous 24h" },
              { icon: <CheckCircle className="h-6 w-6" />, text: "Consultation gratuite" },
              { icon: <Phone className="h-6 w-6" />, text: "Devis personnalisé" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center gap-3 rounded-2xl bg-white p-4 shadow-sm shadow-slate-300/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rad-orange/10 text-rad-orange">
                  {item.icon}
                </div>
                <span className="font-semibold text-rad-blue-900">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Formulaire + Info contact en 2 colonnes */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Formulaire */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-300/60"
            >
              <h3 className="mb-6 text-2xl font-bold text-rad-blue-900">
                Formulaire de contact rapide
              </h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="project-type" className="mb-2 block text-sm font-semibold text-slate-700">
                    Type de projet *
                  </label>
                  <select
                    id="project-type"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                  >
                    <option value="">Sélectionnez un domaine</option>
                    {domaineKeys.map(key => (
                      <option key={key} value={key}>{tServices(`domains.${key}.title`)}</option>
                    ))}
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                    placeholder="Décrivez brièvement votre projet..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
                >
                  <span className="flex items-center justify-center gap-2">
                    {tCommon("send")}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div className="rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-white shadow-xl shadow-rad-blue-900/30">
                <h3 className="mb-6 text-2xl font-bold">
                  Nous contacter directement
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Adresse</p>
                      <p className="mt-1 text-sm text-slate-200">
                        {tFooter("contact.address")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Téléphone</p>
                      <p className="mt-1 text-sm text-slate-200">
                        {tFooter("contact.phone")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href={`mailto:${tFooter("contact.email")}`} className="mt-1 block text-sm text-rad-yellow hover:underline">
                        {tFooter("contact.email")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA secondaire */}
              <div className="rounded-3xl bg-white p-6 shadow-md shadow-slate-300/50">
                <p className="mb-4 text-sm text-slate-600">
                  Vous préférez nous appeler ou nous rencontrer ?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-rad-orange transition hover:text-rad-orange-hover"
                >
                  {tCommon("contactUs")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER COMPLET ---------------- */}
      <footer className="bg-rad-blue-900 text-white">
        {/* Newsletter (optionnel - peut être retiré si pas utilisé) */}
        <div className="border-b border-white/10 bg-rad-blue-900/50 py-12">
          <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <h3 className="text-2xl font-bold">{tFooter("newsletter.title")}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {tFooter("newsletter.subtitle")}
                </p>
              </div>
              <div className="flex w-full max-w-md gap-3">
                <input
                  type="email"
                  placeholder={tFooter("newsletter.placeholder")}
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-slate-400 backdrop-blur-sm transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/30"
                />
                <button className="rounded-full bg-rad-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-rad-orange-hover">
                  {tFooter("newsletter.button")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer principal */}
        <div className="py-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-0">
            {/* Colonne 1 : Logo + Tagline + Réseaux sociaux */}
            <div className="lg:col-span-1">
              <div className="relative mb-4 h-16 w-40">
                <Image
                  src="/rad-logo.jpeg"
                  alt="RAD Logo"
                  fill
                  className="rounded-lg object-contain object-left"
                />
              </div>
              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                {tFooter("tagline")}
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-rad-orange hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-rad-orange hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-rad-orange hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Colonne 2 : Navigation principale */}
            <div>
              <h4 className="mb-6 text-lg font-bold">{tFooter("navigation.title")}</h4>
              <ul className="space-y-3">
                {[
                  { label: "home", href: "/" },
                  { label: "about", href: "/about" },
                  { label: "services", href: "/services" },
                  { label: "projects", href: "/projects" },
                  { label: "contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href as any}
                      className="text-sm text-slate-300 transition hover:text-rad-orange hover:underline"
                    >
                      {tNav(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3 : Domaines d'activité */}
            <div>
              <h4 className="mb-6 text-lg font-bold">{tFooter("domains.title")}</h4>
              <ul className="space-y-3">
                {(["commerce", "mining", "transport", "construction", "services"] as const).map((domain) => (
                  <li key={domain}>
                    <Link
                      href="/services"
                      className="text-sm text-slate-300 transition hover:text-rad-orange hover:underline"
                    >
                      {tFooter(`domains.list.${domain}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 4 : Contact */}
            <div>
              <h4 className="mb-6 text-lg font-bold">{tFooter("contact.title")}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                  <span className="text-sm text-slate-300">
                    {tFooter("contact.address")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                  <span className="text-sm text-slate-300">
                    {tFooter("contact.phone")}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                  <a
                    href={`mailto:${tFooter("contact.email")}`}
                    className="text-sm text-slate-300 hover:text-rad-yellow hover:underline"
                  >
                    {tFooter("contact.email")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-white/10 bg-rad-blue-900/50 py-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-400 md:flex-row md:px-8 lg:px-0">
            <p>
              {tFooter("legal.copyright", { year: new Date().getFullYear().toString() })}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="hover:text-rad-orange hover:underline">
                {tFooter("legal.terms")}
              </Link>
              <Link href="#" className="hover:text-rad-orange hover:underline">
                {tFooter("legal.privacy")}
              </Link>
              <Link href="#" className="hover:text-rad-orange hover:underline">
                {tFooter("legal.cgv")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>


  )
}
