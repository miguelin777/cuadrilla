import { motion } from "framer-motion";
import { PLANS } from "../data";
import { staggerContainer, staggerItem, viewportOnce } from "../anim";

export default function Plans() {
  return (
    <section className="section wrap" id="precios">
      <div className="sec-head">
        <div className="sec-head__l">
          <span className="eyebrow">
            <span className="idx">(05)</span> Cómo trabajamos contigo
          </span>
          <h2>
            Un plan para cada <em>momento</em>
          </h2>
        </div>
        <p>
          Elige según lo que necesitas hoy. Sin letras chiquitas: el alcance y el precio
          los ves por escrito antes de empezar.
        </p>
      </div>

      <motion.div
        className="plans"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {PLANS.map((p) => (
          <motion.div
            className={`plan ${p.feat ? "plan--feat" : ""}`}
            key={p.name}
            data-cursor="hover"
            variants={staggerItem}
          >
            {p.feat && p.tag && <span className="plan__tag">{p.tag}</span>}
            <div className="plan__name">{p.name}</div>
            <div className="plan__for">{p.forWho}</div>
            <p className="plan__desc">{p.desc}</p>
            <div className="plan__price">{p.price}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
