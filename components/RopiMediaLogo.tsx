import Link from 'next/link'

interface RopiMediaLogoProps {
  href?: string
  className?: string
  showText?: boolean
}

export default function RopiMediaLogo({
  href = '/',
  className = '',
  showText = true,
}: RopiMediaLogoProps) {
  const content = (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* TETRIS MEDIA Iconic Emblem */}
      <span className="relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-[#2d3748] bg-[radial-gradient(ellipse_at_top,#1a2035_0%,#0a0d17_100%)] p-1 shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-transform duration-200 group-hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="tetris-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <linearGradient id="tetris-play-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>

          {/* Stylized T Glyph with Media vibe */}
          <path
            d="M5 8 h22 v4.5 h-8.5 v14 h-5 v-14 h-8.5 z"
            fill="none"
            stroke="url(#tetris-logo-grad)"
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Embedded Play Triangle */}
          <polygon
            points="13.5,13.5 19.5,17 13.5,20.5"
            fill="url(#tetris-play-fill)"
            stroke="#00F0FF"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* TETRIS MEDIA Wordmark */}
      {showText && (
        <span className="flex items-baseline gap-1.5 text-lg font-black tracking-tight leading-none text-[#f1f1f1]">
          <span>TETRIS</span>
          <span className="bg-gradient-to-r from-[#00F0FF] via-[#3B82F6] to-[#EC4899] bg-clip-text text-transparent font-extrabold tracking-wider text-base">
            MEDIA
          </span>
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} aria-label="TETRIS MEDIA home" className="group inline-flex items-center">
        {content}
      </Link>
    )
  }

  return content
}
