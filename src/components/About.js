'use client'

import {
  SiAmazonwebservices,
  SiC,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiLua,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import { DiJava, DiDatabase } from 'react-icons/di'
import { BsMicrosoft } from 'react-icons/bs'
import { VscAzure } from 'react-icons/vsc'
import { IconGithub, IconLinkedin, IconMail } from './Icons'

const skillMeta = {
  sql: { Icon: DiDatabase, color: '#336791' },
  java: { Icon: DiJava, color: '#007396' },
  javascript: { Icon: SiJavascript, color: '#F7DF1E' },
  typescript: { Icon: SiTypescript, color: '#3178C6' },
  python: { Icon: SiPython, color: '#3776AB' },
  c: { Icon: SiC, color: '#A8B9CC' },
  lua: { Icon: SiLua, color: '#000080' },
  php: { Icon: SiPhp, color: '#777BB4' },
  htmlcss: { Icon: SiHtml5, color: '#E34F26' },
  react: { Icon: SiReact, color: '#61DAFB' },
  nextjs: { Icon: SiNextdotjs, color: '#000000' },
  nodejs: { Icon: SiNodedotjs, color: '#339933' },
  dotnet: { Icon: SiDotnet, color: '#512BD4' },
  mysql: { Icon: SiMysql, color: '#4479A1' },
  postgresql: { Icon: SiPostgresql, color: '#4169E1' },
  mongodb: { Icon: SiMongodb, color: '#47A248' },
  aws: { Icon: SiAmazonwebservices, color: '#FF9900' },
  fabric: { Icon: BsMicrosoft, color: '#00A4EF' },
  azure: { Icon: VscAzure, color: '#0078D4' },
  datalake: { Icon: VscAzure, color: '#0078D4' },
  docker: { Icon: SiDocker, color: '#2496ED' },
  linux: { Icon: SiLinux, color: '#FCC624' },
  nginx: { Icon: SiNginx, color: '#009639' },
}

function SkillTile({ item }) {
  const meta = skillMeta[item.icon] || { Icon: DiDatabase, color: '#5f6368' }
  const { Icon, color } = meta

  return (
    <li className="skill-tile">
      <span className="skill-tile__logo">
        {item.icon === 'htmlcss' ? (
          <>
            <SiHtml5 style={{ color: '#E34F26' }} aria-hidden="true" />
            <SiCss3 style={{ color: '#1572B6' }} aria-hidden="true" />
          </>
        ) : (
          <Icon style={{ color }} aria-hidden="true" />
        )}
      </span>
      <span className="skill-tile__name">{item.name}</span>
    </li>
  )
}

export default function About({ profile }) {
  const { about, skills, links, email, location, title, name } = profile

  return (
    <section className="about" id="about" aria-labelledby="about-name">
      <div className="container about__layout">
        <header className="about__intro">
          <div className="about__identity">
            <p className="about__greeting">Hi, I&apos;m</p>
            <div className="about__name-row">
              <h1 id="about-name" className="about__name">
                {name}
              </h1>
              <span className="about__wave" aria-hidden="true">
                👋
              </span>
            </div>
            <p className="about__title">{title}</p>

            <div className="about__meta">
              <span className="about__location">{location}</span>
              <div className="about__socials" aria-label="Social links">
                <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <IconGithub size={18} />
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <IconLinkedin size={18} />
                </a>
                <a href={`mailto:${email}`} aria-label="Email">
                  <IconMail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="about__copy">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </header>

        <aside className="about__skills" aria-label="Skills">
          <div className="about__skills-head">
            <p className="about__skills-label">Skills</p>
            <h2 className="about__skills-title">What I work with</h2>
          </div>

          <div className="about__skills-stack">
            {skills.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3 className="skill-group__title">{group.category}</h3>
                <ul className="skill-group__grid">
                  {group.items.map((item) => (
                    <SkillTile key={item.name} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
