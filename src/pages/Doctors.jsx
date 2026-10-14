import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import { ArrowRightIcon } from '../components/ui/Icons'

const doctors = [
  {
    name: 'Dr. Adaeze Okonkwo',
    specialty: 'Cardiology',
    note: 'Heart health, diagnostics and preventive screening.',
    tone: 'slate',
  },
  {
    name: 'Dr. Michael Bennett',
    specialty: 'General Medicine',
    note: 'Family medicine, chronic care and health checks.',
    tone: 'blue',
  },
  {
    name: 'Dr. Sofia Alvarez',
    specialty: 'Pediatrics',
    note: 'Childhood development, vaccination and treatment.',
    tone: 'teal',
  },
  {
    name: 'Dr. Rajesh Menon',
    specialty: 'Surgery',
    note: 'General and minimally invasive procedures.',
    tone: 'slate',
  },
  {
    name: 'Dr. Grace Lim',
    specialty: 'Maternity & Obstetrics',
    note: 'Prenatal care, delivery and postnatal support.',
    tone: 'red',
  },
  {
    name: 'Dr. David Osei',
    specialty: 'Emergency Medicine',
    note: 'Urgent care, triage and trauma response.',
    tone: 'blue',
  },
]

export default function Doctors() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        title="Meet our doctors"
        description="A multidisciplinary team of qualified, board-certified specialists dedicated to your care. Placeholder profiles — replace with your real doctors."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <article
                key={doctor.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-surface transition-shadow hover:shadow-lg"
              >
                <PlaceholderImage
                  label={`Photo — ${doctor.name}`}
                  tone={doctor.tone}
                  size="lg"
                  className="h-56 w-full"
                />
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {doctor.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {doctor.specialty}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {doctor.note}
                  </p>
                  <Link
                    to="/consultation"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                  >
                    Book appointment
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Find the right specialist for you
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-blue-100">
              Tell us what you need and we will match you with the right member
              of our team.
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
