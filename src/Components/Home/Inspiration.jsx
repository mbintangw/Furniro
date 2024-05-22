import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background from '../../image/home-furniture.jpg'
import Nextarrow from '../../image/icon/nextarrow.svg'

const Inspiration = () => {
  const CustomNextArrow = (props) => {
    const {onClick} = props;
    return (
      <div onClick={onClick}>
        <img src={Nextarrow} alt='next' className='arrow-next'/>
      </div>
    )
  }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div className='flex  flex-col gap-20 lg:gap-0 lg:flex-row justify-evenly items-center'>
      <div className='w-[422px] h-[151px] text-center lg:text-start'>
        <h1>50+ Beautiful rooms inspiration</h1>
        <p className='font-medium text-gray-500 mt-2'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className='fill mt-6'>Explore More</button>
      </div>
      <div className='slider-container'>
          <Slider {...settings}>
              <img src="https://source.unsplash.com//500x500/?interior,living,furniture,table,wardrobe,bedroom&1"/>
              <img src="https://source.unsplash.com//500x500/?interior,living,furniture,table,wardrobe,bedroom&2"/>
              <img src="https://source.unsplash.com//500x500/?interior,living,furniture,table,wardrobe,bedroom&3"/>
              <img src="https://source.unsplash.com//500x500/?interior,living,furniture,table,wardrobe,bedroom&4"/>
              <img src="https://source.unsplash.com//500x500/?interior,living,furniture,table,wardrobe,bedroom&5"/>
              <img src="https://source.unsplash.com//500x500/?interior,living,furniture,table,wardrobe,bedroom&6"/>
              <img src="https://source.unsplash.com//500x500/?interior,living,furniture,table,wardrobe,bedroom&7"/>
              <img src="https://source.unsplash.com//500x500/?interior,living,furniture,table,wardrobe,bedroom&8"/>
              <img src="https://source.unsplash.com//500x500/?interior,living,furniture,table,wardrobe,bedroom&9"/>
              <img src="https://source.unsplash.com//500x500/?interior,living,furniture,table,wardrobe,bedroom&10"/>
          </Slider>
      </div>
    </div>
  )
}

export default Inspiration

{/* <div className='w-[422px] h-[151px]'>
<h1>50+ Beautiful rooms inspiration</h1>
<p className='font-medium text-gray-500 mt-2'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
<button className='fill mt-6'>Explore More</button>
</div> */}