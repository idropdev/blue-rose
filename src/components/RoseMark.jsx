/* Single-line rose mark, echoing the brand's line-art logo. */
export default function RoseMark({ size = 34, color = 'currentColor' }) {
  return (
    <span
      className="rose-mark-icon"
      style={{
        display: 'inline-block',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color === 'currentColor' ? 'var(--cobalt)' : color,
        mask: 'url(/rose-mark.png) no-repeat center / contain',
        WebkitMask: 'url(/rose-mark.png) no-repeat center / contain',
      }}
      aria-hidden="true"
    />
  );
}
