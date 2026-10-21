import type { SVGProps } from 'react'

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

export function MicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v3" />
    </svg>
  )
}

export function UploadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H15l6 4.5V18a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 17.5z" />
      <path d="M12 9v6" />
      <path d="M9 12h6" />
    </svg>
  )
}

export function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M6 9a6 6 0 1 1 12 0c0 4 2 5 2 5H4s2-1 2-5" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  )
}

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 4 3 11h2v8h5v-5h4v5h5v-8h2z" />
    </svg>
  )
}

export function LibraryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 5h14v2H4zm0 6h14v2H4zm0 6h14v2H4zm16-12h2v14h-2z" />
    </svg>
  )
}

export function HistoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13 3a9 9 0 1 0 8.94 10H20a7 7 0 1 1-2.05-4.95L15 11h7V4l-2.62 2.62A8.97 8.97 0 0 0 13 3m-1 5h2v5l4 2-1 1.73-5-2.73z" />
    </svg>
  )
}

export function SettingsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m19.43 12.98.04-.32-.04-.32 2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.6-.22l-2.49 1a7.5 7.5 0 0 0-.56-.32l-.38-2.65A.5.5 0 0 0 15.14 4h-4a.5.5 0 0 0-.49.42l-.38 2.65q-.285.135-.56.32l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46a.5.5 0 0 0 .12.64l2.11 1.65-.04.32.04.32-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .6.22l2.49-1q.27.18.56.32l.38 2.65a.5.5 0 0 0 .49.42h4a.5.5 0 0 0 .49-.42l.38-2.65q.285-.135.56-.32l2.49 1a.5.5 0 0 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64zM13.14 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </svg>
  )
}

export function LikeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 10v10" />
      <path d="M14 4 9 10v10h8.1a2 2 0 0 0 2-1.65l1-6A2 2 0 0 0 18.12 10H14z" />
      <path d="M7 10H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3" />
    </svg>
  )
}

export function DislikeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 14V4" />
      <path d="m14 20-5-6V4h8.1a2 2 0 0 1 2 1.65l1 6A2 2 0 0 1 18.12 14H14z" />
      <path d="M7 14H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3" />
    </svg>
  )
}

export function ShareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
      <path d="m12 16 0-12" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  )
}

export function SaveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4-7 4V5a1 1 0 0 1 1-1z" />
    </svg>
  )
}

export function ShortsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.77 10.32c-.77-.32-1.2-.59-1.2-.59s.45-.2.67-.3c.96-.44 1.63-1.37 1.74-2.42.13-1.24-.46-2.43-1.51-3.04-1.29-.75-2.95-.47-3.92.65l-6.19 7.15c-.65.75-.85 1.76-.53 2.69.32.93 1.07 1.62 2.03 1.87.1.03.62.17.62.17s-.45.2-.67.3c-.96.44-1.63 1.37-1.74 2.42-.13 1.24.46 2.43 1.51 3.04.57.33 1.21.5 1.85.5.76 0 1.51-.25 2.14-.76l6.19-7.15c.65-.75.85-1.76.53-2.69-.32-.93-1.07-1.62-2.03-1.87zM10 14.5v-5l4.5 2.5-4.5 2.5z" />
    </svg>
  )
}

export function SubscriptionsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v10H2V12h20zm-2 2H4v6h14v-6zm-8 1l4 2-4 2v-4z" />
    </svg>
  )
}

export function UserCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.5 18.5a6 6 0 0 1 11 0" />
    </svg>
  )
}

export function MusicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  )
}

export function GamingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 7.2H6.5c-2.4 0-4.3 1.8-4.5 4.2l-.7 4.5c-.3 1.8 1.1 3.4 2.9 3.4 1.1 0 2.2-.6 2.7-1.6l1.2-2.3h7.8l1.2 2.3c.5 1 1.6 1.6 2.7 1.6 1.8 0 3.2-1.6 2.9-3.4l-.7-4.5c-.2-2.4-2.1-4.2-4.5-4.2zM9 13H7.5v1.5h-1V13H5v-1h1.5v-1.5h1V12H9v1zm6.8 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm2.4-2.4c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" />
    </svg>
  )
}

export function NewsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h5M7 16h5M15 12h2M15 16h2" />
    </svg>
  )
}

export function PlayablesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="6" cy="6" r="1.8" />
      <circle cx="12" cy="6" r="1.8" />
      <circle cx="18" cy="6" r="1.8" />
      <circle cx="6" cy="12" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="18" cy="12" r="1.8" />
      <circle cx="6" cy="18" r="1.8" />
      <circle cx="12" cy="18" r="1.8" />
      <circle cx="18" cy="18" r="1.8" />
    </svg>
  )
}

export function MembershipsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <polygon
        points="12,6.5 13.6,10 17.5,10.4 14.6,13 15.4,17 12,14.8 8.6,17 9.4,13 6.5,10.4 10.4,10"
        stroke="currentColor"
        fill="none"
      />
    </svg>
  )
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function ChevronUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}

