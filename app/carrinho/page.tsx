"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// Simulação de itens do carrinho
const initialCartItems = [
  {
    id: 1,
    name: "Kit Escolar Completo",
    price: 119.92,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Caderno Espiral Universitário 10 Matérias",
    price: 25.42,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [couponCode, setCouponCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 150 ? 0 : 15.9
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Continuar comprando
      </Link>

      <h1 className="mb-8 text-3xl font-bold">Seu Carrinho</h1>

      {cartItems.length > 0 ? (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border">
              <div className="p-6">
                <h2 className="mb-4 text-xl font-semibold">Itens do Carrinho</h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between">
                          <h3 className="text-base font-medium">{item.name}</h3>
                          <p className="text-base font-medium">
                            R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          Preço unitário: R$ {item.price.toFixed(2).replace(".", ",")}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="mr-1 h-4 w-4" />
                            Remover
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-6 lg:h-fit">
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Resumo do Pedido</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span>{shipping === 0 ? "Grátis" : `R$ ${shipping.toFixed(2).replace(".", ",")}`}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Cupom de desconto"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button variant="outline">Aplicar</Button>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary-hover" size="lg" asChild>
                  <Link href="/checkout">Finalizar Compra</Link>
                </Button>
                <p className="text-center text-xs text-gray-500">Frete grátis para compras acima de R$ 150,00</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border py-16">
          <ShoppingBag className="mb-4 h-16 w-16 text-gray-300" />
          <h2 className="mb-2 text-2xl font-semibold">Seu carrinho está vazio</h2>
          <p className="mb-6 text-gray-500">Adicione produtos ao seu carrinho para continuar comprando</p>
          <Button className="bg-primary hover:bg-primary-hover" size="lg" asChild>
            <Link href="/">Explorar Produtos</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

