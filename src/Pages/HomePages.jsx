import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import Category from '../Components/Home/Category'
import OurProducts from '../Components/Home/OurProducts'

const HomePages = () => {
  return (
    <div className='flex flex-col gap-14'>
      <HeroSection/>
      <Category/>
      <OurProducts/>
    </div>
  )
}

export default HomePages
