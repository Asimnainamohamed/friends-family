import './About.css'

const members = [
  { name: 'Asim', role: 'The Entertainer', emoji: '🎭', desc: 'Always cracking jokes, never letting the vibe drop.' },
  { name: 'Akash', role: 'The Manager', emoji: '📋', desc: 'Keeps everyone in check. The backbone of the group.' },
  { name: 'Samuel', role: 'The Don', emoji: '😎', desc: 'Silent but powerful. Everyone knows his word is final.' },
  { name: 'Ardra', role: 'The Studious One', emoji: '📚', desc: 'Brains of the squad. Secretly everyone\'s tutor.' },
  { name: 'Sona', role: 'The Joyful One', emoji: '✨', desc: 'Her laugh is contagious. Pure happiness personified.' },
  { name: 'Mathesh', role: 'The Secret Agent', emoji: '🕵️', desc: 'Knows everything about everyone. Mystery wrapped in mystery.' },
]

export default function About() {
  return (
    <section className="about">
      <div className="about-header">
        <span className="section-label">✦ The Squad ✦</span>
        <h2 className="section-title">Vera Level<br /><em>Group</em></h2>
        <p className="about-desc">
          They met in college, they became a family. Six different souls with one shared story —
          full of chai, laughter, late nights, and memories that'll last a lifetime.
        </p>
      </div>

      <div className="members-grid">
        {members.map((m, i) => (
          <div className="member-card" key={m.name} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="member-emoji">{m.emoji}</div>
            <h3 className="member-name">{m.name}</h3>
            <p className="member-role">{m.role}</p>
            <p className="member-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
