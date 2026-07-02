import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";
import { NAV } from "../data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="wrap nav__row">
        <a href="#top" className="brand" data-cursor="hover" aria-label="Cuadrilla — inicio">
          Cuadrilla<span className="brand__dot" aria-hidden />
        </a>

        <nav className="nav__links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} data-cursor="hover">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="nav__cta">
          <Magnetic>
            <a href="#contacto" className="btn" data-cursor="hover">
              <span className="hide-sm">Agenda una llamada</span>
              <span className="arw">↗</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
