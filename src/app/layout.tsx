import '~/css/global.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Container } from '~/components/container'
import Footer from '~/components/Footer'
import Navigation from '~/components/Navigation'

import { AppHooks } from './app-hooks'

const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: {
    default: 'next-typescript | SARGA(labs)©',
    template: '%s | SARGA(labs)©'
  },
  description: `A minimalist's boilerplate — Next.js with TypeScript.`,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    }
  ],
  manifest: '/manifest.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: 'next-typescript | SARGA(labs)©',
    creator: '@sargalabs',
    siteId: '@sargalabs'
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ opacity: 0 }} className={inter.variable}>
        <main>
          <Container className="main-wrapper">
            <Navigation />
            {children}
          </Container>
        </main>
        {/* @ts-expect-error Server Component */}
        <Footer />
        <AppHooks />
      </body>
    </html>
  )
}

export default RootLayout
