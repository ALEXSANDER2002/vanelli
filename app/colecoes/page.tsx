import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const collections = [
  {
    id: 1,
    name: "Coleção Pastel",
    image: "/placeholder.svg?height=300&width=500",
    slug: "colecao-pastel",
    description: "Produtos em tons suaves e delicados para um visual clean e elegante.",
  },
  {
    id: 2,
    name: "Coleção Neon",
    image: "/placeholder.svg?height=300&width=500",
    slug: "colecao-neon",
    description: "Cores vibrantes e chamativas para quem gosta de se destacar.",
  },
  {
    id: 3,
    name: "Coleção Tropical",
    image: "/placeholder.svg?height=300&width=500",
    slug: "colecao-tropical",
    description: "Estampas e cores inspiradas na natureza tropical brasileira.",
  },
  {
    id: 4,
    name: "Coleção Geométrica",
    image: "/placeholder.svg?height=300&width=500",
    slug: "colecao-geometrica",
    description: "Padrões geométricos modernos e minimalistas para um visual contemporâneo.",
  },
  {
    id: 5,
    name: "Coleção Vintage",
    image: "/placeholder.svg?height=300&width=500",
    slug: "colecao-vintage",
    description: "Design retrô inspirado nas décadas passadas com um toque contemporâneo.",
  },
  {
    id: 6,
    name: "Coleção Aquarela",
    image: "/placeholder.svg?height=300&width=500",
    slug: "colecao-aquarela",
    description: "Produtos com estampas delicadas em estilo aquarela para um visual artístico.",
  },
  {
    id: 7,
    name: "Coleção Metálica",
    image: "/placeholder.svg?height=300&width=500",
    slug: "colecao-metalica",
    description: "Acabamentos em dourado, prateado e rosé gold para um toque de sofisticação.",
  },
  {
    id: 8,
    name: "Coleção Universitária",
    image: "/placeholder.svg?height=300&width=500",
    slug: "colecao-universitaria",
    description: "Produtos especiais para universitários com foco em praticidade e organização.",
  },
]

export default function CollectionsPage() {
  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para a loja
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">Coleções</h1>
        <p className="mt-2 text-teal-700">Descubra nossas coleções exclusivas com produtos coordenados</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/colecao/${collection.slug}`}
            className="group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-[16/9] overflow-hidden bg-teal-50">
              <Image
                src={collection.image || "/placeholder.svg"}
                alt={collection.name}
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-primary">{collection.name}</h2>
              <p className="mt-2 text-teal-700">{collection.description}</p>
              <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                Ver coleção
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

