"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Pickaxe, Building2, ShoppingCart, Truck, GraduationCap, Wrench, ArrowRight, Award, Globe, Lightbulb, Leaf, CheckCircle, Clock, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"


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

// ---------------- HERO SLIDES ----------------

const heroSlides = [
  {
    title: "Réseau Africain de Développement",
    subtitle:
      "Solutions industrielles, commerciales et logistiques pour bâtir l’avenir du continent.",
    image: "/mining.png",
  },
  {
    title: "Construire des infrastructures durables",
    subtitle:
      "Travaux d’ingénierie, construction et aménagement pour soutenir la croissance.",
    image: "/constructions.jpg",
  },
  {
    title: "Commerce, import–export et logistique",
    subtitle:
      "Un réseau solide pour connecter les marchés africains et internationaux.",
    image: "/logistics.jpg",
  },
]

// ---------------- DOMAINES D'INTERVENTION ----------------

const domaines = [
  {
    title: "Mines & Services Industriels",
    description:
      "Transport de minerais, terrassements, location d'engins lourds et légers, maintenance d'équipements miniers.",
    details: "15+ projets | Équipements CAT, Toyota",
    icon: "Pickaxe",
    featured: true,
  },
  {
    title: "Construction & Génie Civil",
    description:
      "Bâtiments, ponts, routes, infrastructures électriques, tirage de câbles fibre optique et réseau.",
    details: "50+ km routes | Projets clés en main",
    icon: "Building2",
    featured: true,
  },
  {
    title: "Commerce & Supply Chain",
    description:
      "Commerce général, import-export, fourniture d'équipements industriels et informatiques aux entreprises.",
    details: "100+ fournisseurs internationaux",
    icon: "ShoppingCart",
    featured: false,
  },
  {
    title: "Transport & Logistique",
    description:
      "Transport de marchandises, gestion de flotte, entreposage, solutions logistiques intégrées.",
    details: "Flotte moderne | Tracking temps réel",
    icon: "Truck",
    featured: false,
  },
  {
    title: "Formation & Conseil",
    description:
      "Formation informatique et anglais professionnel, conseil stratégique, accompagnement de projets.",
    details: "500+ professionnels formés",
    icon: "GraduationCap",
    featured: false,
  },
  {
    title: "Services Techniques",
    description:
      "Installation d'équipements informatiques, maintenance technique, prestation de services divers.",
    details: "Support 24/7 disponible",
    icon: "Wrench",
    featured: false,
  },
]

// ---------------- RÉALISATIONS (PROJETS CASE STUDIES) ----------------

const realisations = [
  {
    title: "Infrastructure Routière Mines de Boké",
    description:
      "Construction de 45 km de routes d'accès aux sites miniers avec génie civil avancé et drainage optimisé pour conditions tropicales.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
    location: "Boké, Guinée",
    sector: "Construction & Mines",
    year: "2023",
    stats: [
      { label: "Durée", value: "18 mois" },
      { label: "Budget", value: "8.5M USD" },
      { label: "Impact", value: "2000+ emplois" },
    ],
  },
  {
    title: "Logistique Multi-modale Conakry",
    description:
      "Mise en place d'un hub logistique intégré avec entreposage de 5000 m², gestion de flotte et système de tracking pour équipements miniers lourds.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    location: "Conakry, Guinée",
    sector: "Logistique & Supply Chain",
    year: "2022-2023",
    stats: [
      { label: "Capacité", value: "5000 m²" },
      { label: "Flotte", value: "45 véhicules" },
      { label: "Tonnage/an", value: "50K tonnes" },
    ],
  },
  {
    title: "Fourniture Engins CAT – Projet Simandou",
    description:
      "Approvisionnement et maintenance de 120 équipements Caterpillar (bulldozers, excavateurs, dumpers) pour exploitation minière de classe mondiale.",
    image: "https://images.unsplash.com/photo-1625218057599-ae80b8b63a93?w=800&q=80",
    location: "Simandou, Guinée",
    sector: "Équipements & Services Miniers",
    year: "2021-2024",
    stats: [
      { label: "Équipements", value: "120 unités" },
      { label: "Partenaire", value: "Caterpillar" },
      { label: "Maintenance", value: "24/7" },
    ],
  },
  {
    title: "Cité Résidentielle Ouvriers – Kindia",
    description:
      "Développement immobilier de 85 logements fonctionnels avec infrastructures (eau, électricité, routes) pour personnel d'exploitation minière.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    location: "Kindia, Guinée",
    sector: "Immobilier & Infrastructures",
    year: "2023-2024",
    stats: [
      { label: "Logements", value: "85 unités" },
      { label: "Surface", value: "12 hectares" },
      { label: "Bénéficiaires", value: "400+ personnes" },
    ],
  },
]

// ---------------- ÉQUIPE ----------------

const equipe = [
  {
    name: "Équipe Opérations",
    role: "Terrain & Projets",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    expertise: "15+ ans d'expérience terrain",
  },
  {
    name: "Direction Technique",
    role: "Ingénierie & Innovation",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    expertise: "Projets miniers & infrastructures",
  },
  {
    name: "Équipe Logistique",
    role: "Supply Chain & Transport",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    expertise: "Gestion de flotte 24/7",
  },
  {
    name: "Staff Administratif",
    role: "Gestion & Coordination",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    expertise: "Support opérationnel intégré",
  },
]
// ---------------- PARTENAIRES ----------------



const partenaires: Partenaire[] = [
  { name: "Caterpillar", logo: "/cat-logo.png" },
  { name: "Toyota", logo: "toyota-logo.svg" },
  { name: "rio-tinto", logo: "rio-tinto-logo.png" },
  {name:"sag", logo:"sag-logo.jpg"},
]




// ---------------- COMPONENT ----------------

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const slide = heroSlides[currentSlide]

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
            backgroundImage: `url(${slide.image})`,
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
                <span className="flex-1 bg-rad-green" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-red" />
              </span>
              RAD · Réseau Africain de Développement
            </div>

            {/* Titre principal plus imposant */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.title}
            </h1>

            {/* Sous-titre plus visible avec meilleur contraste */}
            <p className="text-lg font-medium leading-relaxed text-white md:text-xl lg:text-2xl">
              {slide.subtitle}
            </p>

            {/* CTAs hiérarchisés : Orange primaire + Bleu outline secondaire */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/services"
                className="group rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
              >
                <span className="flex items-center gap-2">
                  Découvrir nos services
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/projects"
                className="rounded-full border-2 border-white/80 px-8 py-4 text-base font-semibold text-white shadow-sm shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
              >
                Voir nos projets
              </Link>
            </div>

            {/* Micro-titre + Tags sectoriels avec glassmorphism */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-200/80">
                Nos secteurs d'expertise
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-sm transition hover:bg-white/10">
                  Mines & industrie
                </span>
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-sm transition hover:bg-white/10">
                  Construction & infrastructures
                </span>
                <span className="rounded-full border border-white/30 bg-white/5 px-4 py-2 backdrop-blur-sm transition hover:bg-white/10">
                  Commerce & logistique
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pagination améliorée avec numéros + barre de progression */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            {heroSlides.map((_, index) => (
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
            {String(currentSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
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
            Défiler
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
            RAD : Votre partenaire de confiance pour bâtir l'Afrique
          </h2>
          <div className="mx-auto mt-4 flex h-1.5 w-32 overflow-hidden rounded-full">
            <span className="flex-1 bg-rad-green" />
            <span className="flex-1 bg-rad-yellow" />
            <span className="flex-1 bg-rad-red" />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            <strong className="text-rad-blue-900">Réseau Africain de Développement</strong> est une entreprise multisectorielle qui accompagne la transformation économique et industrielle du continent africain depuis plus de 15 ans.
          </p>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-16 grid grid-cols-2 gap-6 rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 shadow-2xl shadow-rad-blue-900/30 md:grid-cols-4 md:p-10"
        >
          {[
            { value: "15+", label: "Années d'expérience", icon: "🏆" },
            { value: "100+", label: "Projets réalisés", icon: "🚀" },
            { value: "5", label: "Pays d'opération", icon: "🌍" },
            { value: "20+", label: "Partenaires stratégiques", icon: "🤝" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-2 text-3xl">{stat.icon}</div>
              <p className="text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-200 md:text-sm">
                {stat.label}
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
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Expertise multisectorielle reconnue",
                description:
                  "Mines, construction, logistique, commerce international : une offre intégrée couvrant toute la chaîne de valeur.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Partenaires locaux et internationaux de premier plan",
                description:
                  "Collaborations stratégiques avec Caterpillar, Rio Tinto, et les acteurs majeurs de l'industrie africaine.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Solutions clés en main et impact mesurable",
                description:
                  "De la conception à la livraison, nous garantissons l'excellence opérationnelle et des résultats tangibles.",
              },
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-rad-orange text-white shadow-md shadow-rad-orange/30">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-rad-blue-900 md:text-xl">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600 md:text-base">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA plus visible */}
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-rad-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
            >
              Découvrir notre histoire
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
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-400/50">
              <img
                src="/team.jpeg"
                alt="Équipe RAD sur le terrain"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              {/* Badge 15+ ans d'expertise */}
              <div className="absolute left-6 top-6">
                <div className="flex flex-col items-center gap-1 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm">
                  <p className="text-2xl font-bold text-rad-blue-900">15+</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                    Ans d'expertise
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
            Mission, Vision & Valeurs
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Mission",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                content: "Apporter des solutions concrètes et durables pour le développement économique et industriel de l'Afrique.",
              },
              {
                title: "Vision",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
                content: "Devenir l'acteur de référence connectant talents, technologies et opportunités pour un avenir prospère.",
              },
              {
                title: "Valeurs",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                content: "Intégrité, excellence, respect des communautés, innovation et engagement à long terme.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
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
                  {pillar.icon}
                </div>

                {/* Titre */}
                <h3 className="mb-4 text-2xl font-bold text-rad-blue-900 md:text-3xl">
                  {pillar.title}
                </h3>

                {/* Contenu */}
                <p className="text-base leading-relaxed text-slate-600">
                  {pillar.content}
                </p>

                {/* Effet de brillance au hover */}
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-rad-orange/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- DOMAINES D'INTERVENTION ---------------- */}
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-20 md:px-8 lg:px-4"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
            Nos domaines d'intervention
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Une offre intégrée couvrant la chaîne de valeur : de la stratégie aux opérations, pour accompagner vos projets à chaque étape.
          </p>
        </motion.div>

        {/* Grid asymétrique : 2 featured en haut, 4 normaux en bas */}
        <div className="space-y-6">
          {/* Ligne 1 : 2 services principaux (featured) */}
          <div className="grid gap-6 md:grid-cols-2">
            {domaines
              .filter((d) => d.featured)
              .map((domaine, index) => {
                const IconComponent = {
                  Pickaxe,
                  Building2,
                  ShoppingCart,
                  Truck,
                  GraduationCap,
                  Wrench,
                }[domaine.icon]

                return (
                  <motion.article
                    key={domaine.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20"
                  >
                    {/* Badge "Service Principal" */}
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full bg-rad-orange/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-rad-orange">
                        Service Principal
                      </span>
                    </div>

                    {/* Icône */}
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {IconComponent && <IconComponent className="h-10 w-10" strokeWidth={2} />}
                    </div>

                    {/* Titre */}
                    <h3 className="mb-3 text-2xl font-bold text-rad-blue-900 md:text-3xl">
                      {domaine.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-4 text-base leading-relaxed text-slate-600">
                      {domaine.description}
                    </p>

                    {/* Details badge */}
                    <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-rad-blue-800">
                      <svg className="h-4 w-4 text-rad-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {domaine.details}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/services"
                      className="group/link inline-flex items-center gap-2 text-sm font-bold text-rad-orange transition-all hover:gap-3 hover:text-rad-orange-hover"
                    >
                      Découvrir nos solutions {domaine.title.toLowerCase()}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    {/* Effet brillance */}
                    <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-rad-orange/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  </motion.article>
                )
              })}
          </div>

          {/* Ligne 2 : 4 services secondaires */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {domaines
              .filter((d) => !d.featured)
              .map((domaine, index) => {
                const IconComponent = {
                  Pickaxe,
                  Building2,
                  ShoppingCart,
                  Truck,
                  GraduationCap,
                  Wrench,
                }[domaine.icon]

                return (
                  <motion.article
                    key={domaine.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: (index + 2) * 0.1 }}
                    className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-md shadow-slate-300/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-rad-blue-900/20"
                  >
                    {/* Barre orange top */}
                    <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-rad-orange to-rad-orange-hover transition-all duration-500 group-hover:h-2" />

                    {/* Icône */}
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rad-blue-900/5 text-rad-blue-900 transition-all duration-500 group-hover:bg-rad-orange group-hover:text-white group-hover:scale-110">
                      {IconComponent && <IconComponent className="h-7 w-7" strokeWidth={2} />}
                    </div>

                    {/* Titre */}
                    <h3 className="mb-2 text-lg font-bold text-rad-blue-900">
                      {domaine.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-3 text-sm leading-relaxed text-slate-600">
                      {domaine.description}
                    </p>

                    {/* Details */}
                    <p className="mb-4 text-xs font-semibold text-rad-orange">
                      {domaine.details}
                    </p>

                    {/* CTA */}
                    <Link
                      href="/services"
                      className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-rad-blue-900 transition-all hover:text-rad-orange"
                    >
                      En savoir plus
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </motion.article>
                )
              })}
          </div>
        </div>

        {/* CTA global */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
          >
            Voir tous nos services en détail
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
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
              Nos réalisations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
              Des projets d'envergure qui illustrent notre expertise multisectorielle et notre engagement pour l'excellence opérationnelle.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {realisations.map((projet, index) => (
              <motion.article
                key={projet.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-md shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-400/40"
              >
                {/* Image avec overlay au hover */}
                <div className="relative h-64 w-full overflow-hidden md:h-72">
                  <img
                    src={projet.image}
                    alt={projet.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rad-blue-900/90 via-rad-blue-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Badge secteur en haut à droite */}
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-rad-blue-900 shadow-lg backdrop-blur-sm">
                      {projet.sector}
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
                        {projet.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {projet.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-rad-blue-900 md:text-2xl">
                    {projet.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {projet.description}
                  </p>

                  {/* Stats clés */}
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                    {projet.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-lg font-bold text-rad-blue-900 md:text-xl">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA spécifique */}
                  <Link
                    href="/projects"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rad-orange transition-all hover:gap-3 hover:text-rad-orange-hover"
                  >
                    Voir les détails du projet
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
            <p className="text-sm font-medium text-slate-600">
              <span className="font-bold text-rad-blue-900">{realisations.length}+ projets majeurs</span> réalisés depuis 2020
            </p>
            <Link
              href="/projects"
              className="group rounded-full bg-rad-blue-900 px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-800 hover:shadow-xl hover:shadow-rad-blue-900/50"
            >
              <span className="flex items-center gap-2">
                Voir tous nos projets
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
            Une équipe d'experts engagés
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Des professionnels expérimentés, présents sur le terrain et dédiés à l'excellence de vos projets.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {equipe.map((member, index) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rad-orange/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-rad-blue-900/90 via-rad-blue-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Badge expertise révélé au hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs font-semibold text-white">
                    ✓ {member.expertise}
                  </p>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-rad-blue-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-rad-orange">
                  {member.role}
                </p>
              </div>

              {/* Barre orange top */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-rad-orange to-rad-orange-hover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </section>

     {/* ---------------- PARTENAIRES & FOURNISSEURS ---------------- */}
<section className="bg-slate-100 py-20">
  <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mb-12 text-center"
    >
      <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
        Nos partenaires stratégiques
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
        Des collaborations avec les leaders mondiaux de l'industrie pour garantir l'excellence de nos projets.
      </p>
    </motion.div>

    {/* Catégories de partenaires */}
    <div className="space-y-12">
      {/* Équipementiers */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h3 className="mb-6 text-center text-lg font-bold text-rad-blue-900 md:text-xl">
          Fournisseurs d'Équipements
        </h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { name: "Caterpillar", logo: "/cat-logo.png", type: "Engins lourds" },
            { name: "Toyota", logo: "/toyota-logo.svg", type: "Véhicules" },
            { name: "Komatsu", logo: "https://via.placeholder.com/150x60/0A2A43/FFFFFF?text=Komatsu", type: "Engins miniers" },
            { name: "Volvo", logo: "https://via.placeholder.com/150x60/0A2A43/FFFFFF?text=Volvo", type: "Équipements" },
          ].map((partner, idx) => (
            <div
              key={partner.name}
              className="group relative flex h-28 flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-md shadow-slate-300/50 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rad-orange/20 hover:ring-rad-orange"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 max-w-[120px] object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
              {/* Tooltip type au hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-rad-blue-900 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                {partner.type}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Partenaires stratégiques */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h3 className="mb-6 text-center text-lg font-bold text-rad-blue-900 md:text-xl">
          Partenaires Miniers & Industriels
        </h3>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {[
            { name: "Rio Tinto", logo: "/rio-tinto-logo.png", type: "Minier global" },
            { name: "SAG", logo: "/sag-logo.jpg", type: "Services guinéens" },
            { name: "AngloGold", logo: "https://via.placeholder.com/150x60/0A2A43/FFFFFF?text=AngloGold", type: "Or & Métaux" },
          ].map((partner, idx) => (
            <div
              key={partner.name}
              className="group relative flex h-28 flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-md shadow-slate-300/50 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rad-orange/20 hover:ring-rad-orange"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-10 max-w-[120px] object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
              {/* Tooltip type au hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-rad-blue-900 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                {partner.type}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Témoignage partenaire */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mt-16 rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-white shadow-2xl shadow-rad-blue-900/30 md:p-12"
    >
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-4xl">
          "
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg italic leading-relaxed md:text-xl">
            RAD a été un partenaire essentiel dans le déploiement de nos opérations en Guinée. Leur expertise logistique et leur réactivité ont permis de maintenir nos délais de livraison même dans des conditions difficiles.
          </p>
          <p className="mt-4 font-semibold text-rad-yellow">
            — Directeur Régional, Partenaire International
          </p>
        </div>
      </div>
    </motion.div>
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
              Pourquoi choisir RAD ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
              Quatre piliers qui font la différence dans chacun de nos projets.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Award className="h-8 w-8" strokeWidth={2} />,
                title: "Expertise multisectorielle",
                points: [
                  "15+ ans d'expérience terrain",
                  "Équipes pluridisciplinaires",
                  "Standards internationaux",
                ],
              },
              {
                icon: <Globe className="h-8 w-8" strokeWidth={2} />,
                title: "Ancrage local & réseau global",
                points: [
                  "Présence en Afrique de l'Ouest",
                  "Partenaires mondiaux",
                  "Connaissance du terrain",
                ],
              },
              {
                icon: <Lightbulb className="h-8 w-8" strokeWidth={2} />,
                title: "Solutions sur mesure",
                points: [
                  "Approche personnalisée",
                  "Innovation adaptée",
                  "Réactivité garantie",
                ],
              },
              {
                icon: <Leaf className="h-8 w-8" strokeWidth={2} />,
                title: "Engagement durable",
                points: [
                  "Impact social positif",
                  "Respect environnemental",
                  "Création d'emplois locaux",
                ],
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl hover:shadow-black/30"
              >
                {/* Icône */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-rad-orange text-white shadow-lg shadow-rad-orange/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {item.icon}
                </div>

                {/* Titre */}
                <h3 className="mb-4 text-xl font-bold md:text-2xl">
                  {item.title}
                </h3>

                {/* Points clés */}
                <ul className="space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-100">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rad-yellow" strokeWidth={2.5} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Effet brillance */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </motion.article>
            ))}
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
              Démarrez votre projet avec RAD
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
              Besoin d'équipements, de services industriels ou logistiques ? Contactez-nous pour une solution sur mesure.
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
                    <option value="mines">Mines & Services Industriels</option>
                    <option value="construction">Construction & Génie Civil</option>
                    <option value="commerce">Commerce & Supply Chain</option>
                    <option value="logistique">Transport & Logistique</option>
                    <option value="formation">Formation & Conseil</option>
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
                    Envoyer ma demande
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
                        Conakry, Guinée
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
                        +224 XXX XXX XXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:contact@rad-guinee.com" className="mt-1 block text-sm text-rad-yellow hover:underline">
                        contact@rad-guinee.com
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
                  Page contact complète
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
                <h3 className="text-2xl font-bold">Restez informé</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Recevez nos actualités et opportunités en avant-première
                </p>
              </div>
              <div className="flex w-full max-w-md gap-3">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-slate-400 backdrop-blur-sm transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/30"
                />
                <button className="rounded-full bg-rad-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-rad-orange-hover">
                  S'abonner
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
              <img
                src="/rad-logo.jpeg"
                alt="RAD Logo"
                className="mb-4 h-auto w-40 rounded-lg"
              />
              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                Partenaire de confiance pour le développement industriel et économique en Afrique depuis 2008.
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
              <h4 className="mb-6 text-lg font-bold">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { label: "Accueil", href: "/" },
                  { label: "À propos", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Projets", href: "/projects" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition hover:text-rad-orange hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3 : Domaines d'activité */}
            <div>
              <h4 className="mb-6 text-lg font-bold">Nos Domaines</h4>
              <ul className="space-y-3">
                {[
                  "Mines & Industrie",
                  "Construction & Génie Civil",
                  "Commerce & Supply Chain",
                  "Transport & Logistique",
                  "Formation & Conseil",
                  "Services Techniques",
                ].map((domain) => (
                  <li key={domain}>
                    <Link
                      href="/services"
                      className="text-sm text-slate-300 transition hover:text-rad-orange hover:underline"
                    >
                      {domain}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 4 : Contact */}
            <div>
              <h4 className="mb-6 text-lg font-bold">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                  <span className="text-sm text-slate-300">
                    Conakry, République de Guinée
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                  <span className="text-sm text-slate-300">
                    +224 XXX XXX XXX
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                  <a
                    href="mailto:contact@rad-guinee.com"
                    className="text-sm text-slate-300 hover:text-rad-yellow hover:underline"
                  >
                    contact@rad-guinee.com
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
              © {new Date().getFullYear()} Réseau Africain de Développement. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="hover:text-rad-orange hover:underline">
                Mentions légales
              </Link>
              <Link href="#" className="hover:text-rad-orange hover:underline">
                Politique de confidentialité
              </Link>
              <Link href="#" className="hover:text-rad-orange hover:underline">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
        

  )
}
