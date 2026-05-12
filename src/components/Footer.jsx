import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-title">
          <span className="footer-logo">Precious Days</span>
        </div>
        <p className="footer-quote">
          "Not siblings by blood, but brothers and sisters by choice."
        </p>
        <div className="footer-names">
          {['Asim', 'Akash', 'Samuel', 'Ardra', 'Sona', 'Mathesh'].map(n => (
            <span key={n} className="footer-name">{n}</span>
          ))}
        </div>
        <div className="footer-divider" />
        <p className="footer-copy">@2025 Precious Days · Made with ❤️ by Asim</p>
      </div>
    </footer>
  )
}
