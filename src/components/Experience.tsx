import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'
import './Experience.css'

export default function Experience(): JSX.Element {
  return (
    <section id="experience" className="experience-section">
      <div className="section-inner">
        <span className="section-label">03. Experience</span>
        <h2 className="section-title">Where I've Worked</h2>
        <div className="section-divider" />
        <div className="exp-list">
          {siteData.experience.map((exp, i) => (
            <motion.div
              key={i}
              className="exp-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className={`exp-dot${exp.dimmed ? ' exp-dot--dim' : ''}`} />
              <div className={`exp-content${exp.dimmed ? ' exp-content--dim' : ''}`}>
                <div className="exp-header">
                  <span className="exp-role">{exp.role}</span>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <div className="exp-company">@ {exp.company} · {exp.location}</div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
                {exp.stack && (
                  <p className="exp-stack">
                    <strong>Stack:</strong> {exp.stack}
                  </p>
                )}
                {exp.dimmed && (
                  <p className="exp-pre-eng">Pre-engineering leadership background</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
