import { Link } from 'react-router-dom'
import { hospital } from '../../config/hospital'
import { CrossIcon } from './Icons'

export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label={`${hospital.name} — home`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
        <CrossIcon />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-primary">
          {hospital.name}
        </span>
        <span className="mt-0.5 text-[11px] font-medium tracking-wide text-slate-500 uppercase">
          Hospital &amp; Clinic
        </span>
      </span>
    </Link>
  )
}
