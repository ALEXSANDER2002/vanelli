import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

// Simulação de dados de coleções
const collections = {
  "colecao-pastel": {
    id: 1,
    name: "Coleção Pastel",
    description: "Produtos em tons suaves e delicados para um visual clean e elegante.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  "colecao-neon": {
    id: 2,
    name: "Coleção Neon",
    description: "Cores vibrantes e chamativas para quem gosta de se destacar.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  "colecao-tropical": {
    id: 3,
    name: "Coleção Tropical",
    description: "Estampas e cores inspiradas na natureza tropical brasileira.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  // Outras coleções...
}

// Simulação de produtos por coleção
const productsByCollection = {
  "colecao-pastel": [
    {
      id: 1,
      name: "Caderno Espiral Capa Pastel A5",
      price: 29.9,
      discount: 10,
      finalPrice: 26.91,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Kit Canetas Gel Pastel 6 Cores",
      price: 19.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Bloco de Notas Adesivas Pastel",
      price: 12.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Marcadores Pastel 12 Cores",
      price: 24.9,
      discount: 15,
      finalPrice: 21.17,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Estojo Escolar Pastel",
      price: 34.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Agenda 2024 Capa Pastel",
      price: 49.9,
      discount: 10,
      finalPrice: 44.91,
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  "colecao-neon": [
    {
      id: 7,
      name: "Caderno Universitário Capa Neon",
      price: 34.9,
      discount: 10,
      finalPrice: 31.41,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      name: "Canetas Marca Texto Neon 6 Cores",
      price: 19.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 9,
      name: "Adesivos Decorativos Neon",
      price: 9.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 10,
      name: "Mochila Escolar Neon",
      price: 99.9,
      discount: 15,
      finalPrice: 84.92,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 11,
      name: "Régua Flexível Neon 30cm",
      price: 7.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 12,
      name: "Estojo Duplo Neon",
      price: 39.9,
      discount: 10,
      finalPrice: 35.91,
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  "colecao-tropical": [
    {
      id: 13,
      name: "Caderno Espiral Estampa Tropical",
      price: 32.9,
      discount: 10,
      finalPrice: 29.61,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 14,
      name: "Caneta Esferográfica Tropical 4 Cores",
      price: 14.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 15,
      name: "Bloco de Notas Tropical",
      price: 12.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 16,
      name: "Mochila Estampa Tropical",
      price: 109.9,
      discount: 15,
      finalPrice: 93.42,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 17,
      name: "Agenda 2024 Tropical",
      price: 54.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 18,
      name: "Necessaire Tropical",
      price: 29.9,
      discount: 10,
      finalPrice: 26.91,
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  // Produtos para outras coleções...
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const collection = collections[slug as keyof typeof collections] || {
    id: 0,
    name: "Coleção não encontrada",
    description: "Esta coleção não existe ou foi removida.",
    banner: "/placeholder.svg?height=400&width=1200",
  }

  const products = productsByCollection[slug as keyof typeof productsByCollection] || []

  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/colecoes" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para coleções
      </Link>

      <div className="mb-8">
        <div className="relative mb-6 h-[200px] overflow-hidden rounded-lg md:h-[300px]">
          <Image
            src={collection.banner || "/placeholder.svg"}
            alt={collection.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold md:text-4xl">{collection.name}</h1>
            <p className="mt-2 max-w-md text-white/90">{collection.description}</p>
          </div>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border py-16">
          <h2 className="mb-2 text-2xl font-semibold">Nenhum produto encontrado</h2>
          <p className="mb-6 text-gray-500">Não encontramos produtos nesta coleção no momento.</p>
          <Button className="bg-primary hover:bg-primary-hover" asChild>
            <Link href="/">Explorar outras coleções</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

