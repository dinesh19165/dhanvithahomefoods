import type { Category } from '../types'

export const productImages = {
  avakaya: '/images/products/andhra-avakaya.jpg',
  gongura: '/images/products/gongura-pachadi.jpg',
  lemon: '/images/products/lemon-pickle.jpg',
  tomato: '/images/products/tomato-pachadi.jpg',
  chicken: '/images/products/chicken-pickle.jpg',
  prawn: '/images/products/prawn-pickle.jpg',
  mixed: '/images/products/mixed-vegetable-pickle.jpg',
  chilli: '/images/products/gongura-chilli-pickle.jpg',
  puthaHoney: '/images/products/classic-bellam-putarekulu.jpg',
  puthaSugar: '/images/products/sugar-putarekulu.jpg',
  puthaDryFruit: '/images/products/dry-fruit-putarekulu.jpg',
  puthaChocolate: '/images/products/chocolate-putarekulu.jpg',
  puthaCashew: '/images/products/cashew-putarekulu.jpg',
  puthaKaju: '/images/products/kaju-putarekulu.jpg',
  sunnundalu: '/images/products/sunnundalu.jpg',
  ariselu: '/images/products/ariselu.jpg',
  mysorePak: '/images/products/mysore-pak.jpg',
  kaja: '/images/products/madatha-kaja.jpg',
  kobbariLouz: '/images/products/kobbari-louz.jpg',
  ravaLaddu: '/images/products/rava-laddu.jpg',
  murukulu: '/images/products/murukulu.jpg',
  chekkalu: '/images/products/chekkalu.jpg',
  mixture: '/images/products/indian-mixture-snacks.jpg',
  janthikalu: '/images/products/janthikalu.jpg',
  karaPoosa: '/images/products/kara-poosa.jpg',
  karamBoondi: '/images/products/karam-boondi.jpg',
} as const

export const categoryImages: Record<Category, string> = {
  Pickles: '/images/hero/homepage-pickles.jpg',
  Sweets: '/images/categories/sweets.jpg',
  Snacks: '/images/categories/snacks.jpg',
  Putarekulu: '/images/categories/putarekulu.jpg',
}

export const siteImages = {
  hero: '/images/categories/pickles.jpg',
  shop: '/images/hero/shop-food-banner.jpg',
  homeKitchen: '/images/hero/home-kitchen.jpg',
  aboutKitchen: '/images/hero/about-kitchen.jpg',
  contactKitchen: '/images/hero/contact-kitchen.jpg',
  promotion: '/images/hero/homemade-food-banner.jpg',
}
