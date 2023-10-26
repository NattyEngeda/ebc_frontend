import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Yene Cards',
  description: 'Yene Cards Official Page Now',
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
