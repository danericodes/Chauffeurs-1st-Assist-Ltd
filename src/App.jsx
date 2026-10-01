import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import PageTransition from './components/PageTransition.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Fleet from './pages/Fleet.jsx'
import About from './pages/About.jsx'
import Quote from './pages/Quote.jsx'
import Contact from './pages/Contact.jsx'
import Terms from './pages/Terms.jsx'
import NotFound from './pages/NotFound.jsx'

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
      <ScrollProgress />
      <Navbar />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/about" element={<About />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
