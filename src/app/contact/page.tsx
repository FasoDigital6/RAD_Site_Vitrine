"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"

// Animations cohérentes
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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO CONTACT */}
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
              Contact
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Parlons de votre projet
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              Que ce soit pour un besoin en équipements, en services industriels, en construction ou en logistique, l'équipe du Réseau Africain de Développement est disponible pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ÉLÉMENTS DE RÉASSURANCE */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: <Clock className="h-6 w-6" />, text: "Réponse sous 24h", emoji: "⚡" },
              { icon: <CheckCircle className="h-6 w-6" />, text: "Consultation gratuite", emoji: "✓" },
              { icon: <Phone className="h-6 w-6" />, text: "Devis personnalisé", emoji: "💼" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-lg shadow-slate-300/50 ring-1 ring-slate-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rad-orange/10 text-rad-orange">
                  {item.icon}
                </div>
                <div className="text-left">
                  <span className="text-lg font-bold text-rad-blue-900">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAIRE + INFO CONTACT */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Colonne gauche – texte & infos */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-rad-blue-900 md:text-4xl">
                  Entrer en relation avec RAD
                </h2>
                <div className="mt-4 flex h-1.5 w-32 overflow-hidden rounded-full">
                  <span className="flex-1 bg-rad-green" />
                  <span className="flex-1 bg-rad-yellow" />
                  <span className="flex-1 bg-rad-red" />
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                Expliquez-nous votre besoin : fourniture d'équipements, partenariat industriel, projet d'infrastructure, services logistiques ou accompagnement stratégique. Nous vous recontacterons rapidement avec une première analyse et des pistes de collaboration.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    text: "Réponse ciblée en fonction de votre secteur (mines, construction, commerce, etc.)"
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    text: "Possibilité de réunions en ligne avec nos équipes techniques et opérationnelles"
                  },
                  {
                    icon: <CheckCircle className="h-5 w-5" />,
                    text: "Accompagnement du diagnostic jusqu'à la mise en œuvre sur le terrain"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-rad-orange/10 text-rad-orange">
                      {item.icon}
                    </div>
                    <p className="pt-1 text-sm leading-relaxed text-slate-700">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Infos de contact direct */}
              <div className="mt-8 space-y-4 rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-6 text-white shadow-xl shadow-rad-blue-900/30">
                <h3 className="text-lg font-bold">Nous contacter directement</h3>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="mt-1 text-sm text-slate-200">
                      Conakry, République de Guinée
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone / WhatsApp</p>
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

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Horaires (heure locale)</p>
                    <p className="mt-1 text-sm text-slate-200">
                      Lundi – Vendredi : 8h00 – 18h00<br />
                      Samedi : sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Colonne droite – formulaire */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-300/60"
            >
              <h3 className="text-2xl font-bold text-rad-blue-900">
                Formulaire de contact rapide
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Remplissez ce formulaire avec un maximum d'informations pour nous permettre de bien comprendre votre demande.
              </p>

              <form className="mt-6 space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="nom" className="mb-2 block text-sm font-semibold text-slate-700">
                      Nom complet *
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                      placeholder="Ex : Mamadou Diallo"
                    />
                  </div>
                  <div>
                    <label htmlFor="societe" className="mb-2 block text-sm font-semibold text-slate-700">
                      Société / Organisation
                    </label>
                    <input
                      id="societe"
                      name="societe"
                      type="text"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                      placeholder="Nom de votre structure"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                      placeholder="vous@exemple.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="mb-2 block text-sm font-semibold text-slate-700">
                      Téléphone / WhatsApp
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                      placeholder="+224 ..."
                    />
                  </div>
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
                    <option value="technique">Services Techniques</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">
                    Description du projet / besoin *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/20"
                    placeholder="Expliquez brièvement votre contexte, vos objectifs, vos contraintes de délais, etc."
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

                <p className="text-center text-xs text-slate-500">
                  Vos informations sont utilisées uniquement pour vous recontacter dans le cadre de votre demande.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ZONES D'INTERVENTION */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="rounded-3xl bg-slate-50 p-8 shadow-sm shadow-slate-200">
              <h3 className="text-xl font-bold text-rad-blue-900">
                Zones d'intervention prioritaires
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                RAD intervient en priorité en Guinée et en Afrique de l'Ouest, tout en développant des partenariats avec des fournisseurs et industriels basés en Europe, en Amérique du Nord et au Moyen-Orient.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                {[
                  "Sites miniers & zones industrielles",
                  "Projets d'infrastructures routières",
                  "Plateformes logistiques & entrepôts",
                  "Projets immobiliers et équipements publics"
                ].map((zone, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rad-orange" />
                    <span>{zone}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-rad-blue-900 to-rad-blue-800 p-8 text-white shadow-xl shadow-rad-blue-900/30">
              <h3 className="text-xl font-bold">Vous préférez un contact direct ?</h3>
              <p className="mt-3 text-sm text-slate-100">
                Vous pouvez également nous joindre via WhatsApp ou planifier un appel avec nos équipes opérationnelles.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-200">WhatsApp</p>
                    <p className="font-semibold">+224 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-200">Téléphone</p>
                    <p className="font-semibold">+224 XXX XXX XXX</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-xs text-slate-200/90">
                Pour les appels internationaux, pensez à préciser votre fuseau horaire et vos disponibilités dans le message.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA AUTRES PAGES */}
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
              Découvrez notre expertise
            </h3>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Explorez nos services et nos projets pour mieux comprendre comment RAD peut vous accompagner dans vos ambitions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/services"
                className="rounded-full border-2 border-rad-blue-900 px-8 py-4 text-base font-semibold text-rad-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-900/5"
              >
                Nos services
              </Link>
              <Link
                href="/projects"
                className="rounded-full border-2 border-rad-blue-900 px-8 py-4 text-base font-semibold text-rad-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-900/5"
              >
                Nos projets
              </Link>
              <Link
                href="/about"
                className="rounded-full border-2 border-rad-blue-900 px-8 py-4 text-base font-semibold text-rad-blue-900 transition-all duration-300 hover:-translate-y-1 hover:bg-rad-blue-900/5"
              >
                À propos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
