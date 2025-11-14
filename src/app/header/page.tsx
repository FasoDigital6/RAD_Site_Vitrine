"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [lang, setLang] = useState<"fr" | "en">("fr")

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
            Accueil
          </Link>
          <Link href="/about" className="hover:text-rad-blue-900">
            À propos
          </Link>
          <Link href="/services" className="hover:text-rad-blue-900">
            Services
          </Link>
          <Link href="/projects" className="hover:text-rad-blue-900">
            Projets
          </Link>
          <Link href="/contact" className="hover:text-rad-blue-900">
            Contact
          </Link>
        </nav>

        {/* Sélecteur de langue FR / EN */}
        <div className="hidden items-center gap-2 md:flex">
          {(["fr", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              className={
                "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition " +
                (lang === code
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
