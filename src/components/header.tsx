"use client"

import { useState } from "react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { Link, useRouter, usePathname } from "@/i18n/routing"
import { Menu, X } from "lucide-react"

export function Header() {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-0">
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

        {/* Menu principal - Desktop */}
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

        {/* Sélecteur de langue FR / EN - Desktop */}
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

        {/* Bouton hamburger - Mobile */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-rad-blue-900"
            >
              {t('home')}
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-rad-blue-900"
            >
              {t('about')}
            </Link>
            <Link
              href="/services"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-rad-blue-900"
            >
              {t('services')}
            </Link>
            <Link
              href="/projects"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-rad-blue-900"
            >
              {t('projects')}
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-rad-blue-900"
            >
              {t('contact')}
            </Link>

            {/* Sélecteur de langue - Mobile */}
            <div className="mt-4 flex items-center gap-2 border-t border-slate-200 px-4 pt-4">
              {(["fr", "en"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    handleLanguageChange(code)
                    closeMobileMenu()
                  }}
                  className={
                    "flex-1 rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition " +
                    (locale === code
                      ? "border-rad-blue-900 bg-rad-blue-900 text-white shadow-sm shadow-rad-blue-900/30"
                      : "border-slate-300 text-slate-600 hover:border-rad-blue-900 hover:text-rad-blue-900")
                  }
                >
                  {code}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
