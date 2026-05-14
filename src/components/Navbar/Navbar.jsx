import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AnimatePresence,
  motion,
} from 'framer-motion'
import PropTypes from 'prop-types'

function Navbar({
  logo,
  navLinks,
  onOpenModal,
  onOpenChat,
}) {
  const [menuOpen, setMenuOpen] =
    useState(false)

  const [scrolled, setScrolled] =
    useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener(
      'scroll',
      handleScroll,
    )

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll,
      )
  }, [])

  const handleAnchorLink = (
    event,
    href,
  ) => {
    event.preventDefault()

    const section =
      document.querySelector(href)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    setMenuOpen(false)
  }

  return (
    <motion.header
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[#ece6db] bg-white/92 shadow-[0_12px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl'
          : 'bg-white/72 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between px-6 md:px-10">

        {/* LOGO */}
        <Link
          to="/"
          className="group relative overflow-hidden"
        >
          <span className="relative z-10 text-[1.1rem] font-semibold uppercase tracking-[0.35em] text-[#151515] transition duration-300 group-hover:text-[#b89554]">
            {logo}
          </span>

          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#b89554] transition-all duration-500 group-hover:w-full" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-3 lg:flex">

          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="relative"
            >
              <Link
                to={link.href}
                onClick={(e) =>
                  handleAnchorLink(
                    e,
                    link.href,
                  )
                }
                className="group relative flex items-center justify-center overflow-hidden rounded-full px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#2d2d2d] transition-all duration-300"
              >

                {/* HOVER BACKGROUND */}
                <span className="absolute inset-0 scale-0 rounded-full bg-[#f5ecdb] transition-all duration-300 group-hover:scale-100" />

                {/* TEXT */}
                <span className="relative z-10 transition-all duration-300 group-hover:text-[#b89554]">
                  {link.label}
                </span>

                {/* UNDERLINE */}
                <span className="absolute bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#b89554] transition-all duration-300 group-hover:w-8" />
              </Link>
            </motion.div>
          ))}

          {/* INQUIRY BUTTON */}
          <motion.button
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            type="button"
            onClick={onOpenModal}
            className="ml-3 rounded-full bg-gradient-to-r from-[#c7a86b] via-[#dcc18c] to-[#f3dfaa] px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#14110d] shadow-[0_18px_60px_rgba(199,168,107,0.24)] transition-all duration-300 hover:shadow-[0_24px_80px_rgba(199,168,107,0.35)]"
          >
            Inquiry
          </motion.button>

          {/* CHAT BUTTON */}
          <motion.button
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            type="button"
            onClick={onOpenChat}
            className="rounded-full border border-[#e4dccf] bg-white px-7 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#151515] transition-all duration-300 hover:border-[#b89554] hover:bg-[#f8f4ec] hover:text-[#b89554]"
          >
            Chat
          </motion.button>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5dfd4] bg-white lg:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-[2px] w-5 bg-[#151515]" />
            <span className="block h-[2px] w-5 bg-[#151515]" />
            <span className="block h-[2px] w-5 bg-[#151515]" />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="border-t border-[#ece6db] bg-white px-6 py-8 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={(e) =>
                    handleAnchorLink(
                      e,
                      link.href,
                    )
                  }
                  className="rounded-2xl px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.22em] text-[#151515] transition-all duration-300 hover:bg-[#f8f4ec] hover:text-[#b89554]"
                >
                  {link.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => {
                  onOpenModal()
                  setMenuOpen(false)
                }}
                className="mt-3 rounded-full bg-gradient-to-r from-[#c7a86b] via-[#dcc18c] to-[#f3dfaa] px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#14110d]"
              >
                Inquiry
              </button>

              <button
                type="button"
                onClick={() => {
                  onOpenChat()
                  setMenuOpen(false)
                }}
                className="rounded-full border border-[#e4dccf] px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#151515]"
              >
                Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,

  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label:
        PropTypes.string.isRequired,
      href:
        PropTypes.string.isRequired,
    }),
  ).isRequired,

  onOpenModal:
    PropTypes.func.isRequired,

  onOpenChat:
    PropTypes.func.isRequired,
}

export default Navbar