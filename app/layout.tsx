import type { Metadata } from 'next'
import { DM_Serif_Display, Public_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/sections/Header'

const serifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif-display',
})

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PayAPI',
  description: 'Easy to use payment API for your next project',
}

const maxWidthStyles = ''

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${serifDisplay.className} ${publicSans.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
