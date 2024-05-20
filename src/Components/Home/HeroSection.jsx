import React from 'react'
import background from '../../image/home-furniture.jpg'

const HeroSection = () => {
  return (
    <div className='w-full h-[716px]'>
      <img src={background} className='w-full h-full'/>
      <div className='absolute w-[643px] h-[443px] top-[30%] left-[60%] rounded-xl p-11 bg-[#FFF3E3]'>
        <h5 className='font-semibold'>New Arrival</h5>
        <h1 className='text-[52px] text-primary '>Discover Our New Collection</h1>
        <p className='font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, maiores.</p>
        <button className='fill mt-[46px]'>BUY NOW</button>
      </div>
    </div>
  )
}

export default HeroSection
