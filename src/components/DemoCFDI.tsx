import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CHAT, CFDI, STAMP_LOG } from "../data";
import FakeQR from "./FakeQR";
import { FileText, RotateCcw, TriangleAlert, CheckCheck } from "lucide-react";

type Shown = { side: "in" | "out"; text: string; time: string };
type Phase = "ready" | "chatting" | "stamping" | "done";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function DemoCFDI() {
  const [phase, setPhase] = useState<Phase>("ready");
  const [msgs, setMsgs] = useState<Shown[]>([]);
  const [typing, setTyping] = useState(false);
  const [logIdx, setLogIdx] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const runId = useRef(0);
  const started = useRef(false);

  const toBottom = () => {
    requestAnimationFrame(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    });
  };

  async function run() {
    const id = ++runId.current;
    setMsgs([]);
    setTyping(false);
    setLogIdx(0);
    setPhase("chatting");

    for (const m of CHAT) {
      await sleep(m.delay);
      if (id !== runId.current) return;
      if (m.side === "out" && m.typing) {
        setTyping(true);
        toBottom();
        await sleep(m.typing);
        if (id !== runId.current) return;
        setTyping(false);
      }
      setMsgs((prev) => [...prev, { side: m.side, text: m.text, time: m.time }]);
      toBottom();
    }

    await sleep(750);
    if (id !== runId.current) return;
    setPhase("stamping");
    for (let i = 0; i < STAMP_LOG.length; i++) {
      setLogIdx(i);
      await sleep(i === STAMP_LOG.length - 1 ? 800 : 760);
      if (id !== runId.current) return;
    }
    await sleep(250);
    if (id !== runId.current) return;
    setPhase("done");
  }

  useEffect(() => {
    const el = document.getElementById("demo");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            run();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const busy = phase === "chatting" || phase === "stamping";

  return (
    <section className="demo" id="demo">
      <div className="section wrap">
        <div className="sec-head">
          <div className="sec-head__l">
            <span className="eyebrow">
              <span className="idx">(03)</span> Demo en vivo
            </span>
            <h2>
              Un pedido entra… y sale <em>facturado</em>
            </h2>
          </div>
          <p>
            Así se ve una de las automatizaciones que construimos: el cliente escribe por
            WhatsApp y el sistema genera y timbra el CFDI solo. Sin capturar nada a mano.
          </p>
        </div>

        <div className="demo__grid">
          {/* --- WhatsApp --- */}
          <div className="wa">
            <div className="wa__bar">
              <div className="wa__ava">M</div>
              <div className="wa__who">
                <b>Menudería Cortazar</b>
                <span>{busy ? "en línea · escribiendo…" : "cuenta de empresa"}</span>
              </div>
            </div>

            <div className="wa__body" ref={bodyRef}>
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  className={`bubble bubble--${m.side}`}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {m.text}
                  <time>
                    {m.time}
                    {m.side === "out" && (
                      <CheckCheck size={13} className="tick" style={{ display: "inline", marginLeft: 4, verticalAlign: "-2px" }} />
                    )}
                  </time>
                </motion.div>
              ))}
              {typing && (
                <div className="typing">
                  <i />
                  <i />
                  <i />
                </div>
              )}
            </div>

            <div className="wa__foot">
              <button className="btn" onClick={() => !busy && run()} disabled={busy} data-cursor="hover">
                {busy ? (
                  <>● Demo en curso…</>
                ) : (
                  <>
                    <RotateCcw size={14} /> Reproducir de nuevo
                  </>
                )}
              </button>
            </div>
          </div>

          {/* --- Factura --- */}
          <div className="inv-panel">
            <div className="inv-panel__head">
              <span>Facturación · Cuadrilla</span>
              <span className="live">
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "inline-block",
                  }}
                />
                {phase === "done" ? "TIMBRADO" : phase === "stamping" ? "PROCESANDO" : "EN ESPERA"}
              </span>
            </div>

            <div className="inv-panel__stage">
              {(phase === "ready" || phase === "chatting") && (
                <div className="inv-idle">
                  <FileText className="ic" size={44} strokeWidth={1.2} />
                  <p>
                    En cuanto el agente cierre el pedido, aquí se genera y se timbra el
                    CFDI 4.0 — en segundos.
                  </p>
                </div>
              )}

              {phase === "stamping" && (
                <div className="stamp-proc" role="status" aria-live="polite">
                  <div className="ring" aria-hidden />
                  <div className="log">
                    {STAMP_LOG[logIdx].startsWith("✓") ? (
                      <b>{STAMP_LOG[logIdx]}</b>
                    ) : (
                      STAMP_LOG[logIdx]
                    )}
                  </div>
                </div>
              )}

              {phase === "done" && (
                <motion.div
                  className="cfdi"
                  initial={{ opacity: 0, y: 26, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="cfdi__watermark">
                    <span>REPRESENTACIÓN IMPRESA</span>
                  </div>

                  <div className="cfdi__top">
                    <div className="cfdi__emisor">
                      <b>{CFDI.emisor.nombre}</b>
                      <span>RFC {CFDI.emisor.rfc}</span>
                      <span>{CFDI.emisor.regimen}</span>
                    </div>
                    <div className="cfdi__badge">
                      <span className="tag">CFDI 4.0</span>
                      <div style={{ marginTop: 6 }}>
                        Serie {CFDI.serie} · Folio {CFDI.folio}
                      </div>
                    </div>
                  </div>

                  <div className="cfdi__row">
                    <div className="cfdi__f">
                      <label>Receptor</label>
                      <div className="v">{CFDI.receptor.nombre}</div>
                    </div>
                    <div className="cfdi__f">
                      <label>RFC receptor</label>
                      <div className="v">{CFDI.receptor.rfc}</div>
                    </div>
                    <div className="cfdi__f">
                      <label>Uso CFDI</label>
                      <div className="v">{CFDI.receptor.uso}</div>
                    </div>
                    <div className="cfdi__f">
                      <label>Régimen receptor</label>
                      <div className="v">{CFDI.receptor.regimen}</div>
                    </div>
                  </div>

                  <div className="cfdi__row">
                    <div className="cfdi__f">
                      <label>Fecha emisión</label>
                      <div className="v">{CFDI.fecha.replace("T", " ")}</div>
                    </div>
                    <div className="cfdi__f">
                      <label>Forma · Método</label>
                      <div className="v">
                        {CFDI.formaPago.split(" · ")[0]} · {CFDI.metodoPago.split(" · ")[0]}
                      </div>
                    </div>
                    <div className="cfdi__f">
                      <label>Lugar de expedición</label>
                      <div className="v">{CFDI.lugarExpedicion}</div>
                    </div>
                    <div className="cfdi__f">
                      <label>Moneda</label>
                      <div className="v">{CFDI.moneda}</div>
                    </div>
                  </div>

                  <table>
                    <thead>
                      <tr>
                        <th>Cant</th>
                        <th>Concepto</th>
                        <th className="r">P.U.</th>
                        <th className="r">Importe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CFDI.conceptos.map((c, i) => (
                        <tr key={i}>
                          <td>{c.cant}</td>
                          <td>
                            {c.desc}
                            <br />
                            <span style={{ opacity: 0.55 }}>
                              Clave {c.clave} · {c.unidad}
                            </span>
                          </td>
                          <td className="r">${c.vu}</td>
                          <td className="r">${c.imp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="cfdi__totals">
                    <table>
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td className="r">${CFDI.subtotal}</td>
                        </tr>
                        <tr>
                          <td>IVA 16%</td>
                          <td className="r">${CFDI.iva}</td>
                        </tr>
                        <tr className="grand">
                          <td>Total</td>
                          <td className="r">${CFDI.total}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="cfdi__stamp">
                    <div className="cfdi__qr">
                      <FakeQR seed={CFDI.uuid} size={58} />
                    </div>
                    <div className="cfdi__seal">
                      <b>Folio Fiscal (UUID)</b>
                      <span className="cfdi__uuid">{CFDI.uuid}</span>
                      <b style={{ marginTop: 6 }}>No. Certificado del Emisor</b>
                      {CFDI.noCertificado}
                      <b style={{ marginTop: 6 }}>No. Certificado SAT</b>
                      {CFDI.noCertSat}
                      <b style={{ marginTop: 6 }}>Sello digital CFDI</b>
                      {CFDI.selloCfdi.slice(0, 110)}…
                    </div>
                  </div>

                  <div className="cfdi__foot">
                    Este documento es una representación impresa de un CFDI · Timbrado{" "}
                    {CFDI.fechaTimbrado.replace("T", " ")} · PAC {CFDI.rfcPac}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="demo__disclaimer">
          <TriangleAlert size={15} />
          <span>
            Demo con datos ficticios: el UUID, los sellos y el certificado son de ejemplo y
            no son verificables ante el SAT. Ilustra el flujo real que automatizamos con tu
            facturación conectada a un PAC autorizado.
          </span>
        </div>
      </div>
    </section>
  );
}
