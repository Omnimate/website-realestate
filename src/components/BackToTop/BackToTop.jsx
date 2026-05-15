import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.88 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          type="button"
          className="fixed bottom-6 left-6 z-40 rounded-full bg-gold px-4 py-3 text-sm font-semibold text-white shadow-2xl outline-none transition hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold max-sm:bottom-24"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
        >
          Top
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
