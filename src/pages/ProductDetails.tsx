import { ArrowLeft, ArrowRight, Check, Minus, Plus, ShoppingBag, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductGrid from '../components/ProductGrid'
import { formatPrice } from '../utils/format'
import { priceForWeight } from '../utils/pricing'
import { categoryImages } from '../data/images'
import ImageWithFallback from '../components/ImageWithFallback'
import type { Weight } from '../types'

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)
  const [weight, setWeight] = useState<Weight>('250g')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  if (!product) return <div className="not-found"><span className="eyebrow">OH, CRUMBS</span><h1>We can’t find that favourite.</h1><Link className="button button-green" to="/shop"><ArrowLeft size={16} /> Back to the shop</Link></div>
  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4)

  return (
    <div className="detail-page">
      <div className="detail-breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/shop">Shop</Link><span>/</span><Link to={`/shop?category=${product.category}`}>{product.category}</Link><span>/</span>{product.name}</div>
      <section className="detail-layout section-wrap">
        <div className="detail-gallery"><div className="detail-main-image"><ImageWithFallback src={product.image} fallbackSrc={categoryImages[product.category]} alt={product.name} loading="eager" /><span className="detail-image-label"><Sparkles size={14} /> A LITTLE HOMEMADE MAGIC</span></div><div className="detail-thumbnails"><ImageWithFallback src={product.image} fallbackSrc={categoryImages[product.category]} alt={`${product.name} close-up`} loading="lazy" /><div>MADE FRESH IN SMALL BATCHES</div></div></div>
        <div className="detail-copy"><span className="eyebrow">{product.category.toUpperCase()} · MADE WITH CARE</span><h1>{product.name}</h1><div className="detail-price">{formatPrice(priceForWeight(product, weight))}<span> / {weight}</span></div><div className="detail-rating"><span>★★★★★</span> A much-loved kitchen favourite</div><p>{product.description}</p><div className="detail-divider" /><div className="option-label">Choose your size <span>✳</span></div><div className="weight-options">{product.weights.map((option) => <button key={option} className={weight === option ? 'selected' : ''} onClick={() => setWeight(option)}>{option}{option === '500g' && <small>POPULAR</small>}</button>)}</div><div className="purchase-row"><div className="quantity-control quantity-large"><button aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={15} /></button><b>{quantity}</b><button aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus size={15} /></button></div><button className="button button-green add-detail" onClick={() => addItem(product, weight, quantity)}><ShoppingBag size={18} /> Add to basket · {formatPrice(priceForWeight(product, weight) * quantity)}</button></div><div className="detail-assurance"><span><Check size={15} /> Made in small batches</span><span><Check size={15} /> Packed fresh with care</span><span><Check size={15} /> Order directly on WhatsApp</span></div><div className="ingredients-box"><h3>From our kitchen</h3><p>{product.ingredients.join(' · ')}</p><small>Simple ingredients. Traditional know-how. Nothing to hide.</small></div></div>
      </section>
      <section className="related-section section-wrap"><div className="section-heading"><div><span className="eyebrow">YOU MIGHT LIKE THESE TOO</span><h2>More from <em>the kitchen</em></h2></div><Link className="text-link" to="/shop">See everything <ArrowRight size={16} /></Link></div><ProductGrid products={related} /></section>
    </div>
  )
}
