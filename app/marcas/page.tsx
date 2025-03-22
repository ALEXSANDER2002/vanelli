import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const brands = [
  {
    id: 1,
    name: "Faber-Castell",
    image: "/placeholder.svg?height=150&width=150",
    slug: "faber-castell",
    description: "Líder mundial em lápis e produtos de escrita de alta qualidade.",
  },
  {
    id: 2,
    name: "BIC",
    image: "/placeholder.svg?height=150&width=150",
    slug: "bic",
    description: "Canetas, lápis e produtos de papelaria confiáveis e acessíveis.",
  },
  {
    id: 3,
    name: "Tilibra",
    image: "/placeholder.svg?height=150&width=150",
    slug: "tilibra",
    description: "Cadernos, agendas e produtos de papelaria com design exclusivo.",
  },
  {
    id: 4,
    name: "Pilot",
    image: "/placeholder.svg?height=150&width=150",
    slug: "pilot",
    description: "Canetas e marcadores de alta qualidade para escrita precisa.",
  },
  {
    id: 5,
    name: "Stabilo",
    image: "/placeholder.svg?height=150&width=150",
    slug: "stabilo",
    description: "Marcadores e canetas coloridas para destacar com estilo.",
  },
  {
    id: 6,
    name: "Maped",
    image: "/placeholder.svg?height=150&width=150",
    slug: "maped",
    description: "Acessórios escolares inovadores e coloridos para todas as idades.",
  },
  {
    id: 7,
    name: "Acrilex",
    image: "/placeholder.svg?height=150&width=150",
    slug: "acrilex",
    description: "Tintas e materiais para artesanato de alta qualidade.",
  },
  {
    id: 8,
    name: "Foroni",
    image: "/placeholder.svg?height=150&width=150",
    slug: "foroni",
    description: "Cadernos e produtos de papelaria com tradição de qualidade.",
  },
  {
    id: 9,
    name: "Molin",
    image: "/placeholder.svg?height=150&width=150",
    slug: "molin",
    description: "Acessórios escolares e de escritório com design diferenciado.",
  },
  {
    id: 10,
    name: "Cis",
    image: "/placeholder.svg?height=150&width=150",
    slug: "cis",
    description: "Produtos de papelaria com tecnologia e inovação.",
  },
  {
    id: 11,
    name: "Staedtler",
    image: "/placeholder.svg?height=150&width=150",
    slug: "staedtler",
    description: "Materiais de desenho e escrita de precisão alemã.",
  },
  {
    id: 12,
    name: "Pentel",
    image: "/placeholder.svg?height=150&width=150",
    slug: "pentel",
    description: "Canetas e produtos de escrita com tecnologia japonesa.",
  },
  {
    id: 13,
    name: "Jocar Office",
    image: "/placeholder.svg?height=150&width=150",
    slug: "jocar-office",
    description: "Produtos para escritório com excelente custo-benefício.",
  },
  {
    id: 14,
    name: "Jandaia",
    image: "/placeholder.svg?height=150&width=150",
    slug: "jandaia",
    description: "Cadernos e blocos com papel de alta qualidade.",
  },
  {
    id: 15,
    name: "Maxprint",
    image: "/placeholder.svg?height=150&width=150",
    slug: "maxprint",
    description: "Acessórios de informática e papelaria tecnológica.",
  },
]

export default function BrandsPage() {
  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para a loja
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">Marcas</h1>
        <p className="mt-2 text-teal-700">Conheça as principais marcas disponíveis em nossa loja</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/marca/${brand.slug}`}
            className="group flex flex-col items-center rounded-lg border p-6 text-center transition-all hover:border-teal-200 hover:bg-teal-50"
          >
            <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-white p-2 shadow-sm">
              <Image
                src={brand.image || "/placeholder.svg"}
                alt={brand.name}
                width={150}
                height={150}
                className="h-full w-full object-contain transition-transform group-hover:scale-110"
              />
            </div>
            <h2 className="text-lg font-semibold text-primary">{brand.name}</h2>
            <p className="mt-2 text-sm text-teal-700">{brand.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

