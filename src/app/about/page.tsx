"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"

// Animations pro compatibles TypeScript
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

export default function About() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* SECTION 1 — INTRO */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-0" id="about">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* Texte */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-sky-900 md:text-4xl">
              À propos du Réseau Africain de Développement (RAD)
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Le RAD est une organisation multisectorielle engagée dans la transformation durable de l’Afrique.
              Nous opérons dans les secteurs minier, du commerce, du transport, de la construction
              et des services industriels, en apportant expertise, solutions modernes et technologies adaptées.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Notre approche repose sur l’innovation, la qualité et l’excellence opérationnelle.
              Nous accompagnons les entreprises, les gouvernements et les communautés dans la réalisation
              de projets structurants qui génèrent de la valeur réelle sur le long terme.
            </p>

            <motion.a
              href="#services"
              className="inline-block rounded-full bg-sky-900 px-6 py-3 text-white font-semibold shadow-lg shadow-sky-900/30 transition hover:-translate-y-0.5 hover:bg-sky-800"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
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
            className="relative h-72 w-full md:h-96"
          >
            <Image
              src="/images/about-rad.jpg" // CHANGE cette image par une photo officielle
              alt="RAD Africa"
              fill
              className="rounded-2xl object-cover shadow-xl"
            />
          </motion.div>

        </div>
      </section>

      {/* SECTION 2 — NOTRE HISTOIRE */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-0">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-3xl font-bold text-sky-900 md:text-4xl"
          >
            Notre histoire
          </motion.h3>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-3xl text-center text-slate-600 text-lg leading-relaxed"
          >
            Fondé par des experts issus du monde industriel et minier,
            le RAD est né d’une vision : construire un réseau africain solide
            capable de réaliser des projets d’envergure et d’accompagner le développement économique
            avec des standards internationaux.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3 — MISSION / VISION / VALEURS */}
      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 lg:px-0">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-sky-900 md:text-4xl"
        >
          Mission, Vision & Valeurs
        </motion.h3>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* MISSION */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h4 className="text-xl font-bold text-sky-900">Notre Mission</h4>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Offrir des services fiables, modernes et adaptés aux réalités africaines,
              dans les secteurs industriels, miniers, commerciaux et infrastructurels.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h4 className="text-xl font-bold text-sky-900">Notre Vision</h4>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Construire une Afrique moderne, performante et technologiquement avancée,
              où les projets sont réalisés avec excellence et transparence.
            </p>
          </motion.div>

          {/* VALEURS */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <h4 className="text-xl font-bold text-sky-900">Nos Valeurs</h4>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Intégrité, excellence, innovation, collaboration
              et respect des communautés avec lesquelles nous travaillons.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SECTION 4 — CHIFFRES / IMPACT */}
      <section className="bg-sky-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-0 text-center">

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold md:text-4xl"
          >
            Un impact réel sur le terrain
          </motion.h3>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              className="text-center"
            >
              <div className="text-4xl font-bold">+10</div>
              <p className="mt-2 opacity-80">années d’expérience</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
            >
              <div className="text-4xl font-bold">+50</div>
              <p className="mt-2 opacity-80">projets réalisés</p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
            >
              <div className="text-4xl font-bold">+7</div>
              <p className="mt-2 opacity-80">secteurs d’intervention</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
