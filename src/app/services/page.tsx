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

// Tes services principaux
const services = [
  {
    id: 1,
    title: "Mines & services industriels",
    short:
      "Accompagnement complet des opérations minières : équipements, pièces, support et logistique.",
    bullets: [
      "Approvisionnement en pièces et équipements (engins lourds, filtres, consommables…).",
      "Coordination avec les concessionnaires, ateliers et fournisseurs spécialisés.",
      "Optimisation des stocks, des délais et de la disponibilité opérationnelle.",
    ],
    image: "/images/services/mines.jpg",
  },
  {
    id: 2,
    title: "Construction & infrastructures",
    short:
      "Études, pilotage et exécution de projets de construction et d’aménagements structurants.",
    bullets: [
      "Travaux de routes, ouvrages publics, bâtiments fonctionnels et infrastructures industrielles.",
      "Suivi de chantier, contrôle qualité et gestion des équipes sur le terrain.",
      "Respect des normes, des délais et des budgets impartis.",
    ],
    image: "/images/services/construction.jpg",
  },
  {
    id: 3,
    title: "Commerce & import–export",
    short:
      "Sourcing, achats stratégiques et expédition de biens à forte valeur ajoutée vers l’Afrique.",
    bullets: [
      "Recherche et sélection de fournisseurs fiables (Canada, Europe, Moyen-Orient…).",
      "Gestion de commandes de grande envergure pour entreprises et institutions.",
      "Support sur la documentation, les incoterms et les contraintes douanières.",
    ],
    image: "/images/services/commerce.jpg",
  },
  {
    id: 4,
    title: "Logistique & approvisionnement",
    short:
      "Organisation des flux et de l’acheminement des équipements, pièces et matériaux.",
    bullets: [
      "Solutions de transport et de groupage adaptées à la réalité du terrain.",
      "Gestion des stocks, des entrepôts et des points de livraison.",
      "Partenariats avec des transporteurs et transitaires spécialisés.",
    ],
    image: "/images/services/logistique.jpg",
  },
  {
    id: 5,
    title: "Immobilier & projets structurants",
    short:
      "Développement de projets immobiliers et infrastructures clés pour les activités économiques.",
    bullets: [
      "Conception de bâtiments adaptés aux besoins des entreprises et des communautés.",
      "Coordination des acteurs techniques, administratifs et financiers.",
      "Suivi de chantier jusqu’à la mise en service opérationnelle.",
    ],
    image: "/images/services/immobilier.jpg",
  },
  {
    id: 6,
    title: "Conseil & services sur mesure",
    short:
      "Accompagnement stratégique et opérationnel pour les décideurs publics et privés.",
    bullets: [
      "Études de faisabilité, structuration et modélisation de projets.",
      "Mise en relation avec partenaires techniques, industriels et financiers.",
      "Suivi personnalisé, reporting et amélioration continue.",
    ],
    image: "/images/services/conseil.jpg",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900">
      {/* HERO SERVICES */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/services/services-hero-bg.jpg"
            alt="Services RAD"
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
            Nos domaines d&apos;intervention
          </motion.p>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="max-w-3xl space-y-4"
          >
            <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              Des services intégrés, pensés pour le terrain et les décideurs.
            </h1>
            <p className="text-sm text-slate-100/90 md:text-base">
              RAD propose une offre globale pour accompagner les projets de bout en bout, de la
              réflexion stratégique à la mise en œuvre opérationnelle : mines, construction,
              commerce, logistique, immobilier et conseil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LISTE DES SERVICES – BLOCS ALTERNÉS */}
      <section className="mx-auto max-w-6xl px  -4 py-16 md:px-6 lg:px-0">
        <div className="space-y-14">
          {services.map((service, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.article
                key={service.id}
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
                    Service {String(service.id).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-sky-900 md:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                    {service.short}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-700" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IMAGE */}
                <div className={isEven ? "order-2 md:order-2 md:pl-8" : "order-1"}>
                  <div className="relative h-60 w-full overflow-hidden rounded-3xl bg-slate-200 shadow-lg shadow-slate-300/80">
                    <Image
                      src={service.image}
                      alt={service.title}
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

      {/* SECTION — COMMENT ON TRAVAILLE */}
      <section className="bg-sky-900/95 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center text-2xl font-semibold md:text-3xl"
          >
            Une méthodologie claire, orientée résultats.
          </motion.h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Analyse",
                text: "Compréhension du besoin, des contraintes, du contexte terrain et réglementaire.",
              },
              {
                title: "Structuration",
                text: "Définition des scénarios possibles, plan d’action et identification des partenaires.",
              },
              {
                title: "Déploiement",
                text: "Mise en œuvre opérationnelle, coordination des équipes et des ressources.",
              },
              {
                title: "Suivi",
                text: "Mesure des résultats, ajustements continus et accompagnement dans la durée.",
              },
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl bg-white/5 p-5 text-sm text-slate-100 shadow-sm shadow-black/30 backdrop-blur-sm"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200">
                  Étape {idx + 1}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-100/90">{step.text}</p>
              </motion.div>
            ))}
          </div>
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
            Besoin d’un partenaire fiable pour votre prochain projet ?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-2xl text-sm text-slate-700 md:text-base"
          >
            Mines, construction, logistique, commerce ou projets structurants : RAD peut vous
            accompagner à chaque étape. Discutons de votre situation et trouvons ensemble la meilleure
            façon d’avancer.
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
              Contacter RAD
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
