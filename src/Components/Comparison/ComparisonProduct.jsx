import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../../data.json'

const ComparisonProduct = () => {
  const { id } = useParams()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [compareProducts, setCompareProducts] = useState([])
  const [selectedCompareProduct, setSelectedCompareProduct] = useState(null)

  useEffect(() => {
    // Fetch the selected product based on id
    const foundProduct = data.find((item) => item.id === parseInt(id, 10))
    setSelectedProduct(foundProduct)
  }, [id])

  useEffect(() => {
    // Filter products by the same category as selected product
    if (selectedProduct) {
      const filteredProducts = data.filter(
        (item) =>
          item.category === selectedProduct.category &&
          item.id !== parseInt(id, 10)
      )
      setCompareProducts(filteredProducts)
    }
  }, [selectedProduct, id])

  const handleComparisonChange = (e) => {
    const productId = parseInt(e.target.value, 10)
    const foundCompareProduct = compareProducts.find(
      (product) => product.id === productId
    )
    setSelectedCompareProduct(foundCompareProduct)
  }

  return (
    <div className='mx-5 lg:mx-[54px] mt-[34px]'>
      <div className='flex gap-5 md:gap-10 lg:gap-[75px] justify-between '>

        <div className='w-[70px] md:w-[242px]'>
          <h2 className='text-sm md:text-xl lg:text-3xl font-medium '>
            Go to Product page for more Products
          </h2>
          <p className='text-[#9F9F9F] underline underline-offset-8'>
            View More
          </p>
        </div>

        <div className=' w-[200px] md:w-[610px] flex gap-[30px] md:gap-[47px]'>
          {selectedProduct && (
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className='w-[100px] h-[70px] md:w-[130px] md:h-[100px] lg:w-[280px] lg:h-[211px] object-fill'
              />
              <h3 className='text-sm md:text-xl lg:text-2xl'>{selectedProduct.name}</h3>
              <p className='text-xs md:text-sm lg:text-lg'>Price: Rp. {selectedProduct.price}</p>
              <p className='text-xs md:text-sm lg:text-lg'>{selectedProduct.rating}</p>
            </div>
          )}
          {selectedCompareProduct && (
            <div>
              <img
                src={selectedCompareProduct.image}
                alt={selectedCompareProduct.name}
                className='w-[100px] h-[70px] md:w-[130px] md:h-[100px] lg:w-[280px] lg:h-[211px] object-fill'
              />
              <h3 className='text-sm md:text-xl lg:text-2xl'>{selectedCompareProduct.name}</h3>
              <p className='text-xs md:text-sm lg:text-lg'>Price: Rp. {selectedCompareProduct.price}</p>
              <p className='text-xs md:text-sm lg:text-lg'>{selectedCompareProduct.rating}</p>
            </div>
          )}
        </div>

        <div className=''>
          {compareProducts.length > 0 && (
            <div className='mt-4'>
              <h2 className='text-sm md:text-xl lg:text-2xl'>Add A Product</h2>
              <select
                id='comparisonDropdown'
                onChange={handleComparisonChange}
                className='bg-primary text-white w-[70px] md:w-[242px] h-12 py-[6px] md:pl-4 rounded-xl'
              >
                <option value=''>Choose a Product</option>
                {compareProducts.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      <div className='overflow-x-auto mt-10'>
        <table className='table-fixed '>
          <thead className='head'>
            <tr>
              <th>General</th>
            </tr>
          </thead>

          <tbody className='row'>
            <tr className=' '>
              <td className=''>Sales Package</td>
              <td>{selectedProduct?.detail.general.sales_package || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.general.sales_package || 'N/A'}
              </td>
              <td> </td>
            </tr>

            <tr className=''>
              <td className=''>Model Number</td>
              <td>{selectedProduct?.detail.general.model_number || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.general.model_number || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Secondary Material</td>
              <td>{selectedProduct?.detail.general.secondary_material || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.general.secondary_material || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Configuration</td>
              <td>{selectedProduct?.detail.general.configuration || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.general.configuration || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Upholstery Material</td>
              <td>{selectedProduct?.detail.general.upholstery_material || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.general.upholstery_material || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Upholstery Color</td>
              <td>{selectedProduct?.detail.general.upholstery_color || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.general.upholstery_color || 'N/A'}
              </td>
            </tr>
          </tbody>

          <thead className='head'>
            <tr className=''>
              <th>Product</th>
            </tr>
          </thead>

          <tbody className='row'>
            <tr>
              <td>Filling Material</td>
              <td>{selectedProduct?.detail.product.filling_material || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.product.filling_material || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Finish Type</td>
              <td>{selectedProduct?.detail.product.finish_type || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.product.finish_type || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Adjustable Headrest</td>
              <td>{selectedProduct?.detail.product.adjustable_headrest || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.product.adjustable_headrest || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Maximum Load Capacity</td>
              <td>{selectedProduct?.detail.product.maximum_load_capacity || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.product.maximum_load_capacity || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Origin of Manufacture</td>
              <td>{selectedProduct?.detail.product.origin_of_manufacture || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.product.origin_of_manufacture || 'N/A'}
              </td>
            </tr>
          </tbody>

          <thead className='head'>
            <tr>
              <th>Dimensions</th>
            </tr>
          </thead>

          <tbody className='row'>
            <tr className=''>
              <td className=''>Width</td>
              <td className=''>{selectedProduct?.detail.dimensions.width || 'N/A'}</td>
              <td className=''>
                {selectedCompareProduct?.detail.dimensions.width || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{selectedProduct?.detail.dimensions.height || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.dimensions.height || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Depth</td>
              <td>{selectedProduct?.detail.dimensions.depth || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.dimensions.depth || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{selectedProduct?.detail.dimensions.weight || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.dimensions.weight || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Seat Height</td>
              <td>{selectedProduct?.detail.dimensions.seat_height || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.dimensions.seat_height || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Leg Height</td>
              <td>{selectedProduct?.detail.dimensions.leg_height || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.dimensions.leg_height || 'N/A'}
              </td>
            </tr>
          </tbody>

          <thead className='head'>
            <tr>
              <th>Warranty</th>
            </tr>
          </thead>

          <tbody className='row' >
            <tr>
              <td>Warranty Summary</td>
              <td>{selectedProduct?.detail.warranty.warranty_summary || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.warranty.warranty_summary || 'N/A'}
              </td>
            </tr>
            <tr >
              <td>Warranty Service Type</td>
              <td>{selectedProduct?.detail.warranty.warranty_service_type || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.warranty.warranty_service_type || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Covered in Warranty</td>
              <td>{selectedProduct?.detail.warranty.covered_in_warranty || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.warranty.covered_in_warranty || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Not Covered in Warranty</td>
              <td>{selectedProduct?.detail.warranty.not_covered_in_warranty || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.warranty.not_covered_in_warranty || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Domestic Warranty</td>
              <td>{selectedProduct?.detail.warranty.domestic_warranty || 'N/A'}</td>
              <td>
                {selectedCompareProduct?.detail.warranty.domestic_warranty || 'N/A'}
              </td>
            </tr>
            <tr>
              <td>
                
              </td>
              <td>
              <button className='fill'>Add to Chart</button>
              </td>
              <td>
              <button className='fill'>Add to Chart</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComparisonProduct

