import React from 'react'
import Navbar from '../Components/Detail/Navbar'
import DetailProduct from '../Components/Detail/DetailProduct'
import DescriptionProduct from '../Components/Detail/DescriptionProduct'
import RelatedProduct from '../Components/Detail/RelatedProduct'

const DetailPages = () => {
  return (
    <div className='flex flex-col gap-[56px]'>
      <Navbar/>
      <DetailProduct/>
      <DescriptionProduct/>
      <RelatedProduct />
    </div>
  )
}

export default DetailPages
