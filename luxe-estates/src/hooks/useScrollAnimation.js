import { useInView } from 'react-intersection-observer'

export function useScrollAnimation(options = { triggerOnce: true, threshold: 0.15 }) {
  const [ref, inView] = useInView(options)
  return { ref, inView }
}
