import React from 'react'
import chair from '/image/chair/rigel.jpg'
import sofa from '/image/sofa/procyon.jpg'
import table from '/image/table/vortex.jpg'
import wardrobe from '/image/wardrobe/tegar.jpg'
import lamp from '/image/lamp/lumos.jpg'

const Category = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[62px]'>
      <div className='text-center'>
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-center'>
        <div className='card-category'>
          <img src={chair} alt="chair"/>
          <h2>Chair</h2>
        </div>
        <div className='card-category'>
          <img src={sofa} alt="sofa" />
          <h2 >Sofa</h2>
        </div>
        <div className='card-category'>
          <img src={table} alt="table" className='!object-fill'/>
          <h2 >Table</h2>
        </div>
        <div className='card-category'>
          <img src={wardrobe} alt="wardrobe" />
          <h2 >Wardrobe</h2>
        </div>
        <div className='card-category'>
          <img src={lamp} alt="lamp" className='object-left'/>
          <h2 >Lamp</h2>
        </div>
        <div className='card-category'>
          <img src={chair} alt="chair" />
          <h2 >Chair</h2>
        </div>
      </div>

    </div>
  )
}

export default Category
