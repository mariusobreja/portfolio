import { siteData } from '../data/siteData'
import './Footer.css'

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-copy">
          Designed &amp; built by {siteData.name} · {new Date().getFullYear()}
        </span>
        <div className="footer-links">
          <a href={siteData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${siteData.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
