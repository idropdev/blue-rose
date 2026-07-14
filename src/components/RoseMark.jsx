/* Single-line rose mark, echoing the brand's line-art logo. */
export default function RoseMark({ size = 34, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M24 44c0-9 0-18 1-26" />
      <path d="M25 18c-6-1-10-5-9-10 4-1 8 1 9 5 1-4 5-6 9-5 1 5-3 9-9 10Z" />
      <path d="M25 13c-2-2-2-5 0-7 2 2 2 5 0 7Z" />
      <path d="M25 26c-4 3-9 3-12-1 3-4 8-4 12 1Z" />
      <path d="M25 30c4-4 9-4 12 0-3 4-8 4-12 0Z" />
    </svg>
  );
}
