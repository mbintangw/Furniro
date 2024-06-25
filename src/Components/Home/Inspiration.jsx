import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background from '../../image/home-furniture.jpg'
import Nextarrow from '../../image/icon/nextarrow.svg'
import interior1 from '../../image/interior/interior-1.webp'
import interior2 from '../../image/interior/interior-2.webp'
import interior3 from '../../image/interior/interior-3.webp'
import interior4 from '../../image/interior/interior-4.webp'
import interior5 from '../../image/interior/interior-5.webp'
import interior6 from '../../image/interior/interior-6.webp'
import interior7 from '../../image/interior/interior-7.webp'
import interior8 from '../../image/interior/interior-8.webp'
import interior9 from '../../image/interior/interior-9.webp'
import interior10 from '../../image/interior/interior-10.webp'


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
              <img src={interior1} alt='interior' />
              <img src={interior2} alt='interior' />
              <img src={interior3} alt='interior' />
              <img src={interior4} alt='interior' />
              <img src={interior5} alt='interior' />
              <img src={interior6} alt='interior' />
              <img src={interior7} alt='interior' />
              <img src={interior8} alt='interior' />
              <img src={interior9} alt='interior' />
              <img src={interior10} alt='interior' />

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