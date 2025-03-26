import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import { CartProvider } from "@/contexts/cart-context"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Papelaria Vanelli",
    description: "A melhor papelaria de Marabá-PA com produtos para escritório, escola e artesanato. Entrega rápida para toda a cidade.",
    generator: 'v0.dev'
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
        <head>
            <link rel="icon" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vanellimag%20%282%29-0pUdczIj2dBkRohUK7qUHNRx5Ptkil.png" />
        </head>
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
            <AuthProvider>
                <CartProvider>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <Footer />
                    <WhatsAppButton />
                    <Toaster />
                </CartProvider>
            </AuthProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}



import './globals.css'