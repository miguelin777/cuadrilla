import { motion } from "framer-motion";
import { SERVICES } from "../data";
import { staggerContainer, staggerItem, viewportOnce } from "../anim";
import { Plus } from "lucide-react";

export default function Services() {
  return (
    <section className="section wrap" id="servicios">
      <div className="sec-head">
        <div className="sec-head__l">
          <span className="eyebrow">
            <span className="idx">(01)</span> Servicios
          </span>
          <h2>
            Lo que <em>construimos</em> para tu negocio
          </h2>
        </div>
        <p>
          Cada proyecto es a la medida. Estas son las piezas que más nos piden — y las
          que más tiempo y dinero te devuelven.
        </p>
      </div>

      <motion.div
        className="svc-list"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {SERVICES.map((s) => (
          <motion.div className="svc" key={s.n} data-cursor="hover" variants={staggerItem}>
            <div className="svc__num">({s.n})</div>
            <div className="svc__body">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
            <div className="svc__icon">
              <Plus size={26} strokeWidth={1.4} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
