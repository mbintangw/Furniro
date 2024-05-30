import React from 'react'
import data from '../../../data.json'
import share from '../../image/icon/share-white.svg'
import like from '../../image/icon/heart-white.svg'
import compare from '../../image/icon/compare-white.svg'

const ListProducts = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 mt-[46px]'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {data.map((item,index) => (
          <div className='card-product' key={index}>
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
    </div>
  )
}

export default ListProducts
