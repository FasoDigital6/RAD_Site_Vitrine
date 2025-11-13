"use client"

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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO CONTACT */}
      <section className="bg-rad-blue-900/95 pb-16 pt-24 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 md:px-8 lg:px-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              Parlons de votre projet
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-100/90 md:text-base">
              Que ce soit pour un besoin en équipements, en services
              industriels, en construction ou en logistique, l’équipe du{" "}
              <strong>Réseau Africain de Développement</strong> est disponible
              pour vous accompagner.
            </p>
          </motion.div>

          {/* Cartes de contact rapides */}
          <div className="grid gap-4 md:grid-cols-3">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-3xl bg-white/5 p-5 backdrop-blur-sm"
            >
              <h3 className="text-sm font-semibold">Siège – Guinée</h3>
              <p className="mt-2 text-xs text-slate-100/90">
                Conakry, République de Guinée
                <br />
                Zone industrielle / secteur minier
              </p>
              <p className="mt-3 text-xs">
                Tél : <span className="font-semibold">+224 620 00 00 00</span>
                <br />
                WhatsApp : <span className="font-semibold">+224 620 00 00 00</span>
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="rounded-3xl bg-white/5 p-5 backdrop-blur-sm"
            >
              <h3 className="text-sm font-semibold">Courriel</h3>
              <p className="mt-2 text-xs text-slate-100/90">
                Pour toute demande d’information, devis ou partenariat.
              </p>
              <a
                href="mailto:contact@rad-guinee.com"
                className="mt-3 inline-block text-xs font-semibold text-rad-yellow underline decoration-rad-yellow/60 underline-offset-4"
              >
                contact@rad-guinee.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="rounded-3xl bg-white/5 p-5 backdrop-blur-sm"
            >
              <h3 className="text-sm font-semibold">Opérations & support</h3>
              <p className="mt-2 text-xs text-slate-100/90">
                Suivi de projets, support après-vente, coordination logistique.
              </p>
              <p className="mt-3 text-xs">
                Tél : <span className="font-semibold">+224 655 00 00 00</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOC PRINCIPAL : FORMULAIRE + INFOS */}
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr,1.1fr] md:px-8 lg:px-0">
          {/* Colonne gauche – texte & infos */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-semibold text-rad-blue-900 md:text-3xl">
                Entrer en relation avec RAD
              </h2>
              <div className="mt-2 flex h-1 w-20 overflow-hidden rounded-full">
                <span className="flex-1 bg-rad-green" />
                <span className="flex-1 bg-rad-yellow" />
                <span className="flex-1 bg-rad-red" />
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-700 md:text-base">
              Expliquez-nous votre besoin : fourniture d’équipements,
              partenariat industriel, projet d’infrastructure, services
              logistiques ou accompagnement stratégique. Nous vous
              recontacterons rapidement avec une première analyse et des pistes
              de collaboration.
            </p>

            <ul className="space-y-3 text-sm text-slate-700 md:text-base">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rad-green" />
                <span>
                  <strong>Réponse ciblée</strong> en fonction de votre secteur
                  (mines, construction, commerce, etc.).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rad-yellow" />
                <span>
                  Possibilité de <strong>réunions en ligne</strong> avec nos
                  équipes techniques et opérationnelles.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-rad-red" />
                <span>
                  Accompagnement du <strong>diagnostic</strong> jusqu’à la{" "}
                  <strong>mise en œuvre</strong> sur le terrain.
                </span>
              </li>
            </ul>

            <div className="rounded-2xl bg-white p-4 text-xs text-slate-600 shadow-sm shadow-slate-200">
              <p className="font-semibold text-rad-blue-900">
                Horaires (heure locale – Guinée)
              </p>
              <p className="mt-1">
                Lundi – Vendredi : 8h00 – 18h00
                <br />
                Samedi : sur rendez-vous
              </p>
            </div>
          </motion.div>

          {/* Colonne droite – formulaire */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200 md:p-8"
          >
            <h3 className="text-lg font-semibold text-rad-blue-900 md:text-xl">
              Envoyer un message
            </h3>
            <p className="mt-2 text-xs text-slate-600 md:text-sm">
              Remplissez ce formulaire avec un maximum d’informations pour nous
              permettre de bien comprendre votre demande.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="nom"
                    className="text-xs font-medium text-slate-700"
                  >
                    Nom complet
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 transition focus:border-rad-blue-900/60 focus:bg-white focus:ring-2 focus:ring-rad-blue-900/20"
                    placeholder="Ex : Mamadou Diallo"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="societe"
                    className="text-xs font-medium text-slate-700"
                  >
                    Société / Organisation
                  </label>
                  <input
                    id="societe"
                    name="societe"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 transition focus:border-rad-blue-900/60 focus:bg-white focus:ring-2 focus:ring-rad-blue-900/20"
                    placeholder="Nom de votre structure"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-slate-700"
                  >
                    Courriel
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 transition focus:border-rad-blue-900/60 focus:bg-white focus:ring-2 focus:ring-rad-blue-900/20"
                    placeholder="vous@exemple.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="telephone"
                    className="text-xs font-medium text-slate-700"
                  >
                    Téléphone / WhatsApp
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 transition focus:border-rad-blue-900/60 focus:bg-white focus:ring-2 focus:ring-rad-blue-900/20"
                    placeholder="+224 ..."
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="sujet"
                  className="text-xs font-medium text-slate-700"
                >
                  Sujet de la demande
                </label>
                <input
                  id="sujet"
                  name="sujet"
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 transition focus:border-rad-blue-900/60 focus:bg-white focus:ring-2 focus:ring-rad-blue-900/20"
                  placeholder="Ex : Fourniture de pièces pour engins miniers"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-700"
                >
                  Description du projet / besoin
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 transition focus:border-rad-blue-900/60 focus:bg-white focus:ring-2 focus:ring-rad-blue-900/20"
                  placeholder="Expliquez brièvement votre contexte, vos objectifs, vos contraintes de délais, etc."
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded-full bg-rad-blue-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-rad-blue-900/40 transition hover:-translate-y-0.5 hover:bg-rad-blue-800"
                >
                  Envoyer le message
                </button>
                <p className="text-[11px] text-slate-500">
                  Vos informations sont utilisées uniquement pour vous
                  recontacter dans le cadre de votre demande.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* BLOC LOCALISATION / INFO SUPPLÉMENTAIRE */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 md:grid-cols-[1.2fr,1fr]"
          >
            <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
              <h3 className="text-sm font-semibold text-rad-blue-900 md:text-base">
                Zones d’intervention prioritaires
              </h3>
              <p className="mt-2 text-xs text-slate-600 md:text-sm">
                RAD intervient en priorité en Guinée et en Afrique de l’Ouest,
                tout en développant des partenariats avec des fournisseurs et
                industriels basés en Europe, en Amérique du Nord et au Moyen-
                Orient.
              </p>
              <ul className="mt-4 grid gap-2 text-xs text-slate-700 md:text-sm md:grid-cols-2">
                <li>• Sites miniers & zones industrielles</li>
                <li>• Projets d’infrastructures routières</li>
                <li>• Plateformes logistiques & entrepôts</li>
                <li>• Projets immobiliers et équipements publics</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-rad-blue-900/95 p-6 text-xs text-slate-100 shadow-sm shadow-rad-blue-900/40 md:text-sm">
              <p className="font-semibold">Vous préférez un contact direct ?</p>
              <p className="mt-2">
                Vous pouvez également nous joindre via WhatsApp ou planifier un
                appel avec nos équipes opérationnelles.
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  WhatsApp :{" "}
                  <span className="font-semibold">+224 620 00 00 00</span>
                </p>
                <p>
                  Téléphone :{" "}
                  <span className="font-semibold">+224 655 00 00 00</span>
                </p>
              </div>
              <p className="mt-4 text-[11px] text-slate-200/90">
                Pour les appels internationaux, pensez à préciser votre fuseau
                horaire et vos disponibilités dans le message.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
