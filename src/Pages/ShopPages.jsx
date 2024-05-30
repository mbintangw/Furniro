import React from 'react'
import HeroSectionShop from '../Components/Shop/HeroSectionShop'
import FilterShop from '../Components/Shop/FilterShop'
import ListProducts from '../Components/Shop/ListProducts'

const ShopPages = () => {
  return (
    <div>
      <HeroSectionShop/>
      <FilterShop/>
      <ListProducts/>
    </div>
  )
}

export default ShopPages
