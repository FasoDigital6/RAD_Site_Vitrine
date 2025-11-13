"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { Pickaxe, Building2, ShoppingCart, Truck, GraduationCap, Wrench, ArrowRight, CheckCircle } from "lucide-react"
import { Footer } from "@/components/Footer"

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

// Services RAD basés sur la homepage
const domaines = [
  {
    title: "Mines & Services Industriels",
    description: "Transport de minerais, terrassements, location d'engins lourds et légers, maintenance d'équipements miniers.",
    details: "15+ projets | Équipements CAT, Toyota",
    icon: Pickaxe,
    featured: true,
    image: "https://images.unsplash.com/photo-1625218057599-ae80b8b63a93?w=800&q=80",
    bullets: [
      "Approvisionnement en pièces et équipements (engins lourds, filtres, consommables)",
      "Coordination avec les concessionnaires, ateliers et fournisseurs spécialisés",
      "Optimisation des stocks, des délais et de la disponibilité opérationnelle"
    ]
  },
  {
    title: "Construction & Génie Civil",
    description: "Bâtiments, ponts, routes, infrastructures électriques, tirage de câbles fibre optique et réseau.",
    details: "50+ km routes | Projets clés en main",
    icon: Building2,
    featured: true,
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
    bullets: [
      "Travaux de routes, ouvrages publics, bâtiments fonctionnels et infrastructures industrielles",
      "Suivi de chantier, contrôle qualité et gestion des équipes sur le terrain",
      "Respect des normes, des délais et des budgets impartis"
    ]
  },
  {
    title: "Commerce & Supply Chain",
    description: "Commerce général, import-export, fourniture d'équipements industriels et informatiques aux entreprises.",
    details: "100+ fournisseurs internationaux",
    icon: ShoppingCart,
    featured: false,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    bullets: [
      "Recherche et sélection de fournisseurs fiables (Canada, Europe, Moyen-Orient)",
      "Gestion de commandes de grande envergure pour entreprises et institutions",
      "Support sur la documentation, les incoterms et les contraintes douanières"
    ]
  },
  {
    title: "Transport & Logistique",
    description: "Transport de marchandises, gestion de flotte, entreposage, solutions logistiques intégrées.",
    details: "Flotte moderne | Tracking temps réel",
    icon: Truck,
    featured: false,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    bullets: [
      "Solutions de transport et de groupage adaptées à la réalité du terrain",
      "Gestion des stocks, des entrepôts et des points de livraison",
      "Partenariats avec des transporteurs et transitaires spécialisés"
    ]
  },
  {
    title: "Formation & Conseil",
    description: "Formation informatique et anglais professionnel, conseil stratégique, accompagnement de projets.",
    details: "500+ professionnels formés",
    icon: GraduationCap,
    featured: false,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    bullets: [
      "Études de faisabilité, structuration et modélisation de projets",
      "Mise en relation avec partenaires techniques, industriels et financiers",
      "Suivi personnalisé, reporting et amélioration continue"
    ]
  },
  {
    title: "Services Techniques",
    description: "Installation d'équipements informatiques, maintenance technique, prestation de services divers.",
    details: "Support 24/7 disponible",
    icon: Wrench,
    featured: false,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    bullets: [
      "Installation et configuration d'équipements informatiques et industriels",
      "Maintenance préventive et corrective, support technique 24/7",
      "Prestation de services sur mesure adaptés aux besoins spécifiques"
    ]
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SERVICES */}
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
              Nos Services
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Des services intégrés pour vos projets
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              RAD propose une offre globale pour accompagner les projets de bout en bout, de la réflexion stratégique à la mise en œuvre opérationnelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DOMAINES D'INTERVENTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 lg:px-4">
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
          {/* Ligne 1 : 2 services principaux */}
          <div className="grid gap-6 md:grid-cols-2">
            {domaines
              .filter((d) => d.featured)
              .map((domaine, index) => {
                const IconComponent = domaine.icon

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
                      <IconComponent className="h-10 w-10" strokeWidth={2} />
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
                      <CheckCircle className="h-4 w-4 text-rad-orange" />
                      {domaine.details}
                    </div>

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
                const IconComponent = domaine.icon

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
                      <IconComponent className="h-7 w-7" strokeWidth={2} />
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
                    <p className="text-xs font-semibold text-rad-orange">
                      {domaine.details}
                    </p>
                  </motion.article>
                )
              })}
          </div>
        </div>
      </section>

      {/* DÉTAILS DES SERVICES - ALTERNANCE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-16 text-center text-4xl font-bold text-rad-blue-900 md:text-5xl"
          >
            Découvrez nos services en détail
          </motion.h2>

          <div className="space-y-14">
            {domaines.map((service, index) => {
              const isEven = index % 2 === 0
              const IconComponent = service.icon

              return (
                <motion.article
                  key={service.title}
                  variants={isEven ? fadeInLeft : fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`grid gap-10 md:grid-cols-2 md:items-center ${
                    !isEven ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* TEXTE */}
                  <div className={isEven ? "order-1" : "order-2 md:order-1"}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30">
                      <IconComponent className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rad-orange">
                      Service {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-rad-blue-900 md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-slate-700">
                      {service.description}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rad-orange" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* IMAGE */}
                  <div className={isEven ? "order-2" : "order-1"}>
                    <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-slate-200 shadow-lg shadow-slate-300/80">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION MÉTHODOLOGIE */}
      <section className="bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-4 text-center text-3xl font-bold md:text-4xl"
          >
            Une méthodologie claire, orientée résultats
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-10 text-center text-slate-200"
          >
            De l'analyse à la livraison, un processus éprouvé pour garantir le succès de vos projets
          </motion.p>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Analyse",
                text: "Compréhension du besoin, des contraintes, du contexte terrain et réglementaire.",
              },
              {
                step: "2",
                title: "Structuration",
                text: "Définition des scénarios possibles, plan d'action et identification des partenaires.",
              },
              {
                step: "3",
                title: "Déploiement",
                text: "Mise en œuvre opérationnelle, coordination des équipes et des ressources.",
              },
              {
                step: "4",
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
                className="rounded-3xl bg-white/10 p-6 text-slate-100 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rad-orange text-2xl font-bold text-white shadow-lg shadow-rad-orange/30">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-slate-100/90">{step.text}</p>
              </motion.div>
            ))}
          </div>
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
              Besoin d'un partenaire fiable pour votre prochain projet ?
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Mines, construction, logistique, commerce ou projets structurants : RAD peut vous accompagner à chaque étape. Discutons de votre situation et trouvons ensemble la meilleure façon d'avancer.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="group rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
              >
                <span className="flex items-center gap-2">
                  Contacter RAD
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/projects"
                className="rounded-full border-2 border-rad-blue-900 px-8 py-4 text-base font-semibold text-rad-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-900/5"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
