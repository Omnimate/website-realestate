import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { FiAward, FiShield, FiUsers, FiCheckCircle } from 'react-icons/fi'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const badgeIcons = {
  'Global awards': FiAward,
  'Certified partners': FiShield,
  'Trusted lenders': FiUsers,
  'Private concierge': FiCheckCircle,
}

function TrustCard({ item }) {
  const Icon = badgeIcons[item.label] || FiCheckCircle
  const { ref, inView } = useScrollAnimation({ threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="rounded-[2rem] border border-gray-200 bg-warm-white p-8 text-center shadow-lg"
    >
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
        <Icon className="h-7 w-7" />
      </div>
      <p className="text-5xl font-semibold text-gold mb-3">{item.value}</p>
      <p className="text-base text-body-text">{item.label}</p>
    </motion.div>
  )
}

TrustCard.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
}

function Trust({ trustItems }) {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="section-header">
          <h2>Trust & Recognition</h2>
          <p>Recognized by global partners, industry peers, and elite clients for unparalleled delivery.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {trustItems.map((item) => (
            <TrustCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

Trust.propTypes = {
  trustItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Trust
