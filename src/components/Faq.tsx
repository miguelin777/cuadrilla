import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS } from "../data";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section wrap" id="faq">
      <div className="sec-head">
        <div className="sec-head__l">
          <span className="eyebrow">
            <span className="idx">(06)</span> Preguntas frecuentes
          </span>
          <h2>
            Lo que <em>siempre</em> nos preguntan
          </h2>
        </div>
        <p>Si tu duda no está aquí, escríbenos y te contestamos claro, sin vueltas.</p>
      </div>

      <div className="faq">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div className="faq__item" data-open={isOpen} key={i}>
              <button
                className="faq__q"
                onClick={() => setOpen(isOpen ? null : i)}
                data-cursor="hover"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-q-${i}`}
              >
                {f.q}
                <span className="faq__sign" />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq__a"
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
