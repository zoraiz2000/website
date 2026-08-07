'use client'

import { useId, useState } from 'react'
import { useReveal } from '@/hooks/useReveal'

function Chevron({ open }) {
  return (
    <svg
      className={`exp-card__chevron ${open ? 'is-open' : ''}`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CompanyLogo({ job }) {
  const [failed, setFailed] = useState(false)
  const initials = job.company
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  if (!job.logo || failed) {
    return (
      <div className="exp-card__logo exp-card__logo--fallback" aria-hidden="true">
        <span>{initials}</span>
      </div>
    )
  }

  return (
    <div className="exp-card__logo">
      <img
        src={job.logo}
        alt=""
        onError={() => setFailed(true)}
      />
    </div>
  )
}

function ExperienceCard({ job }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <article className={`exp-card ${open ? 'is-open' : ''}`}>
      <div className="exp-card__top">
        <div className="exp-card__identity">
          <CompanyLogo job={job} />
          <div className="exp-card__who">
            <p className="exp-card__company">{job.company}</p>
            <h3 className="exp-card__title">{job.title}</h3>
          </div>
        </div>
        <div className="exp-card__meta">
          <span>{job.dates}</span>
          <span>{job.location}</span>
        </div>
      </div>

      <ul className="exp-card__tech" aria-label="Skills">
        {job.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <button
        type="button"
        className="exp-card__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{open ? 'Hide description' : 'Show description'}</span>
        <Chevron open={open} />
      </button>

      <div
        id={panelId}
        className={`exp-card__details ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="exp-card__details-inner">
          {job.summary ? <p className="exp-card__summary">{job.summary}</p> : null}
          <ul className="exp-card__bullets">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function Experience({ items }) {
  const { ref, visible } = useReveal()

  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className={`container reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="section-head">
          <p className="section-kicker">Work Experience</p>
          <h2 className="section-title" id="experience-title">
            Work experience
          </h2>
          <p className="section-lead">
            Roles where I shipped systems, shaped data pipelines, and learned by building.
          </p>
        </div>

        <ol className="timeline">
          {items.map((job, index) => (
            <li className="timeline__item" key={job.id} style={{ '--i': index }}>
              <div className="timeline__marker" aria-hidden="true" />
              <ExperienceCard job={job} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
