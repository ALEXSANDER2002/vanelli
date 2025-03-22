"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  discount?: number
  finalPrice?: number
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  itemCount: number
  subtotal: number
  shipping: number
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Carregar carrinho do localStorage ao iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem("vanelli-cart")
    if (storedCart) {
      setItems(JSON.parse(storedCart))
    }
  }, [])

  // Salvar carrinho no localStorage quando mudar
  useEffect(() => {
    localStorage.setItem("vanelli-cart", JSON.stringify(items))
  }, [items])

  const addItem = (item: CartItem) => {
    setItems((currentItems) => {
      // Verificar se o item já existe no carrinho
      const existingItemIndex = currentItems.findIndex((i) => i.id === item.id)

      if (existingItemIndex >= 0) {
        // Se existir, aumentar a quantidade
        const updatedItems = [...currentItems]
        updatedItems[existingItemIndex].quantity += item.quantity
        return updatedItems
      } else {
        // Se não existir, adicionar ao carrinho
        return [...currentItems, item]
      }
    })
  }

  const removeItem = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return

    setItems((currentItems) => currentItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  // Calcular totais
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  const subtotal = items.reduce((total, item) => {
    const itemPrice = item.finalPrice || item.price
    return total + itemPrice * item.quantity
  }, 0)

  // Frete grátis para compras acima de R$ 150
  const shipping = subtotal > 150 ? 0 : 15.9

  const total = subtotal + shipping

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart deve ser usado dentro de um CartProvider")
  }
  return context
}

