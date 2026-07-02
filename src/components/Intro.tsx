import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Cortina de intro: cubre la carga de fuentes (evita FOUT) y sube al terminar.
export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        setShow(false);
      }
    };

    const minTime = new Promise<void>((r) => setTimeout(r, 850));
    const fontsReady =
      typeof document !== "undefined" && (document as Document).fonts
        ? (document as Document).fonts.ready
        : Promise.resolve();

    Promise.all([minTime, fontsReady]).then(finish);
    const failsafe = setTimeout(finish, 2600);
    return () => clearTimeout(failsafe);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="intro"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <div className="intro__inner">
            <span className="intro__brand">
              Cuadrilla<span className="brand__dot" />
            </span>
            <span className="intro__bar">
              <i />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
