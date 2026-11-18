import { Search, SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import { categories, products } from '../data/products'
import { siteImages } from '../data/images'
import ImageWithFallback from '../components/ImageWithFallback'
import type { Category } from '../types'

const filters = ['All', 'Pickles', 'Sweets', 'Snacks', 'Putarekulu'] as const

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  const category = params.get('category') ?? 'All'
  const shown = useMemo(() => {
    const result = products.filter((product) => (category === 'All' || product.category === category) && `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(search.toLowerCase()))
    if (sort === 'price-low') result.sort((a, b) => a.price - b.price)
    if (sort === 'price-high') result.sort((a, b) => b.price - a.price)
    if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'featured') result.sort((a, b) => Number(b.featured) - Number(a.featured))
    return result
  }, [category, search, sort])
  const selectedCategory = categories.find((item) => item.name === category)

  return (
    <div className="shop-page">
      <div className="shop-banner"><ImageWithFallback className="shop-banner-image" src={siteImages.shop} fallbackSrc={siteImages.hero} alt="" loading="eager" /><div className="shop-banner-content"><span className="eyebrow">OUR LITTLE HOMEFOODS SHOP</span><h1>{selectedCategory?.name ?? 'Good things'}<br /><em>from our kitchen.</em></h1><p>{selectedCategory?.description ?? 'A generous helping of handmade favourites, made slowly and shared with love.'}</p><div className="shop-breadcrumb">Home <span>/</span> Shop <span>/</span> {selectedCategory?.name ?? 'All products'}</div></div><div className="shop-banner-art"><span>✳</span><b>MADE<br />BY HAND</b><span>IN SMALL BATCHES</span></div></div>
      <section className="section-wrap shop-content">
        <div className="shop-toolbar"><div><span className="eyebrow">THE WHOLE DELICIOUS LOT</span><h2>{selectedCategory?.name ?? 'Shop all'} <small>({shown.length})</small></h2></div><div className="shop-controls"><label className="search-field"><Search size={17} /><input type="search" placeholder="Find something lovely..." value={search} onChange={(event) => setSearch(event.target.value)} aria-label="Search products" /></label><label className="sort-field"><SlidersHorizontal size={16} /><span className="sr-only">Sort products</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured first</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name: A to Z</option></select></label></div></div>
        <div className="shop-layout"><aside className="shop-sidebar"><span className="eyebrow">SHOP BY</span>{filters.map((filter) => <button key={filter} className={category === filter ? 'active' : ''} onClick={() => setParams(filter === 'All' ? {} : { category: filter as Category })}>{filter}<span>{filter === 'All' ? products.length : products.filter((product) => product.category === filter).length}</span></button>)}</aside><div className="shop-results"><div className="mobile-filter">{filters.map((filter) => <button key={filter} className={category === filter ? 'active' : ''} onClick={() => setParams(filter === 'All' ? {} : { category: filter as Category })}>{filter}</button>)}</div><ProductGrid products={shown} /></div></div>
      </section>
    </div>
  )
}
