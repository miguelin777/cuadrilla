import { MARQUEE } from "../data";

export default function Marquee() {
  // Cada "mitad" repite la lista 2x para llenar pantallas anchas; el track
  // anima -50% (una mitad completa) para un loop sin saltos.
  const half = [...MARQUEE, ...MARQUEE];
  const items = [...half, ...half];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {items.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t}
            <span className="star">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
