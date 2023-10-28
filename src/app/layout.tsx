import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'epk generator | tapped ai',
  description: 'create your unique electronic press kit (EPK) in minutes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
      <Analytics />
    </html>
  )
}
