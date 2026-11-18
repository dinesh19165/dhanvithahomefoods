import type { Product, Weight } from '../types'

const weightMultipliers: Record<Weight, number> = { '250g': 1, '500g': 1.9, '1kg': 3.6 }

export const priceForWeight = (product: Product, weight: Weight) =>
  Math.round(product.price * weightMultipliers[weight])
