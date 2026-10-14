import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import NotFound from './components/ui/NotFound'
import About from './pages/About'
import Consultation from './pages/Consultation'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Emergency from './pages/Emergency'
import Home from './pages/Home'
import Services from './pages/Services'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
