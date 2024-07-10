import React, { useContext } from 'react'
import { CartContext } from '../Cart/CartContex'
import { OrderContext } from './OrderContext'
import { useForm } from 'react-hook-form'

const CheckoutProduct = ({ togglePopup }) => {
  const { cartItems } = useContext(CartContext)
  const { setOrder } = useContext(OrderContext)

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data) => {
    const orderDetails = {
      billingDetails: data,
      cartItems,
      total: calculateSubtotal()
    };
    setOrder(orderDetails)
    togglePopup()
   
  };

  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start  gap-[26px] mt-[63px]'>
        <div className='lg:w-[608px] flex flex-col gap-9'>
          <h1>Billing details</h1>

          <form onSubmit={handleSubmit(onSubmit)} className='formbilling'>
            <div className='flex flex-col lg:flex-row gap-5'>
              <label>
                <h5>First Name</h5>
                <input
                  {...register('firstName', { required: 'This is required',
                    minLength: {
                      value: 3,
                      message: "Minimum 3 characters required",
                    },
                   })}
                  className='!w-[212px] md:!w-[300px] lg:!w-[212px]'

                />
                <p>{errors.firstName?.message.minLength}</p>
              </label>

              <label>
                <h5>Last Name</h5>
                <input
                  {...register('lastName', { required: 'This is required',
                    minLength: 3,
                    message: 'Name must be at least 3 characters long',
                   })}
                  className='!w-[212px] md:!w-[300px] lg:!w-[212px]'
                />
                <p>{errors.lastName?.message}</p>
              </label>
            </div>
            <label>
              <h5>Company Name(optional)</h5>
              <input {...register('companyName')} />
            </label>

            <label>
              <h5>Street Address</h5>
              <input
                {...register('streetAddress', { required: 'This is required',
                  minLength: 5,
                  message: 'Street address must be at least 5 characters long',
                 })}
              />
              <p>{errors.streetAddress?.message}</p>
            </label>

            <label>
              <h5>Town/City</h5>
              <input
                {...register('townCity', { required: 'This is required',
                  minLength: 3,
                  message: 'Town/City must be at least 3 characters long',
                 })}
              />
              <p>{errors.townCity?.message}</p>
            </label>

            <label>
              <h5>Province</h5>
              <input
                {...register('province', { required: 'This is required',
                  minLength: 2,
                  message: 'Province must be at least 2 characters long',
                 })}
              />
              <p>{errors.province?.message}</p>
            </label>

            <label>
              <h5>ZIP Code</h5>
              <input
                {...register('zipCode', { required: 'This is required',
                  minLength: 5,
                  message: 'Zipcode must be at least 5 characters long',
                 })}
              />
              <p>{errors.zipcode?.message}</p>
            </label>

            <label>
              <h5>Phone</h5>
              <input {...register('phone', { required: 'This is required',
                minLength: 10,
                message: 'Phone must be at least 10 characters long',
               })} />
              <p>{errors.phone?.message}</p>
            </label>

            <label>
              <h5>Email Address</h5>
              <input
                {...register('emailAddress', { required: 'This is required',
                  minLength: 5,
                  message: 'Email address must be at least 5 characters long',
                 })}
              />
              <p>{errors.emailAddress?.message}</p>
            </label>

            <label>
              <input
                {...register('additionalInformation', {
                  required: 'This is required',
                })}
                placeholder='Additional Information'
              />
            </label>

          </form>
        </div>

        <div className='lg:w-[608px]'>
          <h2 className="text-2xl font-semibold mb-6">Product</h2>
          <div className="flex justify-between mb-4 border-b pb-2">
            <span className="font-semibold">Product</span>
            <span className="font-semibold">Subtotal</span>
          </div>
          {cartItems.length > 0 && cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded mr-4"
                />
                <div>
                  <h3 className="text-lg">{item.name}</h3>
                  <p>Size: {item.selectedSize}</p>
                  <p>
                    Color:{' '}
                    <span
                      className="inline-block w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: item.selectedColor,
                        verticalAlign: 'middle',
                      }}
                    ></span>
                  </p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <p className="font-bold">Rp. {item.price * item.quantity}</p>
            </div>
          ))}

          {cartItems.length > 0 && (
            <>
              <div className="flex justify-between border-t pt-4 mt-4">
                <span className="font-semibold">Subtotal:</span>
                <span className="font-bold">Rp. {calculateSubtotal()}</span>
              </div>
              <div className="flex justify-between border-t pt-4 mt-4">
                <span className="font-semibold">Total:</span>
                <span className="text-primary font-bold text-xl">Rp. {calculateSubtotal()}</span>
              </div>

              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className={`font-bold py-3 px-6 rounded-lg mt-6 w-full ${!isValid ? 'bg-gray-500 cursor-not-allowed' : 'bg-primary text-white '}`}
                disabled={!isValid}
              >
                Place order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
