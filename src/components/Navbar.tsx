import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, ShoppingBag, X } from 'lucide-react'
import logo from '../assets/dhanvitha-logo.png'
import { useCart } from '../context/CartContext'

interface NavbarProps {
  onCartClick: () => void
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount } = useCart()
  const links = [['Home', '/'], ['Shop', '/shop'], ['Our Story', '/about'], ['Contact', '/contact']]

  return (
    <>
      <div className="announcement">A little taste of home, delivered with love <span>✦</span> Handmade in small batches</div>
      <header className="site-header">
        <div className="nav-shell">
          <Link to="/" className="brand" onClick={() => setMenuOpen(false)} aria-label="Dhanvitha HomeFoods home">
            <img src={logo} alt="Dhanvitha HomeFoods" />
            <span className="brand-caption">PURELY HOMEMADE · ALWAYS HEALTHY</span>
          </Link>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {links.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === '/'} onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            ))}
            <button className="mobile-cart-link" onClick={() => { onCartClick(); setMenuOpen(false) }}>Your basket ({itemCount})</button>
          </nav>
          <div className="nav-actions">
            <Link className="nav-shop-link" to="/shop">Shop all</Link>
            <button className="cart-icon-button" aria-label={`Open basket, ${itemCount} items`} onClick={onCartClick}>
              <ShoppingBag size={21} /><span>Basket</span><b>{itemCount}</b>
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
