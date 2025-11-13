"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"

// Animations pro compatibles TypeScript
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

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 text-slate-900 antialiased">
      {/* SECTION 1 — INTRO */}
      <section
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-0"
        id="about"
      >
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Texte */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rad-blue-700">
                À propos de RAD
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-rad-blue-900 md:text-4xl">
                Réseau Africain de Développement (RAD)
              </h1>
              <div className="mt-3 flex h-1 w-24 overflow-hidden rounded-full">
                <span className="flex-1 bg-rad-green" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-red" />
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Le <strong>Réseau Africain de Développement (RAD)</strong> est une
              organisation multisectorielle engagée dans la transformation
              durable de l’Afrique. Nous intervenons dans les secteurs minier,
              du commerce, du transport, de la construction et des services
              industriels, en apportant expertise, solutions modernes et
              technologies adaptées.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Notre approche repose sur l’innovation, la qualité et
              l’excellence opérationnelle. Nous accompagnons les entreprises,
              les gouvernements et les communautés dans la réalisation de
              projets structurants qui génèrent de la valeur réelle sur le long
              terme, avec une vision claire et des standards internationaux.
            </p>

            <motion.a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-rad-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-rad-blue-900/40 transition hover:-translate-y-0.5 hover:bg-rad-blue-800"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Découvrir nos services →
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl bg-slate-200 shadow-xl shadow-slate-300/60"
          >
            <Image
              src="/team.jpeg" // mets ici ta vraie image officielle
              alt="RAD Afrique sur le terrain"
              fill
              className="object-cover transition duration-700 hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — NOTRE HISTOIRE */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold tracking-tight text-rad-blue-900 md:text-4xl"
          >
            Notre histoire
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-slate-700 md:text-base"
          >
            Fondé par des professionnels issus des secteurs industriel, minier
            et des infrastructures, le RAD est né d’une ambition : bâtir un
            réseau africain solide, capable de réaliser des projets d’envergure
            et d’accompagner le développement économique avec des{" "}
            <span className="font-medium text-rad-blue-900">
              standards internationaux
            </span>
            . Au fil des années, nous avons consolidé un réseau de partenaires
            et de collaborateurs présents sur le terrain, au plus près des
            réalités locales.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 — MISSION / VISION / VALEURS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-3xl font-semibold tracking-tight text-rad-blue-900 md:text-4xl"
          >
            Mission, Vision & Valeurs
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* MISSION */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl bg-white p-6 shadow-sm shadow-rad-blue-900/10 transition hover:-translate-y-1 hover:shadow-md hover:shadow-rad-blue-900/15"
            >
              <h3 className="text-lg font-semibold text-rad-blue-900">
                Notre mission
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                Offrir des services fiables, modernes et adaptés aux réalités
                africaines dans les secteurs industriels, miniers, commerciaux
                et infrastructurels, en créant des solutions concrètes et
                durables pour nos clients et partenaires.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl bg-white p-6 shadow-sm shadow-rad-blue-900/10 transition hover:-translate-y-1 hover:shadow-md hover:shadow-rad-blue-900/15"
            >
              <h3 className="text-lg font-semibold text-rad-blue-900">
                Notre vision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                Construire une Afrique moderne, performante et
                technologiquement avancée, où les projets sont réalisés avec
                excellence, transparence et un impact positif pour les
                communautés locales.
              </p>
            </motion.div>

            {/* VALEURS */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl bg-white p-6 shadow-sm shadow-rad-blue-900/10 transition hover:-translate-y-1 hover:shadow-md hover:shadow-rad-blue-900/15"
            >
              <h3 className="text-lg font-semibold text-rad-blue-900">
                Nos valeurs
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">
                Intégrité, excellence opérationnelle, innovation, collaboration
                et respect des communautés : ces principes guident chaque
                décision et chaque projet que nous menons sur le terrain.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CHIFFRES / IMPACT */}
      <section className="bg-rad-blue-900 py-20 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-0">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Un impact concret sur le terrain
          </motion.h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl font-semibold md:text-5xl">+10</div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-100/80">
                années d’expérience cumulée
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl font-semibold md:text-5xl">+50</div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-100/80">
                projets accompagnés
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-2"
            >
              <div className="text-4xl font-semibold md:text-5xl">+7</div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-100/80">
                secteurs d’intervention
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
