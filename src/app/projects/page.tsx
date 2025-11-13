"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"

// Animations réutilisables
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

type Project = {
  id: number
  title: string
  sector: string
  location: string
  period: string
  summary: string
  impacts: string[]
  image: string
  status: "En cours" | "Terminé"
}

const projects: Project[] = [
  {
    id: 1,
    title: "Aménagement d’infrastructures routières en zone minière",
    sector: "Mines & Construction",
    location: "Guinée — Région aurifère",
    period: "2023 - 2024",
    status: "Terminé",
    summary:
      "Accompagnement d’un opérateur minier dans la construction et la réhabilitation de routes stratégiques pour l’accès aux sites d’exploitation.",
    impacts: [
      "Amélioration de l’accessibilité des sites miniers.",
      "Réduction des temps de transport et des coûts logistiques.",
      "Sécurisation des flux de matériel et des équipes.",
    ],
    image: "/images/projects/route-miniere.jpg",
  },
  {
    id: 2,
    title: "Approvisionnement en pièces et équipements pour engins lourds",
    sector: "Mines & Services industriels",
    location: "Guinée — Partenaire minier",
    period: "2022 - En cours",
    status: "En cours",
    summary:
      "Mise en place d’un dispositif d’approvisionnement en pièces de rechange pour des flottes d’engins lourds utilisées sur plusieurs sites miniers.",
    impacts: [
      "Amélioration du taux de disponibilité des équipements.",
      "Réduction des arrêts non planifiés.",
      "Meilleure visibilité sur les stocks stratégiques.",
    ],
    image: "/images/projects/pieces-engins-lourds.jpg",
  },
  {
    id: 3,
    title: "Sourcing & importation d’équipements spécialisés",
    sector: "Commerce & Import–Export",
    location: "Canada → Guinée",
    period: "2021 - 2023",
    status: "Terminé",
    summary:
      "Recherche, négociation et acheminement d’équipements spécialisés depuis le Canada pour des projets d’infrastructures en Guinée.",
    impacts: [
      "Accès à des équipements difficiles à obtenir localement.",
      "Optimisation du rapport qualité / coût pour le client.",
      "Mise en place de canaux d’approvisionnement pérennes.",
    ],
    image: "/images/projects/import-equipements.jpg",
  },
  {
    id: 4,
    title: "Développement d’un site logistique et immobilier",
    sector: "Immobilier & Logistique",
    location: "Conakry — Zone stratégique",
    period: "2022 - 2024",
    status: "En cours",
    summary:
      "Participation à la conception et au développement d’un espace dédié au stockage, aux bureaux et aux opérations pour plusieurs partenaires.",
    impacts: [
      "Centralisation des activités sur un site optimisé.",
      "Meilleure coordination entre les équipes opérationnelles.",
      "Création d’un hub pour de futures expansions.",
    ],
    image: "/images/projects/site-logistique.jpg",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      {/* HERO PROJETS */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/projects/projects-hero-bg.jpg"
            alt="Projets RAD"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-sky-950/80 to-sky-900/70" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 md:px-6 lg:px-0">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100 shadow-sm shadow-black/30 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Projets & Réalisations
          </motion.p>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-4"
          >
            <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Des projets concrets, pensés pour le terrain et les résultats.
            </h1>
            <p className="text-sm text-slate-100/90 md:text-base">
              RAD intervient sur des projets industriels, miniers, logistiques,
              commerciaux et immobiliers. Chaque projet est conçu pour répondre
              à des besoins réels, avec une approche pragmatique, structurée et
              orientée impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PETIT RÉSUMÉ / STATS */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-0">
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-5 text-center shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Expérience
              </p>
              <p className="mt-2 text-3xl font-semibold text-sky-900">+10 ans</p>
              <p className="mt-1 text-xs text-slate-600">
                d&apos;expérience combinée sur le terrain
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-5 text-center shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Projets
              </p>
              <p className="mt-2 text-3xl font-semibold text-sky-900">+50</p>
              <p className="mt-1 text-xs text-slate-600">
                projets complétés ou accompagnés
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-5 text-center shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Secteurs
              </p>
              <p className="mt-2 text-3xl font-semibold text-sky-900">+7</p>
              <p className="mt-1 text-xs text-slate-600">
                secteurs d&apos;intervention couverts
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LISTE DES PROJETS – ALTERNANCE GAUCHE / DROITE */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-0">
        <div className="space-y-14">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.article
                key={project.id}
                variants={isEven ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`grid gap-10 md:grid-cols-2 md:items-center ${
                  !isEven ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* TEXTE */}
                <div className={isEven ? "order-1" : "order-2 md:order-1 md:pl-8"}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Projet {String(project.id).padStart(2, "0")} · {project.sector}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-sky-900 md:text-2xl">
                    {project.title}
                  </h2>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {project.status}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                      📍 {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                      📆 {project.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                    {project.summary}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {project.impacts.map((impact, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-700" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IMAGE */}
                <div className={isEven ? "order-2 md:order-2 md:pl-8" : "order-1"}>
                  <div className="relative h-60 w-full overflow-hidden rounded-3xl bg-slate-200 shadow-lg shadow-slate-300/80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center md:px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-2xl font-semibold text-sky-900 md:text-3xl"
          >
            Vous souhaitez lancer un projet similaire ou discuter d&apos;un besoin spécifique ?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl text-sm text-slate-700 md:text-base"
          >
            RAD peut vous accompagner dans l&apos;analyse, la structuration et le déploiement
            de vos projets. Mines, construction, logistique, import–export ou immobilier :
            notre équipe est disponible pour en parler.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="mailto:contact@rad-guinee.com"
              className="rounded-full bg-sky-900 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-sky-900/40 transition hover:-translate-y-0.5 hover:bg-sky-800"
            >
              Parler à RAD
            </a>
            <a
              href="/#contact"
              className="rounded-full border border-sky-900 px-6 py-3 text-sm font-semibold text-sky-900 transition hover:-translate-y-0.5 hover:bg-sky-900/5"
            >
              Voir nos coordonnées
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
