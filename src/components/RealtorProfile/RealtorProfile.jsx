import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { FiAward, FiShield, FiGlobe, FiArrowUpRight } from 'react-icons/fi'

const fallbackImage =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=82'

const trustCards = [
  {
    icon: FiAward,
    title: 'Market Judgment',
    description:
      'Guidance on significant homes, private opportunities, and the details that influence long-term value.',
  },
  {
    icon: FiShield,
    title: 'Discreet Advisory',
    description:
      'Searches are handled quietly, with clear communication and careful protection of client intent.',
  },
  {
    icon: FiGlobe,
    title: 'Selective Access',
    description:
      'Introductions across established markets, private sellers, and trusted local specialists.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9 } },
}

function RealtorProfile({ realtor }) {
  const {
    name,
    photo = fallbackImage,
    bio,
    experience,
    specializations = [],
    languages = [],
  } = realtor

  return (
    <section
      id="about"
      style={{
        background: 'linear-gradient(160deg, #0d0c0a 0%, #161410 60%, #1c1813 100%)',
        minHeight: '100vh',
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
        color: '#e8dcc8',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grain texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Decorative gold line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          height: '72px',
          background: 'linear-gradient(to bottom, transparent, #c7a86b)',
          zIndex: 1,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}
      >
        {/* HEADER */}
        <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p
            style={{
              fontSize: '11px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#c7a86b',
              marginBottom: '20px',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
            }}
          >
            Private Advisory
          </p>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 4.5vw, 3.65rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#f0e6d0',
              marginBottom: '20px',
              letterSpacing: '-0.01em',
            }}
          >
            Steady Guidance for{' '}
            <em style={{ color: '#c7a86b', fontStyle: 'italic' }}>Important Decisions</em>
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.75,
              color: '#a89880',
              maxWidth: '580px',
              margin: '0 auto',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
            }}
          >
            {bio}
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* LEFT COLUMN - Image */}
          <motion.div variants={fadeIn} style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '2px',
                border: '1px solid rgba(199,168,107,0.15)',
              }}
            >
              <img
                src={photo}
                alt={name}
                onError={(e) => {
                  e.target.src = fallbackImage
                }}
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                  objectPosition: 'center 18%',
                  display: 'block',
                  filter: 'saturate(0.92) contrast(1.04)',
                  transition: 'transform 1.4s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              />
              {/* Gradient overlay at bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '200px',
                  background:
                    'linear-gradient(to top, rgba(13,12,10,0.92) 0%, rgba(13,12,10,0.24) 62%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Experience badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1px',
                left: '24px',
                right: '24px',
                padding: '18px 22px',
                background: 'rgba(13,12,10,0.96)',
                borderTop: '1px solid rgba(199,168,107,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#6b5e4e',
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Experience
              </span>
              <span
                style={{
                  maxWidth: '68%',
                  fontSize: '0.92rem',
                  lineHeight: 1.55,
                  color: '#c7a86b',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                }}
              >
                {experience}
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Trust cards */}
            {trustCards.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  style={{
                    padding: '26px 28px',
                    border: '1px solid rgba(199,168,107,0.12)',
                    borderRadius: '2px',
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s, background 0.3s',
                  }}
                  whileHover={{
                    borderColor: 'rgba(199,168,107,0.35)',
                    background: 'rgba(199,168,107,0.04)',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid rgba(199,168,107,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: '#c7a86b',
                    }}
                  >
                    <Icon size={15} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: '0.8rem',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: '#c7a86b',
                        marginBottom: '6px',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.65,
                        color: '#8a7a69',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <FiArrowUpRight
                    size={14}
                    style={{ color: '#c7a86b', opacity: 0.5, flexShrink: 0, marginTop: '4px' }}
                  />
                </motion.div>
              )
            })}

            {/* Profile card */}
            <motion.div
              variants={fadeUp}
              style={{
                padding: '38px',
                border: '1px solid rgba(199,168,107,0.18)',
                borderRadius: '2px',
                background: 'rgba(199,168,107,0.03)',
              }}
            >
              {/* Name + title */}
              <div style={{ marginBottom: '28px' }}>
                <p
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: '#6b5e4e',
                    fontFamily: "'Montserrat', sans-serif",
                    marginBottom: '8px',
                  }}
                >
                  Lead Advisor
                </p>
                <h2
                  style={{
                    fontSize: '1.9rem',
                    fontWeight: 300,
                    color: '#f0e6d0',
                    letterSpacing: '0.02em',
                    marginBottom: '12px',
                  }}
                >
                  {name}
                </h2>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: '#7a6a58',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Advising on primary residences, discreet acquisitions, and property
                  decisions that require patience, context, and privacy.
                </p>
              </div>

              {/* Achievements */}
              <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Global Luxury Advisor', year: '2026' },
                  { label: '$620M+ in closed transactions', year: null },
                  { label: 'Trusted by family offices and private clients', year: null },
                  { label: 'Off-market acquisition advisory', year: null },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      paddingBottom: '10px',
                      borderBottom: '1px solid rgba(199,168,107,0.08)',
                    }}
                  >
                    <div
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: '#c7a86b',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.85rem',
                        color: '#a89880',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 300,
                        flex: 1,
                      }}
                    >
                      {item.label}
                    </span>
                    {item.year && (
                      <span
                        style={{
                          fontSize: '10px',
                          color: '#c7a86b',
                          fontFamily: "'Montserrat', sans-serif",
                          letterSpacing: '0.1em',
                        }}
                      >
                        {item.year}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                {specializations.length > 0 && (
                  <div>
                    <p
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: '#6b5e4e',
                        fontFamily: "'Montserrat', sans-serif",
                        marginBottom: '10px',
                      }}
                    >
                      Specializations
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {specializations.map((item) => (
                        <span
                          key={item}
                          style={{
                            padding: '5px 14px',
                            border: '1px solid rgba(199,168,107,0.25)',
                            borderRadius: '2px',
                            fontSize: '10px',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: '#c7a86b',
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {languages.length > 0 && (
                  <div>
                    <p
                      style={{
                        fontSize: '10px',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: '#6b5e4e',
                        fontFamily: "'Montserrat', sans-serif",
                        marginBottom: '10px',
                      }}
                    >
                      Languages
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {languages.map((item) => (
                        <span
                          key={item}
                          style={{
                            padding: '5px 14px',
                            background: 'rgba(199,168,107,0.08)',
                            borderRadius: '2px',
                            fontSize: '10px',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: '#a89880',
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() =>
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  style={{
                    flex: 1,
                    minWidth: '160px',
                    padding: '14px 24px',
                    background: 'linear-gradient(135deg, #c7a86b, #dcc18c, #f3dfaa)',
                    border: 'none',
                    borderRadius: '2px',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#14110d',
                    cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif",
                    boxShadow: '0 20px 60px rgba(199,168,107,0.25)',
                    transition: 'box-shadow 0.3s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 28px 80px rgba(199,168,107,0.4)'
                    e.target.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 20px 60px rgba(199,168,107,0.25)'
                    e.target.style.transform = 'translateY(0)'
                  }}
                >
                  Schedule Consultation
                </button>

                <button
                  type="button"
                  onClick={() =>
                    document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  style={{
                    flex: 1,
                    minWidth: '140px',
                    padding: '14px 24px',
                    background: 'transparent',
                    border: '1px solid rgba(199,168,107,0.35)',
                    borderRadius: '2px',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#c7a86b',
                    cursor: 'pointer',
                    fontFamily: "'Montserrat', sans-serif",
                    transition: 'border-color 0.3s, background 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'rgba(199,168,107,0.7)'
                    e.target.style.background = 'rgba(199,168,107,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(199,168,107,0.35)'
                    e.target.style.background = 'transparent'
                  }}
                >
                  View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

RealtorProfile.propTypes = {
  realtor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string,
    bio: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    specializations: PropTypes.arrayOf(PropTypes.string),
    languages: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default RealtorProfile
