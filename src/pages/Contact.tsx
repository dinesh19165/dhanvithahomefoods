import { ArrowRight, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { whatsappUrl } from '../utils/format'
import ImageWithFallback from '../components/ImageWithFallback'
import { siteImages } from '../data/images'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    const data = new FormData(event.currentTarget)
    const message = `Hello Dhanvitha HomeFoods! I'm ${String(data.get('name'))}.\n\n${String(data.get('message'))}\n\nYou can reach me at ${String(data.get('mobile'))}.`
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    event.currentTarget.reset()
  }
  return (
    <div className="contact-page section-wrap"><div className="contact-intro"><span className="eyebrow">WE’D LOVE TO HEAR FROM YOU</span><h1>Come say <em>hello.</em></h1><p>Questions about what’s cooking? Want to place an order? Venkatesh is just a message away.</p></div><div className="contact-layout"><div className="contact-details"><div className="contact-photo"><ImageWithFallback src={siteImages.contactKitchen} fallbackSrc={siteImages.homeKitchen} alt="Traditional roti being made in a home kitchen" loading="lazy" /><span>A LITTLE LOVE FROM OUR KITCHEN</span></div><div className="contact-method"><span><MessageCircle /></span><div><small>THE QUICKEST WAY TO REACH US</small><h3>WhatsApp Venkatesh</h3><a href="https://wa.me/918919631188" target="_blank" rel="noreferrer">+91 89196 31188 <ArrowRight size={14} /></a></div></div><div className="contact-method"><span><MapPin /></span><div><small>WHERE THE GOOD THINGS ARE MADE</small><h3>Putarekulu</h3><p>Andhra Pradesh, India</p></div></div><div className="contact-method"><span><Phone /></span><div><small>CONTACT PERSON</small><h3>Venkatesh</h3><p>Usually happy to talk food.</p></div></div></div><form className="contact-form" onSubmit={submit}><span className="eyebrow">DROP US A LITTLE NOTE</span><h2>What’s on your mind?</h2><p>Fill this in and we’ll take you straight to WhatsApp to send it along.</p><label>Your name<input name="name" placeholder="What should we call you?" required minLength={2} /></label><label>Mobile number<input name="mobile" type="tel" inputMode="numeric" placeholder="10-digit number" required pattern="[6-9][0-9]{9}" /></label><label>Your message<textarea name="message" rows={5} placeholder="Tell us what you’re thinking..." required minLength={5} /></label>{submitted && <p className="form-success" role="status">Your note is ready in WhatsApp — send it our way!</p>}<button type="submit" className="button button-green button-full"><MessageCircle size={17} /> Send your note on WhatsApp <ArrowRight size={15} /></button><small className="contact-small">We usually reply within one working day.</small></form></div><div className="contact-bottom"><span>MADE IN PUTAREKULU, WITH LOVE</span><Link to="/shop">Find something delicious <ArrowRight size={14} /></Link></div></div>
  )
}
