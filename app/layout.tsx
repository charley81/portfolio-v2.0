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
        <body
          className={`${inter.className} bg-background text-foreground relative`}
        >
          {/* color blurs */}
          <div className="bg-primary/40 absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-destructive/40 absolute -z-10 top-[-rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

          <MainMenu />

          {children}
        </body>
      </CSPostHogProvider>
    </html>
  )
}
