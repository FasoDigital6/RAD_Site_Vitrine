"use client"

import { Link } from "@/i18n/routing"
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('navigation')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-rad-blue-900 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10 bg-rad-blue-900/50 py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="text-2xl font-bold">{t('newsletter.title')}</h3>
              <p className="mt-2 text-sm text-slate-300">
                {t('newsletter.subtitle')}
              </p>
            </div>
            <div className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder-slate-400 backdrop-blur-sm transition focus:border-rad-orange focus:outline-none focus:ring-2 focus:ring-rad-orange/30"
              />
              <button className="rounded-full bg-rad-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-rad-orange-hover">
                {t('newsletter.button')}
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
              {t('tagline')}
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
            <h4 className="mb-6 text-lg font-bold">{t('navigation.title')}</h4>
            <ul className="space-y-3">
              {[
                { label: tNav('home'), href: "/" },
                { label: tNav('about'), href: "/about" },
                { label: tNav('services'), href: "/services" },
                { label: tNav('projects'), href: "/projects" },
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
            <Link href="#" className="hover:text-rad-orange hover:underline">
              {t('legal.terms')}
            </Link>
            <Link href="#" className="hover:text-rad-orange hover:underline">
              {t('legal.privacy')}
            </Link>
            <Link href="#" className="hover:text-rad-orange hover:underline">
              {t('legal.cgv')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
