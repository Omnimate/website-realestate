import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiMapPin } from 'react-icons/fi'

import 'swiper/css'
import 'swiper/css/navigation'

const PROPERTY_IMAGES = [
  'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=85',
]

const DEFAULT_PROPERTIES = [
  {
    title: 'Villa Lumiere',
    price: '$18.5M',
    location: "Cote d'Azur, France",
    description:
      'An architectural triumph perched above the Mediterranean, with six suites, a cliff-edge infinity pool, and panoramic sea views.',
    features: ['Infinity Pool', 'Private Helipad', 'Wine Cellar', 'Ocean View'],
  },
  {
    title: 'Palazzo Sereno',
    price: '$24.2M',
    location: 'Amalfi Coast, Italy',
    description:
      'A restored 18th-century palazzo with private boat access, frescoed ceilings, and terraced gardens leading to the sea.',
    features: ['Private Dock', 'Frescoed Ceilings', 'Terraced Gardens', "Chef's Kitchen"],
  },
  {
    title: 'The Celestial Penthouse',
    price: '$32.0M',
    location: 'Dubai, UAE',
    description:
      'A glass-wrapped sanctuary above the skyline with a private sky pool and panoramic views of the Arabian Gulf.',
    features: ['Sky Pool', 'Private Lift', '360 Views', 'Smart Home'],
  },
  {
    title: 'Malibu Horizon',
    price: '$14.8M',
    location: 'Malibu, California',
    description:
      'Pacific frontage, a seamless indoor-outdoor flow, and a primary suite shaped around ocean views.',
    features: ['Beach Frontage', 'Guest House', 'Fire Pit', 'Spa'],
  },
  {
    title: 'Chalet Blanc',
    price: '$11.4M',
    location: 'Verbier, Switzerland',
    description:
      'Ski-in ski-out access with hand-laid stone interiors, a wine cave, sauna, and heated outdoor terrace.',
    features: ['Ski-In/Out', 'Wine Cave', 'Sauna', 'Mountain View'],
  },
  {
    title: 'Reef Manor',
    price: '$9.9M',
    location: 'Maldives',
    description:
      'An overwater estate with lagoon views, a private reef for diving, and a sunset pavilion for private hosting.',
    features: ['Overwater', 'Private Reef', 'Glass Floor', 'Sunset Pavilion'],
  },
]

function PropertyCard({ property, imageIndex, onOpenInquiry }) {
  const imgSrc = property.image || PROPERTY_IMAGES[imageIndex % PROPERTY_IMAGES.length]

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      className="group relative overflow-hidden rounded bg-white shadow-[0_30px_80px_rgba(0,0,0,0.1)]"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      <div className="relative h-[360px] overflow-hidden md:h-[400px]">
        <img
          src={imgSrc}
          alt={property.title}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.src = PROPERTY_IMAGES[0]
          }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        <div
          className="absolute right-5 top-5 rounded-sm border border-[#d7b87b]/40 bg-black/55 px-4 py-2 backdrop-blur-xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="text-[9px] uppercase tracking-[0.24em] text-[#d7b87b]">
            From
          </span>
          <p className="mt-0.5 text-sm font-semibold text-white">{property.price}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-7">
          <div className="mb-2 flex items-center gap-2">
            <FiMapPin size={12} aria-hidden="true" className="text-[#d7b87b]" />
            <span
              className="text-[9px] uppercase tracking-[0.24em] text-white/75"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {property.location}
            </span>
          </div>
          <h3 className="text-3xl font-light leading-tight text-white">
            {property.title}
          </h3>
        </div>
      </div>

      <div className="p-7 md:p-8">
        <p
          className="text-base leading-[1.85] text-[#6a5e52]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '0.88rem' }}
        >
          {property.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {(property.features || []).map((feature) => (
            <span
              key={feature}
              className="rounded-sm border border-[#c7a86b]/20 bg-[#faf7f1] px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#9a8570]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="my-6 h-px bg-gradient-to-r from-[#c7a86b]/30 to-transparent" />

        <button
          type="button"
          onClick={onOpenInquiry}
          className="group/btn flex min-h-12 w-full items-center justify-between rounded-sm border border-[#c7a86b]/30 bg-gradient-to-r from-[#c7a86b] via-[#e0ca90] to-[#f3e3b0] px-7 py-4 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(199,168,107,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86b]"
        >
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#14110d]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            View Estate
          </span>
          <FiArrowUpRight
            size={14}
            aria-hidden="true"
            className="text-[#14110d] transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
          />
        </button>
      </div>
    </motion.article>
  )
}

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
  imageIndex: PropTypes.number.isRequired,
  onOpenInquiry: PropTypes.func.isRequired,
}

function PropertySearch({ properties, onOpenInquiry }) {
  const displayProperties =
    Array.isArray(properties) && properties.length > 0
      ? properties
      : DEFAULT_PROPERTIES

  return (
    <section
      id="collection"
      className="overflow-hidden py-24 md:px-12 md:py-28"
      style={{
        background: 'linear-gradient(180deg, #f5f1ea 0%, #faf8f4 60%, #f0ece3 100%)',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <p
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b79b5b] md:tracking-[0.45em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Signature Collection
          </p>

          <h2 className="max-w-3xl text-balance text-[clamp(2.4rem,5vw,4.2rem)] font-light leading-[1.05] text-[#151515]">
            Estates Worth <em className="italic text-[#b79b5b]">Remembering</em>
          </h2>

          <div className="my-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#b79b5b]/50" />
            <span className="h-1 w-1 rounded-full bg-[#b79b5b]/70" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#b79b5b]/50" />
          </div>

          <p
            className="max-w-2xl text-[0.95rem] font-light leading-[1.85] text-[#7a6a58]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Each property is selected for architecture, setting, and long-term value.
            The focus is quality, not volume.
          </p>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1.04}
            centeredSlides
            loop
            autoplay={{ delay: 5200, disableOnInteraction: false }}
            navigation={{
              nextEl: '.prop-next',
              prevEl: '.prop-prev',
            }}
            breakpoints={{
              768: { slidesPerView: 2, centeredSlides: false },
              1280: { slidesPerView: 3, centeredSlides: false },
            }}
          >
            {displayProperties.map((property, index) => (
              <SwiperSlide key={`${property.title}-${index}`}>
                <PropertyCard
                  property={property}
                  imageIndex={index}
                  onOpenInquiry={onOpenInquiry}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="prop-prev absolute -left-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#c7a86b]/30 bg-white text-[#c7a86b] shadow-xl transition-all hover:border-[#c7a86b]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7a86b] md:flex"
            aria-label="Previous property"
          >
            <FiArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="prop-next absolute -right-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#c7a86b]/30 bg-white text-[#c7a86b] shadow-xl transition-all hover:border-[#c7a86b]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7a86b] md:flex"
            aria-label="Next property"
          >
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <button
            type="button"
            onClick={onOpenInquiry}
            className="min-h-12 rounded-full border border-[#c7a86b]/40 bg-transparent px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9a7a45] transition-all duration-300 hover:border-[#c7a86b]/80 hover:bg-[#c7a86b]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7a86b] md:px-10 md:tracking-[0.3em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Request Private Viewing
          </button>
        </motion.div>
      </div>
    </section>
  )
}

PropertySearch.propTypes = {
  properties: PropTypes.array,
  onOpenInquiry: PropTypes.func.isRequired,
}

PropertySearch.defaultProps = {
  properties: [],
}

export default PropertySearch
