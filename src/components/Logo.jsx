export default function Logo({ height = 40, color = 'var(--cobalt)' }) {
  const width = height * 0.96; // Aspect ratio of the logo is 372/387
  return (
    <span
      className="brand-logo"
      style={{
        display: 'inline-block',
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        mask: 'url(/logo.png) no-repeat center / contain',
        WebkitMask: 'url(/logo.png) no-repeat center / contain',
      }}
      aria-hidden="true"
    />
  );
}
