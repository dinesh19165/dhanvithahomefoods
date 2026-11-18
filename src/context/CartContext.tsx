import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { CartItem, Product, Weight } from '../types'
import { priceForWeight } from '../utils/pricing'

interface CartContextValue {
  items: CartItem[]
  itemCount: number
  subtotal: number
  toast: string
  addItem: (product: Product, weight: Weight, quantity?: number) => void
  updateQuantity: (id: string, weight: Weight, quantity: number) => void
  removeItem: (id: string, weight: Weight) => void
  clearToast: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('dhanvitha-cart')
      return saved ? JSON.parse(saved) as CartItem[] : []
    } catch (error) {
      console.error('Unable to restore the saved cart.', error)
      return []
    }
  })
  const [toast, setToast] = useState('')

  useEffect(() => {
    localStorage.setItem('dhanvitha-cart', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    if (!toast) return
    const timer = window.setTimeout(() => setToast(''), 2600)
    return () => window.clearTimeout(timer)
  }, [toast])

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + priceForWeight(item.product, item.weight) * item.quantity, 0),
    toast,
    addItem: (product, weight, quantity = 1) => {
      setItems((current) => {
        const found = current.find((item) => item.product.id === product.id && item.weight === weight)
        if (found) return current.map((item) =>
          item.product.id === product.id && item.weight === weight
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
        return [...current, { product, weight, quantity }]
      })
      setToast(`${product.name} added to your basket`)
    },
    updateQuantity: (id, weight, quantity) => {
      setItems((current) => quantity < 1
        ? current.filter((item) => !(item.product.id === id && item.weight === weight))
        : current.map((item) => item.product.id === id && item.weight === weight ? { ...item, quantity } : item))
    },
    removeItem: (id, weight) => setItems((current) =>
      current.filter((item) => !(item.product.id === id && item.weight === weight)),
    ),
    clearToast: () => setToast(''),
  }), [items, toast])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
