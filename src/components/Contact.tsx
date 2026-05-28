import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteData } from '../data/siteData'
import './Contact.css'

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function Contact(): JSX.Element {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner contact-inner">
        <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>05. What's next?</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Get In Touch</h2>
        <div className="section-divider" style={{ margin: '0 auto 3rem' }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="contact-body">
            I'm currently open to new opportunities. Whether you have a role to discuss,
            want to collaborate on something interesting, or just want to say hi — I'd love
            to hear from you.
          </p>

          <form className="contact-form" onSubmit={(event): void => {
            void handleSubmit(event)
          }}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text" placeholder="Your name"
                  value={form.name} onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email" placeholder="your@email.com"
                  value={form.email} onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" placeholder="Tell me what's on your mind…"
                rows={5} value={form.message} onChange={handleChange}
                disabled={status === 'sending'}
              />
            </div>
            <button
              type="submit"
              className="btn-send"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="form-feedback form-feedback--success">
                Thanks! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-feedback form-feedback--error">
                Something went wrong — please email me directly.
              </p>
            )}
          </form>

          <div className="contact-direct">
            <a href={`mailto:${siteData.email}`} className="contact-email">
              {siteData.email}
            </a>
            <div className="contact-links">
              <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
              <a href={`tel:${siteData.phone}`} className="contact-link">{siteData.phone}</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
