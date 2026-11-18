import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartDrawer from '../components/CartDrawer'
import WhatsAppButton from '../components/WhatsAppButton'
import { useCart } from '../context/CartContext'

export default function SiteLayout() {
  const [cartOpen, setCartOpen] = useState(false)
  const { toast } = useCart()
  const location = useLocation()
  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main key={location.pathname} className="page-enter"><Outlet /></main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <WhatsAppButton />
      <div className={`toast ${toast ? 'toast-show' : ''}`} role="status">{toast}</div>
    </>
  )
}
