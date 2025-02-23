import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
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
    <html lang="en">
      <body
        className={`${playfairDisplay.className} ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
