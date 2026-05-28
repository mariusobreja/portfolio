import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'
import './Skills.css'

export default function Skills(): JSX.Element {
  return (
    <section id="skills" className="skills-section">
      <div className="section-inner">
        <span className="section-label">02. Skills</span>
        <h2 className="section-title">Technologies &amp; Strengths</h2>
        <div className="section-divider" />
        <div className="skills-grid">
          {siteData.skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              className="skill-group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="skill-group-title">{group.label}</div>
              <div className="skill-tags">
                {group.skills.map((s) => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
