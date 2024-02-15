import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/components/modal-provider'
import ToasterProvider from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'

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
        <CrispProvider />
        <body className={font.className}>
          <ModalProvider />
          <ToasterProvider />

          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
