import { Star } from 'lucide-react'

const reviews = [
  { quote: 'The avakaya tastes exactly like the one my ammamma used to make. One spoon and I’m back at home.', name: 'Sravani K.', place: 'Hyderabad', initial: 'S' },
  { quote: 'Those putharekulu are impossibly delicate. Ordered for a family celebration and everyone asked where they came from.', name: 'Ananya R.', place: 'Vijayawada', initial: 'A' },
  { quote: 'You can taste the care in every bite. The chekkalu arrived crisp, fresh and disappeared before the tea was done.', name: 'Rohit M.', place: 'Visakhapatnam', initial: 'R' },
]

export default function Testimonials() {
  return (
    <div className="testimonial-grid">{reviews.map((review) => (
      <article className="testimonial-card" key={review.name}>
        <div className="stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}</div>
        <blockquote>“{review.quote}”</blockquote>
        <div className="reviewer"><span>{review.initial}</span><div><b>{review.name}</b><small>{review.place} · Verified customer</small></div></div>
      </article>
    ))}</div>
  )
}
