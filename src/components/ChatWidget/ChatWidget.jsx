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
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-24 right-6 z-40 w-[min(95vw,360px)] rounded-[2rem] border border-gray-200 bg-white shadow-[0_32px_80px_rgba(0,0,0,0.12)]"
        >
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-dark-text">Live Chat</p>
                <p className="text-sm text-body-text">We’ll be with you shortly.</p>
              </div>
              <button
                type="button"
                className="text-xl text-body-text hover:text-charcoal"
                aria-label="Close chat widget"
                onClick={onClose}
              >
                ×
              </button>
            </div>
            <div className="mt-4 rounded-[1.75rem] bg-warm-white p-4 text-sm leading-6 text-body-text">
              <p className="font-medium text-dark-text mb-2">A boutique concierge awaits.</p>
              <p>Leave a quick note and one of our advisors will reach out by the next business hour.</p>
            </div>
            <button
              type="button"
              className="mt-4 w-full button button-primary"
              onClick={onClose}
              aria-label="Close chat widget"
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
