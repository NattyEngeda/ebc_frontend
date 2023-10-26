import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tewodros Demis',
  description: 'Tewodros Demis -Tewodros Dolomite Mining and Supply',
  openGraph: {
    title: 'Tewodrow Demis',
    description: 'Tewodros Demis -Tewodros Dolomite Mining and Supply',
    url: 'https://ebc.vercel.app/cards/teddy',
    type: 'website',
    images: [
      {
        url: '/teddy/images/seo-image.png',
        width: 1200,
        height: 630,
        alt: 'Tewodros Demis -Tewodros Dolomite Mining and Supply',
      }
    ]
  }
}


export default function TeddyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="icon" href="/teddy/images/logo.gif" sizes="any" />
      <div>
        {children}
      </div>
    </>
  )
}
