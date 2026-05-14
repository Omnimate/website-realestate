import { useEffect, useRef, useState } from 'react'

export function useCounter(target, inView) {
  const [value, setValue] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!inView) {
      requestAnimationFrame(() => setValue(0))
      return () => {}
    }

    let startTime = null

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }

      const progress = Math.min((timestamp - startTime) / 900, 1)
      const nextValue = Math.round(progress * target)
      setValue(nextValue)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [target, inView])

  return value
}
