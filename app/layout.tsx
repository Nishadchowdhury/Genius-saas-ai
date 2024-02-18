import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from '@/components/modal-provider'
import ToasterProvider from '@/components/toaster-provider'
import { CrispProvider } from '@/components/crisp-provider'
import { cn } from '@/lib/utils'


const font = Ubuntu({ subsets: ['cyrillic'], weight: "400" })

export const metadata: Metadata = {
  title: 'Swift',
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
        <body className={cn("text-white", font.className)}>
          <ModalProvider />
          <ToasterProvider />

          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
