import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import SiteLayout from './layouts/SiteLayout'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import OrderSent from './pages/OrderSent'
import ProductDetails from './pages/ProductDetails'
import Shop from './pages/Shop'
import './styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'product/:id', element: <ProductDetails /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'order-sent', element: <OrderSent /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <div className="not-found"><span className="eyebrow">THIS PAGE WANDERED OFF</span><h1>Let’s get you back to something good.</h1><a className="button button-green" href="/">Back home <ArrowBack /></a></div> },
    ],
  },
])

function ArrowBack() {
  return <span aria-hidden="true">→</span>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider><RouterProvider router={router} future={{ v7_startTransition: true }} /></CartProvider>
  </React.StrictMode>,
)
