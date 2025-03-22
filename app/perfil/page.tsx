"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, User, Package, Heart, LogOut, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Simulação de pedidos do usuário
const userOrders = [
  {
    id: "ORD-12345",
    date: "15/04/2024",
    status: "Entregue",
    total: 149.9,
    items: [
      { name: "Kit Escolar Completo", quantity: 1, price: 119.92 },
      { name: "Caderno Espiral Universitário 10 Matérias", quantity: 1, price: 29.98 },
    ],
  },
  {
    id: "ORD-12346",
    date: "02/05/2024",
    status: "Em processamento",
    total: 89.9,
    items: [{ name: "Mochila Escolar Resistente", quantity: 1, price: 89.9 }],
  },
]

// Simulação de produtos favoritos
const userFavorites = [
  {
    id: 1,
    name: "Caderno Inteligente A5 com Folhas Destacáveis",
    price: 89.9,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Kit Canetas Brush Pastel com 12 Cores",
    price: 64.5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Planner Anual 2024 Capa Dura",
    price: 79.9,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function ProfilePage() {
  const { user, logout, isAuthenticated } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("info")

  useEffect(() => {
    // Redirecionar para login se não estiver autenticado
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  const handleLogout = () => {
    logout()
    toast({
      title: "Logout realizado com sucesso",
      description: "Você foi desconectado da sua conta.",
      variant: "default",
    })
    router.push("/")
  }

  if (!user) {
    return null // Não renderiza nada enquanto verifica autenticação
  }

  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para a loja
      </Link>

      <div className="mb-8 flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start">
        <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-teal-200 md:mb-0 md:mr-6">
          <Image
            src={user.avatar || "/placeholder.svg?height=100&width=100"}
            alt={user.name}
            width={100}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-primary">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
            <Button variant="outline" size="sm" className="flex items-center">
              <Settings className="mr-1 h-4 w-4" />
              Editar Perfil
            </Button>
            <Button variant="outline" size="sm" className="flex items-center text-red-500" onClick={handleLogout}>
              <LogOut className="mr-1 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="info" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            Informações
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center">
            <Package className="mr-2 h-4 w-4" />
            Pedidos
          </TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center">
            <Heart className="mr-2 h-4 w-4" />
            Favoritos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="mt-6">
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-semibold">Informações Pessoais</h2>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Nome Completo</p>
                  <p>{user.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p>{user.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Telefone</p>
                  <p>Não cadastrado</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">CPF</p>
                  <p>Não cadastrado</p>
                </div>
              </div>
            </div>

            <h2 className="mb-4 mt-8 text-xl font-semibold">Endereços</h2>
            <div className="rounded-lg border p-4">
              <p className="text-center text-gray-500">Você ainda não cadastrou nenhum endereço.</p>
              <div className="mt-4 flex justify-center">
                <Button variant="outline">Adicionar Endereço</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="orders" className="mt-6">
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-semibold">Meus Pedidos</h2>

            {userOrders.length > 0 ? (
              <div className="space-y-6">
                {userOrders.map((order) => (
                  <div key={order.id} className="rounded-lg border p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="font-medium">Pedido #{order.id}</p>
                        <p className="text-sm text-gray-500">Data: {order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">R$ {order.total.toFixed(2).replace(".", ",")}</p>
                        <span
                          className={`inline-block rounded-full px-2 py-1 text-xs ${
                            order.status === "Entregue"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-medium">Itens:</p>
                      <ul className="mt-2 space-y-2">
                        {order.items.map((item, index) => (
                          <li key={index} className="flex justify-between text-sm">
                            <span>
                              {item.quantity}x {item.name}
                            </span>
                            <span>R$ {item.price.toFixed(2).replace(".", ",")}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border p-4 text-center">
                <p className="text-gray-500">Você ainda não realizou nenhum pedido.</p>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/">Começar a Comprar</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="mt-6">
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-semibold">Meus Favoritos</h2>

            {userFavorites.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {userFavorites.map((product) => (
                  <div key={product.id} className="flex items-start space-x-4 rounded-lg border p-4">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <Link href={`/produto/${product.id}`} className="font-medium hover:underline">
                        {product.name}
                      </Link>
                      <p className="mt-1 font-medium text-primary">R$ {product.price.toFixed(2).replace(".", ",")}</p>
                      <div className="mt-2 flex gap-2">
                        <Button size="sm" className="h-8 bg-primary hover:bg-primary-hover">
                          Comprar
                        </Button>
                        <Button size="sm" variant="outline" className="h-8">
                          Remover
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border p-4 text-center">
                <p className="text-gray-500">Você ainda não adicionou produtos aos favoritos.</p>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/">Explorar Produtos</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

