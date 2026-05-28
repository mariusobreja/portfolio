import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'
import './Projects.css'

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <span className="section-label" style={{ color: 'var(--gold-light)' }}>04. Featured Work</span>
        <h2 className="section-title projects-title">Things I've Built</h2>
        <div className="section-divider" />
        <div className="projects-grid">
          {siteData.projects.map((p, i) => (
            <motion.div
              key={p.num}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="project-num">Project {p.num}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                {p.github && <a href={p.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>}
                {p.demo && <a href={p.demo} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {!p.github && !p.demo && <span className="project-link-muted">Private / Internal</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
