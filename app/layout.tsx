import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alpha - Car Marketplace',
  description: 'Find and buy your perfect car with Alpha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={inter.className}
      suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}

