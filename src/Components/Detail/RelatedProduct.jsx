import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import data from '../../../data.json'
import share from '../../image/icon/share-white.svg'
import like from '../../image/icon/heart-white.svg'
import compare from '../../image/icon/compare-white.svg'

const RelatedProduct = () => {
  const [showMore, setShowMore] = useState(false)
  const moreproducts = showMore ? data : data.slice(0, 4)

  return (
  <div className='flex flex-col items-center justify-center gap-11'>
      <div >
        <h1 className='font-normal'>Related Products</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {moreproducts.length > 0 ? (moreproducts.map((item,index) => (
          <Link to={`/Detail/${item.id}`} key={index}>
          <div className='card-product' key={index}>
            <img src={item.image}/>
            <h3>{item.name}</h3>
            <p className='font-medium text-gray-500 line-clamp-1'>{item.additional_information}</p>
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
          </Link>
        ))
        ) : (
          <p>No more products</p>)}
      </div>

      {data.length > 4 && (
        <button className='outline' onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</button>
      )}
    </div>
  )
}

export default RelatedProduct
