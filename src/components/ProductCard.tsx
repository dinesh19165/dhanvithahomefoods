import { ArrowUpRight, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { categoryImages } from '../data/images'
import type { Product } from '../types'
import { formatPrice } from '../utils/format'
import ImageWithFallback from './ImageWithFallback'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-photo">
        <ImageWithFallback src={product.image} fallbackSrc={categoryImages[product.category]} alt={product.name} loading="lazy" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <span className="product-view"><ArrowUpRight size={19} /></span>
      </Link>
      <div className="product-info">
        <div className="product-meta"><span>{product.category}</span><span className="availability"><i /> Made fresh</span></div>
        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        <div className="product-bottom"><strong>{formatPrice(product.price)} <small>/ 250g</small></strong><button onClick={() => addItem(product, '250g')} aria-label={`Add ${product.name} to basket`}><ShoppingBag size={17} /><span>Add</span></button></div>
      </div>
    </article>
  )
}
