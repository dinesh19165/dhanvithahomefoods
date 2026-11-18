import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function OrderSent() {
  return <section className="order-sent"><div className="sent-check"><Check size={30} /></div><span className="eyebrow">THE GOOD PART IS JUST BEGINNING</span><h1>Your order is on <em>its way to us.</em></h1><p>We’ve opened WhatsApp with your order details. Send the message there and Venkatesh will be in touch to confirm everything.</p><a className="button button-green" href="https://wa.me/918919631188" target="_blank" rel="noreferrer"><MessageCircle size={17} /> Open WhatsApp <ArrowRight size={16} /></a><Link className="sent-link" to="/shop">Back to the shop</Link></section>
}
