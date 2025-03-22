import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

// Simulação de dados de categorias
const categories = {
  "material-escolar": {
    id: 1,
    name: "Material Escolar",
    description: "Tudo o que você precisa para o ano letivo: cadernos, lápis, canetas e muito mais.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  escritorio: {
    id: 2,
    name: "Escritório",
    description: "Produtos para organizar e equipar seu escritório com qualidade e estilo.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  mochilas: {
    id: 3,
    name: "Mochilas",
    description: "Mochilas resistentes e estilosas para todas as idades e necessidades.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  // Outras categorias...
}

// Simulação de produtos por categoria
const productsByCategory = {
  "material-escolar": [
    {
      id: 1,
      name: "Caderno Espiral Universitário 10 Matérias",
      price: 29.9,
      discount: 15,
      finalPrice: 25.42,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Kit Canetas Coloridas 24 Cores",
      price: 24.5,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Lápis Preto HB Nº 2 (Caixa com 12)",
      price: 12.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Borracha Branca Macia",
      price: 2.5,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Apontador com Depósito",
      price: 4.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Tesoura Escolar Sem Ponta",
      price: 7.9,
      discount: 10,
      finalPrice: 7.11,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 7,
      name: "Cola Branca Lavável 90g",
      price: 5.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      name: "Régua 30cm Transparente",
      price: 3.9,
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  escritorio: [
    {
      id: 9,
      name: "Grampeador de Mesa 26/6",
      price: 19.9,
      discount: 10,
      finalPrice: 17.91,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 10,
      name: "Perfurador de Papel 2 Furos",
      price: 24.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 11,
      name: "Porta Canetas e Clips",
      price: 15.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 12,
      name: "Calculadora de Mesa 12 Dígitos",
      price: 29.9,
      discount: 15,
      finalPrice: 25.42,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 13,
      name: "Bloco Autoadesivo 76x76mm (100 folhas)",
      price: 7.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 14,
      name: "Pasta Suspensa Kraft (10 unidades)",
      price: 22.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 15,
      name: "Organizador de Mesa em Acrílico",
      price: 39.9,
      discount: 20,
      finalPrice: 31.92,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 16,
      name: "Porta Documentos A4",
      price: 18.9,
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  mochilas: [
    {
      id: 17,
      name: "Mochila Escolar Juvenil",
      price: 89.9,
      discount: 10,
      finalPrice: 80.91,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 18,
      name: "Mochila com Rodinhas Infantil",
      price: 129.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 19,
      name: 'Mochila para Notebook 15.6"',
      price: 149.9,
      discount: 15,
      finalPrice: 127.42,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 20,
      name: "Estojo Escolar Duplo",
      price: 34.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 21,
      name: "Lancheira Térmica Infantil",
      price: 49.9,
      discount: 20,
      finalPrice: 39.92,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 22,
      name: "Mochila Executiva",
      price: 199.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 23,
      name: "Bolsa Tote para Documentos",
      price: 79.9,
      discount: 10,
      finalPrice: 71.91,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 24,
      name: "Necessaire Organizadora",
      price: 29.9,
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  // Produtos para outras categorias...
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const category = categories[slug as keyof typeof categories] || {
    id: 0,
    name: "Categoria não encontrada",
    description: "Esta categoria não existe ou foi removida.",
    banner: "/placeholder.svg?height=400&width=1200",
  }

  const products = productsByCategory[slug as keyof typeof productsByCategory] || []

  return (
    <div className="container px-4 py-8 md:px-6">
      <Link
        href="/categorias"
        className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para categorias
      </Link>

      <div className="mb-8">
        <div className="relative mb-6 h-[200px] overflow-hidden rounded-lg md:h-[300px]">
          <Image
            src={category.banner || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold md:text-4xl">{category.name}</h1>
            <p className="mt-2 max-w-md text-white/90">{category.description}</p>
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
          <p className="mb-6 text-gray-500">Não encontramos produtos nesta categoria no momento.</p>
          <Button className="bg-primary hover:bg-primary-hover" asChild>
            <Link href="/">Explorar outras categorias</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

