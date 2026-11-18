import type { Product } from '../types'
import ProductCard from './ProductCard'

export default function ProductGrid({ products: items }: { products: Product[] }) {
  if (!items.length) return <div className="no-results"><span>◌</span><h3>Nothing simmering here just yet.</h3><p>Try another search or explore a different collection.</p></div>
  return <div className="product-grid">{items.map((product) => <ProductCard key={product.id} product={product} />)}</div>
}
