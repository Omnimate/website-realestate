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
      className="rounded-[2.5rem] border border-[#ebe4d6] bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.06)]"
    >
      <div className="text-6xl leading-none text-[#d7b87b]">
        “
      </div>

      <p className="mt-5 text-lg italic leading-9 text-[#5f5f5f]">
        {item.quote}
      </p>

      <div className="mt-8 flex items-center gap-4">

        <img
          src={item.photo || fallbackImage}
          alt={item.name}
          onError={(e) => {
            e.target.src = fallbackImage
          }}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h4 className="text-lg font-semibold text-[#151515]">
            {item.name}
          </h4>

          <p className="text-sm text-[#777]">
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

          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#b79b5b]">
            Client Experiences
          </p>

          <h2 className="text-5xl font-semibold text-[#151515]">
            Trusted By Elite Investors
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#5f5f5f]">
            Personalized luxury experiences crafted with discretion, trust, and exceptional market expertise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
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