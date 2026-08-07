'use client'

import { useReveal } from '@/hooks/useReveal'
import { IconExternal, IconGithub } from './Icons'

function ProjectPreview({ type }) {
  if (type === 'dashboard') {
    return (
      <div className="preview preview--dashboard" aria-hidden="true">
        <div className="preview__chrome">
          <span /><span /><span />
        </div>
        <div className="preview__dash">
          <div className="preview__stat" />
          <div className="preview__stat" />
          <div className="preview__stat" />
          <div className="preview__chart" />
          <div className="preview__list">
            <i /><i /><i /><i />
          </div>
        </div>
      </div>
    )
  }

  if (type === 'marketplace') {
    return (
      <div className="preview preview--market" aria-hidden="true">
        <div className="preview__search" />
        <div className="preview__tiles">
          <div /><div /><div /><div />
        </div>
      </div>
    )
  }

  if (type === 'charts') {
    return (
      <div className="preview preview--charts" aria-hidden="true">
        <div className="preview__bars">
          <span style={{ '--h': '48%' }} />
          <span style={{ '--h': '72%' }} />
          <span style={{ '--h': '38%' }} />
          <span style={{ '--h': '86%' }} />
          <span style={{ '--h': '60%' }} />
        </div>
      </div>
    )
  }

  if (type === 'planner') {
    return (
      <div className="preview preview--planner" aria-hidden="true">
        <div className="preview__week">
          <b /><b /><b /><b /><b /><b /><b />
        </div>
        <div className="preview__task" />
        <div className="preview__task preview__task--short" />
      </div>
    )
  }

  if (type === 'snes') {
    return (
      <div className="preview preview--snes" aria-hidden="true">
        <div className="snes-board">
          <div className="snes-board__chip">GPIO</div>
          <div className="snes-board__signals">
            <span>LATCH</span>
            <span>CLOCK</span>
            <span>DATA</span>
          </div>
          <div className="snes-board__wave">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>
        </div>
        <div className="snes-pad">
          <div className="snes-pad__dpad">
            <span /><span /><span /><span />
          </div>
          <div className="snes-pad__body">
            <em />
            <em />
          </div>
          <div className="snes-pad__faces">
            <b className="y" />
            <b className="x" />
            <b className="b" />
            <b className="a" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="preview preview--api" aria-hidden="true">
      <code>
        <span>SET</span> key value EX 60
      </code>
      <code>
        <span>GET</span> key → &quot;value&quot;
      </code>
      <code>
        <span>TTL</span> key → 42
      </code>
    </div>
  )
}

export default function Projects({ items }) {
  const { ref, visible } = useReveal()

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className={`container reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
        <div className="section-head">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title" id="projects-title">
            My projects
          </h2>
          <p className="section-lead">
            A compilation of projects I built, contributed to, or am still iterating on.
          </p>
        </div>

        <div className="project-grid">
          {items.map((project) => (
            <article
              key={project.id}
              className={`project-card project-card--${project.size} project-card--${project.accent}`}
            >
              <div className="project-card__top">
                <div className="project-card__copy">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul className="project-card__tech">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-card__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} on GitHub`}
                  >
                    <IconGithub />
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live demo`}
                    >
                      <IconExternal />
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="project-card__media">
                <ProjectPreview type={project.preview} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
