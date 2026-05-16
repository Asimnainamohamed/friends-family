import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#050505',
        panel: '#0b0d13',
        line: 'rgba(255,255,255,0.1)',
        mist: '#a8b0c2',
        electric: '#6ae4ff',
        violet: '#8b5cf6',
        orchid: '#c084fc',
      },
      boxShadow: {
        glow: '0 0 80px rgba(106, 228, 255, 0.16)',
        'glow-violet': '0 0 90px rgba(139, 92, 246, 0.18)',
      },
      backgroundImage: {
        'panel-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
