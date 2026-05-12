import { useState } from 'react'
import './Gallery.css'

const photos = [
  { src: '/memories/IMG_7581.jpg',                caption: 'The whole squad 🔥',           size: 'large' },
  { src: '/memories/IMG-20231108-WA0010.jpg',     caption: 'Just vibing 😎',               size: 'small' },
  { src: '/memories/IMG-20241209-WA0044.jpg',     caption: 'Train adventures 🚂',          size: 'small' },
  { src: '/memories/IMG_7243.jpg',                caption: 'Winners! 🏆',                  size: 'medium' },
  { src: '/memories/IMG_8450.jpg',                caption: 'Squad goals 💫',               size: 'medium' },
  { src: '/memories/IMG-20250309-WA0063.jpg',     caption: 'College days ✨',              size: 'small' },
  { src: '/memories/IMG-20260306-WA0314.jpg',     caption: 'Always together 🤝',          size: 'small' },
  { src: '/memories/IMG_1246.jpg',                caption: 'Laughing forever 😂',          size: 'medium' },
  { src: '/memories/IMG_1377.jpg',                caption: 'Golden hour vibes 🌅',         size: 'small' },
  { src: '/memories/PXL_20231121_034816228.jpg',  caption: 'Precious moments 💛',         size: 'small' },
  { src: '/memories/20251208_170547.jpg',         caption: 'End of sem feels 📚',          size: 'medium' },
  { src: '/memories/IMG_3180.jpg',                caption: 'Best days ever 🌟',            size: 'small' },
  { src: '/memories/IMG_3193.jpg',                caption: 'Forever fam 👨‍👩‍👧‍👦',              size: 'small' },
  { src: '/memories/IMG_6159.jpg',                caption: 'Looking cool 😏',              size: 'small' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <span className="section-label">✦ Memory Lane ✦</span>
        <h2 className="section-title">Our <em>Gallery</em></h2>
      </div>

      <div className="gallery-grid">
        {photos.map((p, i) => (
          <div
            key={i}
            className={`gallery-item gallery-item--${p.size}`}
            onClick={() => setLightbox(i)}
          >
            <img src={p.src} alt={p.caption} loading="lazy" />
            <div className="gallery-overlay">
              <span>{p.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="lightbox-prev" onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length) }}>‹</button>
          <img src={photos[lightbox].src} alt={photos[lightbox].caption} onClick={e => e.stopPropagation()} />
          <p className="lightbox-caption">{photos[lightbox].caption}</p>
          <button className="lightbox-next" onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length) }}>›</button>
        </div>
      )}
    </section>
  )
}
