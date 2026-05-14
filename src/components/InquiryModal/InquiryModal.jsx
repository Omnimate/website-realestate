import { useState } from 'react'
import PropTypes from 'prop-types'

function InquiryModal({ onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Please enter your phone number.'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Please share your requirements.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      onSuccess(form)

      setForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    }
  }

  return (
    <div className="max-h-[85vh] overflow-y-auto pr-2">

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-6"
      >

        {/* HEADER */}
        <div>

          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#b79b5b]">
            Luxury Consultation
          </p>

          <h2 className="text-3xl font-semibold text-[#151515]">
            Private Inquiry
          </h2>

          <p className="mt-4 text-base leading-7 text-[#5f5f5f]">
            Connect with our luxury property advisors for personalized recommendations and exclusive opportunities.
          </p>
        </div>

        {/* INPUTS */}
        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#151515]">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#e8dfcf] bg-[#faf9f6] px-5 py-4 text-sm text-[#151515] outline-none transition focus:border-[#c7a86b]"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#151515]">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#e8dfcf] bg-[#faf9f6] px-5 py-4 text-sm text-[#151515] outline-none transition focus:border-[#c7a86b]"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* PHONE */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#151515]">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#e8dfcf] bg-[#faf9f6] px-5 py-4 text-sm text-[#151515] outline-none transition focus:border-[#c7a86b]"
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#151515]">
            Requirements
          </label>

          <textarea
            rows={5}
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-2xl border border-[#e8dfcf] bg-[#faf9f6] px-5 py-4 text-sm text-[#151515] outline-none transition focus:border-[#c7a86b]"
          />

          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <div className="sticky bottom-0 bg-white pt-2">

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-[#c7a86b] via-[#e0ca90] to-[#f3e3b0] px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#14110d] shadow-[0_24px_70px_rgba(199,168,107,0.35)] transition-all duration-300 hover:-translate-y-1"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  )
}

InquiryModal.propTypes = {
  onSuccess: PropTypes.func.isRequired,
}

export default InquiryModal