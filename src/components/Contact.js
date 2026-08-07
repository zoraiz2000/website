'use client'

import { useReveal } from '@/hooks/useReveal'
import { IconGithub, IconLinkedin, IconMail } from './Icons'

export default function Contact({ profile }) {
  const { ref, visible } = useReveal()

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className={`container reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="section-head section-head--center">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title" id="contact-title">
            Let&apos;s connect
          </h2>
        </div>

        <ul className="contact__links">
          <li>
            <a href={`mailto:${profile.email}`}>
              <span className="contact__icon" aria-hidden="true">
                <IconMail size={22} />
              </span>
              <span className="contact__label">Email</span>
              <span className="contact__value">{profile.email}</span>
            </a>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <span className="contact__icon" aria-hidden="true">
                <IconLinkedin size={22} />
              </span>
              <span className="contact__label">LinkedIn</span>
              <span className="contact__value">zoraizkhan2000</span>
            </a>
          </li>
          <li>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              <span className="contact__icon" aria-hidden="true">
                <IconGithub size={22} />
              </span>
              <span className="contact__label">GitHub</span>
              <span className="contact__value">zoraiz2000</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
