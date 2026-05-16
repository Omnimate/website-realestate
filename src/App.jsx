import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import FeaturedProperties from './components/FeaturedProperties/FeaturedProperties'
import RealtorProfile from './components/RealtorProfile/RealtorProfile'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Investment from './components/Investment/Investment'
import Testimonials from './components/Testimonials/Testimonials'
import Lifestyle from './components/Lifestyle/Lifestyle'
import PropertySearch from './components/PropertySearch/PropertySearch'
import LeadGen from './components/LeadGen/LeadGen'
import Trust from './components/Trust/Trust'
import SeoContent from './components/SeoContent/SeoContent'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import Toast from './components/Toast/Toast'
import InquiryModal from './components/InquiryModal/InquiryModal'
import NotFound from './components/NotFound/NotFound'

import {
  heroData,
  properties,
  realtor,
  stats,
  testimonials,
  locations,
  trustItems,
  blogPosts,
} from './utils/data'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inquirySource, setInquirySource] = useState('general')

  const [toasts, setToasts] = useState([])

  const [pageLoaded, setPageLoaded] = useState(
    () =>
      typeof document !== 'undefined' &&
      document.readyState === 'complete',
  )

  /* ---------------- NAV LINKS ---------------- */

  const navLinks = [
    {
      label: 'Properties',
      href: '#properties',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Investment',
      href: '#investment',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ]

  /* ---------------- TOAST ---------------- */

  const addToast = (message) => {
    const id = Date.now()

    setToasts((prev) => [
      ...prev,
      {
        id,
        message,
      },
    ])

    window.setTimeout(() => {
      setToasts((prev) =>
        prev.filter((toast) => toast.id !== id),
      )
    }, 3500)
  }

  /* ---------------- HANDLERS ---------------- */

  const openInquiry = (source = 'general') => {
    setInquirySource(source)
    setIsModalOpen(true)
  }

  const handleInquirySuccess = ({ delivery }) => {
    const message =
      delivery === 'email'
        ? 'Your email client is ready with your inquiry. Please send it to complete your request.'
        : 'Your inquiry has been submitted successfully. A dedicated luxury advisor will contact you shortly.'

    addToast(
      message,
    )

    setIsModalOpen(false)
  }

  /* ---------------- PAGE LOADER ---------------- */

  useEffect(() => {
    if (pageLoaded) {
      return undefined
    }

    const onLoad = () => {
      setPageLoaded(true)
    }

    window.addEventListener('load', onLoad)

    return () => {
      window.removeEventListener('load', onLoad)
    }
  }, [pageLoaded])

  /* ---------------- APP ---------------- */

  return (
    <BrowserRouter>

      {/* PAGE LOADER */}
      <AnimatePresence>
        {!pageLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.6,
              },
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0f0f0f]"
          >

            <div className="flex flex-col items-center">

              <div className="h-20 w-20 animate-spin rounded-full border-[3px] border-[#d7b87b]/20 border-t-[#d7b87b]" />

              <p className="mt-8 text-xs uppercase tracking-[0.45em] text-white/70">
                Loading Luxury Experience
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* APP */}
      <div className="overflow-hidden bg-white text-[#151515]">

        {/* NAVBAR */}
        <Navbar
          logo="LUXE ESTATES"
          navLinks={navLinks}
          onOpenModal={() => openInquiry('navbar')}
        />

        {/* ROUTES */}
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                {/* HERO */}
                <Hero
                  heroData={heroData}
                  onOpenModal={() => openInquiry('hero_consultation')}
                />

                {/* PROPERTIES */}
                <FeaturedProperties
                  properties={properties || []}
                  onOpenInquiry={() => openInquiry('featured_property')}
                />

                {/* REALTOR */}
                <RealtorProfile
                  realtor={realtor}
                  stats={stats}
                />

                {/* WHY CHOOSE US */}
                <WhyChooseUs
                  stats={stats || []}
                />

                {/* INVESTMENT */}
                <Investment />

                {/* TESTIMONIALS */}
                <Testimonials
                  testimonials={testimonials || []}
                />

                {/* LIFESTYLE */}
                <Lifestyle
                  locations={locations || []}
                />

                {/* SEARCH */}
                <PropertySearch
                  onOpenInquiry={() => openInquiry('property_collection')}
                />

                {/* LEAD GENERATION */}
                <LeadGen
                  onBookConsultation={() =>
                    openInquiry('leadgen_consultation')
                  }
                />

                {/* TRUST */}
                <Trust
                  trustItems={trustItems || []}
                />

                {/* SEO CONTENT */}
                <SeoContent
                  blogPosts={blogPosts || []}
                />

                {/* FOOTER */}
                <Footer />
              </>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>

        {/* MODAL */}
        <AnimatePresence>
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              title="Private Luxury Inquiry"
              onClose={() =>
                setIsModalOpen(false)
              }
            >
              <InquiryModal
                source={inquirySource}
                onSuccess={
                  handleInquirySuccess
                }
              />
            </Modal>
          )}
        </AnimatePresence>

        {/* TOAST */}
        <Toast
          messages={toasts}
          onDismiss={(id) =>
            setToasts((prev) =>
              prev.filter(
                (toast) =>
                  toast.id !== id,
              ),
            )
          }
        />

      </div>
    </BrowserRouter>
  )
}

export default App
