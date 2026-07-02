import { motion } from "framer-motion";
import { WORK } from "../data";
import { staggerContainer, staggerItem, viewportOnce } from "../anim";

export default function Work() {
  return (
    <section className="section wrap" id="trabajo">
      <div className="sec-head">
        <div className="sec-head__l">
          <span className="eyebrow">
            <span className="idx">(04)</span> Trabajo seleccionado
          </span>
          <h2>
            Negocios que dejaron <em>el Excel</em> atrás
          </h2>
        </div>
        <p>Proyectos reales para negocios de a pie. Pasa el cursor sobre cada uno para ver el resultado.</p>
      </div>

      <motion.div
        className="work"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {WORK.map((w, i) => (
          <motion.article className={`work__item ${w.span}`} key={i} data-cursor="hover" variants={staggerItem}>
            <div className="work__meta">
              <span className="type">{w.type}</span>
              <span>{w.year}</span>
            </div>
            <div>
              <h3 className="work__name">{w.name}</h3>
              <p className="work__built">{w.built}</p>
              <span className="work__result">{w.result}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <p
        style={{
          fontFamily: "var(--f-mono)",
          fontSize: "0.68rem",
          color: "var(--ink-faint)",
          letterSpacing: "0.04em",
          marginTop: "1.2rem",
        }}
      >
        * Menudería Cortazar es un proyecto real en operación; los demás son casos ilustrativos que se reemplazan por reales conforme se cierran.
      </p>
    </section>
  );
}
