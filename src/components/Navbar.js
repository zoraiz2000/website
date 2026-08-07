'use client'

import { useEffect, useId, useState } from 'react'
import { IconClose, IconMenu, IconMoon, IconSun } from './Icons'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeId, theme, onToggleTheme, resumeUrl, name }) {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#about" onClick={close}>
          <span className="nav__mark" aria-hidden="true">
            {(name || 'Z').slice(0, 1)}
          </span>
          <span>{name || 'Zoraiz'}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? 'is-active' : undefined}
              aria-current={activeId === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="nav__icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
          <a
            className="btn btn-primary btn-nav nav__resume"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
          <button
            type="button"
            className="nav__icon-btn nav__menu-btn"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div id={menuId} className={`nav__drawer ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav className="nav__drawer-links" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeId === link.id ? 'is-active' : undefined}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav__drawer-actions">
          <button type="button" className="btn btn-ghost" onClick={onToggleTheme}>
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
          <a
            className="btn btn-primary"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            View Resume
          </a>
        </div>
      </div>
    </header>
  )
}
