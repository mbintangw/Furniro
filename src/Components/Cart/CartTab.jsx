import React, { useContext } from 'react'
import { CartContext } from '../Cart/CartContex'
import cartclose from '../../image/icon/cart-close.svg'
import { IoCloseCircle } from 'react-icons/io5'

const CartTab = ({ onClose }) => {
  const { cartItems, removeFromCart } = useContext(CartContext)

  const handleRemove = (itemId) => {
    removeFromCart(itemId)
  }

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  return (
    <div className='fixed top-0 right-0 w-[450px] h-full bg-white p-7 shadow-lg z-50'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <button onClick={onClose}>
          <img src={cartclose} alt='close' />
        </button>
      </div>

      <div className='mt-7 h-[570px]'>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className='flex justify-between items-center mb-4'>
              <img
                src={item.image}
                alt={item.name}
                className='w-16 h-16 rounded'
              />
              <div className='flex-1 ml-4'>
                <h3 className='text-lg'>{item.name}</h3>
                <p className='tracking-widest'>Size : {item.selectedSize}</p>
                <p className='tracking-widest'>
                  Color :{' '}
                  <span
                    className='inline-block w-4 h-4 rounded-full'
                    style={{
                      backgroundColor: item.selectedColor,
                      verticalAlign: 'middle',
                    }}
                  ></span>
                </p>
                <p className='tracking-widest'>
                  {item.quantity} x  <span className='text-primary'> Rp. {item.price} </span>
                </p>
              </div>
              <button onClick={() => handleRemove(item.id)}>
                <IoCloseCircle
                  size={24}
                  className='hover:text-red-500 text-gray-500'
                />
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className='border-t pt-4 mt-4'>
        <h3 className='text-lg font-bold tracking-widest'>
          Subtotal :  <span className='text-primary'>Rp. {calculateSubtotal()}</span>
        </h3>
      </div>

      <div className='flex justify-between items-center mt-4 border-t pt-4 gap-[14px]'>
        <button className='border border-black rounded-2xl py-[6px] px-[30px]'>
          Cart
        </button>
        <button className='border border-black rounded-2xl py-[6px] px-[30px]'>
          Checout
        </button>
        <button className='border border-black rounded-2xl py-[6px] px-[30px]'>
          Comparison
        </button>
      </div>
    </div>
  )
}

export default CartTab
