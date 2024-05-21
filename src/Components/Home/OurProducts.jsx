import React from 'react'
import data from '../../../data.json'
import share from '../../image/icon/share-white.svg'
import like from '../../image/icon/heart-white.svg'
import compare from '../../image/icon/compare-white.svg'

const OurProducts = () => {
  let product = [];
  product.push (data[0],data[11],data[21],data[31],data[41],data[51],data[45],data[24])

  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <h1 className='text-[40px]'>Our Products</h1>
      <div className='grid grid-cols-4 gap-8'>
        {product.map((item) => (
          <div className='card-product'>
            <img src={item.image}/>
            <h3>{item.name}</h3>
            <p className='font-medium text-gray-500 line-clamp-1'>{item['additional-information']}</p>
            <h4>Rp. {item.price}</h4>
            <div className='overlay'>
              <div className='flex flex-col items-center gap-6'>
                <button className='outline outline-none'>Add to Chart</button>
                <div className='flex flex-row text-white justify-center items-center gap-[10px]'>
                  <img src={share} alt='like'/>
                  <p>Share</p>
                  <img src={compare} alt='like'/>
                  <p>Compare</p>
                  <img src={like} alt='like'/>
                  <p>Like</p>  
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
        <button className='outline'>Show More</button>
    </div>
  )
}

export default OurProducts
