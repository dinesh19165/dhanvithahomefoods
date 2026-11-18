import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href="https://wa.me/918919631188?text=Hello%20Dhanvitha%20HomeFoods!%20I%27d%20love%20to%20know%20more." target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp">
      <MessageCircle size={23} />
      <span>Order on WhatsApp</span>
    </a>
  )
}
