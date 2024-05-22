import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const MainLayout = (porps) => {
  return (
    <div>
      <Header/>
      <main>
        {porps.children}
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
