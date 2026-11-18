import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ImageWithFallback from './ImageWithFallback'
import { siteImages } from '../data/images'

export default function HeroSection() {
  return (
    <section className="hero">
      <ImageWithFallback className="hero-image" src={siteImages.hero} fallbackSrc={siteImages.shop} alt="" loading="eager" />
      <div className="hero-grain" />
      <div className="hero-content">
        <span className="eyebrow hero-eyebrow"><i /> FROM OUR HOME TO YOURS</span>
        <h1>Taste the tradition.<br /><em>Feel the</em> homemade goodness.</h1>
        <p>Recipes passed down, ingredients chosen with care, and every batch made just like home.</p>
        <div className="hero-actions"><Link className="button button-gold" to="/shop">Shop our kitchen <ArrowRight size={17} /></Link><Link className="hero-text-link" to="/shop">Explore all products <ArrowDown size={15} /></Link></div>
        <div className="hero-proof"><span className="proof-mark">✳</span><span>Small batches, always.<br /><b>Made with love in Putarekulu</b></span></div>
      </div>
      <div className="hero-stamp"><span>GOOD THINGS</span><b>TAKE<br />TIME</b><span>✳ MADE BY HAND ✳</span></div>
      <div className="hero-pagination"><b>01</b><span /> 03</div>
    </section>
  )
}
