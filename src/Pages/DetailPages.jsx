import React from 'react'
import Navbar from '../Components/Detail/Navbar'
import DetailProduct from '../Components/Detail/DetailProduct'
import DescriptionProduct from '../Components/Detail/DescriptionProduct'

const DetailPages = () => {
  return (
    <div>
      <Navbar/>
      <DetailProduct/>
      <DescriptionProduct/>
    </div>
  )
}

export default DetailPages
