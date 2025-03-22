"use client"

import { useRef, useState, useEffect } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SparklesIcon } from "lucide-react"

// Produtos em destaque organizados por categorias
const featuredProducts = {
  populares: [
    {
      id: 1,
      name: "Kit Escolar Completo",
      description: "Kit completo com caderno, canetas, lápis, borracha e muito mais para o ano letivo.",
      price: 149.9,
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=300&h=300&auto=format&fit=crop",
      discount: 20,
      badge: "Mais Vendido",
    },
    {
      id: 2,
      name: "Planner Anual 2024",
      description: "Organize seu ano com este planner completo com divisórias mensais e semanais.",
      price: 89.9,
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=300&h=300&auto=format&fit=crop",
      badge: "Novidade",
    },
    {
      id: 3,
      name: "Conjunto de Canetas Brush",
      description: "Conjunto com 24 canetas brush para lettering e desenhos artísticos.",
      price: 79.9,
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=300&h=300&auto=format&fit=crop",
      discount: 15,
    },
    {
      id: 4,
      name: "Mochila Executiva",
      description: "Mochila resistente com compartimento para notebook e diversos bolsos.",
      price: 199.9,
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=300&h=300&auto=format&fit=crop",
      discount: 10,
      badge: "Premium",
    },
  ],
  ofertas: [
    {
      id: 5,
      name: "Caderno Inteligente Grande",
      description: "Caderno com sistema de discos para adicionar ou remover folhas facilmente.",
      price: 119.9,
      image: "https://images.unsplash.com/photo-1544391591-51addd22cd29?q=80&w=300&h=300&auto=format&fit=crop",
      discount: 30,
      badge: "Oferta",
    },
    {
      id: 6,
      name: "Caixa de Lápis de Cor Profissional",
      description: "Caixa com 48 lápis de cor profissionais para desenho e ilustração.",
      price: 159.9,
      image: "https://images.unsplash.com/photo-1513364778587-6b6e81f10055?q=80&w=300&h=300&auto=format&fit=crop",
      discount: 25,
      badge: "Oferta",
    },
    {
      id: 7,
      name: "Calculadora Científica",
      description: "Calculadora científica com mais de 240 funções para estudantes e profissionais.",
      price: 89.9,
      image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=300&h=300&auto=format&fit=crop",
      discount: 20,
      badge: "Oferta",
    },
    {
      id: 8,
      name: "Kit Organizador de Mesa",
      description: "Kit completo para organização de mesa com porta-canetas, porta-clips e gavetas.",
      price: 79.9,
      image: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?q=80&w=300&h=300&auto=format&fit=crop",
      discount: 15,
      badge: "Oferta",
    },
  ],
  novidades: [
    {
      id: 9,
      name: "Caderno Digital Inteligente",
      description: "Caderno com sistema para transferir suas anotações para o smartphone.",
      price: 249.9,
      image: "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?q=80&w=300&h=300&auto=format&fit=crop",
      badge: "Novidade",
    },
    {
      id: 10,
      name: "Estojo Flex Premium",
      description: "Estojo premium expansível com diversos compartimentos e zíper reforçado.",
      price: 59.9,
      image: "https://images.unsplash.com/photo-1596207498818-c4a9cfe8c9c5?q=80&w=300&h=300&auto=format&fit=crop",
      badge: "Novidade",
    },
    {
      id: 11,
      name: "Canetas Gel Pastel",
      description: "Conjunto com 12 canetas gel em cores pastel para anotações e desenhos.",
      price: 42.9,
      image: "https://images.unsplash.com/photo-1587377884670-9e8c8d27505b?q=80&w=300&h=300&auto=format&fit=crop",
      badge: "Novidade",
    },
    {
      id: 12,
      name: "Mochila Antifurto Moderna",
      description: "Mochila com compartimentos ocultos, porta USB e tecido impermeável.",
      price: 149.9,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=300&h=300&auto=format&fit=crop",
      badge: "Novidade",
    },
  ],
}

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("populares")
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reset scroll position when tab changes
    if (gridRef.current) {
      gridRef.current.scrollTop = 0
    }
    
    // Add animation classes to products
    const elements = document.querySelectorAll('.product-item')
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('product-visible')
      }, 100 * index)
    })
  }, [activeTab])

  return (
    <div className="space-y-6">
      <Tabs defaultValue="populares" className="w-full" onValueChange={setActiveTab}>
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
          <div className="flex items-center mb-4 sm:mb-0">
            <SparklesIcon className="w-5 h-5 text-accent mr-2" />
            <TabsList className="bg-muted/50 p-1 rounded-lg">
              <TabsTrigger 
                value="populares"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                Mais Populares
              </TabsTrigger>
              <TabsTrigger 
                value="ofertas"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                Ofertas
              </TabsTrigger>
              <TabsTrigger 
                value="novidades"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
              >
                Novidades
              </TabsTrigger>
            </TabsList>
          </div>
          <Button variant="outline" className="border-accent text-primary hover:bg-accent/20">
            Ver Todos os Produtos
          </Button>
        </div>

        <TabsContent value="populares" className="mt-0">
          <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.populares.map((product, index) => (
              <div 
                key={product.id} 
                className="product-item opacity-0 translate-y-4 transition-all duration-500 ease-out"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ofertas" className="mt-0">
          <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.ofertas.map((product, index) => (
              <div 
                key={product.id} 
                className="product-item opacity-0 translate-y-4 transition-all duration-500 ease-out"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="novidades" className="mt-0">
          <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.novidades.map((product, index) => (
              <div 
                key={product.id} 
                className="product-item opacity-0 translate-y-4 transition-all duration-500 ease-out"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Adicionar ao CSS global
const styleSheet = document.createElement("style")
styleSheet.textContent = `
  .product-item {
    opacity: 0;
    transform: translateY(20px);
  }
  .product-visible {
    opacity: 1;
    transform: translateY(0);
  }
`
typeof document !== 'undefined' && document.head.appendChild(styleSheet)

