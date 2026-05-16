import { motion } from 'framer-motion'
import { FiTrendingUp, FiGlobe, FiShield } from 'react-icons/fi'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function Investment() {
  const { ref, inView } = useScrollAnimation({
    threshold: 0.2,
  })

  const handleDiscover = () => {
    document
      .querySelector('#contact')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
  }

  const features = [
    {
      icon: FiTrendingUp,
      title: 'High Appreciation',
      text: 'Premium waterfront and skyline assets delivering long-term value growth and stable appreciation.',
    },
    {
      icon: FiGlobe,
      title: 'Global Portfolio',
      text: 'Access carefully reviewed opportunities across established and emerging property markets.',
    },
    {
      icon: FiShield,
      title: 'Secure Investments',
      text: 'Private acquisitions backed by trusted advisory, deep market intelligence, and premium partnerships.',
    },
  ]

  return (
    <motion.section
      id="investment"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative overflow-hidden bg-[#0f0f0f] px-6 py-20 text-white md:px-12 md:py-24"
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-0 h-[450px] w-[450px] rounded-full bg-[#d7b87b]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#d7b87b]/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#d7b87b]">
            Investment Intelligence
          </p>

          <h2 className="text-5xl font-semibold leading-tight md:text-6xl">
            Luxury Real Estate Built For Wealth Preservation
          </h2>

          <p className="mt-8 text-lg leading-9 text-white/70">
            Review residences, acquisitions, and property strategies for long-term portfolio planning.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-14 grid gap-8 md:mt-16 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-9"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d7b87b]/10 text-[#d7b87b]">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-white/70">
                  {feature.text}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* STATS */}
        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Average ROI
            </p>

            <h3 className="mt-5 text-6xl font-semibold text-[#d7b87b]">
              12%
            </h3>

            <p className="mt-4 text-base text-white/65">
              Annual appreciation in premium luxury markets.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Global Destinations
            </p>

            <h3 className="mt-5 text-6xl font-semibold text-[#d7b87b]">
              15+
            </h3>

            <p className="mt-4 text-base text-white/65">
              Elite investment hubs across the globe.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Luxury Assets
            </p>

            <h3 className="mt-5 text-6xl font-semibold text-[#d7b87b]">
              520+
            </h3>

            <p className="mt-4 text-base text-white/65">
              Curated residences and off-market properties.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center md:mt-16">
          <button
            type="button"
            onClick={handleDiscover}
            className="rounded-full bg-gradient-to-r from-[#c7a86b] via-[#e0ca90] to-[#f3e3b0] px-12 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#14110d] shadow-[0_30px_90px_rgba(199,168,107,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_45px_120px_rgba(199,168,107,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7b87b]"
          >
            Discover Investment Plans
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default Investment
