import Reveal from "./Reveal";
import { PROCESS } from "../data";

export default function Process() {
  return (
    <section className="section wrap" id="proceso">
      <div className="sec-head">
        <div className="sec-head__l">
          <span className="eyebrow">
            <span className="idx">(02)</span> Cómo trabajamos
          </span>
          <h2>
            Simple, claro y <em>sin rodeos</em>
          </h2>
        </div>
        <p>
          Tú pones el problema y la dirección; nosotros ponemos la ejecución. Cuatro
          pasos, sin juntas eternas.
        </p>
      </div>

      <Reveal>
        <div className="proc">
          {PROCESS.map((p) => (
            <div className="proc__step" key={p.n} data-cursor="hover">
              <span className="n">PASO {p.n}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
