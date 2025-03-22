"use client"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/use-toast"

interface CartSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, removeItem, updateQuantity, subtotal, shipping, total, clearCart } = useCart()
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login necessário",
        description: "Faça login para continuar com a compra.",
        variant: "default",
      })
      onOpenChange(false)
      router.push("/login")
      return
    }

    onOpenChange(false)
    router.push("/checkout")
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle className="flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Seu Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length > 0 ? (
          <>
            <div className="flex-1 overflow-auto py-6">
              <div className="space-y-6">
                {items.map((item) => (
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
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <Link
                          href={`/produto/${item.id}`}
                          className="text-sm font-medium hover:underline"
                          onClick={() => onOpenChange(false)}
                        >
                          {item.name}
                        </Link>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-gray-400 hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remover item</span>
                        </Button>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-primary">
                            R$ {((item.finalPrice || item.price) * item.quantity).toFixed(2).replace(".", ",")}
                          </p>
                          {item.discount && (
                            <p className="text-xs text-teal-600 line-through">
                              R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Frete</span>
                  <span>{shipping === 0 ? "Grátis" : `R$ ${shipping.toFixed(2).replace(".", ",")}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <Button className="w-full" onClick={handleCheckout}>
                  Finalizar Compra
                </Button>
                <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)} asChild>
                  <Link href="/carrinho">Ver Carrinho</Link>
                </Button>
                <Button variant="link" className="w-full text-teal-700" onClick={() => clearCart()}>
                  Limpar Carrinho
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center space-y-4">
            <div className="text-center">
              <ShoppingBag className="mx-auto h-12 w-12 text-teal-300" />
              <h3 className="mt-2 text-lg font-medium text-primary">Seu carrinho está vazio</h3>
              <p className="mt-1 text-sm text-teal-600">Adicione produtos ao seu carrinho para continuar comprando</p>
            </div>
            <Button onClick={() => onOpenChange(false)} asChild>
              <Link href="/">Explorar Produtos</Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

