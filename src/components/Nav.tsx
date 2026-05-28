import { useState, useEffect } from 'react'
import { siteData } from '../data/siteData'
import './Nav.css'

const links = [
  { num: '01.', label: 'About', href: '#about' },
  { num: '02.', label: 'Skills', href: '#skills' },
  { num: '03.', label: 'Experience', href: '#experience' },
  { num: '04.', label: 'Projects', href: '#projects' },
  { num: '05.', label: 'Contact', href: '#contact' },
]

export default function Nav(): JSX.Element {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll)
    return (): void => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <span className="nav-logo">
          {siteData.name.split(' ')[0]}<span>.</span>
        </span>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>
                <span className="nav-num">{l.num}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
