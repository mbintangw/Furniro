import React from 'react'
import background from '../../image/bg-pages.jpg'
import arrow from '../../image/icon/arrow.svg'


const HeroSectionContact = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-[316px]'>
        <img
          src={background}
          className='w-full h-full object-cover object-center '
        />
        <div className='absolute top-0 flex items-center justify-center  w-full h-[400px] z-10 backdrop-blur-sm'>
          <div>
            <h1 className='text-[48px] font-medium'>Contact</h1>
            <div className='flex flex-row gap-[6px] items-center justify-center'>
              <h5>Home</h5>
              <img src={arrow} className='w-5 h-5' />
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionContact
