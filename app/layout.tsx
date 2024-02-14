import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/components/modal-provider'

const font = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genius',
  description: 'Ai Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
