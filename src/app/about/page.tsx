"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Award, Globe, Users, Target, TrendingUp, CheckCircle } from "lucide-react"

// Animations cohérentes avec la homepage
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-rad-blue-900 pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900 opacity-95" />

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
              À propos de RAD
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Réseau Africain de Développement
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              Votre partenaire multisectoriel pour bâtir l'avenir industriel et économique de l'Afrique depuis plus de 15 ans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              { value: "15+", label: "Années d'expérience", icon: "🏆" },
              { value: "100+", label: "Projets réalisés", icon: "🚀" },
              { value: "5", label: "Pays d'opération", icon: "🌍" },
              { value: "20+", label: "Partenaires stratégiques", icon: "🤝" },
            ].map((stat, idx) => (
              <div key={idx} className="rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-center text-white shadow-xl shadow-rad-blue-900/30">
                <div className="mb-2 text-3xl">{stat.icon}</div>
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-200">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 lg:px-0">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Texte */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
                Qui sommes-nous ?
              </h2>
              <div className="mt-4 flex h-1.5 w-32 overflow-hidden rounded-full">
                <span className="flex-1 bg-rad-green" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-red" />
              </div>
            </div>

            <p className="text-lg leading-relaxed text-slate-700">
              Le <strong className="text-rad-blue-900">Réseau Africain de Développement (RAD)</strong> est une entreprise multisectorielle qui accompagne la transformation économique et industrielle du continent africain depuis plus de 15 ans.
            </p>

            <p className="leading-relaxed text-slate-600">
              Nous opérons dans les secteurs miniers, du commerce, du transport, de la construction et des services industriels, en apportant expertise, solutions modernes et technologies adaptées aux réalités du terrain africain.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Award className="h-6 w-6" />,
                  text: "Expertise multisectorielle reconnue dans 6 domaines clés"
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  text: "Équipes pluridisciplinaires avec 15+ ans d'expérience terrain"
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  text: "Présence établie en Afrique de l'Ouest et réseau international"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-rad-orange text-white shadow-md shadow-rad-orange/30">
                    {item.icon}
                  </div>
                  <p className="pt-2 text-base text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-rad-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
            >
              Découvrir nos services
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-400/50">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="Équipe RAD sur le terrain"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              {/* Badge 15+ ans */}
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

      {/* NOTRE HISTOIRE */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-rad-blue-900 md:text-5xl">
              Notre histoire
            </h3>
            <div className="mx-auto mt-4 flex h-1.5 w-32 overflow-hidden rounded-full">
              <span className="flex-1 bg-rad-green" />
              <span className="flex-1 bg-rad-yellow" />
              <span className="flex-1 bg-rad-red" />
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-slate-700"
          >
            Fondé par des experts issus du monde industriel et minier, le RAD est né d'une vision claire : construire un réseau africain solide capable de réaliser des projets d'envergure et d'accompagner le développement économique avec des standards internationaux, tout en respectant les spécificités locales.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-slate-600"
          >
            Au fil des années, nous avons développé une expertise reconnue dans les mines, la construction, la logistique, le commerce international et les services techniques, en établissant des partenariats stratégiques avec les leaders mondiaux de l'industrie.
          </motion.p>
        </div>
      </section>

      {/* MISSION / VISION / VALEURS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 lg:px-0">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-4xl font-bold text-rad-blue-900 md:text-5xl"
        >
          Mission, Vision & Valeurs
        </motion.h3>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Notre Mission",
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
              content: "Apporter des solutions concrètes et durables pour le développement économique et industriel de l'Afrique, en accompagnant entreprises et institutions dans la réalisation de leurs projets structurants."
            },
            {
              title: "Notre Vision",
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ),
              content: "Devenir l'acteur de référence en Afrique, connectant talents locaux, technologies modernes et opportunités internationales pour bâtir un avenir prospère et durable."
            },
            {
              title: "Nos Valeurs",
              icon: (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              ),
              content: "Intégrité absolue, excellence opérationnelle, respect profond des communautés, innovation continue et engagement à long terme envers nos partenaires et l'Afrique."
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
              {/* Barre orange en haut */}
              <div className="absolute left-0 right-0 top-0 h-2 bg-gradient-to-r from-rad-orange to-rad-orange-hover transition-all duration-500 group-hover:h-3" />

              {/* Icône */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rad-orange to-rad-orange-hover text-white shadow-lg shadow-rad-orange/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {pillar.icon}
              </div>

              {/* Titre */}
              <h4 className="mb-4 text-2xl font-bold text-rad-blue-900">
                {pillar.title}
              </h4>

              {/* Contenu */}
              <p className="leading-relaxed text-slate-600">
                {pillar.content}
              </p>

              {/* Effet brillance */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-rad-orange/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* POURQUOI CHOISIR RAD */}
      <section className="bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-12 text-center"
          >
            <h3 className="text-4xl font-bold md:text-5xl">
              Pourquoi nous choisir ?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-slate-200">
              Des atouts concrets qui font la différence sur chaque projet
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Approche orientée résultats",
                points: [
                  "Focus sur l'impact mesurable",
                  "Méthodologie éprouvée",
                  "Suivi rigoureux de projet"
                ]
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Équipes pluridisciplinaires",
                points: [
                  "Experts techniques qualifiés",
                  "Connaissance du terrain",
                  "Réactivité garantie"
                ]
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Réseau international",
                points: [
                  "Partenaires mondiaux",
                  "Accès aux meilleures technologies",
                  "Standards internationaux"
                ]
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Excellence opérationnelle",
                points: [
                  "15+ ans d'expérience",
                  "100+ projets réussis",
                  "Certifications reconnues"
                ]
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Innovation continue",
                points: [
                  "Technologies modernes",
                  "Optimisation permanente",
                  "Solutions adaptées"
                ]
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Engagement durable",
                points: [
                  "Impact social positif",
                  "Respect environnemental",
                  "Création d'emplois locaux"
                ]
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-3xl bg-white/10 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rad-orange text-white shadow-lg shadow-rad-orange/30 transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="mb-3 text-xl font-bold">{item.title}</h4>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-100">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rad-yellow" strokeWidth={2.5} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
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
              Prêt à démarrer votre projet avec RAD ?
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Mines, construction, logistique ou services industriels : discutons de vos besoins et trouvons ensemble les meilleures solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="group rounded-full bg-rad-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-rad-orange/40 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-orange-hover hover:shadow-xl hover:shadow-rad-orange/60"
              >
                <span className="flex items-center gap-2">
                  Nous contacter
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
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
    </main>
  )
}
