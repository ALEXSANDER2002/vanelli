import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

// Simulação de dados de marcas
const brands = {
  "faber-castell": {
    id: 1,
    name: "Faber-Castell",
    description: "Líder mundial em lápis e produtos de escrita de alta qualidade.",
    logo: "/faber-castell.png",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  bic: {
    id: 2,
    name: "BIC",
    description: "Canetas, lápis e produtos de papelaria confiáveis e acessíveis.",
    logo: "/bic.png",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  tilibra: {
    id: 3,
    name: "Tilibra",
    description: "Cadernos, agendas e produtos de papelaria com design exclusivo.",
    logo: "/tilibra.png",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  pilot: {
    id: 4,
    name: "Pilot",
    logo: "/pilot.png",
    description: "Canetas e marcadores de alta qualidade para escrita precisa.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  stabilo: {
    id: 5,
    name: "Stabilo",
    logo: "/stabilo.png",
    description: "Marcadores e canetas coloridas para destacar com estilo.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  maped: {
    id: 6,
    name: "Maped",
    logo: "/maped.png",
    description: "Acessórios escolares inovadores e coloridos para todas as idades.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  acrilex: {
    id: 7,
    name: "Acrilex",
    logo: "/acrilex.png",
    description: "Tintas e materiais para artesanato de alta qualidade.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  foroni :{
    id: 8,
    name: "Foroni",
    logo: "/foroni.png",
    description: "Cadernos e produtos de papelaria com tradição de qualidade.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  molin: {
    id: 9,
    name: "Molin",
    logo: "/molin.png",
    description: "Acessórios escolares e de escritório com design diferenciado.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  cis: {
    id: 10,
    name: "Cis",
    logo: "/cis.png",
    description: "Produtos de papelaria com tecnologia e inovação.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  staedtler: {
    id: 11,
    name: "Staedtler",
    logo: "/staedtler.png",
    description: "Materiais de desenho e escrita de precisão alemã.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  pentel: {
    id: 12,
    name: "Pentel",
    logo: "/pentel.png",
    description: "Canetas e produtos de escrita com tecnologia japonesa.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  jocar: {
    id: 13,
    name: "Jocar Office",
    logo: "/jocar-office.png",
    description: "Produtos para escritório com excelente custo-benefício.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  jandaia: {
    id: 14,
    name: "Jandaia",
    logo: "/jandaia.png",
    description: "Cadernos e blocos com papel de alta qualidade.",
    banner: "/placeholder.svg?height=400&width=1200",
  },
  maxprint: {
    id: 15,
    name: "Maxprint",
    logo: "/maxprint.png",
    description: "Acessórios de informática e papelaria tecnológica.",
    banner: "/placeholder.svg?height=400&width=1200",
  },


  // Outras marcas...
}

// Simulação de produtos por marca
const productsByBrand = {
  "faber-castell": [
    {
      id: 1,
      name: "Lápis de Cor EcoLápis 24 Cores",
      price: 39.9,
      discount: 15,
      finalPrice: 33.92,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Canetas Hidrográficas 12 Cores",
      price: 24.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Lápis Preto Nº 2 (Caixa com 12)",
      price: 12.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Borracha Dust Free",
      price: 4.9,
      discount: 10,
      finalPrice: 4.41,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 5,
      name: "Apontador com Depósito",
      price: 7.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 6,
      name: "Marcador Permanente 8 Cores",
      price: 29.9,
      discount: 10,
      finalPrice: 26.91,
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  bic: [
    {
      id: 7,
      name: "Caneta Esferográfica Cristal (Caixa com 50)",
      price: 49.9,
      discount: 20,
      finalPrice: 39.92,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 8,
      name: "Caneta Marca Texto 6 Cores",
      price: 19.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 9,
      name: "Lápis Grafite Evolution (Caixa com 12)",
      price: 14.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 10,
      name: "Caneta Gel 0.7mm (Conjunto 5 Cores)",
      price: 24.9,
      discount: 15,
      finalPrice: 21.17,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 11,
      name: "Corretivo Líquido 18ml",
      price: 7.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 12,
      name: "Lapiseira 0.7mm",
      price: 12.9,
      discount: 10,
      finalPrice: 11.61,
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  tilibra: [
    {
      id: 13,
      name: "Caderno Universitário 10 Matérias",
      price: 32.9,
      discount: 10,
      finalPrice: 29.61,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 14,
      name: "Agenda 2024 Capa Dura",
      price: 49.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 15,
      name: "Caderno Brochura 96 Folhas",
      price: 12.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 16,
      name: "Fichário Universitário 4 Argolas",
      price: 59.9,
      discount: 15,
      finalPrice: 50.92,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 17,
      name: "Bloco de Notas Pautado",
      price: 9.9,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 18,
      name: "Caderno Executivo Capa Dura",
      price: 39.9,
      discount: 10,
      finalPrice: 35.91,
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  // Produtos para outras marcas...
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const brand = brands[slug as keyof typeof brands] || {
    id: 0,
    name: "Marca não encontrada",
    description: "Esta marca não existe ou foi removida.",
    logo: "/placeholder.svg?height=150&width=150",
    banner: "/placeholder.svg?height=400&width=1200",
  }

  const products = productsByBrand[slug as keyof typeof productsByBrand] || []

  return (
      <div className="container px-4 py-8 md:px-6">
        <Link href="/marcas" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Voltar para marcas
        </Link>

        <div className="mb-8">
          <div className="relative mb-6 h-[200px] overflow-hidden rounded-lg md:h-[300px]">
            <Image src={brand.banner || "/placeholder.svg"} alt={brand.name} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-primary/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 flex items-center text-white">
              <div className="mr-4 h-16 w-16 overflow-hidden rounded-full bg-white p-1">
                <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold md:text-4xl">{brand.name}</h1>
                <p className="mt-2 max-w-md text-white/90">{brand.description}</p>
              </div>
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
              <p className="mb-6 text-gray-500">Não encontramos produtos desta marca no momento.</p>
              <Button className="bg-primary hover:bg-primary-hover" asChild>
                <Link href="/">Explorar outras marcas</Link>
              </Button>
            </div>
        )}
      </div>
  )
}

