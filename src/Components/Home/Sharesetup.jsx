import React from 'react'
import Setup from '../../image/setup.png'

const Sharesetup = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 gap'>
      <div className='text-center'>
        <h4 className='text-[#616161]'>Share your setup with</h4>
        <h1 className='text-[#3A3A3A]'>#FuniroFurniture</h1>
      </div>
      <div>
        <img src={Setup} />
      </div>
    </div>
  )
}

export default Sharesetup
