import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useCounter } from '../../hooks/useCounter'

function StatCard({ stat }) {
  const { ref, inView } = useScrollAnimation({ threshold: 0.2 })
  const count = useCounter(stat.value, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="rounded-2xl border border-[#e7dfd2] bg-warm-white p-7 text-center shadow-[0_14px_42px_rgba(0,0,0,0.045)]"
    >
      <div className="mb-2 text-4xl font-semibold text-gold">
        {count}
        {stat.suffix}
      </div>
      <p className="text-sm font-medium text-dark-text">{stat.label}</p>
    </motion.div>
  )
}

StatCard.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    suffix: PropTypes.string,
  }).isRequired,
}

function WhyChooseUs({ stats }) {
  return (
    <section className="bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Clear advice, careful execution, and a measured approach to significant property decisions.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

WhyChooseUs.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      suffix: PropTypes.string,
    }),
  ).isRequired,
}

export default WhyChooseUs
