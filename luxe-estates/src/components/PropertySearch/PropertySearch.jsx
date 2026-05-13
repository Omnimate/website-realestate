import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi'

import 'swiper/css'
import 'swiper/css/navigation'

// Distinct, high-quality property images — each a unique world-class estate
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
    title: 'Villa Lumière',
    price: '$18.5M',
    location: 'Côte d\'Azur, France',
    description:
      'An architectural triumph perched above the Mediterranean — six suites, a cliff-edge infinity pool, and panoramic sea views that define the golden hour.',
    features: ['Infinity Pool', 'Private Helipad', 'Wine Cellar', 'Ocean View'],
  },
  {
    title: 'Palazzo Sereno',
    price: '$24.2M',
    location: 'Amalfi Coast, Italy',
    description:
      'A restored 18th-century palazzo with private boat access, frescoed ceilings, and terraced gardens cascading directly into the Tyrrhenian Sea.',
    features: ['Private Dock', 'Frescoed Ceilings', 'Terraced Gardens', 'Chef\'s Kitchen'],
  },
  {
    title: 'The Celestial Penthouse',
    price: '$32.0M',
    location: 'Dubai, UAE',
    description:
      'Occupying the entire 88th floor — a glass-wrapped sanctuary above the clouds with a private sky pool and 360° views of the Arabian Gulf.',
    features: ['Sky Pool', 'Private Lift', '360° Views', 'Smart Home'],
  },
  {
    title: 'Malibu Horizon',
    price: '$14.8M',
    location: 'Malibu, California',
    description:
      'Five hundred feet of Pacific frontage, a seamless indoor-outdoor flow, and a master suite that wakes you to the sound of breaking waves.',
    features: ['Beach Frontage', 'Guest House', 'Fire Pit', 'Spa'],
  },
  {
    title: 'Chalet Blanc',
    price: '$11.4M',
    location: 'Verbier, Switzerland',
    description:
      'Ski-in ski-out access to the finest slopes in the Alps, with hand-laid stone interiors, a barrel-vault wine cave, and a heated outdoor terrace.',
    features: ['Ski-In/Out', 'Wine Cave', 'Sauna', 'Mountain View'],
  },
  {
    title: 'Reef Manor',
    price: '$9.9M',
    location: 'Maldives',
    description:
      'An overwater estate built above living coral — crystal lagoon beneath glass floors, a private reef for diving, and a sunset pavilion like no other.',
    features: ['Overwater', 'Private Reef', 'Glass Floor', 'Sunset Pavilion'],
  },
]

function PropertyCard({ property, imageIndex }) {
  const imgSrc = property.image || PROPERTY_IMAGES[imageIndex % PROPERTY_IMAGES.length]

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      className="group relative overflow-hidden"
      style={{
        borderRadius: '4px',
        background: '#fff',
        boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden" style={{ height: '400px' }}>
        <img
          src={imgSrc}
          alt={property.title}
          loading="lazy"
          onError={(e) => {
            e.target.src = PROPERTY_IMAGES[0]
          }}
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.07]"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        {/* Price chip top-right */}
        <div
          className="absolute right-5 top-5 rounded-sm border border-[#d7b87b]/40 bg-black/55 px-4 py-2 backdrop-blur-xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#d7b87b]">
            From
          </span>
          <p className="mt-0.5 text-sm font-semibold text-white">
            {property.price}
          </p>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-7">
          <div className="flex items-center gap-2 mb-2">
            <FiMapPin size={10} className="text-[#d7b87b]" />
            <span
              className="text-[9px] uppercase tracking-[0.3em] text-white/70"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {property.location}
            </span>
          </div>
          <h3 className="text-3xl font-light text-white leading-tight">
            {property.title}
          </h3>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <p
          className="text-base leading-[1.85] text-[#6a5e52]"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: '0.88rem' }}
        >
          {property.description}
        </p>

        {/* Features */}
        <div className="mt-6 flex flex-wrap gap-2">
          {(property.features || []).map((feature) => (
            <span
              key={feature}
              style={{
                padding: '4px 14px',
                background: '#faf7f1',
                border: '1px solid rgba(199,168,107,0.2)',
                borderRadius: '2px',
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#9a8570',
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          className="my-6"
          style={{ height: '1px', background: 'linear-gradient(to right, rgba(199,168,107,0.3), transparent)' }}
        />

        {/* CTA */}
        <button
          type="button"
          className="group/btn flex w-full items-center justify-between rounded-sm border border-[#c7a86b]/30 bg-gradient-to-r from-[#c7a86b] via-[#e0ca90] to-[#f3e3b0] px-7 py-4 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(199,168,107,0.35)]"
        >
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#14110d]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            View Estate
          </span>
          <FiArrowUpRight
            size={14}
            className="text-[#14110d] transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
          />
        </button>
      </div>
    </motion.div>
  )
}

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
  imageIndex: PropTypes.number.isRequired,
}

function Properties({ properties }) {
  const displayProperties =
    Array.isArray(properties) && properties.length > 0
      ? properties
      : DEFAULT_PROPERTIES

  return (
    <section
      id="properties"
      className="overflow-hidden py-28 md:px-12"
      style={{
        background: 'linear-gradient(180deg, #f5f1ea 0%, #faf8f4 60%, #f0ece3 100%)',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <p
            className="mb-5 text-[10px] uppercase tracking-[0.45em] text-[#b79b5b]"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            Signature Collection
          </p>

          <h2
            className="max-w-3xl text-balance text-[clamp(2.4rem,5vw,4.2rem)] font-light leading-[1.05] text-[#151515]"
            style={{ letterSpacing: '-0.01em' }}
          >
            Estates Worth{' '}
            <em className="italic text-[#b79b5b]">Remembering</em>
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
            Each property is handpicked for architectural distinction, location prestige,
            and investment pedigree. These are not listings — they are legacies.
          </p>
        </motion.div>

        {/* SWIPER */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={28}
            slidesPerView={1.08}
            centeredSlides
            loop
            autoplay={{ delay: 4800, disableOnInteraction: false }}
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
                <PropertyCard property={property} imageIndex={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav arrows */}
          <button
            className="prop-prev absolute -left-5 top-1/2 z-10 -translate-y-1/2 hidden h-12 w-12 items-center justify-center rounded-full border border-[#c7a86b]/30 bg-white shadow-xl transition-all hover:border-[#c7a86b]/60 md:flex"
            style={{ color: '#c7a86b' }}
          >
            ←
          </button>
          <button
            className="prop-next absolute -right-5 top-1/2 z-10 -translate-y-1/2 hidden h-12 w-12 items-center justify-center rounded-full border border-[#c7a86b]/30 bg-white shadow-xl transition-all hover:border-[#c7a86b]/60 md:flex"
            style={{ color: '#c7a86b' }}
          >
            →
          </button>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <button
            type="button"
            onClick={() =>
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="rounded-full border border-[#c7a86b]/40 bg-transparent px-10 py-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9a7a45] transition-all duration-300 hover:border-[#c7a86b]/80 hover:bg-[#c7a86b]/6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Request Private Viewing
          </button>
        </motion.div>
      </div>
    </section>
  )
}

Properties.propTypes = {
  properties: PropTypes.array,
}

export default Properties