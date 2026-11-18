import type { Category, Product } from '../types'
import { categoryImages, productImages } from './images'

const makeProduct = (
  id: string, name: string, category: Category, description: string,
  price: number, image: string, ingredients: string[], featured = false, badge?: string,
): Product => ({
  id, name, category, description, price, image, ingredients, featured,
  weights: ['250g', '500g', '1kg'], available: true, badge,
})

export const products: Product[] = [
  makeProduct('avakaya', 'Andhra Avakaya', 'Pickles', 'A bold, sun-kissed mango pickle, hand-mixed with aromatic spices and cold-pressed oil.', 220, productImages.avakaya, ['Raw mango', 'Mustard', 'Chilli powder', 'Sesame oil'], true, 'Bestseller'),
  makeProduct('gongura', 'Gongura Pachadi', 'Pickles', 'Tangy gongura leaves slow-cooked with garlic and a warming blend of Andhra spices.', 190, productImages.gongura, ['Gongura leaves', 'Garlic', 'Red chilli', 'Sesame oil'], true),
  makeProduct('lemon', 'Nimmakaya Uragaya', 'Pickles', 'Traditional lemon pickle with a bright citrus tang and just the right kick of spice.', 180, productImages.lemon, ['Lemon', 'Mustard', 'Fenugreek', 'Chilli powder']),
  makeProduct('tomato', 'Tomato Pachadi', 'Pickles', 'Ripe tomatoes simmered with garlic and hand-ground spices for a homestyle favourite.', 170, productImages.tomato, ['Tomatoes', 'Garlic', 'Cumin', 'Red chilli']),
  makeProduct('chicken', 'Spicy Chicken Pickle', 'Pickles', 'A rich, savoury Andhra-style chicken pickle made in small batches with fresh spices.', 390, productImages.chicken, ['Chicken', 'Ginger garlic', 'Chilli', 'Spice blend'], true, 'Small batch'),
  makeProduct('prawn', 'Royyala Prawn Pickle', 'Pickles', 'Tender prawns coated in a lively, aromatic masala inspired by coastal Andhra kitchens.', 450, productImages.prawn, ['Prawns', 'Ginger', 'Garlic', 'Andhra spices']),
  makeProduct('mixed', 'Mixed Vegetable Pickle', 'Pickles', 'A colourful medley of seasonal vegetables preserved in a fragrant homemade masala.', 200, productImages.mixed, ['Seasonal vegetables', 'Mustard', 'Chilli', 'Sesame oil']),
  makeProduct('chilli', 'Gongura Chilli Pickle', 'Pickles', 'Gongura and green chillies come together in a lively pickle with a deliciously rustic finish.', 210, productImages.chilli, ['Gongura', 'Green chilli', 'Garlic', 'Sesame oil']),
  makeProduct('putha-honey', 'Classic Bellam Putharekulu', 'Putarekulu', 'Delicate paper-thin rice starch sheets layered with ghee and traditional jaggery.', 320, productImages.puthaHoney, ['Rice starch', 'Jaggery', 'Pure ghee'], true, 'Signature'),
  makeProduct('putha-sugar', 'Sugar Putharekulu', 'Putarekulu', 'A crisp, feather-light Andhra delicacy filled with fine sugar and a hint of cardamom.', 290, productImages.puthaSugar, ['Rice starch', 'Sugar', 'Pure ghee', 'Cardamom'], true),
  makeProduct('putha-dryfruit', 'Dry Fruit Putharekulu', 'Putarekulu', 'Our signature paper sweet generously filled with cashews, almonds and golden raisins.', 420, productImages.puthaDryFruit, ['Rice starch', 'Cashews', 'Almonds', 'Jaggery'], true, 'Festive favourite'),
  makeProduct('putha-chocolate', 'Chocolate Putharekulu', 'Putarekulu', 'A playful modern twist on a beloved tradition, finished with a rich cocoa filling.', 380, productImages.puthaChocolate, ['Rice starch', 'Cocoa', 'Sugar', 'Pure ghee']),
  makeProduct('putha-cashew', 'Cashew Putharekulu', 'Putarekulu', 'A tender, buttery centre of hand-crushed cashews wrapped in crisp rice-thin layers.', 400, productImages.puthaCashew, ['Rice starch', 'Cashews', 'Jaggery', 'Pure ghee']),
  makeProduct('putha-kaju', 'Kaju Putharekulu Bites', 'Putarekulu', 'Bite-sized paper sweets made for sharing, with a fragrant cardamom and cashew filling.', 440, productImages.puthaKaju, ['Rice starch', 'Cashew', 'Cardamom', 'Pure ghee']),
  makeProduct('laddu', 'Sunnundalu', 'Sweets', 'A timeless Andhra sweet made with roasted urad dal, pure ghee and just a touch of sweetness.', 280, productImages.sunnundalu, ['Urad dal', 'Jaggery', 'Pure ghee'], true, 'Bestseller'),
  makeProduct('ariselu', 'Bellam Ariselu', 'Sweets', 'Soft-centred, golden-brown rice flour delights made with slow-melted jaggery.', 300, productImages.ariselu, ['Rice flour', 'Jaggery', 'Sesame oil'], true),
  makeProduct('boondi', 'Mysore Pak', 'Sweets', 'A melt-in-your-mouth classic prepared slowly with gram flour, sugar and generous ghee.', 350, productImages.mysorePak, ['Gram flour', 'Sugar', 'Pure ghee']),
  makeProduct('kaja', 'Madatha Kaja', 'Sweets', 'Crisp, layered pastry soaked lightly in syrup for a delicate crunch in every bite.', 260, productImages.kaja, ['Wheat flour', 'Sugar', 'Cardamom']),
  makeProduct('pootharekulu-sweet', 'Kobbari Louz', 'Sweets', 'A comforting homemade coconut sweet with a soft bite and a delicate cardamom aroma.', 240, productImages.kobbariLouz, ['Coconut', 'Jaggery', 'Cardamom'], true),
  makeProduct('rava-laddu', 'Rava Laddu', 'Sweets', 'Golden roasted semolina, coconut and cashews rolled into nostalgic little treats.', 220, productImages.ravaLaddu, ['Semolina', 'Sugar', 'Cashews', 'Ghee']),
  makeProduct('murukulu', 'Crispy Murukulu', 'Snacks', 'Light, crunchy spirals seasoned with sesame and a gentle hint of spice.', 180, productImages.murukulu, ['Rice flour', 'Urad dal', 'Sesame', 'Cumin'], true, 'Bestseller'),
  makeProduct('chekkalu', 'Andhra Chekkalu', 'Snacks', 'Hand-pressed rice crackers with curry leaves, peanuts and a lovely savoury crunch.', 190, productImages.chekkalu, ['Rice flour', 'Peanuts', 'Curry leaves', 'Chilli'], true),
  makeProduct('mixture', 'Homestyle Mixture', 'Snacks', 'A moreish blend of crunchy sev, roasted peanuts and traditional South Indian spices.', 200, productImages.mixture, ['Gram flour', 'Peanuts', 'Curry leaves', 'Spices']),
  makeProduct('janthikalu', 'Minapa Janthikalu', 'Snacks', 'Crisp, golden rice and lentil spirals made fresh for teatime and sharing.', 210, productImages.janthikalu, ['Rice flour', 'Urad dal', 'Cumin', 'Sesame']),
  makeProduct('karapoosa', 'Kara Poosa', 'Snacks', 'Fine, airy strands of savoury snack dusted with a delicate homemade spice mix.', 170, productImages.karaPoosa, ['Gram flour', 'Rice flour', 'Chilli', 'Ajwain']),
  makeProduct('boondi-snack', 'Karam Boondi', 'Snacks', 'Tiny, extra-crunchy savoury pearls with curry leaves and a warmly spiced finish.', 180, productImages.karamBoondi, ['Gram flour', 'Curry leaves', 'Chilli', 'Peanuts']),
]

export const categories: { name: Category; description: string; image: string }[] = [
  { name: 'Pickles', description: 'A little taste of home', image: categoryImages.Pickles },
  { name: 'Sweets', description: 'Made for sharing moments', image: categoryImages.Sweets },
  { name: 'Snacks', description: 'Your teatime, made better', image: categoryImages.Snacks },
  { name: 'Putarekulu', description: 'A delicate Andhra treasure', image: categoryImages.Putarekulu },
]

export const featuredProducts = products.filter((product) => product.featured)
