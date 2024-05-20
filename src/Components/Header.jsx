import React from 'react'
import account from '../image/icon/account.svg'
import cart from '../image/icon/cart.svg'
import heart from '../image/icon/heart.svg'
import search from '../image/icon/search.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-red-400'>
      <div className='flex flex-row justify-between container mx-auto items-center h-[80px] '>
        <h1 className='text-[32px]'> Furniro. </h1>
        <nav className='flex flex-row w-[430px] justify-between'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Shop'>Shop</NavLink>
          <NavLink to='/About'>About</NavLink>
          <NavLink to='/Contact'>Contact</NavLink>
        </nav>
        <div className='flex flex-row gap-11'>
          <img src={account}/>
          <img src={cart}/>
          <img src={heart}/>
          <img src={search}/>
        </div>
      </div>
    </header>
  )
}

export default Header
