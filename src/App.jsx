import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import MainLayout from './Layout/MainLayout'
import ShopPages from './Pages/ShopPages'
import DetailPages from './Pages/DetailPages'
import ScrollToTop from './ScrollToTop'
import AboutPages from './Pages/AboutPages'
import { CartContext, CartProvider } from './Components/Cart/CartContex'
import ComparisonPages from './Pages/ComparisonPages'
import CheckoutPages from './Pages/CheckoutPages'
import { OrderProvider } from './Components/Checkout/OrderContext'; 
import ContactPages from './Pages/ContactPages'

function App() {
  return (
    <BrowserRouter>
      <OrderProvider>
      <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={
          <MainLayout>
            <HomePages />
          </MainLayout>
        }/>
        <Route path='/Shop' element={
          <MainLayout>
            <ShopPages />
          </MainLayout>
        }/>
        <Route path='/detail/:id' element={
          <MainLayout>
            <DetailPages />
          </MainLayout>
        }/>
        <Route path='/About' element={
          <MainLayout>
            <AboutPages />
          </MainLayout>
        }/>
        <Route path='/Comparison/:id' element={
          <MainLayout>
            <ComparisonPages />
          </MainLayout>
        }/>
        <Route path='/Checkout' element={
          <MainLayout>
            <CheckoutPages />
          </MainLayout>
        }/>
        <Route path='/Contact' element={
          <MainLayout>
            <ContactPages />
          </MainLayout>
        }/>
        
      </Routes>
      </CartProvider>
      </OrderProvider>
    </BrowserRouter>
  )
}

export default App
