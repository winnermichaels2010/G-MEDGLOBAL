import { Link } from 'react-router-dom'
import { hospital } from '../config/hospital'
import PageHeader from '../components/ui/PageHeader'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import {
  ArrowRightIcon,
  HeartIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
} from '../components/ui/Icons'

const values = [
  {
    title: 'Compassion',
    description:
      'We treat every patient with kindness, dignity and respect, no matter the reason for their visit.',
    icon: HeartIcon,
    tone: 'red',
  },
  {
    title: 'Excellence',
    description:
      'Our specialists pursue the highest standards of clinical care and keep learning to stay at the front.',
    icon: StethoscopeIcon,
    tone: 'blue',
  },
  {
    title: 'Integrity',
    description:
      'We are honest and transparent about your care, your options and the costs involved.',
    icon: ShieldCheckIcon,
    tone: 'teal',
  },
]

const stats = [
  { label: 'Years of service', value: '25+' },
  { label: 'Specialists', value: '40+' },
  { label: 'Patients / year', value: '50k' },
  { label: 'Departments', value: '20+' },
]

const toneStyles = {
  blue: 'bg-primary-light text-primary',
  red: 'bg-red-50 text-red-600',
  teal: 'bg-teal-50 text-teal-600',
}

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Care that puts people first"
        description={`${hospital.name} brings together experienced doctors, modern facilities and a team that genuinely cares. This is a placeholder introduction — replace it with the real story of the hospital.`}
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <PlaceholderImage
            label="About image — our facilities"
            size="lg"
            tone="slate"
            className="h-72 w-full rounded-3xl shadow-lg sm:h-96"
          />
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Who we are
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              For more than two decades we have served our community with
              reliable, accessible healthcare. What began as a small clinic has
              grown into a full hospital and clinic — but our focus has never
              changed.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Placeholder paragraph — describe your mission, the range of
              services you offer and what patients can expect when they walk
              through your doors.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Get in touch
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our values
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The principles that guide every decision we make.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-surface p-6"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${toneStyles[value.tone] ?? toneStyles.blue}`}
                >
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <dl className="grid gap-8 rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-12 text-center sm:grid-cols-2 sm:px-12 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm font-medium text-blue-100">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
