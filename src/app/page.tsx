"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"


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

// ---------------- DOMAINES D’INTERVENTION ----------------

const domaines = [
  {
    title: "Mines & Services industriels",
    description:
      "Support technique, fourniture d’équipements et solutions opérationnelles pour les sites miniers.",
  },
  {
    title: "Construction & Ingénierie",
    description:
      "Travaux d’infrastructures, routes, ouvrages et aménagements pour le développement durable.",
  },
  {
    title: "Immobilier & Infrastructures",
    description:
      "Projets immobiliers, bâtiments fonctionnels et solutions adaptées aux besoins locaux.",
  },
  {
    title: "Commerce & Import–Export",
    description:
      "Approvisionnement en équipements, pièces et produits à forte valeur ajoutée.",
  },
  {
    title: "Logistique & Approvisionnement",
    description:
      "Organisation des flux, stockage et transport pour sécuriser vos opérations.",
  },
  {
    title: "Prestations & Services divers",
    description:
      "Accompagnement de projets, mise en relation, conseil et services sur mesure.",
  },
]

// ---------------- RÉALISATIONS (IMAGES) ----------------

const realisations = [
  {
    title: "Chantier d’infrastructures routières",
    description: "Exécution de travaux d’ingénierie dans une zone minière.",
    image: "/images/realisation-route.jpg",
  },
  {
    title: "Logistique pour équipements lourds",
    description:
      "Organisation de l’acheminement et du stockage d’engins et de pièces.",
    image: "/images/realisation-logistique.jpg",
  },
  {
    title: "Projet immobilier fonctionnel",
    description:
      "Construction de bâtiments adaptés aux besoins des communautés.",
    image: "/images/realisation-immo.jpg",
  },
]

// ---------------- ÉQUIPE ----------------

const equipe = [
  {
    name: "Équipe RAD – Terrain",
    role: "Opérations & Services",
    image: "/images/equipe-1.jpg",
  },
  {
    name: "Staff RAD – Siège",
    role: "Gestion & Coordination",
    image: "/images/equipe-2.jpg",
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
    transition: "opacity 0.8s ease-out", // transition propre
  }}
/>

        {/* Overlay bleu RAD */}
        <div className="absolute inset-0 bg-gradient-to-r from-rad-blue-900/95 via-rad-blue-900/85 to-rad-blue-900/70" />

        {/* Contenu */}
        <div className="relative z-10 flex h-full items-center px-6 py-10 md:px-16 lg:px-24">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl space-y-6 text-white"
          >
            {/* Badge + petit rappel couleurs logo */}
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
              <span className="flex h-1 w-10 overflow-hidden rounded-full">
                <span className="flex-1 bg-rad-green" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-red" />
              </span>
              RAD · Réseau Africain de Développement
            </div>

            {/* Titre principal */}
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            {/* Sous-titre */}
            <p className="text-base text-slate-100/90 md:text-lg lg:text-xl">
              {slide.subtitle}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/services"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-rad-blue-900 shadow-md shadow-rad-blue-900/30 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Découvrir nos services
              </Link>

              <Link
                href="/projects"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Voir nos projets
              </Link>
            </div>

            {/* Petites puces */}
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-100/80 md:text-sm">
              <span className="rounded-full border border-slate-100/30 px-3 py-1">
                Mines & industrie
              </span>
              <span className="rounded-full border border-slate-100/30 px-3 py-1">
                Construction & infrastructures
              </span>
              <span className="rounded-full border border-slate-100/30 px-3 py-1">
                Commerce & logistique
              </span>
            </div>
          </motion.div>
        </div>

        {/* Pagination du carrousel */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-6 rounded-full transition ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ---------------- QUI SOMMES-NOUS ---------------- */}
      <section
        id="about"
        className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:px-8 lg:px-0"
      >
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-5 md:w-1/2"
        >
          <div>
            <h2 className="text-3xl font-semibold text-rad-blue-900 md:text-4xl">
              Qui sommes-nous ?
            </h2>
            <div className="mt-2 flex h-1 w-24 overflow-hidden rounded-full">
              <span className="flex-1 bg-rad-green" />
              <span className="flex-1 bg-rad-yellow" />
              <span className="flex-1 bg-rad-red" />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            <strong>Réseau Africain de Développement (RAD)</strong> est une
            entreprise multisectorielle engagée dans la croissance économique et
            la transformation durable en Afrique. Basée en Guinée, RAD
            intervient dans des domaines stratégiques : services industriels,
            mines, construction, commerce, immobilier, logistique et
            développement communautaire.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Nous accompagnons les institutions publiques, les entreprises
            privées, les investisseurs et les porteurs de projets dans la
            conception, la mise en œuvre et la réalisation de solutions concrètes
            et adaptées aux réalités du terrain.
          </p>
          <p className="text-sm leading-relaxed text-slate-700 md:text-base">
            Notre approche intégrée combine analyse stratégique, déploiement
            opérationnel, gestion de projet et mise en relation des parties
            prenantes, avec un réseau de partenaires nationaux et
            internationaux.
          </p>

          <Link
            href="/about"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-rad-blue-900 px-5 py-2 text-xs font-semibold text-rad-blue-900 transition hover:-translate-y-0.5 hover:bg-rad-blue-900 hover:text-white"
          >
            En savoir plus sur RAD
            <span>→</span>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2"
        >
          <div className="overflow-hidden rounded-3xl bg-slate-200 shadow-lg shadow-slate-300/60">
            <img
              src="/team.jpeg"
              alt="RAD sur le terrain"
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </div>
        </motion.div>
      </section>

      {/* ---------------- MISSION / VISION / VALEURS ---------------- */}
      <section className="bg-rad-blue-900/5 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:px-8 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center text-3xl font-semibold text-rad-blue-900 md:text-4xl"
          >
            Mission, Vision & Valeurs
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl bg-white p-6 shadow-sm shadow-rad-blue-900/10"
            >
              <h3 className="text-lg font-semibold text-rad-blue-900">
                Mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Apporter des solutions concrètes et durables pour soutenir le
                développement économique, social et industriel en Afrique, en
                valorisant les ressources locales et les partenariats
                stratégiques.
              </p>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl bg-white p-6 shadow-sm shadow-rad-blue-900/10"
            >
              <h3 className="text-lg font-semibold text-rad-blue-900">
                Vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Devenir un acteur de référence du développement africain, en
                connectant les talents, les technologies et les opportunités
                pour bâtir un avenir prospère et inclusif.
              </p>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl bg-white p-6 shadow-sm shadow-rad-blue-900/10"
            >
              <h3 className="text-lg font-semibold text-rad-blue-900">
                Valeurs
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Intégrité, excellence opérationnelle, respect des communautés,
                innovation et engagement à long terme aux côtés de nos clients
                et partenaires.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------- DOMAINES D’INTERVENTION ---------------- */}
      <section
        id="services"
        className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-0"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-3xl font-semibold text-rad-blue-900 md:text-4xl"
        >
          Nos domaines d’intervention
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-700 md:text-base"
        >
          Une offre intégrée couvrant la chaîne de valeur : de la stratégie aux
          opérations, pour accompagner vos projets à chaque étape.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {domaines.map((domaine, index) => (
            <motion.article
              key={domaine.title}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm shadow-rad-blue-900/10 transition hover:-translate-y-1 hover:shadow-md hover:shadow-rad-blue-900/15"
            >
              <h3 className="text-base font-semibold text-rad-blue-900 md:text-lg">
                {domaine.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {domaine.description}
              </p>
              <Link
                href="/services"
                className="mt-4 text-xs font-semibold text-rad-blue-800 transition group-hover:translate-x-1 group-hover:text-rad-blue-900"
              >
                En savoir plus →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---------------- RÉALISATIONS ---------------- */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center text-3xl font-semibold text-rad-blue-900 md:text-4xl"
          >
            Nos réalisations
          </motion.h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {realisations.map((item, index) => (
              <motion.article
                key={item.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="overflow-hidden rounded-3xl bg-white shadow-sm shadow-rad-blue-900/10"
              >
                <div className="h-40 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-base font-semibold text-rad-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-700">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/projects"
              className="rounded-full border border-rad-blue-900 px-6 py-3 text-sm font-semibold text-rad-blue-900 transition hover:-translate-y-0.5 hover:bg-rad-blue-900 hover:text-white"
            >
              Voir tous nos projets
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- ÉQUIPE ---------------- */}
      <section
        id="equipe"
        className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-0"
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-3xl font-semibold text-rad-blue-900 md:text-4xl"
        >
          Une équipe engagée pour votre réussite
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-700 md:text-base"
        >
          Des femmes et des hommes présents sur le terrain, au service de vos
          projets et de vos objectifs.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {equipe.map((member, index) => (
            <motion.article
              key={member.name}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm shadow-rad-blue-900/10"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-base font-semibold text-rad-blue-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-slate-700">{member.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

     {/* ---------------- PARTENAIRES (défilement automatique) ---------------- */}
<section className="bg-slate-100 py-16">
  <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="text-center text-3xl font-semibold text-rad-blue-900 md:text-4xl"
    >
      Nos partenaires & fournisseurs
    </motion.h2>

    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mt-2 text-center text-sm text-slate-600"
    >
      Des collaborations avec des leaders mondiaux du secteur
    </motion.p>

    {/* Carrousel infini */}
    <div className="relative mt-10 overflow-hidden">
      <div className="animate-slide flex w-max gap-10">
        {[...partenaires, ...partenaires].map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="flex h-20 w-52 items-center justify-center rounded-2xl
                       bg-white/95 px-6 shadow-md shadow-slate-300/60 ring-1 ring-slate-200"
          >
            <img
              src={p.logo}
              alt={p.name}
              className="max-h-12 max-w-[150px] object-contain
                         opacity-90 grayscale
                         transition hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* ---------------- POURQUOI NOUS CHOISIR ---------------- */}
      <section className="bg-rad-blue-900/95 py-16">
        <div className="mx-auto max-w-6xl px-6 text-white md:px-8 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center text-3xl font-semibold md:text-4xl"
          >
            Pourquoi choisir RAD ?
          </motion.h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Expertise multisectorielle",
                text: "Une compréhension fine des enjeux industriels, commerciaux et sociaux.",
              },
              {
                title: "Ancrage local, réseau international",
                text: "Des équipes sur le terrain et des partenaires dans plusieurs pays.",
              },
              {
                title: "Solutions sur mesure",
                text: "Chaque projet est conçu en fonction du contexte et des objectifs.",
              },
              {
                title: "Engagement durable",
                text: "Impact économique, social et environnemental au cœur de nos actions.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-3xl bg-white/5 p-5 shadow-sm shadow-black/20 backdrop-blur-sm"
              >
                <h3 className="text-base font-semibold md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-100">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA CONTACT ---------------- */}
      <section id="contact" className="bg-slate-100 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center md:px-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-3xl font-semibold text-rad-blue-900 md:text-4xl"
          >
            Parlons de votre projet
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl text-sm text-slate-700 md:text-base"
          >
            Vous avez un besoin en équipements, en services industriels, en
            construction ou en logistique ? Notre équipe est disponible pour
            étudier votre projet et vous proposer une solution adaptée.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="rounded-full bg-rad-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-rad-blue-900/40 transition hover:-translate-y-0.5 hover:bg-rad-blue-800"
            >
              Accéder à la page contact
            </Link>
            <a
              href="mailto:contact@rad-guinee.com"
              className="rounded-full border border-rad-blue-900 px-6 py-3 text-sm font-semibold text-rad-blue-900 transition hover:-translate-y-0.5 hover:bg-rad-blue-900/5"
            >
              Envoyer un courriel
            </a>
          </motion.div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-slate-500 md:flex-row md:px-8 lg:px-0">
          <p>
            © {new Date().getFullYear()} Réseau Africain de Développement. Tous
            droits réservés.
          </p>
          <p>Conakry · Guinée</p>
        </div>
      </footer>
    </main>
        

  )
}
