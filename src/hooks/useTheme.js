'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

function getPreferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState('light')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setTheme(getPreferredTheme())
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme, ready])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
