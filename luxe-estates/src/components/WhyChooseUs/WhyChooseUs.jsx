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
      className="rounded-[2rem] border border-gray-200 bg-warm-white p-8 text-center shadow-lg"
    >
      <div className="text-5xl font-semibold text-gold mb-3">
        {count}
        {stat.suffix}
      </div>
      <p className="text-base font-medium text-dark-text">{stat.label}</p>
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
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Exceptional service, proven performance, and capital strategies designed for the elite investor.</p>
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
