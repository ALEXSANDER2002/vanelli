import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ProductCard } from "@/components/product-card"

const newProducts = [
  {
    id: 1,
    name: "Caderno Inteligente A5 com Folhas Destacáveis",
    price: 89.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Caderno com sistema de folhas destacáveis e capa personalizável.",
  },
  {
    id: 2,
    name: "Kit Canetas Brush Pastel com 12 Cores",
    price: 64.5,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Canetas brush com ponta flexível para lettering e desenhos.",
  },
  {
    id: 3,
    name: "Planner Anual 2024 Capa Dura",
    price: 79.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Planner completo com divisórias mensais, semanais e espaço para anotações.",
  },
  {
    id: 4,
    name: "Mochila Executiva com Porta Notebook",
    price: 199.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Mochila resistente à água com compartimento acolchoado para notebook.",
  },
  {
    id: 5,
    name: "Kit Organizadores de Mesa em Acrílico",
    price: 129.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Conjunto de organizadores para manter sua mesa sempre arrumada.",
  },
  {
    id: 6,
    name: "Estojo Escolar Expansível",
    price: 49.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Estojo com compartimentos expansíveis para guardar mais materiais.",
  },
  {
    id: 7,
    name: "Bloco de Notas Adesivas Formato Especial",
    price: 19.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Bloco de notas adesivas em formatos divertidos e coloridos.",
  },
  {
    id: 8,
    name: "Lapiseira Profissional 0.5mm",
    price: 39.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Lapiseira de alta precisão para desenho técnico e escrita.",
  },
  {
    id: 9,
    name: "Agenda Diária 2024 Capa em Couro Sintético",
    price: 69.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Agenda com capa em couro sintético e acabamento premium.",
  },
  {
    id: 10,
    name: "Kit Marcadores Permanentes Metálicos",
    price: 54.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Conjunto de marcadores permanentes com tinta metálica.",
  },
  {
    id: 11,
    name: "Caderno Argolado Universitário Personalizável",
    price: 59.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Caderno com capa transparente para personalização.",
  },
  {
    id: 12,
    name: "Conjunto de Réguas Flexíveis",
    price: 24.9,
    image: "/placeholder.svg?height=300&width=300",
    badge: "Novo",
    description: "Kit com réguas flexíveis em diferentes tamanhos e formatos.",
  },
]

export default function NewProductsPage() {
  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para a loja
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-teal-900 md:text-4xl">Novidades</h1>
        <p className="mt-2 text-gray-600">Confira os produtos recém-chegados em nossa loja</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

