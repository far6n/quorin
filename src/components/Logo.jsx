export default function Logo({ className = 'h-7 w-auto' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="qlogo" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
        <circle cx="14" cy="14" r="9" stroke="url(#qlogo)" strokeWidth="2.4" />
        <line
          x1="20.5"
          y1="20.5"
          x2="26"
          y2="26"
          stroke="url(#qlogo)"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight text-white">
        Quorin
      </span>
    </div>
  )
}
