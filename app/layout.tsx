import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tuba Jabeen - Web Developer Portfolio",
  description: "Fresh Computer Science graduate and Web Developer passionate about creating innovative web solutions",
  keywords: "web developer, computer science, react, next.js, portfolio, tuba jabeen",
  authors: [{ name: "Tuba Jabeen" }],
  openGraph: {
    title: "Tuba Jabeen - Web Developer Portfolio",
    description: "Fresh Computer Science graduate and Web Developer passionate about creating innovative web solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
