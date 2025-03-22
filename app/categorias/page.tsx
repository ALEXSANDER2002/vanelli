import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Material Escolar",
    image: "/placeholder.svg?height=300&width=300",
    slug: "material-escolar",
    description: "Tudo o que você precisa para o ano letivo: cadernos, lápis, canetas e muito mais.",
  },
  {
    id: 2,
    name: "Escritório",
    image: "/placeholder.svg?height=300&width=300",
    slug: "escritorio",
    description: "Produtos para organizar e equipar seu escritório com qualidade e estilo.",
  },
  {
    id: 3,
    name: "Mochilas",
    image: "/placeholder.svg?height=300&width=300",
    slug: "mochilas",
    description: "Mochilas resistentes e estilosas para todas as idades e necessidades.",
  },
  {
    id: 4,
    name: "Cadernos",
    image: "/placeholder.svg?height=300&width=300",
    slug: "cadernos",
    description: "Cadernos de diversos tamanhos, formatos e estilos para todos os gostos.",
  },
  {
    id: 5,
    name: "Artesanato",
    image: "/placeholder.svg?height=300&width=300",
    slug: "artesanato",
    description: "Materiais para artesanato, scrapbook, pintura e trabalhos manuais.",
  },
  {
    id: 6,
    name: "Agendas",
    image: "/placeholder.svg?height=300&width=300",
    slug: "agendas",
    description: "Agendas e planners para organizar seu tempo com estilo e praticidade.",
  },
  {
    id: 7,
    name: "Papelaria Criativa",
    image: "/placeholder.svg?height=300&width=300",
    slug: "papelaria-criativa",
    description: "Produtos criativos e diferenciados para personalizar seus projetos.",
  },
  {
    id: 8,
    name: "Tecnologia",
    image: "/placeholder.svg?height=300&width=300",
    slug: "tecnologia",
    description: "Acessórios tecnológicos para complementar seus estudos e trabalho.",
  },
  {
    id: 9,
    name: "Livros e Revistas",
    image: "/placeholder.svg?height=300&width=300",
    slug: "livros-revistas",
    description: "Livros didáticos, literatura e revistas para todas as idades.",
  },
  {
    id: 10,
    name: "Presentes",
    image: "/placeholder.svg?height=300&width=300",
    slug: "presentes",
    description: "Opções de presentes para todas as ocasiões com embalagens especiais.",
  },
  {
    id: 11,
    name: "Decoração",
    image: "/placeholder.svg?height=300&width=300",
    slug: "decoracao",
    description: "Itens decorativos para deixar seu ambiente mais bonito e aconchegante.",
  },
  {
    id: 12,
    name: "Jogos e Brinquedos",
    image: "/placeholder.svg?height=300&width=300",
    slug: "jogos-brinquedos",
    description: "Jogos educativos e brinquedos para diversão e aprendizado.",
  },
]

export default function CategoriesPage() {
  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para a loja
      </Link>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">Categorias</h1>
        <p className="mt-2 text-teal-700">Explore nossa ampla variedade de produtos por categoria</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categoria/${category.slug}`}
            className="group overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
          >
            <div className="aspect-video overflow-hidden bg-teal-50">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={300}
                height={200}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-primary">{category.name}</h2>
              <p className="mt-2 text-sm text-teal-700">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

