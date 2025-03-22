"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/contexts/auth-context"
import { useCart } from "@/contexts/cart-context"
import { CartSheet } from "@/components/cart-sheet"

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const { user } = useAuth()
  const { itemCount } = useCart()
  const router = useRouter()

  // Detectar scroll para mudar o estilo do navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 60) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/busca?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Barra de informações de contato */}
      <div className="bg-teal-900 text-white py-2 hidden md:block">
        <div className="container px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200">
              <Phone className="h-3.5 w-3.5" />
              <span>(94) 99123-4567</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200">
              <Mail className="h-3.5 w-3.5" />
              <span>contato@vanelli.com.br</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200">
              <MapPin className="h-3.5 w-3.5" />
              <span>Av. VP-8, Folha 32, Quadra 7, Lote 23 - Nova Marabá, Marabá-PA</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200">
              <Clock className="h-3.5 w-3.5" />
              <span>Seg a Sáb: 08h - 19h</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Link href="https://facebook.com" target="_blank" className="text-white hover:text-accent transition-colors">
              <Facebook className="h-3.5 w-3.5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-white hover:text-accent transition-colors">
              <Instagram className="h-3.5 w-3.5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-white hover:text-accent transition-colors">
              <Twitter className="h-3.5 w-3.5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Banner superior com padrão de ondas */}
      <div className="bg-primary relative overflow-hidden">
        <div className="wave-background absolute inset-0 opacity-10 bg-wave-pattern"></div>
        <div className="container py-2 text-center text-white relative z-10">
          <p className="text-sm font-medium">Frete grátis para Marabá nas compras acima de R$ 150,00 →</p>
        </div>
      </div>

      {/* Barra de navegação principal com efeito de vidro quando rolado */}
      <nav className={`${scrolled ? 'glass-effect backdrop-blur-md border-b border-white/20 shadow-md' : 'bg-white/95 border-b shadow-sm'} transition-all duration-300`}>
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden btn-hover-effect">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="flex justify-center mb-6 mt-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vanellimag%20%282%29-0pUdczIj2dBkRohUK7qUHNRx5Ptkil.png"
                  alt="Papelaria Vanelli Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              
              {/* Informações de contato no menu mobile */}
              <div className="mb-6 p-4 bg-muted rounded-lg text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(94) 99123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Av. VP-8, Folha 32, Q.7, L.23 - Nova Marabá, Marabá-PA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Seg a Sáb: 08h - 19h</span>
                </div>
              </div>
              
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-medium text-primary hover:text-primary/80 transition-colors pl-1 border-l-2 border-transparent hover:border-accent">
                  Início
                </Link>
                <Link
                  href="/categorias"
                  className="text-lg font-medium text-primary hover:text-primary/80 transition-colors pl-1 border-l-2 border-transparent hover:border-accent"
                >
                  Categorias
                </Link>
                <Link
                  href="/colecoes"
                  className="text-lg font-medium text-primary hover:text-primary/80 transition-colors pl-1 border-l-2 border-transparent hover:border-accent"
                >
                  Coleções
                </Link>
                <Link
                  href="/marcas"
                  className="text-lg font-medium text-primary hover:text-primary/80 transition-colors pl-1 border-l-2 border-transparent hover:border-accent"
                >
                  Marcas
                </Link>
                <Link
                  href="/novidades"
                  className="text-lg font-medium text-primary hover:text-primary/80 transition-colors pl-1 border-l-2 border-transparent hover:border-accent"
                >
                  Novidades
                </Link>
                <Link
                  href="/promocoes"
                  className="text-lg font-medium text-primary hover:text-primary/80 transition-colors pl-1 border-l-2 border-transparent hover:border-accent"
                >
                  Promoções
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo com animação em hover */}
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <div className="overflow-hidden relative transition-all duration-300 group-hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vanellimag%20%282%29-0pUdczIj2dBkRohUK7qUHNRx5Ptkil.png"
                alt="Papelaria Vanelli Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Links de navegação desktop */}
          <div className="hidden gap-6 md:flex">
            <Link
              href="/categorias"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors link-underline"
            >
              Categorias
            </Link>
            <Link
              href="/colecoes"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors link-underline"
            >
              Coleções
            </Link>
            <Link
              href="/marcas"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors link-underline"
            >
              Marcas
            </Link>
            <Link
              href="/novidades"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors link-underline"
            >
              Novidades
            </Link>
            <Link
              href="/promocoes"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors link-underline"
            >
              Promoções
            </Link>
          </div>

          {/* Ações do usuário */}
          <div className="ml-auto flex items-center gap-2">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center">
                <Input
                  type="search"
                  placeholder="Buscar produtos..."
                  className="w-[200px] md:w-[300px] input-focus-effect"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="ml-1">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Fechar busca</span>
                </Button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="btn-hover-effect">
                <Search className="h-5 w-5" />
                <span className="sr-only">Buscar</span>
              </Button>
            )}

            <Button variant="ghost" size="icon" asChild className="btn-hover-effect relative">
              <Link href="/favoritos">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Favoritos</span>
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="btn-hover-effect relative">
              <Link href={user ? "/perfil" : "/login"}>
                <User className="h-5 w-5" />
                <span className="sr-only">Conta</span>
              </Link>
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="relative btn-hover-effect" 
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-xs text-primary flex items-center justify-center font-bold transition-all duration-300 scale-in-center">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Carrinho</span>
            </Button>
          </div>
        </div>
      </nav>

      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
    </header>
  )
}

