import { ArrowRight, Check, Heart, Leaf, PackageCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories, featuredProducts } from '../data/products'
import HeroSection from '../components/HeroSection'
import CategoryCard from '../components/CategoryCard'
import ProductGrid from '../components/ProductGrid'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import ImageWithFallback from '../components/ImageWithFallback'
import { siteImages } from '../data/images'

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="section-wrap category-section">
        <div className="section-heading"><div><span className="eyebrow">A LITTLE OF EVERYTHING</span><h2>Find your <em>favourite</em></h2></div><Link className="text-link" to="/shop">Browse all collections <ArrowRight size={16} /></Link></div>
        <div className="category-grid">{categories.map((category, index) => <CategoryCard key={category.name} {...category} index={index} />)}</div>
      </section>
      <section className="featured-section">
        <div className="section-wrap"><div className="section-heading"><div><span className="eyebrow">MADE WITH LOVE, LOVED BY MANY</span><h2>Little kitchen <em>favourites</em></h2></div><Link className="text-link" to="/shop">Meet the whole family <ArrowRight size={16} /></Link></div>
          <ProductGrid products={featuredProducts.slice(0, 4)} />
        </div>
      </section>
      <section className="promise-section">
        <div className="promise-image"><ImageWithFallback src={siteImages.homeKitchen} fallbackSrc={siteImages.hero} alt="A traditional Indian home-cooked meal" loading="lazy" /><div className="image-caption"><span>✳</span> FROM OUR KITCHEN, WITH LOVE</div></div>
        <div className="promise-copy"><span className="eyebrow">THE GOOD OLD WAY</span><h2>Real food takes<br /><em>a little more love.</em></h2><p>We believe the best things cannot be hurried. So we still choose the good ingredients, follow the old recipes and make each batch by hand in our Putarekulu kitchen.</p><div className="promise-list"><span><Check size={15} /> Honest, familiar ingredients</span><span><Check size={15} /> Made fresh in small batches</span><span><Check size={15} /> Traditional Andhra recipes</span></div><Link className="text-link" to="/about">A little more about us <ArrowRight size={16} /></Link></div>
      </section>
      <section className="values-strip"><div><Leaf /><b>Good ingredients</b><span>Nothing unnecessary</span></div><div><Heart /><b>Made with care</b><span>Like it’s for our own</span></div><div><Sparkles /><b>Small batches</b><span>Fresh from our kitchen</span></div><div><PackageCheck /><b>Packed with love</b><span>Ready for your home</span></div></section>
      <section className="section-wrap reviews-section"><div className="section-heading"><div><span className="eyebrow">KIND WORDS, FULL HEARTS</span><h2>Shared around <em>the table</em></h2></div><span className="review-note"><span>★★★★★</span> Loved by home-food lovers</span></div><Testimonials /></section>
      <section className="promo-band"><ImageWithFallback className="promo-band-image" src={siteImages.promotion} fallbackSrc={siteImages.hero} alt="" loading="lazy" /><div className="promo-decoration">✳</div><div><span className="eyebrow">A GOOD DAY TO EAT SOMETHING GOOD</span><h2>Something homemade<br /><em>is only a message away.</em></h2><p>Tell Venkatesh what you’re craving. We’ll take it from there.</p><a className="button button-gold" href="https://wa.me/918919631188?text=Hello%20Dhanvitha%20HomeFoods!%20I%27d%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer">Let’s talk on WhatsApp <ArrowRight size={16} /></a></div></section>
      <section className="newsletter-section"><div><span className="eyebrow">A NOTE FROM OUR KITCHEN</span><h2>Good things, <em>in your inbox.</em></h2><p>New batches, seasonal favourites and little reasons to gather around the table.</p></div><Newsletter /></section>
    </>
  )
}
