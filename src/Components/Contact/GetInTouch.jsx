import React from 'react'
import { IoLocationSharp, IoTime } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { useForm } from 'react-hook-form'

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (datacontact) => console.log(datacontact)

  return (
    <div className='flex flex-col gap-[82px] justify-center items-center'>
      <div className='mt-[98px] flex flex-col gap-2 '>
        <h1 className='text-center'>Get In Touch With Us</h1>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className='flex flex-row gap-[105px]'>
        <div className='flex flex-col gap-[42px]'>
          <div className='flex flex-row gap-[31px]'>
            <IoLocationSharp size={40} />
            <div className='w-[212px]'>
              <h3>Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className='flex flex-row gap-[31px]'>
            <FaPhoneAlt size={40} />
            <div className='w-[212px]'>
              <h3>Phone</h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className='flex flex-row gap-[31px]'>
            <IoTime size={40} />
            <div className='w-[212px]'>
              <h3>Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)} className='formbilling'>
            <label>
              <h5>Your Name</h5>
              <input
                {...register('name', { required: 'This is required' })}
                className='border border-black'
                placeholder='Abc'
              />
              <p>{errors.name?.message}</p>
            </label>
            <label>
              <h5>Email Address</h5>
              <input
                {...register('emailAddress', { required: 'This is required' })}
                className='border border-black'
                placeholder='Abc@def.com'
              />
              <p>{errors.emailAddress?.message}</p>
            </label>
            <label>
              <h5>Subject</h5>
              <input
                {...register('subject', { required: 'This is required' })}
                className='border border-black'
                placeholder='This is an optional'
              />
              <p>{errors.subject?.message}</p>
            </label>
            <label>
              <h5>Message</h5>
              <input
                {...register('message', { required: 'This is required' })}
                className='border border-black'
                placeholder='Hi! i’d like to ask about'
              />
              <p>{errors.message?.message}</p>
              <button className='fill mt-[49px] rounded-md'>Submit</button>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
