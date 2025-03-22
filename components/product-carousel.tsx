"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Caderno Espiral Universitário 10 Matérias",
    price: 29.9,
    image: "https://images.unsplash.com/photo-1544239265-ee5eedde5469?q=80&w=200&h=200&auto=format&fit=crop",
    discount: 15,
    badge: "Novo",
  },
  {
    id: 2,
    name: "Caneta Gel Colorida - Kit com 10 cores",
    price: 24.5,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Estojo Escolar Duplo com Zíper",
    price: 34.9,
    image: "https://images.unsplash.com/photo-1596207498818-c4a9cfe8c9c5?q=80&w=200&h=200&auto=format&fit=crop",
    discount: 10,
  },
  {
    id: 4,
    name: "Bloco de Notas Adesivas Coloridas",
    price: 12.9,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Lapiseira 0.7mm Profissional",
    price: 18.5,
    image: "https://images.unsplash.com/photo-1595073752226-5ec8bf6c6d96?q=80&w=200&h=200&auto=format&fit=crop",
    badge: "Exclusivo",
  },
  {
    id: 6,
    name: "Agenda 2024 Capa Dura",
    price: 42.9,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=200&h=200&auto=format&fit=crop",
    discount: 20,
  },
  {
    id: 7,
    name: "Kit Marcadores Permanentes",
    price: 27.9,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Mochila Escolar Resistente à Água",
    price: 89.9,
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=200&h=200&auto=format&fit=crop",
    discount: 5,
    badge: "Top",
  },
]

export function ProductCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const itemsPerPage = 4 // Para diferentes tamanhos de tela, podemos usar valores diferentes
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      
      // Calcular o índice atual com base na posição de rolagem
      const newIndex = Math.round(scrollLeft / (clientWidth / itemsPerPage))
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      window.addEventListener("resize", checkScrollButtons)
      checkScrollButtons()
      return () => {
        container.removeEventListener("scroll", checkScrollButtons)
        window.removeEventListener("resize", checkScrollButtons)
      }
    }
  }, [])

  const scrollLeft = () => {
    if (containerRef.current) {
      setIsScrolling(true)
      const { clientWidth } = containerRef.current
      containerRef.current.scrollBy({ left: -clientWidth, behavior: "smooth" })
      setTimeout(() => setIsScrolling(false), 500)
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      setIsScrolling(true)
      const { clientWidth } = containerRef.current
      containerRef.current.scrollBy({ left: clientWidth, behavior: "smooth" })
      setTimeout(() => setIsScrolling(false), 500)
    }
  }

  const scrollToPage = (index: number) => {
    if (containerRef.current) {
      setIsScrolling(true)
      const { clientWidth } = containerRef.current
      const scrollAmount = (clientWidth / itemsPerPage) * index * itemsPerPage
      containerRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" })
      setTimeout(() => setIsScrolling(false), 500)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-primary hidden sm:block">Produtos recém-chegados</h3>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex gap-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === Math.floor(activeIndex / itemsPerPage)
                    ? "bg-primary w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => scrollToPage(index)}
                aria-label={`Página ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
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

