import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import MainLayout from './Layout/MainLayout'
import ShopPages from './Pages/ShopPages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <MainLayout>
            <HomePages/>
          </MainLayout>
        }/>
        <Route path='/Shop' element={
          <MainLayout>
            <ShopPages/>
          </MainLayout>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
