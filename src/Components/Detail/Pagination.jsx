import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../../data.json'
import arrow from '../../image/icon/arrow.svg'

const Pagination = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id, 10))
    setProduct(foundProduct)
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className='bg-[#F9F1E7] w-full h-[100px] flex  items-center px-6 lg:px-[100px]'>
        <div className='flex flex-row gap-3 items-center'>
          <h5>Home</h5>
          <img src={arrow} className='w-5 h-5' />
          <h5>Shop</h5>
          <img src={arrow} className='w-5 h-5' />
          <h4 className='font-normal border-l-4 pl-4 border-[#9F9F9F] h-[37px] items-center flex'>
            {product.name}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Pagination
