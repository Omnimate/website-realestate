import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const fallbackImage =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'

function TestimonialCard({ item }) {
  const { ref, inView } = useScrollAnimation({
    threshold: 0.15,
  })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-[#ebe4d6] bg-white p-7 shadow-[0_16px_48px_rgba(0,0,0,0.045)]"
    >
      <div className="h-px w-12 bg-[#d7b87b]/70" />

      <p className="mt-6 text-base italic leading-8 text-[#5f5f5f]">
        {item.quote}
      </p>

      <div className="mt-8 flex items-center gap-4">
        <img
          src={item.photo || fallbackImage}
          alt={item.name}
          onError={(event) => {
            event.currentTarget.src = fallbackImage
          }}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h4 className="text-base font-semibold text-[#151515]">
            {item.name}
          </h4>

          <p className="text-sm text-[#6f6a62]">
            {item.location}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

TestimonialCard.propTypes = {
  item: PropTypes.object.isRequired,
}

function Testimonials({ testimonials }) {
  return (
    <section className="bg-[#f8f6f2] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[#b79b5b]">
            Client Experiences
          </p>

          <h2 className="font-heading text-[clamp(2.1rem,4vw,3.35rem)] font-semibold leading-tight text-[#151515]">
            Trusted By Elite Investors
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#5f5f5f]">
            Personalized luxury experiences crafted with discretion, trust, and exceptional market expertise.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.array.isRequired,
}

export default Testimonials
