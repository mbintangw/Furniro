import React, { useState } from 'react'
import HeroSectionShop from '../Components/Shop/HeroSectionShop'
import FilterShop from '../Components/Shop/FilterShop'
import ListProducts from '../Components/Shop/ListProducts'
import BenefitSection from '../Components/Shop/BenefitSection'

const ShopPages = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [itemsPerPage, setItemsPerPage] = useState('10');
  const [sortOrder, setSortOrder] = useState('reset');
  const [selectedCategories, setSelectedCategories] = useState(['all']);

  return (
    <div>
      <HeroSectionShop/>
      <FilterShop
        viewMode={viewMode}
        setViewMode={setViewMode} 
        setItemsPerPage= {setItemsPerPage} 
        setSortOrder={setSortOrder} 
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories} 
      />
      <ListProducts
        viewMode={viewMode} 
        itemsPerPage={itemsPerPage} 
        sortOrder={sortOrder} 
        selectedCategories={selectedCategories}  
      />
      <BenefitSection/>
    </div>
  )
}

export default ShopPages
