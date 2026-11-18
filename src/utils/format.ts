export const formatPrice = (amount: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)

export const whatsappUrl = (message: string) =>
  `https://wa.me/918919631188?text=${encodeURIComponent(message)}`
