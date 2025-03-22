"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Truck, ShieldCheck, ArrowLeft, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ProductCarousel } from "@/components/product-carousel"
import { ProductAddToCart } from "@/components/product-add-to-cart"
import { useToast } from "@/components/ui/use-toast"

// Simulação de banco de dados de produtos
const productsDatabase = [
  {
    id: 1,
    name: "Kit Escolar Completo",
    description:
      "Kit completo com caderno, canetas, lápis, borracha e muito mais para o ano letivo. Ideal para estudantes de todas as idades, este kit contém tudo o que você precisa para começar o ano escolar com o pé direito.",
    price: 149.9,
    discount: 20,
    finalPrice: 119.92,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: ["Azul", "Rosa", "Verde"],
    stock: 15,
    sku: "KIT-ESC-2024",
    categories: ["Material Escolar", "Kits"],
    specifications: [
      { name: "Conteúdo", value: "1 Caderno, 5 Canetas, 3 Lápis, 1 Borracha, 1 Apontador, 1 Régua, 1 Tesoura, 1 Cola" },
      { name: "Dimensões", value: "30cm x 20cm x 10cm" },
      { name: "Peso", value: "800g" },
      { name: "Garantia", value: "3 meses" },
    ],
  },
  {
    id: 2,
    name: "Caderno Espiral Universitário 10 Matérias",
    description:
      "Caderno universitário com espiral, capa dura e 10 matérias. Ideal para estudantes que precisam organizar diferentes disciplinas em um único caderno.",
    price: 29.9,
    discount: 15,
    finalPrice: 25.42,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: ["Azul", "Preto", "Vermelho"],
    stock: 30,
    sku: "CAD-UNI-10M",
    categories: ["Material Escolar", "Cadernos"],
    specifications: [
      { name: "Folhas", value: "200 folhas (20 por matéria)" },
      { name: "Dimensões", value: "28cm x 21cm" },
      { name: "Gramatura", value: "56g/m²" },
      { name: "Tipo", value: "Pautado" },
    ],
  },
  // Adicione mais produtos conforme necessário
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Simular busca no banco de dados
    const foundProduct = productsDatabase.find((p) => p.id === Number.parseInt(params.id))
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [params.id])

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    toast({
      title: isFavorite ? "Removido dos favoritos" : "Adicionado aos favoritos",
      description: isFavorite
        ? "O produto foi removido da sua lista de favoritos."
        : "O produto foi adicionado à sua lista de favoritos.",
      variant: "default",
    })
  }

  if (!product) {
    return (
      <div className="container flex items-center justify-center px-4 py-16 md:px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Produto não encontrado</h1>
          <p className="mt-2 text-gray-600">O produto que você está procurando não existe ou foi removido.</p>
          <Button className="mt-4 bg-primary hover:bg-primary-hover" asChild>
            <Link href="/">Voltar para a loja</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para a loja
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Imagens do produto */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image: string, index: number) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg border cursor-pointer ${
                  selectedImage === index ? "border-primary ring-2 bg-teal-200" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Imagem ${index + 1}`}
                  width={150}
                  height={150}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Detalhes do produto */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2">
              {product.categories.map((category: string, index: number) => (
                <Link
                  key={index}
                  href={`/categoria/${category.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-primary hover:underline"
                >
                  {category}
                </Link>
              ))}
            </div>
            <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">
                  R$ {product.finalPrice.toFixed(2).replace(".", ",")}
                </span>
                {product.discount && (
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                )}
              </div>
              {product.discount && <Badge className="ml-4 bg-accent text-primary">-{product.discount}% OFF</Badge>}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Cor</h3>
              <div className="mt-2 flex space-x-2">
                {product.colors.map((color: string, index: number) => (
                  <Button
                    key={index}
                    variant={index === selectedColor ? "default" : "outline"}
                    className={index === selectedColor ? "bg-primary" : ""}
                    onClick={() => setSelectedColor(index)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <ProductAddToCart product={product} />

            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <Button
                size="lg"
                variant="outline"
                className={`flex-1 ${isFavorite ? "bg-teal-50 text-primary border-teal-200" : ""}`}
                onClick={toggleFavorite}
              >
                <Heart className={`mr-2 h-5 w-5 ${isFavorite ? "fill-primary" : ""}`} />
                {isFavorite ? "Adicionado aos Favoritos" : "Adicionar à Lista de Desejos"}
              </Button>
              <Button size="lg" variant="ghost" className="sm:flex-none">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center">
              <Truck className="mr-2 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Entrega</h3>
                <p className="text-sm text-gray-500">Frete grátis para compras acima de R$ 150,00</p>
              </div>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Garantia</h3>
                <p className="text-sm text-gray-500">3 meses de garantia diretamente com a Papelaria Vanelli</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Descrição</TabsTrigger>
              <TabsTrigger value="specifications">Especificações</TabsTrigger>
              <TabsTrigger value="shipping">Envio</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <div className="text-sm leading-relaxed text-gray-700">
                <p>{product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <div className="space-y-2">
                {product.specifications.map((spec: any, index: number) => (
                  <div key={index} className="grid grid-cols-2 border-b pb-2 text-sm">
                    <span className="font-medium">{spec.name}</span>
                    <span>{spec.value}</span>
                  </div>
                ))}
                <div className="grid grid-cols-2 border-b pb-2 text-sm">
                  <span className="font-medium">SKU</span>
                  <span>{product.sku}</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <div className="space-y-4 text-sm">
                <p>
                  <strong>Frete Grátis:</strong> Para compras acima de R$ 150,00 para todo o Brasil.
                </p>
                <p>
                  <strong>Prazo de Entrega:</strong> De 3 a 10 dias úteis, dependendo da sua localização.
                </p>
                <p>
                  <strong>Formas de Envio:</strong> Correios (PAC e SEDEX) e Transportadoras.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Produtos relacionados */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">Produtos Relacionados</h2>
        <ProductCarousel />
      </div>
    </div>
  )
}

