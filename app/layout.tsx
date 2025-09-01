import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Container from '@/components/global/Container'
import Providers from './providers'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/toaster'
// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

export const metadata: Metadata = {
  title: 'Next storefront',
  description: 'A nifty store built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body>
          <Providers>
            <Navbar />
            <Container className="py-20">{children}</Container>
            <Toaster />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
