import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { hospital, navLinks } from '../../config/hospital'
import { CloseIcon, MenuIcon, PhoneIcon } from '../ui/Icons'
import Logo from '../ui/Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-primary-light text-primary'
        : 'text-slate-600 hover:bg-muted hover:text-primary'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
      isActive
        ? 'bg-primary-light text-primary'
        : 'text-slate-700 hover:bg-muted hover:text-primary'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="hidden border-b border-slate-200 bg-muted lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-slate-600 sm:px-6 lg:px-8">
          <p>{hospital.hours.weekdays}</p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${hospital.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <PhoneIcon className="h-4 w-4" />
              {hospital.phone}
            </a>
            <a
              href={`mailto:${hospital.email}`}
              className="transition-colors hover:text-primary"
            >
              {hospital.email}
            </a>
          </div>
        </div>
      </div>

      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/emergency"
              className="ml-3 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700"
            >
              <PhoneIcon className="h-4 w-4" />
              Emergency
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/emergency"
              className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Emergency
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-muted"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="pb-4 lg:hidden"
          >
            <div className="space-y-1 border-t border-slate-200 pt-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={mobileLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={`tel:${hospital.phone.replace(/\s/g, '')}`}
                className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-base font-medium text-slate-700"
              >
                <PhoneIcon className="h-5 w-5 text-primary" />
                {hospital.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
