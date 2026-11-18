import { ArrowLeft, ArrowRight, MapPin, MessageCircle } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice, whatsappUrl } from '../utils/format'
import { priceForWeight } from '../utils/pricing'
import { categoryImages } from '../data/images'
import ImageWithFallback from '../components/ImageWithFallback'

const DELIVERY = 60

export default function Checkout() {
  const { items, subtotal } = useCart()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  if (!items.length) return <div className="empty-cart checkout-empty"><span className="eyebrow">ONE LITTLE THING FIRST</span><h2>Your basket is empty.</h2><p>Add something homemade before heading to checkout.</p><Link className="button button-green" to="/shop">Find a favourite <ArrowRight size={16} /></Link></div>

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const name = String(data.get('name')).trim()
    const mobile = String(data.get('mobile')).trim()
    const address = String(data.get('address')).trim()
    const city = String(data.get('city')).trim()
    const state = String(data.get('state')).trim()
    const pincode = String(data.get('pincode')).trim()
    const notes = String(data.get('notes')).trim()
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError('Please enter a valid 10-digit Indian mobile number.')
      return
    }
    if (!/^\d{6}$/.test(pincode)) {
      setError('Please enter a valid 6-digit pincode.')
      return
    }
    setError('')
    const lines = items.map(({ product, weight, quantity }) => `• ${product.name} (${weight}) × ${quantity} — ${formatPrice(priceForWeight(product, weight) * quantity)}`).join('\n')
    const message = `Hello Dhanvitha HomeFoods! I'd like to place an order.\n\nCUSTOMER DETAILS\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}\nCity: ${city}\nState: ${state}\nPincode: ${pincode}${notes ? `\nOrder notes: ${notes}` : ''}\n\nMY ORDER\n${lines}\n\nSubtotal: ${formatPrice(subtotal)}\nDelivery: ${formatPrice(DELIVERY)}\nGRAND TOTAL: ${formatPrice(subtotal + DELIVERY)}\n\nPlease confirm availability and delivery. Thank you!`
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    navigate('/order-sent')
  }

  return (
    <div className="checkout-page section-wrap"><div className="page-intro"><span className="eyebrow">JUST A FEW LITTLE DETAILS</span><h1>Let’s get this <em>goodness to you.</em></h1><p>We’ll help you finish up with Venkatesh on WhatsApp.</p></div><div className="checkout-layout"><form className="checkout-form" onSubmit={submit}><div className="form-section-heading"><span>01</span><div><h2>Your details</h2><p>So we know who to thank.</p></div></div><div className="form-grid"><label>Full name<input name="name" autoComplete="name" placeholder="e.g. Ananya Rao" required minLength={2} /></label><label>Mobile number<input name="mobile" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit number" required pattern="[6-9][0-9]{9}" /></label><label className="full-field">Delivery address<textarea name="address" autoComplete="street-address" rows={3} placeholder="House number, street, area" required minLength={8} /></label><label>City<input name="city" autoComplete="address-level2" placeholder="Your city" required /></label><label>State<input name="state" autoComplete="address-level1" placeholder="Your state" required /></label><label>Pincode<input name="pincode" inputMode="numeric" autoComplete="postal-code" placeholder="6-digit pincode" required pattern="[0-9]{6}" /></label><label className="full-field">Order notes <span className="optional">(optional)</span><textarea name="notes" rows={2} placeholder="Anything else we should know?" /></label></div>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-green button-full submit-order"><MessageCircle size={18} /> Place order on WhatsApp <ArrowRight size={16} /></button><p className="form-footnote">No payment now. We’ll confirm your order and delivery details directly.</p></form><aside className="checkout-summary"><span className="eyebrow">A LOOK AT YOUR BASKET</span><h2>Your order</h2>{items.map(({ product, weight, quantity }) => <div className="checkout-item" key={`${product.id}-${weight}`}><ImageWithFallback src={product.image} fallbackSrc={categoryImages[product.category]} alt="" loading="lazy" /><div><b>{product.name}</b><span>{weight} × {quantity}</span></div><strong>{formatPrice(priceForWeight(product, weight) * quantity)}</strong></div>)}<div className="summary-row"><span>Subtotal</span><b>{formatPrice(subtotal)}</b></div><div className="summary-row"><span>Delivery</span><b>{formatPrice(DELIVERY)}</b></div><div className="summary-total"><span>Total</span><strong>{formatPrice(subtotal + DELIVERY)}</strong></div><div className="checkout-help"><MapPin size={16} /> Made in Putarekulu, delivered to your doorstep.</div><Link to="/cart" className="checkout-edit"><ArrowLeft size={14} /> Edit your basket</Link></aside></div></div>
  )
}
