import { useState, useRef } from 'react'
import './Videos.css'

const videos = [
  { src: '/memories/VID-20241015-WA0131.mp4',    title: 'Squad Moments',       year: '2024' },
  { src: '/memories/VID_33450303_022636_047.mp4', title: 'Pure Vibes',          year: '2024' },
  { src: '/memories/VID-20241118-WA0009.mp4',     title: 'College Life',        year: '2024' },
  { src: '/memories/VID-20250307-WA0065.mp4',     title: 'Fun Times',           year: '2025' },
  { src: '/memories/VID-20240930-WA0008.mp4',     title: 'September Memories',  year: '2024' },
  { src: '/memories/VID-20240930-WA0007.mp4',     title: 'Golden Days',         year: '2024' },
  { src: '/memories/VID-20250511-WA0057.mp4',     title: 'Fresh Memories',      year: '2025' },
  { src: '/memories/VID-20250829-WA0000.mp4',     title: 'Forever Fam',         year: '2025' },
]

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)

  const toggle = () => {
    if (playing) { ref.current.pause(); setPlaying(false) }
    else { ref.current.play(); setPlaying(true) }
  }

  return (
    <div className="vid-card" onClick={toggle}>
      <video ref={ref} src={video.src} loop playsInline preload="metadata" className="vid-el" />
      <div className={`vid-overlay ${playing ? 'playing' : ''}`}>
        <div className="vid-play-btn">{playing ? '❚❚' : '▶'}</div>
        <div className="vid-info">
          <span className="vid-year">{video.year}</span>
          <span className="vid-title">{video.title}</span>
        </div>
      </div>
    </div>
  )
}

export default function Videos() {
  return (
    <section className="videos">
      <div className="videos-header">
        <span className="section-label">✦ Moving Memories ✦</span>
        <h2 className="section-title">Our <em>Videos</em></h2>
        <p className="videos-sub">Click to play • Click again to pause</p>
      </div>
      <div className="videos-grid">
        {videos.map((v, i) => <VideoCard key={i} video={v} />)}
      </div>
    </section>
  )
}
