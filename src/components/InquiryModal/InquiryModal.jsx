import { useState } from 'react'
import PropTypes from 'prop-types'

const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT
const LEAD_EMAIL = import.meta.env.VITE_LEAD_EMAIL || 'concierge@luxeestates.com'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function InquiryModal({ source, onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitError('')

    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please share your requirements.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    const payload = {
      ...form,
      source,
      submittedAt: new Date().toISOString(),
    }

    const finishSuccess = (delivery = 'endpoint') => {
      onSuccess({ delivery })

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    }

    if (!LEAD_ENDPOINT) {
      const subject = encodeURIComponent(`Private luxury inquiry from ${form.name}`)
      const body = encodeURIComponent(
        [
          `Name: ${form.name}`,
          `Email: ${form.email}`,
          `Phone: ${form.phone}`,
          `Source: ${source}`,
          '',
          'Requirements:',
          form.message,
        ].join('\n'),
      )

      window.location.href = `mailto:${LEAD_EMAIL}?subject=${subject}&body=${body}`
      finishSuccess('email')
      setIsSubmitting(false)
      return
    }

    fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Lead submission failed')
        }

        finishSuccess('endpoint')
      })
      .catch(() => {
        setSubmitError('We could not submit your inquiry. Please try again or use WhatsApp for immediate support.')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-5 sm:space-y-6"
      >

        {/* HEADER */}
        <div>

          <p className="mb-2 text-[0.68rem] uppercase tracking-[0.28em] text-[#b79b5b] sm:mb-3 sm:text-xs sm:tracking-[0.35em]">
            Luxury Consultation
          </p>

          <h2 className="text-2xl font-semibold text-[#151515] sm:text-3xl">
            Private Inquiry
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#5f5f5f] sm:mt-4 sm:text-base sm:leading-7">
            Connect with our luxury property advisors for personalized recommendations and exclusive opportunities.
          </p>
        </div>

        {/* INPUTS */}
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">

          <div>
            <label htmlFor="inquiry-name" className="mb-1.5 block text-sm font-semibold text-[#151515] sm:mb-2">
              Name
            </label>

            <input
              id="inquiry-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'inquiry-name-error' : undefined}
              className="w-full rounded-xl border border-[#e8dfcf] bg-[#faf9f6] px-4 py-3 text-sm text-[#151515] outline-none transition focus:border-[#c7a86b] focus-visible:ring-2 focus-visible:ring-[#c7a86b]/40 sm:rounded-2xl sm:px-5 sm:py-4"
            />

            {errors.name && (
              <p id="inquiry-name-error" className="mt-2 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="inquiry-email" className="mb-1.5 block text-sm font-semibold text-[#151515] sm:mb-2">
              Email
            </label>

            <input
              id="inquiry-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'inquiry-email-error' : undefined}
              className="w-full rounded-xl border border-[#e8dfcf] bg-[#faf9f6] px-4 py-3 text-sm text-[#151515] outline-none transition focus:border-[#c7a86b] focus-visible:ring-2 focus-visible:ring-[#c7a86b]/40 sm:rounded-2xl sm:px-5 sm:py-4"
            />

            {errors.email && (
              <p id="inquiry-email-error" className="mt-2 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* PHONE */}
        <div>
          <label htmlFor="inquiry-phone" className="mb-1.5 block text-sm font-semibold text-[#151515] sm:mb-2">
            Phone Number
          </label>

          <input
            id="inquiry-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'inquiry-phone-error' : undefined}
            className="w-full rounded-xl border border-[#e8dfcf] bg-[#faf9f6] px-4 py-3 text-sm text-[#151515] outline-none transition focus:border-[#c7a86b] focus-visible:ring-2 focus-visible:ring-[#c7a86b]/40 sm:rounded-2xl sm:px-5 sm:py-4"
          />

          {errors.phone && (
            <p id="inquiry-phone-error" className="mt-2 text-sm text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label htmlFor="inquiry-message" className="mb-1.5 block text-sm font-semibold text-[#151515] sm:mb-2">
            Requirements
          </label>

          <textarea
            id="inquiry-message"
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'inquiry-message-error' : undefined}
            className="w-full rounded-xl border border-[#e8dfcf] bg-[#faf9f6] px-4 py-3 text-sm text-[#151515] outline-none transition focus:border-[#c7a86b] focus-visible:ring-2 focus-visible:ring-[#c7a86b]/40 sm:rounded-2xl sm:px-5 sm:py-4"
          />

          {errors.message && (
            <p id="inquiry-message-error" className="mt-2 text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <div className="sticky bottom-0 bg-white pb-[max(env(safe-area-inset-bottom),0px)] pt-2">
          {submitError && (
            <p className="mb-3 rounded-2xl bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="min-h-12 w-full rounded-full bg-gradient-to-r from-[#c7a86b] via-[#e0ca90] to-[#f3e3b0] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-[#14110d] shadow-[0_18px_50px_rgba(199,168,107,0.28)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86b] disabled:cursor-not-allowed disabled:opacity-70 sm:px-8 sm:py-5 sm:tracking-[0.18em] sm:shadow-[0_24px_70px_rgba(199,168,107,0.35)]"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </div>
      </form>
    </div>
  )
}

InquiryModal.propTypes = {
  source: PropTypes.string,
  onSuccess: PropTypes.func.isRequired,
}

InquiryModal.defaultProps = {
  source: 'general',
}

export default InquiryModal
