import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'
import './About.css'

export default function About(): JSX.Element {
  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <span className="section-label">01. About me</span>
        <h2 className="section-title">
          Full-stack engineer with<br />a product mindset.
        </h2>
        <div className="section-divider" />
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {siteData.about.map((p, i) => <p key={i}>{p}</p>)}
          </motion.div>
          <div className="about-highlights">
            {siteData.highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="about-highlight"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <h4>{h.title}</h4>
                <p>{h.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
