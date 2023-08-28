import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import type { Metadata } from 'next'
import { Atkinson_Hyperlegible } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const atkinson = Atkinson_Hyperlegible({weight: "400", subsets: ["latin-ext"]})

export const metadata: Metadata = {
  title: 'jotlog · notes for movers',
  description: 'blazingly fast, privacy focused, and always offline note-taking app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${atkinson.className} bg-[#F9FCF7] selection:bg-grape selection:text-white`}>
        <Nav/>
        {children}
        <Analytics />
        <Footer/>
      </body>
      
    </html>
  )
}
