import '@/app/globals.css'
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import { CartProvider } from "@/contexts/cart-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <AuthProvider>
        <CartProvider>
          <main className={inter.className}>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            <WhatsAppButton />
            <Toaster />
          </main>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
} 