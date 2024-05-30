import React from 'react'
import filter from '../../image/icon/filter.svg'
import grid from '../../image/icon/grid-big-round.svg'
import list from '../../image/icon/view-list.svg'

const FilterShop = () => {
  return (
    <div>
      <div className='bg-[#F9F1E7] w-full h-[100px] flex justify-between items-center px-[100px] '>
          <div className='flex flex-row gap-6 items-center justify-center h-[37px]'>
            <div className='flex flex-row gap-6'>
              <img src={filter} className='w-7 h-7'/>
              <h4 className='font-normal'>Filter</h4>
              <img src={grid} className='w-7 h-7'/>
              <img src={list} className='w-7 h-7'/>
            </div>
            <h4 className='font-normal border-l-4 pl-4 broder-[#9F9F9F] h-full flex items-center'>Showing 1-12 of 60 results</h4>
          </div>

          <div className='flex flex-row gap-7'>
            <div>
              <h4 className='font-normal'>Show</h4>
            </div>
            <div>
              <h4 className='font-normal'>Short by</h4>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FilterShop
