import { Link } from 'react-router-dom'
import { formattedAddress, hospital, navLinks, whatsappLink } from '../../config/hospital'
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from '../ui/Icons'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold tracking-tight text-primary">
              {hospital.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
              {hospital.tagline}
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/emergency"
                  className="text-sm font-medium text-red-600 transition-colors hover:text-red-700"
                >
                  Emergency
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
              Opening Hours
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {hospital.hours.weekdays}
              </li>
              <li className="flex items-start gap-2">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {hospital.hours.saturday}
              </li>
              <li className="flex items-start gap-2">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {hospital.hours.sunday}
              </li>
              <li className="flex items-start gap-2 font-medium text-red-600">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0" />
                {hospital.hours.emergency}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{formattedAddress.join(', ')}</span>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:${hospital.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-primary"
                >
                  {hospital.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${hospital.email}`}
                  className="break-all transition-colors hover:text-primary"
                >
                  {hospital.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {hospital.name}. All rights
            reserved.
          </p>
          <p className="mt-1">
            If you are experiencing a medical emergency, call your local
            emergency number immediately.
          </p>
        </div>
      </div>
    </footer>
  )
}
