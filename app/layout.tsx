import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vertex Industries - HDPE Woven Mesh Solutions | Anti-Insect & Anti-Hail Nets",
  description:
    "Leading manufacturer and exporter of premium HDPE woven mesh products including Anti-Insect Nets and Anti-Hail Nets. BIS certified quality, UV stabilized, protecting crops across India and globally.",
  keywords:
    "HDPE mesh, anti-insect net, anti-hail net, agricultural protection, crop protection, greenhouse nets, farming solutions, Mumbai manufacturer",
  authors: [{ name: "Vertex Industries" }],
  openGraph: {
    title: "Vertex Industries - Premium HDPE Mesh Solutions",
    description:
      "Protecting crops with quality Anti-Insect and Anti-Hail Nets. BIS certified manufacturer and exporter.",
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
