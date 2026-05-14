import { motion, useScroll, useTransform } from 'framer-motion'
import PropTypes from 'prop-types'

// Heavenly luxury property — infinity pool overlooking clouds/ocean at golden hour
const HEAVENLY_BG =
  'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=2400&q=90'

function Hero({ heroData, onOpenModal }) {
  const { headline, subheadline, videoUrl, imageUrl } = heroData

  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black text-white"
      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
    >
      {/* ── BACKGROUND IMAGE (heavenly property) ── */}
      <motion.div
        style={{ y: heroY }}
        className="absolute inset-0"
      >
        {/* Try video first; fall back to heavenly still */}
        {videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={HEAVENLY_BG}
            src={videoUrl}
            className="h-full w-full object-cover"
            style={{ filter: 'brightness(0.72) saturate(1.25) contrast(1.06)' }}
          />
        ) : (
          <img
            src={HEAVENLY_BG}
            alt="Luxury estate"
            className="h-full w-full object-cover"
            style={{ filter: 'brightness(0.72) saturate(1.25) contrast(1.06)' }}
          />
        )}

        {/* Layered atmospheric overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080705]/95 via-[#080705]/20 to-[#080705]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080705]/55 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_40%,rgba(215,185,110,0.18),transparent)]" />
        {/* Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.6)]" />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }}
        />
      </motion.div>

      {/* ── CONTENT ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center md:px-12"
      >
        {/* EYEBROW */}
        <motion.div variants={itemVariants} className="mb-8">
          <span
            className="inline-flex items-center gap-3 rounded-full border border-[#d7b87b]/25 bg-[#d7b87b]/8 px-6 py-2.5 text-[10px] uppercase tracking-[0.42em] text-[#d7b87b] backdrop-blur-xl"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            <span className="h-px w-6 bg-[#d7b87b]/60" />
            Ultra Luxury Waterfront Estates
            <span className="h-px w-6 bg-[#d7b87b]/60" />
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          variants={itemVariants}
          className="max-w-5xl text-balance text-[clamp(3rem,7vw,6.5rem)] font-light leading-[0.92] tracking-[-0.025em] text-white drop-shadow-[0_8px_48px_rgba(0,0,0,0.8)]"
        >
          {headline || (
            <>
              Where Heaven
              <br />
              <em className="font-normal italic text-[#d7b87b]">Meets Estate</em>
            </>
          )}
        </motion.h1>

        {/* RULE */}
        <motion.div
          variants={itemVariants}
          className="my-8 flex items-center gap-4"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#d7b87b]/50" />
          <span className="h-1 w-1 rounded-full bg-[#d7b87b]/70" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#d7b87b]/50" />
        </motion.div>

        {/* SUBTEXT */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-lg font-light leading-[1.85] text-white/75 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] md:text-xl"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
        >
          {subheadline ||
            'Residences beyond the public market — curated for those who inherit the extraordinary.'}
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() =>
              document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="rounded-full bg-gradient-to-r from-[#c7a86b] via-[#e3cc92] to-[#f3e3b0] px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#14110d] shadow-[0_24px_80px_rgba(199,168,107,0.45)] transition-all duration-500 hover:shadow-[0_36px_100px_rgba(199,168,107,0.65)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore Estates
          </motion.button>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onOpenModal}
            className="rounded-full border border-white/20 bg-white/8 px-12 py-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-xl transition-all duration-300 hover:border-[#d7b87b]/45 hover:bg-white/12"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Private Consultation
          </motion.button>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={itemVariants}
          className="mt-24 grid w-full max-w-3xl gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 backdrop-blur-xl md:grid-cols-3"
        >
          {[
            { value: '15+', label: 'Prime Destinations' },
            { value: '520+', label: 'Luxury Estates' },
            { value: '12%', label: 'Avg. Annual ROI' },
          ].map((item, i) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center px-8 py-7"
              style={{
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <span
                className="text-4xl font-light text-white md:text-5xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                {item.value}
              </span>
              <span
                className="mt-2 text-[9px] uppercase tracking-[0.35em] text-white/50"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* SCROLL HINT */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span
              className="text-[9px] uppercase tracking-[0.4em] text-white/35"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-[#d7b87b]/60 to-transparent" />
          </motion.div>
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