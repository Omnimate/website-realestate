import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'

function ChatWidget({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="fixed bottom-6 right-4 z-40 w-[min(calc(100vw-2rem),360px)] rounded-[1.5rem] border border-gray-200 bg-white shadow-[0_32px_80px_rgba(0,0,0,0.12)] md:bottom-24 md:right-6"
          aria-label="Live chat"
        >
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-dark-text">Live Chat</p>
                <p className="text-sm text-body-text">We will be with you shortly.</p>
              </div>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-body-text hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Close chat widget"
                onClick={onClose}
              >
                x
              </button>
            </div>

            <div className="mt-4 rounded-[1.25rem] bg-warm-white p-4 text-sm leading-6 text-body-text">
              <p className="mb-2 font-medium text-dark-text">A boutique concierge awaits.</p>
              <p>Leave a quick note and one of our advisors will reach out by the next business hour.</p>
            </div>

            <button
              type="button"
              className="button button-primary mt-4 w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              onClick={onClose}
            >
              Close Chat
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

ChatWidget.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ChatWidget
