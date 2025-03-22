import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ProductCard } from "@/components/product-card"

const promotionProducts = [
  {
    id: 1,
    name: "Kit Escolar Completo",
    price: 149.9,
    discount: 20,
    finalPrice: 119.92,
    image: "/placeholder.svg?height=300&width=300",
    description: "Kit completo com caderno, canetas, lápis, borracha e muito mais.",
  },
  {
    id: 2,
    name: "Mochila Escolar Resistente",
    price: 129.9,
    discount: 15,
    finalPrice: 110.42,
    image: "/placeholder.svg?height=300&width=300",
    description: "Mochila resistente com compartimentos organizados e alças acolchoadas.",
  },
  {
    id: 3,
    name: "Caderno Universitário 10 Matérias",
    price: 39.9,
    discount: 25,
    finalPrice: 29.93,
    image: "/placeholder.svg?height=300&width=300",
    description: "Caderno espiral com 10 matérias e capa dura resistente.",
  },
  {
    id: 4,
    name: "Estojo Duplo com Zíper",
    price: 49.9,
    discount: 30,
    finalPrice: 34.93,
    image: "/placeholder.svg?height=300&width=300",
    description: "Estojo com dois compartimentos e zíper de alta qualidade.",
  },
  {
    id: 5,
    name: "Conjunto de Canetas Coloridas",
    price: 29.9,
    discount: 10,
    finalPrice: 26.91,
    image: "/placeholder.svg?height=300&width=300",
    description: "Kit com 24 canetas coloridas para desenho e escrita.",
  },
  {
    id: 6,
    name: "Agenda 2024 Capa Dura",
    price: 59.9,
    discount: 20,
    finalPrice: 47.92,
    image: "/placeholder.svg?height=300&width=300",
    description: "Agenda completa com divisão diária e espaço para anotações.",
  },
  {
    id: 7,
    name: "Calculadora Científica",
    price: 89.9,
    discount: 15,
    finalPrice: 76.42,
    image: "/placeholder.svg?height=300&width=300",
    description: "Calculadora com funções científicas para estudantes e profissionais.",
  },
  {
    id: 8,
    name: "Kit Marcadores Permanentes",
    price: 39.9,
    discount: 25,
    finalPrice: 29.93,
    image: "/placeholder.svg?height=300&width=300",
    description: "Conjunto com 12 marcadores permanentes em cores variadas.",
  },
  {
    id: 9,
    name: "Papel Sulfite A4 (500 folhas)",
    price: 29.9,
    discount: 10,
    finalPrice: 26.91,
    image: "/placeholder.svg?height=300&width=300",
    description: "Pacote com 500 folhas de papel sulfite A4 de alta qualidade.",
  },
  {
    id: 10,
    name: "Organizador de Mesa",
    price: 69.9,
    discount: 30,
    finalPrice: 48.93,
    image: "/placeholder.svg?height=300&width=300",
    description: "Organizador de mesa com compartimentos para diversos itens.",
  },
  {
    id: 11,
    name: "Cadeira de Escritório Ergonômica",
    price: 399.9,
    discount: 20,
    finalPrice: 319.92,
    image: "/placeholder.svg?height=300&width=300",
    description: "Cadeira com design ergonômico para maior conforto durante o trabalho.",
  },
  {
    id: 12,
    name: "Quadro Branco Magnético",
    price: 119.9,
    discount: 15,
    finalPrice: 101.92,
    image: "/placeholder.svg?height=300&width=300",
    description: "Quadro branco magnético com moldura de alumínio e suporte para marcadores.",
  },
]

export default function PromotionsPage() {
  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para a loja
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary-900 md:text-4xl">Promoções</h1>
        <p className="mt-2 text-gray-600">Aproveite os melhores descontos em produtos selecionados</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {promotionProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

