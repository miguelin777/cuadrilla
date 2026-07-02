import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section className="section wrap" id="estudio">
      <Reveal>
        <span className="eyebrow">
          <span className="idx">(00)</span> El estudio
        </span>
      </Reveal>

      <div className="manifesto__grid" style={{ marginTop: "2.5rem" }}>
        <Reveal>
          <p className="manifesto__text">
            Somos Cuadrilla, un estudio chico de software en Cortázar. Agarramos ese
            enredo que hoy vive en <em>Excel</em>, en la libreta y en mensajes sueltos de
            WhatsApp, y lo volvemos un sistema que <em>trabaja para ti</em>.
          </p>
        </Reveal>

        <div className="manifesto__aside">
          <Reveal delay={0.08}>
            <div className="stat">
              <b>2–6 sem</b>
              <span>Entrega típica por módulo</span>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="stat">
              <b>A la medida</b>
              <span>Alrededor de tu operación, no al revés</span>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="stat">
              <b>Soporte real</b>
              <span>Por WhatsApp, en español</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
