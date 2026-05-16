import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Precious Days | Vera Level Group',
    template: '%s | Precious Days',
  },
  description:
    'Precious Days celebrates six friends, countless memories, and one forever family.',
  keywords: [
    'friends',
    'memories',
    'college friends',
    'gallery',
    'videos',
    'Precious Days',
  ],
  openGraph: {
    title: 'Precious Days',
    description:
      'Six souls. Countless memories. One forever family.',
    type: 'website',
    locale: 'en_US',
    images: ['/friends.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precious Days',
    description:
      'Six souls. Countless memories. One forever family.',
    images: ['/friends.jpeg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
