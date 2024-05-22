import React, { useState } from 'react'
import account from '../image/icon/account.svg'
import cart from '../image/icon/cart.svg'
import heart from '../image/icon/heart.svg'
import search from '../image/icon/search.svg'
import list from '../image/icon/list.svg'
import close from '../image/icon/close.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className='sticky top-0 bg-white/80 px-5 z-50'>
      <div className='flex flex-row justify-between container mx-auto items-center h-[80px] '>
        <h1 className='text-[32px]'> Furniro. </h1>
        <nav className='hidden lg:flex lg:flex-row w-[430px] justify-between h-6'>
          <NavLink to='/' className="hover:border-b-4 hover:border-primary ">Home</NavLink>
          <NavLink to='/Shop' className="hover:border-b-4 hover:border-primary ">Shop</NavLink>
          <NavLink to='/About' className="hover:border-b-4 hover:border-primary ">About</NavLink>
          <NavLink to='/Contact' className="hover:border-b-4 hover:border-primary ">Contact</NavLink>
        </nav>
        <div className='hidden lg:flex lg:flex-row gap-11'>
          <img src={account}/>
          <img src={search}/>
          <img src={heart}/>
          <img src={cart}/>
        </div>
        <img src={menuOpen ? close : list} alt='menu' className='lg:hidden h-10' onClick={toggleMenu} />
      </div>
      
      {menuOpen && (
        <div className='flex flex-col lg:hidden bg-white/80 absolute top-[80px] left-0 w-full'>
          <nav className='flex flex-col '>
            <NavLink to='/' onClick={toggleMenu} className='py-2 px-5 border-b hover:bg-white'>Home</NavLink>
            <NavLink to='/Shop' onClick={toggleMenu} className='py-2 px-5 border-b hover:bg-white'>Shop</NavLink>
            <NavLink to='/About' onClick={toggleMenu} className='py-2 px-5 border-b hover:bg-white'>About</NavLink>
            <NavLink to='/Contact' onClick={toggleMenu} className='py-2 px-5 hover:bg-white'>Contact</NavLink>
          </nav>
          <div className='flex flex-row gap-11 justify-center py-5'>
            <img src={account} alt='account' />
            <img src={search} alt='search' />
            <img src={heart} alt='heart' />
            <img src={cart} alt='cart' />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
