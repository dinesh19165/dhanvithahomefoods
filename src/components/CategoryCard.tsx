import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryImages, siteImages } from '../data/images'
import type { Category } from '../types'
import ImageWithFallback from './ImageWithFallback'

interface CategoryCardProps {
  name: Category
  description: string
  image: string
  index?: number
}

export default function CategoryCard({ name, description, image, index = 0 }: CategoryCardProps) {
  return (
    <Link className={`category-card category-tone-${index % 4}`} to={`/shop?category=${encodeURIComponent(name)}`}>
      <div className="category-image"><ImageWithFallback src={image} fallbackSrc={categoryImages[name] || siteImages.hero} alt={name} loading="lazy" /><span><ArrowUpRight size={19} /></span></div>
      <div className="category-copy"><span>{description}</span><h3>{name}</h3></div>
    </Link>
  )
}
