import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { categoryImages } from '../data/images'
import { formatPrice } from '../utils/format'
import ImageWithFallback from './ImageWithFallback'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, subtotal, updateQuantity, removeItem } = useCart()
  return (
    <div className={`drawer-backdrop ${open ? 'drawer-open' : ''}`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }} aria-hidden={!open}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Your basket">
        <div className="drawer-heading"><div><span className="eyebrow">A LITTLE SOMETHING GOOD</span><h2>Your basket <span>({items.length})</span></h2></div><button onClick={onClose} aria-label="Close basket"><X /></button></div>
        <div className="drawer-items">
          {!items.length ? <div className="drawer-empty"><ShoppingBag size={38} /><h3>Your basket is waiting.</h3><p>Fill it with something lovely from our kitchen.</p><Link className="button button-green" to="/shop" onClick={onClose}>Explore the shop <ArrowRight size={16} /></Link></div> : items.map(({ product, weight, quantity }) => (
            <div className="drawer-item" key={`${product.id}-${weight}`}>
              <ImageWithFallback src={product.image} fallbackSrc={categoryImages[product.category]} alt="" loading="lazy" /><div className="drawer-item-copy"><Link to={`/product/${product.id}`} onClick={onClose}>{product.name}</Link><span>{weight} · {formatPrice(product.price)}</span><div className="quantity-control"><button aria-label="Decrease quantity" onClick={() => updateQuantity(product.id, weight, quantity - 1)}><Minus size={13} /></button><b>{quantity}</b><button aria-label="Increase quantity" onClick={() => updateQuantity(product.id, weight, quantity + 1)}><Plus size={13} /></button></div></div>
              <div className="drawer-item-right"><b>{formatPrice(product.price * quantity)}</b><button aria-label={`Remove ${product.name}`} onClick={() => removeItem(product.id, weight)}><Trash2 size={15} /></button></div>
            </div>
          ))}
        </div>
        {items.length > 0 && <div className="drawer-bottom"><div><span>Subtotal</span><b>{formatPrice(subtotal)}</b></div><p>Delivery calculated at checkout · WhatsApp ordering</p><Link className="button button-green button-full" to="/cart" onClick={onClose}>View basket <ArrowRight size={16} /></Link></div>}
      </aside>
    </div>
  )
}
