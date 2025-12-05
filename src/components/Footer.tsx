"use client"

import { Link } from "@/i18n/routing"
import { Facebook, MapPin, Phone, Mail } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('navigation')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-rad-blue-900 text-white">
      {/* Footer principal */}
      <div className="py-12 sm:py-14 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:gap-10 sm:px-6 md:grid-cols-2 md:gap-12 md:px-8 lg:grid-cols-4 lg:px-0">
          {/* Colonne 1 : Logo + Tagline + Réseaux sociaux */}
          <div className="lg:col-span-1">
            <img
              src="/rad-logo.jpeg"
              alt="RAD Logo"
              className="mb-3 h-auto w-36 rounded-lg sm:mb-4 sm:w-40"
            />
            <p className="mb-4 text-sm leading-relaxed text-slate-300 sm:mb-6">
              {t('tagline')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571396218636"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-rad-orange hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation principale */}
          <div>
            <h4 className="mb-6 text-lg font-bold">{t('navigation.title')}</h4>
            <ul className="space-y-3">
              {[
                { label: tNav('home'), href: "/" },
                { label: tNav('about'), href: "/about" },
                { label: tNav('services'), href: "/services" },
                { label: tNav('projects'), href: "/contracts" },
                { label: tNav('contact'), href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as any}
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
            <h4 className="mb-6 text-lg font-bold">{t('domains.title')}</h4>
            <ul className="space-y-3">
              {[
                t('domains.list.commerce'),
                t('domains.list.mining'),
                t('domains.list.transport'),
                t('domains.list.construction'),
                t('domains.list.services'),
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
            <h4 className="mb-6 text-lg font-bold">{t('contact.title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                <span className="text-sm text-slate-300">
                  {t('contact.address')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                <span className="text-sm text-slate-300">
                  {t('contact.phone')}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-rad-orange" />
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="text-sm text-slate-300 hover:text-rad-yellow hover:underline"
                >
                  {t('contact.email')}
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
            {t('legal.copyright', { year: currentYear })}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/legal" className="hover:text-rad-orange hover:underline">
              {t('legal.terms')}
            </Link>
            <Link href="/privacy" className="hover:text-rad-orange hover:underline">
              {t('legal.privacy')}
            </Link>
            <Link href="/terms" className="hover:text-rad-orange hover:underline">
              {t('legal.cgv')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
