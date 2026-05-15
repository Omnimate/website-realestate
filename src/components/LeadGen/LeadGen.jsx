import { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const NEWSLETTER_ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT
const LEAD_EMAIL = import.meta.env.VITE_LEAD_EMAIL || 'concierge@luxeestates.com'
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || ''
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function LeadGen({ onBookConsultation, onOpenChat, isChatOpen }) {
  const { ref, inView } = useScrollAnimation({
    threshold: 0.2,
  })

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const contactHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}`
    : `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent('Private luxury consultation')}`
  const contactLabel = WHATSAPP_NUMBER ? 'WhatsApp' : 'Email Us'

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setStatus('error')
      setMessage('Please enter your email address.')
      return
    }

    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    setMessage('')

    if (!NEWSLETTER_ENDPOINT) {
      const subject = encodeURIComponent('Luxury market insights subscription')
      const body = encodeURIComponent(`Please subscribe this email to market insights: ${email}`)
      window.location.href = `mailto:${LEAD_EMAIL}?subject=${subject}&body=${body}`
      setStatus('success')
      setMessage('Your email client is ready. Please send the message to complete subscription.')
      setEmail('')
      return
    }

    fetch(NEWSLETTER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source: 'leadgen_newsletter',
        submittedAt: new Date().toISOString(),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Newsletter submission failed')
        }

        setStatus('success')
        setMessage('You are subscribed to private market insights.')
        setEmail('')
      })
      .catch(() => {
        setStatus('error')
        setMessage('We could not subscribe you right now. Please try again.')
      })
  }

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative bg-[#f5f3ee] px-6 py-28 md:px-12"
    >
      <div
        className={`fixed right-4 z-40 flex gap-3 transition-opacity duration-300 max-sm:inset-x-4 max-sm:bottom-4 max-sm:grid max-sm:grid-cols-2 md:bottom-6 md:right-6 md:flex-col ${
          isChatOpen ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <a
          href={contactHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#c7a86b] to-[#e8d3a1] px-5 py-3 text-sm font-semibold text-[#14110d] shadow-[0_16px_42px_rgba(199,168,107,0.28)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7a86b]"
        >
          {contactLabel}
        </a>

        <button
          type="button"
          onClick={onOpenChat}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#c7a86b] bg-white px-5 py-3 text-sm font-semibold text-[#111] shadow-xl transition-all duration-300 hover:bg-[#111] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7a86b]"
        >
          Live Chat
        </button>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-[#e8e1d5] bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.06)] md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#b79b5b] md:tracking-[0.4em]">
                Private Consultation
              </p>

              <h2 className="text-4xl font-semibold leading-tight text-[#151515]">
                Speak With an Advisor
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5e5e5e]">
                Share what you are looking for. We will respond with a clear,
                private path for the next step.
              </p>
            </div>

            <button
              type="button"
              onClick={onBookConsultation}
              className="min-h-12 rounded-full bg-gradient-to-r from-[#c7a86b] via-[#dbc18b] to-[#f3e3b0] px-8 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#14110d] shadow-[0_20px_56px_rgba(199,168,107,0.26)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86b] md:px-10 md:tracking-[0.18em]"
            >
              Request Consultation
            </button>
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-5xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#b79b5b] md:tracking-[0.4em]">
            Market Notes
          </p>

          <h3 className="text-4xl font-semibold text-[#151515]">
            Receive Private Market Notes
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5e5e5e]">
            Occasional notes on pricing, private opportunities, and markets worth watching.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="mt-10 flex flex-col gap-4 rounded-[1.5rem] border border-[#e8e1d5] bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:flex-row md:p-5"
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email address"
              autoComplete="email"
              required
              aria-invalid={status === 'error'}
              aria-describedby={message ? 'newsletter-status' : undefined}
              className="min-h-12 flex-1 rounded-full border border-[#ece6db] bg-[#faf9f6] px-6 py-4 text-sm outline-none transition focus:border-[#c7a86b] focus-visible:ring-2 focus-visible:ring-[#c7a86b]/40"
            />

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="min-h-12 rounded-full bg-gradient-to-r from-[#c7a86b] to-[#e8d3a1] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#14110d] transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86b] disabled:cursor-not-allowed disabled:opacity-70 md:tracking-[0.18em]"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {message && (
            <p
              id="newsletter-status"
              className={`mx-auto mt-4 max-w-xl rounded-2xl px-4 py-3 text-sm ${
                status === 'error'
                  ? 'bg-red-50 text-red-700'
                  : 'bg-[#f8f4ec] text-[#6a5a3f]'
              }`}
            >
              {message}
            </p>
          )}

          <div className="mt-24 rounded-[2rem] border border-dashed border-[#d8cfbf] bg-white/60 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b79b5b] md:tracking-[0.35em]">
              Client Stories
            </p>

            <h4 className="mt-5 text-3xl font-semibold text-[#151515]">
              Client Stories Coming Soon
            </h4>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#5e5e5e]">
              We are preparing selected client stories with permission and care.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

LeadGen.propTypes = {
  onBookConsultation: PropTypes.func.isRequired,
  onOpenChat: PropTypes.func.isRequired,
  isChatOpen: PropTypes.bool,
}

LeadGen.defaultProps = {
  isChatOpen: false,
}

export default LeadGen
