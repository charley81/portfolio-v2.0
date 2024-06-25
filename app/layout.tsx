import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CSPostHogProvider } from './providers'
import MainMenu from '@/components/main-menu'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chris Harley | Personal Portfolio',
  description:
    'Chris is a UX Engineer with over 5 years of experience. He enjoys designing and building user-centered digital products.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={`${inter.className} bg-background text-foreground`}>
          <MainMenu />
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  )
}
