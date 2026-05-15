import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'

const FALLBACK_HERO_IMAGE =
  'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1600&q=82'

function Hero({ heroData, onOpenModal }) {
  const { headline, subheadline, imageUrl } = heroData
  const shouldReduceMotion = useReducedMotion()
  const heroImage = imageUrl || FALLBACK_HERO_IMAGE

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, shouldReduceMotion ? 0 : -56])
  const opacity = useTransform(scrollY, [0, 420], [1, shouldReduceMotion ? 1 : 0.92])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.16,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.82,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black text-white"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      <motion.div style={{ y: heroY }} className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury estate"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ filter: 'brightness(0.66) saturate(1.08) contrast(1.04)' }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#080705]/96 via-[#080705]/34 to-[#080705]/54" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080705]/68 via-[#080705]/18 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_58%_at_70%_40%,rgba(215,185,110,0.1),transparent)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.58)]" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-32 text-center md:px-12"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span
            className="inline-flex max-w-full items-center gap-3 rounded-full border border-[#d7b87b]/25 bg-[#d7b87b]/10 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d7b87b] backdrop-blur-xl sm:px-6 sm:tracking-[0.34em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="hidden h-px w-6 bg-[#d7b87b]/60 sm:block" />
            Ultra Luxury Waterfront Estates
            <span className="hidden h-px w-6 bg-[#d7b87b]/60 sm:block" />
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="max-w-4xl text-balance text-[clamp(2.45rem,5.4vw,5.15rem)] font-light leading-[1.02] text-white drop-shadow-[0_8px_38px_rgba(0,0,0,0.78)]"
        >
          {headline || (
            <>
              Where Heaven
              <br />
              <em className="font-normal italic text-[#d7b87b]">Meets Estate</em>
            </>
          )}
        </motion.h1>

        <motion.div variants={itemVariants} className="my-8 flex items-center gap-4">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#d7b87b]/50" />
          <span className="h-1 w-1 rounded-full bg-[#d7b87b]/70" />
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#d7b87b]/50" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="max-w-xl text-base font-light leading-[1.9] text-white/82 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] md:text-lg"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          {subheadline ||
            'Private homes and off-market opportunities, considered with care.'}
        </motion.p>

        <motion.div variants={itemVariants} className="mt-11 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <motion.button
            whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() =>
              document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="min-h-12 rounded-full bg-gradient-to-r from-[#c7a86b] via-[#e3cc92] to-[#f3e3b0] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#14110d] shadow-[0_18px_48px_rgba(199,168,107,0.3)] transition-all duration-300 hover:shadow-[0_24px_64px_rgba(199,168,107,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7b87b] sm:px-10 sm:tracking-[0.24em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore Estates
          </motion.button>

          <motion.button
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onOpenModal}
            className="min-h-12 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-all duration-300 hover:border-[#d7b87b]/45 hover:bg-white/14 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-10 sm:tracking-[0.24em]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Private Consultation
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid w-full max-w-3xl gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-3"
        >
          {[
            { value: '15+', label: 'Prime Destinations' },
            { value: '520+', label: 'Luxury Estates' },
            { value: '12%', label: 'Avg. Annual ROI' },
          ].map((item, index) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center px-7 py-6"
              style={{
                borderRight: index < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <span className="text-3xl font-light text-white md:text-4xl">
                {item.value}
              </span>
              <span
                className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/55 sm:tracking-[0.35em]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

Hero.propTypes = {
  heroData: PropTypes.shape({
    headline: PropTypes.string,
    subheadline: PropTypes.string,
    videoUrl: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  onOpenModal: PropTypes.func.isRequired,
}

export default Hero
