'use client'

import { useEffect, useRef, useState } from 'react'

function isInView(node) {
  const rect = node.getBoundingClientRect()
  const viewHeight = window.innerHeight || document.documentElement.clientHeight
  return rect.top < viewHeight && rect.bottom > 0
}

export function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const show = () => setVisible(true)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || isInView(node)) {
      show()
      return undefined
    }

    // threshold 0: any pixel counts. Tall sections (projects grid) often never
    // reach higher thresholds on real iPhone viewports (Chrome + Safari).
    // Avoid % rootMargin — iOS has historically been unreliable with it.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)

    // Safety net if the observer never fires (rare iOS edge cases).
    const fallback = window.setTimeout(() => {
      if (isInView(node)) show()
    }, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return { ref, visible }
}
