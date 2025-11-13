import Link from "next/link"
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-rad-blue-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10 bg-rad-blue-900/50 py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="text-2xl font-bold">Restez informé</h3>
              <p className="mt-2 text-sm text-slate-300">
                Recevez nos actualités et opportunités en avant-première
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-slate-400 backdrop-blur-sm transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/30"
              />
              <button className="rounded-full bg-rad-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-rad-orange-hover">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer principal */}
      <div className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-0">
          {/* Colonne 1 : Logo + Tagline + Réseaux sociaux */}
          <div className="lg:col-span-1">
            <img
              src="/rad-logo.jpeg"
              alt="RAD Logo"
              className="mb-4 h-auto w-40 rounded-lg"
            />
            <p className="mb-6 text-sm leading-relaxed text-slate-300">
              Partenaire de confiance pour le développement industriel et économique en Afrique depuis 2008.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-rad-orange hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-rad-orange hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-rad-orange hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation principale */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projets", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-rad-orange hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Domaines d'activité */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Nos Domaines</h4>
            <ul className="space-y-3">
              {[
                "Mines & Industrie",
                "Construction & Génie Civil",
                "Commerce & Supply Chain",
                "Transport & Logistique",
                "Formation & Conseil",
                "Services Techniques",
              ].map((domain) => (
                <li key={domain}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-300 transition hover:text-rad-orange hover:underline"
                  >
                    {domain}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h4 className="mb-6 text-lg font-bold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                <span className="text-sm text-slate-300">
                  Conakry, République de Guinée
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                <span className="text-sm text-slate-300">
                  +224 XXX XXX XXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                <a
                  href="mailto:contact@rad-guinee.com"
                  className="text-sm text-slate-300 hover:text-rad-yellow hover:underline"
                >
                  contact@rad-guinee.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-white/10 bg-rad-blue-900/50 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-slate-400 md:flex-row md:px-8 lg:px-0">
          <p>
            © {new Date().getFullYear()} Réseau Africain de Développement. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-rad-orange hover:underline">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-rad-orange hover:underline">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-rad-orange hover:underline">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
