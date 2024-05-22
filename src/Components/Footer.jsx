import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-col py-12 px-4 md:px-24 divide-y divide-[#D9D9D9] border-t mt-10'>
      <div className='[&>*]:space-y-[50px] flex flex-col lg:flex-row justify-between mb-12 gap-x-5 gap-10'>
        <div className='md:w-[290px] '>
          <h1>Funiro.</h1>
          <p className='text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-[#9F9F9F]'>Links</h5>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-[#9F9F9F]'>Help</h5>
          <NavLink to='/payment'>Payment Options</NavLink>
          <NavLink to='/returns'>Returns</NavLink>
          <NavLink to='/privacy'>Privacy  Policies</NavLink>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-[#9F9F9F]'>Newsletter</h5>
          <form className='flex flex-row gap-[11px]'>
            <input 
            type='text'
            placeholder='Enter your email address'
            className='w-[200px] h-6 border-b-2 border-[#9F9F9F] outline-none font-normal text-[14px]'
            />
            <button className='w-[75px] h-6 border-b-2 border-[#9F9F9F] outline-none font-medium text-[14px]'>SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className='pt-12'>
        <p>2024 Furino. Made by Bintang. Design by aashifasheikh12</p>
      </div>
    </footer>
  )
}

export default Footer
