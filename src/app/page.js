'use client'

import { useEffect, useMemo } from 'react'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import { experience, profile, projects } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useTheme } from '@/hooks/useTheme'

const SECTION_IDS = ['about', 'experience', 'projects', 'contact']

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const sectionIds = useMemo(() => SECTION_IDS, [])
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
    if (!gaId) return

    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', gaId)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar
        activeId={activeId}
        theme={theme}
        onToggleTheme={toggleTheme}
        resumeUrl={profile.resumeUrl}
        name={profile.name}
      />
      <main id="main">
        <About profile={profile} />
        <Experience items={experience} />
        <Projects items={projects} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
