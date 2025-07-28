import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tuba Jabeen - Web Developer Portfolio",
  description: "Fresh Computer Science graduate and Web Developer passionate about creating innovative web solutions",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
