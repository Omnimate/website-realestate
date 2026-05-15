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
      className="group overflow-hidden rounded-2xl border border-[#e7dfd2] bg-white shadow-[0_18px_50px_rgba(0,0,0,0.055)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_26px_70px_rgba(0,0,0,0.09)]"
    >
      <div className="overflow-hidden">
        <img
          alt={property.location}
          loading="lazy"
          decoding="async"
          src={property.image}
          onError={(event) => {
            event.target.src = fallbackImage
          }}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.035]"
        />
      </div>
      <div className="space-y-5 p-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <span className="text-2xl font-semibold leading-none text-gold">{property.price}</span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-body-text">{property.location}</span>
        </div>
        <div className="text-lg font-medium text-dark-text">{property.size}</div>
        <ul className="space-y-2 text-sm text-body-text">
          {property.amenities.map((amenity) => (
            <li key={amenity} className="flex items-center gap-3">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="min-h-12 w-full rounded-full border border-gold bg-white px-6 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
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
    <section id="properties" className="bg-warm-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="section-header">
          <h2>Featured Properties</h2>
          <p>Selected homes with strong settings, considered details, and room to live well.</p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
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
