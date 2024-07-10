import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPages = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2>Sorry</h2>
      <h3>
      Sorry, this page is not yet available</h3>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default NotFoundPages
