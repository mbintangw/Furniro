import React, { useState, useEffect } from 'react'
import data from '../../../data.json'
import { useParams } from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";

const DescriptionProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedTab, setSelectedTab] = useState('description')

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id, 10))
    setProduct(foundProduct)
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  const handleTabClick = (tab) => {
    setSelectedTab(tab)
  }

  return (
    <div className='flex flex-col gap-[37px] border-t-2'>
      <div className='flex justify-center items-center text-center px-2 mt-12 md:gap-[43px] lg:gap-[53px] cursor-pointer'>
        <h3
          className={selectedTab === 'description' ? 'text-xl lg:text-2xl' : 'text-[#9F9F9F] text-xl lg:text-2xl'}
          onClick={() => handleTabClick('description')}
        >
          Description
        </h3>
        <h3
          className={selectedTab === 'additional-information' ? 'text-xl lg:text-2xl' : 'text-[#9F9F9F] text-xl lg:text-2xl'}
          onClick={() => handleTabClick('additional-information')}
        >
          Additional Information
        </h3>
        <h3
          className={selectedTab === 'reviews' ? 'text-xl lg:text-2xl' : 'text-[#9F9F9F] text-xl lg:text-2xl'}
          onClick={() => handleTabClick('reviews')}
        >
          Reviews [{product.reviews.length}]
        </h3>
      </div>

      <div className='flex justify-center items-center text-center h-[174px] px-5'>
        {selectedTab === 'description' && <p className=' text-wrap text-justify'>{product.description}</p>}
        {selectedTab === 'additional-information' && <p className=''>{product.additional_information}</p>}
        
        {selectedTab === 'reviews' && (
          <div className='flex flex-row items-center justify-center gap-5'>
            {product.reviews.map((review) => (
                <div key={review.id} className='flex flex-col items-center'>
                  <RxAvatar className='w-[48px] h-[48px]'/>
                  <h4>{review.name}</h4>
                  <p>Rating: {review.rating}</p>
                  <p>{review.comment}</p>
                </div>
            ))}
          </div>
        )}
      </div>

      <div className='flex justify-center gap-[29px]'>
        <img
          src={product.image}
          alt={product.name}
          className='w-[150px] h-[150px] md:w-[350px] md:h-[350px] lg:w-[605px] lg:h-[348px]'
        />
        <img
          src={product.image}
          alt={product.name}
          className='w-[150px] h-[150px] md:w-[350px] md:h-[350px] lg:w-[605px] lg:h-[348px]'
        />
      </div>
    </div>
  )
}

export default DescriptionProduct
