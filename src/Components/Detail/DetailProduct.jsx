import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaStar, FaStarHalf, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import data from '../../../data.json'

const DetailProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id, 10))
    setProduct(foundProduct)
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className='text-yellow-400' />)
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<FaStarHalf key='half' className='text-yellow-400' />)
    }

    // Empty stars
    const emptyStarsCount = 5 - stars.length // Assuming a maximum of 5 stars
    for (let i = 0; i < emptyStarsCount; i++) {
      stars.push(
        <AiOutlineStar key={`empty-${i}`} className='text-yellow-400' />
      )
    }

    return stars
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size)
  }
  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? null : color)
  }

  return (
    <div className='py-9'>
      <div className='flex flex-row justify-center gap-20 '>
        <div className='flex  gap-8'>
          <div className='flex flex-col gap-4'>
            <img
              src={product.image}
              alt={product.name}
              className='w-[76px] h-[80px] rounded-xl'
            />
            <img
              src={product.image}
              alt={product.name}
              className='w-[76px] h-[80px] rounded-xl'
            />
            <img
              src={product.image}
              alt={product.name}
              className='w-[76px] h-[80px] rounded-xl'
            />
            <img
              src={product.image}
              alt={product.name}
              className='w-[76px] h-[80px] rounded-xl'
            />
          </div>
          <div>
            <img
              src={product.image}
              alt={product.name}
              className='w-[423px] h-[500px] rounded-xl'
            />
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h1>{product.name}</h1>
          <h4>Rp. {product.price}</h4>
          <div className='text-yellow-400 flex items-center'>
            {renderStars(product.rating)}
            <p>({product.rating})</p>
          </div>
          <p>{product.additional_information}</p>

          <h5 className='text-md font-semibold mb-2 text-[#9F9F9F]'>Size</h5>
          <div className='flex flex-row gap-2'>
            {product.size &&
              product.size.length > 0 &&
              product.size.map((size, index) => (
                <button
                  key={index}
                  className={`py-1 px-3 rounded ${selectedSize === size ? 'bg-primary text-white' : 'bg-[#F9F1E7] text-black'}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
          </div>

          <h5 className='text-md font-semibold mb-2 text-[#9F9F9F]'>Color</h5>
          <div className='flex gap-2'>
            {product.color &&
              product.color.length > 0 &&
              product.color.map((color, index) => (
                <button
                  key={index}
                  className={`text-white py-2 px-2 rounded-full w-8 h-8 border-2 ${selectedColor === color ? `border-4 border-primary` : 'border-transparent'}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorClick(color)}
                ></button>
              ))}
          </div>

          <div className='flex gap-3 mt-8 pb-10'>
            <button className='outline  !text-black rounded-2xl py-[17px] px-12'>
              Add to Chart
            </button>
            <button className='outline  !text-black rounded-2xl py-[17px] px-12'>
              Add to Chart
            </button>
            <button className='outline  !text-black rounded-2xl py-[17px] px-12'>
              + Compare
            </button>
          </div>

          <div className='border-t-2 pt-10'>
            <table>
              <tbody className='text-[#9F9F9F]'>
                <tr >
                  <td >Category</td>
                  <td className='pl-2'><span className='text-[#9F9F9F]'> : </span> {product.category}</td>
                </tr>
                <tr>
                  <td>Tags</td>
                  <td className='pl-2'><span className='text-[#9F9F9F]'> : </span>{product.tags.join(', ')}</td>
                </tr>
                <tr>
                  <td>Share </td>
                  <td className='pl-2 flex items-center gap-3 text-black'><span className='text-[#9F9F9F] -mr-2'> : </span> <FaFacebook/> <FaLinkedin /> <AiFillTwitterCircle /> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct
