import { Footer } from "@/components/Footer"
import { getTranslations } from "next-intl/server"

export default async function LegalPage() {
  const t = await getTranslations()

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="bg-rad-blue-900 pb-16 pt-32 text-white">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-0">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Mentions légales</h1>
          <p className="text-lg text-slate-200">
            Informations légales concernant le site web de RAD
          </p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-0">
          <div className="rounded-3xl bg-white p-8 shadow-lg md:p-12">
            <div className="prose prose-slate max-w-none">
              <h2>Éditeur du site</h2>
              <p>
                <strong>Réseau Africain de Développement (RAD)</strong>
                <br />
                Siège social : Siguiri, Koura 1, Guinée
                <br />
                Bureau : Moncton, Canada
              </p>

              <h2>Contact</h2>
              <p>
                Email : <a href="mailto:contact@radguinee.com">contact@radguinee.com</a>
                <br />
                Téléphone Guinée : +224 620 44 33 33
                <br />
                Téléphone Canada : +1 438 402 2257
              </p>

              <h2>Directeur de publication</h2>
              <p>Balla Traoré, PDG de RAD</p>

              <h2>Hébergement</h2>
              <p>
                Ce site est hébergé par Vercel Inc.
                <br />
                440 N Barranca Ave #4133, Covina, CA 91723
                <br />
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
              </p>

              <h2>Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de RAD ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de RAD.
              </p>

              <h2>Protection des données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter à l'adresse : contact@radguinee.com
              </p>

              <h2>Cookies</h2>
              <p>
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.
              </p>

              <h2>Droit applicable</h2>
              <p>
                Le présent site et les présentes mentions légales sont régis par le droit guinéen. Tout litige relatif à l'utilisation du site sera soumis aux tribunaux compétents de Guinée.
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
