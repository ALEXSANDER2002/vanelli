"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Caderno A4",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    discount: 15,
    badge: "Novo",
    href: "/produto/caderno-a4"
  },
  {
    id: 2,
    name: "Lápis de Cor",
    price: 19.90,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    href: "/produto/lapis-de-cor"
  },
  {
    id: 3,
    name: "Mochila Escolar",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a45?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    href: "/produto/mochila-escolar"
  },
  {
    id: 4,
    name: "Estojo",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    href: "/produto/estojo"
  },
  {
    id: 5,
    name: "Borracha",
    price: 4.90,
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    href: "/produto/borracha"
  },
  {
    id: 6,
    name: "Lápis",
    price: 2.90,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    href: "/produto/lapis"
  },
  {
    id: 7,
    name: "Caneta",
    price: 3.90,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    href: "/produto/caneta"
  },
  {
    id: 8,
    name: "Apontador",
    price: 5.90,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3",
    href: "/produto/apontador"
  }
]

export function ProductCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  const checkScrollButtons = () => {
    if (!containerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
  }

  useEffect(() => {
    checkScrollButtons()
    window.addEventListener("resize", checkScrollButtons)
    return () => window.removeEventListener("resize", checkScrollButtons)
  }, [])

  const scrollLeft = () => {
    if (!containerRef.current) return
    setIsScrolling(true)
    containerRef.current.scrollBy({
      left: -300,
      behavior: "smooth"
    })
    setTimeout(() => setIsScrolling(false), 500)
  }

  const scrollRight = () => {
    if (!containerRef.current) return
    setIsScrolling(true)
    containerRef.current.scrollBy({
      left: 300,
      behavior: "smooth"
    })
    setTimeout(() => setIsScrolling(false), 500)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Novidades</h2>
        <div className="flex items-center">
          <div className="flex space-x-2 mr-4">
            <Button
              variant="outline"
              size="icon"
              className={`h-9 w-9 rounded-full bg-white shadow-sm transition-all duration-300 ${
                canScrollLeft && !isScrolling
                  ? "opacity-100 hover:scale-105 hover:shadow-md"
                  : "opacity-30 cursor-not-allowed"
              }`}
              onClick={scrollLeft}
              disabled={!canScrollLeft || isScrolling}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Rolar para a esquerda</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`h-9 w-9 rounded-full bg-white shadow-sm transition-all duration-300 ${
                canScrollRight && !isScrolling
                  ? "opacity-100 hover:scale-105 hover:shadow-md"
                  : "opacity-30 cursor-not-allowed"
              }`}
              onClick={scrollRight}
              disabled={!canScrollRight || isScrolling}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Rolar para a direita</span>
            </Button>
          </div>
          <Link 
            href="/novidades" 
            className="hidden md:flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors ml-4"
          >
            Ver todos <MoveRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto pb-4 pt-2 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="min-w-[250px] max-w-[250px] transition-all duration-500"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        {/* Gradientes nas bordas para indicar continuação do conteúdo */}
        {canScrollLeft && (
          <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        )}
        {canScrollRight && (
          <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        )}
      </div>
      
      <div className="flex items-center justify-center mt-4 md:hidden">
        <Link 
          href="/novidades" 
          className="flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Ver todas as novidades <MoveRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  )
}