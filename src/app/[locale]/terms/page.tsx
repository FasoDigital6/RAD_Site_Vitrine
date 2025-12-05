import { Footer } from "@/components/Footer"
import { getTranslations } from "next-intl/server"

export default async function TermsPage() {
  const t = await getTranslations()

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="bg-rad-blue-900 pb-16 pt-32 text-white">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-0">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Conditions Générales de Vente</h1>
          <p className="text-lg text-slate-200">
            Conditions applicables aux prestations de RAD
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-0">
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-12">
            <div className="prose prose-slate max-w-none">
              <h2>Article 1 - Champ d'application</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations de services et ventes de biens proposées par Réseau Africain de Développement (RAD) à ses clients professionnels et particuliers.
              </p>
              <p>
                Toute commande implique l'acceptation sans réserve des présentes CGV.
              </p>

              <h2>Article 2 - Prestations proposées</h2>
              <p>
                RAD propose les prestations suivantes :
              </p>
              <ul>
                <li>Commerce et approvisionnement en équipements industriels</li>
                <li>Services miniers et location d'engins</li>
                <li>Transport et logistique</li>
                <li>Construction et infrastructures</li>
                <li>Services informatiques et formation</li>
                <li>Conseil et audit</li>
              </ul>

              <h2>Article 3 - Devis et commandes</h2>
              <p>
                Toute prestation fait l'objet d'un devis détaillé précisant :
              </p>
              <ul>
                <li>La nature et l'étendue des prestations</li>
                <li>Le prix total en devise locale ou internationale</li>
                <li>Les délais d'exécution</li>
                <li>Les conditions de paiement</li>
              </ul>
              <p>
                Le devis est valable 30 jours à compter de sa date d'émission. La commande n'est définitive qu'après signature du devis et versement de l'acompte éventuel.
              </p>

              <h2>Article 4 - Prix</h2>
              <p>
                Les prix sont indiqués en dollars américains (USD) ou en francs guinéens (GNF) selon le contrat. Ils sont fermes et non révisables pendant la durée de validité du devis, sauf accord contraire stipulé au contrat.
              </p>
              <p>
                Les prix s'entendent hors taxes. La TVA et autres taxes applicables seront ajoutées conformément à la législation en vigueur.
              </p>

              <h2>Article 5 - Conditions de paiement</h2>
              <p>
                Sauf conditions particulières stipulées au contrat, les modalités de paiement sont les suivantes :
              </p>
              <ul>
                <li>Acompte de 30% à la commande</li>
                <li>Paiement intermédiaire selon avancement (si applicable)</li>
                <li>Solde à la livraison ou à la fin de la prestation</li>
              </ul>
              <p>
                Les paiements peuvent être effectués par :
              </p>
              <ul>
                <li>Virement bancaire</li>
                <li>Chèque (sous réserve d'encaissement)</li>
                <li>Espèces (dans la limite légale)</li>
              </ul>

              <h2>Article 6 - Retard de paiement</h2>
              <p>
                En cas de retard de paiement, des pénalités égales à 3 fois le taux d'intérêt légal seront automatiquement appliquées, sans mise en demeure préalable.
              </p>
              <p>
                Une indemnité forfaitaire de 40 euros pour frais de recouvrement sera également due.
              </p>

              <h2>Article 7 - Délais d'exécution</h2>
              <p>
                Les délais d'exécution sont indiqués à titre indicatif. RAD s'engage à respecter au mieux les délais convenus, mais ne saurait être tenu responsable des retards dus à :
              </p>
              <ul>
                <li>Des cas de force majeure</li>
                <li>Des modifications demandées par le client</li>
                <li>Des retards d'approvisionnement</li>
                <li>Des difficultés techniques imprévues</li>
              </ul>

              <h2>Article 8 - Livraison et réception</h2>
              <p>
                La livraison est effectuée à l'adresse indiquée par le client. Le client est tenu de vérifier l'état de la marchandise ou la conformité de la prestation dès réception.
              </p>
              <p>
                Toute réclamation doit être formulée par écrit dans les 48 heures suivant la livraison ou la fin de la prestation.
              </p>

              <h2>Article 9 - Garanties</h2>
              <p>
                RAD garantit la conformité des prestations et des biens livrés conformément aux spécifications du contrat.
              </p>
              <p>
                Les équipements et matériels fournis bénéficient de la garantie fabricant selon les conditions du fournisseur.
              </p>

              <h2>Article 10 - Responsabilité</h2>
              <p>
                RAD ne saurait être tenu responsable des dommages indirects tels que perte d'exploitation, perte de clientèle, ou tout préjudice commercial.
              </p>
              <p>
                La responsabilité de RAD est limitée au montant de la prestation concernée.
              </p>

              <h2>Article 11 - Résiliation</h2>
              <p>
                En cas de manquement grave d'une partie à ses obligations, l'autre partie pourra résilier le contrat de plein droit 30 jours après une mise en demeure restée sans effet.
              </p>

              <h2>Article 12 - Propriété intellectuelle</h2>
              <p>
                Tous les documents, études, plans et autres créations intellectuelles réalisés par RAD restent sa propriété exclusive, sauf cession expresse stipulée au contrat.
              </p>

              <h2>Article 13 - Confidentialité</h2>
              <p>
                Les parties s'engagent à maintenir confidentielles toutes les informations échangées dans le cadre de leur relation commerciale.
              </p>

              <h2>Article 14 - Données personnelles</h2>
              <p>
                RAD s'engage à traiter les données personnelles conformément à sa politique de confidentialité et au RGPD.
              </p>

              <h2>Article 15 - Force majeure</h2>
              <p>
                RAD ne pourra être tenu responsable de l'inexécution de ses obligations en cas de force majeure telle que définie par la jurisprudence.
              </p>

              <h2>Article 16 - Droit applicable et juridiction</h2>
              <p>
                Les présentes CGV sont soumises au droit guinéen. En cas de litige, et après tentative de résolution amiable, les tribunaux de Guinée seront seuls compétents.
              </p>

              <h2>Article 17 - Modifications</h2>
              <p>
                RAD se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande.
              </p>

              <h2>Contact</h2>
              <p>
                Pour toute question concernant ces CGV :
                <br />
                Email : <a href="mailto:contact@radguinee.com">contact@radguinee.com</a>
                <br />
                Téléphone : +224 620 44 33 33
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
