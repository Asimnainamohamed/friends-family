import { useState } from 'react'
import './Nicknames.css'

const nicknames = [
  { name: 'Asim',    nick: 'Jokku!!',       color: '#c9a84c' },
  { name: 'Akash',   nick: 'Kumar',          color: '#8db5e2' },
  { name: 'Samuel',  nick: 'Pulii 🐯',       color: '#e28d8d' },
  { name: 'Ardra',   nick: 'Saavudiii 💀',   color: '#8de2b5' },
  { name: 'Sona',    nick: 'Jopiii ✨',       color: '#e2c58d' },
  { name: 'Mathesh', nick: 'Mutu Mathesh 🕵️', color: '#b58de2' },
]

export default function Nicknames() {
  const [revealed, setRevealed] = useState(false)
  const [active, setActive] = useState(null)

  return (
    <section className="nicks">
      <div className="nicks-inner">
        <span className="section-label">✦ Call Them By ✦</span>
        <h2 className="section-title">The Secret<br /><em>Nicknames</em></h2>

        {!revealed ? (
          <div className="nick-reveal-wrap">
            <p className="nick-hint">Dare to find out what they're really called?</p>
            <button className="nick-btn" onClick={() => setRevealed(true)}>
              <span>Reveal Nicknames</span>
              <span className="btn-shine" />
            </button>
          </div>
        ) : (
          <div className="nick-grid">
            {nicknames.map((n, i) => (
              <div
                key={n.name}
                className={`nick-card ${active === i ? 'active' : ''}`}
                style={{ '--accent': n.color, animationDelay: `${i * 0.08}s` }}
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="nick-real">{n.name}</span>
                <span className="nick-arrow">→</span>
                <span className="nick-name" style={{ color: n.color }}>{n.nick}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
