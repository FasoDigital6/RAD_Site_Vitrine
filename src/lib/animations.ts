import { Variants } from "framer-motion"

// ✅ Optimisé : Contenu visible immédiatement (opacity: 1), animation subtile
export const fadeUp: Variants = {
  hidden: { opacity: 1, y: 0 },  // ✅ Visible dès le départ
  visible: {
    opacity: 1,
    y: -8,  // ✅ Léger lift au scroll
    transition: { duration: 0.3, ease: "easeOut" },  // ✅ 0.3s au lieu de 0.7s
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 1, x: 0 },  // ✅ Visible dès le départ
  visible: {
    opacity: 1,
    x: -8,  // ✅ Léger mouvement
    transition: { duration: 0.3, ease: "easeOut" },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 1, x: 0 },  // ✅ Visible dès le départ
  visible: {
    opacity: 1,
    x: 8,  // ✅ Léger mouvement
    transition: { duration: 0.3, ease: "easeOut" },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },  // ✅ Visible dès le départ
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,  // ✅ 0.05s au lieu de 0.1s
    },
  },
}
