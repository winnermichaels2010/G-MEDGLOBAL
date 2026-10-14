import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import {
  ArrowRightIcon,
  BabyIcon,
  CrossIcon,
  FlaskIcon,
  HeartIcon,
  PillIcon,
  StethoscopeIcon,
} from '../components/ui/Icons'

const services = [
  {
    title: 'General Medicine',
    description:
      'Consultations, health checks and ongoing management for everyday conditions and long-term care.',
    icon: StethoscopeIcon,
    tone: 'blue',
  },
  {
    title: 'Pediatrics',
    description:
      'Gentle, specialised care for infants, children and adolescents, from check-ups to treatment.',
    icon: BabyIcon,
    tone: 'teal',
  },
  {
    title: 'Maternity',
    description:
      'Prenatal care, safe delivery and postnatal support for mothers and their newborns.',
    icon: HeartIcon,
    tone: 'red',
  },
  {
    title: 'Surgery',
    description:
      'Modern operating theatres and skilled surgical teams for planned and urgent procedures.',
    icon: CrossIcon,
    tone: 'blue',
  },
  {
    title: 'Laboratory',
    description:
      'Reliable blood tests, diagnostics and imaging with results delivered quickly to your doctor.',
    icon: FlaskIcon,
    tone: 'teal',
  },
  {
    title: 'Pharmacy',
    description:
      'An on-site pharmacy with qualified pharmacists to dispense and explain your medication.',
    icon: PillIcon,
    tone: 'red',
  },
]

const toneStyles = {
  blue: 'bg-primary-light text-primary',
  red: 'bg-red-50 text-red-600',
  teal: 'bg-teal-50 text-teal-600',
}

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Healthcare for every stage of life"
        description="From routine visits to specialist treatment, our departments work together to give you complete, joined-up care. Placeholder copy — adjust each service to match your offering."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="mt-5 text-lg font-semibold text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <Link
                  to="/consultation"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  Book consultation
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-blue-100">
              Book a consultation and our team will guide you to the right
              specialist.
            </p>
            <Link
              to="/consultation"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-primary shadow-sm transition-colors hover:bg-primary-light"
            >
              Book Consultation
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
