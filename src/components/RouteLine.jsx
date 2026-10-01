import '../styles/route-line.css'
// A small recurring motif: a dashed route from an origin dot to a destination dot.
// Used in the coverage section to tie back to the idea of a planned journey.
export default function RouteLine({ width = 220, height = 40 }) {
  const midY = height / 2
  return (
    <svg
      className="route-line"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
    >
      <path d={`M6 ${midY} C ${width * 0.35} ${midY - 16}, ${width * 0.65} ${midY + 16}, ${width - 6} ${midY}`} />
      <circle cx="6" cy={midY} r="4" />
      <circle cx={width - 6} cy={midY} r="4" />
    </svg>
  )
}
