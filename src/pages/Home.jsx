import { Link } from 'react-router-dom'
import { hospital } from '../config/hospital'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import {
  AmbulanceIcon,
  ArrowRightIcon,
  BoltIcon,
  ClockIcon,
  CrossIcon,
  HeartIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
} from '../components/ui/Icons'

const services = [
  {
    title: 'Emergency Care',
    description:
      'Immediate attention from our trauma team, with ambulance support around the clock.',
    icon: AmbulanceIcon,
    tone: 'red',
  },
  {
    title: 'General Medicine',
    description:
      'Everyday consultations, health checks and ongoing care for the whole family.',
    icon: StethoscopeIcon,
    tone: 'blue',
  },
  {
    title: 'Cardiology',
    description:
      'Heart screening, diagnostics and treatment plans guided by experienced specialists.',
    icon: HeartIcon,
    tone: 'red',
  },
  {
    title: 'Surgery',
    description:
      'Modern operating theatres and skilled surgical teams for planned and urgent procedures.',
    icon: CrossIcon,
    tone: 'teal',
  },
  {
    title: 'Diagnostics & Lab',
    description:
      'Accurate imaging and laboratory results delivered quickly to support your treatment.',
    icon: BoltIcon,
    tone: 'blue',
  },
  {
    title: 'Preventive Health',
    description:
      'Vaccinations, screenings and wellness advice to help you stay ahead of illness.',
    icon: ShieldCheckIcon,
    tone: 'teal',
  },
]

const trustPoints = [
  {
    title: '24/7 Care',
    description:
      'Emergency and inpatient teams are available every hour of every day.',
    icon: ClockIcon,
  },
  {
    title: 'Qualified Doctors',
    description:
      'Board-certified specialists across more than twenty medical disciplines.',
    icon: StethoscopeIcon,
  },
  {
    title: 'Fast Response',
    description:
      'Rapid triage and ambulance dispatch when every minute truly counts.',
    icon: BoltIcon,
  },
]

const telHref = `tel:${hospital.phone.replace(/\s/g, '')}`
const emergencyTelHref = `tel:${hospital.emergencyPhone.replace(/\s/g, '')}`

const toneStyles = {
  blue: 'bg-primary-light text-primary',
  red: 'bg-red-50 text-red-600',
  teal: 'bg-teal-50 text-teal-600',
}

export default function Home() {
  return (
    <>
      <section className="bg-primary-light">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
              <HeartIcon className="h-4 w-4" />
              {hospital.tagline}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Compassionate healthcare you can count on
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From routine check-ups to urgent care, {hospital.name} brings
              experienced doctors and modern facilities together under one
              roof — so you always know where to turn.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/emergency"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-red-700"
              >
                <AmbulanceIcon className="h-5 w-5" />
                Emergency
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
              >
                Book Consultation
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-primary/15 pt-6">
              <div>
                <dt className="text-sm text-slate-600">Years of service</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">25+</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-600">Specialists</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">40+</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-600">Patients / year</dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">50k</dd>
              </div>
            </dl>
          </div>

          <PlaceholderImage
            label="Hero image — hospital team at work"
            size="lg"
            className="h-72 w-full rounded-3xl shadow-lg sm:h-96 lg:h-[32rem]"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Specialist care across the departments you and your family are
              most likely to need.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-surface p-6 transition-shadow hover:shadow-lg"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${toneStyles[service.tone] ?? toneStyles.blue}`}
                >
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  Learn more
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why patients choose us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Care built around safety, expertise and speed at every step.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-slate-200 bg-surface p-6 text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <point.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Need medical help right now?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-blue-100">
                Speak with our care team any time of day. For emergencies, call
                our dedicated line and we will respond immediately.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-primary shadow-sm transition-colors hover:bg-primary-light"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={emergencyTelHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <AmbulanceIcon className="h-5 w-5" />
                Emergency line
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
