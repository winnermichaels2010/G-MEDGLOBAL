/**
 * Single source of truth for hospital details.
 * Placeholder values — replace with the real ones before launch.
 */

export const hospital = {
  name: 'G. MEDGLOBAL',
  shortName: 'G. MEDGLOBAL',
  tagline: 'Compassionate care, always within reach.',

  phone: '+1 555 0100',
  email: 'info@gmedglobal.com',

  address: {
    line1: '123 Healthcare Avenue',
    line2: 'Medical District',
    city: 'Your City',
    region: 'Your Region',
    postalCode: '00000',
    country: 'Your Country',
  },

  hours: {
    weekdays: 'Monday – Friday: 8:00 AM – 8:00 PM',
    saturday: 'Saturday: 9:00 AM – 3:00 PM',
    sunday: 'Sunday: Emergency only',
    emergency: 'Emergency: Open 24/7',
  },

  // Digits only, with country code and no "+" or spaces — e.g. '15550100'
  whatsapp: '15550100',

  emergencyPhone: '+1 555 0199',
}

export const formattedAddress = [
  hospital.address.line1,
  hospital.address.line2,
  `${hospital.address.city}, ${hospital.address.region} ${hospital.address.postalCode}`,
  hospital.address.country,
].filter(Boolean)

export const whatsappLink = `https://wa.me/${hospital.whatsapp}`

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Consultation', to: '/consultation' },
  { label: 'Contact', to: '/contact' },
]
