import { ArrowRight } from 'lucide-react'
import { useState, type FormEvent } from 'react'

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
    setEmail('')
  }
  return (
    <form className="newsletter-form" onSubmit={submit}>
      <label className="sr-only" htmlFor="newsletter-email">Your email address</label>
      <input id="newsletter-email" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required />
      <button type="submit" aria-label="Subscribe"><ArrowRight size={19} /></button>
      <span className={`newsletter-success ${subscribed ? 'visible' : ''}`} role="status">{subscribed ? 'You’re on the list — thank you!' : ' '}</span>
    </form>
  )
}
