import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import MainLayout from './Layout/MainLayout'
import ShopPages from './Pages/ShopPages'
import DetailPages from './Pages/DetailPages'
import ScrollToTop from './ScrollToTop'
import AboutPages from './Pages/AboutPages'

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
