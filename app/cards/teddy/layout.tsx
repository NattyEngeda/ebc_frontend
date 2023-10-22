import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tewodros',
  description: 'Tewodros Gold and Jewlery Shop',
}


export default function TeddyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
