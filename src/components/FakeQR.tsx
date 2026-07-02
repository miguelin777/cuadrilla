// QR decorativo, determinista a partir de una semilla.
// Es para la representación visual de la factura demo — no es escaneable.
export default function FakeQR({ seed, size = 64 }: { seed: string; size?: number }) {
  const N = 25;

  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const rnd = (i: number) => {
    let x = Math.imul(h ^ (i * 2654435761), 40503);
    x ^= x >>> 15;
    return ((x >>> 0) % 1000) / 1000;
  };

  const finderVal = (r: number, c: number): number => {
    const boxes: [number, number][] = [
      [0, 0],
      [0, N - 7],
      [N - 7, 0],
    ];
    for (const [br, bc] of boxes) {
      const rr = r - br;
      const cc = c - bc;
      if (rr >= 0 && rr <= 6 && cc >= 0 && cc <= 6) {
        const border = rr === 0 || rr === 6 || cc === 0 || cc === 6;
        const inner = rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4;
        return border || inner ? 1 : 0;
      }
      // separador blanco alrededor del finder
      if (rr >= -1 && rr <= 7 && cc >= -1 && cc <= 7) return 0;
    }
    return -1;
  };

  const cell = size / N;
  const rects: JSX.Element[] = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const f = finderVal(r, c);
      const on = f === -1 ? rnd(r * N + c) > 0.52 : f === 1;
      if (on) {
        rects.push(
          <rect key={`${r}-${c}`} x={c * cell} y={r * cell} width={cell} height={cell} fill="#16130d" />
        );
      }
    }
  }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} shapeRendering="crispEdges" aria-hidden>
      {rects}
    </svg>
  );
}
