import './globals.css'

import { Silkscreen } from 'next/font/google';

import NextAuthSessionProvider from './_providers/sessionProvider'
import Navbar from './_components/Navbar';

import Logo from "./_assets/logo/icons8-pixel-heart-100 (black).png"


const silkScreen = Silkscreen({
    subsets: ["latin"],
    style: "normal",
    weight: '400'
})


export const metadata = {
  title: 'Next.js Hackathon Template with Descope Next-Auth',
  description: 'Created by Eric Sheen',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={silkScreen.className}>
          <NextAuthSessionProvider>
            <Navbar Logo={Logo.src} />
            {children}
          </NextAuthSessionProvider>
      </body>
    </html>
  )
}


