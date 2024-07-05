import React from 'react'
import trophy from '../../image/icon/trophy.svg'
import guarantee from '../../image/icon/guarantee.svg'
import shipping from '../../image/icon/shipping.svg'
import customersupport from '../../image/icon/customer-support.svg'

const BenefitSectionComparison = () => {
  return (
    <div className='flex flex-row lg:flex-col justify-center items-center bg-[#FAF3EA] mt-[85px]'>
      <div className='flex flex-col lg:flex-row justify-center items-start lg:items-center py-[100px]  gap-14'>
        <div className='flex flex-row gap-2'>
          <img src={trophy}/>
          <div>
            <h2>High Quality</h2>
            <h4 className='text-[#898989] font-medium'>crafted from top materials</h4>
          </div>
        </div>

        <div className='flex flex-row gap-2'>
          <img src={guarantee}/>
          <div>
            <h2>Warranty Protection</h2>
            <h4 className='text-[#898989] font-medium'>Over 2 years</h4>
          </div>
        </div>

        <div className='flex flex-row gap-2'>
          <img src={shipping}/>
          <div>
            <h2>Free Shipping</h2>
            <h4 className='text-[#898989] font-medium'>Order over 150 $</h4>
          </div>
        </div>

        <div className='flex flex-row gap-2'>
          <img src={customersupport}/>
          <div>
            <h2>24 / 7 Support</h2>
            <h4 className='text-[#898989] font-medium'>Dedicated support</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BenefitSectionComparison
