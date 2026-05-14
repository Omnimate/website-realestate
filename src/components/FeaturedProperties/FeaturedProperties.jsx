import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const fallbackImage = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'

function PropertyCard({ property, onOpenInquiry }) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_40px_100px_rgba(0,0,0,0.14)]"
    >
      <div className="overflow-hidden rounded-t-[2rem]">
        <img
          alt={property.location}
          loading="lazy"
          decoding="async"
          src={property.image}
          onError={(event) => {
            event.target.src = fallbackImage
          }}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-5 p-7">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <span className="text-2xl font-semibold text-gold">{property.price}</span>
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-body-text">{property.location}</span>
        </div>
        <div className="text-lg font-medium text-dark-text">{property.size}</div>
        <ul className="space-y-2 text-sm text-body-text">
          {property.amenities.map((amenity) => (
            <li key={amenity} className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="w-full rounded-full border border-gold bg-white px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-white"
          onClick={onOpenInquiry}
          aria-label={`Inquire about ${property.location}`}
        >
          Quick Inquiry
        </button>
      </div>
    </motion.article>
  )
}

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onOpenInquiry: PropTypes.func.isRequired,
}

function FeaturedProperties({ properties, onOpenInquiry }) {
  return (
    <section id="properties" className="py-24 px-6 md:px-12 bg-warm-white">
      <div className="mx-auto max-w-7xl">
        <div className="section-header">
          <h2>Featured Properties</h2>
          <p>Curated estates with premium amenities tailored for world-class living.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} onOpenInquiry={onOpenInquiry} />
          ))}
        </div>
      </div>
    </section>
  )
}

FeaturedProperties.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      amenities: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
  onOpenInquiry: PropTypes.func.isRequired,
}

export default FeaturedProperties
