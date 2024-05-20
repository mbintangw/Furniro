import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import HomePages from './Pages/HomePages'
import MainLayout from './Layout/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <HomePages/>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
