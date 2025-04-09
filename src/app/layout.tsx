import './globals.css'

import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
})

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Barbearia Davano',
  description: 'Mais que um corte, uma experiência de cuidado estilo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfairDisplay.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="text-lg antialiased sm:text-xl">
        <main>{children}</main>
      </body>
    </html>
  )
}
