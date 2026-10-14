import {
  formattedAddress,
  hospital,
  whatsappLink,
} from '../config/hospital'
import PageHeader from '../components/ui/PageHeader'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from '../components/ui/Icons'

const telHref = `tel:${hospital.phone.replace(/\s/g, '')}`
const emergencyTelHref = `tel:${hospital.emergencyPhone.replace(/\s/g, '')}`

const openingHours = [
  hospital.hours.weekdays,
  hospital.hours.saturday,
  hospital.hours.sunday,
].map((entry) => {
  const [label, ...rest] = entry.split(': ')
  return { label, value: rest.join(': ') }
})

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We are here to help"
        description="Reach out by phone, email or WhatsApp, or visit us in person. Our team is ready to answer your questions."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Get in touch
              </h2>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Address
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {formattedAddress.join(', ')}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Phone
                    </p>
                    <a
                      href={telHref}
                      className="mt-1 block text-sm text-slate-600 transition-colors hover:text-primary"
                    >
                      {hospital.phone}
                    </a>
                    <a
                      href={emergencyTelHref}
                      className="mt-1 block text-sm font-medium text-red-600 transition-colors hover:text-red-700"
                    >
                      Emergency: {hospital.emergencyPhone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Email
                    </p>
                    <a
                      href={`mailto:${hospital.email}`}
                      className="mt-1 block break-all text-sm text-slate-600 transition-colors hover:text-primary"
                    >
                      {hospital.email}
                    </a>
                  </div>
                </li>
              </ul>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-muted p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                  Opening hours
                </h2>
              </div>
              <dl className="mt-6 divide-y divide-slate-200">
                {openingHours.map((slot) => (
                  <div
                    key={slot.label}
                    className="flex items-center justify-between py-3 text-sm"
                  >
                    <dt className="text-slate-600">{slot.label}</dt>
                    <dd className="font-medium text-slate-900">{slot.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                <ClockIcon className="h-5 w-5 shrink-0" />
                {hospital.hours.emergency}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <PlaceholderImage
            label="Map placeholder — our location"
            icon={MapPinIcon}
            size="lg"
            tone="slate"
            className="h-72 w-full rounded-3xl sm:h-96"
          />
        </div>
      </section>
    </>
  )
}
