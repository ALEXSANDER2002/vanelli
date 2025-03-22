"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"

// Simulação de produtos para busca
const allProducts = [
  {
    id: 1,
    name: "Caderno Espiral Universitário 10 Matérias",
    price: 29.9,
    discount: 15,
    finalPrice: 25.42,
    image: "/placeholder.svg?height=300&width=300",
    category: "Material Escolar",
  },
  {
    id: 2,
    name: "Kit Canetas Coloridas 24 Cores",
    price: 24.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "Material Escolar",
  },
  {
    id: 3,
    name: "Mochila Escolar Resistente",
    price: 89.9,
    discount: 10,
    finalPrice: 80.91,
    image: "/placeholder.svg?height=300&width=300",
    category: "Mochilas",
  },
  {
    id: 4,
    name: "Agenda 2024 Capa Dura",
    price: 49.9,
    discount: 20,
    finalPrice: 39.92,
    image: "/placeholder.svg?height=300&width=300",
    category: "Agendas",
  },
  {
    id: 5,
    name: "Estojo Escolar Duplo",
    price: 34.9,
    image: "/placeholder.svg?height=300&width=300",
    category: "Material Escolar",
  },
  {
    id: 6,
    name: "Bloco de Notas Adesivas Coloridas",
    price: 12.9,
    image: "/placeholder.svg?height=300&width=300",
    category: "Escritório",
  },
  {
    id: 7,
    name: "Lapiseira 0.7mm Profissional",
    price: 18.5,
    image: "/placeholder.svg?height=300&width=300",
    category: "Escritório",
  },
  {
    id: 8,
    name: "Kit Marcadores Permanentes",
    price: 27.9,
    image: "/placeholder.svg?height=300&width=300",
    category: "Escritório",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState(query)

  useEffect(() => {
    if (query) {
      const results = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()),
      )
      setSearchResults(results)
      setSearchQuery(query)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const results = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setSearchResults(results)
  }

  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para a loja
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">Resultados da Busca</h1>
        <p className="mt-2 text-gray-600">
          {searchResults.length} {searchResults.length === 1 ? "resultado" : "resultados"} para "{query}"
        </p>

        <form onSubmit={handleSearch} className="mt-4 flex max-w-md gap-2">
          <Input
            type="search"
            placeholder="Buscar produtos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-primary hover:bg-primary-hover">
            Buscar
          </Button>
        </form>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border py-16">
          <h2 className="mb-2 text-2xl font-semibold">Nenhum resultado encontrado</h2>
          <p className="mb-6 text-gray-500">Tente buscar por outros termos ou categorias</p>
          <Button className="bg-primary hover:bg-primary-hover" asChild>
            <Link href="/">Voltar para a Loja</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

