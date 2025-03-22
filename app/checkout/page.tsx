"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Truck, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Simulação de itens do carrinho
const cartItems = [
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

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [shippingMethod, setShippingMethod] = useState("standard")

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = shippingMethod === "express" ? 25.9 : 15.9
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:px-6">
      <Link href="/carrinho" className="mb-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Voltar para o carrinho
      </Link>

      <h1 className="mb-8 text-3xl font-bold">Finalizar Compra</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-8">
            {/* Informações pessoais */}
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Informações Pessoais</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nome</Label>
                  <Input id="first-name" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Sobrenome</Label>
                  <Input id="last-name" placeholder="Seu sobrenome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="000.000.000-00" />
                </div>
              </div>
            </div>

            {/* Endereço de entrega */}
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Endereço de Entrega</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="00000-000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="street">Rua</Label>
                  <Input id="street" placeholder="Nome da rua" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="number">Número</Label>
                  <Input id="number" placeholder="123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="complement">Complemento</Label>
                  <Input id="complement" placeholder="Apto, Bloco, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="neighborhood">Bairro</Label>
                  <Input id="neighborhood" placeholder="Seu bairro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input id="city" placeholder="Sua cidade" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Estado</Label>
                  <Input id="state" placeholder="UF" />
                </div>
              </div>
            </div>

            {/* Método de envio */}
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Método de Envio</h2>
              <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex items-center">
                      <Truck className="mr-2 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Entrega Padrão</p>
                        <p className="text-sm text-gray-500">Entrega em 5-8 dias úteis</p>
                      </div>
                    </Label>
                  </div>
                  <span className="font-medium">R$ 15,90</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex items-center">
                      <Truck className="mr-2 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Entrega Expressa</p>
                        <p className="text-sm text-gray-500">Entrega em 2-3 dias úteis</p>
                      </div>
                    </Label>
                  </div>
                  <span className="font-medium">R$ 25,90</span>
                </div>
              </RadioGroup>
            </div>

            {/* Método de pagamento */}
            <div className="rounded-lg border p-6">
              <h2 className="mb-4 text-xl font-semibold">Método de Pagamento</h2>
              <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="credit-card">Cartão de Crédito</TabsTrigger>
                  <TabsTrigger value="boleto">Boleto</TabsTrigger>
                  <TabsTrigger value="pix">Pix</TabsTrigger>
                </TabsList>
                <TabsContent value="credit-card" className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Número do Cartão</Label>
                    <Input id="card-number" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="card-name">Nome no Cartão</Label>
                      <Input id="card-name" placeholder="Nome como está no cartão" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Validade</Label>
                        <Input id="expiry" placeholder="MM/AA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="installments">Parcelas</Label>
                    <select
                      id="installments"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="1">1x de R$ {total.toFixed(2).replace(".", ",")} sem juros</option>
                      <option value="2">2x de R$ {(total / 2).toFixed(2).replace(".", ",")} sem juros</option>
                      <option value="3">3x de R$ {(total / 3).toFixed(2).replace(".", ",")} sem juros</option>
                      <option value="4">4x de R$ {(total / 4).toFixed(2).replace(".", ",")} sem juros</option>
                      <option value="5">5x de R$ {(total / 5).toFixed(2).replace(".", ",")} sem juros</option>
                      <option value="6">6x de R$ {(total / 6).toFixed(2).replace(".", ",")} sem juros</option>
                    </select>
                  </div>
                </TabsContent>
                <TabsContent value="boleto" className="mt-4">
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="mb-4 flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect width="18" height="10" x="3" y="8" rx="2" />
                        <path d="M7 8v10" />
                        <path d="M11 8v10" />
                        <path d="M15 8v10" />
                        <path d="M19 8v10" />
                      </svg>
                    </div>
                    <p className="mb-2 text-lg font-medium">Pagamento via Boleto Bancário</p>
                    <p className="text-sm text-gray-500">
                      O boleto será gerado após a finalização do pedido e tem validade de 3 dias úteis. O pedido será
                      confirmado apenas após o pagamento do boleto.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="pix" className="mt-4">
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="mb-4 flex justify-center">
                      <Wallet className="h-12 w-12 text-primary" />
                    </div>
                    <p className="mb-2 text-lg font-medium">Pagamento via Pix</p>
                    <p className="text-sm text-gray-500">
                      O QR Code e as informações para pagamento serão gerados após a finalização do pedido. O pagamento
                      é processado instantaneamente.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Resumo do pedido */}
        <div className="lg:sticky lg:top-6 lg:h-fit">
          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-semibold">Resumo do Pedido</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start space-x-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">Qtd: {item.quantity}</p>
                    <p className="mt-1 text-sm font-medium">
                      R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Frete</span>
                <span>R$ {shipping.toFixed(2).replace(".", ",")}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>R$ {total.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
            <Button className="mt-6 w-full bg-primary hover:bg-primary-hover" size="lg">
              Finalizar Compra
            </Button>
            <p className="mt-4 text-center text-xs text-gray-500">
              Ao finalizar a compra, você concorda com nossos{" "}
              <Link href="/termos" className="text-primary hover:underline">
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

