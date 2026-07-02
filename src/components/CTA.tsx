import Magnetic from "./Magnetic";
import { WHATSAPP, EMAIL } from "../contact";

export default function CTA() {
  return (
    <section className="section cta" id="contacto">
      <div
        className="hero__glow"
        style={{ left: "-8vw", top: "auto", bottom: "-18vw", right: "auto" }}
        aria-hidden
      />
      <div className="wrap cta__inner">
        <span className="eyebrow">
          <span className="idx">(07)</span> Cuéntanos
        </span>
        <h2>
          ¿Qué es eso que hoy te <em>quita tiempo</em> y no debería?
        </h2>
        <p>
          Cuéntanos qué te está frenando. En una llamada te decimos si lo podemos resolver,
          cómo y en cuánto. Sin costo y sin compromiso.
        </p>
        <div className="cta__actions">
          <Magnetic>
            <a className="btn btn--solid" href={WHATSAPP} target="_blank" rel="noreferrer" data-cursor="hover">
              Escríbenos por WhatsApp <span className="arw">↗</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn" href={`mailto:${EMAIL}`} data-cursor="hover">
              {EMAIL}
            </a>
          </Magnetic>
        </div>
        <p
          style={{
            fontFamily: "var(--f-mono)",
            fontSize: "0.76rem",
            letterSpacing: "0.04em",
            color: "var(--ink-faint)",
            marginTop: "0.5rem",
          }}
        >
          Hablas directo con Miguel — quien construye, no un vendedor.
        </p>
      </div>
    </section>
  );
}
