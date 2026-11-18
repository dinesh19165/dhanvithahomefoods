import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import { priceForWeight } from '../utils/pricing'
import { categoryImages } from '../data/images'
import ImageWithFallback from '../components/ImageWithFallback'

const DELIVERY = 60

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart()
  return (
    <div className="cart-page section-wrap">
      <div className="page-intro"><span className="eyebrow">A GOOD CHOICE, IF WE DO SAY SO</span><h1>Your basket <em>of goodness.</em></h1><p>Every little thing is made by hand and packed with care.</p></div>
      {!items.length ? <div className="empty-cart"><div className="empty-cart-icon"><ShoppingBag size={31} /></div><span className="eyebrow">NOTHING IN THE BASKET (YET)</span><h2>There’s room for something lovely.</h2><p>Take a little look around our kitchen and find a new favourite.</p><Link className="button button-green" to="/shop">Explore the shop <ArrowRight size={16} /></Link></div> : <div className="cart-layout"><div className="cart-lines"><div className="cart-table-label"><span>YOUR GOOD THINGS <b>({items.reduce((count, item) => count + item.quantity, 0)} items)</b></span><Link to="/shop">Keep exploring <ArrowRight size={14} /></Link></div>{items.map(({ product, weight, quantity }) => <article className="cart-line" key={`${product.id}-${weight}`}><Link to={`/product/${product.id}`}><ImageWithFallback src={product.image} fallbackSrc={categoryImages[product.category]} alt={product.name} loading="lazy" /></Link><div className="cart-line-info"><span className="eyebrow">{product.category}</span><Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link><span>{weight} · {formatPrice(priceForWeight(product, weight))}</span><button className="remove-line" onClick={() => removeItem(product.id, weight)}><Trash2 size={13} /> Remove</button></div><div className="cart-line-end"><div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => updateQuantity(product.id, weight, quantity - 1)}><Minus size={13} /></button><b>{quantity}</b><button aria-label="Increase quantity" onClick={() => updateQuantity(product.id, weight, quantity + 1)}><Plus size={13} /></button></div><strong>{formatPrice(priceForWeight(product, weight) * quantity)}</strong></div></article>)}</div><aside className="order-summary"><span className="eyebrow">THE LITTLE DETAILS</span><h2>Order summary</h2><div className="summary-row"><span>Subtotal</span><b>{formatPrice(subtotal)}</b></div><div className="summary-row"><span>Delivery</span><b>{formatPrice(DELIVERY)}</b></div><p className="delivery-note">A flat delivery estimate for your order.</p><div className="summary-total"><span>Total</span><strong>{formatPrice(subtotal + DELIVERY)}</strong></div><Link className="button button-green button-full" to="/checkout">On to delivery details <ArrowRight size={16} /></Link><div className="secure-note">✳ &nbsp; Checkout securely over WhatsApp</div></aside></div>}
      <Link to="/shop" className="back-shop"><ArrowLeft size={15} /> Back to the good things</Link>
    </div>
  )
}
