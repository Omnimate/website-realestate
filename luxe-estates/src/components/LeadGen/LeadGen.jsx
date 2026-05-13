import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function LeadGen({ onBookConsultation, onOpenChat }) {
  const { ref, inView } = useScrollAnimation({
    threshold: 0.2,
  })

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative bg-[#f5f3ee] px-6 py-24 md:px-12"
    >

      {/* FLOATING CONTACT */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c7a86b] to-[#e8d3a1] px-6 py-4 text-sm font-semibold text-[#14110d] shadow-[0_20px_60px_rgba(199,168,107,0.35)] transition-all duration-300 hover:-translate-y-1"
        >
          WhatsApp Us
        </a>

        <button
          type="button"
          onClick={onOpenChat}
          className="inline-flex items-center justify-center rounded-full border border-[#c7a86b] bg-white px-6 py-4 text-sm font-semibold text-[#111] shadow-xl transition-all duration-300 hover:bg-[#111] hover:text-white"
        >
          Live Chat
        </button>
      </div>

      <div className="mx-auto max-w-7xl">

        {/* CONSULTATION */}
        <div className="rounded-[2.5rem] border border-[#e8e1d5] bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.06)] md:p-12">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#b79b5b]">
                Private Consultation
              </p>

              <h2 className="text-4xl font-semibold leading-tight text-[#151515]">
                Speak With Our Luxury Advisors
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#5e5e5e]">
                Secure a confidential consultation tailored to your lifestyle,
                investment ambitions, and global property goals.
              </p>
            </div>

            <button
              type="button"
              onClick={onBookConsultation}
              className="rounded-full bg-gradient-to-r from-[#c7a86b] via-[#dbc18b] to-[#f3e3b0] px-10 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#14110d] shadow-[0_25px_70px_rgba(199,168,107,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* SUBSCRIBE */}
        <div className="mx-auto mt-20 max-w-5xl text-center">

          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#b79b5b]">
            Exclusive Updates
          </p>

          <h3 className="text-4xl font-semibold text-[#151515]">
            Subscribe for Market Insights
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5e5e5e]">
            Receive curated luxury market updates, investment opportunities,
            and exclusive estate launches.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-[#e8e1d5] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:flex-row"
          >

            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-[#ece6db] bg-[#faf9f6] px-6 py-5 text-sm outline-none transition focus:border-[#c7a86b]"
            />

            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-[#c7a86b] to-[#e8d3a1] px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#14110d] transition-all duration-300 hover:-translate-y-1"
            >
              Subscribe
            </button>
          </form>

          {/* TESTIMONIAL FIX */}
          <div className="mt-20 rounded-[2.5rem] border border-dashed border-[#d8cfbf] bg-white/60 p-10">

            <p className="text-xs uppercase tracking-[0.35em] text-[#b79b5b]">
              Client Testimonials
            </p>

            <h4 className="mt-5 text-3xl font-semibold text-[#151515]">
              Review Videos Coming Soon
            </h4>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#5e5e5e]">
              We are currently curating cinematic client success stories and
              luxury estate experiences.
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
}

export default LeadGen