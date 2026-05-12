import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(60px)'
    setTimeout(() => {
      el.style.transition = 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 300)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/memories/IMG_7581.jpg" alt="Friends" className="hero-img" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content" ref={titleRef}>
        <p className="hero-eyebrow">✦ Since 2022 ✦</p>
        <h1 className="hero-title">
          <span className="hero-title-line">Precious</span>
          <span className="hero-title-line italic">Days</span>
        </h1>
        <p className="hero-sub">Six souls. Countless memories. One forever family.</p>
        <a href="#gallery" className="hero-cta">Relive the moments ↓</a>
      </div>

      <div className="hero-scroll-hint">scroll</div>
    </section>
  )
}
