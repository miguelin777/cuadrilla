import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const lineIn = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.12 },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden />
      <div className="hero__glow" aria-hidden />

      <div className="wrap hero__inner">
        <motion.div
          className="hero__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span>
            <span className="dot" />
            Disponibles · Q3 2026
          </span>
          <span>
            Estudio de software · <b>El Bajío, MX</b>
          </span>
          <span>Software a la medida · Entregado, no prometido</span>
        </motion.div>

        <h1 className="display hero__title">
          <span className="line">
            <motion.span variants={lineIn} initial="hidden" animate="show" custom={0}>
              Tú diriges.
            </motion.span>
          </span>
          <span className="line">
            <motion.span variants={lineIn} initial="hidden" animate="show" custom={1}>
              Nosotros{" "}
              <em className="serif-it" style={{ color: "var(--accent)" }}>
                construimos
              </em>
              .
            </motion.span>
          </span>
        </h1>

        <div className="hero__bottom">
          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Le hacemos sistemas y páginas a negocios del Bajío: tu facturación, tus
            ventas, tu WhatsApp — lo que de verdad usas todos los días. Tú dices qué te
            estorba y nosotros lo armamos, sin llenarte de palabras raras.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <Magnetic>
              <a className="btn btn--solid" href="#demo" data-cursor="Ver">
                Ver la demo en vivo <span className="arw">↗</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a className="btn" href="#contacto" data-cursor="hover">
                Cuéntanos tu problema
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      <div className="scrollcue" aria-hidden>
        Scroll
        <i />
      </div>
    </section>
  );
}
