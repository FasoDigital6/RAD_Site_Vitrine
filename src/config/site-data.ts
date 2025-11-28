/**
 * Configuration statique du site - Données immuables
 * Toutes les images et données sont définies ici pour un site 100% statique
 */

// ==================== HERO SLIDES ====================
export const heroSlideImages = [
  "/images/hero/slide-1.jpg", // Mining/Industrial
  "/images/hero/slide-2.jpg", // Construction
  "/images/hero/slide-3.jpg", // Logistics/Transport
] as const

// ==================== SERVICES/DOMAINES ====================
export const domaineKeys = [
  "commerce",
  "mining",
  "transport",
  "construction",
  "services",
  "consulting",
] as const

export type DomaineKey = (typeof domaineKeys)[number]

export const domaineFeatured: DomaineKey[] = ["commerce", "mining"]

export const domaineIconsMap: Record<DomaineKey, string> = {
  commerce: "ShoppingCart",
  mining: "Pickaxe",
  transport: "Truck",
  construction: "Building2",
  services: "UserCog",
  consulting: "Lightbulb",
}

// ==================== RÉALISATIONS/PROJETS ====================
export const realisationImages = [
  "/images/projects/project-1.jpg", // Project 1 - Simandou
  "/images/projects/project-2.jpg", // Project 2 - Mining Equipment
  "/images/projects/project-3.jpg", // Project 3 - Route/Logistics
  "/images/projects/project-4.jpg", // Project 4 - Construction
] as const

// ==================== ÉQUIPE ====================
export const equipeKeys = [
  "ceo",
  "canada",
] as const

export type EquipeKey = (typeof equipeKeys)[number]

export const equipeImages = [
  "/images/team/operations.jpg", // CEO portrait (placeholder)
  "/images/team/R-CA.jpg", // Canada representative
] as const

// ==================== PARTENAIRES ====================
export interface Partner {
  name: string
  logo: string
  alt: string
}

export const partenaires: Partner[] = [
  {
    name: "Caterpillar",
    logo: "/images/partners/cat-logo.png",
    alt: "Caterpillar - Équipements industriels",
  },
  {
    name: "Rio Tinto",
    logo: "/images/partners/rio-tinto-logo.png",
    alt: "Rio Tinto - Partenaire minier",
  },
  {
    name: "Toyota",
    logo: "/images/partners/toyota.png",
    alt: "Toyota - Véhicules et équipements",
  },
  {
    name: "SAG",
    logo: "/images/partners/sag-logo.jpg",
    alt: "SAG - Partenaire minier",
  },
  {
    name: "Mota-Engil",
    logo: "/images/partners/moto-engil.png",
    alt: "Mota-Engil - Construction",
  },
  {
    name: "Kourousa Gold",
    logo: "/images/partners/kourrousaGold.jpeg",
    alt: "Kourousa Gold - Mines d'or",
  },
  {
    name: "Traction",
    logo: "/images/partners/traction.jpg",
    alt: "Traction - Partenaire industriel",
  },
] as const
