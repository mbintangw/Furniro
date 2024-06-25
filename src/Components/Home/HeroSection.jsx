import React from 'react'
import background from '../../image/home-furniture.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div className='w-full lg:h-screen'>
      <img src={background} className='w-full h-full' />
      <div className='lg:card-arrival rounded-xl p-11 bg-[#FFF3E3] '>
        <h5 className='font-semibold'>New Arrival</h5>
        <h1 className='text-[52px] text-primary'>
          Discover Our New Collection
        </h1>
        <p className='font-medium'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
          maiores.
        </p>
        <Link to='/Shop'>
          <button className='fill mt-[46px]'>BUY NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
