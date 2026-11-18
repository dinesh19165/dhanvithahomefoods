import { ArrowUpRight, Instagram, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/dhanvitha-logo.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/"><img src={logo} alt="Dhanvitha HomeFoods" /></Link>
          <p>Purely homemade. Always healthy.<br />A little taste of home, wherever you are.</p>
        </div>
        <div><h4>Explore</h4><Link to="/shop">Shop all</Link><Link to="/shop?category=Pickles">Our pickles</Link><Link to="/shop?category=Putarekulu">Putarekulu</Link><Link to="/about">Our story</Link></div>
        <div><h4>We’re here</h4><p><MapPin size={16} /> Putarekulu, Andhra Pradesh</p><p><MessageCircle size={16} /> Venkatesh · 8919631188</p><a href="https://wa.me/918919631188" target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight size={14} /></a></div>
        <div className="footer-note"><span className="footer-flower">✳</span><p>Made with care.<br />Shared with love.</p><span>Small batches · Big heart</span></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Dhanvitha HomeFoods</span><span>Good food, made the way it should be.</span><a className="image-credits-link" href="/images/image-credits.json" target="_blank" rel="noreferrer">Photo credits</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a></div>
    </footer>
  )
}
