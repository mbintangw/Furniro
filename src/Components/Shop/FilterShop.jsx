import React, { useState } from 'react'
import filter from '../../image/icon/filter.svg'
import grid from '../../image/icon/grid-big-round.svg'
import list from '../../image/icon/view-list.svg'

const FilterShop = ({
  setViewMode,
  setItemsPerPage,
  setSortOrder,
  selectedCategories,
  setSelectedCategories,
  filteredProducts,
}) => {
  const [isfilterOpen, setIsfilterOpen] = useState(false)

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value)
  }

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value)
  }

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target

    if (value === 'all') {
      setSelectedCategories(checked ? ['all'] : [])
    } else {
      setSelectedCategories((prevCategories) => {
        if (checked) {
          return prevCategories.includes('all')
            ? [value]
            : [...prevCategories, value]
        } else {
          const newCategories = prevCategories.filter(
            (category) => category !== value
          )
          return newCategories.length === 0 ? ['all'] : newCategories
        }
      })
    }
  }

  return (
    <div className='relative'>
      <div className='bg-[#F9F1E7] w-full h-[100px] flex justify-between items-center px-6 lg:px-[100px]'>
        <div className='flex flex-row gap-6 lg:items-center lg:justify-center h-[37px]'>
          <div className='relative flex gap-2'>
            <img
              src={filter}
              className='w-7 h-7 cursor-pointer'
              alt='filter'
              onClick={() => setIsfilterOpen(!isfilterOpen)}
            />
            <h4 className='font-normal ml-2 '>Filter</h4>
            {isfilterOpen && (
              <div className='absolute mt-10 bg-white border rounded shadow-lg p-4 z-30 w-[150px]'>
                <h4 className='font-normal mb-2'>Category</h4>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      value='all'
                      checked={
                        selectedCategories && selectedCategories.includes('all')
                      }
                      onChange={handleCategoryChange}
                    />
                    All
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      value='chair'
                      checked={
                        selectedCategories &&
                        selectedCategories.includes('chair')
                      }
                      onChange={handleCategoryChange}
                    />
                    Chair
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      value='sofa'
                      checked={
                        selectedCategories &&
                        selectedCategories.includes('sofa')
                      }
                      onChange={handleCategoryChange}
                    />
                    Sofa
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      value='lamp'
                      checked={
                        selectedCategories &&
                        selectedCategories.includes('lamp')
                      }
                      onChange={handleCategoryChange}
                    />
                    Lamp
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      value='table'
                      checked={
                        selectedCategories &&
                        selectedCategories.includes('table')
                      }
                      onChange={handleCategoryChange}
                    />
                    Table
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      value='vase'
                      checked={
                        selectedCategories &&
                        selectedCategories.includes('vase')
                      }
                      onChange={handleCategoryChange}
                    />
                    Vase
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      value='wardrobe'
                      checked={
                        selectedCategories &&
                        selectedCategories.includes('wardrobe')
                      }
                      onChange={handleCategoryChange}
                    />
                    Wardrobe
                  </label>
                </div>
              </div>
            )}
          </div>
          <div className='flex flex-row gap-6'>
            <img
              src={grid}
              className='w-7 h-7 cursor-pointer'
              alt='grid'
              onClick={() => setViewMode('grid')}
            />
            <img
              src={list}
              className='w-7 h-7 cursor-pointer'
              alt='list'
              onClick={() => setViewMode('list')}
            />
          </div>
          <h4 className='font-normal border-l-4 pl-4 border-[#9F9F9F] h-full lg:flex items-center hidden'>
            Showing 1 of {filteredProducts} results
          </h4>
        </div>

        <div className='flex flex-row gap-7 items-center'>
          <div className='lg:flex flex-row gap-3 hidden'>
            <h4 className='font-normal'>Show</h4>
            <select onChange={handleItemsPerPageChange} className='ml-2'>
              <option value='10'>10</option>
              <option value='30'>30</option>
              <option value='all'>All</option>
            </select>
          </div>
          <div className='flex flex-row gap-3'>
            <h4 className='font-normal'>Sort by</h4>
            <select
              onChange={handleSortOrderChange}
              className='ml-2 w-5 lg:w-max'
            >
              <option value='default'>Default</option>
              <option value='asc'>Price: Low to High</option>
              <option value='desc'>Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterShop
