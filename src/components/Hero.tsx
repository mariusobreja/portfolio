import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'
import './Hero.css'

const fade = (delay: number): {
  initial: { opacity: number; y: number }
  animate: { opacity: number; y: number }
  transition: { duration: number; delay: number; ease: number[] }
} => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export default function Hero(): JSX.Element {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <motion.p className="hero-greeting" {...fade(0.1)}>
            Hi, my name is
          </motion.p>
          <motion.h1 {...fade(0.2)}>
            {siteData.name}.<br />
            <em>{siteData.tagline}</em>
          </motion.h1>
          <motion.p className="hero-sub" {...fade(0.35)}>
            {siteData.subtitle}
          </motion.p>
          <motion.p className="hero-langs" {...fade(0.45)}>
            <strong>{siteData.languages}</strong>
          </motion.p>
          <motion.div className="hero-ctas" {...fade(0.55)}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </motion.div>
        </div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="hero-card-badge">{siteData.availability}</div>
          {[
            { label: 'Experience', value: '5+', suffix: 'years' },
            { label: 'Primary Stack', value: 'React · Node.js · TypeScript', suffix: '' },
            { label: 'Location', value: siteData.location, suffix: '' },
            { label: 'Background', value: 'Engineering + Leadership', suffix: '' },
          ].map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-label">{s.label}</div>
              <div className="hero-stat-value">
                {s.value}
                {s.suffix && <small> {s.suffix}</small>}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
