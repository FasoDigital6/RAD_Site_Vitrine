"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { MapPin, Calendar, CheckCircle, ArrowRight } from "lucide-react"

// Animations cohérentes
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

// Projets RAD (mêmes que la homepage)
const realisations = [
  {
    title: "Infrastructure Routière Mines de Boké",
    description:
      "Construction de 45 km de routes d'accès aux sites miniers avec génie civil avancé et drainage optimisé pour conditions tropicales.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
    location: "Boké, Guinée",
    sector: "Construction & Mines",
    year: "2023",
    status: "Terminé",
    stats: [
      { label: "Durée", value: "18 mois" },
      { label: "Budget", value: "8.5M USD" },
      { label: "Impact", value: "2000+ emplois" },
    ],
    impacts: [
      "Amélioration de l'accessibilité des sites miniers",
      "Réduction des temps de transport et des coûts logistiques",
      "Sécurisation des flux de matériel et des équipes"
    ]
  },
  {
    title: "Logistique Multi-modale Conakry",
    description:
      "Mise en place d'un hub logistique intégré avec entreposage de 5000 m², gestion de flotte et système de tracking pour équipements miniers lourds.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    location: "Conakry, Guinée",
    sector: "Logistique & Supply Chain",
    year: "2022-2023",
    status: "Terminé",
    stats: [
      { label: "Capacité", value: "5000 m²" },
      { label: "Flotte", value: "45 véhicules" },
      { label: "Tonnage/an", value: "50K tonnes" },
    ],
    impacts: [
      "Centralisation des activités sur un site optimisé",
      "Meilleure coordination entre les équipes opérationnelles",
      "Création d'un hub pour de futures expansions"
    ]
  },
  {
    title: "Fourniture Engins CAT – Projet Simandou",
    description:
      "Approvisionnement et maintenance de 120 équipements Caterpillar (bulldozers, excavateurs, dumpers) pour exploitation minière de classe mondiale.",
    image: "https://images.unsplash.com/photo-1625218057599-ae80b8b63a93?w=800&q=80",
    location: "Simandou, Guinée",
    sector: "Équipements & Services Miniers",
    year: "2021-2024",
    status: "En cours",
    stats: [
      { label: "Équipements", value: "120 unités" },
      { label: "Partenaire", value: "Caterpillar" },
      { label: "Maintenance", value: "24/7" },
    ],
    impacts: [
      "Amélioration du taux de disponibilité des équipements",
      "Réduction des arrêts non planifiés",
      "Meilleure visibilité sur les stocks stratégiques"
    ]
  },
  {
    title: "Cité Résidentielle Ouvriers – Kindia",
    description:
      "Développement immobilier de 85 logements fonctionnels avec infrastructures (eau, électricité, routes) pour personnel d'exploitation minière.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    location: "Kindia, Guinée",
    sector: "Immobilier & Infrastructures",
    year: "2023-2024",
    status: "En cours",
    stats: [
      { label: "Logements", value: "85 unités" },
      { label: "Surface", value: "12 hectares" },
      { label: "Bénéficiaires", value: "400+ personnes" },
    ],
    impacts: [
      "Amélioration des conditions de vie des travailleurs",
      "Infrastructure complète avec équipements modernes",
      "Création d'emplois locaux pendant la construction"
    ]
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO PROJETS */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900" />

        <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center text-white"
          >
            {/* Badge tricolore */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md ring-1 ring-white/20">
              <span className="flex h-1 w-10 overflow-hidden rounded-full">
                <span className="flex-1 bg-rad-green" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-red" />
              </span>
              Projets & Réalisations
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Nos projets concrets sur le terrain
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              RAD intervient sur des projets industriels, miniers, logistiques, commerciaux et immobiliers. Chaque projet est conçu pour répondre à des besoins réels, avec une approche pragmatique et orientée impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { value: "100+", label: "Projets réalisés", icon: "🚀" },
              { value: "8.5M USD", label: "Budget moyen par projet", icon: "💰" },
              { value: "5000+", label: "Emplois créés", icon: "👷" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-center text-white shadow-xl shadow-rad-blue-900/30"
              >
                <div className="mb-2 text-3xl">{stat.icon}</div>
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-200">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTE DES PROJETS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 lg:px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
            Nos réalisations majeures
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

                {/* Badge statut en haut à gauche */}
                <div className="absolute left-4 top-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-sm ${
                    projet.status === "Terminé"
                      ? "bg-green-500/90 text-white"
                      : "bg-rad-orange/90 text-white"
                  }`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {projet.status}
                  </span>
                </div>

                {/* Texte overlay visible au hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                      <MapPin className="h-4 w-4" />
                      {projet.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-white">
                      <Calendar className="h-4 w-4" />
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

                {/* Impacts */}
                <div className="mt-6 space-y-2">
                  {projet.impacts.map((impact, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rad-orange" />
                      <span>{impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-rad-blue-900 md:text-4xl">
              Vous souhaitez lancer un projet similaire ?
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              RAD peut vous accompagner dans l'analyse, la structuration et le déploiement de vos projets. Mines, construction, logistique, import-export ou immobilier : notre équipe est disponible pour en parler.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="group rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
              >
                <span className="flex items-center gap-2">
                  Parler à RAD
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/services"
                className="rounded-full border-2 border-rad-blue-900 px-8 py-4 text-base font-semibold text-rad-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-900/5"
              >
                Voir nos services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
