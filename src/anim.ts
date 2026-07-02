import type { Variants } from "framer-motion";

// Contenedor + item para revelar listas de forma escalonada al entrar en vista.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export const viewportOnce = { once: true, margin: "-8% 0px -8% 0px" } as const;
