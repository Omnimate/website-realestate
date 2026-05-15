import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const fallbackImage = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'

function DestinationCard({ location }) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.18 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="group overflow-hidden rounded-2xl shadow-[0_18px_52px_rgba(0,0,0,0.08)]"
    >
      <div className="relative h-72 overflow-hidden rounded-2xl">
        <img
          alt={location.name}
          loading="lazy"
          decoding="async"
          src={location.image}
          onError={(event) => {
            event.target.src = fallbackImage
          }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-end p-6">
          <div>
            <h3 className="text-2xl font-semibold leading-tight text-white">{location.name}</h3>
            <p className="mt-2 text-sm leading-6 text-white/86">{location.description}</p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

DestinationCard.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

function Lifestyle({ locations }) {
  return (
    <section className="bg-warm-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="section-header">
          <h2>Lifestyle Destinations</h2>
          <p>Explore the locations that define modern luxury living across the globe.</p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <DestinationCard key={location.name} location={location} />
          ))}
        </div>
      </div>
    </section>
  )
}

Lifestyle.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Lifestyle
