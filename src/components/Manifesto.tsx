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
            Somos Cuadrilla. Convertimos ese proceso que hoy vive en{" "}
            <em>hojas de Excel</em>, cuadernos y mensajes sueltos de WhatsApp en un
            sistema que <em>trabaja para ti</em>.
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
