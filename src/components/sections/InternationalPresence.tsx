"use client"

import { MapPin, Building2, Users, Globe } from "lucide-react"

interface Country {
  name: string
  flag: string
  city: string
  offices: string
  employees?: string
  description: string
}

interface InternationalPresenceProps {
  title: string
  subtitle: string
  countries: Country[]
  badgeText?: string
  officesLabel?: string
  teamLabel?: string
  mapIndicatorText?: string
}

export function InternationalPresence({
  title,
  subtitle,
  countries,
  badgeText = "International Presence",
  officesLabel = "Offices",
  teamLabel = "Team",
  mapIndicatorText = "2 countries • 2 continents • 1 vision",
}: InternationalPresenceProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rad-blue-900 via-rad-blue-800 to-rad-blue-900 py-16 sm:py-20 md:py-24">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-rad-orange/10 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-rad-orange/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8 lg:px-0">
        {/* Header */}
        <div className="mb-12 text-center text-white md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
            <Globe className="h-5 w-5 text-rad-orange" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              {badgeText}
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-200">
            {subtitle}
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-slate-300/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-rad-orange/15 md:p-10 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Flag emoji large */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-4xl shadow-lg">
                  {country.flag}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-rad-blue-900">
                    {country.name}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">{country.city}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 leading-relaxed text-slate-700">
                {country.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-rad-blue-900/5 p-4">
                  <div className="mb-2 flex items-center gap-2 text-rad-blue-900">
                    <Building2 className="h-5 w-5" />
                    <span className="text-sm font-semibold">{officesLabel}</span>
                  </div>
                  <p className="text-2xl font-bold text-rad-blue-900">
                    {country.offices}
                  </p>
                </div>

                {country.employees && (
                  <div className="rounded-xl bg-rad-orange/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-rad-orange">
                      <Users className="h-5 w-5" />
                      <span className="text-sm font-semibold">{teamLabel}</span>
                    </div>
                    <p className="text-2xl font-bold text-rad-orange">
                      {country.employees}
                    </p>
                  </div>
                )}
              </div>

              {/* Decorative corner */}
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-rad-orange/10 to-rad-yellow/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
            </div>
          ))}
        </div>

        {/* Map indicator (optional) */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-white backdrop-blur-md">
            <MapPin className="h-5 w-5 text-rad-orange" />
            <span className="text-sm font-medium">
              {mapIndicatorText}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
