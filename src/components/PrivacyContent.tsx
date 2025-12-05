"use client"

import { Footer } from "@/components/Footer"

export function PrivacyContent() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="bg-rad-blue-900 pb-16 pt-32 text-white">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-0">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Politique de confidentialité</h1>
          <p className="text-lg text-slate-200">
            Protection et traitement de vos données personnelles
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-0">
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-12">
            <div className="prose prose-slate max-w-none">
              <h2>1. Collecte des données</h2>
              <p>
                RAD collecte des données personnelles uniquement dans le cadre de :
              </p>
              <ul>
                <li>L'utilisation du formulaire de contact</li>
                <li>Les demandes de devis ou d'information</li>
                <li>Les candidatures spontanées</li>
              </ul>
              <p>
                Les données collectées peuvent inclure : nom, prénom, adresse email, numéro de téléphone, entreprise, et le contenu de votre message.
              </p>

              <h2>2. Finalité du traitement</h2>
              <p>
                Vos données personnelles sont collectées pour :
              </p>
              <ul>
                <li>Répondre à vos demandes d'information</li>
                <li>Traiter vos demandes de devis</li>
                <li>Gérer notre relation commerciale</li>
                <li>Vous tenir informé de nos services (avec votre consentement)</li>
              </ul>

              <h2>3. Base légale du traitement</h2>
              <p>
                Le traitement de vos données personnelles est fondé sur :
              </p>
              <ul>
                <li>Votre consentement explicite</li>
                <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
                <li>Le respect d'obligations légales</li>
                <li>Nos intérêts légitimes</li>
              </ul>

              <h2>4. Conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul>
                <li>Demandes de contact : 3 ans</li>
                <li>Relations commerciales : durée de la relation + 5 ans</li>
                <li>Candidatures : 2 ans</li>
              </ul>

              <h2>5. Destinataires des données</h2>
              <p>
                Vos données personnelles sont destinées aux services internes de RAD. Elles ne sont jamais vendues à des tiers. Nous pouvons être amenés à partager vos données avec :
              </p>
              <ul>
                <li>Nos partenaires techniques (hébergement, emailing)</li>
                <li>Les autorités légales si requis par la loi</li>
              </ul>

              <h2>6. Sécurité des données</h2>
              <p>
                RAD met en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
              </p>

              <h2>7. Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul>
                <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement</strong> : supprimer vos données</li>
                <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
                <li><strong>Droit d'opposition</strong> : vous opposer au traitement</li>
                <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@radguinee.com">contact@radguinee.com</a>
              </p>

              <h2>8. Cookies</h2>
              <p>
                Notre site peut utiliser des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lorsqu'un cookie est déposé.
              </p>

              <h2>9. Modifications</h2>
              <p>
                RAD se réserve le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
              </p>

              <h2>10. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
                <br />
                Email : <a href="mailto:contact@radguinee.com">contact@radguinee.com</a>
                <br />
                Adresse : Siguiri, Koura 1, Guinée
              </p>

              <p className="mt-8 text-sm text-slate-500">
                Dernière mise à jour : Décembre 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
