"use client"

import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link, useRouter, usePathname } from "@/i18n/routing"

export function Header() {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8 lg:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/rad-logo.jpeg"
            alt="Logo RAD"
            width={140}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Menu principal */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/" className="hover:text-rad-blue-900">
            {t('home')}
          </Link>
          <Link href="/about" className="hover:text-rad-blue-900">
            {t('about')}
          </Link>
          <Link href="/services" className="hover:text-rad-blue-900">
            {t('services')}
          </Link>
          <Link href="/projects" className="hover:text-rad-blue-900">
            {t('projects')}
          </Link>
          <Link href="/contact" className="hover:text-rad-blue-900">
            {t('contact')}
          </Link>
        </nav>

        {/* Sélecteur de langue FR / EN */}
        <div className="hidden items-center gap-2 md:flex">
          {(["fr", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => handleLanguageChange(code)}
              className={
                "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition " +
                (locale === code
                  ? "border-rad-blue-900 bg-rad-blue-900 text-white shadow-sm shadow-rad-blue-900/30"
                  : "border-slate-300 text-slate-600 hover:border-rad-blue-900 hover:text-rad-blue-900")
              }
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
