import type { Metadata } from "next"
import { Raleway } from "next/font/google"

import { Analytics } from "@vercel/analytics/react"

import "./globals.css"

const raleway = Raleway({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "NFT New World",
  description: "See the NFT new world",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
