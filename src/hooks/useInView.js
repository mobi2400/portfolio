import { useState, useEffect, useRef, useMemo } from 'react'

export const useInView = (options = {}) => {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  
  const { once, threshold, margin } = useMemo(() => ({
    once: options.once ?? false,
    threshold: options.threshold ?? 0.1,
    margin: options.margin ?? '0px',
  }), [options.once, options.threshold, options.margin])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold,
        rootMargin: margin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [once, threshold, margin])

  return [ref, isInView]
}

