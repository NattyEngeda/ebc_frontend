import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function MainPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='w-full h-full'>
        {children}
      </main>
      <Footer />
    </>
  )
}
