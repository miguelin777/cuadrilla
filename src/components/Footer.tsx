import { useEffect, useState } from "react";
import { NAV } from "../data";
import { WHATSAPP, EMAIL } from "../contact";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: "America/Mexico_City",
          }).format(new Date())
        );
      } catch {
        setTime("");
      }
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__col footer__brand">
            <a href="#top" className="brand" data-cursor="hover">
              Cuadrilla<span className="brand__dot" aria-hidden />
            </a>
            <p>
              Estudio de software del Bajío. Tú diriges, nosotros construimos, y te
              entregamos software que sí funciona.
            </p>
          </div>

          <div className="footer__col">
            <h4>Navegar</h4>
            {NAV.map((n) => (
              <a key={n.href} href={n.href} data-cursor="hover">
                {n.label}
              </a>
            ))}
          </div>

          <div className="footer__col">
            <h4>Contacto</h4>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" data-cursor="hover">
              WhatsApp ↗
            </a>
            <a href={`mailto:${EMAIL}`} data-cursor="hover">
              {EMAIL}
            </a>
            <span style={{ color: "var(--ink-faint)", paddingTop: "0.35rem", display: "block" }}>
              El Bajío, Guanajuato
            </span>
          </div>
        </div>

        <div className="footer__word" aria-hidden>
          CUADRILLA
        </div>

        <div className="footer__bar">
          <span>
            © 2026 <b>Cuadrilla</b> · Estudio de software
          </span>
          <span>Hecho en el Bajío, MX · Hora local {time || "—"}</span>
          <span>Software a la medida · Soporte en español</span>
        </div>
      </div>
    </footer>
  );
}
