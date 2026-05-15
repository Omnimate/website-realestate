import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'

function Toast({ messages, onDismiss }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-6 z-50 flex flex-col items-center gap-3 px-4">
      <AnimatePresence>
        {messages.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="pointer-events-auto w-full max-w-xl rounded-3xl border border-gold/20 bg-white px-5 py-4 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.25em] text-gold">
                  Notification
                </p>
                <p className="mt-2 text-sm leading-6 text-dark-text">{toast.message}</p>
              </div>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-body-text hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                aria-label="Dismiss notification"
                onClick={() => onDismiss(toast.id)}
              >
                x
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

Toast.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDismiss: PropTypes.func.isRequired,
}

export default Toast
