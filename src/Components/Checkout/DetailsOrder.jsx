import React, { useContext, useState } from 'react'
import { OrderContext } from './OrderContext'
import { IoMdCloseCircle } from "react-icons/io";

const DetailsOrder = ({ showPopup, togglePopup }) => {
  const { order } = useContext(OrderContext)


  const handleClose = () => {
    togglePopup()
  }

  if (!showPopup || !order) {
    return null; 
  }

  const { billingDetails, cartItems, total } = order

  return (
    
      <div className='fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50 '>
        <div className='bg-white relative p- rounded-lg lg:w-1/2 w-[500px] h-[500px] lg:h-full overflow-y-auto px-6'>
          <button onClick={handleClose} className='absolute top-5 right-5 '><IoMdCloseCircle className='lg:text-[35px] text-[25px] hover:text-red-500'/></button>
          <div className='flex flex-col justify-center items-center mt-10'>
            <h3 className='lg:text-3xl text-lg font-semibold mb-6'>Order Details</h3>
          </div>
          <div className='flex flex-col gap-4  '>
              <p>
                <strong>Name : </strong> {billingDetails.firstName} {billingDetails.lastName}
              </p>
              <p>
                <strong>Company Name : </strong> {billingDetails.companyName}
              </p>
              <p>
                <strong>Street Address : </strong> 
                {billingDetails.streetAddress}
                ({billingDetails.townCity}, {billingDetails.province},{billingDetails.zipCode})
              </p>
              <p>
                <strong>Phone : </strong> {billingDetails.phone}
              </p>
              <p>
                <strong>Email Address : </strong> {billingDetails.emailAddress}
              </p>
              <p>
                <strong>Additional Information : </strong>
                {billingDetails.additionalInformation}
              </p>
            </div>
          
          <div className='border-t'>
            <h3 className='text-xl font-semibold mt-6 mb-4'>Cart Items</h3>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className='flex justify-between items-center mb-4 border-t pt-4 mt-4'
              >
                <div className='flex items-center'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-16 h-16 rounded mr-4'
                  />
                  <div>
                    <h3 className='text-lg'>{item.name}</h3>
                    <p>Size: {item.selectedSize}</p>
                    <p>
                      Color:{' '}
                      <span
                        className='inline-block w-4 h-4 rounded-full'
                        style={{
                          backgroundColor: item.selectedColor,
                          verticalAlign: 'middle',
                        }}
                      ></span>
                    </p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <p className='font-bold'>Rp. {item.price * item.quantity}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-between border-t pt-4 mt-4'>
            <span className='font-semibold'>Total:</span>
            <span className='font-bold'>Rp. {total}</span>
          </div>

          <div className='flex justify-center items-center  border-t p-4 mt-4'>
            <button className='fill'>Payment</button>
          </div>

        </div>
      </div>
    
  )
}

export default DetailsOrder

