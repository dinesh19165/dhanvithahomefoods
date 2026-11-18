export type Category = 'Pickles' | 'Sweets' | 'Snacks' | 'Putarekulu'
export type Weight = '250g' | '500g' | '1kg'

export interface Product {
  id: string
  name: string
  category: Category
  description: string
  ingredients: string[]
  image: string
  price: number
  weights: Weight[]
  featured: boolean
  available: boolean
  badge?: string
}

export interface CartItem {
  product: Product
  weight: Weight
  quantity: number
}
