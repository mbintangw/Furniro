import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import Category from '../Components/Home/Category'
import OurProducts from '../Components/Home/OurProducts'
import Inspiration from '../Components/Home/Inspiration'
import Sharesetup from '../Components/Home/Sharesetup'

const HomePages = () => {
  return (
    <div className='flex flex-col gap-14'>
      <HeroSection/>
      <Category/>
      <OurProducts/>
      <Inspiration/>
      <Sharesetup/>
    </div>
  )
}

export default HomePages
