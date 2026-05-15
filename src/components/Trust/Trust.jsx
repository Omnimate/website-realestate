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
      className="rounded-2xl border border-[#e7dfd2] bg-warm-white p-7 text-center shadow-[0_14px_42px_rgba(0,0,0,0.045)]"
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
        <Icon className="h-6 w-6" />
      </div>
      <p className="mb-2 text-4xl font-semibold text-gold">{item.value}</p>
      <p className="text-sm text-body-text">{item.label}</p>
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
    <section className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="section-header">
          <h2>Trust & Recognition</h2>
          <p>Trusted by clients, partners, and advisors who value discretion and consistent execution.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
