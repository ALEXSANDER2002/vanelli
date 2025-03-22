"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, Plus, Edit, Trash2, Search, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { getProducts, getCategories, deleteProduct, formatWooCommerceProduct } from "@/lib/woocommerce"

export default function AdminPage() {
  const [products, setProducts] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const itemsPerPage = 10

  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  // Verificar autenticação
  useEffect(() => {
    // Verificar a autenticação do cliente apenas no lado do cliente
    if (typeof window !== 'undefined' && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  // Carregar produtos e categorias
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // Em um ambiente real, isso viria da API do WooCommerce
        const productsData = await getProducts()
        const categoriesData = await getCategories()

        // Simulando dados para demonstração
        const formattedProducts =
          productsData.length > 0 ? productsData.map(formatWooCommerceProduct) : generateMockProducts()

        setProducts(formattedProducts)
        setCategories(categoriesData.length > 0 ? categoriesData : generateMockCategories())
        setTotalPages(Math.ceil(formattedProducts.length / itemsPerPage))
      } catch (error) {
        console.error("Erro ao carregar dados:", error)
        // Chamar toast apenas no lado do cliente
        if (typeof window !== 'undefined') {
          toast({
            title: "Erro ao carregar dados",
            description: "Não foi possível carregar os produtos e categorias.",
            variant: "destructive",
          })
        }

        // Usar dados simulados em caso de erro
        const mockProducts = generateMockProducts()
        setProducts(mockProducts)
        setCategories(generateMockCategories())
        setTotalPages(Math.ceil(mockProducts.length / itemsPerPage))
      } finally {
        setIsLoading(false)
      }
    }

    // Executar apenas no lado do cliente
    if (typeof window !== 'undefined') {
      fetchData()
    }
  }, [toast])

  // Filtrar produtos com base na busca
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Paginação
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1)
  }

  const handleRefresh = async () => {
    setIsLoading(true)
    try {
      const productsData = await getProducts()
      const categoriesData = await getCategories()

      const formattedProducts =
        productsData.length > 0 ? productsData.map(formatWooCommerceProduct) : generateMockProducts()

      setProducts(formattedProducts)
      setCategories(categoriesData.length > 0 ? categoriesData : generateMockCategories())
      setTotalPages(Math.ceil(formattedProducts.length / itemsPerPage))

      toast({
        title: "Dados atualizados",
        description: "A lista de produtos foi atualizada com sucesso.",
      })
    } catch (error) {
      console.error("Erro ao atualizar dados:", error)
      toast({
        title: "Erro ao atualizar dados",
        description: "Não foi possível atualizar os produtos e categorias.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteProduct = async (id: number) => {
    setIsLoading(true)
    try {
      await deleteProduct(id)
      setProducts(products.filter((product) => product.id !== id))
      toast({
        title: "Produto excluído",
        description: "O produto foi excluído com sucesso.",
      })
    } catch (error) {
      console.error("Erro ao excluir produto:", error)
      toast({
        title: "Erro ao excluir produto",
        description: "Não foi possível excluir o produto.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
      setIsDeleteDialogOpen(false)
    }
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="container px-4 py-8 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Voltar para a loja
        </Link>
        <Button asChild>
          <Link href="/admin/produto/novo">
            <Plus className="mr-2 h-4 w-4" />
            Novo Produto
          </Link>
        </Button>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary">Administração de Produtos</h1>
        <p className="mt-2 text-gray-600">Gerencie os produtos da sua loja</p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <form onSubmit={handleSearch} className="flex w-full max-w-md gap-2">
          <Input
            type="search"
            placeholder="Buscar por nome ou SKU..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-primary hover:bg-primary-hover">
            <Search className="mr-2 h-4 w-4" />
            Buscar
          </Button>
        </form>
        <Button variant="outline" onClick={handleRefresh} disabled={isLoading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          Atualizar
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Imagem</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Estoque</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    <div className="flex items-center justify-center">
                      <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                      Carregando produtos...
                    </div>
                  </TableCell>
                </TableRow>
              ) : paginatedProducts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    Nenhum produto encontrado.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="h-12 w-12 overflow-hidden rounded-md border">
                        <Image
                          src={product.image || "/placeholder.svg?height=48&width=48"}
                          alt={product.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.categories?.join(", ") || "Sem categoria"}</p>
                      </div>
                    </TableCell>
                    <TableCell>{product.sku || "N/A"}</TableCell>
                    <TableCell>
                      {product.discount ? (
                        <div>
                          <span className="font-medium">R$ {product.finalPrice.toFixed(2).replace(".", ",")}</span>
                          <span className="ml-2 text-xs text-gray-500 line-through">
                            R$ {product.price.toFixed(2).replace(".", ",")}
                          </span>
                          <Badge className="ml-2 bg-accent text-primary">-{product.discount}%</Badge>
                        </div>
                      ) : (
                        <span className="font-medium">R$ {product.price.toFixed(2).replace(".", ",")}</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Badge variant={product.stock > 10 ? "default" : product.stock > 0 ? "secondary" : "destructive"}>
                        {product.stock > 0 ? product.stock : "Esgotado"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/admin/produto/${product.id}`}>
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Editar</span>
                          </Link>
                        </Button>
                        <Dialog
                          open={isDeleteDialogOpen && selectedProduct?.id === product.id}
                          onOpenChange={(open) => {
                            if (!open) setIsDeleteDialogOpen(false)
                          }}
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => {
                                setSelectedProduct(product)
                                setIsDeleteDialogOpen(true)
                              }}
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Excluir</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Confirmar exclusão</DialogTitle>
                              <DialogDescription>
                                Tem certeza que deseja excluir o produto "{selectedProduct?.name}"? Esta ação não pode
                                ser desfeita.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                                Cancelar
                              </Button>
                              <Button
                                variant="destructive"
                                onClick={() => handleDeleteProduct(selectedProduct?.id)}
                                disabled={isLoading}
                              >
                                {isLoading ? "Excluindo..." : "Excluir"}
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
          <div className="text-sm text-gray-500">
            Mostrando {paginatedProducts.length} de {filteredProducts.length} produtos
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </Button>
            <span className="text-sm">
              Página {currentPage} de {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Próxima página</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

// Funções para gerar dados simulados para demonstração
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
    },
    {
      id: 2,
      name: "Kit Canetas Coloridas 24 Cores",
      price: 24.5,
      image: "/placeholder.svg?height=300&width=300",
      stock: 42,
      sku: "KIT-CAN-001",
      categories: ["Material Escolar", "Canetas"],
    },
    {
      id: 3,
      name: "Mochila Escolar Resistente",
      price: 89.9,
      discount: 10,
      finalPrice: 80.91,
      image: "/placeholder.svg?height=300&width=300",
      stock: 18,
      sku: "MOC-ESC-001",
      categories: ["Mochilas"],
    },
    {
      id: 4,
      name: "Agenda 2024 Capa Dura",
      price: 49.9,
      discount: 20,
      finalPrice: 39.92,
      image: "/placeholder.svg?height=300&width=300",
      stock: 30,
      sku: "AGE-2024-001",
      categories: ["Agendas"],
    },
    {
      id: 5,
      name: "Estojo Escolar Duplo",
      price: 34.9,
      image: "/placeholder.svg?height=300&width=300",
      stock: 15,
      sku: "EST-DUP-001",
      categories: ["Material Escolar", "Estojos"],
    },
    {
      id: 6,
      name: "Bloco de Notas Adesivas Coloridas",
      price: 12.9,
      image: "/placeholder.svg?height=300&width=300",
      stock: 50,
      sku: "BLO-ADH-001",
      categories: ["Escritório"],
    },
    {
      id: 7,
      name: "Lapiseira 0.7mm Profissional",
      price: 18.5,
      image: "/placeholder.svg?height=300&width=300",
      stock: 35,
      sku: "LAP-PRO-001",
      categories: ["Escritório", "Lapiseiras"],
    },
    {
      id: 8,
      name: "Kit Marcadores Permanentes",
      price: 27.9,
      image: "/placeholder.svg?height=300&width=300",
      stock: 22,
      sku: "KIT-MAR-001",
      categories: ["Escritório", "Marcadores"],
    },
    {
      id: 9,
      name: "Cadeira de Escritório Ergonômica",
      price: 399.9,
      discount: 20,
      finalPrice: 319.92,
      image: "/placeholder.svg?height=300&width=300",
      stock: 8,
      sku: "CAD-ERG-001",
      categories: ["Móveis", "Escritório"],
    },
    {
      id: 10,
      name: "Quadro Branco Magnético",
      price: 119.9,
      discount: 15,
      finalPrice: 101.92,
      image: "/placeholder.svg?height=300&width=300",
      stock: 12,
      sku: "QUA-MAG-001",
      categories: ["Escritório", "Quadros"],
    },
    {
      id: 11,
      name: "Calculadora Científica",
      price: 89.9,
      discount: 15,
      finalPrice: 76.42,
      image: "/placeholder.svg?height=300&width=300",
      stock: 20,
      sku: "CAL-CIE-001",
      categories: ["Escritório", "Calculadoras"],
    },
    {
      id: 12,
      name: "Papel Sulfite A4 (500 folhas)",
      price: 29.9,
      discount: 10,
      finalPrice: 26.91,
      image: "/placeholder.svg?height=300&width=300",
      stock: 45,
      sku: "PAP-A4-001",
      categories: ["Escritório", "Papéis"],
    },
  ]
}

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

