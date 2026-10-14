const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function MenuIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function PhoneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  )
}

export function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 6 9-6" />
    </svg>
  )
}

export function MapPinIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.17-1.35a9.9 9.9 0 0 0 4.87 1.27h.01c5.5 0 9.96-4.46 9.96-9.96A9.9 9.9 0 0 0 12.04 2zm0 1.83c2.16 0 4.2.85 5.73 2.38a8.04 8.04 0 0 1 2.38 5.74c0 4.46-3.63 8.09-8.1 8.09a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.8.82-2.99-.19-.31a8.07 8.07 0 0 1-1.24-4.3c0-4.46 3.63-8.1 8.1-8.1zm-2.4 4.1c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.6.13.17 1.76 2.8 4.35 3.82 2.15.85 2.59.68 3.06.64.46-.04 1.5-.61 1.71-1.2.21-.6.21-1.1.15-1.21-.07-.1-.23-.17-.48-.29-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.12-.17.25-.64.82-.78.99-.15.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.4-.42-.55-.43h-.47z"
      />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ShieldCheckIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M12 3l7 3v6c0 4.2-2.9 7.8-7 9-4.1-1.2-7-4.8-7-9V6l7-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function BoltIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M13 3 5 14h6l-1 7 8-11h-6l1-7z" />
    </svg>
  )
}

export function AmbulanceIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M3 8h10v8H3zM13 11h4l4 3v2h-8z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
      <path d="M6.5 11h3M8 9.5v3" />
    </svg>
  )
}

export function StethoscopeIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M5 4v5a4 4 0 0 0 8 0V4" />
      <path d="M9 13v2a5 5 0 0 0 10 0v-2" />
      <circle cx="19" cy="10" r="2" />
      <path d="M5 4h-1M13 4h1" />
    </svg>
  )
}

export function HeartIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9z" />
    </svg>
  )
}

export function CrossIcon({ className = 'h-7 w-7' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function BabyIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <circle cx="12" cy="8" r="4.5" />
      <path d="M9.5 7.5h.01M14.5 7.5h.01" />
      <path d="M10 9.5a2.5 2.5 0 0 0 4 0" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  )
}

export function FlaskIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <path d="M9 3h6" />
      <path d="M10 3v6l-5.2 9.3A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-3L14 9V3" />
      <path d="M7.5 15h9" />
    </svg>
  )
}

export function PillIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...base}
    >
      <rect x="2.5" y="8.5" width="19" height="7" rx="3.5" />
      <path d="M12 8.5v7" />
    </svg>
  )
}
