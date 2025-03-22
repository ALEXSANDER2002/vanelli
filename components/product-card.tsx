"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/components/ui/use-toast"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    discount?: number
    finalPrice?: number
    badge?: string
    description?: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      finalPrice: product.finalPrice,
      quantity: 1,
      image: product.image,
      discount: product.discount,
    })

    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao seu carrinho.`,
      variant: "default",
    })
  }

  // Calcular o preço final com desconto
  const finalPrice = product.discount 
    ? (product.price * (100 - product.discount)) / 100 
    : product.price

  return (
    <Card className="overflow-hidden card-hover-effect border-transparent hover:border-accent/50 gradient-hover">
      <CardContent className="p-0">
        <div className="relative">
          <Link href={`/produto/${product.id}`} className="block overflow-hidden group">
            <div className="overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:bg-white transition-all duration-300"
          >
            <Heart className="h-4 w-4 text-primary transition-colors duration-300 hover:text-red-500" />
            <span className="sr-only">Adicionar aos favoritos</span>
          </Button>

          {product.discount && (
            <Badge className="absolute left-2 top-2 bg-accent text-primary font-bold px-2.5 py-1 scale-in">-{product.discount}%</Badge>
          )}
          {product.badge && (
            <Badge className={`absolute left-2 ${product.discount ? "top-10" : "top-2"} bg-primary px-2.5 py-1 scale-in`}>
              {product.badge}
            </Badge>
          )}
        </div>
        <div className="p-4">
          <Link href={`/produto/${product.id}`} className="block">
            <h3 className="font-medium line-clamp-1 text-primary group-hover:text-primary/80 transition-colors duration-300">
              {product.name}
            </h3>
          </Link>
          {product.description && <p className="mt-2 line-clamp-2 text-sm text-teal-700">{product.description}</p>}
          <div className="mt-3 flex items-center">
            {product.discount ? (
              <>
                <span className="font-bold text-primary text-lg">
                  R$ {finalPrice.toFixed(2).replace(".", ",")}
                </span>
                <span className="ml-2 text-sm text-teal-600 line-through">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
              </>
            ) : (
              <span className="font-bold text-primary text-lg">R$ {finalPrice.toFixed(2).replace(".", ",")}</span>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary-hover hover:to-primary 
                    shadow-sm hover:shadow-md transition-all duration-300 pulse-on-hover shine-effect"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  )
}

