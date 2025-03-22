"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/use-toast"
import { ProductCard } from "@/components/product-card"

// Simulação de produtos favoritos
const initialFavorites = [
  {
    id: 1,
    name: "Caderno Inteligente A5 com Folhas Destacáveis",
    price: 89.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Caderno com sistema de folhas destacáveis e capa personalizável.",
  },
  {
    id: 2,
    name: "Kit Canetas Brush Pastel com 12 Cores",
    price: 64.5,
    image: "/placeholder.svg?height=300&width=300",
    description: "Canetas brush com ponta flexível para lettering e desenhos.",
  },
  {
    id: 3,
    name: "Planner Anual 2024 Capa Dura",
    price: 79.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Planner completo com divisórias mensais, semanais e espaço para anotações.",
  },
  {
    id: 4,
    name: "Mochila Executiva com Porta Notebook",
    price: 199.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Mochila resistente à água com compartimento acolchoado para notebook.",
  },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(initialFavorites)
  const { isAuthenticated } = useAuth()
  const { toast } = useToast()

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id))
    toast({
      title: "Produto removido",
      description: "O produto foi removido dos seus favoritos.",
      variant: "default",
    })
  }

  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para a loja
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">Meus Favoritos</h1>
        <p className="mt-2 text-gray-600">Produtos que você salvou para comprar depois</p>
      </div>

      {favorites.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border py-16">
          <Heart className="mb-4 h-16 w-16 text-gray-300" />
          <h2 className="mb-2 text-2xl font-semibold">Sua lista de favoritos está vazia</h2>
          <p className="mb-6 text-gray-500">Adicione produtos aos seus favoritos para encontrá-los facilmente depois</p>
          <Button className="bg-primary hover:bg-primary-hover" size="lg" asChild>
            <Link href="/">Explorar Produtos</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

