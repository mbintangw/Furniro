import React from 'react'
import Header from '../Components/Header'

const MainLayout = (porps) => {
  return (
    <div>
      <Header/>
      <main>
        {porps.children}
      </main>
    </div>
  )
}

export default MainLayout
