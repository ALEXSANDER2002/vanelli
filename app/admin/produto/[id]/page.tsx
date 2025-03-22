"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Save, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { getProduct, getCategories } from "@/lib/woocommerce"

export default function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params
  const isNewProduct = id === "novo"

  const [product, setProduct] = useState({
    name: "",
    regular_price: "",
    sale_price: "",
    description: "",
    short_description: "",
    sku: "",
    stock_quantity: "0",
    categories: [] as number[],
    images: [] as { src: string }[],
  })

  const [categories, setCategories] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  // Verificar autenticação
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  // Carregar produto e categorias
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // Carregar categorias
        const categoriesData = await getCategories()
        setCategories(categoriesData.length > 0 ? categoriesData : generateMockCategories())

        // Se não for um novo produto, carregar dados do produto
        if (!isNewProduct) {
          const productData = await getProduct(Number.parseInt(id))

          if (productData) {
            setProduct(productData)
            if (productData.images && productData.images.length > 0) {
              setImagePreview(productData.images[0].src)
            }
          } else {
            // Produto não encontrado, usar dados simulados
            const mockProduct = generateMockProducts().find((p) => p.id === Number.parseInt(id))
            if (mockProduct) {
              setProduct({
                name: mockProduct.name,
                regular_price: mockProduct.price.toString(),
                sale_price: mockProduct.finalPrice ? mockProduct.finalPrice.toString() : "",
                description: mockProduct.description || "",
                short_description: mockProduct.description || "",
                sku: mockProduct.sku || "",
                stock_quantity: mockProduct.stock.toString(),
                categories: mockProduct.categories.map((cat: string) => {
                  const category = categories.find((c) => c.name === cat)
                  return category ? category.id : 0
                }),
                images: [{ src: mockProduct.image }],
              })
              setImagePreview(mockProduct.image)
            } else {
              toast({
                title: "Produto não encontrado",
                description: "O produto que você está tentando editar não existe.",
                variant: "destructive",
              })
              router.push("/admin")
            }
          }
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error)
        toast({
          title: "Erro ao carregar dados",
          description: "Não foi possível carregar os dados do produto.",
          variant: "destructive",
        })

        // Usar categorias simuladas em caso de erro
        setCategories(generateMockCategories())

        if (!isNewProduct) {
          // Produto não encontrado, usar dados simulados
          const mockProduct = generateMockProducts().find((p) => p.id === Number.parseInt(id))
          if (mockProduct) {
            setProduct({
              name: mockProduct.name,
              regular_price: mockProduct.price.toString(),
              sale_price: mockProduct.finalPrice ? mockProduct.finalPrice.toString() : "",
              description: mockProduct.description || "",
              short_description: mockProduct.description || "",
              sku: mockProduct.sku || "",
              stock_quantity: mockProduct.stock.toString(),
              categories: [],
              images: [{ src: mockProduct.image }],
            })
            setImagePreview(mockProduct.image)
          } else {
            router.push("/admin")
          }
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id, isNewProduct, router, toast])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))
  }

  const handleCategoryChange = (categoryId: number, checked: boolean) => {
    setProduct((prev) => {
      if (checked) {
        return { ...prev, categories: [...prev.categories, categoryId] }
      } else {
        return { ...prev, categories: prev.categories.filter((id) => id !== categoryId) }
      }
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Em um ambiente real, você enviaria o arquivo para o servidor
      // Aqui, apenas criamos uma URL temporária para visualização
      const imageUrl = URL.createObjectURL(file)
      setImagePreview(imageUrl)
      setProduct((prev) => ({
        ...prev,
        images: [{ src: imageUrl }],
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      // Em um ambiente real, você enviaria os dados para a API do WooCommerce
      // Aqui, apenas simulamos o salvamento
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: isNewProduct ? "Produto criado" : "Produto atualizado",
        description: isNewProduct ? "O produto foi criado com sucesso." : "O produto foi atualizado com sucesso.",
      })

      router.push("/admin")
    } catch (error) {
      console.error("Erro ao salvar produto:", error)
      toast({
        title: "Erro ao salvar produto",
        description: "Não foi possível salvar as alterações do produto.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="container px-4 py-8 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/admin" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Voltar para a lista de produtos
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary">{isNewProduct ? "Novo Produto" : "Editar Produto"}</h1>
        <p className="mt-2 text-gray-600">
          {isNewProduct
            ? "Preencha os campos abaixo para criar um novo produto"
            : "Edite as informações do produto conforme necessário"}
        </p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
            <p>Carregando dados do produto...</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Produto *</Label>
                <Input id="name" name="name" value={product.name} onChange={handleInputChange} required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="regular_price">Preço Regular *</Label>
                  <Input
                    id="regular_price"
                    name="regular_price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={product.regular_price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sale_price">Preço Promocional</Label>
                  <Input
                    id="sale_price"
                    name="sale_price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={product.sale_price}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" name="sku" value={product.sku} onChange={handleInputChange} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="stock_quantity">Estoque</Label>
                <Input
                  id="stock_quantity"
                  name="stock_quantity"
                  type="number"
                  min="0"
                  value={product.stock_quantity}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label>Categorias</Label>
                <div className="grid gap-2 sm:grid-cols-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={product.categories.includes(category.id)}
                        onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                      />
                      <Label htmlFor={`category-${category.id}`} className="font-normal">
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Imagem Principal</Label>
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative h-48 w-48 overflow-hidden rounded-lg border">
                    <Image
                      src={imagePreview || "/placeholder.svg?height=192&width=192"}
                      alt="Imagem do produto"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input id="image" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    <Button type="button" variant="outline" onClick={() => document.getElementById("image")?.click()}>
                      <Upload className="mr-2 h-4 w-4" />
                      Carregar Imagem
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="short_description">Descrição Curta</Label>
                <Textarea
                  id="short_description"
                  name="short_description"
                  rows={3}
                  value={product.short_description}
                  onChange={handleTextareaChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição Completa</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={6}
                  value={product.description}
                  onChange={handleTextareaChange}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => router.push("/admin")}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isSaving}>
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Salvando..." : "Salvar Produto"}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}

// Funções para gerar dados simulados para demonstração
function generateMockCategories() {
  return [
    { id: 1, name: "Material Escolar", slug: "material-escolar", count: 5 },
    { id: 2, name: "Escritório", slug: "escritorio", count: 8 },
    { id: 3, name: "Mochilas", slug: "mochilas", count: 3 },
    { id: 4, name: "Cadernos", slug: "cadernos", count: 4 },
    { id: 5, name: "Agendas", slug: "agendas", count: 2 },
    { id: 6, name: "Canetas", slug: "canetas", count: 6 },
    { id: 7, name: "Móveis", slug: "moveis", count: 3 },
    { id: 8, name: "Papéis", slug: "papeis", count: 4 },
  ]
}

function generateMockProducts() {
  return [
    {
      id: 1,
      name: "Caderno Espiral Universitário 10 Matérias",
      price: 29.9,
      discount: 15,
      finalPrice: 25.42,
      image: "/placeholder.svg?height=300&width=300",
      stock: 25,
      sku: "CAD-UNI-001",
      categories: ["Material Escolar", "Cadernos"],
      description:
        "Caderno universitário com espiral, capa dura e 10 matérias. Ideal para estudantes que precisam organizar diferentes disciplinas em um único caderno.",
    },
    {
      id: 2,
      name: "Kit Canetas Coloridas 24 Cores",
      price: 24.5,
      image: "/placeholder.svg?height=300&width=300",
      stock: 42,
      sku: "KIT-CAN-001",
      categories: ["Material Escolar", "Canetas"],
      description:
        "Kit com 24 canetas coloridas de alta qualidade, perfeitas para desenhos, anotações e trabalhos escolares.",
    },
    // Outros produtos simulados...
  ]
}

