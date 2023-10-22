

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Styles 
import '../styles/Modal.css';


export const metadata: Metadata = {
  title: 'Yene Cards',
  description: 'Yene Cards Official Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        {children}
      </body>
    </html >
  )
}
