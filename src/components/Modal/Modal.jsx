import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

function Modal({ isOpen, title, children, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return
      }

      const focusableElements = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (!firstElement || !lastElement) {
        return
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    previousFocusRef.current = document.activeElement
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      previousFocusRef.current?.focus?.()
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <motion.div
      aria-modal="true"
      aria-labelledby="modal-title"
      role="dialog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <h2 id="modal-title" className="text-2xl font-semibold text-dark-text">
            {title}
          </h2>

          <button
            ref={closeButtonRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-body-text transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            onClick={onClose}
            aria-label="Close modal"
          >
            x
          </button>
        </div>

        <div className="p-6">{children}</div>
      </motion.div>
    </motion.div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  children: null,
}

export default Modal
